import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Git & GitHub",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Cloud Computing",
  "REST APIs",
  "Microservices Architecture",
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16 px-6 lg:px-20 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          data-aos="fade-up"
        >
          My Skills
        </h2>
        <p className="text-gray-300 mb-12 max-w-xl mx-auto" data-aos="fade-up">
          Here are some technologies I’ve been working with:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const animation = index % 2 === 0 ? "fade-left" : "fade-right";
            return (
              <motion.div
                key={index}
                data-aos={animation}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-pink-500/30"
              >
                <div className="flex justify-center">
                  <span className="font-semibold text-white">{skill}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
