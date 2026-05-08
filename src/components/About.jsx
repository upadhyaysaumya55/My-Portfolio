import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/profile.png";
import resumePDF from "../assets/Resume.pdf";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="
      py-20 px-4 md:px-8
      bg-gradient-to-br
      from-gray-100 via-white to-gray-200
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-white
      transition-all duration-300
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Profile Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="zoom-in"
          >
            <div className="rounded-3xl overflow-hidden border-4 border-indigo-400 shadow-2xl hover:scale-105 transition duration-300">
              <img
                src={profileImage}
                alt="Profile"
                className="w-72 h-72 object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-gray-700 dark:text-gray-300">

            {/* Intro */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="leading-relaxed text-lg"
            >
              Hi! I'm a{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-cyan-500 dark:text-cyan-400">
                Aspiring AWS Cloud Engineer
              </span>{" "}
              passionate about building scalable web applications and
              cloud-based solutions.
            </p>

            {/* Skills */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="leading-relaxed"
            >
              I specialize in{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                React.js, Node.js, Express.js, MongoDB, REST APIs
              </span>{" "}
              and modern development practices to create fast,
              responsive, and user-friendly applications.
            </p>

            {/* DevOps */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="leading-relaxed"
            >
              I also work with{" "}
              <span className="font-semibold text-cyan-500 dark:text-cyan-400">
                AWS, Docker, CI/CD, GitHub Actions, and Kubernetes basics
              </span>{" "}
              while continuously improving my backend and cloud engineering
              skills.
            </p>

            {/* Passion */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="leading-relaxed"
            >
              I enjoy solving real-world problems, optimizing applications,
              learning new technologies, and building projects that improve
              scalability, performance, and user experience.
            </p>

            {/* Education */}
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="leading-relaxed"
            >
              <strong className="text-black dark:text-white">
                Education:
              </strong>{" "}
              BCA, Aryabhatta Knowledge University
              <br />

              <strong className="text-black dark:text-white">
                Hobbies:
              </strong>{" "}
              Coding, backend development, cloud computing, exploring
              DevOps tools, and learning modern technologies.
            </p>

            {/* Resume Button */}
            <div data-aos="fade-up" data-aos-delay="600">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-block px-6 py-3 rounded-xl
                bg-indigo-500 hover:bg-indigo-600
                text-white font-medium
                shadow-lg hover:shadow-indigo-500/40
                transition duration-300
                "
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div
          className="mt-24"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-indigo-500 dark:text-indigo-400 mb-12">
            My Journey
          </h3>

          <div className="relative border-l-4 border-indigo-500 pl-8 space-y-12">

            {/* Internship */}
            <div data-aos="fade-right" data-aos-delay="100">
              <div className="absolute -left-[11px] w-5 h-5 bg-indigo-500 rounded-full"></div>

              <h4 className="text-xl font-semibold text-black dark:text-white">
                April 2025 – Present
              </h4>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Full Stack Developer Intern at Unified Mentor Pvt. Ltd.
              </p>
            </div>

            {/* BCA */}
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="absolute -left-[11px] w-5 h-5 bg-cyan-400 rounded-full"></div>

              <h4 className="text-xl font-semibold text-black dark:text-white">
                2022 – 2025
              </h4>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Bachelor of Computer Applications (BCA) –
                Aryabhatta Knowledge University
              </p>
            </div>

            {/* School */}
            <div data-aos="fade-right" data-aos-delay="300">
              <div className="absolute -left-[11px] w-5 h-5 bg-purple-400 rounded-full"></div>

              <h4 className="text-xl font-semibold text-black dark:text-white">
                2020 – 2022
              </h4>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Higher Secondary Education – BSEB Board
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;