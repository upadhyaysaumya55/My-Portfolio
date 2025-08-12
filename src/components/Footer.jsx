import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 relative z-10">
      <div className="container mx-auto text-center">
        <div 
          className="flex justify-center gap-6 mb-4"
          data-aos="fade-up"
        >
          <a
            href="https://github.com/upadhyaysaumya55"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-2xl hover:text-purple-400 transition-transform duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saumya-k-211917206/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-2xl hover:text-blue-400 transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:saumyaupadhyay621@gmail.com"
            aria-label="Email"
            className="text-2xl hover:text-red-400 transition-transform duration-300 hover:scale-125"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2025 Saumya Kumari. All rights reserved.</p>
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 animate-bounce z-50"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
}

export default Footer;
