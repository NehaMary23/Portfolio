import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import resumePdf from "@/assets/Neha_Resume.pdf";
import {
  SiNextdotjs,
  SiReact,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Target,
  Users,
  X,
} from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.png";
import heroPortrait from "@/assets/hero-portrait.png";
import nehaPhoto from "@/assets/neha-photo.jpeg";
import { Layout } from "@/components/portfolio/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neha Mary Pramod — Portfolio '26" },
      {
        name: "description",
        content:
          "Full Stack Web Developer crafting beautiful, high-performance web applications with modern technologies.",
      },
      { property: "og:title", content: "Neha Mary Pramod — Portfolio '26" },
      {
        property: "og:description",
        content: "Full Stack Web Developer crafting beautiful, high-performance web applications.",
      },
    ],
  }),
  component: Index,
});

/* ─── Intersection-observer hook ─── */
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── Animated wrapper ─── */
function Reveal({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right" | "top";
}) {
  const { ref, inView } = useInView();
  const translateMap = {
    bottom: "translateY(40px)",
    top: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : translateMap[from],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const traits = [
  {
    icon: Target,
    title: "Problem Solver",
    desc: "Focused on building high-quality, scalable web applications.",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    desc: "Expert in modern frontend and backend development.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    desc: "Always eager to learn new technologies and best practices.",
  },
  {
    icon: Users,
    title: "Team Player",
    desc: "Love collaborating with teams to create amazing products.",
  },
];

/* ─── Project color themes ─── */
const projectColor = {
  border: "#e879a0",
  numBg: "#fbeaf0",
  numText: "#72243e",
  tagBg: "#fbeaf0",
  tagText: "#993556",
  glowBg: "rgba(232,121,160,0.10)",
};

type ProjectColorKey = keyof typeof projectColor;

const projects: {
  title: string;
  desc: string;
  tech: string[];
  demo?: string;
  github?: string;
}[] = [
  {
    title: "Point Hub — Activity Points Calculator",
    desc: "A comprehensive web application that automates the calculation and approval workflow of student activity points. Features include certificate upload functionality, teacher review and approval system, and admin management of categories and scoring, ensuring transparency and efficiency.",
    tech: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
    demo: "https://activity-points-calculator.vercel.app/",
  },
  {
    title: "Period Tracker App",
    desc: "A full-stack health application for tracking menstrual cycles, period history, and ovulation predictions along with google calendar integration. Built with secure authentication, an intuitive dashboard, and personalized health insights to help users monitor their reproductive health.",
    tech: [
      "Next.js",
      "TypeScript",
      "Django",
      "Tailwind CSS",
      "SQLite(Dev)",
      "PostgreSQL(Prod)",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/NehaMary23/Period-Tracker",
    demo: "https://period-tracker-zeta.vercel.app",
  },
  {
    title: "Blog Post Application",
    desc: "My first CRUD application allowing users to create, read, update, and delete blog posts. Features include secure user authentication, personalized post management, advanced search functionality, and image upload capabilities.",
    tech: ["PHP", "Laravel", "Blade", "Composer", "SQLite", "Tailwind CSS", "Vite", "Render"],
    github: "https://github.com/NehaMary23/Blog-Post-App",
    demo: "https://blog-post-app-vced.onrender.com/",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "Laravel",
      "RESTful APIs",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code", "Postman", "Composer", "Vercel", "Render"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Team Collaboration", "Leadership", "Problem Solving"],
  },
  {
    title: "Other",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"],
  },
];

import certificate1 from "@/assets/certificates/certificate1.jpeg";
import certificate2 from "@/assets/certificates/certificate2.jpeg";
import certificate3 from "@/assets/certificates/certificate3.jpeg";
import certificate4 from "@/assets/certificates/certificate4.jpeg";
import certificate5 from "@/assets/certificates/certificate5.jpeg";
import certificate6 from "@/assets/certificates/certificate6.jpeg";
import certificate7 from "@/assets/certificates/certificate7.jpeg";
import certificate8 from "@/assets/certificates/certificate8.jpeg";
import certificate9 from "@/assets/certificates/certificate9.jpeg";
import certificate10 from "@/assets/certificates/certificate10.jpeg";
import certificate11 from "@/assets/certificates/certificate11.jpeg";
import certificate12 from "@/assets/certificates/certificate12.jpeg";
import certificate13 from "@/assets/certificates/certificate13.jpeg";
import certificate14 from "@/assets/certificates/certificate14.jpeg";
const certs = [
  { name: "Web Developer Internship", image: certificate1 },
  { name: "IIT Guwahati Campus Immersion Programme", image: certificate2 },
  { name: "Backend Frameworks & API Development Course", image: certificate3 },
  { name: "MERN Stack Course", image: certificate4 },
  { name: "Coding Competition", image: certificate5 },
  { name: "No Code / Low Code Workshop", image: certificate6 },
  { name: "Portfolio Website Building Session", image: certificate7 },
  { name: "IEEE YESS '24", image: certificate8 },
  { name: "GDGC Day 2025", image: certificate9 },
  { name: "College Interzone Basketball Championship", image: certificate10 },
  { name: "Sub-Junior State Basketball Championship(4th Position)", image: certificate11 },
  { name: "CBSE State Kalolsav-Group Dance(3rd Place)", image: certificate12 },
  { name: "A1 in All Subjects (12th Grade)", image: certificate13 },
  { name: "Uma Thomas MLA Excellence Award (12th Grade)", image: certificate14 },
];

import b1 from "@/assets/basketball/img1.jpeg";
import b2 from "@/assets/basketball/img2.jpeg";
import b3 from "@/assets/basketball/img3.jpeg";
import b4 from "@/assets/basketball/img4.jpeg";
import b5 from "@/assets/basketball/img5.jpeg";
import b6 from "@/assets/basketball/img6.jpeg";
import b7 from "@/assets/basketball/img7.jpeg";
import b8 from "@/assets/basketball/img8.jpeg";
import b9 from "@/assets/basketball/img9.jpeg";
import b10 from "@/assets/basketball/img10.jpeg";
import b11 from "@/assets/basketball/img11.jpeg";
import b12 from "@/assets/basketball/img12.jpeg";
import b13 from "@/assets/basketball/img13.jpeg";
import b14 from "@/assets/basketball/img14.jpeg";
import b15 from "@/assets/basketball/img15.jpeg";
import b16 from "@/assets/basketball/img16.jpeg";
import b17 from "@/assets/basketball/img17.jpeg";
import b18 from "@/assets/basketball/img18.jpeg";
import d1 from "@/assets/dance/img1.jpeg";
import d2 from "@/assets/dance/img2.jpeg";
import d3 from "@/assets/dance/img3.jpeg";
import d4 from "@/assets/dance/img4.jpeg";
import d5 from "@/assets/dance/img5.jpeg";
import d6 from "@/assets/dance/img6.jpeg";
import d7 from "@/assets/dance/img7.jpeg";
import d8 from "@/assets/dance/img8.jpeg";
import d9 from "@/assets/dance/img9.jpeg";
import d10 from "@/assets/dance/img10.jpeg";
import d11 from "@/assets/dance/img11.jpeg";
import d12 from "@/assets/dance/img12.jpeg";
import d13 from "@/assets/dance/img13.jpeg";
import d14 from "@/assets/dance/img14.jpeg";
import d15 from "@/assets/dance/img15.jpeg";
import d16 from "@/assets/dance/img16.jpeg";
import d17 from "@/assets/dance/img17.jpeg";
import d18 from "@/assets/dance/img18.jpeg";
import d19 from "@/assets/dance/img19.jpeg";
import d20 from "@/assets/dance/img20.jpeg";

const achievements = [
  {
    title: "Basketball Player",
    level: "State Level",
    desc: "Achieved 4th place at State Level representing the Ernakulam district.",
    images: [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18],
  },
  {
    title: "Dancer",
    level: "State Level",
    desc: "Achieved 3rd place at State Level Dance Competition.",
    images: [
      d1,
      d2,
      d3,
      d4,
      d5,
      d6,
      d7,
      d8,
      d9,
      d10,
      d11,
      d12,
      d13,
      d14,
      d15,
      d16,
      d17,
      d18,
      d19,
      d20,
    ],
  },
];

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "nehapramo05@gmail.com",
    href: "mailto:nehapramo05@gmail.com",
    desc: "Get in touch via email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "neha-mary-pramod",
    href: "https://www.linkedin.com/in/neha-mary-pramod/",
    desc: "Connect with me professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "NehaMary23",
    href: "https://github.com/NehaMary23",
    desc: "Check out my code on GitHub",
  },
];

