import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/AddAirlines">Airline</Link>
      <Link to="/AddAircraft">Aircraft</Link>
      <Link to="/AddFlights">Flights</Link>
      <Link to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;
