import React from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-8 md:px-16">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-6xl font-bold text-white font-montserrat">
         Ahmad Ali Ahrar
          </h1>

        <h2 className="text-2xl text-gray-400 mt-2">Web Developer & Editor</h2>
        <p className="text-gray-300 mt-4 max-w-lg">
          I'm a passionate web developer and editor with a keen eye for design. I specialize in video editing, thumbnail and 
          logo design, and building sleek, responsive websites. Currently pursuing a BS in Computer Science at the University 
          of Agriculture, Faisalabad. I thrive on creativity and functionality, constantly 
          learning new technologies to enhance my skills.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="px-6 py-2 text-lg font-semibold bg-green-500 text-black rounded-lg shadow-md transition transform hover:scale-110 hover:bg-green-400">
            <Link smooth to="#contact">Contact Me</Link>
          </button>
          <button className="px-6 py-2 text-lg font-semibold bg-pink-500 text-black rounded-lg shadow-md transition transform hover:scale-110 hover:bg-pink-400">
            Download Resume
          </button>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden border-4  ">
          <img src="/images/pfpImg.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Home;
