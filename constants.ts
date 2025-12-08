import { PersonalInfo, Experience, Education, SkillCategory, Project } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Khoo Shan",
  title: "Diploma in Computer Science Student",
  email: "khoos-wm24@student.tarc.edu.my",
  phone: "0168658105",
  location: "Jln Tanjung, 43200, Tmn Mudun, Batu 9, Cheras, Selangor",
  school: "TARUMT UNIVERSITY",
  about: "I am a Diploma in Computer Science student with a strong foundation in programming, database development, system analysis and mobile application development. I am eager to apply my knowledge in real-world projects and gain hands-on experience in software development. With a keen interest in pursuing a degree in Software Engineering, I am motivated to improve my coding skills, contribute to team-based projects, and grow into a versatile software developer.",
  languages: [
    "English (Fluent)",
    "Malay (Fluent)",
    "Chinese (Fluent)",
    "Cantonese (Intermediate)"
  ],
  certificates: [
    "Introduction to Modern AI",
    "Introduction to Cybersecurity",
    "Introduction to Data Science",
    "Introduction to Networks",
    "Introduction to IoT and Digital Transformation"
  ]
};

export const EDUCATION: Education = {
  institution: "TARUMT UNIVERSITY",
  degree: "Diploma in Computer Science",
  period: "2024 - 2025",
  cgpa: "2.6 / 4.0"
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Dragon Silver Pavillion KL",
    period: "2022 - 2024",
    role: "Part-time Staff", // Role inferred contextually, user can update
    description: "Gained valuable work experience in a fast-paced environment."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C++", "Kotlin"]
  },
  {
    title: "Databases",
    skills: ["SQL"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Visual Studio Code", "Figma", "Oracle", "Apache NetBeans", "Android Studio"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Inventra: Android Inventory System",
    description: "Android app with Firebase for real-time storage, user auth and low-stock management.",
    tags: ["Kotlin", "Android Studio", "Firebase"],
    link: "https://github.com/AlexanderChia05/MAD_Assignment"
  },
  {
    title: "Celestial Wedding: Event Management",
    description: "Console system for event planning: registration, reporting, CSV I/O, Excel-friendly exports.",
    tags: ["C++", "File I/O", "Data Structures"],
    link: "https://github.com/AlexanderChia05/CelestialWedding"
  },
  {
    title: "AI Search: Maze Solver",
    description: "Uninformed / informed / local search over mazes; includes generators & benchmarks.",
    tags: ["Python", "AI", "Algorithms"],
    link: "https://github.com/AlexanderChia05/AI_Assignment"
  },
  {
    title: "JapanBoi's Frenster",
    description: "Social Media Friend Recommendation System using BFS Traversal.",
    tags: ["Java", "BFS", "Graph Theory"],
    link: "https://github.com/AlexanderChia05/DSA_Assignment"
  }
];