import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type KnowledgeNode = {
  id: string;
  title: string;
  slug: string;
  category?: string;
  tags?: string[];
};

export type KnowledgeEdge = {
  fromId: string;
  toId: string;
  type: string;
};

type RawKnowledgeFile = {
  slug: string;
  frontmatter: any;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "knowledge");

/**
 * Reads all .mdx files in content/knowledge and returns
 * frontmatter + content for each.
 */
export function getKnowledgeFiles(): RawKnowledgeFile[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(raw);
    return { slug, frontmatter, content };
  });
}

/**
 * Builds the graph from MDX frontmatter.
 *
 * Each MDX needs at least:
 *  ---
 *  id: atr
 *  title: "Average True Range (ATR)"
 *  category: "Trading"
 *  slug: "average-true-range-atr"
 *  tags: ["volatility", "risk-management"]
 *  links:
 *    - to: cvd
 *      type: "used-with"
 *  ---
 */
export function loadGraph(): { nodes: KnowledgeNode[]; edges: KnowledgeEdge[] } {
  const files = getKnowledgeFiles();

  const nodes: KnowledgeNode[] = [];
  const edges: KnowledgeEdge[] = [];

  for (const f of files) {
    const fm = f.frontmatter || {};

    // Only treat files with an explicit id as graph nodes
    if (!fm.id || !fm.title) continue;

    nodes.push({
      id: String(fm.id),
      title: String(fm.title),
      slug: fm.slug ? String(fm.slug) : f.slug,
      category: fm.category ? String(fm.category) : undefined,
      tags: Array.isArray(fm.tags) ? fm.tags.map(String) : undefined,
    });

    // Optional links → edges
    // Allow either:
    // links: ["cvd", "atr"]
    // or
    // links: [{ to: "cvd", type: "relates-to" }]
    if (Array.isArray(fm.links)) {
      for (const link of fm.links) {
        if (typeof link === "string") {
          edges.push({
            fromId: String(fm.id),
            toId: link,
            type: "related",
          });
        } else if (link && typeof link === "object" && link.to) {
          edges.push({
            fromId: String(fm.id),
            toId: String(link.to),
            type: link.type ? String(link.type) : "related",
          });
        }
      }
    }
  }

  // Filter out edges that point to non-existent nodes
  const nodeIds = new Set(nodes.map((n) => n.id));
  const validEdges = edges.filter((e) => nodeIds.has(e.toId));

  return { nodes, edges: validEdges };
}
