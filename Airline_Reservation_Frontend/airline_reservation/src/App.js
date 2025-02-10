import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/Register";
import SearchFlight from "./screens/SearchFlight";
import AvailableFlights from "./screens/AvailableFlights";
import AddAirline from "./screens/AddAirlines";
import AdminHome from "./screens/Adminhome";
import UserList from "./screens/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-flight" element={<SearchFlight />} />
        <Route path="/available-flights" element={<AvailableFlights />} />
        <Route path="/add-airlines" element={<AddAirline />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;