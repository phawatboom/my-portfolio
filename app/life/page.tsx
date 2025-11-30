import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life OS | Phawat",
  description:
    "How I manage health, relationships, food, exploration, investing, media, and my life roadmap.",
};

type LifeAspectId =
  | "health"
  | "relationships"
  | "food"
  | "explore"
  | "investing"
  | "media"
  | "essentials"
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
  },
  {
    id: "food",
    title: "Food and cooking",
    oneLiner:
      "Turning simple ingredients into high protein, enjoyable meals.",
    routines: ["Weekly meal planning", "Experimenting with new recipes"],
  },
  {
    id: "explore",
    title: "Exploration and travel",
    oneLiner:
      "Exploring new places, cultures, and ideas while studying in NZ, TH, and AU.",
  },
  {
    id: "investing",
    title: "Investing and trading",
    oneLiner:
      "Building rules based systems for long term investing and short term trading.",
  },
  {
    id: "media",
    title: "Media and inspiration",
    oneLiner:
      "Manga, anime, series, and YouTube playlists that shape how I think and relax.",
    details:
      "I organise stories and videos by theme and recommend an order to watch so they build on each other.",
    links: [
      {
        label: "View media collections",
        href: "/collections",
      },
    ],
  },
  {
    id: "essentials",
    title: "Tools and essentials",
    oneLiner:
      "Products and setups that make day to day study, work, and training smoother.",
    details:
      "From must have gear to small quality of life upgrades that compound over time.",
    links: [
      {
        label: "See essentials list",
        href: "/collections#essentials",
      },
    ],
  },
  {
    id: "roadmap",
    title: "Life roadmap",
    oneLiner:
      "Key decisions, turning points, and how I want my next decade to look.",
    details:
      "A timeline of choices like moving countries, choosing Finance and Computer Science, and building projects.",
  },
];

export default function LifePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Life OS</h1>
      <p className="text-lg text-gray-700 mb-8">
        A snapshot of how I manage different parts of my life outside work and
        study. Some cards link out to more detailed collections and notes.
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
