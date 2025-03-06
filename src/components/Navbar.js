import React, { useState } from "react";

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
          {[
            { name: "Home", link: "home" },
            { name: "About Me", link: "about" },
            { name: "My Projects", link: "projects" },
            { name: "Services", link: "services" },
            { name: "Education", link: "education" },
            { name: "Hobby", link: "hobby" },
          ].map((item, index) => (
            <button key={index} className="px-3 py-1 text-lg font-medium transition-all duration-300 text-gray-300 hover:text-neon-green hover:underline underline-offset-4">
              <a href={item.link}>{item.name}</a>
            </button>
          ))}

          {/* Contact Button */}
          <button className="px-5 py-2 bg-white text-black font-semibold rounded-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
            <a href="contact">Contact Me</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
