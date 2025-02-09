import React from "react";
import "./Home.css";
import SearchFlight from "./SearchFlight";
import Navbar from "../Components/UserNavbar";

function Home() {
  return (
    <div>
      <header>
        <div className="logo">
          {" "}
          <a href="/">New Horizon</a>
        </div>
        <Navbar />
      </header>

      <div className="hero">
        {" "}
        <h1>Begin your Adventures in comfort</h1>
        <SearchFlight />
      </div>
    </div>
  );
}

export default Home;
