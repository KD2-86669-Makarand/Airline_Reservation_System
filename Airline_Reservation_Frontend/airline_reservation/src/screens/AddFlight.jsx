import React, { useState, useEffect } from "react";
import axios from "axios";

const FlightAdd = () => {
  const [airlines, setAirlines] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);
  const [airports, setAirports] = useState([]);
  const [newFlight, setNewFlight] = useState({
    airlineId: "",
    aircraftId: "",
    originAirport: "",
    destinationAirport: "",
    distance: "",
    departureTime: "",
    arrivalTime: "",
    isDirect: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/flight/getAllAirline")
      .then((response) => setAirlines(response.data))
      .catch((error) => console.error("Error fetching airlines!", error));

    axios
      .get("http://localhost:8080/flight/getAllAircraft")
      .then((response) => setAircrafts(response.data))
      .catch((error) => console.error("Error fetching aircrafts!", error));

    axios
      .get("http://localhost:8080/flight/getAllAirports")
      .then((response) => setAirports(response.data))
      .catch((error) => console.error("Error fetching airports!", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFlight((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      !newFlight.airlineId ||
      !newFlight.aircraftId ||
      !newFlight.originAirport ||
      !newFlight.destinationAirport ||
      !newFlight.distance ||
      !newFlight.departureTime ||
      !newFlight.arrivalTime ||
      !newFlight.isDirect
    ) {
      alert("Please fill all fields before adding a new flight.");
      return;
    }

    axios
      .post("http://localhost:8080/flight/addFlight", newFlight)
      .then(() => {
        alert("Flight added successfully!");
        setNewFlight({
          airlineId: "",
          aircraftId: "",
          originAirport: "",
          destinationAirport: "",
          distance: "",
          departureTime: "",
          arrivalTime: "",
          isDirect: "",
        });
      })
      .catch((error) => console.error("Error adding flight!", error));
  };

  return (
    <div>
      <h2>Add New Flight</h2>
      <select
        name="airlineId"
        value={newFlight.airlineId}
        onChange={handleChange}
      >
        <option value="">Select Airline</option>
        {airlines.map((airline) => (
          <option key={airline.airlineId} value={airline.airlineId}>
            {airline.airlineName}
          </option>
        ))}
      </select>
      <select
        name="aircraftId"
        value={newFlight.aircraftId}
        onChange={handleChange}
      >
        <option value="">Select Aircraft</option>
        {aircrafts.map((aircraft) => (
          <option key={aircraft.aircraftId} value={aircraft.aircraftId}>
            {aircraft.aircraftModel}
          </option>
        ))}
      </select>
      <select
        name="originAirport"
        value={newFlight.originAirport}
        onChange={handleChange}
      >
        <option value="">Select Origin Airport</option>
        {airports.map((airport) => (
          <option key={airport.airportId} value={airport.airportId}>
            {airport.airportName}
          </option>
        ))}
      </select>
      <select
        name="destinationAirport"
        value={newFlight.destinationAirport}
        onChange={handleChange}
      >
        <option value="">Select Destination Airport</option>
        {airports.map((airport) => (
          <option key={airport.airportId} value={airport.airportId}>
            {airport.airportName}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="distance"
        value={newFlight.distance}
        onChange={handleChange}
        placeholder="Distance"
      />
      <input
        type="datetime-local"
        name="departureTime"
        value={newFlight.departureTime}
        onChange={handleChange}
        placeholder="Departure Time"
      />
      <input
        type="datetime-local"
        name="arrivalTime"
        value={newFlight.arrivalTime}
        onChange={handleChange}
        placeholder="Arrival Time"
      />
      <select
        name="isDirect"
        value={newFlight.isDirect}
        onChange={handleChange}
      >
        <option value="">Select Flight Type</option>
        <option value="Direct">Direct</option>
        <option value="Connected">Connected</option>
      </select>
      <button onClick={handleAdd}>Add Flight</button>
    </div>
  );
};

export default FlightAdd;
