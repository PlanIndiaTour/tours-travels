package com.planindiatour.planit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.planindiatour.planit.model.Review;
import com.planindiatour.planit.services.ReviewService;


@RestController
@CrossOrigin
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	@PostMapping("/review")
	public Review addReview(@RequestBody Review review) {
		return this.reviewService.addReview(review);
	}

	@GetMapping("/reviews")
	public List<Review> getReviews() {
		return this.reviewService.getReviews();
	}

	@GetMapping("/reviews/{reviewId}")
	public Review getReview(@PathVariable String reviewId) {
		return this.reviewService.getReview(Long.parseLong(reviewId));
	}

	@DeleteMapping("/review/{reviewId}")
	public Review deleteReview(@PathVariable String reviewId) {
		return this.reviewService.deleteReview(Long.parseLong(reviewId));
	}
}
