import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 md:px-16">
      {/* Header */}
      <h1 className="text-6xl font-extrabold text-neon-green mb-4">About Me</h1>
      <div className="w-24 h-1 bg-neon-pink mb-8"></div>
      
      {/* Content */}
      <div className="md:flex md:items-center md:space-x-12">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img src="/images/pfpImg.png" alt="Profile" className="w-72 h-72 md:w-96 md:h-96 rounded-lg border-4 border-neon-green shadow-lg object-cover grayscale" />
        </div>
        
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-neon-green font-bold">Ahmad Ali Ahrar</span>, a passionate web developer and editor with a keen eye for design.
            I specialize in <span className="text-neon-pink">video editing, thumbnail and logo design</span>, and creating sleek, responsive websites.
            Currently, I'm pursuing a <span className="text-neon-blue">BS in Computer Science</span> at the University of Agriculture, Faisalabad.
            My goal is to blend creativity with technology, constantly learning new tools and techniques to enhance my skills.
          </p>
          
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-2 text-lg font-semibold bg-neon-green text-black rounded-lg shadow-md transition transform hover:scale-110">
              Contact Me
            </button>
            <button className="px-6 py-2 text-lg font-semibold bg-neon-pink text-black rounded-lg shadow-md transition transform hover:scale-110">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
