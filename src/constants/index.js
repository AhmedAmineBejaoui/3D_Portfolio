import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  issat,
  shopify,
  hotel,
  ecommerce,
  jobit,
  tripguide,
  threejs,
  opuslab,
  aireport,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack developer - E-commerce",
    company_name: "ISSAT Mateur",
    icon: issat,
    iconBg: "#F0F9FF",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Conception et développement d'une application web e-commerce full-stack avec React, TypeScript et Node.js",
      "Création d'une API RESTful avec Express.js pour la gestion des produits, des catégories et des utilisateurs",
      "Intégration d'une interface utilisateur responsive avec Tailwind CSS et React",
      "Utilisation de React Query pour la gestion efficace des données côté client",
      "Structuration du projet en architecture modulaire (client / serveur / shared)",
      "Déploiement local avec Vite et configuration d’un environnement de développement performant",
    ],
  },
  {
    title: "Full Stack developer - Hotel Management System",
    company_name: "OpusLab",
    icon: opuslab,
    iconBg: "#E6F2FF",
    date: "mar2025 - mai 2025",
    points: [
      "Conception et développement d'une application full-stack de gestion hôtelière avec React, TypeScript et Node.js",
      "Modélisation et implémentation d'une base de données PostgreSQL avec schéma relationnel ",
      "Création d'une API RESTful avec Express.js pour la gestion des chambres, réservations et clients",
      "Configuration de Drizzle ORM pour les migrations et les opérations CRUD",
      "Développement d'un dashboard admin moderne avec React et Material-UI incluant :",
      "• Tableaux de bord interactifs avec graphiques en temps réel (Recharts)",
      "• Visualisation des données clés (taux d'occupation, revenus, statistiques)",
      "• Design responsive avec dark/light mode",
      "Mise en place d'un système sécurisé avec variables d'environnement et gestion des connexions",
    ],
  },
  {
    title: "Full Stack developer - Airport Management System",
    company_name: "OpusLab",
    icon: opuslab,
    iconBg: "#E6F2FF",
    date: "Mars 2025 - mai 2025",
    points: [
      "Développement full-stack d'un système de gestion avec React/TS, Node.js/Express et PostgreSQL",
      "Architecture modulaire : Frontend React 18 (Vite) + Backend TypeScript (Drizzle ORM)",
      "Modélisation d'une base de données relationnelle (vols, portes, employés, passagers)",
      "API REST sécurisée avec JWT, RBAC et validation Zod (25+ endpoints)",
      "Dashboard interactif : Visualisations temps-réel (Recharts), KPI et export de données",
      "Optimisations : Indexation SQL, cache Redis et chargement dynamique",
      "UI moderne : Composants réutilisables (Tailwind CSS + Radix UI)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "With a solid foundation in development and a keen interest in emerging tech, he stands out for his adaptability and eagerness to stay ahead in the ever-evolving tech landscape.",
    name: "Youssef Gharbi",
    designation: "developer",
    company: "opusLab",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGnqtKrtUZ8fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732907274740?e=1749686400&v=beta&t=c2wUQOtEQRyDCtZohY1mMv-bxVjFj89wNPjXxXTFbrI",
  },
  {
    testimonial:
      "A highly capable developer driven by curiosity and innovation, he thrives in fast-paced settings and quickly masters new technologies with ease.",
    name: "Marwen Tayechi",
    designation: "Professor",
    company: "ISSAT Mateur",
    image: "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-1/347395626_914790589969288_8224228627575164534_n.jpg?stp=c343.271.1071.1072a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=S4Y7vaTO0T0Q7kNvwFjpL1v&_nc_oc=Adk-obNIgyB_kZ9aGWyaHBiicwjbJfUeBk41QBJ8kUdznEBh7LtHSEK-I8k8A3QP-GU&_nc_zt=24&_nc_ht=scontent.ftun14-1.fna&_nc_gid=7283BWHq9UocVY3Yj-2DtQ&oh=00_AfHklNpeD6o6g9h2zUzpE-5LQX74Yq78FEVsozsV4-iBLw&oe=67F83A2E",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Amna khmiri",
    designation: "developper",
    company: "OpusLab", 
    image: "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-1/420290766_3817527335127029_7213193862680966233_n.jpg?stp=c0.0.933.933a_dst-jpg_s100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=sujxXutLMHAQ7kNvwFHnDpe&_nc_oc=Adn8r1XwriBxk64gq5qucMowe1N7Du0Rg1vR7XUjJhHhmmIEotmonhE5aRDSLAFFH_o&_nc_zt=24&_nc_ht=scontent.ftun14-1.fna&_nc_gid=fgaSI6aEkf81EQxGmvufZQ&oh=00_AfFN9UPaRD1q-SgwbP9oAPRjM3aa_WtbEWO3jKOJVV0ATg&oe=67F85A6D",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "Web-based platform for discovering, browsing, and purchasing products online, offering users a seamless shopping experience with secure authentication, product filtering, and responsive design — all powered by a modern full-stack architecture using React and Node.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostegreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Drizzle ORM",
        color: "pink-text-gradient",
      },
      {
        name: "Radix UI",
        color: "blue-text-gradient",
      },
      {
        name: "Recharts",
        color: "green-text-gradient",
      },
      {
        name: "Zod",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/AhmedAmineBejaoui/E-commerce",
  },
  {
    name: "Système de Gestion Hôtelière",
    description:
      "Web-based hotel management system designed to streamline reservations, room availability, and customer check-in/check-out processes, offering administrators and staff an intuitive interface for efficient day-to-day operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/AhmedAmineBejaoui/hotel_mangement_system",
  },
  {
    name: "System de gestion de l'aéroport",
    description:
      "An all-in-one airport management system that enables efficient coordination of flights, passenger services, and logistics, offering a centralized interface for staff and administrators to ensure smooth airport operations.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: aireport,
    source_code_link: "https://github.com/AhmedAmineBejaoui/aireport_management_system",
  },
];

export { services, technologies, experiences, testimonials, projects };
