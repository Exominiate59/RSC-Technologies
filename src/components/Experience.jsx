import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const Experience = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Notre Parcours
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            L'évolution de RSC Technologies au fil des années
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {mockData.experience.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-black z-10">
                  <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Year badge */}
                      <div className="flex items-center mb-4">
                        <Calendar className="h-4 w-4 text-cyan-400 mr-2" />
                        <span className="text-cyan-400 font-semibold text-lg">{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative element */}
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span>Étape clé</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alignment */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2025</div>
            <div className="text-gray-400">Année de création</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">45+</div>
            <div className="text-gray-400">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{"< 24h"}</div>
            <div className="text-gray-400">Délai de réponse</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400">Support technique</div>
          </div>
        </div>

        {/* Future vision */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Vision 2025</h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Continuer à innover dans le domaine de la cybersécurité et du développement web, 
            en accompagnant mes clients vers une transformation digitale sécurisée et durable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;