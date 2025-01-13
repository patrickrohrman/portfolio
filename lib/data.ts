import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sarah from "@/public/sarah.png";
import example2Img from "@/public/example2.jpg";
import example3Img from "@/public/example3.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "experience",
    location: "local 1",
    description:
      "to be changed",
    icon: React.createElement(LuGraduationCap),
    date: "1999",
  },
  {
    title: "title",
    location: "location",
    description:
      "description",
    icon: React.createElement(CgWorkAlt),
    date: "1999-2000",
  },
  {
    title: "another title",
    location: "another location",
    description:
      "I am another description",
    icon: React.createElement(FaReact),
    date: "2000-2001",
  },
] as const;

export const projectsData = [
  {
    title: "Sarahrohrman.com",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis sodales velit posuere; eu ut himenaeos tristique mollis montes.",
    tags: ["WordPress", "React", "MySQL", "Bootstrap", "Elementor"],
    imageUrl: sarah,
    url: "https://www.sarahrohrman.com",
  },
  {
    title: "project example 2",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis sodales velit posuere; eu ut himenaeos tristique mollis montes.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: example2Img,
    url: "https://www.google.com",
  },
  {
    title: "project example 3",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis sodales velit posuere; eu ut himenaeos tristique mollis montes.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: example3Img,
    url: "http://www.google.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;