import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const validEmail = "admin@example.com";
  const validPassword = "password123";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Simulate the login process
    if (email === validEmail && password === validPassword) {
      toast.success("Login successful!");
      navigate("/home"); // Redirect to the home page after successful login
    } else {
      toast.error("Invalid email or password.");
    }
  };

  // Mock sign-in function
  const fakeSignin = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "admin@example.com" && password === "password123") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded" style={{ width: "400px" }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold">🛫 Airline Reservation Login</h3>
          <p className="text-muted">Access your account</p>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100 fw-semibold mt-3"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="text-center mt-3">
          <p>
            Don't have an account?{<Link to="/Register"></Link>}
            <a href="#" className="text-decoration-none fw-semibold">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
