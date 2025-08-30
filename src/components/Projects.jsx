import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockData } from '../mock';
import { useMode } from '../context/ModeContext';

const Projects = () => {
  const { mode } = useMode();
  const list = mode === 'rsc' ? mockData.projects : mockData.modes.portfolio.projects;

  const categories = useMemo(() => {
    const cats = Array.from(new Set(list.map(p => p.category)));
    return ['All', ...cats];
  }, [list]);

  const getFilterFromURL = () => {
    const qs = new URLSearchParams(window.location.search);
    const f = qs.get("filter");
    return f && categories.includes(f) ? f : "All";
  };

  const [activeFilter, setActiveFilter] = useState(getFilterFromURL);

  useEffect(() => {
    const onPop = () => setActiveFilter(getFilterFromURL());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.join("|")]);

  const updateFilter = (next) => {
    setActiveFilter(next);
    const url = new URL(window.location.href);
    if (next && next !== "All") url.searchParams.set("filter", next);
    else url.searchParams.delete("filter");
    window.history.replaceState({}, "", url); // sans recharger
  };

  const filtered = activeFilter === 'All'
    ? list
    : list.filter(p => p.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-900/50 text-green-400 border-green-500/50';
      case 'In Progress': return 'bg-yellow-900/50 text-yellow-400 border-yellow-500/50';
      default: return 'bg-gray-900/50 text-gray-400 border-gray-500/50';
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {mode === 'rsc' ? 'Mes Projets' : 'Mes Projets'}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {mode === 'rsc'
              ? 'Découvrez mes réalisations en développement web sécurisé et cybersécurité'
              : 'Sélection de projets personnels et scolaires'}
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <Filter className="h-5 w-5 text-gray-400" />
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? 'default' : 'outline'}
              onClick={() => updateFilter(cat)}
              className={
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0'
                  : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.status && (
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 mb-3">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700">
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.link && (
                    <Button size="sm" variant="outline" className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir
                    </Button>
                  )}
                  {project.repo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                      onClick={() => window.open(project.repo, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              {mode === 'rsc' ? 'Vous avez un projet en tête ?' : 'Envie de voir plus ?'}
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              {mode === 'rsc'
                ? 'Parlez-moi de votre vision et transformons-la en réalité sécurisée.'
                : 'Consultez mon GitHub ou demandez mon CV pour voir d’autres travaux.'}
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25"
            >
              Demande de devis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;