import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

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

    const SERVICE_ID = "service_92nmtqk";
    const TEMPLATE_ID = "template_jjgkr79";
    const PUBLIC_KEY = "dXcUuj_oHJoLr6CM9";

    // ✅ Match EmailJS template variables
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    console.log("📤 Sending email with:", templateParams);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("✅ EmailJS Response:", response);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        alert(
          "Failed to send message. Please check the console for details and try again later."
        );
      });
  };

  return (
    <section
      id="contact"
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
    </section>
  );
};

export default Contact;
