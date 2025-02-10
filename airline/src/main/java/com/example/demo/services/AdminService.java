package com.example.demo.services;

import java.util.List;

import com.example.demo.dto.AddAircraftDTO;
import com.example.demo.dto.AircraftDTO;
import com.example.demo.dto.AirlineDTO;
import com.example.demo.dto.AirportDTO;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.FlightDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRespDTO;
import com.example.demo.entity.Aircraft;
import com.example.demo.entity.Airlines;

public interface AdminService {
	ApiResponse addFlight(FlightDTO flight);
	
	ApiResponse addAirline(AirlineDTO airline);
	
	ApiResponse addAircraft(AddAircraftDTO aircraft);
	
	ApiResponse addAirport(AirportDTO airport);
	
	public List<AircraftDTO> getAllAircraft();
	
	public List<AirlineDTO> getAllAirlines();
	
	ApiResponse getAirlineById(Long id);
	
	ApiResponse updateAirline(Long airlineId,AirlineDTO airlineDto);
	
	ApiResponse updateAircraft(Long aircraftId, AircraftDTO aircraftDTO);
	
	public ApiResponse softDeleteAirline(Long airlineId); 
	
	public List<FlightDTO> getAllFlights();
	
}
