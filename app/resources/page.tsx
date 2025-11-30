import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Phawat",
  description:
    "Curated resources I use to learn software, AI, cloud, and finance.",
};

type ResourceLink = {
  label: string;
  url: string;
  note?: string;
};

type ResourceSection = {
  title: string;
  emoji: string;
  description: string;
  links: ResourceLink[];
};

const sections: ResourceSection[] = [
  {
    title: "Interview preparation",
    emoji: "🎯",
    description:
      "How I prepare for frontend, JavaScript, React, system design, and general CS interviews.",
    links: [
      { label: "sudheerj / javascript-interview-questions", url: "https://github.com/sudheerj/javascript-interview-questions" },
      { label: "sudheerj / reactjs-interview-questions", url: "https://github.com/sudheerj/reactjs-interview-questions" },
      { label: "yangshun / front-end-interview-handbook", url: "https://github.com/yangshun/front-end-interview-handbook" },
      { label: "karanpratapsingh / system-design", url: "https://github.com/karanpratapsingh/system-design" },
      { label: "ByteByteGoHq / system-design-101", url: "https://github.com/ByteByteGoHq/system-design-101" },
      { label: "kdn251 / interviews", url: "https://github.com/kdn251/interviews" },
      { label: "yangshun / tech-interview-handbook", url: "https://github.com/yangshun/tech-interview-handbook" },
      { label: "TheAlgorithms / Python", url: "https://github.com/TheAlgorithms/Python" },
    ],
  },
  {
    title: "Frontend, React, and TypeScript",
    emoji: "🧩",
    description:
      "Bookmarks and component libraries I use to deepen frontend skills.",
    links: [
      { label: "dypsilon / frontend-dev-bookmarks", url: "https://github.com/dypsilon/frontend-dev-bookmarks" },
      { label: "typescript-cheatsheets / react", url: "https://github.com/typescript-cheatsheets/react" },
      { label: "brillout / awesome-react-components", url: "https://github.com/brillout/awesome-react-components" },
      { label: "shadcn-ui / taxonomy", url: "https://github.com/shadcn-ui/taxonomy" },
      { label: "vercel / commerce", url: "https://github.com/vercel/commerce" },
    ],
  },
  {
    title: "AI, ML, and LLM engineering",
    emoji: "🧠",
    description:
      "Resources I use to learn ML engineering, LLMs, RAG, and AI agents.",
    links: [
      { label: "chiphuyen / aie-book", url: "https://github.com/chiphuyen/aie-book" },
      { label: "stas00 / ml-engineering", url: "https://github.com/stas00/ml-engineering" },
      { label: "mlabonne / llm-course", url: "https://github.com/mlabonne/llm-course" },
      { label: "dair-ai / Prompt-Engineering-Guide", url: "https://github.com/dair-ai/Prompt-Engineering-Guide" },
      { label: "langchain-ai / langgraph", url: "https://github.com/langchain-ai/langgraph" },
      { label: "Shubhamsaboo / awesome-llm-apps", url: "https://github.com/Shubhamsaboo/awesome-llm-apps" },
    ],
  },
  {
    title: "AI coding agents, prompts, and copilots",
    emoji: "🤖",
    description:
      "How I study AI agents, system prompts, and use coding copilots effectively.",
    links: [
      { label: "anthropics / claude-code", url: "https://github.com/anthropics/claude-code" },
      { label: "cline / cline", url: "https://github.com/cline/cline" },
      { label: "github / awesome-copilot", url: "https://github.com/github/awesome-copilot" },
      { label: "elder-plinius / CL4R1T4S", url: "https://github.com/elder-plinius/CL4R1T4S" },
    ],
  },
  {
    title: "Cloud, DevOps, AWS, and Docker",
    emoji: "☁️",
    description:
      "Tools and guides that help me learn how to run software in production.",
    links: [
      { label: "localstack / localstack", url: "https://github.com/localstack/localstack" },
      { label: "open-guides / og-aws", url: "https://github.com/open-guides/og-aws" },
      { label: "docker / awesome-compose", url: "https://github.com/docker/awesome-compose" },
      { label: "grafana / grafana", url: "https://github.com/grafana/grafana" },
      { label: "minio / minio", url: "https://github.com/minio/minio" },
      { label: "bregman-arie / devops-exercises", url: "https://github.com/bregman-arie/devops-exercises" },
    ],
  },
  {
    title: "Finance, trading, and crypto tooling",
    emoji: "📈",
    description:
      "Open source projects at the intersection of trading, markets, skills, and software.",
    links: [
      { label: "ghostfolio / ghostfolio", url: "https://github.com/ghostfolio/ghostfolio" },
      { label: "ccxt / ccxt", url: "https://github.com/ccxt/ccxt" },
      { label: "freqtrade / freqtrade", url: "https://github.com/freqtrade/freqtrade" },
      { label: "hummingbot / hummingbot", url: "https://github.com/hummingbot/hummingbot" },
      { label: "OpenBB-finance / OpenBB", url: "https://github.com/OpenBB-finance/OpenBB" },
      { label: "srbhr / Resume-Matcher", url: "https://github.com/srbhr/Resume-Matcher" },
    ],
  },
  {
    title: "Languages, patterns, and career",
    emoji: "🧭",
    description:
      "Broader CS foundations and career tools I use to grow over time.",
    links: [
      { label: "akullpp / awesome-java", url: "https://github.com/akullpp/awesome-java" },
      { label: "DovAmir / awesome-design-patterns", url: "https://github.com/DovAmir/awesome-design-patterns" },
      { label: "lukasz-madon / awesome-remote-job", url: "https://github.com/lukasz-madon/awesome-remote-job" },
      { label: "freeCodeCamp / freeCodeCamp", url: "https://github.com/freeCodeCamp/freeCodeCamp" },
    ],
  },
];

const featuredLinks: ResourceLink[] = [
  { label: "mlabonne / llm-course", url: "https://github.com/mlabonne/llm-course", note: "My go to for LLM fundamentals." },
  { label: "karanpratapsingh / system-design", url: "https://github.com/karanpratapsingh/system-design", note: "Clear system design foundations." },
  { label: "freqtrade / freqtrade", url: "https://github.com/freqtrade/freqtrade", note: "Helps me think about real trading workflows." },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Hero */}
      <section className="pt-6 space-y-3">
        <h1 className="text-4xl font-extrabold">Learning resources</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          A curated set of repositories and guides I use to level up in software
          engineering, AI, cloud, and finance. I keep this list small, tested,
          and practical.
        </p>
      </section>

      {/* Featured picks */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          Featured picks
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {featuredLinks.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 text-white rounded-2xl p-4 border border-gray-800 hover:border-amber-400 hover:-translate-y-0.5 transition-transform"
            >
              <p className="font-semibold mb-1">{item.label}</p>
              {item.note && (
                <p className="text-xs text-gray-200">{item.note}</p>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="space-y-8 pb-10">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white shadow-sm rounded-2xl p-6 border"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-xl">{section.emoji}</span>
                  <span>{section.title}</span>
                </h2>
                <p className="text-sm text-gray-700 mt-1">
                  {section.description}
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-700 underline underline-offset-4 hover:text-amber-600"
                  >
                    {link.label}
                  </a>
                  {link.note && (
                    <span className="text-xs text-gray-600">{"  "}{link.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
