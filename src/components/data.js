import { User, FolderOpen, Briefcase, Wrench, GitBranch, Mail, Sparkles, Bug } from "lucide-react";

export const apps = [
  { id: "about", file: "about.txt", label: "About", icon: User, w: 800 },
  { id: "projects", file: "projects/", label: "Projects", icon: FolderOpen, w: 700, load: 700 },
  { id: "experience", file: "history.log", label: "History", icon: Briefcase, w: 780 },
  { id: "skills", file: "toolkit.sys", label: "Toolkit", icon: Wrench, w: 780 },
  { id: "github", file: "github.live", label: "GitHub", icon: GitBranch, w: 500, load: 1400 },
  { id: "now", file: "now.txt", label: "Now", icon: Sparkles, w: 520 },
  { id: "contact", file: "contact.exe", label: "Contact", icon: Mail, w: 380 },
  { id: "konami", file: "k0n4m1.exe", label: "????.exe", icon: Bug, w: 400, glitch: true },
];

export const profile = {
  name: "Carlito O. Tingson Jr.",
  role: "Software Engineer — Frontend / WordPress / Performance / Maintenance",
  location: "Bacolod, Philippines · working remotely with a team in Poland",
  about: [
    "Computer Science graduate (University of St. La Salle, 2019–2023) and, since April 2025, Software Engineer at Odysse.io. I build features, test and fix bugs, and handle the full maintenance of production WordPress sites, everything except database and server issues.",
    "I like work where speed, maintainability and UX all matter: cutting render-blocking resources, bringing LCP down, and building components that are easy to change. I also build plugins and automations with PHP, JavaScript, Zapier and external APIs, and have shipped React, Python, Arduino and Unity projects.",
  ],
  focus: [
    { title: "WordPress maintenance, end to end", text: "Plugin development, theme creation, bug testing and fixes, updates and feature work. Database and server issues are the only exclusions." },
    { title: "Performance (PSI / Core Web Vitals)", text: "LCP, render-blocking resources, lazy loading, WebP and the critical rendering path." },
    { title: "Front-end engineering", text: "Responsive, performance-safe hero sections, carousels, FAQ accordions and video integrations." },
    { title: "Automation & integrations", text: "Zapier workflows and API integrations between external services and WordPress." },
  ],
};

export const projects = [
  { id: 1, title: "Odysse.io Website", subtitle: "Performance & UI restructure", live: "", repo: "", tech: ["WordPress", "PHP", "JavaScript"],
    summary: "A restructure of the Odysse.io homepage aimed at Core Web Vitals, in particular Largest Contentful Paint, while keeping the page maintainable and responsive.",
    bullets: [
      "Reworked and optimized the homepage structure to improve Core Web Vitals, particularly Largest Contentful Paint (LCP).",
      "Applied performance-focused techniques: asset prioritization, video optimization strategies and layout stability improvements.",
      "Refactored UI sections for better maintainability and improved responsiveness across devices." ] },
  { id: 2, title: "BIZKY", subtitle: "WordPress maintenance & optimization", live: "", repo: "", tech: ["WordPress", "PHP", "JavaScript", "Zapier"],
    summary: "Long-running maintenance and improvement work on the BIZKY WordPress site, covering day-to-day upkeep, speed and workflow automation.",
    bullets: [
      "Managed ongoing maintenance and feature enhancements: plugin updates, custom code integration and troubleshooting production issues.",
      "Improved PageSpeed Insights results with image compression, caching improvements and script optimization.",
      "Built Zapier automation workflows to streamline repetitive administrative tasks and improve operational efficiency." ] },
  { id: 3, title: "Google Sheet Posting Plugin", subtitle: "WordPress automation plugin", live: "", repo: "", tech: ["PHP", "WordPress API", "JavaScript", "Google Sheets API", "Unsplash API"],
    summary: "A custom WordPress plugin that turns rows in a Google Sheet into published posts, built to cut manual posting effort for content teams.",
    bullets: [
      "Automates post creation using data pulled directly from Google Sheets.",
      "Image automation through the Unsplash API, with configurable styling options for featured images and post media.",
      "Flexible configuration, including support for public Google Sheets or secured JSON-based authentication.",
      "Designed to support scalable content workflows, reducing manual posting effort and improving publishing efficiency." ] },
  { id: 4, title: "warszawskifachowiec.pl", subtitle: "Local services marketplace", live: "", repo: "", tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    summary: "A responsive, multi-section service marketplace that connects customers in Warsaw with verified local electricians, plumbers and handymen.",
    bullets: [
      "Built reusable front-end components and sections: pricing tables, FAQ, testimonials and lead-generation forms, with consistent UX across mobile, tablet and desktop.",
      "Implemented a streamlined customer request flow so users can submit service requirements and be matched with an appropriate local professional.",
      "Optimized the site structure and responsive layouts for usability, performance and scalability." ] },
  { id: 5, title: "Omniminion", subtitle: "Multi-page responsive landing website", live: "", repo: "", tech: ["HTML", "CSS", "JavaScript", "WordPress"],
    summary: "A fully responsive multi-page landing website delivered from concept to deployment.",
    bullets: [
      "Ensured consistent UX across mobile, tablet and desktop devices.",
      "Developed reusable front-end components and an optimized layout structure for scalability and performance.",
      "Integrated animations and interactive elements while keeping load times fast and the UI structure clean." ] },
  { id: 6, title: "Super Barangay Cleaners", subtitle: "Thesis — third-person shooter", live: "", repo: "", tech: ["Unity", "C#"],
    summary: "My university thesis: a third-person shooter whose levels use a procedural content generation (PCG) algorithm to showcase replay value.",
    bullets: [
      "Served as lead programmer for the game.",
      "Used a procedural content generation algorithm so playthroughs differ, giving the game replay value." ] },
  { id: 7, title: "Reviewer App", subtitle: "Note and quiz creator", live: "", repo: "", tech: ["Python"],
    summary: "A reviewer app that helps users create and review notes for different subjects.",
    bullets: [
      "Lets users input questions and answers, including text-based questions and visual questions (images).",
      "Exports JSON files that can be uploaded to a separate project for on-the-go reviewing." ] },
  { id: 8, title: "Quizlet App", subtitle: "Reviewer companion site", live: "", repo: "", tech: ["React", "JavaScript", "HTML", "CSS"],
    summary: "A simple website that works as the companion to the Reviewer App.",
    bullets: [
      "Reads the JSON notes files created in the Reviewer App.",
      "Built with the ReactJS framework." ] },
  { id: 9, title: "Portfolio Website v1", subtitle: "First portfolio", live: "", repo: "", tech: ["React", "JavaScript", "HTML", "CSS"],
    summary: "My first portfolio site, used to display projects, information and other relevant data.",
    bullets: [
      "Built with the ReactJS framework together with some libraries." ] },
  { id: 10, title: "Bee Sensor", subtitle: "Bee farm monitor", live: "", repo: "", tech: ["C++", "Arduino"],
    summary: "An embedded project that monitors bee farms.",
    bullets: [
      "Tracks humidity and temperature, and raises alarms.",
      "Written in Arduino's C++ variant." ] },
  { id: 11, title: "Super Secret Project", subtitle: "Work in progress", wip: true, live: "", repo: "", tech: ["TBA"],
    summary: "Something new is in the works. Details will be added here once it launches.",
    bullets: ["Status: work in progress.", "This entry will be updated at launch."] },
];

