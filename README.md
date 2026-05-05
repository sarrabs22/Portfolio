# Sarra Ben Sedrine - Portfolio Web

Une portfolio web moderne, réactive et animée pour une développeuse web full-stack.

## 🚀 Caractéristiques

- **Design moderne & premium** : Interface futuriste avec inspiration astronomique
- **Animations fluides** : Utilise Framer Motion pour des transitions élégantes
- **Responsive** : Fonctionne parfaitement sur desktop, tablet et mobile
- **Thème personnalisé** : Toggle entre thème cosmique sombre et thème clair
- **Performance optimisée** : Léger et rapide
- **Accessible** : Respecte les standards d'accessibilité web

## 🎨 Sections

1. **Hero** - Introduction avec animation d'étoiles
2. **À propos** - Présentation professionnelle
3. **Compétences** - Catégorisées par domaine (Frontend, Backend, DevOps, etc.)
4. **Expérience** - Timeline interactive des expériences professionnelles
5. **Projets** - Galerie de projets avec filtrage par technologie
6. **Formation** - Diplômes, certifications et langues
7. **Contact** - Formulaire de contact et coordonnées

## 🛠 Installation

### Prérequis
- Node.js (v16 ou supérieur)
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet ou naviguer vers le dossier**
   ```bash
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

   Le portfolio s'ouvrira automatiquement à `http://localhost:5173`

4. **Build pour la production**
   ```bash
   npm run build
   ```

   Les fichiers optimisés seront dans le dossier `dist/`

5. **Preview de la build**
   ```bash
   npm run preview
   ```

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── components/          # Composants React
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── StarsBackground.jsx
│   ├── data/
│   │   └── profileData.js   # Données du CV
│   ├── hooks/
│   │   └── useInView.js     # Hook pour animations au scroll
│   ├── styles/              # Fichiers CSS
│   │   ├── index.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Experience.css
│   │   ├── Projects.css
│   │   ├── Education.css
│   │   ├── Contact.css
│   │   ├── Navigation.css
│   │   └── StarsBackground.css
│   ├── App.jsx              # Composant principal
│   ├── App.css
│   └── main.jsx             # Point d'entrée
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## 🎨 Personnalisation

### Modifier les données du CV
Éditez `src/data/profileData.js` pour ajouter/modifier :
- Informations personnelles
- Compétences
- Expériences professionnelles
- Projets
- Formation
- Langues

### Modifier les couleurs
Dans `src/styles/index.css`, modifiez les variables CSS :
```css
:root {
  --electric-blue: #00d9ff;
  --purple-accent: #9d4edd;
  --gold-accent: #ffd60a;
  /* ... autres couleurs ... */
}
```

### Ajouter/modifier les sections
Chaque section est un composant React indépendant dans `src/components/`.

## 🌐 Déploiement

### Vercel (recommandé)
1. Push votre code sur GitHub
2. Connectez votre repo sur Vercel
3. Vercel déploiera automatiquement

### Netlify
1. `npm run build`
2. Uploadez le dossier `dist/` sur Netlify

### Autres platforms
- AWS S3 + CloudFront
- GitHub Pages
- Heroku

## 📦 Dépendances

- **React** 18.2.0 - Framework UI
- **Vite** 4.4.5 - Build tool
- **Framer Motion** 10.16.4 - Animations
- **Vitest** (optionnel) - Tests unitaires

## ♿ Accessibilité

- Liens avec aria-labels
- Respect des préférences `prefers-reduced-motion`
- Contraste des couleurs conforme WCAG
- Navigation au clavier

## 📱 Responsive Design

Le portfolio est optimisé pour :
- Desktop (1920px et plus)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (480px - 767px)
- Small Mobile (moins de 480px)

## 🚀 Performance

- Lazy loading des images (avec intersection observer)
- CSS optimisé
- Animations GPU-accelerated
- Léger bundle size

## 📄 Licence

Ce projet est personnel. Utilisez-le comme base pour votre propre portfolio.

## 💡 Conseils

- Mettez à jour régulièrement les projets et compétences
- Testez sur différents appareils
- Vérifique la performance avec Lighthouse
- Considérez l'ajout d'un formulaire backend pour les messages de contact

---

Fait avec ❤️ pour attirer les talents en France 🇫🇷
