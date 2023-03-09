package com.planindiatour.planit.services;

import java.util.List;

import com.planindiatour.planit.model.User;

public interface UserService {


	public List<User> getUsers();
	
	public User getUser(long userId);
	
	public User signup(User user);
	
	public User updateUser(User user);

	public User deleteUser(long userId);
	
//	public User deleteUser(long parseLong);
	
}
