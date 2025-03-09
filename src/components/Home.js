import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 md:px-12 py-12 pt-20">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-10">
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img src="/images/pfpImg.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat leading-tight">
            Ahmad Ali Ahrar
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-2">Front-end Developer</h2>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
  I'm <span className="text-neon-green font-bold">Ahmad Ali Ahrar</span>, a passionate front-end developer dedicated to building sleek and responsive websites.  
  Currently, I'm pursuing a <span className="text-neon-blue">BS in Computer Science</span> at the University of Agriculture, Faisalabad.  
  I thrive on creativity and functionality, constantly learning new tools and technologies to enhance my coding skills.
</p>


          {/* Tech Stack Icons */}
          <div className="flex justify-center md:justify-start space-x-6 sm:space-x-10 mt-6">
            {[
              { icon: <FaHtml5 className="text-orange-500 text-5xl sm:text-6xl" />, label: "HTML" },
              { icon: <FaJs className="text-yellow-500 text-5xl sm:text-6xl" />, label: "JavaScript" },
              { icon: <FaReact className="text-blue-400 text-5xl sm:text-6xl" />, label: "React JS" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                {item.icon}
                <p className="text-gray-300 mt-2 text-sm sm:text-lg">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link smooth to="#contact">
              <button className="px-6 py-2 text-lg font-semibold bg-white text-black rounded-lg shadow-md transition-transform duration-300 hover:scale-110">
                Contact Me
              </button>
            </Link>
            <a
              href="/images/cv.pdf"
              download="Ahmad_Ali_Ahrar_CV.pdf"
              className="px-6 py-2 text-lg font-semibold bg-white text-black rounded-lg shadow-md transition-transform duration-300 hover:scale-110 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
