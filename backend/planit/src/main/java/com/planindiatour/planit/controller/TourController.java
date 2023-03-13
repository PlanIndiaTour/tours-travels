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
	import com.planindiatour.planit.services.TourService;
	import com.planindiatour.planit.model.Tour;

	@RestController
	@CrossOrigin
	public class TourController {

		@Autowired
		private TourService tourService;

		// to get tours
		@GetMapping("/tours")
		public List<Tour> getTours() {
			return this.tourService.getTours();
		}

		// to get single tour - tours/id
		@GetMapping("/tours/{tourId}")
		public Tour getTour(@PathVariable String tourId) {
			return this.tourService.getTour(Long.parseLong(tourId));
		}

		// to add tour
		@PostMapping("/tour")
		public Tour addTour(@RequestBody Tour tour) {
			return this.tourService.addTour(tour);
		}

		// to update tour
		@PutMapping("/tour")
		public Tour updateTour(@RequestBody Tour tour) {
			return this.tourService.updateTour(tour);
		}

		// to delete tour
		@DeleteMapping("/tour/{tourId}")
		public Tour deleteTour(@PathVariable String tourId) {
			return this.tourService.deleteTour(Long.parseLong(tourId));
		}

	}

