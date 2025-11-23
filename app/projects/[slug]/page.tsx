import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

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

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/projects" className="text-sm text-blue-600 underline">
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
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Impact</h2>
        <p className="text-gray-700 text-sm">{project.impact}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Links</h2>
        <ul className="list-disc list-inside text-sm text-blue-600">
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
