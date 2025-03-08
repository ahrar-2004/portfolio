import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 md:px-12 py-10">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-4 border-gray-600 shadow-lg">
            <img src="/images/pfpImg.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-montserrat leading-tight">
            Ahmad Ali Ahrar
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-2">Web Developer & Editor</h2>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
            I'm <span className="text-neon-green font-bold">Ahmad Ali Ahrar</span>, a passionate web developer and editor with a keen eye for design.
            I specialize in <span className="text-neon-pink">video editing, thumbnail and logo design</span>, and creating sleek, responsive websites.
            Currently, I'm pursuing a <span className="text-neon-blue">BS in Computer Science</span> at the University of Agriculture, Faisalabad.
            I thrive on creativity and functionality, constantly learning new tools and technologies to enhance my skills, blending creativity with technology to build impactful digital experiences.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex justify-center md:justify-start space-x-6 sm:space-x-10 mt-6">
            {[
              { icon: <FaHtml5 className="text-orange-500 text-4xl sm:text-5xl" />, label: "HTML" },
              { icon: <FaJs className="text-yellow-500 text-4xl sm:text-5xl" />, label: "JavaScript" },
              { icon: <FaReact className="text-blue-400 text-4xl sm:text-5xl" />, label: "React" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-110 transition-transform">
                {item.icon}
                <p className="text-gray-300 mt-2 text-sm sm:text-lg">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link smooth to="#contact">
              <button className="px-5 sm:px-6 py-2 text-base sm:text-lg font-semibold bg-white text-black rounded-lg shadow-md transition-transform duration-200 hover:scale-110">
                Contact Me
              </button>
            </Link>
            <button className="px-5 sm:px-6 py-2 text-base sm:text-lg font-semibold bg-white text-black rounded-lg shadow-md transition-transform duration-200 hover:scale-110">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
