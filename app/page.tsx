// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Phawat | Portfolio",
  description: "Finance and Computer Science student building data driven products.",
};

export default function HomePage() {
  const highlightedProjects = projects.filter((p) => p.highlight).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <header className="flex flex-col items-start justify-center py-12 gap-4">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Finance × Computer Science
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Hello, I&apos;m Phawat.
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          I build data driven tools at the intersection of software engineering
          and finance, from trading algorithms to valuation dashboards and skills
          intelligence systems.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg bg-amber-300 text-gray-900 text-sm font-medium hover:bg-amber-400 hover:shadow-sm transition-colors"
          >
            View projects
          </Link>
        </div>
      </header>

      {/* About snapshot */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-3">About me</h3>
        <p className="text-gray-700">
          I am a final year student studying Finance and Computer Science. I enjoy
          building systems that combine quantitative thinking, clean software
          design, and real world impact, such as trading bots, valuation tools,
          and platforms that help people make better career decisions.
        </p>
      </section>

      {/* Highlighted projects */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Highlighted projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {highlightedProjects.map((project) => (
            <article
              key={project.slug}
              className="p-4 border rounded-lg shadow-sm flex flex-col"
            >
              <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {project.descriptionShort}
              </p>
              <p className="text-xs text-gray-500 mb-3">
                {project.techStack.join(" · ")}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500">{project.year}</span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm text-amber-600 underline hover:text-amber-500"
                >
                  View project
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href="/projects"
            className="text-sm text-black underline"
          >
            View all projects
          </Link>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-2xl font-semibold mb-3">Let&apos;s talk</h3>
        <p className="text-gray-700 mb-3">
          I am open to roles in quantitative research, data analytics, software
          engineering, and product roles that combine finance and technology.
        </p>
        <Link
          href="mailto:pboomhtsaengs3@gmail.com"
          className="text-sm text-amber-600 underline hover:text-amber-600"
        >
          Email me
        </Link>
      </section>
    </div>
  );
}
