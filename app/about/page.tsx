// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Phawat",
  description: "Learn more about my background and interests.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-extrabold mb-8">About me</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-700">
        <p>
          I am a final year Finance and Computer Science student at the
          University of Auckland, building a career at the intersection of
          software engineering, applied machine learning, and financial
          analysis. My long term goal is to rise in the business and technology
          world and use AI and data to build solutions that society genuinely
          needs, especially those that help reduce inequality and improve
          access to basic needs.
        </p>

        <p>
          I enjoy taking ideas from concept to production, from data modelling
          and machine learning pipelines through to full stack web
          applications. I have built systems such as:
        </p>
        <ul className="list-disc list-inside text-base text-gray-700 space-y-2 pl-4">
          <li>
            An algorithmic trading framework that combines EMA and MACD signals
            with RSI divergence and risk controls.
          </li>
          <li>
            A quantitative forecasting platform that classifies stock movements
            into mean reversion or momentum and visualises multi horizon
            forecasts in a Next.js dashboard.
          </li>
          <li>
            Worklaunch, an AI powered career recommender that maps resume text
            to more than 13,000 ESCO occupations using embeddings, semantic
            search, and skill graphs.
          </li>
        </ul>
        <p>
          These projects reflect how I like to work: rigorous in the data and
          modelling, practical in the engineering, and focused on real decision
          making value for users.
        </p>

        <h2 className="text-2xl font-semibold mt-10">How I learn and work</h2>
        <p>
          University has given me a strong foundation, but as my skills have
          grown I have increasingly looked beyond the classroom. I actively
          learn by:
        </p>
        <ul className="list-disc list-inside text-base text-gray-700 space-y-2 pl-4">
          <li>
            Building end to end projects in Python, React, Next.js, Django,
            SQL, and cloud platforms such as AWS and GCP.
          </li>
          <li>
            Attending club events, technical workshops, and case competitions
            to stress test my thinking against real business problems.
          </li>
          <li>
            Diving into trending GitHub repositories, AI and ML tools, and
            financial news to stay close to what practitioners are actually
            using.
          </li>
        </ul>
        <p>
          This mix of formal study and self driven learning has helped me
          become adaptable, comfortable with ambiguity, and able to move
          quickly from theory to implementation.
        </p>

        <p>
          As Tech Lead for the AUCC website project, I lead a team of
          developers and a designer to ship a production grade site using
          Next.js, Payload CMS, and PostgreSQL. I review pull requests, guide
          architectural decisions, and balance delivery with maintainability.
          Previously, as a Finance and Governance Executive at AIESEC in
          Auckland City, I liaised with sponsors, prepared monthly reports, and
          supported events, which strengthened my communication skills and
          stakeholder awareness.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Life OS</h2>
        <p className="mb-6">
          A glimpse into the systems and routines that keep me energized and
          growing outside of work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lifeAspects.map((aspect) => (
            <div
              key={aspect.id}
              className="p-5 border rounded-lg shadow-sm bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{aspect.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{aspect.oneLiner}</p>
              {aspect.routines && (
                <ul className="list-disc list-inside text-sm text-gray-600 mb-3">
                  {aspect.routines.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              )}
              {aspect.keyLinks && (
                <div className="flex flex-wrap gap-2">
                  {aspect.keyLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-amber-600 underline hover:text-amber-500"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10">What I want to build</h2>
        <p>
          I am particularly interested in roles such as AI and ML Engineer,
          Software Engineer or Full Stack Developer, and Quantitative or
          FinTech Analyst. My focus is on building AI systems that are
          technically robust and commercially grounded, and that over time can
          help narrow the gap between those who benefit from technology and
          those who are left behind.
        </p>
        <p>
          I am committed to building a long term career in New Zealand, ideally
          within reputable organisations that invest in innovation and people.
          My aim is to contribute to the local tech and finance ecosystem, grow
          into a senior technical and product role, and support New Zealand&apos;s
          broader economic and social resilience.
        </p>

        <p className="mt-8 pt-8 border-t text-gray-600 text-sm">
          For roles in AI, software, or trading, reach me at{" "}
          <a
            href="mailto:pboomhtsaengs3@gmail.com"
            className="text-amber-600 underline hover:text-amber-500"
          >
            pboomhtsaengs3@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

type LifeAspectId =
  | "health"
  | "relationships"
  | "food"
  | "explore"
  | "investing"
  | "roadmap";

type LifeAspect = {
  id: LifeAspectId;
  title: string;
  oneLiner: string;
  routines?: string[];
  keyLinks?: { label: string; href: string }[];
};

const lifeAspects: LifeAspect[] = [
  {
    id: "health",
    title: "Health and training",
    oneLiner: "Weight training and paddling to keep energy high for deep work.",
    routines: ["Gym 3–4 times per week", "Canoeing with AUCC"],
    keyLinks: [{ label: "AUCC", href: "https://www.aucc.org.nz/" }],
  },
  {
    id: "food",
    title: "Cooking and food",
    oneLiner: "Trying to turn simple ingredients into high protein meals.",
    keyLinks: [],
  },
  {
    id: "investing",
    title: "Investing & Markets",
    oneLiner: "Following macro trends and analyzing companies.",
    routines: ["Daily market news", "Seeking Alpha analysis"],
    keyLinks: [],
  },
];

