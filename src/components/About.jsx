import React from 'react';
import { Shield, Code, Cog, Users, Award, Bug } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';
import { useMode } from '../context/ModeContext';

const About = () => {
  const { mode } = useMode();

  // Stats selon le mode (plus crédible côté portfolio)
  const stats = mode === "rsc"
    ? [
        { icon: Users, label: 'Clients accompagnés', value: '3+', color: 'text-cyan-400' },
        { icon: Award, label: 'Projets livrés', value: '10+', color: 'text-blue-400' },
        { icon: Bug,   label: 'Vulnérabilités corrigées', value: '25+', color: 'text-purple-400' },
      ]
    : [
        { icon: Award, label: 'Projets perso/école', value: '10+', color: 'text-cyan-400' },
        { icon: Bug,   label: 'Labs / TryHackMe', value: 'XX', color: 'text-blue-400' },
        { icon: Users, label: 'Dispo alternance', value: 'Oui', color: 'text-purple-400' },
      ];

  const values = [
    {
      icon: Shield,
      title: 'Sécurité Avancée',
      description: 'Audit basique (OWASP), durcissement des headers, auth sécurisée.',
      color: 'text-cyan-400'
    },
    {
      icon: Code,
      title: 'Code de Qualité',
      description: 'React/Next.js, tests de base, CI, conventions et docs.',
      color: 'text-blue-400'
    },
    {
      icon: Cog,
      title: 'Automatisation CI/CD',
      description: 'Mise en place de pipelines automatisés (GitHub Actions, Docker, Makefile).',
      color: 'text-purple-400'
    }
  ];

  const title = mode === "rsc" ? "À Propos de RSC Technologies" : "À Propos — Antoine Rousselle";
  const description = mode === "rsc" ? mockData.company.description : mockData.modes.portfolio.about;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900/50 border border-gray-700 mb-4 group-hover:border-cyan-500/50 transition-all duration-300">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Card key={i} className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 border border-gray-600 mb-4 group-hover:border-cyan-500/50 transition-all duration-300">
                    <Icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Techs */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {mockData.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-gray-900/50 text-gray-300 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;