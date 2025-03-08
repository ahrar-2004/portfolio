import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-6 md:px-16 py-10">
      {/* Profile Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-lg overflow-hidden border-4 border-gray-600 shadow-lg">
          <img src="/images/pfpImg.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-montserrat leading-tight">
          Ahmad Ali Ahrar
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-400 mt-2">Web Developer & Editor</h2>
        
        <p className="text-gray-300 mt-4 max-w-lg text-sm sm:text-base">
          I'm a passionate web developer and editor with a keen eye for design. I specialize in video editing, thumbnail 
          and logo design, and building sleek, responsive websites. Currently pursuing a BS in Computer Science at the 
          University of Agriculture, Faisalabad. I thrive on creativity and functionality, constantly learning new 
          technologies to enhance my skills.
        </p>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link smooth to="#contact">
            <button className="px-6 py-2 text-lg font-semibold bg-white text-black rounded-lg shadow-md transition-transform duration-200 hover:scale-110">
              Contact Me
            </button>
          </Link>

          <button className="px-6 py-2 text-lg font-semibold bg-white text-black rounded-lg shadow-md transition-transform duration-200 hover:scale-110">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
