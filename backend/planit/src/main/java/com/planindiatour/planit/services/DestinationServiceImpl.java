package com.planindiatour.planit.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.planindiatour.planit.dao.DestinationDao;
import com.planindiatour.planit.model.Destination;

@Service
public class DestinationServiceImpl implements DestinationService{

	@Autowired
	private DestinationDao destinationDao;
	
	@Override
	public List<Destination> getDestinations() {
	
		return destinationDao.findAll();
	}

	@Override
	public Destination getDestination(long destinationId) {
		
		return destinationDao.findById(destinationId).get();
	}

	@Override
	public Destination addDestination(Destination destination) {
		destinationDao.save(destination);
		return destination;
	}

	@Override
	public Destination updateDestination(Destination destination) {
		destinationDao.save(destination);
		return destination;
	}

	@Override
	public Destination deleteDestination(long destinationId) {
		Destination destination = destinationDao.findById(destinationId).get();
		destinationDao.delete(destination);
		return null;
	}

}
