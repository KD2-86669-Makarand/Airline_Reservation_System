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
        <thead>
          <tr>
            <th>Airline Name</th>
            <th>Airline Code</th>
            <th>Country</th>
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
    </div>
  );
}

export default AddAirlines;
