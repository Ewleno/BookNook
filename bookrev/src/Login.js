import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="login-input"
  />
  <br />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="login-input"
  />
  <br />
  <button type="submit" className="login-button">
    Sign In
  </button>

  {/* <-- Put it right here, after the button */}
  <p className="register-link">
    Don't have an account? <a href="/register">Register</a>
  </p>
</form>
    </div>
  );
}

export default Login;
