// //  D:\AIRLINE_RESERVATION_SYSTEM\pics\SEARCHFLIGHT.drawio - Copy.png

import React from "react";
import "./AvailableFlights.css"; // Optional custom CSS file

const AvailableFlights = () => {
  const flights = [
    {
      id: 1,
      date: "12 JAN 2025",
      departure: "Kolhapur (KHL)",
      depTime: "11:00 AM",
      arrival: "Mumbai (BOM)",
      arrTime: "1:20 PM",
      type: "nonstop",
      price: "₹12,000",
      class: "Business",
    },
    {
      id: 2,
      date: "12 JAN 2025",
      departure: "Kolhapur (KHL)",
      depTime: "4:00 PM",
      arrival: "Mumbai (BOM)",
      arrTime: "6:50 PM",
      type: "nonstop",
      price: "₹9,300",
      class: "Business",
    },
    {
      id: 3,
      date: "12 JAN 2025",
      departure: "Kolhapur (KHL)",
      depTime: "8:45 PM",
      arrival: "Mumbai (BOM)",
      arrTime: "11:30 PM",
      type: "nonstop",
      price: "₹11,000",
      class: "Business",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Flights</h2>
      <div className="list-group">
        {flights.map((flight) => (
          <div key={flight.id} className="list-group-item shadow mb-3">
            <div className="row align-items-center">
              <div className="col-md-3 text-center">
                <h5>{flight.date}</h5>
                <p className="text-muted">{flight.class}</p>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>{flight.departure}</h6>
                    <p>{flight.depTime}</p>
                  </div>
                  <div>
                    <i className="bi bi-arrow-right fs-4"></i>
                  </div>
                  <div>
                    <h6>{flight.arrival}</h6>
                    <p>{flight.arrTime}</p>
                  </div>
                </div>
                <p className="text-muted text-center">{flight.type}</p>
              </div>
              <div className="col-md-3 text-center">
                <h5>{flight.price}</h5>
                <button className="btn btn-primary btn-sm">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFlights;

//--------------------------------------------------------------------------
// import React from "react";

// const AvailableFlights = () => {
//   const flights = [
//     { date: "12 JAN 2025", time: "11:00 AM", price: "12,000" },
//     { date: "12 JAN 2025", time: "04:00 PM", price: "9,300" },
//     { date: "12 JAN 2025", time: "08:45 PM", price: "11,000" },
//   ];

//   return (
//     <div>
//       <h2>Available Flights</h2>
//       <div>
//         {flights.map((flight, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ccc",
//               margin: "10px",
//               padding: "10px",
//             }}
//           >
//             <p>{flight.date}</p>
//             <p>{flight.time}</p>
//             <p>Price: INR {flight.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailableFlights;
