import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import { useMode } from '../context/ModeContext';

const Portfolio = ({ initialMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const { mode, setMode } = useMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Si on arrive sur /portfolio, force le mode
  useEffect(() => {
    if (initialMode) setMode(initialMode);
  }, [initialMode, setMode]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>

        {/* En mode Portfolio, on peut masquer Services si tu préfères */}
        {mode === "rsc" && (
          <section id="services"><Services /></section>
        )}

        <section id="projects"><Projects /></section>

        {/* Timeline : garde-la pour RSC ; tu pourras plus tard faire une version perso */}
        {mode === "rsc" && (
          <section id="experience"><Experience /></section>
        )}

        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;