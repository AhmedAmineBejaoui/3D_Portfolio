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
  { id: "projects", title: "Projects" },
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
    title: "AI & Data Science",
    icon: web,
  },

  {
    title: "Full-Stack Development",
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
    "title": "Data Science Intern",
    "company_name": "Synent Technologies",
    "icon": backend,
    "iconBg": "#E6F2FF",
    "date": "5 Sep – 15 Oct 2026",
    "points": [
      "Exploratory analysis of Netflix data and customer segmentation with K-Means.",
      "Built scikit-learn pipelines for telecom churn and student performance prediction, with cross-validation, model evaluation and Streamlit interfaces."
    ]
  },
  {
    "title": "AI Agents Intern · Final-year project",
    "company_name": "DnD Serv",
    "icon": backend,
    "iconBg": "#E6F2FF",
    "date": "Feb – May 2026",
    "points": [
      "Designed and developed Devora: AI-assisted code review with specialized agents and a GraphRAG pipeline orchestrated with LangGraph.",
      "Connected GitHub pull requests with code context and internal knowledge to generate review findings and correction suggestions.",
      "FastAPI, Next.js, Neo4j, Qdrant, Docker, VPS deployment and CI/CD."
    ]
  },
  {
    "title": "PHP Development Intern",
    "company_name": "Tunisie Telecom · Centre Urbain Nord, Tunis",
    "icon": backend,
    "iconBg": "#E6F2FF",
    "date": "Feb – May 2026",
    "points": [
      "Developed SMSPlus, a PHP/Laravel and Oracle pipeline for telecom CDR data.",
      "FTP ingestion, CSV validation, staging, OCC transformations, SQL MERGE deduplication and load auditing; Docker and OCI8."
    ]
  },
  {
    "title": "Full-Stack Intern",
    "company_name": "Easy Ways Studio",
    "icon": backend,
    "iconBg": "#E6F2FF",
    "date": "Jun – Aug 2025",
    "points": [
      "Developed Tunisian Chic, an e-commerce application with catalog, cart, orders, authentication and administration.",
      "Worked on the SkillStream e-learning backend, the studio website and an interior-design startup website."
    ]
  },
  {
    "title": "Front-End Intern",
    "company_name": "Eden Talents · Paris, remote",
    "icon": backend,
    "iconBg": "#E6F2FF",
    "date": "Jul 2025",
    "points": [
      "Translated Figma designs into responsive React, Vite and Tailwind CSS pages for a recruitment website.",
      "Reusable components, React Router navigation and light/dark themes."
    ]
  },
  {
    "title": "IT Support Intern",
    "company_name": "SACEM Group",
    "icon": backend,
    "iconBg": "#E6F2FF",
    "date": "Jun – Jul 2024",
    "points": [
      "User assistance and application support, network infrastructure, Nagios monitoring and Microsoft PowerApps document management."
    ]
  }
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
      "With a solid foundation in development and a keen interest in emerging tech, he stands out for his adaptability and eagerness to stay ahead in the ever-evolving tech landscape.",
    name: "Amna khmiri",
    designation: "developper",
    company: "OpusLab", 
    image: "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-1/420290766_3817527335127029_7213193862680966233_n.jpg?stp=c0.0.933.933a_dst-jpg_s100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=sujxXutLMHAQ7kNvwFHnDpe&_nc_oc=Adn8r1XwriBxk64gq5qucMowe1N7Du0Rg1vR7XUjJhHhmmIEotmonhE5aRDSLAFFH_o&_nc_zt=24&_nc_ht=scontent.ftun14-1.fna&_nc_gid=fgaSI6aEkf81EQxGmvufZQ&oh=00_AfFN9UPaRD1q-SgwbP9oAPRjM3aa_WtbEWO3jKOJVV0ATg&oe=67F85A6D",
  },
];

const projects = [
  {
    "name": "Devora",
    "context": "Final-year internship · DnD Serv · 2026",
    "description": "AI-assisted GitHub code review combining specialized agents, LangGraph orchestration and GraphRAG retrieval over code and internal knowledge.",
    "tags": [
      {
        "name": "FastAPI",
        "color": "text-secondary"
      },
      {
        "name": "LangGraph",
        "color": "text-secondary"
      },
      {
        "name": "Neo4j",
        "color": "text-secondary"
      },
      {
        "name": "Qdrant",
        "color": "text-secondary"
      }
    ],
    "source_code_link": "https://github.com/AhmedAmineBejaoui/ai-code-review-platform"
  },
  {
    "name": "SMSPlus",
    "context": "Internship · Tunisie Telecom · 2026",
    "description": "Telecom CDR data pipeline: FTP ingestion, strict CSV validation, Oracle staging, OCC transformation, deduplication and audit trails.",
    "tags": [
      {
        "name": "PHP",
        "color": "text-secondary"
      },
      {
        "name": "Laravel",
        "color": "text-secondary"
      },
      {
        "name": "Oracle",
        "color": "text-secondary"
      },
      {
        "name": "Docker",
        "color": "text-secondary"
      }
    ],
    "source_code_link": "https://github.com/AhmedAmineBejaoui/SMSPlus"
  },
  {
    "name": "Telco Customer Churn",
    "context": "Data Science internship · Synent · 2026",
    "description": "Churn prediction on 7,043 customer records using a preprocessing pipeline and logistic regression. Held-out ROC AUC: 0.842; Streamlit prediction interface.",
    "tags": [
      {
        "name": "Python",
        "color": "text-secondary"
      },
      {
        "name": "scikit-learn",
        "color": "text-secondary"
      },
      {
        "name": "Streamlit",
        "color": "text-secondary"
      }
    ],
    "source_code_link": "https://github.com/AhmedAmineBejaoui/synent-task9-telcochurn-ahmed"
  },
  {
    "name": "Student Performance",
    "context": "Data Science internship · Synent · 2026",
    "description": "Compared three regression models with cross-validation and hyperparameter tuning. Random Forest test RMSE: 1.204/20, using previous grades among the features.",
    "tags": [
      {
        "name": "Python",
        "color": "text-secondary"
      },
      {
        "name": "Random Forest",
        "color": "text-secondary"
      },
      {
        "name": "Streamlit",
        "color": "text-secondary"
      }
    ],
    "source_code_link": "https://github.com/AhmedAmineBejaoui/synent-task8-studentperformance-ahmedaminebejaoui"
  },
  {
    "name": "Hotel Management System",
    "context": "Professional training · OpusLab · 2025",
    "description": "Full-stack management of rooms, bookings and customers with a dashboard and relational data model.",
    "tags": [
      {
        "name": "React",
        "color": "text-secondary"
      },
      {
        "name": "TypeScript",
        "color": "text-secondary"
      },
      {
        "name": "PostgreSQL",
        "color": "text-secondary"
      }
    ],
    "source_code_link": "https://github.com/AhmedAmineBejaoui/hotel_mangement_system"
  }
];

export { services, technologies, experiences, testimonials, projects };
