package com.planindiatour.planit.controller;

	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RestController;

import com.planindiatour.planit.model.Booking;
import com.planindiatour.planit.services.BookingService;

	@RestController
	@CrossOrigin
	public class BookingController {

		@Autowired
		private BookingService bookingService;

//		 to get bookings
		@GetMapping("/bookings")
		public List<Booking> getBookings() {
			return this.bookingService.getBookings();
		}

		// to get single booking - bookings/id
		@GetMapping("/bookings/{bookingId}")
		public Booking getBooking(@PathVariable String bookingId) {
			return this.bookingService.getBooking(Long.parseLong(bookingId));
		}

		// to add booking
		@PostMapping("/booktour")
		public Booking addBooking(@RequestBody Booking booking) {
			return this.bookingService.addBooking(booking);
		}

//		// to update booking
//		@PutMapping("/booking")
//		public Booking updateBooking(@RequestBody Booking booking) {
//			return this.bookingService.updateBooking(booking);
//		}

		// to delete booking
		@DeleteMapping("/booking/{bookingId}")
		public Booking deleteBooking(@PathVariable String bookingId) {
			return this.bookingService.deleteBooking(Long.parseLong(bookingId));
		}

	}

