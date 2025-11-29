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
  description: string;
  links: ResourceLink[];
};

const sections: ResourceSection[] = [
  {
    title: "Interview preparation",
    description:
      "Resources I use to prepare for frontend, JavaScript, React, system design, and DevOps interviews.",
    links: [
      {
        label: "sudheerj / javascript-interview-questions",
        url: "https://github.com/sudheerj/javascript-interview-questions",
      },
      {
        label: "sudheerj / reactjs-interview-questions",
        url: "https://github.com/sudheerj/reactjs-interview-questions",
      },
      {
        label: "yangshun / front-end-interview-handbook",
        url: "https://github.com/yangshun/front-end-interview-handbook",
      },
      {
        label: "karanpratapsingh / system-design",
        url: "https://github.com/karanpratapsingh/system-design",
      },
      {
        label: "ByteByteGoHq / system-design-101",
        url: "https://github.com/ByteByteGoHq/system-design-101",
      },
      {
        label: "kdn251 / interviews",
        url: "https://github.com/kdn251/interviews",
      },
      {
        label: "yangshun / tech-interview-handbook",
        url: "https://github.com/yangshun/tech-interview-handbook",
      },
      {
        label: "TheAlgorithms / Python",
        url: "https://github.com/TheAlgorithms/Python",
      },
    ],
  },
  {
    title: "Frontend, React, and TypeScript",
    description:
      "Bookmarks and component libraries I use to deepen frontend skills.",
    links: [
      {
        label: "dypsilon / frontend-dev-bookmarks",
        url: "https://github.com/dypsilon/frontend-dev-bookmarks",
      },
      {
        label: "typescript-cheatsheets / react",
        url: "https://github.com/typescript-cheatsheets/react",
      },
      {
        label: "brillout / awesome-react-components",
        url: "https://github.com/brillout/awesome-react-components",
      },
      {
        label: "shadcn-ui / taxonomy",
        url: "https://github.com/shadcn-ui/taxonomy",
      },
      {
        label: "vercel / commerce",
        url: "https://github.com/vercel/commerce",
      },
    ],
  },
  {
    title: "AI, ML, and LLM engineering",
    description:
      "Resources I use to learn ML engineering, LLMs, RAG, and AI agents.",
    links: [
      {
        label: "chiphuyen / aie-book",
        url: "https://github.com/chiphuyen/aie-book",
      },
      {
        label: "stas00 / ml-engineering",
        url: "https://github.com/stas00/ml-engineering",
      },
      {
        label: "mlabonne / llm-course",
        url: "https://github.com/mlabonne/llm-course",
      },
      {
        label: "dair-ai / Prompt-Engineering-Guide",
        url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
      },
      {
        label: "langchain-ai / langgraph",
        url: "https://github.com/langchain-ai/langgraph",
      },
      {
        label: "Shubhamsaboo / awesome-llm-apps",
        url: "https://github.com/Shubhamsaboo/awesome-llm-apps",
      },
    ],
  },
  {
    title: "AI coding agents, prompts, and system design",
    description:
      "How I study AI agents, system prompts, and use coding copilots effectively.",
    links: [
      {
        label: "anthropics / claude-code",
        url: "https://github.com/anthropics/claude-code",
      },
      {
        label: "cline / cline",
        url: "https://github.com/cline/cline",
      },
      {
        label: "github / awesome-copilot",
        url: "https://github.com/github/awesome-copilot",
      },
      {
        label: "elder-plinius / CL4R1T4S",
        url: "https://github.com/elder-plinius/CL4R1T4S",
      },
    ],
  },
  {
    title: "Cloud, DevOps, AWS, and Docker",
    description:
      "Tools and guides that help me learn how to run software in production.",
    links: [
      {
        label: "localstack / localstack",
        url: "https://github.com/localstack/localstack",
      },
      {
        label: "open-guides / og-aws",
        url: "https://github.com/open-guides/og-aws",
      },
      {
        label: "docker / awesome-compose",
        url: "https://github.com/docker/awesome-compose",
      },
      {
        label: "grafana / grafana",
        url: "https://github.com/grafana/grafana",
      },
      {
        label: "minio / minio",
        url: "https://github.com/minio/minio",
      },
      {
        label: "bregman-arie / devops-exercises",
        url: "https://github.com/bregman-arie/devops-exercises",
      },
    ],
  },
  {
    title: "Finance, trading, and crypto tooling",
    description:
      "Open source projects at the intersection of trading, markets, skills, and software.",
    links: [
      {
        label: "ghostfolio / ghostfolio",
        url: "https://github.com/ghostfolio/ghostfolio",
      },
      {
        label: "ccxt / ccxt",
        url: "https://github.com/ccxt/ccxt",
      },
      {
        label: "freqtrade / freqtrade",
        url: "https://github.com/freqtrade/freqtrade",
      },
      {
        label: "hummingbot / hummingbot",
        url: "https://github.com/hummingbot/hummingbot",
      },
      {
        label: "OpenBB-finance / OpenBB",
        url: "https://github.com/OpenBB-finance/OpenBB",
      },
      {
        label: "srbhr / Resume-Matcher",
        url: "https://github.com/srbhr/Resume-Matcher",
      },
    ],
  },
  {
    title: "Languages, patterns, and career resources",
    description:
      "Broader CS foundations and career tools I use to grow over time.",
    links: [
      {
        label: "akullpp / awesome-java",
        url: "https://github.com/akullpp/awesome-java",
      },
      {
        label: "DovAmir / awesome-design-patterns",
        url: "https://github.com/DovAmir/awesome-design-patterns",
      },
      {
        label: "lukasz-madon / awesome-remote-job",
        url: "https://github.com/lukasz-madon/awesome-remote-job",
      },
      {
        label: "freeCodeCamp / freeCodeCamp",
        url: "https://github.com/freeCodeCamp/freeCodeCamp",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Learning resources</h1>
      <p className="text-lg text-gray-700 mb-8">
        A curated set of repositories and guides I actively use to learn
        software engineering, AI, cloud, and finance.
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-700 mb-4">{section.description}</p>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-700 underline hover:text-amber-500"
                  >
                    {link.label}
                  </a>
                  {link.note && (
                    <span className="text-sm text-gray-600">
                      {" "}- {link.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
