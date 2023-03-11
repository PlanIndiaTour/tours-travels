package com.planindiatour.planit.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.planindiatour.planit.dto.LoginDTO;
import com.planindiatour.planit.dto.UserDTO;
import com.planindiatour.planit.model.User;
import com.planindiatour.planit.response.LoginResponse;
import com.planindiatour.planit.services.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<?>LoginUser(@RequestBody LoginDTO loginDTO) {
		LoginResponse loginResponse= userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
	
	@PostMapping("/user")
	public User signup(@RequestBody UserDTO userDTO) {
		return this.userService.signup(userDTO);
	}
	
	

	@GetMapping("/users")
	public List<User> getUsers() {
		return this.userService.getUsers();
	}

	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable String userId) {
		return this.userService.getUser(Long.parseLong(userId));
	}

	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return this.userService.updateUser(user);
	}

	@DeleteMapping("/user/{userId}")
	public User deleteUser(@PathVariable String userId) {
		return this.userService.deleteUser(Long.parseLong(userId));
	}
}
