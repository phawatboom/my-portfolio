"use client";

import { useState } from "react";
import { courses } from "@/data/courses";

const disciplinesInOrder = [
  "Computer Science",
  "Finance",
  "Other"
] as const;

export default function CoursesList() {
  const [showAll, setShowAll] = useState(false);

  const featured = courses.filter(course => course.featured);
  const visibleCourses = showAll ? courses : featured;

  // If we are showing only featured, we might filter out disciplines that have no featured courses.
  // But the user's logic iterates disciplines and filters the visible list.

  return (
    <>
      {disciplinesInOrder.map(discipline => {
        const group = visibleCourses.filter(
          course => course.discipline === discipline
        );
        if (group.length === 0) return null;

        return (
          <section key={discipline} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{discipline}</h2>
            <div className="space-y-4">
              {group.map(course => (
                <article
                  key={course.code}
                  className="bg-white shadow-md rounded-xl p-5"
                >
                  <div className="flex flex-wrap justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">
                      {course.code} · {course.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {course.institution} · {course.term}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 mb-2">
                    Key topics: {course.keyTopics.join(", ")}
                  </p>

                  {course.artefacts && course.artefacts.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {course.artefacts.map(item => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-amber-700 underline hover:text-amber-500"
                        >
                          {item.type === "cheatsheet" ? "Cheatsheet" : "Assignment"}
                          {": "}
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

      {courses.length > featured.length && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(show => !show)}
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:border-gray-500 transition-colors"
          >
            {showAll ? "Show only key courses" : "Show all courses"}
          </button>
        </div>
      )}
    </>
  );
}
