import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Phawat`,
    description: project.descriptionShort,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/projects"
        className="text-sm text-[#DDAA3B] underline hover:text-[#C0922F]"
      >
        ← Back to projects
      </Link>

      <h1 className="text-4xl font-extrabold mt-4 mb-2">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.oneLiner}</p>

      <p className="text-sm text-gray-500 mb-6">{project.year}</p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Overview</h2>
        <p className="text-gray-700 mb-3">{project.descriptionShort}</p>
        {project.longDescription && (
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Tech stack</h2>
        <p className="text-gray-700 text-sm">{project.techStack.join(" · ")}</p>
        {project.relatedCourses && project.relatedCourses.length > 0 && (
          <p className="text-xs text-gray-500 mt-2">
            Based on: {project.relatedCourses.join(", ")}
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Impact</h2>
        <p className="text-gray-700 text-sm">{project.impact}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Links</h2>
        <ul className="list-disc list-inside text-sm text-[#DDAA3B]">
          {project.links.github && (
            <li>
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub repository
              </a>
            </li>
          )}
          {project.links.demo && (
            <li>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
              </a>
            </li>
          )}
          {project.links.slides && (
            <li>
              <a
                href={project.links.slides}
                target="_blank"
                rel="noreferrer"
              >
                Slides / write-up
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
