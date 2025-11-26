import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Phawat",
  description:
    "University courses I have taken, key topics covered, and selected artefacts.",
};

type Course = {
  code: string;
  name: string;
  discipline: "Computer Science" | "Finance" | "Other";
  term: string;
  institution: string;
  keyTopics: string[];
  highlight?: string;
  artefacts?: {
    label: string;
    href: string;
  }[];
};

const courses: Course[] = [
  {
    code: "COMPSCI 335",
    name: "Web Applications Development",
    discipline: "Computer Science",
    term: "2024 S2",
    institution: "University of Auckland",
    keyTopics: [
      "RESTful APIs and HTTP",
      "Authentication and sessions",
      "Secure full stack web apps",
      "Relational databases and SQL"
    ],
    highlight:
      "Built a NZ Sign Language learning platform with .NET 8 APIs and a React client.",
    artefacts: [
      {
        label: "Assignment 3 client repo",
        href: "https://github.com/phawatboom", // Placeholder, user can update later
      },
    ],
  },
  // Add Finance and other CS courses here
];

export default function CoursesPage() {
  const groupedByDiscipline = ["Computer Science", "Finance", "Other"] as const;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Courses and learning</h1>
      <p className="text-lg text-gray-700 mb-8">
        A selection of courses I have taken, the topics they covered, and
        selected cheatsheets or assignments that show how I learned.
      </p>

      {groupedByDiscipline.map((discipline) => {
        const group = courses.filter(
          (course) => course.discipline === discipline
        );
        if (group.length === 0) return null;

        return (
          <section key={discipline} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{discipline}</h2>
            <div className="space-y-4">
              {group.map((course) => (
                <article
                  key={course.code}
                  className="bg-white shadow-md rounded-xl p-5"
                >
                  <div className="flex flex-wrap justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">
                      {course.code} · {course.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {course.institution} · {course.term}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Key topics: {course.keyTopics.join(", ")}
                  </p>
                  {course.highlight && (
                    <p className="text-sm text-gray-700 mb-2">
                      Highlight: {course.highlight}
                    </p>
                  )}
                  {course.artefacts && course.artefacts.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {course.artefacts.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-amber-700 underline hover:text-amber-500"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
