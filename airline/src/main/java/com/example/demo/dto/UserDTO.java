package com.example.demo.dto;

import java.time.LocalDate;


import com.example.demo.entity.UserRole;
import com.example.demo.entity.UserEntity.Status;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class UserDTO extends BaseDTO {
	@Column(name = "first_name", length = 20) 
	private String firstName;
	@Column(name = "last_name", length = 20) 
	private String lastName;
	@Column(length = 25, unique = true) 
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	private LocalDate dob;
	
	@Enumerated(EnumType.STRING) 
	
	@Column(length = 30) 
	private UserRole role;
	
	private Status status;
}
