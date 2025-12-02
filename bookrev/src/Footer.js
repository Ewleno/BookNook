import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>&copy; 2025 NookBook</div>
      <div className="footer-links">
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
}

export default Footer;

