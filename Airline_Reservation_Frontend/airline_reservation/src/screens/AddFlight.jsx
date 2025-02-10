// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FlightAdd = () => {
//   const [airlines, setAirlines] = useState([]);
//   const [aircrafts, setAircrafts] = useState([]);
//   const [airports, setAirports] = useState([]);
//   const [newFlight, setNewFlight] = useState({
//     airlineId: "",
//     aircraftId: "",
//     originAirport: "",
//     destinationAirport: "",
//     distance: "",
//     departureTime: "",
//     arrivalTime: "",
//     isDirect: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/flight/getAllAirline")
//       .then((response) => setAirlines(response.data))
//       .catch((error) => console.error("Error fetching airlines!", error));

//     axios
//       .get("http://localhost:8080/flight/getAllAircraft")
//       .then((response) => setAircrafts(response.data))
//       .catch((error) => console.error("Error fetching aircrafts!", error));

//     axios
//       .get("http://localhost:8080/flight/getAllAirports")
//       .then((response) => setAirports(response.data))
//       .catch((error) => console.error("Error fetching airports!", error));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewFlight((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAdd = () => {
//     if (
//       !newFlight.airlineId ||
//       !newFlight.aircraftId ||
//       !newFlight.originAirport ||
//       !newFlight.destinationAirport ||
//       !newFlight.distance ||
//       !newFlight.departureTime ||
//       !newFlight.arrivalTime ||
//       !newFlight.isDirect
//     ) {
//       alert("Please fill all fields before adding a new flight.");
//       return;
//     }

//     axios
//       .post("http://localhost:8080/flight/addFlight", newFlight)
//       .then(() => {
//         alert("Flight added successfully!");
//         setNewFlight({
//           airlineId: "",
//           aircraftId: "",
//           originAirport: "",
//           destinationAirport: "",
//           distance: "",
//           departureTime: "",
//           arrivalTime: "",
//           isDirect: "",
//         });
//       })
//       .catch((error) => console.error("Error adding flight!", error));
//   };

//   return (
//     <div>
//       <h2>Add New Flight</h2>
//       <select
//         name="airlineId"
//         value={newFlight.airlineId}
//         onChange={handleChange}
//       >
//         <option value="">Select Airline</option>
//         {airlines.map((airline) => (
//           <option key={airline.airlineId} value={airline.airlineId}>
//             {airline.airlineName}
//           </option>
//         ))}
//       </select>
//       <select
//         name="aircraftId"
//         value={newFlight.aircraftId}
//         onChange={handleChange}
//       >
//         <option value="">Select Aircraft</option>
//         {aircrafts.map((aircraft) => (
//           <option key={aircraft.aircraftId} value={aircraft.aircraftId}>
//             {aircraft.aircraftModel}
//           </option>
//         ))}
//       </select>
//       <select
//         name="originAirport"
//         value={newFlight.originAirport}
//         onChange={handleChange}
//       >
//         <option value="">Select Origin Airport</option>
//         {airports.map((airport) => (
//           <option key={airport.airportId} value={airport.airportId}>
//             {airport.airportName}
//           </option>
//         ))}
//       </select>
//       <select
//         name="destinationAirport"
//         value={newFlight.destinationAirport}
//         onChange={handleChange}
//       >
//         <option value="">Select Destination Airport</option>
//         {airports.map((airport) => (
//           <option key={airport.airportId} value={airport.airportId}>
//             {airport.airportName}
//           </option>
//         ))}
//       </select>
//       <input
//         type="number"
//         name="distance"
//         value={newFlight.distance}
//         onChange={handleChange}
//         placeholder="Distance"
//       />
//       <input
//         type="datetime-local"
//         name="departureTime"
//         value={newFlight.departureTime}
//         onChange={handleChange}
//         placeholder="Departure Time"
//       />
//       <input
//         type="datetime-local"
//         name="arrivalTime"
//         value={newFlight.arrivalTime}
//         onChange={handleChange}
//         placeholder="Arrival Time"
//       />
//       <select
//         name="isDirect"
//         value={newFlight.isDirect}
//         onChange={handleChange}
//       >
//         <option value="">Select Flight Type</option>
//         <option value="Direct">Direct</option>
//         <option value="Connected">Connected</option>
//       </select>
//       <button onClick={handleAdd}>Add Flight</button>
//     </div>
//   );
// };

