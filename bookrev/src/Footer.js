import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>&copy; 2025 NookBook</div>
      <div className="footer-links">
        <Link to="/">HomePage</Link>   {/* Updated */}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
}

export default Footer;

