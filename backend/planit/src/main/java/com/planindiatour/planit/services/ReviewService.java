package com.planindiatour.planit.services;

import java.util.List;

import com.planindiatour.planit.model.Review;


public interface ReviewService {

	public List<Review> getReviews();
	
	public Review getReview(long reviewId);
	
	public Review addReview(Review review);

	public Review deleteReview(long reviewId);

	
}
