export type CourseArtefactType = "cheatsheet" | "assignment";

export type Course = {
  code: string;
  title: string;
  discipline: "Computer Science" | "Finance" | "Other";
  institution: string;
  term: string;
  keyTopics: string[];
  featured: boolean;            // controls “key courses” vs hidden by default
  artefacts?: {
    type: CourseArtefactType;
    label: string;
    href: string;               // GitHub, PDF, Notion, etc.
  }[];
};

export const courses: Course[] = [
  {
    code: "COMPSCI 335",
    title: "Web Applications Development",
    discipline: "Computer Science",
    institution: "University of Auckland",
    term: "2024 S2",
    keyTopics: [
      "REST APIs and HTTP",
      "Authentication and sessions",
      "Secure full stack web apps",
      "Relational databases and SQL"
    ],
    featured: true,
    artefacts: [
      {
        type: "assignment",
        label: "NZSL Web App (Assignment 3)",
        href: "https://github.com/phawatboom" // Placeholder
      },
      // {
      //   type: "cheatsheet",
      //   label: "HTTP and REST cheatsheet",
      //   href: "https://your-link.com"
      // }
    ]
  },
  // Add more courses here as needed
];
