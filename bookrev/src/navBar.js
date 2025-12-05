import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BookNook</div>

      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>       {/* ✅ Go to Home page */}
        <li><Link to="/">Login</Link></li>         {/* ✅ Go to Login page */}
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}


