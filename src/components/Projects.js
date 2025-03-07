import React from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8">
      <h1 className="text-6xl font-extrabold text-neon-green mb-4">My Projects</h1>
      <div className="w-24 h-1 bg-neon-pink mb-8"></div>
      
      <p className="text-gray-300 text-lg text-center max-w-2xl">
        I’m currently working on some amazing projects. Stay tuned for updates as I showcase my latest work here soon! 🚀
      </p>
      
      <div className="mt-6 flex flex-col md:flex-row gap-4">
    {/* GitHub Button */}
<button
  className="mt-4 px-6 py-2 text-lg font-semibold bg-slate-900 text-white rounded-lg shadow-md transition transform hover:scale-110"
>
  <a href="https://github.com/ahrar-2004" target="_blank" rel="noopener noreferrer">
    View GitHub
  </a>
</button>

{/* Contact Me Button */}
<button
  className="mt-4 px-6 py-2 text-lg font-semibold bg-slate-900 text-white rounded-lg shadow-md transition transform hover:scale-110"
>
   <Link smooth to="#contact">Contact Me</Link>
</button>

      </div>
    </div>
  );
}

export default Projects;
