// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AddAircraft = () => {
//   const [aircraft, setAircraft] = useState([]);
//   const [airlinesList, setAirlinesList] = useState([]);
//   const [newAircraft, setNewAircraft] = useState({
//     aircraftModel: "",
//     aircraftCapacity: "",
//     airline: "",
//   });

//   // Get all aircraft
//   useEffect(() => {
//     fetchAircraft();
//   }, []);

//   // Get airlines for dropdown
//   useEffect(() => {
//     fetchAirlines();
//   }, []);

//   const fetchAircraft = () => {
//     axios
//       .get("http://localhost:8080/flight/getAllAircraft")
//       .then((response) => {
//         console.log("Aircraft data:", response.data);
//         setAircraft(response.data);
//         console.log(aircraft);
//       })
//       .catch((error) => console.error("Error fetching aircraft:", error));
//   };

//   const fetchAirlines = () => {
//     axios
//       .get("http://localhost:8080/flight/getAllAirline")
//       .then((response) => {
//         console.log("Airlines data:", response.data);
//         setAirlinesList(response.data);
//         console.log(airlinesList);
//       })
//       .catch((error) => console.error("Error fetching airlines:", error));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewAircraft((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   //   const handleAdd = () => {
//   //     // Check if all fields are filled
//   //     if (
//   //       newAircraft.aircraftModel &&
//   //       newAircraft.aircraftCapacity &&
//   //       newAircraft.airlineId
//   //     ) {
//   //       // Prepare the data to send to the backend
//   //       const aircraftToAdd = {
//   //         aircraftModel: newAircraft.aircraftModel,
//   //         aircraftCapacity: newAircraft.aircraftCapacity,
//   //         airline: newAircraft.airlineId, // Send the airlineId to backend
//   //       };

//   //       // Send a POST request to add the new aircraft
//   //       axios
//   //         .post("http://localhost:8080/flight/addAircraft", aircraftToAdd)
//   //         .then((response) => {
//   //           console.log("Aircraft added:", response.data);

//   //           // After successful add, update the aircraft list with the new aircraft
//   //           setAircraft([...aircraft, response.data]);

//   //           // Clear the form inputs after adding the aircraft
//   //           setNewAircraft({
//   //             aircraftModel: "",
//   //             aircraftCapacity: "",
//   //             airlineId: "",
//   //           });
//   //         })
//   //         .catch((error) => {
//   //           console.error("Error adding aircraft:", error);
//   //         });
//   //     } else {
//   //       // If any field is empty, log a message to prompt the user
//   //       console.log("Please fill in all fields.");
//   //     }
//   //   };

//   const handleAdd = () => {
//     debugger;
//     axios
//       .post("http://localhost:8080/flight/addAircraft", newAircraft)
//       .then((response) => {
//         setAircraft([...aircraft, response.data]);
//         console.log(aircraft);
//         setNewAircraft({
//           aircraftModel: "A123",
//           aircraftCapacity: 123,
//           airline: 1,
//         });
//         console.log(newAircraft);
//       })
//       .catch((error) => console.error(error));
//   };

//   const handleEdit = (id, updatedData) => {
//     axios
//       .put(`http://localhost:8080/flight/updateAircraft/${id}`, updatedData)
//       .then((response) => {
//         fetchAircraft(); // Refresh the aircraft list
//       })
//       .catch((error) => console.error(error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8080/flight/softDeleteAircraft/${id}`)
//       .then(() => {
//         fetchAircraft(); // Refresh the aircraft list
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div>
//         <h2>ADD AIRCRAFT</h2>
//         <table border="2">
//           <thead>
//             <tr>
//               <th>Aircraft Model</th>
//               <th>Aircraft Capacity</th>
//               <th>Airline</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {aircraft.map((item) => (
//               <tr key={item.aircraftId}>
//                 <td>{item.aircraftModel}</td>
//                 <td>{item.aircraftCapacity}</td>
//                 <td>{item.airlineName}</td>
//                 <td>
//                   <div className="d-flex gap-2">
//                     <button
//                       className="btn btn-primary btn-sm"
//                       onClick={() => handleEdit(item.aircraftIdId)}
//                     >
//                       Edit
//                     </button>
//                     {aircraft.status === "ACTIVE" ? (
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => handleDelete(item.aircraftId)}
//                       >
//                         Delete
//                       </button>
//                     )
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <h3>Add New Aircraft</h3>
//         <div>
//           <input
//             type="text"
//             name="aircraftModel"
//             value={newAircraft.aircraftModel}
//             onChange={handleChange}
//             placeholder="Aircraft Model"
//           />
//           <input
//             type="number"
//             name="aircraftCapacity"
//             value={newAircraft.aircraftCapacity}
//             onChange={handleChange}
//             placeholder="Aircraft Capacity"
//           />
//           {/* <select
//           name="airline"
//           value={newAircraft.airline}
//           onChange={handleChange}
//         >
//           <option value="">Select Airline</option>
//           {airlinesList.map((airline) => (
//             <option key={airline.airlineId} value={airline.airlineId}>
//               {airline.airlineName}
//             </option>
//           ))}
//         </select> */}

