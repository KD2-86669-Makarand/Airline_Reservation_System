package com.example.demo.dto;

import java.time.LocalDate;

import com.example.demo.entity.UserRole;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class UserRespDTO extends BaseDTO {
	private String firstName;
	private String lastName;
	private LocalDate dob;
	
	private UserRole role;

}
