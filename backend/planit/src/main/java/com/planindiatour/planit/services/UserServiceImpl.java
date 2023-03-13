package com.planindiatour.planit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.planindiatour.planit.dao.UserDao;
import com.planindiatour.planit.dto.LoginDTO;
import com.planindiatour.planit.dto.UserDTO;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.planindiatour.planit.model.User;
import com.planindiatour.planit.response.LoginResponse;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public User signup(UserDTO userDTO) {
		User user = new User(

				userDTO.getId(), userDTO.getFullname(), userDTO.getEmail(), userDTO.getContact(), userDTO.getUsername(),
				this.passwordEncoder.encode(userDTO.getPassword()));
		userDao.save(user);
		return user;

	}
//	UserDTO userDTO;

//	@Override
//	public User signup(User user) {
//		userDao.save(user);
//		this.passwordEncoder.encode(user.getPassword());
//		return user;
//	}

	@Override
	public List<User> getUsers() {

		return userDao.findAll();
	}

	@Override
	public User getUser(long userId) {
//		return userDao.getOne(userId);
		return userDao.findById(userId).get();
	}

	@Override
	public User updateUser(User user) {
		userDao.save(user);
		return user;
	}

	@Override
	public User deleteUser(long userId) {
		User user = userDao.findById(userId).get();
//		User user = userDao.getOne(parseLong);
		userDao.delete(user);
		return null;

	}

	@Override
	public LoginResponse loginUser(LoginDTO loginDTO) {

		String msg = "";
        User employee1 = userDao.findByEmail(loginDTO.getEmail());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
//            if (isPwdRight)
            if(encodedPassword!=null)
            {
            	
                Optional<User> employee = userDao.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } 
            else {

                return new LoginResponse("Password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }

	}
}
