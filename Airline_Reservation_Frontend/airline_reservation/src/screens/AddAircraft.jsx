import React, { useState, useEffect } from "react";
import axios from "axios";

const AddAircraft = () => {
  const [aircraft, setAircraft] = useState([]);
  const [airlinesList, setAirlinesList] = useState([]);
  const [newAircraft, setNewAircraft] = useState({
    aircraftModel: "",
    aircraftCapacity: "",
    airline: "",
  });

  // Get all aircraft
  useEffect(() => {
    fetchAircraft();
  }, []);

  // Get airlines for dropdown
  useEffect(() => {
    fetchAirlines();
  }, []);

  const fetchAircraft = () => {
    axios
      .get("http://localhost:8080/flight/getAllAircraft")
      .then((response) => {
        console.log("Aircraft data:", response.data);
        setAircraft(response.data);
        console.log(aircraft);
      })
      .catch((error) => console.error("Error fetching aircraft:", error));
  };

  const fetchAirlines = () => {
    axios
      .get("http://localhost:8080/flight/getAllAirline")
      .then((response) => {
        console.log("Airlines data:", response.data);
        setAirlinesList(response.data);
        console.log(airlinesList);
      })
      .catch((error) => console.error("Error fetching airlines:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAircraft((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleAdd = () => {
  //     // Check if all fields are filled
  //     if (
  //       newAircraft.aircraftModel &&
  //       newAircraft.aircraftCapacity &&
  //       newAircraft.airlineId
  //     ) {
  //       // Prepare the data to send to the backend
  //       const aircraftToAdd = {
  //         aircraftModel: newAircraft.aircraftModel,
  //         aircraftCapacity: newAircraft.aircraftCapacity,
  //         airline: newAircraft.airlineId, // Send the airlineId to backend
  //       };

  //       // Send a POST request to add the new aircraft
  //       axios
  //         .post("http://localhost:8080/flight/addAircraft", aircraftToAdd)
  //         .then((response) => {
  //           console.log("Aircraft added:", response.data);

  //           // After successful add, update the aircraft list with the new aircraft
  //           setAircraft([...aircraft, response.data]);

  //           // Clear the form inputs after adding the aircraft
  //           setNewAircraft({
  //             aircraftModel: "",
  //             aircraftCapacity: "",
  //             airlineId: "",
  //           });
  //         })
  //         .catch((error) => {
  //           console.error("Error adding aircraft:", error);
  //         });
  //     } else {
  //       // If any field is empty, log a message to prompt the user
  //       console.log("Please fill in all fields.");
  //     }
  //   };

  const handleAdd = () => {
    debugger;
    axios
      .post("http://localhost:8080/flight/addAircraft", newAircraft)
      .then((response) => {
        setAircraft([...aircraft, response.data]);
        console.log(aircraft);
        setNewAircraft({
          aircraftModel: "A123",
          aircraftCapacity: 123,
          airline: 1,
        });
        console.log(newAircraft);
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id, updatedData) => {
    axios
      .put(`http://localhost:8080/flight/updateAircraft/${id}`, updatedData)
      .then((response) => {
        fetchAircraft(); // Refresh the aircraft list
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/flight/softDeleteAircraft/${id}`)
      .then(() => {
        fetchAircraft(); // Refresh the aircraft list
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto p-6">
      <div>
        <h2>ADD AIRCRAFT</h2>
        <table border="2">
          <thead>
            <tr>
              <th>Aircraft Model</th>
              <th>Aircraft Capacity</th>
              <th>Airline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {aircraft.map((item) => (
              <tr key={item.aircraftId}>
                <td>{item.aircraftModel}</td>
                <td>{item.aircraftCapacity}</td>
                <td>{item.airlineName}</td>
                <td>
                  <button onClick={() => handleDelete(item.aircraftId)}>
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      handleEdit(item.aircraftId, {
                        ...item,
                        aircraftModel: "Updated Model",
                      })
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Add New Aircraft</h3>
        <div>
          <input
            type="text"
            name="aircraftModel"
            value={newAircraft.aircraftModel}
            onChange={handleChange}
            placeholder="Aircraft Model"
          />
          <input
            type="number"
            name="aircraftCapacity"
            value={newAircraft.aircraftCapacity}
            onChange={handleChange}
            placeholder="Aircraft Capacity"
          />
          {/* <select
          name="airline"
          value={newAircraft.airline}
          onChange={handleChange}
        >
          <option value="">Select Airline</option>
          {airlinesList.map((airline) => (
            <option key={airline.airlineId} value={airline.airlineId}>
              {airline.airlineName}
            </option>
          ))}
        </select> */}

          <select
            name="airline"
            value={newAircraft.airline} // This will be the airlineId
            onChange={handleChange}
          >
            <option value="">Select Airline</option>
            {airlinesList.map((airline) => (
              <option key={airline.airlineId} value={airline.airlineId}>
                {airline.airlineName}{" "}
                {/* Display the airline name in the dropdown */}
              </option>
            ))}
          </select>

          <button onClick={handleAdd}>Add Aircraft</button>
        </div>
      </div>
    </div>
  );
};

export default AddAircraft;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import "./AddAirline.css";

// const AddAircraft = () => {
//   const [aircraft, setAircraft] = useState([]); // Changed name to be more clear
//   const [airlinesList, setAirlinesList] = useState([]); // For dropdown
//   const [newAircraft, setNewAircraft] = useState({
//     aircraftId: "",
//     aircraftModel: "",
//     aircraftCapacity: "",
//     airline: "", // Changed from airlineName to airline to match DTO
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/flight/getAllAircraft")
//       .then((response) => setAircraft(response.data));
//   }, []);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/flight/getAllAirlines")
//       .then((response) => {
//         console.log("Airlines data:", response.data);
//         setAirlinesList(response.data);
//       })
//       .catch((error) => console.error("Error fetching airlines:", error));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewAircraft((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle adding a new aircraft
//   const handleAdd = () => {
//     axios
//       .post("http://localhost:8080/flight/addAircraft", newAircraft)
//       .then((response) => {
//         setAirlines([...airlines, response.data]);
//         setNewAircraft({
//           aircraftId: "",
//           aircraftModel: "",
//           aircraftCapacity: "",
//           airlineName: "",
//         });
//       })
//       .catch((error) => console.error(error));
//   };

//   // Handle editing an aircraft
//   const handleEdit = (id, updatedData) => {
//     axios
//       .put(`http://localhost:8080/flight/updateAircraft/${id}`, updatedData) // Corrected endpoint
//       .then((response) => {
//         setAirlines(
//           airlines.map((airline) =>
//             airline.aircraftId === id ? updatedData : airline
//           )
//         );
//       })
//       .catch((error) => console.error(error));
//   };

//   // Handle deleting an aircraft (soft delete)
//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8080/flight/softDeleteAircraft/${id}`) // Corrected endpoint for soft delete
//       .then(() => {
//         setAirlines(airlines.filter((airline) => airline.aircraftId !== id));
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <h2>ADD AIRCRAFT</h2>
//       <table border="2">
//         <thead>
//           <tr>
//             <th>Aircraft Model</th>
//             <th>Aircraft Capacity</th>
//             <th>Airline</th>{" "}
//             {/* Assuming you have a list of airlines to select from */}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {airlines.map((aircraft) => (
//             <tr key={aircraft.aircraftId}>
//               <td>{aircraft.aircraftModel}</td>
//               <td>{aircraft.aircraftCapacity}</td>
//               <td>{aircraft.airlineName}</td>{" "}
//               {/* Assuming each aircraft has an airline name */}
//               <td>
//                 <button onClick={() => handleDelete(aircraft.aircraftId)}>
//                   Delete
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleEdit(aircraft.aircraftId, {
//                       ...aircraft,
//                       aircraftModel: "Updated Model", // Example of an edit operation
//                     })
//                   }
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3>Add New Aircraft</h3>
//       <input
//         type="text"
//         name="aircraftModel"
//         value={newAircraft.aircraftModel}
//         onChange={handleChange}
//         placeholder="Aircraft Model"
//       />
//       <input
//         type="number"
//         name="aircraftCapacity"
//         value={newAircraft.aircraftCapacity}
//         onChange={handleChange}
//         placeholder="Aircraft Capacity"
//       />
//       <select
//         name="airline" // Changed to match DTO field name
//         value={newAircraft.airline}
//         onChange={handleChange}
//       >
//         <option value="">Select Airline</option>
//         {airlinesList.map((airline) => (
//           <option key={airline.id} value={airline.id}>
//             {airline.airlineName}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleAdd}>Add Aircraft</button>
//     </div>
//   );
// };

// export default AddAircraft;
