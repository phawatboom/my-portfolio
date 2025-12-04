"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ForceGraphMethods } from "react-force-graph-3d";
import SpriteText from "three-spritetext";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});

type GraphNode = {
  id: string;
  label: string;
  category?: string;
  slug?: string;
  // these will be added by the layout engine
  x?: number;
  y?: number;
  z?: number;
};

type GraphLink = {
  source: string;
  target: string;
  type?: string;
};

type KnowledgeGraphProps = {
  data: {
    nodes: GraphNode[];
    links: GraphLink[];
  };
};

export function KnowledgeGraph({ data }: KnowledgeGraphProps) {
  const router = useRouter();
  const fgRef = useRef<ForceGraphMethods | undefined>(undefined);
  const [hasInitialCentered, setHasInitialCentered] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  // Compute camera position so that most nodes are in view
  const handleRecenter = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;

    // duration (ms), padding (px)
    fg.zoomToFit(800, 90);
  }, []);

  useEffect(() => {
    // Force the graph to be "ready" quickly (600ms), don't wait for full physics stop
    const timer = setTimeout(() => {
      if (!hasInitialCentered && fgRef.current) {
        fgRef.current.zoomToFit(0, 90); // Instant zoom
        setHasInitialCentered(true);
      }
    }, 600);
    
    return () => clearTimeout(timer);
  }, [hasInitialCentered]);

  return (
    <div className="relative w-full h-[640px]">
      {/* Loading overlay */}
      {!hasInitialCentered && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 z-10 pointer-events-none">
          Arranging nodes…
        </div>
      )}

      <div
        className={`w-full h-full transition-opacity duration-500 ${
          hasInitialCentered ? "opacity-100" : "opacity-0"
        }`}
      >
        <ForceGraph3D
          ref={fgRef}
          graphData={data}
          backgroundColor="#f8fafc"
          nodeRelSize={6}
          nodeOpacity={1}
          enableNodeDrag={true}
          nodeLabel={(node: object) => (node as GraphNode).label}
          nodeColor={(node: object) => {
            const n = node as GraphNode;
            switch (n.category) {
              case "Trading":
                return "#0f766e";
              case "Finance":
                return "#0f766e";
              case "Quant":
                return "#14b8a6";
              case "Software":
                return "#3b82f6";
              case "AI":
                return "#6366f1";
              case "Career":
                return "#f59e0b";
              case "Learning":
                return "#e11d48";
              case "Life":
                return "#6366f1";
              default:
                return "#64748b";
            }
          }}
          // We use the timer above instead of onEngineStop for speed
          onNodeClick={(node: object) => {
          const n = node as GraphNode;
          if (n.slug) {
            router.push(`/knowledge/${n.slug}`);
          }
        }}
        linkColor={() => "#cbd5f5"}
        linkOpacity={0.5}
        linkWidth={1}
        linkDirectionalParticles={0}
        nodeThreeObject={(node: object) => {
          if (!showLabels) return undefined;
          const n = node as GraphNode;
          const sprite = new SpriteText(n.label ?? "");
          sprite.color = "#0f172a"; // dark slate
          sprite.textHeight = 6; // tweak for size
          return sprite;
        }}
        nodeThreeObjectExtend={true}
      />
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-2">
          <button
            onClick={() => setShowLabels((v) => !v)}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
          >
            {showLabels ? "Hide labels" : "Show labels"}
          </button>
          <button 
            onClick={handleRecenter}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-md shadow-sm hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
          >
            Recenter
          </button>
        </div>
        
        <div className="p-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-md shadow-sm text-[10px] text-slate-500 space-y-1 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span>Left-click: Rotate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span>Right-click: Pan</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span>Scroll: Zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
}
