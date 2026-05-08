import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import cruiseImg from "../assets/cruise-ship.png";
import resumeImg from "../assets/interactive-resume.png";
import recipeImg from "../assets/recipe-book.png";
import portfolioImg from "../assets/portfolio.png";
import mapImg from "../assets/interactive-map.png";
import weatherImg from "../assets/weather-app.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "Cruise Ship Management System",
      desc:
        "A scalable full-stack web application for managing cruise bookings, onboard services, food ordering, and role-based administration.",
      image: cruiseImg,
      aos: "fade-right",
    },

    {
      title: "Interactive Resume",
      desc:
        "A responsive portfolio resume website with animations, downloadable resume, dark mode, and interactive sections.",
      image: resumeImg,
      aos: "fade-up",
      liveDemo:
        "https://interactive-resume-navy.vercel.app/",
      sourceCode:
        "https://github.com/upadhyaysaumya55/interactive-resume.git",
    },

    {
      title: "Recipe Book App",
      desc:
        "A modern React recipe application with authentication, filtering, search, recipe management, and responsive UI.",
      image: recipeImg,
      aos: "fade-left",
      liveDemo:
        "https://recipe-book-gilt-two.vercel.app/",
      sourceCode:
        "https://github.com/upadhyaysaumya55/recipe-book.git",
    },

    {
      title: "Portfolio Website",
      desc:
        "A professional developer portfolio built with React, Tailwind CSS, Framer Motion, and responsive UI design.",
      image: portfolioImg,
      aos: "fade-right",
      liveDemo:
        "https://my-portfolio-ifbr-taupe.vercel.app/",
      sourceCode:
        "https://github.com/upadhyaysaumya55/My-Portfolio.git",
    },

    {
      title: "Weather App",
      desc:
        "A responsive weather forecasting application with real-time API integration and location-based search functionality.",
      image: weatherImg,
      aos: "fade-left",
      liveDemo:
        "https://sky-cast-weather-b7r7cln4v-upadhyaysaumya55s-projects.vercel.app/",
      sourceCode:
        "https://github.com/upadhyaysaumya55/SkyCast-Weather-App.git",
    },

    {
      title: "Interactive Map",
      desc:
        "An interactive map application featuring real-time location tracking, search functionality, and filtering capabilities.",
      image: mapImg,
      aos: "fade-left",
      liveDemo:
        "https://interactive-map-eight-roan.vercel.app/",
      sourceCode:
        "https://github.com/upadhyaysaumya55/Interactive-map.git",
    },
  ];

  return (
    <section
      id="projects"
      className="
      py-20 px-4
      bg-gradient-to-br
      from-gray-100 via-white to-gray-200
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white
      transition-all duration-500
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="
            text-4xl sm:text-5xl
            font-extrabold
            mb-4
            "
            data-aos="zoom-in"
          >
            🚀 My Projects
          </h2>

          <p
            className="
            text-gray-600 dark:text-gray-300
            max-w-2xl mx-auto
            "
            data-aos="fade-up"
          >
            A collection of projects showcasing my
            skills in full-stack development,
            cloud technologies, APIs, and
            responsive UI design.
          </p>
        </div>

        {/* Project Grid */}
        <div
          className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              data-aos={project.aos}
              data-aos-delay={index * 100}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
              relative overflow-hidden
              rounded-3xl
              backdrop-blur-xl
              bg-white/70 dark:bg-gray-800/70
              border border-gray-200 dark:border-gray-700
              shadow-2xl
              hover:shadow-cyan-500/20
              transition-all duration-500
              "
            >

              {/* Gradient Overlay */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-indigo-500/10
                opacity-0 hover:opacity-100
                transition duration-500
                "
              ></div>

              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="
                w-full h-56
                object-cover
                "
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              />

              {/* Content */}
              <div className="p-6 relative z-10">

                {/* Title */}
                <h3
                  className="
                  text-2xl font-bold
                  mb-3
                  text-gray-900 dark:text-white
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  text-gray-600 dark:text-gray-300
                  leading-relaxed
                  text-sm
                  "
                >
                  {project.desc}
                </p>

                {/* Buttons */}
                <div
                  className="
                  flex flex-wrap gap-4
                  mt-6
                  "
                >

                  {/* Live Demo */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      px-4 py-2 rounded-lg
                      bg-gradient-to-r
                      from-indigo-600
                      to-cyan-500
                      hover:from-indigo-700
                      hover:to-cyan-600
                      text-white text-sm
                      font-semibold
                      shadow-lg
                      transition duration-300
                      "
                    >
                      Live Demo
                    </a>
                  )}

                  {/* Source Code */}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      px-4 py-2 rounded-lg
                      border border-cyan-500
                      text-cyan-600 dark:text-cyan-300
                      hover:bg-cyan-500
                      hover:text-white
                      text-sm font-semibold
                      transition duration-300
                      "
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;