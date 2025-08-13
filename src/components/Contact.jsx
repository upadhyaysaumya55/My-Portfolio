import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/+916205745284?text=Hello%20I%20would%20like%20to%20connect!`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      // Permanent dark background
      className="w-full px-4 py-20 bg-gradient-to-tr from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl space-y-6 border border-gray-700"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="👤 Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-gray-900 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="📧 Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-gray-900 text-white"
            />
            <textarea
              name="message"
              placeholder="💬 Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-gray-900 text-white resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              🚀 Send Message
            </motion.button>
          </div>

          {success && (
            <motion.p
              className="text-green-400 font-semibold mt-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl cursor-pointer animate-pulse hover:scale-110 transition-transform duration-300"
        onClick={handleWhatsApp}
        title="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <FaWhatsapp size={26} />
      </motion.div>
    </section>
  );
};

export default Contact;
