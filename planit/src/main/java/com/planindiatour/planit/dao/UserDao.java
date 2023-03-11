	package com.planindiatour.planit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planindiatour.planit.model.User;

public interface UserDao extends JpaRepository<User, Long> {

}
