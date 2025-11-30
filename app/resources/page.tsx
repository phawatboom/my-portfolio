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
  kicker: string;
  description: string;
  links: ResourceLink[];
};

const sections: ResourceSection[] = [
  {
    title: "Interview preparation",
    kicker: "How I prepare",
    description:
      "My backbone for frontend, JavaScript, React, system design, and general CS interviews.",
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
    kicker: "Interfaces",
    description:
      "References and component libraries that influence how I think about building clean frontends.",
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
    kicker: "Models and systems",
    description:
      "How I learn practical ML engineering, LLMs, RAG, and agents beyond toy examples.",
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
    title: "AI coding agents and copilots",
    kicker: "Working with AI",
    description:
      "Resources that help me design prompts, agents, and workflows around coding copilots.",
    links: [
      { label: "anthropics / claude-code", url: "https://github.com/anthropics/claude-code" },
      { label: "cline / cline", url: "https://github.com/cline/cline" },
      { label: "github / awesome-copilot", url: "https://github.com/github/awesome-copilot" },
      { label: "elder-plinius / CL4R1T4S", url: "https://github.com/elder-plinius/CL4R1T4S" },
    ],
  },
  {
    title: "Cloud, DevOps, AWS, and Docker",
    kicker: "Running in production",
    description:
      "Tools and guides that shape how I think about infrastructure, observability, and deployment.",
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
    kicker: "Markets",
    description:
      "Open source projects that inspire how I structure trading systems and portfolio tools.",
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
    kicker: "Foundations",
    description:
      "Broader CS and career resources I use to stay grounded over time.",
    links: [
      { label: "akullpp / awesome-java", url: "https://github.com/akullpp/awesome-java" },
      { label: "DovAmir / awesome-design-patterns", url: "https://github.com/DovAmir/awesome-design-patterns" },
      { label: "lukasz-madon / awesome-remote-job", url: "https://github.com/lukasz-madon/awesome-remote-job" },
      { label: "freeCodeCamp / freeCodeCamp", url: "https://github.com/freeCodeCamp/freeCodeCamp" },
    ],
  },
];

const featuredLinks: ResourceLink[] = [
  {
    label: "mlabonne / llm-course",
    url: "https://github.com/mlabonne/llm-course",
    note: "My go to reference for LLM fundamentals.",
  },
  {
    label: "karanpratapsingh / system-design",
    url: "https://github.com/karanpratapsingh/system-design",
    note: "A clear mental model for system design.",
  },
  {
    label: "freqtrade / freqtrade",
    url: "https://github.com/freqtrade/freqtrade",
    note: "Helps me think in realistic trading workflows.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero */}
      <section className="pt-6 space-y-3">
        <h1 className="text-4xl font-extrabold">Learning resources</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          A focused library of tools and references I use to learn faster.
          Everything here is something I have used personally.
        </p>
      </section>

      {/* Featured */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          Featured
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
      <section className="space-y-10 pb-10">
        {sections.map((section) => (
          <div
            key={section.title}
            className="border-t pt-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                {section.kicker}
              </p>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-sm text-gray-700">{section.description}</p>
            </div>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border-b border-transparent pb-0.5 text-gray-900 hover:text-amber-700 hover:border-amber-400"
                  >
                    <span>{link.label}</span>
                    <span className="ml-1 text-[11px]">↗</span>
                  </a>
                  {link.note && (
                    <span className="ml-1 text-xs text-gray-600">
                      {link.note}
                    </span>
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
