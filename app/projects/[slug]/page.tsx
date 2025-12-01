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
    return { title: "Project not found" };
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

  const isConfidential =
    project!.status?.toLowerCase().includes("confidential") ?? false;

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Back link */}
      <div className="mb-2">
        <Link
          href="/projects"
          className="text-sm text-[#DDAA3B] underline underline-offset-4 hover:text-[#C0922F]"
        >
          ← Back to projects
        </Link>
      </div>

      {/* Hero band */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-8 md:px-8 md:py-10 border border-gray-800 shadow-xl">
        <div
          className="pointer-events-none absolute inset-0 opacity-40
                     bg-[radial-gradient(circle_at_top,_#DDAA3B,_transparent_55%)]"
        />
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Case study
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              {project!.title}
            </h1>
            <p className="text-sm md:text-base text-gray-200">
              {project!.oneLiner}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-xs text-gray-200">
            <div className="inline-flex items-center gap-2">
              {project!.year && (
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  {project!.year}
                </span>
              )}
              {project!.category && (
                <span className="rounded-full border border-gray-700 px-3 py-1">
                  {project!.category}
                </span>
              )}
              {isConfidential && (
                <span className="rounded-full border border-[#DDAA3B] px-3 py-1 text-[#DDAA3B]">
                  Confidential
                </span>
              )}
            </div>
            {project!.status && (
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                {project!.status}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Layout: narrative + facts */}
      <section className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8">
        {/* Left: narrative */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-gray-800 mb-3">{project!.descriptionShort}</p>
            {project!.longDescription && (
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {project!.longDescription}
              </p>
            )}
            {isConfidential && (
              <p className="mt-3 text-xs text-gray-500">
                This is a contract-funded, confidential build. I only share
                high-level architecture and approach here, not internal data or
                full UI details.
              </p>
            )}
          </div>

          <div className="grid gap-6">
            {project!.impact && (
              <div>
                <h3 className="text-sm font-semibold mb-1">Impact</h3>
                <p className="text-sm text-gray-700">{project!.impact}</p>
              </div>
            )}

            {project!.challenges && (
              <div>
                <h3 className="text-sm font-semibold mb-1">Key challenges</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {project!.challenges}
                </p>
              </div>
            )}

            {project!.learnings && (
              <div>
                <h3 className="text-sm font-semibold mb-1">What I learned</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {project!.learnings}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: facts */}
        <aside className="space-y-6">
          <div className="rounded-2xl border bg-white shadow-sm p-5 space-y-3">
            <h3 className="text-sm font-semibold mb-1">Project snapshot</h3>
            <dl className="space-y-2 text-sm text-gray-700">
              {project!.type && (
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Type</dt>
                  <dd className="font-medium text-right">{project!.type}</dd>
                </div>
              )}
              {project!.duration && (
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Duration</dt>
                  <dd className="text-right">{project!.duration}</dd>
                </div>
              )}
              {project!.status && (
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Status</dt>
                  <dd className="text-right">{project!.status}</dd>
                </div>
              )}
            </dl>
          </div>

          {project!.techStack && project!.techStack.length > 0 && (
            <div className="rounded-2xl border bg-white shadow-sm p-5 space-y-3">
              <h3 className="text-sm font-semibold mb-1">Tech stack</h3>
              <p className="text-xs text-gray-700">
                {project!.techStack.join(" · ")}
              </p>
            </div>
          )}

          {project!.links &&
            (project!.links.github ||
              project!.links.demo ||
              project!.links.slides) && (
              <div className="rounded-2xl border bg-gray-900 text-white p-5 space-y-3">
                <h3 className="text-sm font-semibold">Links</h3>
                <ul className="space-y-2 text-sm">
                  {project!.links.github && (
                    <li>
                      <a
                        href={project!.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center border-b border-gray-600 pb-0.5 hover:text-[#DDAA3B] hover:border-[#DDAA3B]"
                      >
                        GitHub repository
                      </a>
                    </li>
                  )}
                  {project!.links.demo && (
                    <li>
                      <a
                        href={project!.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center border-b border-gray-600 pb-0.5 hover:text-[#DDAA3B] hover:border-[#DDAA3B]"
                      >
                        Live demo
                      </a>
                    </li>
                  )}
                  {project!.links.slides && (
                    <li>
                      <a
                        href={project!.links.slides}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center border-b border-gray-600 pb-0.5 hover:text-[#DDAA3B] hover:border-[#DDAA3B]"
                      >
                        Slides / write-up
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
        </aside>
      </section>
    </div>
  );
}
