"use client";

import { useMemo, useState } from "react";
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

// order semesters manually so they appear most recent first
const termOrder: string[] = [
  "2025 Semester Two",
  "2025 Semester One",
  "2024 Semester Two",
  "2024 Semester One",
  "2023 Semester Two",
  "2023 Semester One",
  "2022 Semester Two",
];

function getTermRank(term: string): number {
  const index = termOrder.indexOf(term);
  return index === -1 ? termOrder.length + 1 : index;
}

function gradeBadgeColor(grade?: Course["grade"]) {
  if (!grade) return "";
  if (grade === "A+" || grade === "A") {
    return "border-[#DDAA3B] text-[#DDAA3B]"; // gold outline
  }
  if (grade === "A-" || grade === "B+") {
    return "border-gray-400 text-gray-700";
  }
  return "border-gray-300 text-gray-600";
}

export default function CoursesList() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const featured = courses.filter((course) => course.featured);
  const visibleCourses = showAll ? courses : featured;

  const coursesByTerm = useMemo(() => {
    const groups = new Map<string, Course[]>();
    for (const course of visibleCourses) {
      const term = course.term ?? "Other";
      if (!groups.has(term)) groups.set(term, []);
      groups.get(term)!.push(course);
    }
    // sort each term's courses alphabetically by code
    for (const list of groups.values()) {
      list.sort((a, b) => a.code.localeCompare(b.code));
    }
    // return sorted array of [term, courses[]]
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
                className="relative cursor-pointer hover:bg-accent/50 transition-colors flex flex-col h-full"
                onClick={() => setSelectedCourse(course)}
              >
                {/* Grade badge */}
                {course.grade && (
                  <div className="absolute top-2 right-2">
                    <span
                      className={
                        "text-[10px] px-2 py-0.5 rounded-full border bg-white/80 backdrop-blur " +
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

      {courses.length > featured.length && (
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="min-w-[200px]"
          >
            {showAll ? "Show Less" : `Show All Courses (${courses.length})`}
          </Button>
        </div>
      )}

      {/* Dialog */}
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
            <DialogDescription className="flex flex-col gap-1 mt-2">
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                {selectedCourse?.institution}
              </span>
              <span className="text-xs">{selectedCourse?.term}</span>
              <span className="text-xs text-gray-500">
                {selectedCourse?.discipline}
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {selectedCourse?.keyTopics &&
              selectedCourse.keyTopics.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Key Topics
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

            {selectedCourse?.artefacts &&
              selectedCourse.artefacts.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
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
                            : "Assignment"}
                          {": "}
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
