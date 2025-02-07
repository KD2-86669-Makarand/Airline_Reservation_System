
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddAirlines() {
  const [airlineName, setairlineName] = useState("");
  const [airlineCode, setairlineCode] = useState("");
  const [country, setCountry] = useState("");
  const [airlines, setAirlines] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentAirline, setCurrentAirline] = useState(null); // Track which airline is being edited

  const navigate = useNavigate();

  // Function to add airline
  const addAirline = async () => {
    if (airlineName.length === 0) {
      toast.warn("Please enter Airline Name");
    } else if (airlineCode.length === 0) {
      toast.warn("Please enter Airline Code");
    } else if (country.length === 0) {
      toast.warn("Please enter Country");
    } else {
      try {
        const response = await fetch("http://localhost:5000/add-airline", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            airlineName,
            airlineCode,
            country,
          }),
        });

        const result = await response.json();

        if (result.status === "success") {
          toast.success("Successfully added new airline");
          setAirlines([...airlines, { airlineName, airlineCode, country }]);
          setairlineName(""); // Clear inputs
          setairlineCode("");
          setCountry("");
        } else {
          toast.error(result.error || "Something went wrong");
        }
      } catch (error) {
        toast.error("An error occurred while adding the airline");
        console.error(error);
      }
    }
  };

  // Function to edit airline
  const editAirline = (airline) => {
    setEditMode(true);
    setCurrentAirline(airline);
    setairlineName(airline.airlineName);
    setairlineCode(airline.airlineCode);
    setCountry(airline.country);
  };

  // Function to update airline
  const updateAirline = async () => {
    if (
      airlineName.length === 0 ||
      airlineCode.length === 0 ||
      country.length === 0
    ) {
      toast.warn("Please fill out all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/update-airline", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: currentAirline.id,
          airlineName,
          airlineCode,
          country,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Successfully updated the airline");
        setAirlines(
          airlines.map((airline) =>
            airline.id === currentAirline.id
              ? { ...airline, airlineName, airlineCode, country }
              : airline
          )
        );
        setEditMode(false);
        setCurrentAirline(null);
        setairlineName("");
        setairlineCode("");
        setCountry("");
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("An error occurred while updating the airline");
      console.error(error);
    }
  };

  // Function to delete airline (if you want to add delete functionality)
  const deleteAirline = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/delete-airline/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Airline deleted successfully");
        setAirlines(airlines.filter((airline) => airline.id !== id));
      } else {
        toast.error(result.error || "Error deleting the airline");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the airline");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add or Edit Airline</h2>
      <table>

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddAirline.css";

const AddAirlines = () => {
  const [airlines, setAirlines] = useState([]);
  const [newAirline, setNewAirline] = useState({
    airlineId: "",
    airlineName: "",
    airlineCode: "",
    country: "",
    status: "ACTIVE",
  });
  const [editData, setEditData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/flight/getAllAirline")
      .then((response) => setAirlines(response.data))
      .catch((error) => console.error("Error fetching airlines!", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAirline((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      !newAirline.airlineName.trim() ||
      !newAirline.airlineCode.trim() ||
      !newAirline.country.trim()
    ) {
      alert("Please fill all fields before adding a new airline.");
      return;
    }
    axios
      .post("http://localhost:8080/flight/addAirline", newAirline)
      .then((response) => {
        setAirlines([...airlines, response.data]);
        setNewAirline({
          airlineId: "",
          airlineName: "",
          airlineCode: "",
          country: "",
          status: "ACTIVE",
        });
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id) => {
    setEditData((prev) => ({
      ...prev,
      [id]: airlines.find((airline) => airline.airlineId === id),
    }));
  };

  const handleEditChange = (e, id) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [id]: { ...prev[id], [name]: value },
    }));
  };

  const handleSave = (id) => {
    axios
      .put(`http://localhost:8080/flight/updateAirline/${id}`, editData[id])
      .then(() => {
        setAirlines(
          airlines.map((airline) =>
            airline.airlineId === id ? editData[id] : airline
          )
        );
        setEditData((prev) => {
          const newEditData = { ...prev };
          delete newEditData[id];
          return newEditData;
        });
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/flight/deleteAirline/${id}`)
      .then(() => {
        setAirlines(airlines.filter((airline) => airline.airlineId !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto p-6">
      <h2>ADD AIRLINE</h2>
      <table border="2">

        <thead>
          <tr>
            <th>Airline Name</th>
            <th>Airline Code</th>
            <th>Country</th>


            <th>Status</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {airlines.map((airline) => (

            <tr key={airline.id}>
              <td>{airline.airlineName}</td>
              <td>{airline.airlineCode}</td>
              <td>{airline.country}</td>
              <td>
                <button onClick={() => editAirline(airline)}>Edit</button>
                <button onClick={() => deleteAirline(airline.id)}>
                  Delete
                </button>
              </td>
            <tr key={airline.airlineId}>
              {editData[airline.airlineId] ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="airlineName"
                      value={editData[airline.airlineId].airlineName}
                      onChange={(e) => handleEditChange(e, airline.airlineId)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="airlineCode"
                      value={editData[airline.airlineId].airlineCode}
                      onChange={(e) => handleEditChange(e, airline.airlineId)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="country"
                      value={editData[airline.airlineId].country}
                      onChange={(e) => handleEditChange(e, airline.airlineId)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="status"
                      value={editData[airline.airlineId].status}
                      onChange={(e) => handleEditChange(e, airline.airlineId)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSave(airline.airlineId)}>
                      Save
                    </button>
                    <button
                      onClick={() =>
                        setEditData((prev) => {
                          const newEditData = { ...prev };
                          delete newEditData[airline.airlineId];
                          return newEditData;
                        })
                      }
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{airline.airlineName}</td>
                  <td>{airline.airlineCode}</td>
                  <td>{airline.country}</td>
                  <td>{airline.status}</td>
                  <td>
                    <button onClick={() => handleEdit(airline.airlineId)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(airline.airlineId)}>
                      Delete
                    </button>
                  </td>
                </>
              )}

            </tr>
          ))}
        </tbody>
      </table>


      <div>
        <input
          type="text"
          value={airlineName}
          onChange={(e) => setairlineName(e.target.value)}
          placeholder="Airline Name"
        />
        <input
          type="text"
          value={airlineCode}
          onChange={(e) => setairlineCode(e.target.value)}
          placeholder="Airline Code"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
      </div>

      {editMode ? (
        <button onClick={updateAirline}>Update Airline</button>
      ) : (
        <button onClick={addAirline}>Add Airline</button>
      )}

      <h3>Add New Airline</h3>
      <input
        type="text"
        name="airlineName"
        value={newAirline.airlineName}
        onChange={handleChange}
        placeholder="Airline Name"
      />
      <input
        type="text"
        name="airlineCode"
        value={newAirline.airlineCode}
        onChange={handleChange}
        placeholder="Airline Code"
      />
      <input
        type="text"
        name="country"
        value={newAirline.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <button onClick={handleAdd}>Add Airline</button>

    </div>
  );
};

export default AddAirlines;
