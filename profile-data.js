/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * You can easily personalize your portfolio by updating this file!
 * Update your name, title, bio, contact links, skills, projects, and work experience.
 */

const portfolioData = {
  personal: {
    name: "Alex Morgan",
    preferredName: "Alex",
    role: "Senior Full-Stack & Cloud Software Engineer",
    tagline: "Building high-performance distributed systems, robust APIs, and intuitive user experiences.",
    availability: "Available for Full-time Roles & Contracts",
    location: "San Francisco, CA (Open to Remote)",
    email: "alex.morgan.dev@example.com",
    phone: "+1 (555) 234-5678",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#resume-modal",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    bio: [
      "I am a software engineer with 5+ years of experience designing, architecting, and scaling modern web applications and cloud infrastructure.",
      "My passion lies at the intersection of robust backend architecture and slick, accessible frontend interfaces. I prioritize clean code, test-driven development, and measurable business impact.",
      "Previously spearheaded core service migrations to microservices, improved API p99 latencies by 40%, and built developer-first tools used by thousands of daily users."
    ],
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Production Apps Shipped", value: "24+" },
      { label: "System Uptime Track", value: "99.99%" },
      { label: "Users Impacted", value: "500K+" }
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Languages",
        items: [
          { name: "TypeScript", level: "Expert", years: "4 yrs", icon: "code" },
          { name: "JavaScript (ES6+)", level: "Expert", years: "5+ yrs", icon: "code" },
          { name: "Python", level: "Advanced", years: "4 yrs", icon: "terminal" },
          { name: "Go (Golang)", level: "Intermediate", years: "2 yrs", icon: "cpu" },
          { name: "SQL", level: "Advanced", years: "5 yrs", icon: "database" }
        ]
      },
      {
        id: "frontend",
        name: "Frontend",
        items: [
          { name: "React / Next.js", level: "Expert", years: "5 yrs", icon: "layout" },
          { name: "Tailwind CSS", level: "Expert", years: "4 yrs", icon: "palette" },
          { name: "Vue.js", level: "Intermediate", years: "2 yrs", icon: "layout" },
          { name: "Redux / Zustand", level: "Advanced", years: "4 yrs", icon: "layers" },
          { name: "HTML5 / Semantic Web", level: "Expert", years: "5+ yrs", icon: "globe" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Systems",
        items: [
          { name: "Node.js / Express / NestJS", level: "Expert", years: "5 yrs", icon: "server" },
          { name: "FastAPI / Django", level: "Advanced", years: "3 yrs", icon: "zap" },
          { name: "RESTful & GraphQL APIs", level: "Expert", years: "5 yrs", icon: "share-2" },
          { name: "gRPC & Microservices", level: "Advanced", years: "3 yrs", icon: "network" },
          { name: "Kafka & RabbitMQ", level: "Intermediate", years: "2 yrs", icon: "activity" }
        ]
      },
      {
        id: "database",
        name: "Databases & Storage",
        items: [
          { name: "PostgreSQL", level: "Expert", years: "5 yrs", icon: "database" },
          { name: "Redis", level: "Advanced", years: "4 yrs", icon: "database" },
          { name: "MongoDB", level: "Advanced", years: "3 yrs", icon: "database" },
          { name: "Elasticsearch", level: "Intermediate", years: "2 yrs", icon: "search" }
        ]
      },
      {
        id: "devops",
        name: "Cloud & DevOps",
        items: [
          { name: "Docker & Containerization", level: "Advanced", years: "4 yrs", icon: "box" },
          { name: "Kubernetes", level: "Intermediate", years: "2 yrs", icon: "anchor" },
          { name: "AWS (S3, ECS, Lambda, RDS)", level: "Advanced", years: "4 yrs", icon: "cloud" },
          { name: "CI/CD (GitHub Actions)", level: "Expert", years: "4 yrs", icon: "git-merge" },
          { name: "Terraform", level: "Intermediate", years: "2 yrs", icon: "shield" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "cloud-pulse",
      title: "CloudPulse - Distributed Metrics & Observability Platform",
      category: "Full-Stack",
      highlight: "Featured Project",
      shortDescription: "Real-time telemetry and APM dashboard handling 50k events/sec with sub-second aggregate queries.",
      impact: "Reduced incident MTTR by 35% for 12 engineering squads",
      tags: ["Go", "React", "TypeScript", "TimescaleDB", "Redis", "Docker", "Tailwind CSS"],
      liveUrl: "https://example.com/demo/cloudpulse",
      repoUrl: "https://github.com",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      architecture: {
        problem: "Engineering teams lacked real-time visibility into high-throughput microservices, causing delayed alerts and extended downtime.",
        solution: "Engineered an ingestion engine in Go communicating over gRPC, caching aggregate rollups in Redis and persisting to TimescaleDB with an interactive React visualization layer.",
        keyFeatures: [
          "50,000+ metrics per second ingestion capacity",
          "Custom anomaly detection engine with instant Slack & PagerDuty triggers",
          "WebSockets-based live dashboard with zero perceptible latency"
        ]
      }
    },
    {
      id: "nexus-commerce",
      title: "NexusCommerce - High-Concurrency Headless E-Commerce Core",
      category: "Backend & Systems",
      highlight: "Production System",
      shortDescription: "Ultra-fast headless commerce platform with dynamic inventory locking and global multi-region support.",
      impact: "Handled 120,000 requests/min during Black Friday with zero downtime",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Stripe API", "AWS ECS"],
      liveUrl: "https://example.com/demo/nexus",
      repoUrl: "https://github.com",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      architecture: {
        problem: "Flash-sale inventory race conditions frequently caused overselling and transaction rollbacks during peak shopping campaigns.",
        solution: "Implemented distributed locking using Redis Redlock algorithms and asynchronous order settlement pipelines powered by Kafka and PostgreSQL row-level locks.",
        keyFeatures: [
          "Guaranteed zero oversell during high-concurrency flash sales",
          "Sub-40ms P95 latency for checkout flow",
          "Comprehensive idempotency layer preventing double-charges"
        ]
      }
    },
    {
      id: "dev-craft-cli",
      title: "DevCraft - Developer Environment & Automation CLI",
      category: "Tools & Open Source",
      highlight: "Popular Open Source",
      shortDescription: "Open-source developer workflow tool that scaffolds microservices, seeds sandbox DBs, and monitors local services.",
      impact: "Over 4,500 GitHub Stars and 30,000 monthly npm downloads",
      tags: ["TypeScript", "Node.js", "Docker API", "Shell", "CLI", "Jest"],
      liveUrl: "https://example.com/demo/devcraft",
      repoUrl: "https://github.com",
      gradient: "from-amber-500 via-orange-600 to-red-600",
      architecture: {
        problem: "New engineer onboarding took over 3 days due to complex container dependencies, environment secrets, and disparate local databases.",
        solution: "Created an interactive CLI with intelligent system diagnostics, instant one-command environment bootstrapping, and isolated ephemeral test environments.",
        keyFeatures: [
          "Reduced dev environment onboarding from 3 days to under 8 minutes",
          "Extensible plugin ecosystem with community contribution model",
          "Cross-platform support for macOS, Linux, and Windows WSL"
        ]
      }
    },
    {
      id: "synapse-ai",
      title: "SynapseAI - Intelligent Code Review & Security Auditor",
      category: "Full-Stack",
      highlight: "AI & Productivity",
      shortDescription: "Autonomous GitHub integration that scans pull requests for security vulnerabilities, memory leaks, and performance anti-patterns.",
      impact: "Detected 400+ pre-merge bugs across 85 active repositories",
      tags: ["Python", "FastAPI", "React", "OpenAI / Claude API", "GitHub Webhooks", "PostgreSQL"],
      liveUrl: "https://example.com/demo/synapse",
      repoUrl: "https://github.com",
      gradient: "from-violet-600 via-purple-600 to-pink-600",
      architecture: {
        problem: "Senior engineers spent 15+ hours weekly reviewing routine boilerplate, syntax regressions, and common security flaws.",
        solution: "Built a background event processor evaluating git diffs with custom AST parsing combined with LLM prompt pipelines, posting inline PR annotations with fix suggestions.",
        keyFeatures: [
          "AST-driven context extraction for high-accuracy suggestions",
          "Interactive 1-click 'Apply Fix' directly from GitHub PR interface",
          "End-to-end encryption ensuring zero source code storage"
        ]
      }
    }
  ],

  experience: [
    {
      role: "Senior Software Engineer",
      company: "Veloce Technologies",
      period: "2023 - Present",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      summary: "Lead engineer for the core platform team driving architecture modernization, microservices scalability, and developer experience.",
      achievements: [
        "Architected distributed event streaming pipeline using Kafka and Go, reducing data sync delays from 15 minutes to < 2 seconds.",
        "Mentored team of 6 engineers, standardizing code review standards, CI/CD automated test gates, and design doc templates.",
        "Cut monthly AWS cloud infrastructure costs by 28% through autoscaling optimization, serverless job offloading, and database indexing audits."
      ],
      skills: ["Go", "TypeScript", "Kafka", "PostgreSQL", "AWS", "Kubernetes", "Docker"]
    },
    {
      role: "Full-Stack Software Engineer",
      company: "Aether Cloud Systems",
      period: "2021 - 2023",
      location: "Remote",
      type: "Full-time",
      summary: "Designed and built enterprise SaaS applications, customer dashboards, and high-volume REST/GraphQL endpoints.",
      achievements: [
        "Engineered customer-facing analytics dashboard in React/Next.js and Tailwind, boosting user engagement by 45%.",
        "Redesigned the multi-tenant PostgreSQL database schema with partitioning, improving complex query performance by 60%.",
        "Authored comprehensive end-to-end test suites using Cypress and Playwright, reducing production bug regressions by 35%."
      ],
      skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"]
    },
    {
      role: "Software Engineer",
      company: "Beacon Software Lab",
      period: "2019 - 2021",
      location: "Austin, TX",
      type: "Full-time",
      summary: "Developed client web applications, internal tooling, and microservices for fintech and healthcare clients.",
      achievements: [
        "Built responsive web interfaces and RESTful APIs compliant with HIPAA and SOC 2 data security requirements.",
        "Automated deployment workflows with GitHub Actions, cutting release deployment cycles from 2 hours to 10 minutes.",
        "Collaborated with UX designers and product managers to iterate on customer-facing workflow enhancements."
      ],
      skills: ["JavaScript", "Python", "React", "Express.js", "MySQL", "Git", "REST APIs"]
    }
  ],

  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "State University of Science & Technology",
      period: "2015 - 2019",
      honors: "Magna Cum Laude (GPA 3.85 / 4.0)",
      highlights: "Coursework: Distributed Systems, Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems."
    }
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect - Associate", year: "2023" },
    { name: "Certified Kubernetes Administrator (CKA)", year: "2022" }
  ]
};

// Export for browser
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
