package com.planindiatour.planit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planindiatour.planit.model.Review;

public interface ReviewDao extends JpaRepository<Review, Long>{

}
