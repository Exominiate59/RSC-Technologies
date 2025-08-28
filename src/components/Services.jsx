import React from 'react';
import { Code, Shield, Lock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Services = () => {
  const iconMap = {
    Code: Code,
    Shield: Shield,
    Lock: Lock
  };

  const colorMap = {
    Code: 'text-cyan-400',
    Shield: 'text-blue-400',
    Lock: 'text-purple-400'
  };

  const borderColorMap = {
    Code: 'hover:border-cyan-500/50',
    Shield: 'hover:border-blue-500/50',
    Lock: 'hover:border-purple-500/50'
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des solutions complètes pour sécuriser et développer votre présence digitale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mockData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const iconColor = colorMap[service.icon];
            const borderColor = borderColorMap[service.icon];
            
            return (
              <Card 
                key={service.id} 
                className={`bg-gray-900/50 border-gray-700 ${borderColor} transition-all duration-300 group hover:transform hover:scale-105`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 border border-gray-600 mb-4 group-hover:border-cyan-500/50 transition-all duration-300 mx-auto">
                    <IconComponent className={`h-8 w-8 ${iconColor}`} />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Prêt à sécuriser votre projet ?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé pour votre projet.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/25"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;