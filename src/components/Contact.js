import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        formData,
        "your_user_id"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white px-8 py-12">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-12 text-center text-neon-green">
        Connect with Me
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/3 text-left transform -translate-x-5">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Let's Talk</h2>
          <p className="text-gray-400 mb-6">
            I'm currently available for projects. Feel free to message me.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-neon-green" />
              <a
                href="mailto:ahmadaliahrar@gmail.com"
                className="hover:text-neon-green transition"
              >
                ahmadaliahrar@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-neon-green" />
              <span>+923184875361</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-neon-green" />
              <span>Toba Tek Singh, Pakistan</span>
            </div>
            <div className="flex space-x-4 text-2xl mt-4">
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
        <div className="md:w-2/3 bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg transform translate-x-5">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-neon-green outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-neon-green outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">
                Write your message here
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-neon-green outline-none"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-200 text-black font-semibold py-2 rounded-md shadow-md transition transform hover:scale-105"
            >
              Submit now
            </button>

            {success && (
              <p className="text-green-400 mt-3">Message sent successfully!</p>
            )}
            {error && (
              <p className="text-red-500 mt-3">
                Failed to send message. Try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
