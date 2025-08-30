import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useMode } from '../context/ModeContext';

const Navbar = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { mode, setMode } = useMode();

  const baseNav = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  const companyExtras = [
    { name: 'Services', href: '#services' },
    { name: 'Expérience', href: '#experience' },
  ];
  const navItems = mode === 'rsc'
    ? [baseNav[0], baseNav[1], ...companyExtras, baseNav[2], baseNav[3]]
    : baseNav;

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="./logo.png" alt='Logo RSC Technologies' className="h-12 w-12 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              RSC Technologies
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="ml-6 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Switch RSC ↔ Portfolio */}
            <button
              onClick={() => setMode(mode === 'rsc' ? 'portfolio' : 'rsc')}
              className="rounded-full px-3 py-1 border border-cyan-500/40 hover:bg-cyan-500/10 text-sm"
            >
              {mode === 'rsc' ? 'Voir Portfolio' : 'Voir RSC'}
            </button>

            {/* CTA */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/25"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}

              {/* Switch mobile */}
              <button
                onClick={() => setMode(mode === 'rsc' ? 'portfolio' : 'rsc')}
                className="w-full mt-2 rounded-lg border border-cyan-500/40 px-3 py-2 text-gray-300 hover:text-cyan-400"
              >
                {mode === 'rsc' ? 'Voir Portfolio' : 'Voir RSC'}
              </button>

              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;