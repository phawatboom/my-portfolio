import { loadGraph } from "@/lib/knowledge";
import { KnowledgeGraph } from "@/components/KnowledgeGraph";

export default function KnowledgeMapPage() {
  const { nodes, edges } = loadGraph();

  const graphData = {
    nodes: nodes.map((n) => ({ id: n.id, label: n.title, category: n.category, slug: n.slug })),
    links: edges.map((e) => ({ source: e.fromId, target: e.toId, type: e.type })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Knowledge map</h1>
      <div className="h-[600px] rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
        <KnowledgeGraph data={graphData} />
      </div>
    </main>
  );
}
