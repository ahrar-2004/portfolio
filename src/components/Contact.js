import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedin,  FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      const response = await emailjs.sendForm(
        serviceID,
        templateID,
        e.target,
        publicKey
      );

      console.log("Success:", response);
      setStatus({ loading: false, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed:", error);
      setStatus({ loading: false, message: "Failed to send message. Try again later." });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white px-6 md:px-12 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-green">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl gap-8">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Let's Talk</h2>
          <p className="text-gray-400 mb-6">Feel free to reach out!</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <FaEnvelope className="text-neon-green" />
              <a href="mailto:ahmadaliahrar@gmail.com" className="hover:text-neon-green transition">
                ahmadaliahrar@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center space-x-3 justify-center md:justify-start">
              <FaPhone className="text-neon-green" />
              <span>+923184875361</span>
            </div> */}
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-neon-green" />
              <span>Toba Tek Singh, Pakistan</span>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl mt-4">
              <a href="https://github.com/ahrar-2004" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-ali-ahrar-b73650347/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-2/3 w-full max-w-lg bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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

            <div>
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

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
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
              className="w-full bg-gray-200 text-black font-semibold py-2 rounded-md shadow-md transition-transform duration-200 hover:scale-105"
              disabled={status.loading}
            >
              {status.loading ? "Sending..." : "Submit Now"}
            </button>

            {status.message && <p className="text-center mt-3">{status.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;