/* ─── Global styles ─── */
const STYLES = `
  @keyframes fadeSlideUp {
    from { opacity:0; transform:translateY(32px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes scaleIn {
    from { opacity:0; transform:scale(0.92); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes slideInRight {
    from { opacity:0; transform:translateX(60px) scale(0.97); }
    to   { opacity:1; transform:translateX(0) scale(1); }
  }
  @keyframes slideInLeft {
    from { opacity:0; transform:translateX(-60px) scale(0.97); }
    to   { opacity:1; transform:translateX(0) scale(1); }
  }
  @keyframes bounceIn {
    0%   { opacity:0; transform:scale(0.7); }
    60%  { opacity:1; transform:scale(1.06); }
    80%  { transform:scale(0.97); }
    100% { transform:scale(1); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes pulseRing {
    0%   { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  @keyframes borderRun {
    0%   { background-position: 0% 0%; }
    100% { background-position: 300% 0%; }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Hero entrance */
  .hero-img   { animation: fadeIn 1.1s cubic-bezier(0.16,1,0.3,1) both; }
  .hero-badge { animation: fadeSlideUp 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
  .hero-h2    { animation: fadeSlideUp 0.8s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
  .hero-p     { animation: fadeSlideUp 0.8s 0.6s cubic-bezier(0.16,1,0.3,1) both; }
  .hero-btns  { animation: fadeSlideUp 0.8s 0.75s cubic-bezier(0.16,1,0.3,1) both; }
  .hero-tech  { animation: slideInRight 0.85s 0.9s cubic-bezier(0.16,1,0.3,1) both; }

  /* Tech pill hover */
  .tech-pill {
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.25s ease,
                border-color 0.2s ease;
  }
  .tech-pill:hover {
    transform: translateY(-4px) scale(1.06);
    box-shadow: 0 20px 60px rgba(139, 67, 67, 0.13);
  }
  .tech-pill:hover svg { animation: spinSlow 1.2s linear infinite; }

  /* ID card float */
  .id-card { animation: floatY 5s ease-in-out infinite; }

  /* Project card */
  .project-card {
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                box-shadow 0.35s ease;
  }
  .project-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 60px rgba(139, 67, 67, 0.13);
    
  }
  .project-card:hover .proj-arrow {
    transform: translate(4px,-4px);
  }
  .proj-arrow { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }

  /* Project number badge pulse on card hover */
  .project-card:hover .proj-num {
    animation: bounceIn 0.45s cubic-bezier(0.34,1.56,0.64,1);
  }

  /* Animated left border on project card hover */
  .project-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    border-radius: 99px 0 0 99px;
    background: var(--proj-accent, transparent);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
  }
  .project-card:hover::before { transform: scaleY(1); }

  /* Skill card */
  .skill-card {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.3s ease;
  }
  .skill-card:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 60px rgba(139, 67, 67, 0.13); }

  /* Skill tag */
  .skill-tag {
    transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1),
                background 0.2s ease;
    display: inline-block;
  }
  .skill-tag:hover { transform: scale(1.1) rotate(-1deg); background: var(--foreground); color: var(--background); }

  /* Cert card */
  .cert-card {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.3s ease,
                border-color 0.2s ease;
  }
  .cert-card:hover { transform: translateY(-5px) scale(1.03); box-shadow: 0 12px 36px rgba(0,0,0,0.12); }

  /* Achievement card */
  .achieve-card {
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                opacity 0.2s ease,
                box-shadow 0.35s ease;
  }
  .achieve-card:hover { transform: translateY(-7px) scale(1.02); box-shadow: 0 24px 64px rgba(0,0,0,0.18); }

  /* Contact card */
  .contact-card {
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.35s ease,
                border-color 0.2s ease;
  }
  .contact-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 56px rgba(0,0,0,0.13); }

  /* Contact icon ring pulse */
  .contact-card:hover .contact-icon-ring {
    animation: pulseRing 0.7s ease-out forwards;
  }

  /* Trait card */
  .trait-card {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.3s ease;
  }
  .trait-card:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .trait-card:hover .trait-icon { animation: bounceIn 0.5s cubic-bezier(0.34,1.56,0.64,1); }

  /* Lightbox */
  .lightbox-overlay { animation: fadeIn 0.25s ease both; }
  .lightbox-panel   { animation: scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }

  /* Cert lightbox */
  .cert-lightbox-img { animation: scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }

  /* Gallery image swap */
  .gallery-img { animation: fadeIn 0.3s ease both; }

  /* Thumbnail */
  .thumb-btn { transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease; }
  .thumb-btn:hover { transform: scale(1.08); }

  /* Section headings shimmer on hover */
  .section-title {
    display: inline-block;
    transition: background-position 0.6s ease;
    background: linear-gradient(90deg, var(--foreground) 40%, var(--brand-rose, #e879a0) 50%, var(--foreground) 60%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .section-title:hover {
    background-position: right center;
    animation: shimmer 1.2s linear;
  }

  /* CTA button */
  .cta-primary {
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, opacity 0.2s ease;
  }
  .cta-primary:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
  .cta-secondary {
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.2s ease;
  }
  .cta-secondary:hover { transform: translateY(-2px) scale(1.03); }

  /* Nav arrow buttons */
  .nav-btn { transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease; }
  .nav-btn:hover:not(:disabled) { transform: scale(1.12); }
  .nav-btn:active:not(:disabled) { transform: scale(0.95); }

  /* About photo hover */
  .about-photo { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
  .id-card-wrap:hover .about-photo { transform: scale(1.04); }

  /* Sticky ID card column */
  .id-card-sticky { position: sticky; top: 7rem; }
`;

