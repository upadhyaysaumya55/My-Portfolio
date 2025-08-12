import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 100 },
  { name: "CSS3", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Express.js", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "SQL", level: 60 },
  { name: "PostgreSQL", level: 85 },
  { name: "Git & GitHub", level: 95 },
  { name: "Docker", level: 70 },
  { name: "Kubernetes", level: 70 },
  { name: "CI/CD", level: 70 },
  { name: "Cloud Computing", level: 75 },
  { name: "REST APIs", level: 75 },
  { name: "Microservices Architecture", level: 70 },
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
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-sm text-pink-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                  />
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
