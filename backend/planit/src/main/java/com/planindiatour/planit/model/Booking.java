package com.planindiatour.planit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;
		private String name;
		private String email;
		private int number;
		private int adult;
		private int children;
		private String date;
		private String tourname;
		
		
		public Booking(long id, String name, String email, int number, int adult, int children, String date,
				String tourname) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.number = number;
			this.adult = adult;
			this.children = children;
			this.date = date;
			this.tourname = tourname;
		}


		public Booking() {
		}


		@Override
		public String toString() {
			return "Booking [id=" + id + ", name=" + name + ", email=" + email + ", number=" + number + ", adult="
					+ adult + ", children=" + children + ", date=" + date + ", tourname=" + tourname + "]";
		}


		public long getId() {
			return id;
		}


		public void setId(long id) {
			this.id = id;
		}


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		public int getNumber() {
			return number;
		}


		public void setNumber(int number) {
			this.number = number;
		}


		public int getAdult() {
			return adult;
		}


		public void setAdult(int adult) {
			this.adult = adult;
		}


		public int getChildren() {
			return children;
		}


		public void setChildren(int children) {
			this.children = children;
		}


		public String getDate() {
			return date;
		}


		public void setDate(String date) {
			this.date = date;
		}


		public String getTourname() {
			return tourname;
		}


		public void setTourname(String tourname) {
			this.tourname = tourname;
		}
		
		
}

