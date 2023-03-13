package com.planindiatour.planit.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planindiatour.planit.model.Destination;

public interface DestinationDao  extends JpaRepository<Destination, Long>{

	
}
