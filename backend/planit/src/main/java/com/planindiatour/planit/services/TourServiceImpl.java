package com.planindiatour.planit.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.planindiatour.planit.dao.TourDao;
import com.planindiatour.planit.model.Tour;


@Service
public class TourServiceImpl implements TourService {
	
	@Autowired
	private TourDao tourDao;
	
	@Override
	public List<Tour> getTours() {
		return tourDao.findAll();
	}

	@Override
	public Tour getTour(long tourId) {
		return tourDao.findById(tourId).get();
	}

	@Override
	public Tour addTour(Tour tour) {
		tourDao.save(tour);
		return tour;
	}

	@Override
	public Tour updateTour(Tour tour) {
		tourDao.save(tour);
		return tour;
	}
	
	@Override
	public Tour deleteTour(long tourId) {
		Tour tour = tourDao.findById(tourId).get();
		tourDao.delete( tour);
		return null;
	}
}
