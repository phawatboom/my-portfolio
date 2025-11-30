"use client";

import { useState } from "react";
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

const disciplinesInOrder = [
  "Computer Science",
  "Finance",
  "Other"
] as const;

export default function CoursesList() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const featured = courses.filter(course => course.featured);
  const visibleCourses = showAll ? courses : featured;

  return (
    <div className="space-y-8">
      {disciplinesInOrder.map(discipline => {
        const group = visibleCourses.filter(
          course => course.discipline === discipline
        );
        if (group.length === 0) return null;

        return (
          <section key={discipline}>
            <h2 className="text-2xl font-bold tracking-tight mb-4">{discipline}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {group.map(course => (
                <Card 
                  key={course.code} 
                  className="cursor-pointer hover:bg-accent/50 transition-colors flex flex-col h-full"
                  onClick={() => setSelectedCourse(course)}
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-base font-bold">{course.code}</CardTitle>
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
                      <span className="truncate">{course.term}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}

      {courses.length > featured.length && (
        <div className="flex justify-center mt-8">
           <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="min-w-[200px]"
          >
            {showAll ? "Show Less" : `Show All Courses (${courses.length})`}
          </Button>
        </div>
      )}

      <Dialog open={!!selectedCourse} onOpenChange={(open) => !open && setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              {selectedCourse?.code} <span className="text-muted-foreground font-normal">·</span> {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-1 mt-2">
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> {selectedCourse?.institution}
              </span>
              <span className="text-xs">{selectedCourse?.term}</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {selectedCourse?.keyTopics && selectedCourse.keyTopics.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Key Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.keyTopics.map(topic => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {selectedCourse?.artefacts && selectedCourse.artefacts.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Resources
                </h4>
                <div className="grid gap-2">
                  {selectedCourse.artefacts.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-md border hover:bg-accent transition-colors text-sm"
                    >
                      <span className="font-medium">
                        {item.type === "cheatsheet" ? "Cheatsheet" : "Assignment"}
                        {": "}
                        {item.label}
                      </span>
                      <span className="text-xs text-muted-foreground">Open ↗</span>
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
