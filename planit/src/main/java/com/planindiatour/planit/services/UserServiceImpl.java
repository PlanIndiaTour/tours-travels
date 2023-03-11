package com.planindiatour.planit.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.planindiatour.planit.dao.UserDao;
import com.planindiatour.planit.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public User signup(User user) {
		userDao.save(user);
		return user;
	}

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
		return user;

	}
}
