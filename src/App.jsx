import React, { useState } from "react";
import {
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Command,
  Cpu,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Radio,
  ShieldCheck,
  Smartphone,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "SSH Brute-Force Detection",
    category: "SECURITY / SIEM",
    year: "2025",
    icon: ShieldCheck,
    color: "orange",
    githubUrl: "https://github.com/DanielTa115/splunk-ssh-brute-force-detection",
    description:
      "A hands-on detection pipeline for spotting repeated SSH login failures and suspicious access patterns in Linux logs.",
    details: [
      "Collected and explored Linux authentication logs",
      "Wrote Splunk SPL searches for brute-force patterns",
      "Built alerting and dashboard views for investigation",
    ],
    stack: ["Splunk", "SPL", "Linux", "Log Analysis"],
    status: "Detection pipeline",
  },
  {
    number: "02",
    title: "Cross-Platform Microlearning",
    category: "MOBILE / FULL STACK",
    year: "2025",
    icon: Smartphone,
    color: "amber",
    githubUrl: "https://github.com/Culty48/code_microlearning_app",
    description:
      "A bite-sized learning app concept built around short, gamified coding lessons and a shared Flutter codebase.",
    details: [
      "Built reusable screens for lesson-based learning",
      "Used Flutter and Dart for cross-platform UI",
      "Explored a lightweight, game-like learning flow",
    ],
    stack: ["Flutter", "Dart", "Firebase", "UI Design"],
    status: "Learning experience",
  },
  {
    number: "03",
    title: "Mortgage Application Tracker",
    category: "WEB APP / DATA",
    year: "CONCEPT",
    icon: Monitor,
    color: "blue",
    githubUrl: "https://github.com/DanielTa115/4413FinalProject",
    description:
      "A workflow dashboard concept for tracking application stages, outstanding documents, and processing timelines.",
    details: [
      "Organized application status into clear stages",
      "Planned validation checks for missing information",
      "Focused on visibility and data consistency",
    ],
    stack: ["Dashboard UI", "Validation", "Workflow Design"],
    status: "Product concept",
  },
  {
    number: "04",
    title: "Course Tracker & Store App",
    category: "MOBILE / ANDROID",
    year: "2024",
    icon: Smartphone,
    color: "amber",
    githubUrl: "https://github.com/DanielTa115/EECS4443Lab3CourseTrackerStore",
    description:
      "An interactive mobile utility combining a student course tracker with an in-app store, central navigation hub, and transaction logging system.",
    details: [
      "Designed an intuitive UI hub for seamless feature switching",
      "Built transaction management for tracking user purchases",
      "Implemented course tracking state and progress monitoring",
    ],
    stack: ["Android", "Java", "Mobile UI", "Transactions"],
    status: "Lab Project",
  },
  {
  number: "05",
    title: "Mortgage Application Tracker",
    category: "WEB APP / DATA",
    year: "CONCEPT",
    icon: Monitor,
    color: "blue",
    githubUrl: null,
    description:
      "A workflow dashboard concept for tracking application stages, outstanding documents, and processing timelines.",
    details: [
      "Organized application status into clear stages",
      "Planned validation checks for missing information",
      "Focused on visibility and data consistency",
    ],
    stack: ["Dashboard UI", "Validation", "Workflow Design"],
    status: "Product concept",
  },
];

const experience = [
  {
    period: "JAN — AUG 2025",
    role: "QA Analyst · Automation Intern",
    company: "theScore",
    note:
      "Tested iOS, Android, and web experiences, investigated production issues, and worked with developers to improve release confidence.",
    wins: [
      "Identified 20+ P1 defects during testing",
      "Helped reduce manual validation time by 20%",
      "Worked across regression, deep links, and network debugging",
    ],
    tags: ["QA", "Charles Proxy", "Jira", "CI/CD"],
  },
  {
    period: "MAR. 2026 – MAR. 2029",
    role: "Certified in Cybersecurity (CC)",
    company: "ISC2",
    note:
      "Professional certification validating foundational knowledge in security principles, business continuity, access controls, and network security operations.",
    wins: [
      "Demonstrated core competency in security frameworks",
      "Verified operational security and risk management practices",
    ],
    tags: ["Security", "ISC2", "Cybersecurity", "Compliance"],
  },
  {
    period: "SEP 2020 — Current",
    role: "BSc, Computer Science",
    company: "York University",
    note:
      "Building a foundation in software development, algorithms, systems, and practical problem-solving.",
    wins: [
      "Coursework in data structures and algorithms",
      "Projects spanning mobile apps, data, and security",
    ],
    tags: ["Software Design", "Algorithms", "Systems"],
  },
];

