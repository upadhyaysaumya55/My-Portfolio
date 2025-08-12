import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from '../assets/profile.png';
import { Player } from '@lottiefiles/react-lottie-player';
import rocketAnim from '../assets/rocket.json';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 dark:bg-[#0f172a]"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Profile Image */}
        <div
          className="relative flex justify-center md:order-last"
          data-aos="fade-left"
        >
          <div className="relative group w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-600 blur-xl opacity-70 group-hover:opacity-90 transition duration-500 animate-pulse z-[-1]" />
            <img
              src={profileImg}
              alt="Saumya Kumari"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-[clamp(1.8rem,6vw,3rem)] font-extrabold text-white leading-snug">
            👩‍💻 <span className="block">Saumya Kumari</span>
          </h1>

          {/* Static Subheading (instead of typing) */}
          <p className="text-indigo-400 text-lg sm:text-xl font-semibold h-[28px] min-h-[32px]">
            Full Stack Developer | MERN Stack Engineer | Open Source Contributor
          </p>

          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 px-2 sm:px-0">
            Building <strong>scalable</strong> and <strong>interactive</strong> web apps with 💡 creativity and 🔥 passion.
          </p>

          {/* Animated Tech Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Django', 'Git & GitHub'].map(
              (tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-600/20 text-indigo-300 font-medium text-sm px-3 py-1 rounded-full shadow hover:rotate-1 hover:scale-105 transition-transform duration-300 backdrop-blur"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <a
              href="#projects"
              className="bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-700 hover:to-indigo-800 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-xl transition duration-300"
            >
              🚀 View Projects
            </a>
            <Player autoplay loop src={rocketAnim} style={{ height: '40px', width: '40px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
