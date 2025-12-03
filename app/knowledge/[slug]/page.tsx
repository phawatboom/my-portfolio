import { MDXRemote } from "next-mdx-remote/rsc";
import { loadGraph, getKnowledgeFiles } from "@/lib/knowledge";
import Link from "next/link";

export async function generateStaticParams() {
  const files = getKnowledgeFiles();
  return files.map((f) => ({ slug: f.slug }));
}

export default async function KnowledgeNodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the file that matches this slug
  const files = getKnowledgeFiles();
  const match = files.find(f => f.slug === slug);
  
  if (!match) {
    return <div>Not found</div>;
  }

  const { frontmatter: data, content } = match;
  const { nodes, edges } = loadGraph();
  const current = nodes.find((n) => n.id === data.id);

  if (!current) {
      return <div>Node not found in graph</div>
  }

  const relatedEdges = edges.filter(
    (e) => e.fromId === current.id || e.toId === current.id,
  );
  const relatedNodes = relatedEdges
    .map((e) => nodes.find((n) => n.id === (e.fromId === current.id ? e.toId : e.fromId)))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/knowledge" className="mb-6 inline-block text-sm text-slate-500 hover:text-slate-900">
        ← Back to map
      </Link>
      
      <h1 className="mb-2 text-3xl font-semibold">{current.title}</h1>
      {current.category && (
        <p className="mb-4 text-sm uppercase tracking-[0.18em] text-slate-500">
          {current.category}
        </p>
      )}

      <article className="prose prose-slate max-w-none">
        <MDXRemote source={content} />
      </article>

      <section className="mt-8 border-t border-slate-200 pt-4">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Related concepts
        </h2>
        <div className="flex flex-wrap gap-2 text-sm">
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
            <p className="text-slate-500 italic">No related concepts linked yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
