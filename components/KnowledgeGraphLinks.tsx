export function KnowledgeGraphLinks({ nodes }: { nodes: string[] }) {
  return (
    <div className="mt-8 rounded-xl border bg-gray-50 p-4">
      <h3 className="text-sm font-semibold text-gray-900">Related Concepts</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {nodes.map((node) => (
          <span
            key={node}
            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
          >
            {node}
          </span>
        ))}
      </div>
    </div>
  );
}