//           <select
//             name="airline"
//             value={newAircraft.airline} // This will be the airlineId
//             onChange={handleChange}
//           >
//             <option value="">Select Airline</option>
//             {airlinesList.map((airline) => (
//               <option key={airline.airlineId} value={airline.airlineId}>
//                 {airline.airlineName}{" "}
//                 {/* Display the airline name in the dropdown */}
//               </option>
//             ))}
//           </select>

//           <button onClick={handleAdd}>Add Aircraft</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAircraft;
////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminNavbar from "../Components/AdminNavbar";

// const AddAircraft = () => {
//   const [aircraft, setAircraft] = useState([]);
//   const [airlinesList, setAirlinesList] = useState([]);
//   const [newAircraft, setNewAircraft] = useState({
//     aircraftModel: "",
//     aircraftCapacity: "",
//     airline: "",
//   });

//   // Fetch Aircraft List
//   useEffect(() => {
//     fetchAircraft();
//   }, []);

//   // Fetch Airlines List for Dropdown
//   useEffect(() => {
//     fetchAirlines();
//   }, []);

//   const fetchAircraft = () => {
//     axios
//       .get("http://localhost:8080/flight/getAllAircraft")
//       .then((response) => setAircraft(response.data))
//       .catch((error) => console.error("Error fetching aircraft:", error));
//   };

//   const fetchAirlines = () => {
//     axios
//       .get("http://localhost:8080/flight/getAllAirline")
//       .then((response) => setAirlinesList(response.data))
//       .catch((error) => console.error("Error fetching airlines:", error));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewAircraft((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAdd = () => {
//     axios
//       .post("http://localhost:8080/flight/addAircraft", newAircraft)
//       .then((response) => {
//         setAircraft([...aircraft, response.data]); // Update UI
//         setNewAircraft({
//           aircraftModel: "",
//           aircraftCapacity: "",
//           airline: "",
//         }); // Reset Form
//       })
//       .catch((error) => console.error("Error adding aircraft:", error));
//   };

//   const handleEdit = (id, updatedData) => {
//     axios
//       .put(`http://localhost:8080/flight/updateAircraft/${id}`, updatedData)
//       .then(() => fetchAircraft()) // Refresh List
//       .catch((error) => console.error("Error updating aircraft:", error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8080/flight/softDeleteAircraft/${id}`)
//       .then(() => fetchAircraft()) // Refresh List
//       .catch((error) => console.error("Error deleting aircraft:", error));
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div>
//         <header>
//           <div class="logo">
//             <a href="UserList">Users</a>
//           </div>
//           <AdminNavbar />
//         </header>
//       </div>
//       <h2>ADD AIRCRAFT</h2>
//       <table border="2">
//         <thead>
//           <tr>
//             <th>Aircraft Model</th>
//             <th>Aircraft Capacity</th>
//             <th>Airline</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {aircraft.map((item) => (
//             <tr key={item.aircraftId}>
//               <td>{item.aircraftModel}</td>
//               <td>{item.aircraftCapacity}</td>
//               <td>{item.airlineName}</td>
//               <td>
//                 <div className="action-buttons">
//                   <button
//                     className="btn btn-primary btn-sm"
//                     onClick={() => handleEdit(item.aircraftId)}
//                   >
//                     Edit
//                   </button>
//                   {item.status === "ACTIVE" && (
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDelete(item.aircraftId)}
//                     >
//                       Delete
//                     </button>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3>Add New Aircraft</h3>
//       <div>
//         <input
//           type="text"
//           name="aircraftModel"
//           value={newAircraft.aircraftModel}
//           onChange={handleChange}
//           placeholder="Aircraft Model"
//         />
//         <input
//           type="number"
//           name="aircraftCapacity"
//           value={newAircraft.aircraftCapacity}
//           onChange={handleChange}
//           placeholder="Aircraft Capacity"
//         />
//         <select
//           name="airline"
//           value={newAircraft.airline}
//           onChange={handleChange}
//         >
//           <option value="">Select Airline</option>
//           {airlinesList.map((airline) => (
//             <option key={airline.airlineId} value={airline.airlineId}>
//               {airline.airlineName}
//             </option>
//           ))}
//         </select>
//         <button onClick={handleAdd}>Add Aircraft</button>
//       </div>
//     </div>
//   );
// };

