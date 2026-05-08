import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import resumePDF from "../assets/Resume.pdf";
import { motion } from "framer-motion";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // AOS + Theme Setup
  useEffect(() => {
    AOS.init({ duration: 800 });

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDark ? "dark" : "light");
    }

    // Scroll Effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply Theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 60,
      }}
      data-aos="fade-down"
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
        max-w-7xl mx-auto
        px-4 sm:px-6 py-4
        flex justify-between items-center
        "
      >

        {/* Logo */}
        <a
          href="#home"
          className="
          text-2xl md:text-3xl
          font-extrabold
          bg-gradient-to-r
          from-cyan-500
          via-indigo-500
          to-purple-500
          bg-clip-text text-transparent
          "
        >
          Saumya
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="
          lg:hidden
          text-gray-800 dark:text-gray-200
          focus:outline-none
          "
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul
          className="
          hidden lg:flex
          items-center gap-8
          text-gray-800 dark:text-gray-200
          font-medium
          "
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="
                relative capitalize
                hover:text-cyan-500
                transition duration-300
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px]
                after:bg-cyan-500
                after:transition-all after:duration-300
                hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}

          {/* Resume */}
          <li>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-5 py-2 rounded-full
              bg-gradient-to-r
              from-indigo-600 to-cyan-500
              hover:from-indigo-700
              hover:to-cyan-600
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition duration-300
              "
            >
              Resume
            </a>
          </li>

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="
              text-2xl
              hover:scale-110
              transition duration-300
              "
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "🌞"}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
          className="
          lg:hidden
          px-6 py-6
          space-y-5
          backdrop-blur-xl
          bg-white/90 dark:bg-gray-900/90
          text-gray-800 dark:text-gray-200
          border-t border-gray-200 dark:border-gray-700
          "
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={toggleMenu}
                className="
                block w-full
                capitalize
                hover:text-cyan-500
                transition duration-300
                "
              >
                {item}
              </a>
            </li>
          ))}

          {/* Resume */}
          <li>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="
              inline-block
              px-5 py-2 rounded-full
              bg-gradient-to-r
              from-indigo-600 to-cyan-500
              text-white font-semibold
              shadow-lg
              "
            >
              Resume
            </a>
          </li>

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="
              text-2xl
              hover:scale-110
              transition duration-300
              "
            >
              {theme === "light" ? "🌙" : "🌞"}
            </button>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default NavBar;