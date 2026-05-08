import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const checkScrollTop = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
      relative z-10
      py-10 px-4
      bg-gradient-to-br
      from-gray-100 via-white to-gray-200
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white
      transition-all duration-300
      border-t border-gray-300 dark:border-gray-700
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Logo / Name */}
        <h2
          className="
          text-3xl font-extrabold mb-3
          bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500
          bg-clip-text text-transparent
          "
        >
          Saumya Kumari
        </h2>

        {/* Subtitle */}
        <p
          className="
          text-gray-600 dark:text-gray-300
          max-w-2xl mx-auto mb-8
          "
        >
          Full Stack Developer • Aspiring AWS Cloud Engineer •
          Passionate about Backend Development, Cloud Technologies,
          and building scalable web applications.
        </p>

        {/* Social Icons */}
        <div
          className="
          flex justify-center items-center gap-6 mb-8
          "
          data-aos="fade-up"
        >
          {/* GitHub */}
          <a
            href="https://github.com/upadhyaysaumya55"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
            text-3xl
            text-gray-700 dark:text-white
            hover:text-indigo-500
            hover:scale-125
            transition-all duration-300
            "
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saumya-k-211917206/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
            text-3xl
            text-gray-700 dark:text-white
            hover:text-cyan-500
            hover:scale-125
            transition-all duration-300
            "
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:saumyaupadhyay621@gmail.com"
            aria-label="Email"
            className="
            text-3xl
            text-gray-700 dark:text-white
            hover:text-red-500
            hover:scale-125
            transition-all duration-300
            "
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mb-6"></div>

        {/* Footer Bottom */}
        <div
          className="
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
          "
        >
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Saumya Kumari. All rights reserved.
          </p>

          {/* Made with love */}
          <p
            className="
            flex items-center gap-2
            text-sm text-gray-600 dark:text-gray-400
            "
          >
            Built with{" "}
            <FaHeart className="text-red-500 animate-pulse" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="
          fixed bottom-6 right-6
          bg-gradient-to-r from-indigo-500 to-purple-600
          hover:from-purple-600 hover:to-indigo-500
          text-white p-4 rounded-full
          shadow-xl
          hover:scale-110
          transition-all duration-300
          animate-bounce
          z-50
          "
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
}

export default Footer;