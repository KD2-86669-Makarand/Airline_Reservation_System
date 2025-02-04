package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.AirlineDao;
import com.example.demo.dto.AddAircraftDTO;
import com.example.demo.dto.AircraftDTO;
import com.example.demo.dto.AirlineDTO;
import com.example.demo.dto.AirlineDTO.Status;
import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.FlightDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRespDTO;
import com.example.demo.entity.Airlines;
import com.example.demo.entity.Flight;
import com.example.demo.services.AdminService;
import com.example.demo.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/flight")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	@Autowired
	private AdminService flightService;
	
	@Autowired
	private AirlineDao airlineDao;
	
	@Autowired 
	ModelMapper modelmapper;
	
	
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
	public ResponseEntity<ApiResponse> addAircraft(@RequestBody AddAircraftDTO aircraft)
	{
		try {
			ApiResponse apiResponse = flightService.addAircraft(aircraft);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(apiResponse);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	@PostMapping("/deleteAirline")
	public ResponseEntity<ApiResponse> deleteAirline(@RequestBody AirlineDTO airlineDTO) {
	    try {
	        Optional<Airlines> airline = airlineDao.findById(airlineDTO.getAirlineId());
	        
	        if (airline.isPresent()) {
	            airlineDao.delete(airline.get());
	            return ResponseEntity.status(HttpStatus.NO_CONTENT)
	                    .body(new ApiResponse("Airline deleted successfully"));
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                    .body(new ApiResponse("Airline not found"));
	        }
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
	                .body(new ApiResponse(e.getMessage()));
	    }
	}
	
	@PutMapping("/softDeleteAirline/{id}")
	public ResponseEntity<ApiResponse> softDeleteAirline(@PathVariable Long id) {
	    try {
	        Optional<Airlines> airline = airlineDao.findById(id);
	        
	        if (airline.isPresent()) {
	            Airlines updatedAirline = airline.get();
	            updatedAirline.setStatus(Airlines.Status.INACTIVE); // Soft delete by setting status to INACTIVE
	            airlineDao.save(updatedAirline); // Save updated airline
	            return ResponseEntity.ok(new ApiResponse("Airline soft deleted"));
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                                 .body(new ApiResponse("Airline not found"));
	        }
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
	                             .body(new ApiResponse("Error: " + e.getMessage()));
	    }
	}

	
	@PutMapping("/updateAirline/{id}")
	public ResponseEntity<Airlines> updateAirline(@PathVariable Long id, @RequestBody Airlines updatedAirline) {
	    System.out.println("Received Update Request for ID: " + id);
	    System.out.println("Updated Data: " + updatedAirline);

	    Optional<Airlines> existingAirline = airlineDao.findById(id);
	    if (existingAirline.isPresent()) {
	        Airlines airline = existingAirline.get();
	        airline.setAirlineName(updatedAirline.getAirlineName());
	        airline.setAirlineCode(updatedAirline.getAirlineCode());
	        airline.setCountry(updatedAirline.getCountry());
	        airline.setStatus(updatedAirline.getStatus());

	        Airlines savedAirline = airlineDao.save(airline);
	        return ResponseEntity.ok(savedAirline);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
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
	
	@GetMapping("/getAirline/{id}")
	public ResponseEntity<ApiResponse> getAirlineById(@PathVariable Long id) {
	    ApiResponse response = flightService.getAirlineById(id);
	    if (response.getMessage().equals("Airline not found")) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
	    }
	    return ResponseEntity.ok(response);
	}
	
	@GetMapping("/getAllAircraft")
    public ResponseEntity<List<AircraftDTO>> getAllAircraft() {
        List<AircraftDTO> aircraftList = flightService.getAllAircraft();
        if (aircraftList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(aircraftList);
    }
	
	@GetMapping("/getAllAirline")
    public ResponseEntity<List<AirlineDTO>> getAllAirlines() {
        List<AirlineDTO> airlineList = flightService.getAllAirlines();
        if (airlineList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(airlineList);
    }
	
	@GetMapping("/getAllFlight")
	public ResponseEntity<List<FlightDTO>> getAllFlights()
	{
		List<FlightDTO> flights = flightService.getAllFlights();
		if(flights.isEmpty())
		{
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		return ResponseEntity.ok(flights);
	}
	
}