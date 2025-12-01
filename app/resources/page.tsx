import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Phawat",
  description:
    "A small, opinionated set of resources I actually use for software, AI, cloud, and finance.",
};

type ResourceLink = {
  label: string;
  url: string;
  note?: string;
};

type Scenario = {
  id: string;
  title: string;
  persona: string;
  startHere: ResourceLink[];
  deepen?: ResourceLink[];
};

const featuredLinks: ResourceLink[] = [
  {
    label: "karanpratapsingh / system-design",
    url: "https://github.com/karanpratapsingh/system-design",
    note: "Great backbone for system design mental models.",
  },
  {
    label: "Practical Deep Learning for Coders",
    url: "https://course.fast.ai/",
    note: "Made deep learning feel applied and buildable.",
  },
  {
    label: "TheAlgorithms / Python",
    url: "https://github.com/TheAlgorithms/Python",
    note: "Clean reference for core algorithms and data structures.",
  },
];

const scenarios: Scenario[] = [
  {
    id: "interviews",
    title: "Frontend · React · system design interviews",
    persona: "If you are preparing for frontend / full-stack interviews:",
    startHere: [
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
    ],
    deepen: [
      {
        label: "karanpratapsingh / system-design",
        url: "https://github.com/karanpratapsingh/system-design",
      },
      {
        label: "ByteByteGoHQ / system-design-101",
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
    ],
  },
  {
    id: "ai-ml",
    title: "Applied AI, deep learning, and LLMs",
    persona: "If you want to get serious about applied ML and LLMs:",
    startHere: [
      {
        label: "fast.ai course",
        url: "https://course.fast.ai/",
        note: "End-to-end deep learning with real projects.",
      },
      {
        label: "karpathy / nn-zero-to-hero",
        url: "https://github.com/karpathy/nn-zero-to-hero",
        note: "Builds neural nets from scratch so the math feels concrete.",
      },
      {
        label: "Awesome LLMs",
        url: "https://github.com/Hannibal046/Awesome-LLM",
        note: "Curated list for modern LLM tooling.",
      },
    ],
    deepen: [
      {
        label: "llm-course / full-stack-llm",
        url: "https://github.com/full-stack-llm/full-stack-llm",
        note: "Patterns for serving and evaluating LLM apps.",
      },
      {
        label: "stanford / cs229",
        url: "https://cs229.stanford.edu/",
        note: "Theory when you want a stronger ML foundation.",
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full-stack engineering and cloud",
    persona: "If you are building modern web apps end-to-end:",
    startHere: [
      {
        label: "vercel / next.js docs",
        url: "https://nextjs.org/learn",
        note: "Best place to get fluent in app-router Next.js.",
      },
      {
        label: "Django documentation",
        url: "https://docs.djangoproject.com/en/stable/",
        note: "My default backend reference.",
      },
      {
        label: "SQLBolt",
        url: "https://sqlbolt.com/",
        note: "Hands-on SQL practice in small chunks.",
      },
    ],
    deepen: [
      {
        label: "The Twelve-Factor App",
        url: "https://12factor.net/",
        note: "Simple checklist for production-friendly services.",
      },
      {
        label: "Awesome Terraform",
        url: "https://github.com/shuaibiyy/awesome-terraform",
      },
      {
        label: "Awesome AWS",
        url: "https://github.com/donnemartin/awesome-aws",
      },
    ],
  },
  {
    id: "trading-finance",
    title: "Trading, quant, and finance",
    persona: "If you are exploring trading systems and corporate finance:",
    startHere: [
      {
        label: "freqtrade / freqtrade",
        url: "https://github.com/freqtrade/freqtrade",
        note: "Good reference for real trading workflows and risk controls.",
      },
      {
        label: "QuantStart articles",
        url: "https://www.quantstart.com/articles/",
        note: "Wide range of quant topics with code.",
      },
      {
        label: "Aswath Damodaran online classes",
        url: "https://pages.stern.nyu.edu/~adamodar/",
        note: "Valuation and corporate finance fundamentals.",
      },
    ],
    deepen: [
      {
        label: "quantopian / lectures (archived)",
        url: "https://github.com/quantopian/lectures",
      },
      {
        label: "Awesome Quant",
        url: "https://github.com/wilsonfreitas/awesome-quant",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Hero */}
      <section className="pt-6 space-y-2">
        <h1 className="text-4xl font-extrabold">Learning resources</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          A small, opinionated library I keep coming back to. If you are
          preparing for interviews, building products, or going deeper into AI
          and markets, this is where I would start.
        </p>
        <p className="text-xs text-gray-500">
          Last updated: September 2025
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
              className="bg-gray-900 text-white rounded-2xl p-4 border border-gray-800 hover:border-[#DDAA3B] hover:-translate-y-0.5 transition-transform"
            >
              <p className="font-semibold mb-1">{item.label}</p>
              {item.note && (
                <p className="text-xs text-gray-200">{item.note}</p>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Scenario blocks */}
      <section className="space-y-8 pb-10">
        {scenarios.map((scenario) => (
          <article
            key={scenario.id}
            className="bg-white shadow-sm rounded-2xl p-6 border"
          >
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                {scenario.title}
              </p>
              <h2 className="text-lg font-semibold">{scenario.persona}</h2>
            </div>

            <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)] gap-6 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2">
                  Start here (first 3 links)
                </p>
                <ul className="space-y-2">
                  {scenario.startHere.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-baseline gap-2 border-b border-gray-300 pb-0.5 text-gray-900 hover:text-[#DDAA3B] hover:border-[#DDAA3B] transition-colors"
                      >
                        <span>{link.label}</span>
                      </a>
                      {link.note && (
                        <p className="text-xs text-gray-600 mt-0.5">
                          {link.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {scenario.deepen && scenario.deepen.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    Go deeper when you have more time
                  </p>
                  <ul className="space-y-2">
                    {scenario.deepen.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-baseline gap-2 border-b border-gray-200 pb-0.5 text-gray-800 hover:text-[#DDAA3B] hover:border-[#DDAA3B] transition-colors"
                        >
                          <span>{link.label}</span>
                        </a>
                        {link.note && (
                          <p className="text-xs text-gray-600 mt-0.5">
                            {link.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
