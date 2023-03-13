package com.planindiatour.planit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Review {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String date;
	private String reviewtext;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getReviewtext() {
		return reviewtext;
	}
	public void setReviewtext(String reviewtext) {
		this.reviewtext = reviewtext;
	}
	@Override
	public String toString() {
		return "Review [id=" + id + ", name=" + name + ", date=" + date + ", reviewtext=" + reviewtext + "]";
	}
	public Review(Long id, String name, String date, String reviewtext) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.reviewtext = reviewtext;
	}
	public Review() {
	}

	
	
	
}
