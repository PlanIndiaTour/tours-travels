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
import com.planindiatour.planit.model.Destination;
import com.planindiatour.planit.services.DestinationService;


@RestController
@CrossOrigin
public class DestinationController {
	
	@Autowired
	private DestinationService destinationService;
	
	@PostMapping("/destination")
	public Destination addDestination(@RequestBody Destination destination) {
		return this.destinationService.addDestination(destination);
	}
	
	@GetMapping("/destinations")
	public List<Destination> addDestinations() {
		return this.destinationService.getDestinations();
	}

	@GetMapping("/destinations/{destinationId}")
	public Destination addDestination(@PathVariable String destinationId) {
		return this.destinationService.getDestination(Long.parseLong(destinationId));
	}

	@PutMapping("/destination")
	public Destination updateDestination(@RequestBody Destination destination) {
		return this.destinationService.updateDestination(destination);
	}

	@DeleteMapping("/destination/{destinationId}")
	public Destination deleteDestination(@PathVariable String destinationId) {
		return this.destinationService.deleteDestination(Long.parseLong(destinationId));
	}
}
