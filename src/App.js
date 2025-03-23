import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // ✅ Import BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience"
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./ScrollToTop";



function App() {
  return (
    <React.Fragment> {/* ✅ Wrap everything inside a single parent */}
      <Router> {/* ✅ Wrap everything inside Router */}
      <ScrollToTop />
        <Navbar />
        
        {/* Sections must have IDs for smooth scrolling */}
        <section id="home"><Home /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>
        <section id="education"><Education /></section>
       
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer /></section>
      </Router>
      <Analytics />
    </React.Fragment>
  );
}

export default App;
