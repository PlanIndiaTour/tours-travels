package com.planindiatour.planit.services;

import java.util.List;
import com.planindiatour.planit.model.Tour;

public interface TourService {

	public List<Tour> getTours();
	
	public Tour getTour(long tourId);
	
	public Tour addTour (Tour tour);
	
	public Tour updateTour (Tour tour);
	
	public Tour deleteTour(long tourId);
	
}
