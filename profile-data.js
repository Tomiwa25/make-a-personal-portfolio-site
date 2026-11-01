/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION - MUHYDEEN AYANDOLA (TOMIWA)
 * =========================================================================
 */

const portfolioData = {
  personal: {
    name: "Muhydeen Ayandola",
    preferredName: "Tomiwa",
    role: "Full Stack Software Engineer",
    tagline: "Specializing in robust backend systems, scalable Node.js/TypeScript APIs, and high-performance React applications.",
    availability: "Available for Full-time Roles & Contracts (Remote)",
    location: "Lagos, Nigeria (Open to Worldwide Remote)",
    email: "tomiwadennie25@gmail.com",
    phone: "+234 (Contact via Email / LinkedIn)",
    github: "https://github.com/Tomiwa25",
    linkedin: "https://www.linkedin.com/in/muhydeen-ayandola",
    twitter: "",
    resumeUrl: "#resume-modal",
    avatar: "https://avatars.githubusercontent.com/u/168443173?v=4",
    bio: [
      "I am a passionate Full Stack Software Engineer focused on designing reliable backend systems, performant APIs, and clean, responsive user interfaces.",
      "My core toolkit revolves around TypeScript, JavaScript, Node.js, Express, PostgreSQL, Prisma, and React. I have a deep interest in system design, distributed data architecture, and writing clean, maintainable code.",
      "Whether building high-concurrency transaction systems, AI-powered aggregators, or modern e-commerce architectures, I emphasize scalability, test-driven reliability, and business impact."
    ],
    stats: [
      { label: "Public Repositories", value: "26+" },
      { label: "Production & Core Apps", value: "10+" },
      { label: "Core Stack Expertise", value: "Full Stack" },
      { label: "Work Availability", value: "Remote / Global" }
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Languages",
        items: [
          { name: "TypeScript", level: "Advanced", years: "Proficient", icon: "code" },
          { name: "JavaScript (ES6+)", level: "Expert", years: "Proficient", icon: "code" },
          { name: "SQL", level: "Advanced", years: "Proficient", icon: "database" },
          { name: "HTML5 & CSS3", level: "Expert", years: "Proficient", icon: "layout" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Systems",
        items: [
          { name: "Node.js", level: "Expert", years: "Proficient", icon: "server" },
          { name: "Express.js", level: "Expert", years: "Proficient", icon: "server" },
          { name: "RESTful API Design", level: "Expert", years: "Proficient", icon: "share-2" },
          { name: "System Design", level: "Advanced", years: "Specialist", icon: "cpu" },
          { name: "Authentication & JWT", level: "Advanced", years: "Proficient", icon: "shield" }
        ]
      },
      {
        id: "frontend",
        name: "Frontend",
        items: [
          { name: "React", level: "Advanced", years: "Proficient", icon: "layout" },
          { name: "Tailwind CSS", level: "Advanced", years: "Proficient", icon: "palette" },
          { name: "Responsive UI/UX", level: "Expert", years: "Proficient", icon: "globe" },
          { name: "State Management", level: "Advanced", years: "Proficient", icon: "layers" }
        ]
      },
      {
        id: "database",
        name: "Databases & ORM",
        items: [
          { name: "PostgreSQL", level: "Advanced", years: "Proficient", icon: "database" },
          { name: "Prisma ORM", level: "Advanced", years: "Proficient", icon: "database" },
          { name: "MySQL / Relational DBs", level: "Advanced", years: "Proficient", icon: "database" },
          { name: "Database Schema Design", level: "Advanced", years: "Proficient", icon: "database" }
        ]
      },
      {
        id: "devops",
        name: "Tools & DevOps",
        items: [
          { name: "Git & GitHub", level: "Expert", years: "Proficient", icon: "git-merge" },
          { name: "Postman API Testing", level: "Expert", years: "Proficient", icon: "zap" },
          { name: "Docker", level: "Intermediate", years: "Familiar", icon: "box" },
          { name: "Linux / CLI", level: "Advanced", years: "Proficient", icon: "terminal" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "vroom-style",
      title: "Vroom-Style - Scalable E-Commerce Web Platform",
      category: "Full-Stack",
      highlight: "Featured Project",
      shortDescription: "Modern, high-performance e-commerce platform built with TypeScript, modular cart state, and responsive checkout flows.",
      impact: "Seamless product catalog browsing with sub-100ms client state transitions",
      tags: ["TypeScript", "React", "Node.js", "Express", "Tailwind CSS", "REST API"],
      liveUrl: "https://github.com/Tomiwa25/Vroom-Style-s-",
      repoUrl: "https://github.com/Tomiwa25/Vroom-Style-s-",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      architecture: {
        problem: "Traditional e-commerce platforms struggle with bloated state, slow page transitions, and fragile checkout state synchronization.",
        solution: "Engineered a TypeScript-based full-stack architecture with modular component hierarchies, strict type safety, and fast relational product indexing.",
        keyFeatures: [
          "Type-safe data contracts between client and server",
          "Persistent cart and optimized responsive catalog filtering",
          "Modern UI components styled with utility-first Tailwind CSS"
        ]
      }
    },
    {
      id: "syncord-banking",
      title: "Syncord - Secure Core Banking & Ledger System",
      category: "Backend & Systems",
      highlight: "Financial Backend",
      shortDescription: "Robust banking management engine handling account transactions, balances, and atomic ledger operations.",
      impact: "Zero race-condition transaction processing with ACID compliance",
      tags: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
      liveUrl: "https://github.com/Tomiwa25/syncord-banking-system",
      repoUrl: "https://github.com/Tomiwa25/syncord-banking-system",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      architecture: {
        problem: "Financial transactions require strict idempotency, balance verification, and ACID transaction isolation to prevent double withdrawals.",
        solution: "Designed a clean backend architecture implementing database transaction locks, atomic balance mutations, and tokenized session authentication.",
        keyFeatures: [
          "Atomic debit/credit ledger operations using relational transactions",
          "Secure user role verification and cryptographic password hashing",
          "Comprehensive API error boundaries with standard HTTP status conventions"
        ]
      }
    },
    {
      id: "newssphere-ai",
      title: "NewsSphere-AI - Intelligent Content Aggregator",
      category: "Full-Stack",
      highlight: "AI & News Engine",
      shortDescription: "Full-stack content aggregation platform delivering curated real-time news with automated summarization workflows.",
      impact: "Aggregates multi-source news feeds with categorized search & filtering",
      tags: ["TypeScript", "React", "Node.js", "Express", "REST APIs", "Tailwind CSS"],
      liveUrl: "https://github.com/Tomiwa25/NewsSphere-AI",
      repoUrl: "https://github.com/Tomiwa25/NewsSphere-AI",
      gradient: "from-violet-600 via-purple-600 to-pink-600",
      architecture: {
        problem: "Users are overwhelmed by disjointed news feeds and lack a consolidated, distraction-free reading experience.",
        solution: "Built an automated crawler and ingestion pipeline in TypeScript with categorized feeds and responsive reader views.",
        keyFeatures: [
          "Multi-source news feed ingestion and deduplication",
          "Category filtering (Tech, Business, Science, World)",
          "Clean distraction-free typography and dark-mode reading UI"
        ]
      }
    },
    {
      id: "viek-client-crm",
      title: "Viek - Client Relationship & Operations Management",
      category: "Backend & Systems",
      highlight: "Enterprise Tooling",
      shortDescription: "Operational CRM platform designed for tracking customer pipelines, communications, and client project lifecycles.",
      impact: "Streamlined multi-tenant client records and interaction history",
      tags: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma", "REST API"],
      liveUrl: "https://github.com/Tomiwa25/viek-client-management-system",
      repoUrl: "https://github.com/Tomiwa25/viek-client-management-system",
      gradient: "from-amber-500 via-orange-600 to-red-600",
      architecture: {
        problem: "Small-to-medium operations suffer from scattered spreadsheets and disorganized customer communication records.",
        solution: "Constructed a centralized RESTful CRM API connected to PostgreSQL with relational client-lead mapping and audit logs.",
        keyFeatures: [
          "Relational client and deal tracking with Prisma ORM",
          "Filtered query endpoints with pagination and sorting",
          "Secure authentication and granular role permissions"
        ]
      }
    }
  ],

  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "TS Academy & Software Projects",
      period: "2024 - Present",
      location: "Lagos, Nigeria (Remote)",
      type: "Full-time / Projects",
      summary: "Designing, engineering, and shipping full-stack applications, robust backend services, and scalable database schemas.",
      achievements: [
        "Architected and deployed full-stack web applications utilizing TypeScript, Node.js, Express, and React with responsive modern design.",
        "Engineered relational database models and migrations with PostgreSQL and Prisma ORM, ensuring high query efficiency and referential integrity.",
        "Implemented secure JWT authentication, input validation pipelines, and comprehensive RESTful API endpoints.",
        "Deeply practiced system design principles including caching strategies, database indexing, and modular software architecture."
      ],
      skills: ["TypeScript", "JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS", "Git"]
    }
  ],

  education: [
    {
      degree: "Software Engineering & Computer Science Foundations",
      institution: "TS Academy / Intensive Software Development Training",
      period: "2024",
      honors: "Specialization in Backend & Full-Stack Web Development",
      highlights: "Focus: Data Structures & Algorithms, Object-Oriented Programming, System Design, Relational Database Modeling, Modern Web Architecture."
    }
  ],

  certifications: [
    { name: "Full Stack Web Development Specialist", year: "2024" },
    { name: "Relational Database & Backend API Design", year: "2024" }
  ]
};

// Export for browser
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
