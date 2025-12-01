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
  connectedTo?: LifeAspectId[];
};

const lifeAspects: LifeAspect[] = [
  {
    id: "health",
    title: "Health and training",
    oneLiner: "Regular movement to keep energy high for deep work.",
    details:
      "I rotate through different types of exercise depending on the week, but the goal is always the same: stay clear-headed, strong, and present.",
    routines: [
      "Gym or strength sessions when I want structure",
      "Running 3–5km for headspace",
      "Swimming and group exercise classes at uni",
      "Training with friends (gym, core classes)",
      "Badminton or tennis for fun and coordination",
    ],
    connectedTo: ["relationships", "food", "roadmap"],
  },
  {
    id: "relationships",
    title: "Relationships and community",
    oneLiner:
      "Spending time with people who are curious, ambitious, and kind.",
    details:
      "I try to surround myself with people who are moving forward and who are honest about the process.",
    routines: [
      "Regular catchups with friends",
      "Clubs and events to meet new people",
    ],
    connectedTo: ["health", "explore"],
  },
  {
    id: "food",
    title: "Food and cooking",
    oneLiner:
      "Turning simple ingredients into high protein, enjoyable meals.",
    details:
      "Cooking is both fuel and a creative outlet. I like simple recipes that I can repeat and then slowly improve.",
    routines: ["Weekly meal planning", "Experimenting with new recipes"],
    connectedTo: ["health", "essentials"],
  },
  {
    id: "explore",
    title: "Exploration and travel",
    oneLiner:
      "Exploring new places, cultures, and ideas while studying in NZ, TH, and AU.",
    details:
      "Moving between countries forces me to reset, notice patterns, and decide what I want to keep or change.",
    connectedTo: ["relationships", "investing", "roadmap"],
  },
  {
    id: "investing",
    title: "Investing and trading",
    oneLiner:
      "Building rules based systems for long term investing and short term trading.",
    details:
      "I treat markets as a way to test ideas about risk, behaviour, and data in the real world.",
    connectedTo: ["essentials", "roadmap"],
  },
  {
    id: "media",
    title: "Manga & Anime",
    oneLiner: "Stories with strong systems, world-building, and character arcs.",
    details:
      "I like stories that feel like good systems design: clear rules, clever progression, and characters who grow with constraints.",
    routines: [
      "Manga – Solo Leveling (clean pacing and iconic progression)",
      "Manga – Overgeared (great growth system and character depth)",
      "Manga – The Greatest Estate Developer (strategy-focused and creative)",
      "Anime – Slime (Tensura) (wholesome, strategic world-building)",
      "Anime – Kaiju No. 8 (sharp action and likeable characters)",
      "Anime – Jujutsu Kaisen (elite animation and fight choreography)",
      "Anime – Romantic Killer (light, fun, character-driven)",
      "Anime – SAKAMOTO DAYS (high-concept action, anime-in-progress)",
    ],
    connectedTo: ["explore", "investing", "roadmap"],
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
    connectedTo: ["health", "food", "investing"],
  },
  {
    id: "roadmap",
    title: "Life roadmap",
    oneLiner:
      "Key decisions, turning points, and how I want my next decade to look.",
    details:
      "A timeline of choices like moving countries, choosing Finance and Computer Science, and building projects that matter.",
    connectedTo: ["health", "explore", "investing"],
  },
];

function getTitleById(id: LifeAspectId) {
  return lifeAspects.find((aspect) => aspect.id === id)?.title ?? id;
}

export default function LifePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <section className="pt-6 space-y-3">
        <h1 className="text-4xl font-extrabold">Life OS</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          A more detailed look at how I structure different parts of my life.
          One area at a time, with the connections between them visible.
        </p>
      </section>

      {/* Vertical line to hint at connections (desktop) */}
      <div className="relative pb-16">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />

        <div className="space-y-10">
          {lifeAspects.map((aspect, index) => {
            const reversed = index % 2 === 1;

            return (
              <section
                key={aspect.id}
                className={`relative md:flex md:items-stretch ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Marker on central line (desktop) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-3 h-3 w-3 rounded-full bg-gray-900" />

                <div className="md:w-1/2 md:pr-8 md:pl-0">
                  <div className="bg-white rounded-3xl shadow-sm border p-6 space-y-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-2xl font-semibold">{aspect.title}</h2>
                    <p className="text-sm text-gray-700">{aspect.oneLiner}</p>
                    {aspect.details && (
                      <p className="text-sm text-gray-600">{aspect.details}</p>
                    )}
                    {aspect.routines && aspect.routines.length > 0 && (
                      <div>
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
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                          Links
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {aspect.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              className="text-xs text-gray-900 border-b border-gray-300 pb-0.5 hover:text-[#DDAA3B] hover:border-[#DDAA3B]"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connections column */}
                <div className="md:w-1/2 md:pl-8 md:pr-0 mt-4 md:mt-0 flex items-center">
                  {aspect.connectedTo && aspect.connectedTo.length > 0 && (
                    <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-4 w-full">
                      <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">
                        Connected to
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {aspect.connectedTo.map((id) => (
                          <span
                            key={id}
                            className="text-xs px-3 py-1 rounded-full bg-white border text-gray-700"
                          >
                            {getTitleById(id)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
