import { User, FolderOpen, Briefcase, Wrench, GitBranch, Mail, Sparkles } from "lucide-react";

export const apps = [
  { id: "about", file: "about.txt", label: "About", icon: User, w: 460 },
  { id: "projects", file: "projects/", label: "Projects", icon: FolderOpen, w: 580 },
  { id: "experience", file: "history.log", label: "History", icon: Briefcase, w: 540 },
  { id: "skills", file: "toolkit.sys", label: "Toolkit", icon: Wrench, w: 440 },
  { id: "github", file: "github.live", label: "GitHub", icon: GitBranch, w: 500 },
  { id: "now", file: "now.txt", label: "Now", icon: Sparkles, w: 400 },
  { id: "contact", file: "contact.exe", label: "Contact", icon: Mail, w: 380 },
];

export const profile = {
  name: "Carlito O. Tingson Jr.",
  role: "Software Engineer — Frontend / WordPress / Performance / Automation / Maintenance",
  location: "Bacolod, Philippines",
  summary:
    "Computer Science graduate (University of St. La Salle, 2019–2023) working remotely with Odysse.io in Poland. I build and maintain WordPress sites, tune them for Core Web Vitals, and automate content workflows with custom plugins and Zapier.",
};

export const projects = [
  { id: 1, title: "Odysse.io Website", subtitle: "Performance & UI restructure", tech: ["WordPress", "PHP", "JavaScript"], bullets: [
    "Reworked the homepage structure to improve Core Web Vitals, especially LCP.",
    "Asset prioritization, video optimization, and layout stability fixes.",
    "Refactored UI sections for maintainability and responsiveness." ] },
  { id: 2, title: "BIZKY", subtitle: "WordPress maintenance & optimization", tech: ["WordPress", "PHP", "JavaScript", "Zapier"], bullets: [
    "Ongoing maintenance, plugin updates, custom code, and production troubleshooting.",
    "PageSpeed gains via image compression, caching, and script optimization.",
    "Zapier workflows for repetitive admin tasks." ] },
  { id: 3, title: "Google Sheet Posting Plugin", subtitle: "WordPress automation plugin", tech: ["PHP", "WordPress API", "JavaScript", "Google Sheets API", "Unsplash API"], bullets: [
    "Creates posts automatically from Google Sheets data.",
    "Unsplash image automation with configurable featured-image styling.",
    "Supports public sheets or secured JSON-based authentication." ] },
  { id: 4, title: "warszawskifachowiec.pl", subtitle: "Local services marketplace", tech: ["WordPress", "HTML", "CSS", "JavaScript"], bullets: [
    "Responsive multi-section site connecting customers with electricians, plumbers, and handymen in Warsaw.",
    "Reusable components, pricing tables, FAQ, testimonials, and lead forms.",
    "Customer request flow matching users to local professionals." ] },
  { id: 5, title: "Omniminion", subtitle: "Multi-page responsive landing site", tech: ["HTML", "CSS", "JavaScript", "WordPress"], bullets: [
    "Built from concept to deployment with consistent UX across devices.",
    "Reusable front-end components and scalable layout structure.",
    "Animations and interactions without hurting load times." ] },
  { id: 6, title: "Super Barangay Cleaners", subtitle: "Thesis — third-person shooter", tech: ["Unity", "C#"], bullets: [
    "Lead programmer on a game using a procedural content generation algorithm for replay value." ] },
  { id: 7, title: "Reviewer App", subtitle: "Note and quiz creator", tech: ["Python"], bullets: [
    "Create questions and answers, including image-based questions.",
    "Exports JSON files for on-the-go reviewing in a separate project." ] },
  { id: 8, title: "Quizlet App", subtitle: "Reviewer companion site", tech: ["React", "JavaScript", "HTML", "CSS"], bullets: [
    "Reads the JSON notes files created in the Reviewer App." ] },
  { id: 9, title: "Portfolio Website v1", subtitle: "First portfolio", tech: ["React", "JavaScript", "HTML", "CSS"], bullets: [
    "Displays projects, information, and other relevant data." ] },
  { id: 10, title: "Bee Sensor", subtitle: "Bee farm monitor", tech: ["C++", "Arduino"], bullets: [
    "Monitors humidity, temperature, and alarms for bee farms." ] },
];

export const skills = [
  { category: "Languages", items: ["JavaScript (React)", "Python", "SQL (MySQL)", "Java", "C++", "C#", "PHP"] },
  { category: "Web", items: ["HTML", "CSS", "WordPress", "Zapier", "APIs"] },
  { category: "Game Dev", items: ["Unity", "C#"] },
  { category: "Soft Skills", items: ["Presentation", "Communication", "Team Player", "Critical Thinker", "Resourcefulness", "Research"] },
];

export const experience = [
  { role: "Software Engineer (Frontend / WordPress / Performance)", org: "Odysse.io · Remote (Poland)", period: "Apr 2025 — present", bullets: [
    "WordPress development and maintenance across multiple production sites, with custom PHP, JS, and CSS.",
    "Improved PageSpeed Insights scores: LCP, render-blocking resources, lazy loading, WebP, critical rendering paths.",
    "Built responsive UI components: hero sections, carousels, FAQ accordions, video integrations.",
    "Automation with Zapier and API integrations between external services and WordPress." ] },
  { role: "Junior Web Developer Intern", org: "ITS – University of St. La Salle", period: "Bacolod", bullets: [
    "Front-end work on the school transportation service software: login page and part of the home page.",
    "PHP back-end support: built the email receipt system for end users.",
    "Contributed ideas to the team for project improvements." ] },
  { role: "BS Computer Science", org: "University of St. La Salle", period: "2019 — June 2023", bullets: [] },
];

export const links = [
  { label: "Email", href: "mailto:carlitotingson.work@gmail.com" },
  { label: "GitHub", href: "https://github.com/codecc-source" },
  { label: "Portfolio", href: "https://web-portfolio-v3.vercel.app" },
];
