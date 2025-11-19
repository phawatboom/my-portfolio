// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Phawat",
  description: "Learn more about my background and interests.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">About me</h1>
      <p className="text-lg text-gray-700 mb-4">
        I am a developer with a passion for solving real-world problems through
        technology and finance. My work focuses on building systems that combine
        data, markets, and software engineering to create practical tools.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        I study Finance and Computer Science and have worked on projects ranging
        from algorithmic trading and portfolio analytics to web applications,
        valuation dashboards, and AI-powered career tools.
      </p>
      <p className="text-lg text-gray-700">
        Outside of academics and projects, I enjoy learning about markets,
        experimenting with new technologies, and collaborating on meaningful
        products with teammates.
      </p>
    </div>
  );
}
