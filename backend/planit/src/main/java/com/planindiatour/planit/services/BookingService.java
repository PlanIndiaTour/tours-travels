package com.planindiatour.planit.services;

import java.util.List;

import com.planindiatour.planit.model.Booking;

public interface BookingService {

	public List<Booking> getBookings();
	
	public Booking getBooking(long bookingId);
	
	public Booking addBooking (Booking booking);
	
//	public Booking updateBooking (Booking booking);
	
	public Booking deleteBooking(long bookingId);
	
}