const skillGroups = [
  { label: "LANGUAGES", items: ["Java", "Python", "JavaScript", "Dart", "Bash"] },
  { label: "BUILD", items: ["React", "Flutter", "Node.js", "Firebase", "SQL"] },
  { label: "TOOLS", items: ["Git", "Splunk", "Jira", "Charles Proxy", "Linux"] },
];

const navItems = [
  { id: "home", label: "Overview", index: "00" },
  { id: "projects", label: "Projects", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "toolkit", label: "Toolkit", index: "03" },
];

function Pill({ children, tone = "default" }) {
  const tones = {
    default: "border-stone-900 bg-stone-100 text-stone-900 shadow-[2px_2px_0px_0px_#1c1917]",
    orange: "border-orange-900 bg-orange-100 text-orange-900 shadow-[2px_2px_0px_0px_#7c2d12]",
    amber: "border-amber-900 bg-amber-100 text-amber-900 shadow-[2px_2px_0px_0px_#78350f]",
    blue: "border-blue-900 bg-blue-100 text-blue-900 shadow-[2px_2px_0px_0px_#1e3a8a]",
  };
  return (
    <span className={`inline-flex items-center rounded-none border-2 px-3 py-1 text-[11px] font-bold tracking-wide ${tones[tone] || tones.default}`}>
      {children}
    </span>
  );
}

function SectionLabel({ number, children }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-stone-500 font-bold">
      <span className="bg-orange-600 text-white px-2 py-0.5 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1c1917]">{number}</span>
      <span>{children}</span>
      <span className="h-0.5 flex-1 bg-stone-900" />
    </div>
  );
}

