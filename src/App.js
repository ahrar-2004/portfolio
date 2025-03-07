import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // ✅ Import BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <Router> {/* ✅ Wrap everything inside Router */}
      <Navbar />
      
      {/* Sections must have IDs for smooth scrolling */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="services"><Services /></section>
      <section id="education"><Education /></section>
     
      <section id="contact"><Contact /></section>
      <section id="footet"><Footer /></section>
    </Router>
  );
}

export default App;
