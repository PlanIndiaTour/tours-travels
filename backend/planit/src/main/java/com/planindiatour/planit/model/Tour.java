package com.planindiatour.planit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tour {
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;
		private String title;
		private String description;
		private String itinerary;
		private int price;
		private String days;
		
		
		public Tour(long id, String title, String description, String itinerary, int price, String days) {
			super();
			this.id = id;
			this.title = title;
			this.description = description;
			this.itinerary=itinerary;
			this.price = price;
			this.days = days;
		}

		public Tour() {
		}
		
		@Override
		public String toString() {
			return "Tour [id=" + id + ", title=" + title + ", description=" + description + ", itinerary=" + itinerary
					+ ", price=" + price + ", days=" + days + "]";
		}
		
		public long getId() {
			return id;
		}
		public void setId(long id) {
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
		public String getItinerary() {
			return itinerary;
		}
		public void setItinerary(String itinerary) {
			this.itinerary = itinerary;
		}
		public int getPrice() {
			return price;
		}
		public void setPrice(int price) {
			this.price = price;
		}
		public String getDays() {
			return days;
		}
		public void setDays(String days) {
			this.days = days;
		}
		
}

