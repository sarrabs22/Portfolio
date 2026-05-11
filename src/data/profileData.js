export const profileData = {
  personal: {
    name: 'Sarra Ben Sedrine',
    title: 'Développeuse Web Full-Stack',
    email: 'sarraa.bensedrine@gmail.com',
    phone: '+216 26 318 708',
    location: 'Ariana, Tunisie',
    linkedin: 'https://www.linkedin.com/in/sarra-ben-sedrine',
    github: '', // Add if available
    tagline: 'Web Engineer & Creative Technologist',
    availability: 'Open to opportunities in France'
  },

  about: {
    summary: `Salut! Je suis développeuse web full-stack passionnée par la création de solutions qu'on utilise vraiment. Diplômée de l'ESPRIT (Tunis) avec une année d'échange en Allemagne, j'aime mélanger technologie et créativité pour résoudre des problèmes réels.

J'ai travaillé sur des projets variés – du développement d'ERPs médicaux au matching d'emplois avec IA. Ce que j'adore? Quand une bonne idée rencontre du code bien fait et qu'un utilisateur dit "ça marche vraiment mieux". Je cherche à rejoindre une équipe dynamique en France où je pourrai apporter cette perspective.`,
    description: `Je suis quelqu'un qui aime transformer les idées en produits concrets. Full-stack par nature, j'ai touché à React, Angular, Node.js, Spring Boot... et j'ai appris qu'aucune techno n'est un dogme. Ce qui compte vraiment, c'est de créer quelque chose d'utile et maintenable.`
  },

  skills: {
    frontend: ['React', 'Angular', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap', 'Stimulus.js'],
    backend: ['Node.js', 'Spring Boot', 'PHP', 'Symfony', 'Laravel', 'JavaScript (ES6+)', 'Java', 'Python'],
    database: ['MongoDB', 'MySQL', 'PostgreSQL'],
    devops: ['Docker', 'Jenkins', 'Git', 'GitLab', 'CI/CD'],
    ai: ['LLMs (Mistral, LLaMA)', 'RAG', 'Azure AI'],
    tools: ['VS Code', 'IntelliJ', 'Postman', 'Prisma'],
    other: ['REST APIs', 'SOAP', 'SQL', 'XML', 'Scrum', 'Kanban', 'Agile']
  },

  experience: [
    {
      id: 1,
      title: 'Développeuse Full-Stack PHP',
      company: 'Substances Actives',
      location: 'Paris, France',
      dates: '2025',
      description: 'Travailler sur un ERP médical, c\'est un vrai défi – des utilisateurs exigeants, des contraintes complexes, mais c\'était excitant!',
      missions: [
        'Développement de fonctionnalités avec Symfony et Stimulus.js',
        'Réduction du temps de saisie des données de 40% (les utilisateurs ont remarqué!)',
        'Amélioration des performances globales de l\'interface',
        'Collaboration étroite avec les médecins et infirmières pour comprendre leurs vrais besoins'
      ],
      technologies: ['PHP', 'Symfony', 'Stimulus.js', 'HTML/CSS']
    },
    {
      id: 2,
      title: 'Développeuse Full-Stack',
      company: 'Ipact Consult',
      location: 'Canada',
      dates: '2024',
      description: 'Manajero est un projet dont je suis fière – on a créé une plateforme de collaboration de zéro.',
      missions: [
        'Architecture complète du produit (frontend + backend)',
        'Conception de modules collaboratifs vraiment intuitifs',
        'Adoption par 200+ utilisateurs en peu de temps',
        'Augmentation de la productivité des équipes de 25%'
      ],
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'REST API']
    },
    {
      id: 3,
      title: 'Développeuse Backend',
      company: 'SmartUp-3S',
      location: 'Tunis, Tunisie',
      dates: '2023',
      description: 'Mon premier vrai défi back-end – optimiser un système lourd et le rendre performant.',
      missions: [
        'Implémentation robuste d\'une API REST avec Spring Boot',
        'Automatisation complète de la gestion d\'inventaire (bye bye Excel!)',
        'Réduction du temps de traitement de 25%',
        'Infrastructure stable pour la croissance'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API']
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Expense Splitter',
      description: 'Une API REST pour partager les dépenses sans prise de tête – parce que "tu dois combien?" devrait être simple.',
      details: 'API complète en production: Node.js, PostgreSQL, Prisma, Docker. Déployée sur Fly.io avec tous les bonnes pratiques (migrations, health checks, gestion des secrets).',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Fly.io'],
      year: '2026',
      features: ['API REST solide', 'Déploiement cloud automatisé', 'Base de données bien structurée', 'Ready for production']
    },
    {
      id: 2,
      title: 'Plateforme Opportunités Emploi',
      description: 'Matching emploi-candidat avec IA – j\'ai découvert que les LLMs peuvent vraiment comprendre les CV!',
      details: 'React + Node.js + MongoDB, avec intégration d\'IA pour analyser les CV et matcher automatiquement avec les offres. Plus de 100 lignes de code d\'export Excel!',
      technologies: ['React', 'Node.js', 'MongoDB', 'LLMs'],
      year: '2024',
      features: ['Analyse intelligente de CV', 'Matching automatisé', 'Dashboard candidat', 'Gestion des offres']
    },
    {
      id: 3,
      title: 'Plateforme de Jardinage Urbain',
      description: 'Aider les gens à organiser des projets d\'écologie urbaine – du code pour la planète 🌱',
      details: 'Module de gestion d\'événements pour coordonner les projets de jardinage collectif. Simple mais efficace.',
      technologies: ['Laravel 9', 'MySQL', 'HTML/CSS'],
      year: '2024',
      features: ['Gestion d\'événements', 'Calendrier partagé', 'Organisation de projets', 'Communication du groupe']
    },
    {
      id: 4,
      title: 'Pipeline CI/CD Jenkins',
      description: 'Automatiser tout pour que les développeurs fassent juste du vrai développement.',
      details: 'Pipelines Jenkins complètes: build → tests → déploiement. Parce que déployer à la main c\'est 2020 comme ambition.',
      technologies: ['Jenkins', 'Git', 'Docker', 'Shell'],
      year: '2024',
      features: ['Pipelines automatisées', 'Tests continus', 'Déploiement sans clics', 'Feedback rapide']
    },
    {
      id: 5,
      title: 'Gestion Résidences Universitaires',
      description: 'Un forum qui unit les étudiants et facilite la communication avec l\'admin.',
      details: 'Spring Boot + Angular pour une plateforme complète de gestion résidences. Communication, modération, gestion – tout intégré.',
      technologies: ['Spring Boot', 'Angular', 'MySQL'],
      year: '2023 - 2024',
      features: ['Forum communautaire', 'Gestion administrative', 'Modération', 'Communication fluide']
    }
  ],

  education: [
    {
      id: 1,
      school: 'Hochschule Schmalkalden',
      location: 'Allemagne',
      degree: 'Semestre d\'échange académique en informatique',
      specialization: 'Développement web et technologies web avancées',
      dates: '2024 - 2025',
      type: 'Échange académique'
    },
    {
      id: 2,
      school: 'ESPRIT - École Supérieure Privée d\'Ingénierie et de Technologie',
      location: 'Tunis, Tunisie',
      degree: 'Diplôme d\'ingénieur',
      specialization: 'Développement web et technologies de l\'information',
      dates: '2020 - 2025',
      type: 'Diplôme d\'ingénieur'
    }
  ],

  certifications: [
    {
      name: 'MOOC SecNumacadémie',
      issuer: 'ANSSI',
      year: '2025'
    },
    {
      name: 'Certification PHP MySQL PDO',
      issuer: 'Udemy',
      year: '2021'
    }
  ],

  languages: [
    { language: 'Français', level: 'B2', percent: 85 },
    { language: 'Anglais', level: 'B2', percent: 80 }
  ]
}