function StyleTag() {
  return <style dangerouslySetInnerHTML={{ __html: STYLES }} />;
}

function Index() {
  const PAGE_SIZE = 6;
  const [certPage, setCertPage] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryKey, setGalleryKey] = useState(0);
  const certPageCount = Math.max(1, Math.ceil(certs.length / PAGE_SIZE));
  const visibleCerts = certs.slice(certPage * PAGE_SIZE, certPage * PAGE_SIZE + PAGE_SIZE);
  const [openAchievement, setOpenAchievement] = useState<null | (typeof achievements)[number]>(
    null,
  );
  const [openCert, setOpenCert] = useState<null | (typeof certs)[number]>(null);

  const changeGallery = (idx: number) => {
    setGalleryIndex(idx);
    setGalleryKey((k) => k + 1);
  };

  return (
    <Layout>
      <StyleTag />

      {/* ── HERO ── */}
      <section id="home" className="relative overflow-hidden bg-secondary/50">
        <div className="w-full hero-img">
          <img
            src={heroLandscape}
            alt="Portfolio '26 — Neha Mary Pramod"
            className="hidden md:block w-full h-auto select-none"
            loading="eager"
          />
          <img
            src={heroPortrait}
            alt="Portfolio '26 — Neha Mary Pramod"
            className="block md:hidden w-full h-auto select-none"
            loading="eager"
          />
        </div>

        <div className="mx-auto max-w-6xl px-3 pt-12 pb-16">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <div>
              <span className="hero-badge inline-block px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-secondary-foreground">
                Welcome to my portfolio
              </span>
              <h2
                className="hero-h2 mt-4 font-display leading-[0.95]"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
              >
                Hi, I'm <span className="italic font-light text-[var(--brand-rose)]">Neha</span>
                <br />
                Mary Pramod.
              </h2>
              <p className="hero-p mt-5 text-lg text-muted-foreground max-w-xl">
                Full Stack Web Developer. I craft beautiful, high-performance web applications with
                modern technologies — turning ideas into elegant digital solutions with clean code
                and exceptional design.
              </p>
              <div className="hero-btns mt-7 flex flex-wrap gap-3">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold shadow-[var(--shadow-card)]"
                >
                  <Download className="h-4 w-4" /> View Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/neha-mary-pramod/"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-secondary inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground/20 text-sm font-semibold hover:bg-secondary transition"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="#projects"
                  className="cta-secondary hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-foreground"
                >
                  See projects <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="hero-tech flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                My Go-To Technologies
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: SiNextdotjs, name: "Next.js" },
                  { icon: SiReact, name: "React" },
                  { icon: SiDjango, name: "Django" },
                  { icon: SiNodedotjs, name: "Node.js" },
                  { icon: SiExpress, name: "Express" },
                  { icon: SiTailwindcss, name: "Tailwind" },
                  { icon: SiMongodb, name: "MongoDB" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-pill group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/60 shadow-[var(--shadow-card)]"
                  >
                    <tech.icon className="h-5 w-5 text-foreground shrink-0" />
                    <span className="text-sm text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="scroll-mt-24 relative">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, var(--brand-rose-soft) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl md:text-6xl font-display">
              Get to know me better.
            </h2>
          </Reveal>

          {/* ── Layout: sticky ID card + scrolling bio/traits ── */}
          <div className="mt-12">
            {/* md+: two-column — ID card left, [bio + traits] right
      small: stacked — ID centered, bio below, traits below */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-5 md:gap-8">
              {/* ID card — centered on small, fixed-width left on md+ */}
              <Reveal
                from="left"
                className="w-full flex justify-center md:justify-start md:w-auto shrink-0"
              >
                <div className="id-card-sticky w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[280px] flex flex-col">
                  <div className="mx-auto h-10 w-1.5 bg-foreground/70 rounded-b-sm" aria-hidden />
                  <div
                    className="mx-auto -mt-1 h-3 w-10 rounded-md bg-foreground/80 shadow-sm"
                    aria-hidden
                  />
                  <div className="id-card id-card-wrap mt-2 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-soft)] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 bg-foreground text-background">
                      <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">
                        Portfolio · 2026
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono opacity-80">ID 005</span>
                    </div>
                    <div className="p-3 flex-1 flex flex-col">
                      <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-secondary">
                        <img
                          src={nehaPhoto}
                          alt="Neha Mary Pramod portrait"
                          className="about-photo w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-3 px-1">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          Name
                        </p>
                        <p className="font-display text-base sm:text-lg leading-tight">
                          Neha Mary Pramod
                        </p>
                        <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                          Role
                        </p>
                        <p className="text-xs sm:text-sm">Full Stack Developer</p>
                      </div>
                      <div className="mt-5 w-full px-2">
                        <div
                          className="h-8 w-full rounded bg-[repeating-linear-gradient(90deg,var(--foreground)_0_2px,transparent_2px_4px,var(--foreground)_4px_5px,transparent_5px_8px,var(--foreground)_8px_9px,transparent_9px_13px)] opacity-80"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right column: bio + traits stacked — hidden on small, shown md+ */}
              <div className="hidden md:flex flex-1 flex-col gap-6 min-w-0">
                {/* Bio */}
                <Reveal
                  delay={120}
                  className="space-y-4 text-base lg:text-lg text-muted-foreground leading-relaxed"
                >
                  <p>
                    I'm a passionate full-stack web developer with a strong interest in creating
                    intuitive and impactful digital experiences. I thrive on building applications
                    that are not only visually appealing but also efficient and user-friendly.
                  </p>
                  <p>
                    My journey in web development began with curiosity and has grown into a
                    commitment to continuous learning. I stay updated with the latest technologies
                    and best practices in the ever-evolving tech landscape.
                  </p>
                  <p>
                    Beyond code, I'm driven by collaboration, knowledge sharing, and tackling
                    challenges that push me to grow both technically and creatively.
                  </p>
                </Reveal>

                {/* Traits — 2 cols on md, 4 cols on lg */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {traits.map((t, i) => (
                    <Reveal key={t.title} delay={180 + i * 80}>
                      <div className="trait-card h-full p-4 sm:p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)] flex flex-col">
                        <div className="trait-icon h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-secondary flex items-center justify-center">
                          <t.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                        </div>
                        <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-xl">
                          {t.title}
                        </h3>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                          {t.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Small only: bio + traits stacked below ID card */}
            <div className="md:hidden mt-6 flex flex-col gap-6">
              <Reveal
                delay={120}
                className="space-y-4 text-base text-muted-foreground leading-relaxed"
              >
                <p>
                  I'm a passionate full-stack web developer with a strong interest in creating
                  intuitive and impactful digital experiences. I thrive on building applications
                  that are not only visually appealing but also efficient and user-friendly.
                </p>
                <p>
                  My journey in web development began with curiosity and has grown into a commitment
                  to continuous learning. I stay updated with the latest technologies and best
                  practices in the ever-evolving tech landscape.
                </p>
                <p>
                  Beyond code, I'm driven by collaboration, knowledge sharing, and tackling
                  challenges that push me to grow both technically and creatively.
                </p>
              </Reveal>

              <div className="grid grid-cols-2 gap-3">
                {traits.map((t, i) => (
                  <Reveal key={t.title} delay={180 + i * 80}>
                    <div className="trait-card h-full p-4 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)] flex flex-col">
                      <div className="trait-icon h-9 w-9 rounded-xl bg-secondary flex items-center justify-center">
                        <t.icon className="h-4 w-4 text-foreground" />
                      </div>
                      <h3 className="mt-3 font-display text-base">{t.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="scroll-mt-24 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Selected work</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl md:text-6xl font-display">
              My Projects.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Showcasing innovative solutions and web applications I've built end-to-end.
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {projects.map((p, i) => {
              const col = projectColor;
              return (
                <Reveal key={p.title} delay={i * 100}>
                  <div
                    className="project-card group relative p-7 md:p-9 rounded-3xl bg-card shadow-[var(--shadow-card)] overflow-hidden"
                    style={
                      {
                        border: `0.5px solid ${col.border}40`,
                        "--proj-accent": col.border,
                      } as React.CSSProperties
                    }
                  >
                    {/* subtle tinted bg wash */}
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: col.glowBg }}
                      aria-hidden
                    />

                    {(p.demo ?? p.github) && (
                      <a
                        href={p.demo ?? p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0 z-0 rounded-3xl"
                        aria-label={`Open ${p.title}`}
                      />
                    )}

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        {/* colored number badge */}
                        <span
                          className="proj-num inline-block text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full mb-2"
                          style={{ background: col.numBg, color: col.numText }}
                        >
                          0{i + 1}
                        </span>
                        <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                      </div>
                      <ArrowUpRight className="proj-arrow h-6 w-6 text-muted-foreground group-hover:text-foreground shrink-0 mt-1" />
                    </div>

                    <p className="relative mt-4 text-muted-foreground max-w-3xl">{p.desc}</p>

                    {/* colored tech tags */}
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="skill-tag px-3 py-1 text-xs font-medium rounded-full"
                          style={{ background: col.tagBg, color: col.tagText }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-6 z-10 flex flex-wrap gap-3">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="cta-secondary inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-sm font-semibold hover:bg-secondary transition"
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="cta-primary inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="scroll-mt-24 relative">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 0% 100%, var(--brand-rose-soft) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Toolkit</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl md:text-6xl font-display">
              Skills & Technologies.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical expertise and capabilities.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 70}>
                <div className="skill-card h-full p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-xl">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="skill-tag px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section id="certificates" className="scroll-mt-24 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          {/* Heading */}
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Recognition</p>
              <h2 className="section-title mt-2 text-4xl sm:text-5xl md:text-6xl font-display">
                Certificates.
              </h2>
            </div>
          </Reveal>

          {/* Pagination — always right-aligned, below heading if needed */}
          {certPageCount > 1 && (
            <Reveal delay={100}>
              <div className="flex justify-end items-center gap-3 mt-4">
                <span className="text-sm text-muted-foreground font-mono">
                  {certPage + 1} / {certPageCount}
                </span>
                <button
                  type="button"
                  aria-label="Previous certificates"
                  onClick={() => setCertPage((p) => Math.max(0, p - 1))}
                  disabled={certPage === 0}
                  className="nav-btn h-11 w-11 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-secondary transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next certificates"
                  onClick={() => setCertPage((p) => Math.min(certPageCount - 1, p + 1))}
                  disabled={certPage >= certPageCount - 1}
                  className="nav-btn h-11 w-11 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </Reveal>
          )}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-stretch">
            {visibleCerts.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <div
                  onClick={() => setOpenCert(c)}
                  className="cert-card h-full cursor-pointer p-3 sm:p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)] flex flex-col sm:flex-row gap-2 sm:gap-4 items-start"
                >
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-base font-semibold leading-snug">{c.name}</h3>
                    <p className="mt-1 text-[10px] sm:text-xs text-muted-foreground">
                      Click to view
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" className="scroll-mt-24 relative bg-secondary/50">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, var(--brand-rose-soft) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Beyond code</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl md:text-6xl font-display">
              Achievements.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              More than just code — a journey shaped by passion, discipline, and achievements beyond
              the screen.
            </p>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-5 items-stretch">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 120}>
                <button
                  type="button"
                  onClick={() => {
                    setOpenAchievement(a);
                    setGalleryIndex(0);
                    setGalleryKey(0);
                  }}
                  className="achieve-card group text-left w-full h-full p-7 rounded-2xl bg-foreground text-background shadow-[var(--shadow-soft)] relative overflow-hidden flex flex-col justify-between"
                >
                  <span className="text-xs uppercase tracking-widest opacity-70">{a.level}</span>
                  <h4 className="mt-2 font-display text-2xl">{a.title}</h4>
                  <p className="mt-3 opacity-80">{a.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold opacity-80 group-hover:opacity-100 group-hover:gap-2 transition-all">
                    View photos <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="scroll-mt-24 relative bg-secondary/50">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, var(--brand-rose-soft) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Say hello</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title mt-2 text-4xl sm:text-5xl md:text-6xl font-display">
              Let's connect.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Got an idea, project, or opportunity? Let's connect and bring it to life — I'm just
              one message away.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5 items-stretch">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 90} className="h-full">
                <a
                  href={c.href}
                  onClick={(e) => {
                    if (c.label !== "Email") return;
                    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
                    if (!isMobile) {
                      e.preventDefault();
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=nehapramo05@gmail.com",
                        "_blank",
                      );
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card group block h-full p-7 rounded-3xl bg-card border border-border/60 shadow-[var(--shadow-card)]"
                >
                  {/* icon with pulse ring on hover */}
                  <div className="relative h-11 w-11">
                    <div className="contact-icon-ring absolute inset-0 rounded-xl bg-secondary opacity-0" />
                    <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center">
                      <c.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl">{c.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  <p className="mt-4 text-foreground font-medium flex items-center gap-1 group-hover:gap-2 transition-all min-w-0">
                    <span className="truncate">{c.value}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENT LIGHTBOX ── */}
      {openAchievement && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openAchievement.title}
          className="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
          onClick={() => {
            setOpenAchievement(null);
            setGalleryIndex(0);
          }}
        >
          <div
            className="lightbox-panel relative max-w-3xl w-full rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-soft)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => {
                setOpenAchievement(null);
                setGalleryIndex(0);
              }}
              className="nav-btn absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow"
            >
              <X className="h-4 w-4" />
            </button>

            <img
              key={galleryKey}
              src={openAchievement.images[galleryIndex]}
              alt={`${openAchievement.title} ${galleryIndex + 1}`}
              className="gallery-img w-full max-h-[65vh] object-contain bg-secondary"
            />

            {openAchievement.images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => changeGallery(Math.max(0, galleryIndex - 1))}
                  disabled={galleryIndex === 0}
                  className="nav-btn absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() =>
                    changeGallery(Math.min(openAchievement.images.length - 1, galleryIndex + 1))
                  }
                  disabled={galleryIndex === openAchievement.images.length - 1}
                  className="nav-btn absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow disabled:opacity-30"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            {openAchievement.images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto bg-secondary/50">
                {openAchievement.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => changeGallery(i)}
                    className={`thumb-btn shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2 transition ${i === galleryIndex ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── CERT LIGHTBOX ── */}
      {openCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openCert.name}
          className="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
          onClick={() => setOpenCert(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenCert(null)}
              className="nav-btn absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={openCert.image}
              alt={openCert.name}
              className="cert-lightbox-img w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
