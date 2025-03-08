import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close menu on mobile when clicking a link
  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg border-b border-gray-700 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-center items-center px-6 md:px-8">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl absolute left-4 focus:outline-none transition-transform duration-200"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:items-center 
          transition-all duration-300 ease-in-out ${
            open ? "opacity-100 h-auto py-4" : "opacity-0 h-0 md:opacity-100 md:h-auto"
          } md:flex md:gap-8`}
        >
          {[
            { name: "Home", to: "#home" },
            { name: "Experience", to: "#experience" },
            { name: "My Projects", to: "#projects" },
            { name: "Services", to: "#services" },
            { name: "Education", to: "#education" },
          ].map((item) => (
            <Link
              key={item.to}
              smooth
              to={item.to}
              className="block md:inline-block px-4 py-2 text-lg font-medium text-gray-300 
                hover:text-gray-400 transition-colors duration-200"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}

          {/* Contact Button (White & Centered) */}
          <Link
            smooth
            to="#contact"
            className="block md:inline-block px-6 py-2 bg-white text-black font-semibold rounded-md 
              hover:bg-gray-300 transition-transform duration-200 transform hover:scale-105 md:ml-8"
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
