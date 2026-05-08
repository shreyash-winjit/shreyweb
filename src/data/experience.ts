import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Software Developer",
    organisation: {
      name: "Winjit Technologies",
      href: "https://www.winjit.com/",
    },
    date: "July 2023 - Present",
    location: "Mumbai",
    description: "Reactjs and Nextjs app development",
  },
  {
    title: "Engineering Trainee",
    organisation: {
      name: "BlueStacks",
      href: "https://www.bluestacks.com/",
    },
    date: "Dec 2022 - May 2023",
    location: "Remote",
    description:
      "Learned application architecture, scalling and build tooling to improve CI/CD of micro services.",
  },
  {
    title: "Frontend Developer Intern",
    organisation: {
      name: "Astren",
      href: "https://astren.com/",
    },
    date: "Spring - 2022",
    location: "Remote",
    description:
      "Worked on a team responsible for developing new features and updating old codebases to latest technologies. Learned a lot about web development and CI/CD development cycle.",
  },
];