export const skills = [
  { category: "Languages", blurb: "React on the front end, Python and SQL for tooling, Java and C++ from university.", items: ["JavaScript (React)", "Python", "SQL (MySQL)", "Java", "C++", "C#", "PHP"] },
  { category: "WordPress", blurb: "Full site maintenance, from plugins and themes to bug fixes.", items: ["WordPress", "Plugin development", "Theme creation", "Bug testing & fixes", "PHP", "HTML", "CSS", "JavaScript"] },
  { category: "Performance", blurb: "Measured, targeted improvements to PageSpeed and Core Web Vitals.", items: ["PageSpeed Insights", "Core Web Vitals", "LCP", "Lazy loading", "WebP", "Caching", "Critical rendering path"] },
  { category: "Automation & APIs", blurb: "Connecting external services to WordPress to remove repetitive work.", items: ["Zapier", "WordPress API", "Google Sheets API", "Unsplash API"] },
  { category: "Game Dev", blurb: "Gameplay programming and procedural generation.", items: ["Unity", "C#"] },
  { category: "Soft Skills", blurb: "How I work with a distributed team.", items: ["Presentation", "Communication", "Team Player", "Critical Thinker", "Resourcefulness", "Research"] },
];

export const experience = [
  { role: "Software Engineer (Frontend / WordPress / Performance / Maintenance)", org: "Odysse.io · Remote (Poland)", period: "Apr 2025 — present", current: true, tag: "CURRENT",
    summary: "WordPress development, performance optimization and full-site improvements across multiple production websites.",
    bullets: [
      "Full WordPress maintenance: plugin development, theme creation, bug testing and fixes, and feature additions, using custom PHP, JavaScript and CSS. Database and server issues excluded.",
      "Performance (PSI / Core Web Vitals): optimized LCP, reduced render-blocking resources, added lazy loading, WebP / optimized media, refined critical rendering paths.",
      "Front-end: responsive, performance-safe hero sections, carousels, FAQ accordions and video integrations.",
      "Automation: Zapier workflows and API integrations between external services and WordPress." ] },
  { role: "Junior Web Developer (Intern)", org: "ITS – University of St. La Salle", period: "Bacolod, Philippines", tag: "INTERNSHIP",
    summary: "Worked on my school's transportation service software.",
    bullets: [
      "Front-end: login page and part of the home page, collaborating with the design team on responsive layouts.",
      "Back-end: PHP support, database upkeep, and the email receipt system for end users.",
      "Team: brainstormed improvements and forwarded ideas to our manager." ] },
  { role: "Computer Science", org: "University of St. La Salle · Bacolod", period: "2019 — June 2023", tag: "EDUCATION",
    summary: "Graduated June 2023.",
    bullets: [
      "Thesis: Super Barangay Cleaners, a Unity/C# third-person shooter using procedural content generation (lead programmer)." ] },
];

export const links = [
  { label: "Email", href: "mailto:carlitotingson.work@gmail.com" },
  { label: "GitHub", href: "https://github.com/codecc-source" },
];
