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
    summary: `Ingénieure en développement web full-stack avec un diplôme d'ingénieur de l'ESPRIT (Tunis) et une expérience académique en Allemagne. Spécialisée dans la conception et l'optimisation d'applications web performantes, l'intégration d'intelligence artificielle et l'automatisation des processus CI/CD.

Je combine expertise technique et approche créative pour développer des solutions innovantes. Motivée à mettre mes compétences au service d'une entreprise dynamique, particulièrement en France.`,
    description: `Développeuse passionnée par la création d'expériences web modernes et performantes. Avec plus de 4 ans d'expérience en développement full-stack, je maîtrise les technologies front-end et back-end pour concevoir des applications complexes et scalables.`
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
      description: 'Participation au développement et à l\'optimisation de l\'ERP médical Matisse.',
      missions: [
        'Développement de fonctionnalités avec Symfony et Stimulus.js',
        'Amélioration des performances et de l\'expérience utilisateur',
        'Implémentation de modules facilitant la gestion des flux',
        'Réduction du temps de saisie de 40%'
      ],
      technologies: ['PHP', 'Symfony', 'Stimulus.js', 'HTML/CSS']
    },
    {
      id: 2,
      title: 'Développeuse Full-Stack',
      company: 'Ipact Consult',
      location: 'Canada',
      dates: '2024',
      description: 'Conception et développement de la plateforme Manajero.',
      missions: [
        'Conception de modules collaboratifs',
        'Architecture frontend et backend',
        'Adoption par 200+ utilisateurs',
        'Augmentation de la productivité de 25%'
      ],
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'REST API']
    },
    {
      id: 3,
      title: 'Développeuse Backend',
      company: 'SmartUp-3S',
      location: 'Tunis, Tunisie',
      dates: '2023',
      description: 'Développement du backend d\'une application pharmaceutique.',
      missions: [
        'Implémentation de services REST avec Spring Boot',
        'Gestion de base de données MySQL',
        'Automatisation de l\'inventaire et reporting',
        'Réduction du temps de traitement de 25%',
        'Amélioration des performances globales'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API']
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Expense Splitter',
      description: 'API REST complète pour la gestion et répartition des dépenses partagées, déployée en production.',
      details: 'Conception et déploiement d\'une API REST dockerisée connectée à PostgreSQL cloud avec migrations automatisées.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Fly.io'],
      year: '2026',
      features: ['API REST complète', 'Déploiement cloud', 'Gestion des secrets', 'Health checks', 'Migrations DB']
    },
    {
      id: 2,
      title: 'Plateforme Opportunités Emploi',
      description: 'Plateforme de matching emploi-candidat avec analyse d\'IA de CV.',
      details: 'Conception et développement avec intégration d\'un modèle d\'IA pour l\'analyse automatique de CV et matching avec offres.',
      technologies: ['React', 'Node.js', 'MongoDB', 'IA/ML'],
      year: '2024',
      features: ['Analyse de CV par IA', 'Matching automatisé', 'Dashboard candidat', 'Gestion offres d\'emploi']
    },
    {
      id: 3,
      title: 'Plateforme de Jardinage Urbain Durable',
      description: 'Gestion d\'événements pour projets écologiques urbains.',
      details: 'Développement d\'un module de gestion d\'événements associatifs optimisant l\'organisation de projets de jardinage urbain.',
      technologies: ['Laravel 9', 'MySQL', 'HTML/CSS'],
      year: '2024',
      features: ['Gestion d\'événements', 'Calendrier', 'Organisation de projets', 'Gestion de participants']
    },
    {
      id: 4,
      title: 'Pipeline CI/CD avec Jenkins',
      description: 'Automatisation complète des processus de build et déploiement.',
      details: 'Mise en place de pipelines Jenkins pour automatiser la construction, les tests et le déploiement.',
      technologies: ['Jenkins', 'Git', 'Docker', 'Shell'],
      year: '2024',
      features: ['Pipelines automatisés', 'Tests continus', 'Déploiement automatisé', 'Réduction du temps de production']
    },
    {
      id: 5,
      title: 'Gestion des Résidences Universitaires',
      description: 'Plateforme complète pour la gestion et communication au sein des résidences.',
      details: 'Développement d\'un forum étudiant améliorant la communication entre étudiants et administration.',
      technologies: ['Spring Boot', 'Angular', 'MySQL'],
      year: '2023 - 2024',
      features: ['Forum étudiant', 'Gestion de résidences', 'Système de communication', 'Modération']
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
