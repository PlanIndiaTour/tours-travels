package com.planindiatour.planit.services;

import java.util.List;


import com.planindiatour.planit.dto.LoginDTO;
import com.planindiatour.planit.dto.UserDTO;
import com.planindiatour.planit.model.User;
import com.planindiatour.planit.response.LoginResponse;

public interface UserService {


	public List<User> getUsers();
	
	public User getUser(long userId);
	
	public User signup(UserDTO userDTO);
	
	public User updateUser(User user);

	public User deleteUser(long userId);

	public LoginResponse loginUser(LoginDTO loginDTO);
	
//	public User deleteUser(long parseLong);
	
}
