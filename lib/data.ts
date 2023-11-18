import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerce from "@/public/ecommerce.png";
import recipeapp from "@/public/recipe-app.png";
import fightinggame from "@/public/fighting-game.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Admin Dashboard & Store",
    description:
      "An Admin Dashboard that can create multiple stores and manage their products and view store revenue.",
    tags: ["Next.js", "MySQL", "Tailwind", "Prisma"],
    imageUrl: ecommerce,
  },
  {
    title: "Recipe App",
    description:
      "App to create and view recipes.",
    tags: ["React", "MongoDB", "Node.js", "Express"],
    imageUrl: recipeapp,
  },
  {
    title: "Fighting Game",
    description:
      "A simple Javascript fighting game using sprites.",
    tags: ["Javascript"],
    imageUrl: fightinggame,
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
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "C++",
] as const;