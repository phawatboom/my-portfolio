// src/data/projects.ts

export type ProjectDomain = "ml" | "fullstack" | "trading" | "case";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  descriptionShort: string;
  year: number;
  domain: ProjectDomain;
  techStack: string[];
  tags: string[];
  impact: string;
  highlight: boolean; // true = show on home page
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
    oneLiner: "Stock mean reversion and beta forecasting tool.",
    descriptionShort:
      "Built ElasticNet based models to forecast stock beta and mean reversion, with a web dashboard to explore signals.",
    year: 2025,
    domain: "ml",
    techStack: ["Python", "Pandas", "Scikit learn", "Next.js", "Django", "PostgreSQL"],
    tags: ["Mean reversion", "Factor models", "Time series"],
    impact:
      "Helped users identify potential mispricings by surfacing mean reversion probabilities and beta trends.",
    highlight: true,
    links: {
      github: "https://github.com/yourname/capital-compass",
    },
  },
  {
    slug: "worklaunch",
    title: "WorkLaunch",
    oneLiner: "AI powered skills and occupation matching platform.",
    descriptionShort:
      "Maps resume skills to ESCO occupations using embeddings to suggest career paths and highlight skill gaps.",
    year: 2025,
    domain: "ml",
    techStack: ["Python", "Flask or FastAPI", "NLP", "PostgreSQL", "Qdrant"],
    tags: ["NLP", "Embeddings", "Career tech"],
    impact:
      "Gives users structured career suggestions and concrete skill gaps instead of generic job matches.",
    highlight: true,
    links: {
      github: "https://github.com/yourname/worklaunch",
    },
  },
  {
    slug: "aucc-website",
    title: "AUCC Website Revamp",
    oneLiner: "Dynamic club website for the Auckland University Canoe Club.",
    descriptionShort:
      "Next.js site backed by a CMS so non technical committee members can manage trips, galleries, and pages.",
    year: 2025,
    domain: "fullstack",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Payload CMS", "PostgreSQL"],
    tags: ["Full stack", "CMS", "Club website"],
    impact:
      "Reduced manual website updates and made it easier to promote trips and events to members.",
    highlight: true,
    links: {
      github: "https://github.com/yourname/aucc-website",
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
    highlight: false,
    links: {},
  },
];
