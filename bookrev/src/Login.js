import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import "./Login.css";

function Login() {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation: make sure both fields are filled
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    // Example check: you can replace with actual auth
    if (username === "admin" && password === "1234") {
      // Save user in localStorage (optional)
      localStorage.setItem("user", JSON.stringify({ username }));

      // Redirect to Home page
      navigate("/"); // <-- changed from "/home" to "/" because Home is your landing page
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="welcome-text">
        <em>Welcome to <strong>NookBook</strong></em>
      </div>

      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <br />
        <button type="submit" className="login-button">
          Sign In
        </button>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
