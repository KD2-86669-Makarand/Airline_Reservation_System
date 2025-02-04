package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AircraftDTO;
import com.example.demo.dto.AirlineDTO;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.FlightDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entity.Flight;
import com.example.demo.services.AdminService;
import com.example.demo.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/flight")
public class AdminController {
	@Autowired
	private AdminService flightService;
	
	@PostMapping("/addAirline")
	public ResponseEntity<ApiResponse> addAirline(@RequestBody AirlineDTO airline)
	{
		try {
			ApiResponse apiResponse = flightService.addAirline(airline);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(apiResponse);
		}
		catch (Exception e) 
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	@PostMapping("/addAircraft")
	public ResponseEntity<ApiResponse> addAircraft(@RequestBody AircraftDTO aircraft)
	{
		try {
			ApiResponse apiResponse = flightService.addAircraft(aircraft);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(apiResponse);
		}
		catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	@PostMapping("/addFlight")
	public ResponseEntity<ApiResponse> addFlight(@RequestBody FlightDTO flight)
	{
		try {
			ApiResponse apiResponse = flightService.addFlight(flight);
			return ResponseEntity.status(HttpStatus.CREATED).body(apiResponse);
		}
		catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                               .body(new ApiResponse(e.getMessage()));
		}
	
	}
	
	
	
	
}