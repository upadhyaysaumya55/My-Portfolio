import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumePDF from '../assets/Resume.pdf'; 

import { motion } from 'framer-motion';

const NavBar = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme or system preference
  useEffect(() => {
    AOS.init({ duration: 800 });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme to <html> and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60 }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Saumya
        </a>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden lg:flex space-x-6 items-center text-gray-800 dark:text-gray-200 font-medium">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-blue-500 transition duration-200 capitalize">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-200"
            >
              Resume
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="text-xl transition hover:scale-110" aria-label="Toggle Theme">
              {theme === 'light' ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden px-6 pb-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 space-y-3"
        >
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={toggleMenu}
                className="block w-full hover:text-blue-500 transition duration-200 capitalize"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              onClick={toggleMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Resume
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="text-xl">
              {theme === 'light' ? '🌞' : '🌙'}
            </button>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default NavBar;
