package com.example.demo.services;

import java.util.List;

import com.example.demo.dto.AircraftDTO;
import com.example.demo.dto.AirlineDTO;
import com.example.demo.dto.AirportDTO;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.FlightDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRespDTO;
import com.example.demo.entity.Airlines;

public interface AdminService {
	ApiResponse addFlight(FlightDTO flight);
	
	ApiResponse addAirline(AirlineDTO airline);
	
	ApiResponse addAircraft(AircraftDTO aircraft);
	
	ApiResponse addAirport(AirportDTO airport);

	ApiResponse editUser(Long id, UserDTO editProfile);
	
	public List<AirlineDTO> getAllAirlines();
	
}
