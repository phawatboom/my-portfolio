import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Phawat",
  description: "Learn more about my background, projects, and how I work.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      {/* Intro */}
      <section className="space-y-5">
        <h1 className="text-4xl font-extrabold">About me</h1>
        <p className="text-lg text-gray-700">
          I am a final year Finance and Computer Science student who builds at
          the intersection of software engineering, applied machine learning,
          and financial analysis. My goal is to create tools that help people
          make clearer decisions about money, careers, and risk.
        </p>
        <div className="border-l-4 border-black pl-4 text-sm text-gray-700">
          <p>
            Long term, I want to grow into a builder and leader who uses AI and
            data to solve real problems that reduce inequality and improve access
            to basic needs.
          </p>
        </div>
      </section>

      {/* What I build */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What I build</h2>
        <p className="text-sm text-gray-700">
          I like projects that require rigorous data work, careful modelling,
          and clean interfaces. A few examples.
        </p>
        <div className="space-y-4">
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Trading and market systems
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              An algorithmic trading framework that combines EMA and MACD with
              RSI filters and risk controls, and tools for multi horizon stock
              movement classification and backtesting.
            </p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Valuation and decision tools
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              A valuation platform that supports DCF, DDM, and market multiples,
              enriched with financial health scoring, ML forecasts, and risk
              diagnostics that help investors compare scenarios quickly.
            </p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Skills and career intelligence
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Worklaunch, an AI powered career recommender that maps resumes to
              more than 13,000 ESCO occupations using embeddings, semantic
              search, and skill graphs, turning free text into concrete options.
            </p>
          </div>
        </div>
      </section>

      {/* How I learn and work */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How I learn and work</h2>
        <p className="text-sm text-gray-700">
          University gives me the foundation, I learn the rest by building and
          stress testing my thinking against real problems.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
              Stack
            </p>
            <p className="mt-1 font-semibold">
              Python, React, Next.js, Django, SQL, AWS, GCP
            </p>
          </div>
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
              Practice
            </p>
            <p className="mt-1">
              End to end projects, case competitions, workshops, and shipping
              real tools for clubs and teams.
            </p>
          </div>
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
              Mindset
            </p>
            <p className="mt-1">
              Start simple, get something working, measure, then iterate with
              users and data.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">A short timeline</h2>
        <ol className="relative border-l border-gray-300 text-sm space-y-6 pl-4">
          <li>
            <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-black" />
            <p className="text-xs text-gray-500">2022–2023</p>
            <p className="font-semibold">Foundations in finance and CS</p>
            <p className="text-gray-700">
              Core courses in algorithms, software engineering, markets,
              corporate finance, and investments.
            </p>
          </li>
          <li>
            <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-black" />
            <p className="text-xs text-gray-500">2023–2024</p>
            <p className="font-semibold">Projects and leadership</p>
            <p className="text-gray-700">
              Tech lead for the AUCC website, Finance and Governance Executive
              at AIESEC, and early trading and ML experiments.
            </p>
          </li>
          <li>
            <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-black" />
            <p className="text-xs text-gray-500">2024–2025</p>
            <p className="font-semibold">AI, trading, and career tools</p>
            <p className="text-gray-700">
              Mean reversion models, valuation platforms, and Worklaunch, with
              a focus on shipping tools that feel useful, not just impressive.
            </p>
          </li>
        </ol>
      </section>

      {/* Life OS, simplified cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Life OS</h2>
        <p className="text-sm text-gray-700">
          A few simple systems that keep me energized, curious, and grounded.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Health and training</h3>
            <p className="text-gray-700 mb-2">
              Weight training and paddling to keep energy high for deep work.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Gym 3–4 times per week</li>
              <li>Canoeing with AUCC</li>
            </ul>
          </div>
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Cooking and food</h3>
            <p className="text-gray-700">
              Turning simple ingredients into high protein meals and trying to
              make cooking a creative outlet, not a chore.
            </p>
          </div>
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Investing and markets</h3>
            <p className="text-gray-700 mb-2">
              Following macro trends and analysing companies, then testing ideas
              with small, deliberate bets.
            </p>
          </div>
        </div>
      </section>

      {/* What I want to build */}
      <section className="space-y-3 border-t pt-8">
        <h2 className="text-2xl font-semibold">What I want to build next</h2>
        <p className="text-sm text-gray-700">
          I am interested in AI and ML Engineer roles, full stack product
          engineering, and quantitative or FinTech analyst roles. I want to work
          on systems that are technically robust, commercially grounded, and
          make it easier for people to make good decisions.
        </p>
        <p className="text-sm text-gray-700">
          I am committed to building a long term career in New Zealand in
          organisations that invest in innovation and people, and that see AI as
          a tool to extend human judgment, not replace it.
        </p>
        <p className="text-xs text-gray-600 pt-4">
          For roles in AI, software, or trading, reach me at{" "}
          <a
            href="mailto:pboomhtsaengs3@gmail.com"
            className="text-[#DDAA3B] underline underline-offset-4 hover:text-[#C0922F]"
          >
            pboomhtsaengs3@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

