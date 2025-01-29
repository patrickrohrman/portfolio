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
    title: "Systems Administrator, Web Developer",
    location: "Beaufort County Community College",
    description:
      "Manage and maintain college ERP system and all peripheral applications and interfaces including 30+ AWS and on-prem servers. Manage all aspects of the college website including development, hosting, maintenance, and analytics.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2024",
  },
  {
    title: "Web Developer",
    location: "East Carolina University",
    description:
      "Worked to develop custom theme and plugins for WordPress migration using ReactJS, PHP, SASS, and NodeJS. Worked closely with teammates in an agile environment to follow best practices pertaining to code-reviews, quality assurance testing, documentation, version control, user acceptance, and deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2020",
  },
  
  {
    title: "Webmaster",
    location: "Pamlico Community College",
    description:
      "Managed, maintained, and updated all aspects of the college website and developed new functionality. Working environment used PHP, Laravel, and virtualized servers.",
    icon: React.createElement(CgWorkAlt),
    date: "2014-2017",
  },
  {
    title: "BS in Software Engineering",
    location: "Western Governors University",
    description:
      "Expected Graduation: 2025",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
  {
    title: "AAS in Information Technology",
    location: "Pamlico Community College",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
  {
    title: "Certifications",
    location: "",
    description:
      "AWS Certified Cloud Practitioner, CompTIA Project+, CompTIA A+, CIW Advanced HTML 5 and CSS3 Specialist, CIW User Interface Designer",
    icon: React.createElement(FaReact),
    date: "",
  },

] as const;

export const projectsData = [
  {
    title: "Sarahrohrman.com",
    description:
      "WordPress site using custom theme built with Elementor and Bootstrap and custom plugins for the backend. ",
    tags: ["WordPress", "React", "MySQL", "Bootstrap", "Elementor","SEO"],
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
  "NPM",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Linux",
  "MySQL",
  "NGINX",
  "UI/UX",
  "AWS", 
  "WordPress",
  "Statamic",  
  "ADA Compliance",
  "SEO",
] as const;
