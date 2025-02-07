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
import UserList from "./screens/Users";
import BookFlight from "./screens/Book";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        {/* <Route path="SearchFlight" element={<SearchFlight />} /> */}
        <Route path="AvailableFlights" element={<AvailableFlights />} />
        <Route path="Book" element={<BookFlight />} />
        <Route path="AddAirlines" element={<AddAirline />} />
        <Route path="AdminHome" element={<AdminHome />} />
        <Route path="UserList" element={<UserList/>} />
      </Routes>
    </div>
  );
}

export default App;
