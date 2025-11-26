// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Phawat",
  description: "A selection of projects I have worked on.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Projects</h1>
      <p className="text-gray-700 mb-6">
        Here are some of the projects that best represent how I think and work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="p-5 border rounded-lg shadow-sm bg-white flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-3 text-sm">
              {project.descriptionShort}
            </p>
            <p className="text-xs text-gray-500 mb-3">
              {project.techStack.join(" · ")}
            </p>
            {project.relatedCourses && project.relatedCourses.length > 0 && (
              <p className="text-xs text-gray-500 mb-3">
                Based on: {project.relatedCourses.join(", ")}
              </p>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm text-amber-600 underline mt-auto hover:text-amber-600"
            >
              View details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
