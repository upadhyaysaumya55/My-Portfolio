import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import cruiseImg from '../assets/cruise-ship.png';
import resumeImg from '../assets/interactive-resume.png';
import recipeImg from '../assets/recipe-book.png';
import portfolioImg from '../assets/portfolio.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: 'Cruise-Ship Management System',
      desc: 'A full-stack web app for managing cruise bookings, orders, and admin roles.',
      image: cruiseImg,
      aos: 'fade-right',
    },
    {
      title: 'Interactive Resume',
      desc: 'An interactive resume site with downloadable PDF, sections, animations, and contact form.',
      image: resumeImg,
      aos: 'fade-up',
      liveDemo: 'https://interactive-resume-navy.vercel.app/',
      sourceCode: 'https://github.com/upadhyaysaumya55/interactive-resume.git',
    },
    {
      title: 'Recipe Book App',
      desc: 'A MERN recipe app with login/signup, filtering, edit/delete, and user-specific recipes.',
      image: recipeImg,
      aos: 'fade-left',
      liveDemo: 'https://recipe-book-gilt-two.vercel.app/',
      sourceCode: 'https://github.com/upadhyaysaumya55/recipe-book.git',
    },
    {
      title: 'Portfolio Site',
      desc: 'A minimal portfolio built using React-Bootstrap and styled-components.',
      image: portfolioImg,
      aos: 'fade-right',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white"
          data-aos="zoom-in"
        >
          🚀 My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-800 border border-slate-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
              data-aos={project.aos}
              data-aos-delay={index * 200}
              whileHover={{ scale: 1.05 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/20 via-transparent to-yellow-600/10 z-0" />

              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover z-10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.desc}
                </p>

                {/* Links */}
                <div className="flex space-x-4 mt-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-600 font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-600 font-semibold"
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
