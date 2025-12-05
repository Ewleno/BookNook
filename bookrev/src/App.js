import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Home from "./HomePage";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
  <Route path="/" element={<Login />} />         {/* Login is landing page */}
  <Route path="/home" element={<Home />} />      {/* Home page */}
  <Route path="/register" element={<Register />} />
  <Route path="/about" element={<AboutUs />} />
</Routes>


      <Footer />
    </>
  );
}

export default App;