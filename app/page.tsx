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
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero */}
      <header className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-center pt-10">
        {/* Left: narrative */}
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            <span className="h-[1px] w-6 bg-gray-400" />
            Finance × Computer Science
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Building cool, analytical products
            <span className="block text-gray-500 text-2xl md:text-3xl mt-2">
              where code, markets, and AI meet.
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-xl">
            I design and ship data driven tools, from trading algorithms and valuation
            dashboards to skills intelligence systems that help people make better
            decisions about money, careers, and risk.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-full bg-black text-sm font-medium text-white hover:bg-gray-900 transition-colors"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-700 underline underline-offset-4 hover:text-gray-900"
            >
              Learn more about me
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-gray-600 pt-4">
            <span className="px-3 py-1 rounded-full bg-white shadow-sm border">
              Quant & trading systems
            </span>
            <span className="px-3 py-1 rounded-full bg-white shadow-sm border">
              AI and LLM tools
            </span>
            <span className="px-3 py-1 rounded-full bg-white shadow-sm border">
              Valuation & finance
            </span>
          </div>
        </div>

        {/* Right: “signal card” visual */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br
                       from-amber-200 via-rose-100 to-sky-200
                       blur-2xl opacity-70"
            aria-hidden="true"
          />
          <div className="relative rounded-3xl bg-gray-900 text-white p-6 border border-white/10 shadow-xl flex flex-col gap-4">
            <p className="text-xs font-medium text-gray-300 uppercase tracking-[0.18em]">
              Snapshot
            </p>
            <h3 className="text-xl font-semibold">
              Turning messy data into usable decisions.
            </h3>
            <p className="text-sm text-gray-300">
              Trading bots, multi horizon stock forecasts, and a career engine
              that maps resumes to 13,000+ occupations using embeddings and skill graphs.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs mt-2">
              <div className="rounded-2xl bg-white/5 p-3 border border-white/10">
                <p className="text-gray-400">Focus</p>
                <p className="font-semibold">AI, markets, product</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 border border-white/10">
                <p className="text-gray-400">Stack</p>
                <p className="font-semibold">Python, TS, Next.js, AWS</p>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-gray-400">
              Currently exploring: mean reversion models, LLM powered copilots,
              and production ready trading workflows.
            </p>
          </div>
        </div>
      </header>

      {/* What I build */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Trading & market systems
          </h3>
          <p className="text-sm text-gray-600">
            Rule based and ML assisted strategies, portfolio signals, and tools
            that help test ideas in live markets.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Valuation & analytics tools
          </h3>
          <p className="text-sm text-gray-600">
            DCF, DDM, multiples, and scenario engines that turn raw statements
            into clear, comparable outcomes.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Skills & career intelligence
          </h3>
          <p className="text-sm text-gray-600">
            Mapping resumes to skills graphs and occupations so people can see
            practical next steps, not vague advice.
          </p>
        </div>
      </section>

      {/* Highlighted projects */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-semibold">Highlighted projects</h3>
          <Link
            href="/projects"
            className="text-sm text-gray-700 underline underline-offset-4 hover:text-gray-900"
          >
            View all projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightedProjects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col rounded-2xl bg-white border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Visual placeholder – later replace with real thumb */}
              <div className="h-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative">
                <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_top,_#fbbf24,_transparent_55%)]" />
              </div>
              <div className="flex-1 flex flex-col p-4 gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-semibold">{project.title}</h4>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {project.year}
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  {project.descriptionShort}
                </p>
                <p className="text-[11px] text-gray-500">
                  {project.techStack.join(" · ")}
                </p>
                {project.relatedCourses && project.relatedCourses.length > 0 && (
                  <p className="text-[11px] text-gray-500">
                    Based on {project.relatedCourses.join(", ")}
                  </p>
                )}
                <div className="pt-2 mt-auto flex justify-between items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm text-amber-700 underline underline-offset-4 group-hover:text-amber-600"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Signals / contact */}
      <section className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 items-start pb-10">
        <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-4">
          <h3 className="text-xl font-semibold mb-1">Signals that matter</h3>
          <p className="text-sm text-gray-700">
            I care less about buzzwords and more about whether a tool actually
            improves decisions and outcomes.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.18em]">
                Focus
              </p>
              <p className="font-semibold">AI, markets, product thinking</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.18em]">
                Strengths
              </p>
              <p className="font-semibold">Systems, clarity, iteration</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white rounded-2xl p-6 border border-gray-800">
          <h3 className="text-xl font-semibold mb-2">Open to opportunities</h3>
          <p className="text-sm text-gray-200 mb-4">
            I am interested in AI or ML Engineer roles, full stack product engineering,
            and quantitative or FinTech analyst roles.
          </p>
          <Link
            href="mailto:pboomhtsaengs3@gmail.com"
            className="inline-flex items-center text-sm font-medium underline underline-offset-4"
          >
            Email me to discuss a role
          </Link>
        </div>
      </section>
    </div>
  );
}
