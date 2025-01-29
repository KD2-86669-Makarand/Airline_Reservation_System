package com.example.demo.dto;

import java.time.LocalDate;

import com.example.demo.entity.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class EditProfile 
{
	private String firstName;

	private String lastName;
	
	private String email;

	private String password;
	
	private UserRole role;

}
