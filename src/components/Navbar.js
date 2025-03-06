import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg border-b border-gray-700">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide">My Portfolio</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-black w-full md:w-auto md:flex-row flex-col left-0 md:p-0 p-4 
            ${open ? "block" : "hidden"} md:block`}
        >
          {["Home", "About Me", "My Projects", "Services", "CV", "Education", "Hobby"].map(
            (item, index) => (
              <li key={index} className="relative my-2 md:my-0">
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative px-3 py-1 text-lg font-medium transition-all duration-300 text-gray-300 
                hover:text-neon-green hover:underline underline-offset-4"
                >
                  {item}
                </a>
              </li>
            )
          )}

          {/* Contact Button with Pop Effect */}
          <li className="my-2 md:my-0">
            <a
              href="#contact"
              className="px-5 py-2 bg-white text-black font-semibold rounded-md transition-all duration-300 
              hover:bg-gray-200 hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
