	package com.planindiatour.planit.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planindiatour.planit.model.User;

public interface UserDao extends JpaRepository<User, Long> {

	 Optional<User> findOneByEmailAndPassword(String email, String password);
	 
	    User findByEmail(String email);
}
