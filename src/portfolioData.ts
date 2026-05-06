import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Github,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Server,
} from "lucide-react";
import resumePdf from "./cv/NGUYENVANTUAN-DEV.pdf";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: {
    name: string;
    level: number;
    label: string;
  }[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Project = {
  title: string;
  category: string;
  company: string;
  period: string;
  teamSize: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: {
    label: string;
    href: string;
  }[];
  image: string;
  href: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const profile = {
  name: "Tuan Nguyen",
  role: "Full-stack Web Developer",
  location: "Da Nang City, Vietnam",
  summary:
    "Full-stack web developer with hands-on experience building and maintaining enterprise applications using ReactJS, TypeScript, Java, Spring Boot, and SQL-based systems.",
  email: "Tuan94pth@gmail.com",
  resumeUrl: resumePdf,
};

export const aboutParagraphs = [
  "Software Developer with nearly 3 years of experience in building and maintaining web applications using ReactJS and Java, with a strong focus on E-commerce and enterprise systems.",
  "Demonstrated ability to deliver high-quality features, resolve complex issues, and optimize application performance in production environments. Experienced in working with cross-functional teams under Agile methodologies.",
  "Skilled in leveraging AI-powered development tools such as GitHub Copilot and Codex to accelerate development, enhance code quality, and streamline debugging processes.",
  "Continuously improving technical expertise and keeping up with modern technologies to deliver scalable and maintainable solutions.",
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "3", label: "Years Experience" },
  { value: "3", label: "Highlighted Projects" },
  { value: "4", label: "Companies" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    icon: Code2,
    description:
      "Building responsive web interfaces and modern frontend flows.",
    skills: [
      { name: "ReactJS", level: 72, label: "Intermediate" },
      { name: "TypeScript", level: 80, label: "Intermediate" },
      { name: "JavaScript (ES6+)", level: 84, label: "Advanced" },
      { name: "HTML / CSS", level: 86, label: "Advanced" },
      { name: "jQuery", level: 72, label: "Intermediate" },
      { name: "Next.js", level: 68, label: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Developing business logic, APIs, and enterprise application services.",
    skills: [
      { name: "Java / Java Web", level: 86, label: "Advanced" },
      { name: "Spring Boot", level: 82, label: "Advanced" },
      { name: "REST API", level: 84, label: "Advanced" },
      { name: "JSP / Servlet", level: 80, label: "Intermediate" },
      { name: "Node.js", level: 68, label: "Intermediate" },
    ],
  },
  {
    title: "Database & DevOps",
    icon: Database,
    description:
      "Working with relational databases and deployment support tools.",
    skills: [
      { name: "MySQL", level: 82, label: "Advanced" },
      { name: "SQL Server", level: 80, label: "Advanced" },
      { name: "PostgreSQL", level: 70, label: "Intermediate" },
      { name: "JPA / JDBC", level: 74, label: "Intermediate" },
      { name: "Jenkins CI/CD", level: 64, label: "Intermediate" },
    ],
  },
  {
    title: "Workflow & Delivery",
    icon: Layers3,
    description:
      "Collaborating in team environments with practical delivery workflows.",
    skills: [
      { name: "Git / GitHub / GitLab", level: 84, label: "Advanced" },
      { name: "Jira", level: 78, label: "Intermediate" },
      { name: "Redmine", level: 76, label: "Intermediate" },
      { name: "Agile / Scrum", level: 82, label: "Advanced" },
      { name: "Maintenance & Refactoring", level: 86, label: "Advanced" },
      { name: "OOP / OOAD / UML", level: 78, label: "Intermediate" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Full-stack Web Developer",
    company: "AvePoint | 65 Hai Phong, Da Nang",
    period: "10/2025 - Current",
    description:
      "Training and working with low-code and CRM-related systems in an enterprise environment.",
    highlights: [
      "Handled plugin, Ribbon, and web job related tasks.",
      "Worked on practical feature support inside an enterprise CRM workflow.",
    ],
  },
  {
    role: "Full-stack Web Developer",
    company: "Lotte Data Communication | 02 Quang Trung, Da Nang",
    period: "10/2023 - 09/2025",
    description:
      "Worked with product and maintenance projects, supporting ongoing systems and developing new features.",
    highlights: [
      "Built backend services with Java Spring Boot, REST API, JSP, and Servlet.",
      "Developed frontend features with React, TypeScript, and PrimeReact.",
      "Fixed bugs and implemented requested feature changes across multiple projects.",
    ],
  },
  {
    role: "Training Java Course",
    company: "FPT Software | FPT Complex Building, Hoa Hai, Da Nang",
    period: "03/2023 - 09/2023",
    description:
      "Completed Java web training focused on backend fundamentals and project workflow foundations.",
    highlights: [
      "Studied SQL Server, Java web development, Java core, JSP Servlet, Java MVC, and Spring.",
      "Practiced ReactJS and communication skills in a structured training environment.",
    ],
  },
  {
    role: "Web Developer",
    company: "Hitachi Vantara | 52 Phi Long, Hai Chau, Da Nang",
    period: "08/2022 - 03/2023",
    description:
      "Started as an intern and continued working on frontend and backend tasks in an Agile/Scrum team.",
    highlights: [
      "Built and refactored frontend features with ReactJS and MUI v4.",
      "Handled API work on the backend with Node.js.",
      "Gained practical experience in collaborative software development processes.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Maintenance MT Group",
    category: "Maintenance Project",
    company: "Lotte Innovate",
    period: "01/2025 - 08/2025",
    teamSize: "3",
    role: "Java Developer",
    description:
      "Maintained and updated multiple Lotte shopping websites, resolving customer issues and delivering requested feature changes.",
    highlights: [
      "Worked directly with customer issues and maintenance requests.",
      "Fixed bugs and added new features based on customer requirements.",
      "Supported multiple shopping-related websites in the same maintenance group.",
    ],
    stack: [
      "Java JSP/Servlet",
      "Ajax",
      "HTML",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
    ],
    links: [
      { label: "MTDev Shopping", href: "http://mtdev-shopping.lotte.vn/" },
      {
        label: "MTDev Shopping Hidden Page",
        href: "http://mtdev-shopping.lotte.vn/hiddenPage",
      },
      { label: "MTDev Mart", href: "http://mtdev-mart.lotte.vn/" },
      { label: "Lotte RPS", href: "https://www.lotterps.com/main.jsp" },
      { label: "Lotte Shopping", href: "https://www.lotteshopping.com/" },
      { label: "Euronics", href: "https://www.euronics.co.kr/" },
      { label: "Lotte Wellfood", href: "https://www.lottewellfood.com/" },
      {
        label: "Lotte Chilsung",
        href: "https://company.lottechilsung.co.kr/",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    href: "https://www.lotteon.com/",
  },
  {
    title: "Lotte Innovate Website",
    category: "Corporate Website",
    company: "Lotte Innovate",
    period: "06/2024 - 12/2024",
    teamSize: "16",
    role: "Frontend Developer",
    description:
      "Contributed to the refreshed Lotte Innovate corporate website with frontend and backend development, API integration, and optimization.",
    highlights: [
      "Developed and refactored pages for the company's refreshed website.",
      "Handled new features, API integration, and code optimization.",
      "Worked in a larger team structure for a public-facing corporate website.",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Bootstrap 5",
      "Java",
      "Spring Boot",
      "MySQL",
    ],
    links: [
      { label: "Official Website", href: "http://www.lotteinnovate.com/" },
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    href: "http://www.lotteinnovate.com/",
  },
  {
    title: "ESG Project",
    category: "Internal Business System",
    company: "Lotte Innovate",
    period: "03/2024 - 06/2024",
    teamSize: "3",
    role: "Full-stack Developer (Java, ReactJS)",
    description:
      "Built features for a compliance management system used to track responsibility goals and ethical management activities.",
    highlights: [
      "Integrated APIs and handled the full user interface flow.",
      "Developed new features and refactored existing code.",
      "Supported a system aligned with compliance and ethical management processes.",
    ],
    stack: [
      "ReactJS",
      "TypeScript",
      "Java",
      "Spring Boot",
      "SQL Server",
      "Jenkins",
    ],
    links: [
      {
        label: "Project Website",
        href: "https://ethics.lotteshopping.com/",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    href: "https://ethics.lotteshopping.com/",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "Tuan94pth@gmail.com",
    href: "mailto:Tuan94pth@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "0862008674",
    href: "tel:0862008674",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Da Nang",
    href: "https://maps.google.com/?q=Da+Nang",
    icon: MapPin,
  },
  {
    label: "GitHub",
    value: "github.com/nguyenvantuan2k1",
    href: "https://github.com/nguyenvantuan2k1",
    icon: Github,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/nguyenvatuan2k1",
    icon: Github,
  },
  { label: "Email", href: "mailto:Tuan94pth@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:0862008674", icon: Phone },
];
