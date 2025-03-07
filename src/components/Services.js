import React from 'react';
import { FaReact, FaLaptopCode } from 'react-icons/fa';

function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 md:px-16">
      <h1 className="text-6xl font-extrabold text-neon-green mb-4">Services</h1>
      <div className="w-24 h-1 bg-neon-pink mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* Front-End Development */}
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-neon-green hover:scale-105 transition-transform">
          <FaReact className="text-6xl text-neon-green mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Front-End Development</h2>
          <p className="text-gray-300 mt-2">
            I build responsive and interactive web pages using React.
          </p>
        </div>

        {/* Basic Web Pages */}
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-neon-pink hover:scale-105 transition-transform">
          <FaLaptopCode className="text-6xl text-neon-pink mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Basic Web Pages</h2>
          <p className="text-gray-300 mt-2">
            I create sleek and modern web designs with a great user experience.
          </p>
        </div>
      </div>

      <p className="text-gray-400 mt-8">More services will be added soon! 🚀</p>
    </div>
  );
}

export default Services;
