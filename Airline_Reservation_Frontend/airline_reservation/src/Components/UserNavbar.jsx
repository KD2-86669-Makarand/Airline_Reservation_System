import React from "react";
import { Link } from "react-router-dom"; // ✅ Correct Import

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/AvailableFlights">Flights</Link>
      <Link to="/Book">Book</Link>
      <Link to="/SearchFlight">Search</Link>
      <Link to="/login">Sign In</Link>
    </nav>
  );
}

export default Navbar;
