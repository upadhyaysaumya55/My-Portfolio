import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/profile.png";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketAnim from "../assets/rocket.json";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Profile Image */}
        <div
          className="relative flex justify-center md:order-last"
          data-aos="fade-left"
        >
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-500 to-purple-600 blur-3xl opacity-60 animate-pulse"></div>

            {/* Image */}
            <img
              src={profileImg}
              alt="Saumya Kumari"
              className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl backdrop-blur-md group-hover:scale-105 transition duration-500"
            />

            {/* Floating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
          </div>
        </div>

        {/* Text Content */}
        <div
          className="space-y-6 text-center md:text-left"
          data-aos="fade-right"
        >
          
          {/* Name */}
          <div>
            <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-tight">
              👩‍💻 Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Saumya Kumari
              </span>
            </h1>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <p className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-semibold">
              Full Stack Developer 🚀
            </p>

            <p className="text-indigo-300 text-sm sm:text-base md:text-lg font-medium">
              Aspiring AWS Cloud Engineer | Docker • CI/CD • Kubernetes
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 text-base sm:text-lg">
            Passionate about building{" "}
            <span className="text-cyan-400 font-semibold">
              scalable web applications
            </span>{" "}
            and exploring{" "}
            <span className="text-indigo-400 font-semibold">
              cloud-native technologies
            </span>
            . I enjoy creating modern, responsive, and high-performance
            applications using MERN Stack and DevOps tools.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            {[
              "React.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "AWS",
              "Docker",
              "CI/CD",
              "Kubernetes",
              "GitHub",
              "REST APIs",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-cyan-300 backdrop-blur-md hover:scale-105 hover:bg-cyan-500/20 transition duration-300 shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-4">
            
            {/* Projects Button */}
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              🚀 View Projects
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white font-semibold transition duration-300"
            >
              📩 Contact Me
            </a>

            {/* Rocket Animation */}
            <Player
              autoplay
              loop
              src={rocketAnim}
              style={{ height: "55px", width: "55px" }}
            />
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-6">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-400">MERN</h3>
              <p className="text-gray-400 text-sm">Tech Stack</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">AWS</h3>
              <p className="text-gray-400 text-sm">Cloud Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;