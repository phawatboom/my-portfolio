import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Phawat",
  description: "Learn more about my background, projects, and how I work.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-12">
      {/* Intro + photo side by side */}
      <section className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 items-start">
        <div className="space-y-5">
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
        </div>

        {/* Photo / visual placeholder */}
        <div className="h-48 md:h-64 rounded-3xl border bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#DDAA3B,_transparent_55%)] opacity-60" />
          <div className="relative h-full w-full flex items-end justify-start p-4">
            <p className="text-xs text-gray-200 max-w-[80%]">
              Placeholder for a portrait or lifestyle photo. Swap this block for
              a{" "}
              <span className="font-mono text-[11px]">
                &lt;Image /&gt;
              </span>{" "}
              component when you have one.
            </p>
          </div>
          {/* Example when you are ready:
          <Image
            src="/me.jpg"
            alt="Phawat"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
      </section>

      {/* What I build */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What I build</h2>
        <p className="text-sm text-gray-600 max-w-xl">
          Most of my focus is on three highlighted projects:{" "}
          <span className="font-medium">Capital Compass</span> (quant and beta
          forecasting), <span className="font-medium">WorkLaunch</span> (AI career
          intelligence), and the <span className="font-medium">AUCC website
          rebuild</span> (real users, real content, production-quality engineering).
        </p>
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

