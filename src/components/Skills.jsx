import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color:
      "from-cyan-500 to-blue-500",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js",
    ],
  },

  {
    title: "Backend",
    color:
      "from-indigo-500 to-purple-500",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "Microservices",
    ],
  },

  {
    title: "Database",
    color:
      "from-pink-500 to-rose-500",
    skills: [
      "MongoDB",
      "SQL",
      "PostgreSQL",
    ],
  },

  {
    title: "Cloud & DevOps",
    color:
      "from-orange-500 to-yellow-500",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud Computing",
      "Linux (Basic)",
    ],
  },

  {
    title: "Tools",
    color:
      "from-emerald-500 to-green-500",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section
      id="skills"
      className="
      py-20 px-4 md:px-8
      bg-gradient-to-br
      from-gray-100 via-white to-gray-200
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      text-gray-900 dark:text-white
      transition-all duration-500
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className="
            text-4xl md:text-5xl
            font-extrabold mb-4
            "
            data-aos="fade-up"
          >
            My Skills 🚀
          </h2>

          <p
            className="
            text-gray-600 dark:text-gray-300
            max-w-2xl mx-auto
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technologies and tools I use to build
            scalable full-stack applications,
            cloud-based solutions, and modern
            responsive web experiences.
          </p>
        </div>

        {/* Skill Categories */}
        <div
          className="
          grid grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          "
        >
          {skillCategories.map(
            (category, index) => (
              <motion.div
                key={index}
                data-aos={
                  index % 2 === 0
                    ? "fade-right"
                    : "fade-left"
                }
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                rounded-3xl
                p-6
                backdrop-blur-xl
                bg-white/70 dark:bg-gray-800/70
                border border-gray-200 dark:border-gray-700
                shadow-2xl
                hover:shadow-cyan-500/20
                transition-all duration-500
                "
              >

                {/* Category Title */}
                <div
                  className={`
                  inline-block px-5 py-2 rounded-full
                  bg-gradient-to-r ${category.color}
                  text-white font-bold text-sm
                  shadow-lg mb-6
                  `}
                >
                  {category.title}
                </div>

                {/* Skills */}
                <div
                  className="
                  flex flex-wrap gap-3
                  "
                >
                  {category.skills.map(
                    (skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="
                        px-4 py-2 rounded-full
                        bg-gray-200 dark:bg-gray-900
                        text-gray-800 dark:text-gray-200
                        border border-gray-300 dark:border-gray-700
                        text-sm font-medium
                        shadow-md
                        hover:bg-cyan-500
                        hover:text-white
                        transition-all duration-300
                        cursor-default
                        "
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Bottom Stats */}
        <div
          className="
          mt-20
          grid grid-cols-1 sm:grid-cols-3
          gap-6
          "
        >

          {/* Projects */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            text-center rounded-2xl
            p-6
            bg-white/70 dark:bg-gray-800/70
            border border-gray-200 dark:border-gray-700
            shadow-xl
            "
          >
            <h3
              className="
              text-4xl font-extrabold
              text-cyan-500 dark:text-cyan-400
              "
            >
              6+
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Projects Built
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            text-center rounded-2xl
            p-6
            bg-white/70 dark:bg-gray-800/70
            border border-gray-200 dark:border-gray-700
            shadow-xl
            "
          >
            <h3
              className="
              text-4xl font-extrabold
              text-indigo-500 dark:text-indigo-400
              "
            >
              MERN
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Full Stack Development
            </p>
          </motion.div>

          {/* Cloud */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            text-center rounded-2xl
            p-6
            bg-white/70 dark:bg-gray-800/70
            border border-gray-200 dark:border-gray-700
            shadow-xl
            "
          >
            <h3
              className="
              text-4xl font-extrabold
              text-purple-500 dark:text-purple-400
              "
            >
              AWS
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Cloud & DevOps Learning
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;