export default function DanielTaPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const project = projects[selectedProject];
  const ProjectIcon = project.icon;
  const projectTone = project.color;

  const navigate = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf9f1] text-[#1c1917] selection:bg-orange-400 selection:text-stone-950">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; }
        .mono { font-family: 'Space Mono', monospace; }
        .display-font { font-family: 'Bricolage Grotesque', sans-serif; }
        .retro-grid {
          background-image: radial-gradient(#d6d3d1 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
        .retro-shadow { box-shadow: 4px 4px 0px 0px #1c1917; }
        .retro-shadow-sm { box-shadow: 2px 2px 0px 0px #1c1917; }
        .retro-shadow-lg { box-shadow: 6px 6px 0px 0px #1c1917; }
        .retro-button {
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .retro-button:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px 0px #1c1917;
        }
        .retro-button:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px 0px #1c1917;
        }
        @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .floaty { animation: floaty 4s ease-in-out infinite; }
      `}</style>

      {/* Background Retro Grid */}
      <div className="pointer-events-none fixed inset-0 -z-0 retro-grid opacity-70" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-stone-900 bg-[#fbf9f1]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={() => navigate("home")} className="group flex items-center gap-3 text-left">
            <span className="flex h-10 w-10 items-center justify-center border-2 border-stone-900 bg-orange-400 text-stone-900 font-bold retro-shadow-sm transition group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]">
              <Command size={18} />
            </span>
            <span>
              <span className="display-font block text-base font-extrabold tracking-tight">DANIEL TA<span className="text-orange-600">.</span></span>
              <span className="mono block text-[9px] tracking-[0.2em] text-stone-500 font-bold">ARCADE / DEV / QA</span>
            </span>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`rounded-none border-2 px-3.5 py-1.5 text-xs font-bold transition ${
                  activeSection === item.id
                    ? "border-stone-900 bg-orange-400 text-stone-950 retro-shadow-sm"
                    : "border-transparent text-stone-600 hover:border-stone-900 hover:bg-stone-100"
                }`}
              >
                <span className="mono mr-1.5 text-[10px] text-stone-400">{item.index}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href="mailto:takdaniel487@gmail.com"
            className="hidden items-center gap-2 border-2 border-stone-900 bg-stone-900 px-4 py-2 text-xs font-bold text-[#fbf9f1] retro-shadow-sm retro-button sm:inline-flex"
          >
            Let's talk <ArrowUpRight size={14} />
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center border-2 border-stone-900 bg-stone-100 text-stone-900 retro-shadow-sm md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t-2 border-stone-900 bg-[#fbf9f1] px-5 py-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="flex w-full items-center justify-between border-b-2 border-stone-200 py-3 text-left text-sm font-bold text-stone-900"
              >
                {item.label}<ChevronRight size={15} />
              </button>
            ))}
            <a href="mailto:takdaniel487@gmail.com" className="mt-4 block border-2 border-stone-900 bg-orange-400 p-3 text-center text-sm font-bold text-stone-900 retro-shadow-sm">Email Daniel ↗</a>
          </div>
        )}
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Hero Section */}
        <section id="home" className="section-anchor grid min-h-[660px] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-stone-900 bg-amber-200 px-3 py-1.5 text-xs font-bold text-stone-900 retro-shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-600" />
              </span>
              TORONTO, CANADA <span className="text-stone-400">/</span> OPEN TO OPPORTUNITIES
            </div>

            <p className="mono mb-3 text-xs uppercase tracking-[0.24em] text-orange-700 font-bold">Player 01 Ready</p>
            <h1 className="display-font max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-7xl xl:text-[84px]">
              I make things
              <br />
              <span className="relative inline-block bg-orange-400 px-3 py-1 text-stone-950 border-2 border-stone-900 retro-shadow mt-2 rotate-[-1deg]">
                work better
              </span>
              <span className="text-stone-400">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-medium leading-8 text-stone-600 sm:text-lg">
              I'm Daniel, a computer science student who messes around making software,
              likes finding and solving problems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("projects")}
                className="retro-button inline-flex items-center gap-3 border-2 border-stone-900 bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-stone-950 retro-shadow"
              >
                Explore my work <ArrowUpRight size={16} />
              </button>
              <a
                href="mailto:takdaniel487@gmail.com"
                className="retro-button inline-flex items-center gap-3 border-2 border-stone-900 bg-stone-100 px-6 py-3.5 text-sm font-bold text-stone-900 retro-shadow"
              >
                <Mail size={15} /> Get in touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t-2 border-stone-900 pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-600"><MapPin size={14} className="text-orange-600" /> Toronto, ON</div>
              <div className="flex items-center gap-2 text-xs font-bold text-stone-600"><Code2 size={14} className="text-orange-600" /> Software · QA · Security</div>
              <div className="mono text-[10px] font-bold text-stone-400">SCROLL TO EXPLORE ↓</div>
            </div>
          </div>

          {/* Retro Arcade Card Visual */}
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="retro-shadow-lg border-2 border-stone-900 bg-[#fffdf9] p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between border-b-2 border-stone-900 pb-3">
                <div className="mono flex items-center gap-2 text-[10px] tracking-[0.16em] font-bold text-stone-700">
                  <Radio size={14} className="text-orange-600" /> PLAYER CARD
                </div>
                <span className="mono text-[10px] font-bold bg-stone-900 text-[#fbf9f1] px-2 py-0.5">LVL. 99</span>
              </div>

              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-2 border-stone-900 bg-amber-50 p-4">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(#b45309 1.2px, transparent 1.2px)", backgroundSize: "16px 16px" }} />
              
              {/* Profile Photo Container */}
              <div className="relative h-52 w-52 overflow-hidden border-2 border-stone-900 retro-shadow bg-orange-200">
                <img 
                  src="profile.jpg"
                  alt="Daniel Ta" 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <span className="mono absolute bottom-3 left-3 text-[9px] font-bold tracking-[0.2em] text-stone-600 bg-amber-100/80 px-1">FIG. 01 / DANIEL</span>
              <span className="mono absolute right-3 top-3 text-[9px] font-bold bg-green-200 border border-stone-900 px-1.5 py-0.5 text-stone-900">ONLINE_</span>
            </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="border-2 border-stone-900 bg-stone-100 p-3 retro-shadow-sm">
                  <p className="mono text-[9px] tracking-[0.16em] font-bold text-stone-500">CURRENT CLASS</p>
                  <p className="mt-1.5 text-sm font-extrabold">CS / Developer</p>
                </div>
                <div className="border-2 border-stone-900 bg-orange-100 p-3 retro-shadow-sm">
                  <p className="mono text-[9px] tracking-[0.16em] font-bold text-orange-900">PASSIVE SKILL</p>
                  <p className="mt-1.5 text-sm font-extrabold text-orange-950">Bug Detective</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t-2 border-stone-200 pt-4">
                <div className="flex gap-1.5">
                  <span className="h-2 w-8 bg-orange-500 border border-stone-900" />
                  <span className="h-2 w-8 bg-orange-400 border border-stone-900" />
                  <span className="h-2 w-8 bg-orange-300 border border-stone-900" />
                  <span className="h-2 w-8 bg-stone-200 border border-stone-900" />
                </div>
                <span className="mono text-[9px] font-bold tracking-widest text-stone-500">XP: ALWAYS LEARNING</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-anchor py-20">
          <SectionLabel number="01">Selected work</SectionLabel>
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="display-font text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">Curiosity, turned into projects<span className="text-orange-600">.</span></h2>
            <p className="max-w-sm text-sm font-medium leading-6 text-stone-600">A few things I've built, explored, or designed. Select a project to inspect the build log.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <div className="space-y-3">
              {projects.map((item, index) => {
                const Icon = item.icon;
                const selected = selectedProject === index;
                return (
                  <button
                    key={item.number}
                    onClick={() => { setSelectedProject(index); setShowDetails(false); }}
                    className={`group w-full border-2 p-4 text-left transition sm:p-5 ${
                      selected 
                        ? "border-stone-900 bg-orange-200 retro-shadow" 
                        : "border-stone-900 bg-[#fffdf9] hover:bg-orange-50 retro-shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`mono pt-1 text-xs font-extrabold ${selected ? "text-orange-900" : "text-stone-400"}`}>{item.number}</span>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 border-stone-900 ${selected ? "bg-orange-500 text-stone-950" : "bg-stone-100 text-stone-700"}`}><Icon size={18} /></span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-extrabold sm:text-base text-stone-900">{item.title}</span>
                        <span className="mono mt-1 block text-[9px] font-bold tracking-[0.16em] text-stone-500">{item.category}</span>
                      </span>
                      <ChevronRight size={18} className={`mt-2 shrink-0 transition ${selected ? "translate-x-1 text-stone-900" : "text-stone-400 group-hover:translate-x-1"}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            <article className="retro-shadow border-2 border-stone-900 bg-[#fffdf9] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Pill tone={projectTone}>{project.category}</Pill>
                  <span className="mono text-xs font-bold bg-stone-900 text-[#fbf9f1] px-2 py-0.5">{project.year}</span>
                </div>
                <div className="mt-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="mono text-[10px] font-bold tracking-[0.2em] text-stone-500">PROJECT FILE / {project.number}</p>
                    <h3 className="display-font mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl text-stone-900">{project.title}</h3>
                  </div>
                  <div className={`hidden h-14 w-14 shrink-0 items-center justify-center border-2 border-stone-900 retro-shadow-sm sm:flex ${
                    projectTone === "orange" ? "bg-orange-400 text-stone-950" :
                    projectTone === "amber" ? "bg-amber-400 text-stone-950" :
                    "bg-blue-300 text-stone-950"
                  }`}>
                    <ProjectIcon size={26} strokeWidth={2} />
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-stone-600">{project.description}</p>

                <div className="mt-6 border-y-2 border-stone-900 py-4">
                  <div className="mono mb-3 text-[10px] font-bold tracking-[0.2em] text-stone-500">TECH / METHODS</div>
                  <div className="flex flex-wrap gap-2">{project.stack.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
                </div>

                {showDetails && (
                  <ul className="mt-5 space-y-2 bg-stone-100 border-2 border-stone-900 p-4 retro-shadow-sm">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-xs font-semibold leading-5 text-stone-700"><Check size={14} className="mt-0.5 shrink-0 text-orange-600" />{detail}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-stone-200">
                <span className="mono flex items-center gap-2 text-xs font-bold text-stone-600">
                  <span className={`h-2 w-2 border border-stone-900 ${project.year === "CONCEPT" ? "bg-blue-400" : "bg-orange-500"}`} />
                  {project.status}
                </span>
                
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-button inline-flex items-center gap-1.5 border-2 border-stone-900 bg-orange-400 px-3.5 py-2 text-xs font-extrabold text-stone-950 retro-shadow-sm"
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub <ArrowUpRight size={12} />
                    </a>
                  )}
                  <button 
                    onClick={() => setShowDetails(!showDetails)} 
                    className="retro-button inline-flex items-center gap-2 border-2 border-stone-900 bg-stone-900 px-4 py-2 text-xs font-bold text-[#fbf9f1] retro-shadow-sm"
                  >
                    {showDetails ? "Hide build notes" : "View build notes"} <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="section-anchor py-20">
          <SectionLabel number="02">Experience & education</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <h2 className="display-font text-3xl font-extrabold tracking-tight sm:text-5xl">Learn by doing.<br /><span className="text-stone-400">Improve by iterating.</span></h2>
              <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-stone-600">I like work where careful investigation and clear communication matter as much as writing code.</p>
              <div className="mt-8 flex items-center gap-3 border-2 border-stone-900 bg-amber-100 p-4 retro-shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-stone-900 bg-orange-400 text-stone-950"><BriefcaseBusiness size={18} /></div>
                <div><p className="text-sm font-extrabold text-stone-900">Quality-minded developer</p><p className="mt-0.5 text-xs font-bold text-stone-600">Build · test · learn · repeat</p></div>
              </div>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <article key={item.company} className="retro-shadow border-2 border-stone-900 bg-[#fffdf9] p-5 sm:p-7">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <span className="mono text-[10px] font-extrabold tracking-[0.16em] bg-orange-200 border border-stone-900 px-2 py-0.5 text-stone-900">{item.period}</span>
                      <h3 className="display-font mt-3 text-lg font-extrabold text-stone-900">{item.role}</h3>
                      <p className="mt-1 text-sm font-bold text-stone-600">{item.company}</p>
                    </div>
                    <span className="mono text-xs font-extrabold border-2 border-stone-900 bg-stone-100 px-2.5 py-1">0{index + 1}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium leading-7 text-stone-600">{item.note}</p>
                  <ul className="mt-4 space-y-2 border-t-2 border-stone-200 pt-4">
                    {item.wins.map((win) => (
                      <li key={win} className="flex gap-2 text-xs font-semibold leading-5 text-stone-700">
                        <span className="text-orange-600 font-bold">↳</span>{win}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Toolkit Section */}
        <section id="toolkit" className="section-anchor py-20">
          <SectionLabel number="03">Toolkit</SectionLabel>
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="display-font text-3xl font-extrabold tracking-tight sm:text-5xl">Tools in my workbench<span className="text-orange-600">.</span></h2>
            <p className="max-w-sm text-sm font-medium leading-6 text-stone-600">A practical mix of technologies I've used across projects, coursework, and QA.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <div key={group.label} className="retro-shadow border-2 border-stone-900 bg-[#fffdf9] p-5 sm:p-6">
                <div className="mb-6 flex items-center justify-between border-b-2 border-stone-900 pb-3">
                  <span className="mono text-xs font-extrabold tracking-[0.2em] text-stone-800">{group.label}</span>
                  <div className="border-2 border-stone-900 bg-orange-300 p-1.5 text-stone-950">
                    {index === 0 ? <Braces size={16} /> : index === 1 ? <Cpu size={16} /> : <Terminal size={16} />}
                  </div>
                </div>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-stone-200 py-2.5 text-sm font-bold text-stone-800">
                      {item}<span className="mono text-xs text-stone-400">↗</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Box */}
        <section className="py-16">
          <div className="retro-shadow-lg relative overflow-hidden border-2 border-stone-900 bg-orange-300 p-7 sm:p-12">
            <div className="relative max-w-2xl">
              <p className="mono text-xs font-extrabold tracking-[0.24em] bg-stone-900 text-[#fbf9f1] inline-block px-2.5 py-1 mb-4">NEXT QUEST</p>
              <h2 className="display-font text-3xl font-extrabold tracking-tight sm:text-5xl text-stone-950">Have something interesting to build?</h2>
              <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-stone-900">I'm always happy to talk software, debugging, product ideas, or opportunities to contribute to a good team.</p>
              <a 
                href="mailto:takdaniel487@gmail.com" 
                className="retro-button mt-7 inline-flex items-center gap-3 border-2 border-stone-900 bg-stone-900 px-6 py-4 text-sm font-extrabold text-[#fbf9f1] retro-shadow-sm"
              >
                <Mail size={16} /> takdaniel487@gmail.com <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-4 border-t-2 border-stone-900 py-8 sm:flex-row sm:items-center">
          <div className="mono text-xs font-bold tracking-[0.16em] text-stone-600">© {new Date().getFullYear()} DANIEL TA / BUILT WITH INTENTION</div>
          <div className="flex items-center gap-4 text-xs font-bold text-stone-600">
            <span className="flex items-center gap-2"><span className="h-2 w-2 border border-stone-900 bg-green-500" /> SYSTEM OPERATIONAL</span>
            <button onClick={() => navigate("home")} className="transition hover:text-orange-600 underline">Back to top ↑</button>
          </div>
        </footer>
      </div>
    </main>
  );
}