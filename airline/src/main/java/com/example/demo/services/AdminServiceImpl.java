package com.example.demo.services;

import java.time.Duration;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import com.example.demo.dao.FlightDao;
import com.example.demo.dao.ScheduleDao;
import com.example.demo.dao.UserDao;
import com.example.demo.custom_exception.ApiException;
import com.example.demo.dao.AircraftDao;
import com.example.demo.dao.AirlineDao;
import com.example.demo.dao.AirportDao;
import com.example.demo.dao.EditDao;
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
import com.example.demo.entity.Airlines.Status;
import com.example.demo.entity.Airport;
import com.example.demo.entity.Flight;
import com.example.demo.entity.Schedule;
import com.example.demo.entity.UserEntity;
import com.example.demo.entity.UserRole;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private FlightDao flightDao;
	
	@Autowired
	private AirlineDao airlineDao;
	
	@Autowired
	private AircraftDao aircraftDao;
	
	
	
	@Autowired
	private AirportDao airportDao;
	
	@Autowired
	private EditDao editDao;
	
	@Autowired 
	private ScheduleDao scheduleDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ApiResponse addFlight(FlightDTO flight) {
		
		Airlines airlines = airlineDao.findById(flight.getAirline())
				.orElseThrow(() -> new RuntimeException("Airline not found for Id = " + flight.getAirline()));
		
		Aircraft aircraft = aircraftDao.findById(flight.getAircraftId())
				.orElseThrow(() -> new RuntimeException("Aircraft not found for Id = " + flight.getAircraftId()));
		
		Airport originAirport = airportDao.findById(flight.getOrigineAirport())
	            .orElseThrow(() -> new RuntimeException("Origin airport not found for Id = " + flight.getOrigineAirport()));

		Airport destinationAirport = airportDao.findById(flight.getDestinationAirport())
	            .orElseThrow(() -> new RuntimeException("Destination airport not found for Id: " + flight.getDestinationAirport()));
		System.out.println("destination airport : " + destinationAirport);
		Duration duration = Duration.between(flight.getDepartureTime(), flight.getArrivalTime());

		
		Flight flights = new Flight();
		
		flights.setAirline(airlines);
		flights.setAircraftId(aircraft);
		flights.setOrigineAirport(originAirport);
		flights.setDestinationAirport(destinationAirport);
		flights.setDistance(flight.getDistance());
		flights.setDirect(true);
		flights.setDuration(duration.toHours());
		
		System.out.println("flight : " + flights);
	    
		Flight saveFlight = flightDao.save(flights);
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

//	@Override
//	public ApiResponse addAircraft(AircraftDTO aircraftDTO) {
//	    // Fetch the airline entity using the airline ID from the DTO
//	    Airlines airline = airlineDao.findById(aircraftDTO.getAirline())
//	            .orElseThrow(() -> new RuntimeException("Airline not found with ID: " + aircraftDTO.getAirline()));
//
//	    Aircraft aircraft = new Aircraft();
//	    aircraft.setAirline(airline);
//	    aircraft.setAircraftModel(aircraftDTO.getAircraftModel());
//	    aircraft.setAircraftCapacity(aircraftDTO.getAircraftCapacity());
//
//	    // Save the new aircraft entity
//	    Aircraft savedAircraft = aircraftDao.save(aircraft);
//	    
//	    // Return a response indicating success
//	    return new ApiResponse("Added new Aircraft with ID = " + savedAircraft.getAircraftId());
//	}
	

	@Override
	public List<AirlineDTO> getAllAirlines() {
		return airlineDao.findAll().stream()
	            .map(airline -> modelMapper.map(airline, AirlineDTO.class))
	            .collect(Collectors.toList());
	}
	
//	@Override
//	public List<AirlineDTO> getAllAirlines() {
//	    List<Airlines> airlines = airlineDao.findAll();
//	    return airlines.stream()
//	            .map(airline -> {
//	                AirlineDTO dto = new AirlineDTO();
//	                dto.setId(airline.getAirlineId());
//	                dto.setAirlineName(airline.getAirlineName());
//	                dto.setAirlineCode(airline.getAirlineCode());
//	                dto.setCountry(airline.getCountry());
//	                dto.setStatus(AirlineDTO.Status.valueOf(airline.getStatus().name()));
//	                return dto;
//	            })
//	            .collect(Collectors.toList());
//	}

	@Override
	public ApiResponse getAirlineById(Long id) {
		Optional<Airlines> airline = airlineDao.findById(id);
		if (airline.isEmpty()) {
			return new ApiResponse("Airline not found");
		}
		AirlineDTO airlineDTO = modelMapper.map(airline.get(), AirlineDTO.class);
			return new ApiResponse("Success");
		    
	}

	@Override
	public ApiResponse updateAirline(Long airlineId, AirlineDTO airlineDto) {
		Airlines existingAirline = airlineDao.findById(airlineId)
	            .orElseThrow(() -> new RuntimeException("Airline not found for ID = " + airlineId));

	    // Update the airline details with the provided DTO data
	    existingAirline.setAirlineName(airlineDto.getAirlineName());
	    existingAirline.setAirlineCode(airlineDto.getAirlineCode());
	    existingAirline.setCountry(airlineDto.getCountry());

	    // Save the updated airline to the database
	    Airlines updatedAirline = airlineDao.save(existingAirline);

	    // Return a response indicating success
	    return new ApiResponse("Airline updated successfully with ID = " + updatedAirline.getAirlineId());
	}

	@Override
	public ApiResponse softDeleteAirline(Long airlineId, AirlineDTO airlineDto) {
		
		    // Find the airline by its ID
		    Airlines airline = airlineDao.findById(airlineId)
		        .orElseThrow(() -> new RuntimeException("Airline not found with ID: " + airlineId));

		    // Set the airline status to inactive
//		    airline.setStatus("inactive");  // Or if it's a boolean, use airline.setActive(false);
		    airline.setStatus(Status.INACTIVE);
		    // Save the airline with the updated status
		    Airlines updatedAirline = airlineDao.save(airline);

		    // Return a response indicating the airline status was successfully updated
		    return new ApiResponse("Airline with ID " + airlineId + " marked as inactive.");
		}


	@Override
	public List<AircraftDTO> getAllAircraft() {
	    return aircraftDao.findAll().stream()
	            .map(aircraft -> {
	                AircraftDTO dto = new AircraftDTO();
	                dto.setAircraftModel(aircraft.getAircraftModel());
	                dto.setAircraftCapacity(aircraft.getAircraftCapacity());
	                dto.setAirlineName(aircraft.getAirline().getAirlineName());
	               
	                return dto;
	                
	                
	            })
	            .collect(Collectors.toList());
	}

	@Override
	public ApiResponse addAircraft(AddAircraftDTO aircraft) {
		 // Fetch the airline entity using the airline ID from the DTO
	    Airlines airline = airlineDao.findById(aircraft.getAirline())
	            .orElseThrow(() -> new RuntimeException("Airline not found with ID: " + aircraft.getAirline()));

	    Aircraft aircrafts = new Aircraft();
	    aircrafts.setAirline(airline);
	    aircrafts.setAircraftModel(aircraft.getAircraftModel());
	    aircrafts.setAircraftCapacity(aircraft.getAircraftCapacity());

	    // Save the new aircraft entity
	    Aircraft savedAircraft = aircraftDao.save(aircrafts);
	    
	    // Return a response indicating success
	    return new ApiResponse("Added new Aircraft with ID = " + savedAircraft.getAircraftId());

	}

	@Override
	public List<FlightDTO> getAllFlights() {
		    return flightDao.findAll().stream()
		            .map(flight -> {
		                FlightDTO dto = new FlightDTO();
		                dto.setAirline(flight.getAirline().getAirlineId());
		                dto.setAircraftId(flight.getAircraftId().getAircraftId());
		                dto.setOrigineAirport(flight.getOrigineAirport().getAirportId());
		                dto.setDestinationAirport(flight.getDestinationAirport().getAirportId());
		                dto.setDistance(flight.getDistance());
		                dto.setDirect(flight.isDirect());

		                return dto;
		            })
		            .collect(Collectors.toList());
		}

}

