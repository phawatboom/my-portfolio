import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { knowledgeNodes } from "@/data/knowledge-nodes";

export type KnowledgeNode = {
  id: string;
  title: string;
  slug?: string;
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
 * Builds the graph from knowledge-nodes.ts
 */
export function loadGraph(): { nodes: KnowledgeNode[]; edges: KnowledgeEdge[] } {
  const nodes: KnowledgeNode[] = knowledgeNodes.map((n) => ({
    id: n.id,
    title: n.title,
    category: n.category,
    slug: n.slug,
  }));

  const edges: KnowledgeEdge[] = [];

  for (const node of knowledgeNodes) {
    if (node.parentId) {
      edges.push({
        fromId: node.parentId,
        toId: node.id,
        type: "is-part-of",
      });
    }
    if (node.relatedIds) {
      for (const relatedId of node.relatedIds) {
        edges.push({
          fromId: node.id,
          toId: relatedId,
          type: "relates-to",
        });
      }
    }
  }

  return { nodes, edges };
}
