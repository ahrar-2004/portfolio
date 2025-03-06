import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      
      
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      
        <Route path="/education" element={<Education />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
