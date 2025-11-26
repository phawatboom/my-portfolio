// app/life/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life OS | Phawat",
  description:
    "How I manage health, relationships, food, exploration, investing, and my life roadmap.",
};

type LifeAspectId =
  | "health"
  | "relationships"
  | "food"
  | "explore"
  | "investing"
  | "roadmap";

type LifeLink = {
  label: string;
  href: string;
};

type LifeAspect = {
  id: LifeAspectId;
  title: string;
  oneLiner: string;
  details?: string;
  routines?: string[];
  links?: LifeLink[];
};

const lifeAspects: LifeAspect[] = [
  {
    id: "health",
    title: "Health and training",
    oneLiner: "Keeping energy high so I can think deeply and build consistently.",
    routines: [
      "Strength training several times per week",
      "Paddling and outdoor sessions with AUCC",
    ],
    links: [],
  },
  {
    id: "relationships",
    title: "Relationships and community",
    oneLiner:
      "Spending time with people who are curious, ambitious, and kind.",
    routines: [
      "Regular catchups with friends",
      "Clubs and events to meet new people",
    ],
    links: [],
  },
  {
    id: "food",
    title: "Food and cooking",
    oneLiner:
      "Trying to turn simple ingredients into high protein, enjoyable meals.",
    routines: ["Weekly meal planning", "Experimenting with new recipes"],
    links: [],
  },
  {
    id: "explore",
    title: "Exploration and travel",
    oneLiner:
      "Exploring new places, cultures, and ideas while studying in NZ, TH, and AU.",
    routines: [],
    links: [],
  },
  {
    id: "investing",
    title: "Investing and trading",
    oneLiner:
      "Building rules based systems for long term investing and short term trading.",
    routines: [],
    links: [],
  },
  {
    id: "roadmap",
    title: "Life roadmap",
    oneLiner:
      "Key decisions, turning points, and how I want my next decade to look.",
    details:
      "A timeline of choices like moving countries, choosing Finance and Computer Science, and building projects.",
    links: [],
  },
];

export default function LifePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Life OS</h1>
      <p className="text-lg text-gray-700 mb-8">
        A snapshot of how I manage different parts of my life outside work and
        study. Each section will link out to documents, trackers, or notes as I
        make them public.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {lifeAspects.map((aspect) => (
          <section
            key={aspect.id}
            className="bg-white shadow-md rounded-xl p-5 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{aspect.title}</h2>
            <p className="text-sm text-gray-700 mb-3">{aspect.oneLiner}</p>

            {aspect.details && (
              <p className="text-sm text-gray-600 mb-3">{aspect.details}</p>
            )}

            {aspect.routines && aspect.routines.length > 0 && (
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 mb-1">
                  Routines
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {aspect.routines.map((routine) => (
                    <li key={routine}>{routine}</li>
                  ))}
                </ul>
              </div>
            )}

            {aspect.links && aspect.links.length > 0 && (
              <div className="mt-auto">
                <p className="text-xs font-semibold text-gray-500 mb-1">
                  Links
                </p>
                <div className="flex flex-wrap gap-2">
                  {aspect.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-amber-700 underline hover:text-amber-500"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
