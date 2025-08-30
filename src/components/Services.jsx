import React from 'react';
import { Code, Shield, Lock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mock';
import CtaSection from './CtaSection';

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

  const serviceToCategory = {
    "Développement Web": "Web Development",
    "Cybersécurité": "Cybersecurity",
    "DevSecOps": "CI/CD",
  };

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
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
                    onClick={() => {
                      const filter = serviceToCategory[service.title] ?? "All";
                      const url = new URL(window.location.href);
                      if (filter && filter !== "All")
                        url.searchParams.set("filter", filter);
                      else 
                        url.searchParams.delete("filter");
                      url.hash = "#projects"; // <- même id que la section
                      window.history.pushState({}, "", url);

                      // 2) prévenir Projects qu’il doit relire l’URL
                      window.dispatchEvent(new PopStateEvent("popstate"));

                      // 3) scroll doux
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <CtaSection />
      </div>
    </div>
  );
};

export default Services;