// export default AddAircraft;
////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminNavbar from "../Components/AdminNavbar";

// const AddAircraft = () => {
//   const [aircraft, setAircraft] = useState([]);
//   const [airlinesList, setAirlinesList] = useState([]);
//   const [editAircraft, setEditAircraft] = useState(null);
//   const [newAircraft, setNewAircraft] = useState({
//     aircraftModel: "",
//     aircraftCapacity: "",
//     airline: "",
//   });

//   useEffect(() => {
//     fetchAircraft();
//     fetchAirlines();
//   }, []);

//   const fetchAircraft = () => {
//     axios
//       .get("http://localhost:8080/flight/getAllAircraft")
//       .then((response) => setAircraft(response.data))
//       .catch((error) => console.error("Error fetching aircraft:", error));
//   };

//   const fetchAirlines = () => {
//     axios
//       .get("http://localhost:8080/flight/getAllAirline")
//       .then((response) => setAirlinesList(response.data))
//       .catch((error) => console.error("Error fetching airlines:", error));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewAircraft((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleEditChange = (e, id) => {
//     const { name, value } = e.target;
//     setAircraft((prevAircraft) =>
//       prevAircraft.map((item) =>
//         item.aircraftId === id ? { ...item, [name]: value } : item
//       )
//     );
//   };

//   const handleSaveEdit = (id) => {
//     const updatedData = aircraft.find((item) => item.aircraftId === id);
//     axios
//       .put(`http://localhost:8080/flight/updateAircraft/${id}`, updatedData)
//       .then(() => {
//         setEditAircraft(null);
//         fetchAircraft();
//       })
//       .catch((error) => console.error("Error updating aircraft:", error));
//   };

//   const handleAdd = () => {
//     axios
//       .post("http://localhost:8080/flight/addAircraft", newAircraft)
//       .then(() => {
//         fetchAircraft();
//         setNewAircraft({
//           aircraftModel: "",
//           aircraftCapacity: "",
//           airline: "",
//         });
//       })
//       .catch((error) => console.error("Error adding aircraft:", error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8080/flight/softDeleteAircraft/${id}`)
//       .then(() => fetchAircraft())
//       .catch((error) => console.error("Error deleting aircraft:", error));
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div>
//         <header>
//           <div className="logo">
//             <a href="UserList">Users</a>
//           </div>
//           <AdminNavbar />
//         </header>
//       </div>
//       <h2>ADD AIRCRAFT</h2>
//       <table border="2">
//         <thead>
//           <tr>
//             <th>Aircraft Model</th>
//             <th>Aircraft Capacity</th>
//             <th>Airline</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {aircraft.map((item) => (
//             <tr key={item.aircraftId}>
//               <td>
//                 {editAircraft === item.aircraftId ? (
//                   <input
//                     type="text"
//                     name="aircraftModel"
//                     value={item.aircraftModel}
//                     onChange={(e) => handleEditChange(e, item.aircraftId)}
//                   />
//                 ) : (
//                   item.aircraftModel
//                 )}
//               </td>
//               <td>
//                 {editAircraft === item.aircraftId ? (
//                   <input
//                     type="number"
//                     name="aircraftCapacity"
//                     value={item.aircraftCapacity}
//                     onChange={(e) => handleEditChange(e, item.aircraftId)}
//                   />
//                 ) : (
//                   item.aircraftCapacity
//                 )}
//               </td>
//               <td>{item.airlineName}</td>
//               <td>
//                 <div className="d-flex gap-2">
//                   {editAircraft === item.aircraftId ? (
//                     <button
//                       className="btn btn-success btn-sm"
//                       onClick={() => handleSaveEdit(item.aircraftId)}
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       className="btn btn-primary btn-sm"
//                       onClick={() => setEditAircraft(item.aircraftId)}
//                     >
//                       Edit
//                     </button>
//                   )}
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDelete(item.aircraftId)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3>Add New Aircraft</h3>
//       <div>
//         <input
//           type="text"
//           name="aircraftModel"
//           value={newAircraft.aircraftModel}
//           onChange={handleChange}
//           placeholder="Aircraft Model"
//         />
//         <input
//           type="number"
//           name="aircraftCapacity"
//           value={newAircraft.aircraftCapacity}
//           onChange={handleChange}
//           placeholder="Aircraft Capacity"
//         />
//         <select
//           name="airline"
//           value={newAircraft.airline}
//           onChange={handleChange}
//         >
//           <option value="">Select Airline</option>
//           {airlinesList.map((airline) => (
//             <option key={airline.airlineId} value={airline.airlineId}>
//               {airline.airlineName}
//             </option>
//           ))}
//         </select>
//         <button onClick={handleAdd}>Add Aircraft</button>
//       </div>
//     </div>
//   );
// };

