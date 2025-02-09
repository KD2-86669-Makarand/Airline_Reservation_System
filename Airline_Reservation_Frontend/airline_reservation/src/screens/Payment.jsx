import React, { useState } from "react";

const PaymentsUI = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    alert("Payment processed successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Payment Details</h2>
      <input
        type="text"
        name="cardNumber"
        value={paymentDetails.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        style={{ display: "block", margin: "10px 0", width: "100%" }}
      />
      <input
        type="text"
        name="cardHolder"
        value={paymentDetails.cardHolder}
        onChange={handleChange}
        placeholder="Card Holder Name"
        style={{ display: "block", margin: "10px 0", width: "100%" }}
      />
      <input
        type="text"
        name="expiryDate"
        value={paymentDetails.expiryDate}
        onChange={handleChange}
        placeholder="MM/YY"
        style={{ display: "block", margin: "10px 0", width: "100%" }}
      />
      <input
        type="password"
        name="cvv"
        value={paymentDetails.cvv}
        onChange={handleChange}
        placeholder="CVV"
        style={{ display: "block", margin: "10px 0", width: "100%" }}
      />
      <button
        onClick={handlePayment}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentsUI;
