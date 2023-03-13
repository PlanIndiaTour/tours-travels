package com.planindiatour.planit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planindiatour.planit.model.Tour;

public interface TourDao extends JpaRepository<Tour, Long> {

}