// export default FlightAdd;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminNavbar from "../Components/AdminNavbar";

// const AddFlight = () => {
//   const [airlines, setAirlines] = useState([]);
//   const [aircrafts, setAircrafts] = useState([]);
//   const [airports, setAirports] = useState([]);
//   const [flights, setFlights] = useState([]);
//   const [editFlightId, setEditFlightId] = useState(null);
//   const [editData, setEditData] = useState(null);

//   const [newFlight, setNewFlight] = useState({
//     airlineId: "",
//     aircraftId: "",
//     originAirport: "",
//     destinationAirport: "",
//     distance: "",
//     departureTime: "",
//     arrivalTime: "",
//     isDirect: "",
//   });

//   useEffect(() => {
//     fetchData();
//     fetchFlights();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const airlineRes = await axios.get(
//         "http://localhost:8080/flight/getAllAirline"
//       );
//       setAirlines(airlineRes.data);

//       const aircraftRes = await axios.get(
//         "http://localhost:8080/flight/getAllAircraft"
//       );
//       setAircrafts(aircraftRes.data);

//       const airportRes = await axios.get(
//         "http://localhost:8080/flight/getAllAirports"
//       );
//       setAirports(airportRes.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchFlights = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8080/flight/getAllFlight"
//       );
//       setFlights(response.data);
//     } catch (error) {
//       console.error("Error fetching flights:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewFlight((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAdd = () => {
//     if (
//       !newFlight.airlineId ||
//       !newFlight.aircraftId ||
//       !newFlight.originAirport ||
//       !newFlight.destinationAirport ||
//       !newFlight.distance ||
//       !newFlight.departureTime ||
//       !newFlight.arrivalTime ||
//       !newFlight.isDirect
//     ) {
//       alert("Please fill all fields before adding a new flight.");
//       return;
//     }

//     axios
//       .post("http://localhost:8080/flight/addFlight", newFlight)
//       .then(() => {
//         alert("Flight added successfully!");
//         fetchFlights();
//         setNewFlight({
//           airlineId: "",
//           aircraftId: "",
//           originAirport: "",
//           destinationAirport: "",
//           distance: "",
//           departureTime: "",
//           arrivalTime: "",
//           isDirect: "",
//         });
//       })
//       .catch((error) => console.error("Error adding flight:", error));
//   };

//   const handleEdit = (id) => {
//     const selectedFlight = flights.find((flight) => flight.flightId === id);
//     setEditData(selectedFlight);
//     setEditFlightId(id);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     axios
//       .put(
//         `http://localhost:8080/flight/updateFlight/${editData.flightId}`,
//         editData
//       )
//       .then(() => {
//         alert("Flight updated successfully!");
//         fetchFlights();
//         setEditFlightId(null);
//         setEditData(null);
//       })
//       .catch((error) => console.error("Error updating flight:", error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8080/flight/deleteFlight/${id}`)
//       .then(() => {
//         alert("Flight deleted successfully!");
//         fetchFlights();
//       })
//       .catch((error) => console.error("Error deleting flight:", error));
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <header>
//         <div class="logo">
//           <a href="UserList">Users</a>
//         </div>
//         <AdminNavbar />
//       </header>
//       <h2 className="text-xl font-bold mb-4">Add New Flight</h2>

//       {/* Airline Selection */}
//       <select
//         name="airlineId"
//         value={newFlight.airlineId}
//         onChange={handleChange}
//       >
//         <option value="">Select Airline</option>
//         {airlines.map((airline) => (
//           <option key={airline.airlineId} value={airline.airlineId}>
//             {airline.airlineName}
//           </option>
//         ))}
//       </select>

