import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer/Footer";
import UploadBoard from "./Components/UploadBoard/UploadBoard";
import Dashboard from "./Components/Dashboard/Dashboard";
import Improvements from "./Components/Improvements/Improvements";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact"
import Feedback from "./Components/Feedback/Feedback";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/dashboard" element={<Dashboard/> } />
        <Route path="/upload" element={<UploadBoard/> }/>
        <Route path="/checkimprovements" element={<Improvements/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/feedback" element={<Feedback/> } />
        <Route path="*" element={<NotFound/> } />  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
