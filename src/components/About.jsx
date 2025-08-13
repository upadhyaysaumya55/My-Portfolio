import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/Resume.pdf';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      // Permanent dark gradient background, no theme-based switching
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 md:px-8 transition-colors duration-300 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="zoom-in"
          >
            <div className="rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-400 hover:scale-105 transition-transform duration-300">
              <img
                src={profileImage}
                alt="Profile"
                className="w-72 h-72 object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-gray-300">
            <p data-aos="fade-up" data-aos-delay="100">
              Hi! I'm a{' '}
              <span className="font-semibold text-indigo-400">
                Full Stack Software Developer
              </span>{' '}
              (MERN Stack) who loves turning ideas into interactive digital experiences.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              I specialize in{' '}
              <span className="font-semibold text-indigo-400">
                React, Node.js, Express, MongoDB
              </span>{' '}
              and modern tools to build fast, scalable applications.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              I write clean, maintainable code and thrive in collaborative environments using Git, REST APIs, and CI/CD.
            </p>
            <p data-aos="fade-up" data-aos-delay="400">
              <strong>Education:</strong> BCA, Aryabhatta Knowledge University
              <br />
              <strong>Hobbies:</strong> UI/UX Design, Digital Art, Coding Challenges, Tech Blogging
            </p>

            {/* Resume CTA */}
            <div data-aos="fade-up" data-aos-delay="500">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg transition duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="mt-20"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-2xl font-bold mb-10 text-center text-indigo-400">
            My Journey
          </h3>
          <div className="relative pl-6 border-l-4 border-gradient-to-b from-indigo-400 to-purple-500">
            <div className="space-y-10 ml-2">
              <div data-aos="fade-right" data-aos-delay="100">
                <h4 className="text-xl font-semibold text-white">
                  April, 2025 – Present
                </h4>
                <p className="text-gray-300">Full Stack Developer Intern at Unified Mentor</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="200">
                <h4 className="text-xl font-semibold text-white">2022 – 2025</h4>
                <p className="text-gray-300">BCA, Aryabhatta Knowledge University</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="300">
                <h4 className="text-xl font-semibold text-white">2020 – 2022</h4>
                <p className="text-gray-300">Higher Secondary Schooling – BSEB Board</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
