import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_92nmtqk";
    const TEMPLATE_ID = "template_jjgkr79";
    const PUBLIC_KEY = "dXcUuj_oHJoLr6CM9";

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);

        alert(
          "❌ Failed to send message. Please try again later."
        );
      });
  };

  return (
    <section
      id="contact"
      className="
      w-full px-4 py-20
      bg-gradient-to-br
      from-gray-100 via-white to-gray-200
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white
      transition-all duration-300
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="
          text-4xl sm:text-5xl
          font-extrabold text-center mb-5
          "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect 🚀
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="
          text-center mb-14
          text-gray-600 dark:text-gray-300
          max-w-2xl mx-auto
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a project idea, collaboration opportunity, or just want
          to connect? Feel free to send me a message.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="
          backdrop-blur-xl
          bg-white/70 dark:bg-gray-800/70
          border border-gray-200 dark:border-gray-700
          shadow-2xl rounded-3xl
          p-8 md:p-10
          space-y-6
          "
          data-aos="fade-up"
        >

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="👤 Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
              w-full px-4 py-3 rounded-xl
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-600
              text-black dark:text-white
              focus:outline-none focus:ring-2
              focus:ring-indigo-500
              transition-all duration-300
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="📧 Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
              w-full px-4 py-3 rounded-xl
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-600
              text-black dark:text-white
              focus:outline-none focus:ring-2
              focus:ring-cyan-500
              transition-all duration-300
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Your Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="💬 Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="
              w-full px-4 py-3 rounded-xl
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-600
              text-black dark:text-white
              focus:outline-none focus:ring-2
              focus:ring-purple-500
              transition-all duration-300
              resize-none
              "
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="
              bg-gradient-to-r
              from-indigo-600 via-cyan-500 to-purple-600
              hover:from-purple-600 hover:to-indigo-600
              text-white font-semibold
              py-3 px-8 rounded-xl
              shadow-lg hover:shadow-indigo-500/40
              transition-all duration-300
              "
            >
              🚀 Send Message
            </motion.button>
          </div>

          {/* Success Message */}
          {success && (
            <motion.p
              className="
              text-green-500 font-semibold
              text-center mt-4
              "
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