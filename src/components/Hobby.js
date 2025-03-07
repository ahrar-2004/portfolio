import React from 'react';

function Hobby() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 md:px-16">
      <h1 className="text-6xl font-extrabold text-neon-green mb-4">Hobbies</h1>
      <div className="w-24 h-1 bg-neon-pink mb-8"></div>

      <div className="text-lg text-gray-300 space-y-6 text-center md:text-left">
        <p>
          I have a deep love for <span className="text-neon-green font-bold">pets</span> and enjoy spending time with them.
        </p>
        <p>
          I am also passionate about <span className="text-neon-pink font-bold">art and creativity</span>. My hobbies include:
        </p>
        <ul className="list-disc list-inside text-neon-blue">
          <li>Calligraphy</li>
          <li>Painting</li>
          <li>Drawing</li>
          <li>Sketching Portraits</li>
        </ul>
      </div>
    </div>
  );
}

export default Hobby;
