import { MDXRemote } from "next-mdx-remote/rsc";
import { loadGraph, getKnowledgeFiles } from "@/lib/knowledge";
import Link from "next/link";

export async function generateStaticParams() {
  const files = getKnowledgeFiles();
  return files.map((f) => ({ slug: f.slug }));
}

export default async function KnowledgeNodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const files = getKnowledgeFiles();
  const match = files.find((f) => f.slug === slug);

  if (!match) {
    return <div>Not found</div>;
  }

  const { frontmatter: data, content } = match;
  const { nodes, edges } = loadGraph();
  const current = nodes.find((n) => n.id === data.id);

  if (!current) {
    return <div>Node not found in graph</div>;
  }

  const relatedEdges = edges.filter(
    (e) => e.fromId === current.id || e.toId === current.id,
  );
  const relatedNodes = relatedEdges
    .map((e) =>
      nodes.find((n) =>
        n.id === current.id ? e.toId : e.fromId === current.id ? e.toId : n.id,
      ),
    )
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
      {/* Back link */}
      <Link
        href="/knowledge"
        className="inline-block text-xs sm:text-sm text-slate-500 hover:text-slate-900 mb-2"
      >
        ← Back to map
      </Link>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {current.title}
        </h1>
        {current.category && (
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            {current.category}
          </p>
        )}
        {data.subtitle && (
          <p className="text-sm text-slate-600 max-w-3xl">
            {data.subtitle}
          </p>
        )}
      </header>

      {/* Content + side panel */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,3.2fr)_minmax(0,2fr)] items-start">
        {/* Main prose */}
        <article className="rounded-3xl border border-slate-200 bg-white shadow-sm px-4 sm:px-6 py-5 sm:py-6">
          <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-li:leading-relaxed prose-headings:scroll-mt-24 prose-h2:text-[0.95rem] prose-h2:font-semibold prose-h2:mt-4 prose-h2:mb-2 prose-strong:font-semibold">
            <MDXRemote source={content} />
          </div>
        </article>

        {/* Side panel */}
        <aside className="space-y-4">
          {/* Concept summary card */}
          <div className="rounded-3xl border border-slate-900 bg-slate-900 text-slate-50 px-4 sm:px-5 py-4 sm:py-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
              Concept summary
            </p>
            <p className="text-sm text-slate-100">
              {data.summary ??
                "Use this node to capture the essence of the idea: what it is, why it matters, and how you use it in decisions."}
            </p>
          </div>

          {/* Related concepts card */}
          <div className="rounded-3xl border border-slate-200 bg-white px-4 sm:px-5 py-4 sm:py-5">
            <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Related concepts
            </h2>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {relatedNodes.length > 0 ? (
                relatedNodes.map((n) => (
                  <Link
                    key={n.id}
                    href={`/knowledge/${n.slug}`}
                    className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    {n.title}
                  </Link>
                ))
              ) : (
                <p className="text-slate-500 italic text-xs">
                  No related concepts linked yet.
                </p>
              )}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
