import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg border-b border-gray-700">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/images/Logo.png" alt="logo" className="md:w-20 md:h-8" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static bg-black md:bg-transparent w-full md:w-auto md:flex flex-col md:flex-row md:items-center md:space-x-6 
          transition-all duration-300 ease-in-out ${open ? "block" : "hidden"} md:block`}
        >
          <button className="px-3 py-1 text-lg font-medium text-gray-300 hover:text-neon-green hover:underline underline-offset-4">
            <Link smooth to="#home">Home</Link>
          </button>
          <button className="px-3 py-1 text-lg font-medium text-gray-300 hover:text-neon-green hover:underline underline-offset-4">
            <Link smooth to="#about">About Me</Link>
          </button>
          <button className="px-3 py-1 text-lg font-medium text-gray-300 hover:text-neon-green hover:underline underline-offset-4">
            <Link smooth to="#projects">My Projects</Link>
          </button>
          <button className="px-3 py-1 text-lg font-medium text-gray-300 hover:text-neon-green hover:underline underline-offset-4">
            <Link smooth to="#services">Services</Link>
          </button>
          <button className="px-3 py-1 text-lg font-medium text-gray-300 hover:text-neon-green hover:underline underline-offset-4">
            <Link smooth to="#education">Education</Link>
          </button>
         
          <button className="px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
            <Link smooth to="#contact">Contact Me</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
