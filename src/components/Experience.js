import React from "react";

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 md:px-12 py-10">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neon-green mb-4">
        Experience
      </h1>
      <div className="w-24 h-1 bg-neon-pink mb-8"></div>

      {/* Content */}
      <div className="max-w-2xl text-center text-gray-300 text-lg sm:text-xl leading-relaxed">
        <p>
          Currently, I am a <span className="text-neon-blue font-semibold">Computer Science student</span> at the 
          University of Agriculture, Faisalabad. While I do not have professional job experience yet, I am constantly 
          honing my skills in <span className="text-neon-pink">web development, video editing, and design</span>.  
        </p>
        <p className="mt-4">
          I actively work on personal projects, academic assignments, and freelance design work to build my expertise. 
          My focus is on learning new technologies and improving my ability to create <span className="text-neon-green">impactful digital solutions</span>.
        </p>
      </div>
    </div>
  );
}

export default Experience;
