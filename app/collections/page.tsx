import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Phawat",
  description:
    "Manga, anime, series, YouTube playlists, essentials, and readings that I recommend.",
};

type CollectionItem = {
  title: string;
  note?: string;
  category?: string; // e.g. shonen, productivity, philosophy
  orderHint?: string; // e.g. "Start here", "Watch after X"
};

type CollectionSection = {
  id: string;
  title: string;
  description: string;
  items: CollectionItem[];
};

const sections: CollectionSection[] = [
  {
    id: "manga",
    title: "Manga",
    description:
      "Stories that shaped how I think about persistence, strategy, and relationships.",
    items: [
      // Fill with your list later
      { title: "Example manga", note: "Short note on why it matters." },
    ],
  },
  {
    id: "anime",
    title: "Anime",
    description:
      "Series I go back to when I need a reminder of creativity, pacing, and emotion.",
    items: [],
  },
  {
    id: "series",
    title: "Series",
    description:
      "Non anime shows that are worth the time, usually for writing, tension, or character arcs.",
    items: [],
  },
  {
    id: "youtube",
    title: "YouTube playlists",
    description:
      "Videos grouped by theme with a recommended order, so they build on each other instead of being random.",
    items: [
      // Example
      {
        title: "Example playlist",
        note: "Good intro to X topic.",
        category: "Investing",
        orderHint: "Watch this before diving into deeper lectures.",
      },
    ],
  },
  {
    id: "essentials",
    title: "Essential products",
    description:
      "Tools and gear that make my day to day better. Not just nice to have, actually used.",
    items: [],
  },
  {
    id: "reading",
    title: "Readings and podcasts",
    description:
      "Books, articles, and podcasts that changed how I think about work, money, and life.",
    items: [],
  },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <section className="pt-6 space-y-3">
        <h1 className="text-4xl font-extrabold">Collections</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          A living library of stories, videos, tools, and ideas that influence
          how I think, build, and relax. I keep it opinionated and small on purpose.
        </p>
      </section>

      <section className="space-y-8 pb-10">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="bg-white shadow-sm rounded-2xl p-6 border"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="text-sm text-gray-700 mt-1">
                  {section.description}
                </p>
              </div>
            </div>

            {section.items.length === 0 ? (
              <p className="text-xs text-gray-500">
                I am still curating this section.
              </p>
            ) : (
              <ul className="space-y-2 text-sm">
                {section.items.map((item) => (
                  <li key={item.title} className="flex flex-col">
                    <span className="font-medium">{item.title}</span>
                    <div className="text-xs text-gray-600">
                      {item.category && <span>{item.category}</span>}
                      {item.category && (item.note || item.orderHint) && (
                        <span>{" · "}</span>
                      )}
                      {item.note && <span>{item.note}</span>}
                      {item.orderHint && (
                        <span>
                          {" · "}
                          <span className="text-gray-500">{item.orderHint}</span>
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
