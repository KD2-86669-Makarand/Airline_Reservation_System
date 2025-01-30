package com.example.demo.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import com.example.demo.dao.FlightDao;
import com.example.demo.dao.AircraftDao;
import com.example.demo.dao.AirlineDao;
import com.example.demo.dao.AirportDao;
import com.example.demo.dto.AircraftDTO;
import com.example.demo.dto.AirlineDTO;
import com.example.demo.dto.AirportDTO;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.FlightDTO;
import com.example.demo.entity.Aircraft;
import com.example.demo.entity.Airlines;
import com.example.demo.entity.Airport;
import com.example.demo.entity.Flight;
import com.example.demo.entity.UserEntity;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private FlightDao flightDao;
	
	@Autowired
	private AirlineDao airlineDao;
	
	@Autowired
	private AircraftDao aircraftDao;
	
	@Autowired
	private AirportDao airportDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ApiResponse addFlight(FlightDTO flight) {
		Flight flightEntity = modelMapper.map(flight,Flight.class);
		Flight saveFlight = flightDao.save(flightEntity);
		return new ApiResponse("Added New Flight With Id = " + saveFlight.getFlightId());
	}

	@Override
	public ApiResponse addAirline(AirlineDTO airline) {
		Airlines airlines = modelMapper.map(airline, Airlines.class);
		Airlines saveAirlines = airlineDao.save(airlines);
		return new ApiResponse("Added new Airline With Id = " + saveAirlines.getAirlineId());
	}

	@Override
	public ApiResponse addAirport(AirportDTO airport) {
		Airport airports = modelMapper.map(airport, Airport.class);
		Airport saveAirports = airportDao.save(airports);
		return new ApiResponse("Added new Airline with Id = " + saveAirports.getAirportId());
	}

	@Override
	public ApiResponse addAircraft(AircraftDTO aircraft) {
			Aircraft aircrafts =  modelMapper.map(aircraft, Aircraft.class);
			Aircraft saveAircraft = aircraftDao.save(aircrafts);
			return new ApiResponse("Added new Aircraft With Id = " + saveAircraft.getAircraftId());
	}

}
