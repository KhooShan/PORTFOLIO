export interface Experience {
  company: string;
  role?: string;
  period: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string; // GitHub link
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  school: string;
  about: string;
  languages: string[];
  certificates: string[];
}