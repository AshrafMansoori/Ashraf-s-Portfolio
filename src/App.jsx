import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import Skills from './sections/Skills';
import Projects from './sections/Project';
import Experience from './sections/Experience';
import Certifications from './sections/Certification';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackButton';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    // Updated line: Added light/dark classes and smooth transition
    <div className="min-h-screen overflow-x-hidden bg-gray-50 text-gray-900 dark:bg-[#050914] dark:text-white font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <Skills />
        <Projects />
        <Experience />
        <Certifications/>
        <About/>
        <Contact/>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;