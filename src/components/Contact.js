import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  const formData = new FormData(event.target);

  // Ensure reply_to (email) is included
  formData.append("reply_to", event.target.email.value);

  emailjs
    .sendForm(
      "service_5y2p6i5", // Replace with your EmailJS service ID
      "template_og57vly", // Replace with your EmailJS template ID
      event.target,
      "YzwInXni4x-u92c5y" // Replace with your EmailJS public key
    )
    .then(
      (response) => {
        console.log("Success:", response);
        setResult("Form Submitted Successfully!");
        event.target.reset();
      },
      (error) => {
        console.log("Failed:", error);
        setResult("Failed to send message. Try again later.");
      }
    );
};

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white px-6 md:px-12 py-12">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-neon-green">
        Connect with Me
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl gap-8">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Let's Talk</h2>
          <p className="text-gray-400 mb-6">
            I'm currently available for projects. Feel free to message me.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <FaEnvelope className="text-neon-green" />
              <a href="mailto:ahmadaliahrar@gmail.com" className="hover:text-neon-green transition">
                ahmadaliahrar@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <FaPhone className="text-neon-green" />
              <span>+923184875361</span>
            </div>
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-neon-green" />
              <span>Toba Tek Singh, Pakistan</span>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl mt-4">
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
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-2/3 w-full max-w-lg bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">
            Get in Touch
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-neon-green outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="reply_to"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-neon-green outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-neon-green outline-none"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-200 text-black font-semibold py-2 rounded-md shadow-md transition-transform duration-200 hover:scale-105"
            >
              Submit Now
            </button>

            {result && <p className="text-center mt-3">{result}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