//       {/* Aircraft Selection */}
//       <select
//         name="aircraftId"
//         value={newFlight.aircraftId}
//         onChange={handleChange}
//       >
//         <option value="">Select Aircraft</option>
//         {aircrafts.map((aircraft) => (
//           <option key={aircraft.aircraftId} value={aircraft.aircraftId}>
//             {aircraft.aircraftModel}
//           </option>
//         ))}
//       </select>

//       {/* Origin Airport Selection */}
//       <select
//         name="originAirport"
//         value={newFlight.originAirport}
//         onChange={handleChange}
//       >
//         <option value="">Select Origin Airport</option>
//         {airports.map((airport) => (
//           <option key={airport.airportId} value={airport.airportId}>
//             {airport.airportName}
//           </option>
//         ))}
//       </select>

//       {/* Destination Airport Selection */}
//       <select
//         name="destinationAirport"
//         value={newFlight.destinationAirport}
//         onChange={handleChange}
//       >
//         <option value="">Select Destination Airport</option>
//         {airports.map((airport) => (
//           <option key={airport.airportId} value={airport.airportId}>
//             {airport.airportName}
//           </option>
//         ))}
//       </select>

//       <input
//         type="number"
//         name="distance"
//         value={newFlight.distance}
//         onChange={handleChange}
//         placeholder="Distance (km)"
//       />
//       <input
//         type="datetime-local"
//         name="departureTime"
//         value={newFlight.departureTime}
//         onChange={handleChange}
//       />
//       <input
//         type="datetime-local"
//         name="arrivalTime"
//         value={newFlight.arrivalTime}
//         onChange={handleChange}
//       />

//       <select
//         name="isDirect"
//         value={newFlight.isDirect}
//         onChange={handleChange}
//       >
//         <option value="">Select Flight Type</option>
//         <option value="true">Direct</option>
//         <option value="false">Connected</option>
//       </select>

//       <button onClick={handleAdd}>Add Flight</button>

//       <h2 className="text-xl font-bold mt-6">Existing Flights</h2>
//       <table border="2">
//         <thead>
//           <tr>
//             <th>Airline</th>
//             <th>Aircraft</th>
//             <th>Origin</th>
//             <th>Destination</th>
//             <th>Distance</th>
//             <th>Departure</th>
//             <th>Arrival</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {flights.map((flight) => (
//             <tr key={flight.flightId}>
//               {editFlightId === flight.flightId ? (
//                 <>
//                   <td>
//                     <input
//                       type="text"
//                       name="airline"
//                       value={editData.airline}
//                       onChange={handleEditChange}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="aircraft"
//                       value={editData.aircraft}
//                       onChange={handleEditChange}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="originAirport"
//                       value={editData.originAirport}
//                       onChange={handleEditChange}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="destinationAirport"
//                       value={editData.destinationAirport}
//                       onChange={handleEditChange}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       name="distance"
//                       value={editData.distance}
//                       onChange={handleEditChange}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="datetime-local"
//                       name="departureTime"
//                       value={editData.departureTime}
//                       onChange={handleEditChange}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="datetime-local"
//                       name="arrivalTime"
//                       value={editData.arrivalTime}
//                       onChange={handleEditChange}
//                     />
//                   </td>
//                   <td>
//                     <button onClick={handleSave}>Save</button>
//                   </td>
//                 </>
//               ) : (
//                 <>
//                   <td>{flight.airlineName}</td>
//                   <td>{flight.aircraftModel}</td>
//                   <td>{flight.originAirport}</td>
//                   <td>{flight.destinationAirport}</td>
//                   <td>{flight.distance}</td>
//                   <td>{flight.departureTime}</td>
//                   <td>{flight.arrivalTime}</td>
//                   <td>
//                     <button onClick={() => handleEdit(flight.flightId)}>
//                       Edit
//                     </button>
//                   </td>
//                   <td>
//                     <button onClick={() => handleDelete(flight.flightId)}>
//                       Delete
//                     </button>
//                   </td>
//                 </>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AddFlight;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminNavbar from "../Components/AdminNavbar";

