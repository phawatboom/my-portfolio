"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courses, type Course } from "@/data/courses";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, GraduationCap } from "lucide-react";

// semesters in desired order (most recent first)
const termOrder: string[] = [
  "2026 Semester One",
  "2025 Semester Two",
  "2025 Semester One",
  "2024 Semester Two",
  "2024 Semester One",
  "2023 Semester Two",
  "2023 Semester One",
  "2022 Semester Two",
];

function getTermRank(term: string): number {
  const idx = termOrder.indexOf(term);
  return idx === -1 ? termOrder.length + 1 : idx;
}

// Only A / A+ get a gold badge on the card
function shouldShowCardBadge(grade?: Course["grade"]) {
  return grade === "A+" || grade === "A";
}

function gradeBadgeColor(grade?: Course["grade"]) {
  if (!grade) return "";
  if (grade === "A+" || grade === "A") {
    return "border-[#DDAA3B] text-[#DDAA3B]";
  }
  if (grade === "A-" || grade === "B+") {
    return "border-gray-400 text-gray-700";
  }
  return "border-gray-300 text-gray-600";
}

export default function CoursesList() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // show all courses (no filtering)
  const visibleCourses = courses;

  const coursesByTerm = useMemo(() => {
    const groups = new Map<string, Course[]>();
    for (const course of visibleCourses) {
      const term = course.term ?? "Other";
      if (!groups.has(term)) groups.set(term, []);
      groups.get(term)!.push(course);
    }
    for (const list of groups.values()) {
      list.sort((a, b) => a.code.localeCompare(b.code));
    }
    return Array.from(groups.entries()).sort(
      ([t1], [t2]) => getTermRank(t1) - getTermRank(t2)
    );
  }, [visibleCourses]);

  return (
    <div className="space-y-10">
      {coursesByTerm.map(([term, termCourses]) => (
        <section key={term} className="space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight">{term}</h2>
            <p className="text-xs text-gray-500">
              Enrolled in {termCourses.length} course
              {termCourses.length > 1 ? "s" : ""} this term
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {termCourses.map((course) => (
              <Card
                key={course.code}
                className="relative cursor-pointer hover:bg-accent/40 transition-colors flex flex-col h-full"
                onClick={() => setSelectedCourse(course)}
              >
                {/* Grade badge: card shows only A / A+ */}
                {course.grade && shouldShowCardBadge(course.grade) && (
                  <div className="absolute top-2 right-2">
                    <span
                      className={
                        "text-[10px] px-2 py-0.5 rounded-full border bg-white/90 backdrop-blur " +
                        gradeBadgeColor(course.grade)
                      }
                    >
                      {course.grade}
                    </span>
                  </div>
                )}

                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-base font-bold">
                      {course.code}
                    </CardTitle>
                    {course.artefacts && course.artefacts.length > 0 && (
                      <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                  </div>
                  <CardDescription className="text-xs line-clamp-2 mt-1">
                    {course.title}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4 pt-0 mt-auto">
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                    <GraduationCap className="h-3 w-3" />
                    <span className="truncate">{course.discipline}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Course detail dialog */}
      <Dialog
        open={!!selectedCourse}
        onOpenChange={(open) => !open && setSelectedCourse(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              {selectedCourse?.code}
              <span className="text-muted-foreground font-normal">·</span>
              {selectedCourse?.title}
              {selectedCourse?.grade && (
                <span
                  className={
                    "ml-2 text-xs px-2 py-0.5 rounded-full border " +
                    gradeBadgeColor(selectedCourse.grade)
                  }
                >
                  Grade {selectedCourse.grade}
                </span>
              )}
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-1 mt-2 text-sm">
              <span className="text-gray-700">{selectedCourse?.term}</span>
              <span className="text-xs text-gray-500">
                {selectedCourse?.institution}
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Overview / description (placeholder safe) */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Overview</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedCourse?.overviewLong ??
                  selectedCourse?.description ??
                  "Short course description placeholder. You can summarise what the course focused on and what you gained from it."}
              </p>

              {/* Deep Dive Links */}
              {(selectedCourse?.slug ||
                (selectedCourse?.knowledgeNodeIds &&
                  selectedCourse.knowledgeNodeIds.length > 0)) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedCourse.slug && (
                    <Link href={`/courses/${selectedCourse.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-8"
                      >
                        View full course page
                      </Button>
                    </Link>
                  )}
                  {selectedCourse.knowledgeNodeIds &&
                    selectedCourse.knowledgeNodeIds.length > 0 && (
                      <Link
                        href={`/knowledge?highlight=${selectedCourse.knowledgeNodeIds.join(
                          ","
                        )}`}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-8 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:text-blue-800"
                        >
                          View knowledge graph
                        </Button>
                      </Link>
                    )}
                </div>
              )}
            </div>

            {/* Topics */}
            {selectedCourse?.keyTopics &&
              selectedCourse.keyTopics.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Key topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.keyTopics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

            {/* Artefacts */}
            {selectedCourse?.artefacts &&
              selectedCourse.artefacts.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Resources
                  </h4>
                  <div className="grid gap-2">
                    {selectedCourse.artefacts.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3 rounded-md border hover:bg-accent transition-colors text-sm"
                      >
                        <span className="font-medium">
                          {item.type === "cheatsheet"
                            ? "Cheatsheet"
                            : "Assignment"}{" "}
                          {item.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Open ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
