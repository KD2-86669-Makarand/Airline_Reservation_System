package com.example.demo.dto;

import java.time.LocalDate;

import com.example.demo.entity.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


public class UserRespDTO extends BaseDTO {
	private String firstName;
	private String lastName;
	private LocalDate dob;
	private double regAmount;
	private UserRole role;

}
