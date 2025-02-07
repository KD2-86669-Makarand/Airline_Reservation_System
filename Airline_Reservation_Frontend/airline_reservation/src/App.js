import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/login";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Register from "./screens/Register";
import SearchFlight from "./screens/SearchFlight";
import AvailableFlights from "./screens/AvailableFlights";
import AddAirline from "./screens/AddAirlines";
import AdminHome from "./screens/Adminhome";
<<<<<<< HEAD
import UserList from "./screens/Users";
=======
import AddAircraft from "./screens/AddAircraft";
import AddFlight from "./screens/AddFlight";
>>>>>>> main

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="SearchFlight" element={<SearchFlight />} />
        <Route path="AvailableFlights" element={<AvailableFlights />} />
        <Route path="AddAirlines" element={<AddAirline />} />
        <Route path="AdminHome" element={<AdminHome />} />
<<<<<<< HEAD
        <Route path="UserList" element={<UserList/>} />
=======
        <Route path="AddAircraft" element={<AddAircraft />} />
        <Route path="AddFlight" element={<AddFlight />} />
>>>>>>> main
      </Routes>
    </div>
  );
}

export default App;
