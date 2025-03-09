import React from 'react';

function Education() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8">
      <h1 className="text-6xl font-extrabold text-neon-green mb-4">Education</h1>
      <div className="w-24 h-1 bg-neon-pink mb-8"></div>
      
      <div className="text-gray-300 text-lg max-w-2xl">
        <p className="mb-4">
        🎓 Currently, I'm pursuing a <span className="text-neon-green font-bold">BS in Computer Science</span> 
          (2024-2028) at <span className="text-neon-pink"> University of Agriculture, Faisalabad</span>. 
          I secured a <span className="text-neon-blue font-bold">3.37 GPA</span> in my first semester.
        
        </p>
        
        <p className="mb-4">
          🎓 I pursued my <span className="text-neon-green font-bold">Intermediate (FSc Pre-Medical)</span> from 
          <span className="text-neon-pink"> Superior Group of Colleges (2022-2024)</span> and secured 
          <span className="text-neon-blue font-bold"> 983/1200</span> marks.
        </p>

        <p className="mb-4">
        🎓 I completed my <span className="text-neon-green font-bold">Matriculation</span> from 
          <span className="text-neon-pink"> Al-Ain Public School (2020-2022)</span> and secured 
          <span className="text-neon-blue font-bold"> 1013/1100</span> marks.
        </p>
      </div>
    </div>
  );
}

export default Education;
