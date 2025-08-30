import React from 'react';
import { Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter, FileDown } from 'lucide-react';
import { mockData } from '../mock';
import { useMode } from '../context/ModeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { mode } = useMode();

  const socialCompany = [
    { icon: Linkedin, href: mockData.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: mockData.social.github, label: 'GitHub' },
  ];

  const socialPersonal = [
    { icon: Linkedin, href: mockData.modes.portfolio.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: mockData.modes.portfolio.social.github, label: 'GitHub' }
  ];

  const quickRSC = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const quickPortfolio = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const quickLinks = mode === 'rsc' ? quickRSC : quickPortfolio;

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bloc 1 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="./logo.png" alt='Logo RSC Technologies' className="h-12 w-12 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {mode === 'rsc' ? 'RSC Technologies' : 'Portfolio — Antoine Rousselle'}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {mode === 'rsc'
                ? mockData.company.description
                : mockData.modes.portfolio.footerText}
            </p>

            {/* Coordonnées (RSC) / CV (Portfolio) */}
            {mode === 'rsc' ? (
              <div className="space-y-2">
                <div className="flex items-center text-gray-400 text-sm">
                  <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                  <a href={`mailto:${mockData.company.email}`} className="hover:text-cyan-400 transition-colors">
                    {mockData.company.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                  <a href={`tel:${mockData.company.phone}`} className="hover:text-cyan-400 transition-colors">
                    {mockData.company.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                  <span>{mockData.company.location}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <a
                  href={mockData.modes.portfolio.cvUrl}
                  download
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline"
                >
                  <FileDown className="w-4 h-4" />
                  Télécharger mon CV (PDF)
                </a>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc 3 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              {mode === 'rsc' ? 'Nos Services' : 'Compétences'}
            </h3>
            <ul className="space-y-3">
              {(mode === 'rsc' ? mockData.footerServices : mockData.modes.portfolio.skills).map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              {mode === 'rsc' ? 'Restez Connecté' : 'Me suivre'}
            </h3>
            <div className="flex space-x-4 mb-6">
              {(mode === 'rsc' ? socialCompany : socialPersonal).map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300 group"
                    aria-label={s.label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {mode === 'rsc'
                ? 'Suivez-moi pour nos actualités et conseils en cybersécurité.'
                : 'Projets, code et parcours à jour sur mes profils.'}
            </p>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} RSC Technologies. Tous droits réservés.
            </div>
            {mode === 'rsc' && (
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="/politique-confidentialite.html" target="_blank" className="hover:text-cyan-400 transition-colors">Politique de confidentialité</a>
                <a href="/mentions-legales.html" target="_blank" className="hover:text-cyan-400 transition-colors">Mentions légales</a>
                <a href="/cgv.html" target="_blank" className="hover:text-cyan-400 transition-colors">CGV</a>
              </div>
            )}
          </div>
        </div>

        {/* Badge tech */}
        {mode === 'rsc' && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-xs">Site sécurisé avec chiffrement SSL/TLS</span>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;