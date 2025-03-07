import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ahmad Ali Ahrar. All Rights Reserved.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-3 text-xl">
          <a
            href="https://github.com/ahrar-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-ali-ahrar-b73650347/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
