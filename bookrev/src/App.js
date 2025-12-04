import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./Footer";

import Login from "./Login";
import Register from "./Register";
import Home from "./HomePage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
  );
}

export default App;
