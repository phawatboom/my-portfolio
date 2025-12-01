// src/data/projects.ts

export type ProjectDomain = "ml" | "fullstack" | "trading" | "case";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  descriptionShort: string;
  longDescription?: string;
  year: number;
  domain: ProjectDomain;
  techStack: string[];
  tags: string[];
  impact: string;
  highlight: boolean; // true = show on home page
  relatedCourses?: string[]; // e.g. ["COMPSCI 335", "FINANCE 251"]
  links: {
    github?: string;
    demo?: string;
    slides?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "capital-compass",
    title: "Capital Compass",
    oneLiner: "Quantitative tools for stock mean reversion and beta forecasting.",
    descriptionShort:
      "Developed quantitative tools to forecast stock beta and mean reversion using ElasticNet models, featuring a web dashboard for signal exploration.",
    year: 2025,
    domain: "ml",
    techStack: ["Python", "Pandas", "Scikit-learn", "Next.js", "Django", "PostgreSQL"],
    tags: ["Mean reversion", "Factor models", "Time series", "Quantitative Finance"],
    impact:
      "Enabled identification of potential market mispricings by visualizing mean reversion probabilities and beta trends.",
    longDescription:
      "Capital Compass is a suite of quantitative tools designed to analyze stock market behaviors, specifically focusing on mean reversion and beta forecasting. The project leverages ElasticNet regression models to predict stock beta and identify mean-reverting tendencies. A comprehensive web dashboard, built with Next.js and Django, allows users to interactively explore these signals, providing insights into potential mispricings and risk factors. The system integrates data processing pipelines using Pandas and Scikit-learn, backed by a PostgreSQL database for robust data management.",
    highlight: true,
    relatedCourses: ["FINANCE 361", "COMPSCI 361"],
    links: {
      github: "https://github.com/phawatboom/mean-reversion-stock-prediciton-algorithm",
      demo: "http://3.104.120.14/",
    },
  },
  {
    slug: "worklaunch",
    title: "WorkLaunch",
    oneLiner: "AI powered skills and occupation matching platform.",
    descriptionShort:
      "Maps resume skills to ESCO occupations using embeddings to suggest career paths and highlight skill gaps. (Confidential / Internal Tool)",
    year: 2025,
    domain: "ml",
    techStack: ["Python", "Flask or FastAPI", "NLP", "PostgreSQL", "Qdrant"],
    tags: ["NLP", "Embeddings", "Career tech"],
    impact:
      "Gives users structured career suggestions and concrete skill gaps instead of generic job matches.",
    highlight: true,
    relatedCourses: ["COMPSCI 361"],
    links: {
      // Confidential project
    },
  },
  {
    slug: "aucc-website",
    title: "AUCC Website",
    oneLiner: "Dynamic club website for the Auckland University Canoe Club.",
    descriptionShort:
      "A modern, content-managed website for the Auckland University Canoe Club, built with Next.js 15 and Payload CMS. Developed by WDCC in 2025.",
    year: 2025,
    domain: "fullstack",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Payload CMS", "PostgreSQL", "AWS S3", "Fly.io"],
    tags: ["Full stack", "CMS", "Club website"],
    impact:
      "Reduced manual website updates and made it easier to promote trips and events to members.",
    longDescription:
      "The AUCC website serves as the digital hub for Auckland University's paddling community. It features event management for upcoming trips and registrations, community-generated trip reports with photo galleries, comprehensive river guides, and member profiles. The project uses a modern tech stack with Next.js 15 (App Router) on the frontend, Payload CMS 3.0 for headless content management, and Neon Postgres for the database. Infrastructure is managed via Terraform on AWS (S3 + CloudFront) and deployed to Fly.io. As Tech Lead, I guided a team of 8 developers and a designer to deliver a production-grade system with comprehensive documentation and handover processes.",
    highlight: true,
    relatedCourses: ["COMPSCI 335"],
    links: {
      github: "https://github.com/UoaWDCC/aucc",
      demo: "https://aucc-staging.fly.dev/",
    },
  },
  {
    slug: "imc-trading-bots",
    title: "IMC Trading Challenge Bots",
    oneLiner: "Hybrid market making and statistical trading strategies.",
    descriptionShort:
      "Implemented rule based and statistical strategies for simulated products, balancing inventory risk and PnL.",
    year: 2024,
    domain: "trading",
    techStack: ["Python", "Pandas", "Backtesting framework"],
    tags: ["Market making", "Stat arb", "Trading"],
    impact:
      "Improved PnL and stability across products by combining simple signals with risk controls.",
    longDescription:
      "Developed for the Algothon 2025 competition, this project involved building a trading strategy algorithm to perform optimally given certain metrics (mean(PL) - 0.1 * StdDev(PL)). The solution involved assessing provided price data from a simulated trading universe of 50 instruments, building a predictive model, and back-testing it. The algorithm, implemented in Python, trades position differences based on the most recent price, managing a $10k position limit per stock. Key considerations included optimizing for trade frequency, projecting worst-case scenarios, and implementing risk minimization techniques.",
    highlight: false,
    relatedCourses: ["FINANCE 351"],
    links: {
      github: "https://github.com/phawatboom/algothon25-polygon",
    },
  },
  {
    slug: "kitchen-intelligence",
    title: "Kitchen Intelligence",
    oneLiner: "AI meal planner and cooking assistant for real households.",
    descriptionShort:
      "Collective Kitchen OS is an AI powered meal planning system that adapts to real households. It combines nutrition goals, ingredient costs, kitchen equipment, local availability, and personal food preferences to generate optimised weekly meal plans and grocery lists.",
    year: 2025,
    domain: "ml",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    tags: [
      "Meal planning",
      "LLM",
      "Optimisation",
      "Recommender systems",
      "Nutrition",
    ],
    impact:
      "Combines deterministic planning and LLM reasoning to generate realistic, cost-aware weekly meal plans that are easy to cook.",
    longDescription:
      "Kitchen Intelligence is an end-to-end AI-driven household meal planning system designed to make weekly food planning simple, healthy, cost-efficient, and personalised. It combines deterministic optimisation, nutritional modelling, and LLM-powered assistants to generate realistic plans that households can actually cook. The planner builds lunch and dinner plans around a household’s preferences, equipment, location, and budget, using real ingredient prices to estimate cost per meal and weekly totals. Each recipe is scored for calories, protein, and macro balance, and tagged with labels like high protein or low carb so users can quickly understand the health trade-offs. On top of the structured planner, an LLM layer explains plan choices in friendly language, adapts recipes on request (for example vegetarian, microwave-only, or lower-cost versions), and can suggest similar substitutions when users want to swap meals. A dedicated cook mode then walks users through recipes step by step on desktop or mobile, so the system covers the full journey from planning to cooking.",
    highlight: true,
    relatedCourses: ["COMPSCI 335", "COMPSCI 361"],
    links: {
      github: "https://github.com/phawatboom/kitchen-intelligence",
    },
  },
  {
    slug: "stock-valuation",
    title: "Stock Valuation Platform",
    oneLiner: "Comprehensive stock valuation and analytics tool.",
    descriptionShort:
      "Valuation platform that helps investors assess stocks using DCF, DDM, and Market Multiples, with ML-based forecasts and risk diagnostics.",
    year: 2025,
    domain: "trading",
    techStack: ["Python", "Machine Learning", "Financial Modelling"],
    tags: ["Valuation", "DCF", "Machine Learning", "Finance"],
    impact:
      "Provides investors with robust valuation models and analytics to support informed decision-making.",
    highlight: false,
    links: {
      github: "https://github.com/phawatboom/stock-valuation",
    },
  },
];
