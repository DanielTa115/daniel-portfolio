// Daniel Ta portfolio — all content and interactions in one file.
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, Braces, Check, Code2, Copy, Layers, Mail, MapPin, Menu, Send, Wrench, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import studio from '@/assets/developer-studio.jpg';

// Inline GitHub mark (newer lucide-react versions no longer ship a Github icon)
function Github({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ---------- Content (edit your projects, experience and skills here) ----------
// `filter` drives the filter tabs; `preview` picks the illustration (terminal | phone-learn | dashboard | phone-courses).
const projects = [
  {
    number: "01",
    title: "SSH Brute-Force Detection",
    category: "SECURITY / SIEM",
    filter: "Security",
    preview: "terminal",
    year: "2025",
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
    filter: "Mobile",
    preview: "phone-learn",
    year: "2025",
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
    filter: "Web",
    preview: "dashboard",
    year: "CONCEPT",
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
    filter: "Mobile",
    preview: "phone-courses",
    year: "2024",
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

// Shown when a tool chip is clicked. Edit freely.
const toolNotes = {
  Java: "Course Tracker & Store App (Android), plus coursework at York.",
  Python: "Scripting, data work, and coursework projects.",
  JavaScript: "Web projects, this portfolio, and Node.js tooling.",
  Dart: "Cross-Platform Microlearning app (Flutter).",
  Bash: "Log parsing and automation around Linux auth logs.",
  React: "This portfolio and web dashboard concepts.",
  Flutter: "Cross-Platform Microlearning app.",
  'Node.js': "Tooling and small web back ends.",
  Firebase: "Cross-Platform Microlearning app.",
  SQL: "Coursework and the Mortgage Application Tracker data model.",
  Git: "Every project, every day.",
  Splunk: "SSH Brute-Force Detection pipeline.",
  Jira: "Bug tracking and triage during my theScore internship.",
  'Charles Proxy': "Network debugging at theScore.",
  Linux: "SSH Brute-Force Detection (auth logs) and daily tooling.",
};

// ---------- Page ----------
const email = 'takdaniel487@gmail.com';
const filters = ['All work', 'Security', 'Mobile', 'Web'];
const navLinks = [['projects', 'Work'], ['experience', 'Experience'], ['toolkit', 'Toolkit'], ['playground', 'Playground']];
const previewClass = { terminal: 'security', 'phone-learn': 'mobile', dashboard: 'web', 'phone-courses': 'android' };

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function SectionIndex({ number, children }) { return <div className="section-index"><span>{number} /</span>{children}</div>; }
function WindowBar({ title }) { return <div className="window-bar"><i className="window-dot"/><i className="window-dot"/><i className="window-dot"/><span>{title}</span></div>; }

// Highlights the nav link for the section currently in view
function useScrollSpy(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const onScroll = () => {
      let current = '';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return active;
}

// True once the element has scrolled into view (used to start the terminal typing)
function useSeen(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return seen;
}

const sshLines = [
  { t: '$ monitor /var/log/auth.log' },
  { t: '→ Parsing authentication events...' },
  { t: '→ Analyzing failed SSH attempts' },
  { t: '[ALERT] Brute-force pattern detected', warn: true },
  { t: '✓ Investigation ready' },
];

function TerminalPreview() {
  const ref = useRef(null);
  const seen = useSeen(ref);
  const [count, setCount] = useState(prefersReducedMotion() ? sshLines.length : 0);
  useEffect(() => {
    if (!seen || prefersReducedMotion()) { if (seen) setCount(sshLines.length); return; }
    const id = setInterval(() => setCount((c) => (c >= sshLines.length + 3 ? 0 : c + 1)), 850);
    return () => clearInterval(id);
  }, [seen]);
  return (
    <div className="preview-terminal" ref={ref}>
      <WindowBar title="ssh-detection / Splunk" />
      <div className="terminal-code" aria-label="Simulated terminal output">
        {sshLines.slice(0, count).map((l) => <div key={l.t} className={l.warn ? 'warn' : ''}>{l.t}</div>)}
        <span className="terminal-cursor" />
      </div>
    </div>
  );
}

function PhonePreview({ variant }) {
  const learn = variant === 'learn';
  const [done, setDone] = useState(false);
  return (
    <>
      <span className="phone-stamp" aria-hidden="true">{learn ? '✳' : '{ }'}</span>
      <button type="button" className={`phone-mock interactive ${done ? 'done' : ''}`} onClick={() => setDone(!done)} aria-pressed={done}
        aria-label={learn ? 'Tap to complete the lesson' : 'Tap to save course progress'}>
        <div className="phone-notch" />
        <span>{learn ? 'CODE / DAILY' : 'MY COURSES'}</span>
        <strong>{learn ? 'A little code.\nA little progress.' : 'Your semester, sorted.'}</strong>
        <div className="phone-lesson">
          {learn ? '01 / Variables' : 'EECS / Course tracker'}<br />
          <strong>{done ? (learn ? 'Lesson complete ✓' : 'Progress saved ✓') : (learn ? 'Hello, world!' : 'Learning in progress')}</strong>
          <div className="phone-progress" style={{ width: done ? '100%' : '75%' }} />
        </div>
        <div className="phone-lesson">{learn ? 'Continue learning →' : 'Visit the store →'}</div>
      </button>
    </>
  );
}

function DashboardPreview() {
  const initial = { total: 12, progress: 8, done: 4 };
  const [s, setS] = useState(initial);
  const advance = () => setS((v) => (v.progress > 0 ? { ...v, progress: v.progress - 1, done: v.done + 1 } : initial));
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <div className="dashboard-mock">
      <div className="dashboard-top"><strong>Application overview</strong><button type="button" className="dashboard-add" onClick={advance}>{s.progress > 0 ? '+ Advance one' : '↺ Reset'}</button></div>
      <div className="dashboard-stats"><div><strong>{s.total}</strong>Applications</div><div><strong>{pad(s.progress)}</strong>In progress</div><div><strong>{pad(s.done)}</strong>Completed</div></div>
      {['Application #001', 'Application #002', 'Application #003'].map((v, i) => <div className="dashboard-line" key={v}><span>{v}</span><span>{['In review', 'Documents pending', 'Approved'][i]}</span></div>)}
    </div>
  );
}

function ProjectPreview({ project }) {
  const kind = project.preview;
  return (
    <div className={`project-preview ${previewClass[kind]}`}>
      <span className="preview-index">PROJECT_{project.number}</span>
      {kind === 'terminal' && <TerminalPreview />}
      {kind === 'phone-learn' && <PhonePreview variant="learn" />}
      {kind === 'phone-courses' && <PhonePreview variant="courses" />}
      {kind === 'dashboard' && <DashboardPreview />}
      <span className="preview-caption">ILLUSTRATIVE PREVIEW{project.year === 'CONCEPT' ? ' / CONCEPT' : ''}{kind !== 'terminal' ? ' · TRY IT' : ''}</span>
    </div>
  );
}

const introHistory = 'daniel@portfolio:~$ hello\nHey, I’m Daniel. Welcome to my little corner of the web.\nType help to see what’s here.';

export default function Portfolio() {
  const [filter, setFilter] = useState('All work');
  const [expanded, setExpanded] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tool, setTool] = useState(null);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState(introHistory);
  const [past, setPast] = useState([]);
  const [pastIndex, setPastIndex] = useState(-1);
  const historyRef = useRef(null);
  const heroRef = useRef(null);
  const active = useScrollSpy(['projects', 'experience', 'toolkit', 'playground', 'contact']);

  useEffect(() => { if (historyRef.current) historyRef.current.scrollTop = historyRef.current.scrollHeight; }, [history]);

  const execute = (input) => {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    const replies = {
      help: 'Available commands: about, skills, projects, contact, clear',
      about: 'Daniel Ta · Toronto, ON\nComputer Science @ York University\nSoftware development / QA / Cybersecurity',
      skills: skillGroups.map((g) => `${g.label.toLowerCase()}: ${g.items.join(', ')}`).join('\n'),
      projects: projects.map((p) => `${p.number}. ${p.title}`).join('\n'),
      contact: `Let’s build something good.\n${email}\ngithub.com/DanielTa115`,
    };
    setPast((p) => [input, ...p]);
    setPastIndex(-1);
    setHistory(cmd === 'clear' ? '' : (h) => `${h}\n\ndaniel@portfolio:~$ ${input}\n${replies[cmd] ?? `Command not found: ${input}. Try help.`}`);
    setCommand('');
  };

  // Up / down arrows walk through earlier commands
  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp' && past.length) {
      e.preventDefault();
      const next = Math.min(pastIndex + 1, past.length - 1);
      setPastIndex(next); setCommand(past[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = pastIndex - 1;
      setPastIndex(next); setCommand(next >= 0 ? past[next] : '');
    }
  };

  const copyEmail = async () => { try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); } };

  // Gentle parallax on the hero art
  const onHeroMove = (e) => {
    if (prefersReducedMotion() || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    heroRef.current.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const onHeroLeave = () => { if (heroRef.current) { heroRef.current.style.setProperty('--px', 0); heroRef.current.style.setProperty('--py', 0); } };

  const visibleProjects = projects.filter((p) => filter === 'All work' || p.filter === filter);

  return <>
    <header className="site-header"><div className="portfolio-shell header-inner">
      <a href="#home" className="wordmark" aria-label="Daniel Ta home">daniel ta<span>✳</span></a>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">{navLinks.map(([id, label]) => <a href={`#${id}`} key={id} data-active={active === id} aria-current={active === id ? 'true' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <Button variant="portfolio" asChild className="header-contact"><a href={`mailto:${email}`}>Let’s talk <ArrowUpRight/></a></Button>
      <Button variant="quiet" size="icon" className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
    </div></header>
    <main>
      <div className="portfolio-shell">
        <section id="home" className="hero" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
          <img src={studio} width={1536} height={1024} className="hero-art" alt="Playful green retro computer with a pixel smile and floating coding-inspired objects" fetchPriority="high"/>
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div>
            <div className="hero-kicker">Hello, world. I’m</div>
            <h1>Daniel Ta<span className="text-primary">.</span></h1>
            <div className="hero-subtitle">Curious mind.<br/><em>Quality-minded code.</em></div>
            <p className="hero-description">Computer science student, developer, and bug detective. I build thoughtful software and find the little things that make a big difference.</p>
            <div className="hero-actions"><Button variant="portfolio" asChild><a href="#projects">Explore my work <ArrowDown/></a></Button><Button variant="quiet" asChild><a href="https://github.com/DanielTa115" target="_blank" rel="noreferrer"><Github/> GitHub <ArrowUpRight/></a></Button></div>
            <div className="hero-location"><MapPin size={13}/> Toronto, Canada <span>·</span> Software / QA / Security</div>
          </div>
          <a href="#playground" className="hero-sticker"><Code2 size={15}/> A LITTLE CODE. A LOT OF CURIOSITY. <ArrowUpRight size={12}/></a>
        </section>
        <div className="quick-facts">
          <div className="fact"><div className="fact-label">CURRENTLY</div><div className="fact-value">Computer Science @ York</div></div>
          <div className="fact"><div className="fact-label">PREVIOUSLY</div><div className="fact-value">QA Automation @ theScore</div></div>
          <div className="fact"><div className="fact-label">CERTIFIED</div><div className="fact-value">ISC2 · Cybersecurity</div></div>
          <div className="fact"><div className="fact-label">ALWAYS</div><div className="fact-value">Building, testing, learning ↗</div></div>
        </div>
        <section className="section" id="projects">
          <div className="section-heading"><div><SectionIndex number="01">SELECTED WORK</SectionIndex><h2>Built with curiosity.</h2><p className="section-subtitle">Real projects. Practical problems. A few experiments along the way.</p></div><div className="filters" role="group" aria-label="Filter projects">{filters.map((f) => <Button variant="filter" key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</Button>)}</div></div>
          <div className="project-grid">{visibleProjects.map((p) => {
            const open = expanded.includes(p.number);
            return <article className="project-card" key={p.number}>
              <ProjectPreview project={p}/>
              <div className="project-body">
                <div className="project-meta"><span>{p.category}</span><span>{p.year}</span></div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <div className="project-footer">
                  <Button variant="quiet" aria-expanded={open} aria-controls={`notes-${p.number}`} onClick={() => setExpanded(open ? expanded.filter((x) => x !== p.number) : [...expanded, p.number])}>{open ? 'Close build notes' : 'Inside the build'} {open ? <X size={13}/> : <ArrowUpRight size={13}/>}</Button>
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}><Github size={13}/> Source code <ArrowUpRight size={12}/></a>}
                </div>
                {open && <ul id={`notes-${p.number}`} className="build-notes">{p.details.map((d) => <li key={d}><Check size={14} className="shrink-0 mt-1 text-primary"/>{d}</li>)}</ul>}
              </div>
            </article>;
          })}</div>
        </section>
      </div>

      <div className="experience-band"><section id="experience" className="portfolio-shell section experience-layout"><div><SectionIndex number="02">EXPERIENCE & EDUCATION</SectionIndex><h2>Build. Test.<br/>Learn. Repeat.</h2><p className="experience-intro">Good software is more than working code. It’s careful investigation, clear communication, and caring about the details.</p><div className="tags"><span className="tag">20+ P1 defects identified</span><span className="tag">20% less manual validation</span></div></div><div>{experience.map((e) => <article className="experience-item" key={e.company}><div className="experience-top"><h3>{e.role}</h3><span className="period">{e.period}</span></div><div className="company">{e.company}</div><p>{e.note}</p><ul>{e.wins.map((w) => <li key={w}><span className="text-primary">↳</span>{w}</li>)}</ul><div className="tags">{e.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div></article>)}</div></section></div>

      <section id="toolkit" className="portfolio-shell section">
        <div className="section-heading"><div><SectionIndex number="03">THE TOOLKIT</SectionIndex><h2>A practical little workbench.</h2><p className="section-subtitle">Technologies I’ve used across projects, coursework, and QA. Click one to see where it shows up.</p></div></div>
        <div className="toolkit-layout">{skillGroups.map((g, i) => { const Icon = [Braces, Layers, Wrench][i]; return <div className="toolkit-group" key={g.label}><h3>{g.label}{Icon && <Icon size={16}/>}</h3><div className="tags">{g.items.map((t) => <button type="button" className="tag tool-chip" key={t} aria-pressed={tool === t} onClick={() => setTool(tool === t ? null : t)}>{t}</button>)}</div></div>; })}</div>
        <div className="tool-panel" role="status" aria-live="polite">
          {tool ? <><span className="tool-cmd">$ whereis {tool.toLowerCase()}</span><br/>→ {toolNotes[tool]}</> : <span>$ select a tool above<span className="terminal-cursor"/></span>}
        </div>
      </section>

      <div className="playground-band"><section id="playground" className="portfolio-shell section playground-layout"><div><SectionIndex number="04">AFTER HOURS / THE PLAYGROUND</SectionIndex><h2>A terminal with personality.</h2><p className="experience-intro">Still curious? There’s a little more about me on the other side of the command line. Try the buttons, or type a command (↑ recalls the last one).</p><div className="command-options">{['about', 'skills', 'projects', 'contact', 'clear'].map((c) => <Button variant="quiet" key={c} onClick={() => execute(c)}>{c}<ArrowUpRight size={12}/></Button>)}</div></div><div className="command-terminal"><WindowBar title="daniel@portfolio — bash"/><div className="command-body"><div className="command-history" role="log" aria-live="polite" ref={historyRef}>{history}</div><form className="command-form" onSubmit={(e) => { e.preventDefault(); execute(command); }}><span>❯</span><input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={onKeyDown} aria-label="Terminal command" placeholder="help" autoComplete="off" spellCheck={false}/><Button variant="quiet" size="icon" type="submit" aria-label="Run command" title="Run command"><Send size={12}/></Button></form></div></div></section></div>

      <div className="portfolio-shell"><section id="contact" className="contact-section"><SectionIndex number="05">NEXT CHAPTER</SectionIndex><h2>Let’s build something good<span className="text-primary">.</span></h2><p>Have an opportunity, an idea, or a really interesting bug? I’m all ears.</p><div className="contact-actions"><Button variant="portfolio" asChild><a href={`mailto:${email}`}><Mail/>{email}<ArrowUpRight/></a></Button><Button variant="quiet" size="icon" aria-label={copied ? 'Email copied' : 'Copy email address'} title={copied ? 'Copied!' : 'Copy email address'} onClick={copyEmail}>{copied ? <Check/> : <Copy/>}</Button></div></section><footer className="site-footer"><span>© 2026 DANIEL TA · BUILT WITH CARE & A LITTLE CURIOSITY</span><a href="#home">BACK TO TOP <ArrowUp size={12}/></a></footer></div>
    </main>
  </>;
}