// const AddFlight = () => {
//   const [airports, setAirports] = useState([]);
//   const [newFlight, setNewFlight] = useState({
//     distance: "",
//     duration: "",
//     is_direct: false,
//     aircraft_id: "",
//     airline_id: "",
//     destination_airport: "",
//     origin_airport: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/airport/getAll")
//       .then((response) => setAirports(response.data))
//       .catch((error) => console.error("Error fetching airports!", error));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewFlight((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <header>
//         <AdminNavbar />
//       </header>
//       <h2>ADD FLIGHT</h2>
//       <select
//         name="origin_airport"
//         value={newFlight.origin_airport}
//         onChange={handleChange}
//       >
//         <option value="">Select Origin Airport</option>
//         {airports.map((airport) => (
//           <option key={airport.airportId} value={airport.airportId}>
//             {airport.airportName} ({airport.airportCode})
//           </option>
//         ))}
//       </select>
//       <select
//         name="destination_airport"
//         value={newFlight.destination_airport}
//         onChange={handleChange}
//       >
//         <option value="">Select Destination Airport</option>
//         {airports.map((airport) => (
//           <option key={airport.airportId} value={airport.airportId}>
//             {airport.airportName} ({airport.airportCode})
//           </option>
//         ))}
//       </select>
//       <button onClick={() => console.log(newFlight)}>Add Flight</button>
//     </div>
//   );
// };

// export default AddFlight;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar";

const AddFlight = () => {
  const [airports, setAirports] = useState([]);
  const [newFlight, setNewFlight] = useState({
    flight_id: "",
    distance: "",
    duration: "",
    is_direct: true,
    aircraft_id: "",
    airline_id: "",
    destination_airport: "",
    origin_airport: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/airport/getAllAirport")
      .then((response) => setAirports(response.data))
      .catch((error) => console.error("Error fetching airports!", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewFlight((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/flight/addFlight", newFlight)
      .then((response) => console.log("Flight added successfully!", response))
      .catch((error) => console.error("Error adding flight!", error));
  };

  return (
    <div className="container mx-auto p-4">
      <header>
        <AdminNavbar />
      </header>
      <h2>ADD FLIGHT</h2>
      <input
        type="text"
        name="flight_id"
        value={newFlight.flight_id}
        onChange={handleChange}
        placeholder="Flight ID"
      />
      <input
        type="text"
        name="distance"
        value={newFlight.distance}
        onChange={handleChange}
        placeholder="Distance"
      />
      <input
        type="text"
        name="duration"
        value={newFlight.duration}
        onChange={handleChange}
        placeholder="Duration"
      />
      <label>
        Is Direct:{" "}
        <input
          type="checkbox"
          name="is_direct"
          checked={newFlight.is_direct}
          onChange={handleChange}
        />
      </label>
      <input
        type="text"
        name="aircraft_id"
        value={newFlight.aircraft_id}
        onChange={handleChange}
        placeholder="Aircraft ID"
      />
      <input
        type="text"
        name="airline_id"
        value={newFlight.airline_id}
        onChange={handleChange}
        placeholder="Airline ID"
      />
      <select
        name="origin_airport"
        value={newFlight.origin_airport}
        onChange={handleChange}
      >
        <option value="">Select Origin Airport</option>
        {airports.map((airport) => (
          <option key={airport.airportId} value={airport.airportId}>
            {airport.airportName} ({airport.airportCode})
          </option>
        ))}
      </select>
      <select
        name="destination_airport"
        value={newFlight.destination_airport}
        onChange={handleChange}
      >
        <option value="">Select Destination Airport</option>
        {airports.map((airport) => (
          <option key={airport.airportId} value={airport.airportId}>
            {airport.airportName} ({airport.airportCode})
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Add Flight</button>
    </div>
  );
};

export default AddFlight;