// export default AddAircraft;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar";

const AddAircraft = () => {
  const [aircraft, setAircraft] = useState([]);
  const [airlinesList, setAirlinesList] = useState([]);
  const [editAircraftId, setEditAircraftId] = useState(null);
  const [editAircraftData, setEditAircraftData] = useState({});
  const [newAircraft, setNewAircraft] = useState({
    aircraftModel: "",
    aircraftCapacity: "",
    airline: "",
  });

  useEffect(() => {
    fetchAircraft();
    fetchAirlines();
  }, []);

  const fetchAircraft = () => {
    axios
      .get("http://localhost:8080/flight/getAllAircraft")
      .then((response) => setAircraft(response.data))
      .catch((error) => console.error("Error fetching aircraft:", error));
  };

  const fetchAirlines = () => {
    axios
      .get("http://localhost:8080/flight/getAllAirline")
      .then((response) => setAirlinesList(response.data))
      .catch((error) => console.error("Error fetching airlines:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAircraft((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (id) => {
    setEditAircraftId(id);
    const aircraftToEdit = aircraft.find((item) => item.aircraftId === id);
    setEditAircraftData({ ...aircraftToEdit });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditAircraftData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    axios
      .put(
        `http://localhost:8080/flight/updateAircraft/${editAircraftId}`,
        editAircraftData
      )
      .then(() => {
        fetchAircraft();
        setEditAircraftId(null);
      })
      .catch((error) => console.error("Error updating aircraft:", error));
  };

  const handleCancelEdit = () => {
    setEditAircraftId(null);
  };

  const handleAdd = () => {
    axios
      .post("http://localhost:8080/flight/addAircraft", newAircraft)
      .then(() => {
        fetchAircraft();
        setNewAircraft({
          aircraftModel: "",
          aircraftCapacity: "",
          airline: "",
        });
      })
      .catch((error) => console.error("Error adding aircraft:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/flight/softDeleteAircraft/${id}`)
      .then(() => fetchAircraft())
      .catch((error) => console.error("Error deleting aircraft:", error));
  };

  return (
    <div className="container mx-auto p-6">
      <header>
        <div className="logo">
          <a href="UserList">Users</a>
        </div>
        <AdminNavbar />
      </header>
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
              {editAircraftId === item.aircraftId ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="aircraftModel"
                      value={editAircraftData.aircraftModel}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="aircraftCapacity"
                      value={editAircraftData.aircraftCapacity}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>{item.airlineName}</td>
                  <td>
                    <button
                      onClick={handleSaveEdit}
                      className="btn btn-success btn-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="btn btn-secondary btn-sm"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.aircraftModel}</td>
                  <td>{item.aircraftCapacity}</td>
                  <td>{item.airlineName}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(item.aircraftId)}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.aircraftId)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
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
        <select
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
        </select>
        <button onClick={handleAdd}>Add Aircraft</button>
      </div>
    </div>
  );
};

export default AddAircraft;
