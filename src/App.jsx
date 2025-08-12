import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,    // Animation duration (ms)
      once: true,        // Only animate once when scrolling down
      easing: 'ease-in-out', // Smooth animation
      offset: 100,       // Trigger animations a bit before elements are in view
    });

    // Refresh AOS on route changes or component updates (optional)
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
