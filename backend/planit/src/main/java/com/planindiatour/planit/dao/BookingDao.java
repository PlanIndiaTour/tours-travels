package com.planindiatour.planit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planindiatour.planit.model.Booking;

public interface BookingDao extends JpaRepository<Booking, Long> {

}
