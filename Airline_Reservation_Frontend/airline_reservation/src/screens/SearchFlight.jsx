// // "D:\AIRLINE_RESERVATION_SYSTEM\pics\SEARCHFLIGHT.drawio - Copy.png"

import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchFlight.css"; // Import custom CSS file

const SearchFlight = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/available-flights"); // Navigate to Available Flights page
  };

  return (
    <div className="container mt-5">
      {/* <h2 className="text-center mb-4">Search Flight</h2> */}
      <div className="card p-4 shadow">
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Departure</label>
              <select className="form-select">
                <option>Kolhapur (KLH)</option>
                <option>Mumbai (BOM)</option>
                <option>Pune (PUQ)</option>
                <option>Belgavi (IXG)</option>
                <option>Bengaluru (BLR)</option>
                <option>Bhopal (BHO)</option>
                <option>Chennai(MAA)</option>
                <option>Delhi (DEL)</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Arrival</label>
              <select className="form-select">
                <option>Mumbai (BOM)</option>
                <option>Kolhapur (KLH)</option>
                <option>Pune (PUQ)</option>
                <option>Belgavi (IXG)</option>
                <option>Bengaluru (BLR)</option>
                <option>Bhopal (BHO)</option>
                <option>Chennai(MAA)</option>
                <option>Delhi (DEL)</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Travel Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Passenger</label>
              <select className="form-select">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label"> Class</label>
              <select className="form-select">
                <option>First Class</option>
                <option>Business Class</option>
                <option>Economy Class</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary px-5"
              onClick={handleSearch}
            >
              Search Flight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFlight;

//------------------------------------------------------------------------------------------
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SearchFlight = () => {
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     navigate("/AvailableFlights"); // Navigate to Available Flights page
//   };

//   return (
//     <div>
//       <h2>Search Flight</h2>
//       <form>
//         <div>
//           <label>Departure</label>
//           <input type="text" value="Kolhapur (KHL)" readOnly />
//         </div>
//         <div>
//           <label>Arrival</label>
//           <input type="text" value="Mumbai (BOM)" readOnly />
//         </div>
//         <div>
//           <label>Travel Date</label>
//           <input type="date" />
//         </div>
//         <div>
//           <label>Passenger</label>
//           <select>
//             <option>1 Passenger</option>
//             <option>2 Passengers</option>
//             <option>3 Passengers</option>
//           </select>
//         </div>
//         <div>
//           <label>Class</label>
//           <select>
//             <option>First Class</option>
//             <option>Business Class</option>
//             <option>Economy Class</option>
//           </select>
//         </div>
//         <button type="button" onClick={handleSearch}>
//           Search Flight
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchFlight;
