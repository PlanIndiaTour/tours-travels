package com.planindiatour.planit.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.planindiatour.planit.dao.ReviewDao;
import com.planindiatour.planit.model.Review;

@Service
public class ReviewServiceImpl implements ReviewService  {

	@Autowired
	private ReviewDao reviewDao;
	
	@Override
	public List<Review> getReviews() {
		return reviewDao.findAll();
	}

	@Override
	public Review getReview(long reviewId) {
		return reviewDao.findById(reviewId).get();
	}

	@Override
	public Review addReview(Review review) {
		reviewDao.save(review);
		return review;
	}

	
	
	@Override
	public Review deleteReview(long reviewId) {
		Review review = reviewDao.findById(reviewId).get();
		reviewDao.delete( review);
		return null;
	}
	
}
