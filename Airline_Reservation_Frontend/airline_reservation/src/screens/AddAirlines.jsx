import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddAirlines() {
  const [airlineName, setairlineName] = useState("");
  const [airlineCode, setairlineCode] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  const AddAirline = async () => {
    if (airlineName.length == 0) {
      toast.warn("Please enter Airline Name");
    } else if (airlineCode.length == 0) {
      toast.warn("Please enter Airline Code");
    } else if (country.length == 0) {
      toast.warn("Please Country");
    } else {
      const result = await AddAirline(airlineName, airlineCode, country);
      if (result["status"] == "success") {
        toast.success("Successfully registered a new admin");

        // go back
        navigate(-1);
      } else {
        toast.error(result["error"]);
      }
    }
  };
  return (
    <div>
      <h2> Add Airlines</h2>
      <table>
        <thead>
          <tr>
            <th>Airline Id</th>
            <th>Airline Name</th>
            <th>Airline Code</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddAirlines;
