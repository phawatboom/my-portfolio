import type { Metadata } from "next";
import CoursesList from "./CoursesList";

export const metadata: Metadata = {
  title: "Courses | Phawat",
  description:
    "Selected university courses, key topics, and public cheatsheets or assignments.",
};

export default function CoursesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Courses</h1>
      <p className="text-lg text-gray-700 mb-8">
        A curated set of courses that shaped my skills, plus links to
        cheatsheets and key assignments I am happy to share.
      </p>
      <CoursesList />
    </div>
  );
}
