import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Phawat",
  description: "A selection of projects that show how I think and build.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Hero */}
      <section className="pt-6 space-y-3">
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          A curated set of builds across trading, valuation, and skills
          intelligence. I care about clarity, real impact, and shipping.
        </p>
      </section>

      {/* Projects as vertical case studies */}
      <section className="space-y-6 pb-10">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={project.slug}
              className={`relative overflow-hidden rounded-3xl border bg-white shadow-sm md:flex ${
                reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Accent strip */}
              <div className="hidden md:block w-1 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500" />

              <div className="flex-1 p-6 md:p-8 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-full bg-gray-900" />
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-gray-700 max-w-2xl">
                  {project.descriptionShort}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-700">
                      Tech stack:
                    </span>{" "}
                    {project.techStack.join(" · ")}
                  </p>
                  {project.relatedCourses &&
                    project.relatedCourses.length > 0 && (
                      <p>
                        <span className="font-semibold text-gray-700">
                          Rooted in:
                        </span>{" "}
                        {project
                          .relatedCourses
                          .join(", ")}
                      </p>
                    )}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm text-gray-900 border-b border-gray-300 pb-0.5 hover:text-[#DDAA3B] hover:border-[#DDAA3B]"
                  >
                    <span>View case study</span>
                    <span className="ml-1 text-xs">↗</span>
                  </Link>
                </div>
              </div>

              {/* Visual placeholder block, can be replaced with screenshots later */}
              <div className="hidden md:block md:w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative">
                <div className="absolute inset-4 rounded-2xl border border-white/10 bg-black/10" />
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
