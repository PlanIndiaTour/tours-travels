package com.planindiatour.planit.dto;

public class UserDTO {
	private Long id;
	private String fullname;
	private String email;
	private String contact;
	private String username;
	private String password;

	public UserDTO() {
		super();

	}

	public UserDTO(Long id, String fullname, String email, String contact, String username, String password) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.email = email;
		this.contact = contact;
		this.username = username;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", fullname=" + fullname + ", email=" + email + ", contact=" + contact
				+ ", username=" + username + ", password=" + password + "]";
	}

}
