package com.planindiatour.planit.services;

import java.util.List;

import com.planindiatour.planit.model.Destination;



public interface DestinationService  {
	

	public List<Destination> getDestinations();
	
	public Destination getDestination(long destinationId);
	
	public Destination addDestination(Destination destination);
	
	public Destination updateDestination(Destination destination);

	public Destination deleteDestination(long destinationId);


}
