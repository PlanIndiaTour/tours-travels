package com.planindiatour.planit.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.planindiatour.planit.dao.BookingDao;
import com.planindiatour.planit.model.Booking;


@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private BookingDao bookingDao;

	@Override
	public List<Booking> getBookings() {
		return bookingDao.findAll();
	}

	@Override
	public Booking getBooking(long bookingId) {
		return bookingDao.findById(bookingId).get();
	}

	@Override
	public Booking addBooking(Booking booking) {
		bookingDao.save(booking);
		return booking;
	}

	

	@Override
	public Booking deleteBooking(long bookingId) {
		Booking booking = bookingDao.findById(bookingId).get();
		bookingDao.delete(booking);
		return null;
	}
	

}
