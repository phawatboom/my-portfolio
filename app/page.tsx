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
      <header className="flex flex-col items-start justify-center py-16 gap-4">
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
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100"
          >
            Contact me
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
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">Highlighted projects</h3>
          <Link href="/projects" className="text-sm text-blue-600 underline">
            View all projects
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  href="/projects"
                  className="text-sm text-blue-600 underline"
                >
                  More details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact teaser */}
      <section className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-2xl font-semibold mb-3">Let&apos;s talk</h3>
        <p className="text-gray-700 mb-3">
          I am open to roles in quantitative research, data analytics, software
          engineering, and product roles that combine finance and technology.
        </p>
        <Link href="/contact" className="text-sm text-blue-600 underline">
          Go to contact page
        </Link>
      </section>
    </div>
  );
}
