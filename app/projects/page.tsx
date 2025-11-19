// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Phawat",
  description: "A selection of projects I have worked on.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Capital Compass",
      description:
        "A stock mean reversion and beta forecasting tool with a web dashboard for exploring model outputs.",
      stack: ["Python", "Pandas", "Sklearn", "Next.js", "Django", "PostgreSQL"],
      link: "#",
    },
    {
      title: "WorkLaunch",
      description:
        "An AI-powered resume and skill intelligence system mapping user skills to ESCO occupations using embeddings.",
      stack: ["Python", "NLP", "Flask/FastAPI", "PostgreSQL", "Qdrant"],
      link: "#",
    },
    {
      title: "Trading Bots (IMC Challenge)",
      description:
        "Rule-based and statistical trading strategies for simulated markets, combining market making and arbitrage.",
      stack: ["Python", "Pandas", "Backtesting"],
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Projects</h1>
      <p className="text-gray-700 mb-6">
        Here are some of the projects that best represent how I think and work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="p-5 border rounded-lg shadow-sm bg-white flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
            <p className="text-xs text-gray-500 mb-3">
              {project.stack.join(" · ")}
            </p>
            {project.link !== "#" && (
              <Link href={project.link} className="text-sm text-blue-600 underline mt-auto">
                View details
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
