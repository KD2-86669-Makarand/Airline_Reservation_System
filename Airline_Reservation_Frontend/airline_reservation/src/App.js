
import React from "react";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/Register";
import SearchFlight from "./screens/SearchFlight";
import AvailableFlights from "./screens/AvailableFlights";
import AddAirline from "./screens/AddAirlines";
import AdminHome from "./screens/Adminhome";
import UserList from "./screens/Users";
import AddAircraft from "./screens/AddAircraft";
import AddFlight from "./screens/AddFlight";
import Payment from "./screens/Payment"; // Keeping Payment component

function App() {
  return (
    <div>

{/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-flight" element={<SearchFlight />} />
        <Route path="/available-flights" element={<AvailableFlights />} />
        <Route path="/add-airlines" element={<AddAirline />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/user-list" element={<UserList />} />

        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="SearchFlight" element={<SearchFlight />} />
        <Route path="AvailableFlights" element={<AvailableFlights />} />
        <Route path="AddAirlines" element={<AddAirline />} />
        <Route path="AdminHome" element={<AdminHome />} />
        <Route path="UserList" element={<UserList />} />
        <Route path="AddAircraft" element={<AddAircraft />} />
        <Route path="AddFlight" element={<AddFlight />} />
        <Route path="Payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;