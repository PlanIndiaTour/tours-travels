package com.planindiatour.planit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Destination {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String title;
	private String description;
	private String city;
	private String citydescription;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCitydescription() {
		return citydescription;
	}
	public void setCitydescription(String citydescription) {
		this.citydescription = citydescription;
	}
	
	
	
	@Override
	public String toString() {
		return "Destination [id=" + id + ", title=" + title + ", description=" + description + ", city=" + city
				+ ", citydescription=" + citydescription + "]";
	}
	
	
	public Destination(Long id, String title, String description, String city, String citydescription) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.city = city;
		this.citydescription = citydescription;
	}
	
	
	public Destination() {
		super();
		// TODO Auto-generated constructor stub
	}
}
