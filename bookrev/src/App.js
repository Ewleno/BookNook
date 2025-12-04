import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Home from "./HomePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* About page */}
        <Route path="/about" element={<div style={{ padding: "20px" }}>About the app</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
