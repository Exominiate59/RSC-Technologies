export const mockData = {
  company: {
    name: "RSC Technologies",
    tagline: "Développement Web & Cybersécurité — par Antoine Rousselle",
    description: "Développement web sécurisé et solutions de cybersécurité pour protéger votre présence digitale.",
    email: "rousselle.antoine.pro@gmail.com",
    phone: "  33 7 85 08 55 97",
    location: "Lille, France"
  },

  // RSC — Services / Projets / Expérience (inchangés)
  services: [
    { id: 1, title: "Développement Web", description: "Applications web modernes et responsive avec les dernières technologies", icon: "Code", features: ["React/Next.js", "Node.js/Python", "API REST", "Base de données"] },
    { id: 2, title: "Cybersécurité", description: "Protection et audit de sécurité pour vos systèmes et applications", icon: "Shield", features: ["Audit sécurité", "Pentesting", "Chiffrement", "Monitoring"] },
    { id: 3, title: "DevSecOps", description: "Intégration de la sécurité dans vos processus de développement", icon: "Lock", features: ["CI/CD sécurisé", "Tests automatisés", "Déploiement sûr", "Monitoring"] }
  ],

  projects: [
    { 
      id: 1, 
      title: "CI • Build, Test & Mirror", 
      description: "Projet réalisé dans le cadre d'EPITECH, consistant à mettre en place une pipeline CI/CD automatisée avec GitHub Actions.", 
      technologies: ["GitHub Actions","Docker","Makefile","C","Shell"], 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop", 
      category: "CI/CD", 
      status: "Completed",
      repo: "https://github.com/Exominiate59/CI-CD"
    },
    { 
      id: 2, 
      title: "PIPETO – Reverse Binary", 
      description: "Projet de cybersécurité orienté Purple Team : audit en boîte noire et blanche d’un binaire vulnérable, identification et correction des failles avec rapport professionnel.", 
      technologies: ["C","Reverse Engineering","Exploit Development","Security Audit"], 
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop", 
      category: "Cybersecurity", 
      status: "Completed",
      repo: "https://github.com/antoinerousselle/muscu-app"
    },
    { 
      id: 3, 
      title: "Burp Suite Web Pentest", 
      description: "Travaux pratiques de sécurité web réalisés avec Burp Suite : analyse, exploitation et patch de vulnérabilités OWASP sur des environnements simulés.", 
      technologies: ["Burp Suite","OWASP","Web Security","Pentesting"], 
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=800&fit=crop", 
      category: "Cybersecurity", 
      status: "Completed" 
    },
    { 
      id: 4, 
      title: "EpyTodo – API REST", 
      description: "Développement d’une API RESTful en Node.js permettant la gestion d’une todo-list avec système d’authentification et base de données.", 
      technologies: ["Node.js","Express","MySQL","REST API","JavaScript"], 
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop", 
      category: "Web Development", 
      status: "Completed",
      repo: "https://github.com/antoinerousselle/muscu-app"
    },
    { 
      id: 5, 
      title: "Stage – Application Web de Gestion", 
      description: "Projet de stage : développement d’une application web en Node.js/Express avec authentification par rôles, gestion de fichiers PDF et base de données MongoDB.", 
      technologies: ["Node.js","Express","MongoDB","EJS","Multer"], 
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop", 
      category: "Web Development", 
      status: "Completed",
      repo: "https://github.com/antoinerousselle/muscu-app"
    }
  ],

  experience: [
    { id: 1, year: "2025", title: "Portfolio public", description: "Mise en ligne de mon site & de mes projets" },
    { id: 2, year: "2025", title: "Création de RSC Technologies", description: "Lancement de mon entreprise spécialisée en développement web sécurisé" },
    { id: 3, year: "2024 - 2025", title: "Projets marquants", description: "PIPETO – Reverse Binary / CI • Build, Test & Mirror / EpyTodo – API REST" },
    { id: 4, year: "2023", title: "Epitech", description: "Parcours d'ingénieri informatique, focus cybersécurité & dev" }
  ],

  technologies: [
    "React", "Node.js", "Express", "EJS", "MongoDB", "MySQL", "JavaScript", "TypeScript", "C", "Lua", "Python",
    "C++", "HTML", "CSS", "TailwindCSS", "Docker", "OWASP", "Burp Suite", "Pentesting", "Security Audit" 
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/rousselle-antoine-1354a12b2/",
    github: "https://github.com/Exominiate59"
  },

  footerServices: [
    "Développement Web","Cybersécurité","Audit de Sécurité","DevSecOps","Pentesting"
  ],

  // ======= MODES =======
  modes: {
    rsc: {
      hero: {
        title: "RSC Technologies",
        subtitle: "Développement Web & Cybersécurité — par Antoine Rousselle",
        description: "Je conçois des solutions web sécurisées et performantes pour propulser votre entreprise vers l'avenir digital.",
        cta: "Découvrir nos services",
        cta2: "Voir nos réalisations"
      }
    },
    portfolio: {
      hero: {
        title: "Antoine Rousselle",
        subtitle: "Développeur Web (React/Next.js) & passion cybersécurité",
        description: "Je construis des projets modernes côté front/back et j’intègre la sécurité dès le début (DevSecOps).",
        cta: "Voir mon CV",
        cta2: "Voir mes projets"
      },
      about:
        "Étudiant EPITECH (2ᵉ année) et passionné de cybersécurité. J’aime créer des interfaces soignées et des apps fiables, avec une approche sécurité (OWASP). Disponible pour des missions freelance.",
      footerText:
        "Portfolio d’Antoine Rousselle — projets, code et parcours. Ouvert aux opportunités d’alternance (RSSI/DevSecOps) et missions freelance.",
      cvUrl: "/cv.pdf",
      social: {
        linkedin: "https://www.linkedin.com/in/rousselle-antoine-1354a12b2/", // remplace si besoin
        github: "https://github.com/Exominiate59"
      },
      skills: ["React/Next.js","Node.js","Tailwind","OWASP","Pentesting (TryHackMe)","CI/CD","Docker"],
      projects: [
       {
         id: 1,
         title: "EpyTodo – API REST",
         description: "Développement d’une API RESTful en Node.js permettant la gestion d’une todo-list avec système d’authentification et base de données.",
         technologies: ["Node.js","Express","MySQL","REST API","JavaScript"],
         image: "todo.jpeg",
         category: "Projet École",
         status: "Completed",
         repo: "https://github.com/antoinerousselle/corewar"
       },
       {
         id: 2,
         title: "PIPETO - Reverse Binary",
         description: "Audit d’un binaire vulnérable en Purple Team (reverse engineering, patch, rapport).",
         technologies: ["C", "Assembly", "Cybersecurity"],
         image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200&h=800&fit=crop",
         category: "Cybersécurité",
         status: "Completed"
       },
       {
         id: 3,
         title: "Burp - Pentest",
         description: "Analyse et exploitation de failles web, rédaction de rapport.",
         technologies: ["Burp Suite", "OWASP", "Web Security"],
         image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200&h=800&fit=crop",
         category: "Pentesting",
         status: "Completed"
       },
       {
         id: 4,
         title: "Muscu App (Flutter)",
         description: "Application mobile Flutter avec modèles 3D interactifs pour visualiser les exercices par muscle.",
         technologies: ["Flutter", "Dart", "3D"],
         image: "/EpiGym.png",
         category: "Développement Mobile",
         status: "In Progress",
         repo: "https://github.com/antoinerousselle/muscu-app"
       },
       {
         id: 5,
         title: "Muscu Web App",
         description: "Version web avec interface intuitive et gestion des entraînements via React/Node.js.",
         technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
         image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=1200&h=800&fit=crop",
         category: "Développement Web",
         status: "In Progress",
         repo: "https://github.com/antoinerousselle/muscu-web"
       },
       {
         id: 5,
         title: "Secured",
         description: "Projet académique Epitech visant à développer en C une bibliothèque de tables de hachage avec gestion des collisions et tests unitaires.",
         technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
         image: "/secured.png",
         category: "Développement Web",
         status: "Completed",
         repo: "https://github.com/Exominiate59/Secured"
       },
     ]
    }
  }
};