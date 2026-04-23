import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.png";
import heroPortrait from "@/assets/hero-portrait.png";
import nehaPhoto from "@/assets/neha-photo.jpeg";
import { Layout } from "@/components/portfolio/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neha Mary Pramod — Portfolio '26" },
      { name: "description", content: "Full Stack Web Developer crafting beautiful, high-performance web applications with modern technologies." },
      { property: "og:title", content: "Neha Mary Pramod — Portfolio '26" },
      { property: "og:description", content: "Full Stack Web Developer crafting beautiful, high-performance web applications." },
    ],
  }),
  component: Index,
});

const traits = [
  { icon: Target, title: "Problem Solver", desc: "Focused on building high-quality, scalable web applications." },
  { icon: Code2, title: "Full Stack Developer", desc: "Expert in modern frontend and backend development." },
  { icon: GraduationCap, title: "Continuous Learner", desc: "Always eager to learn new technologies and best practices." },
  { icon: Users, title: "Team Player", desc: "Love collaborating with teams to create amazing products." },
];

const projects = [
  {
    title: "Point Hub — Activity Points Calculator",
    desc: "A comprehensive web app that automates calculation and approval workflow of student activity points. Certificate uploads, teacher review, admin scoring management — transparent and efficient.",
    tech: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
    github: "https://github.com/nehamary/point-hub",
    demo: "https://point-hub.vercel.app",
  },
  {
    title: "Lumina — Design Portfolio CMS",
    desc: "A headless content system for designers and creatives to publish case studies with cinematic galleries, MDX-powered writing, and lightning-fast page loads.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Vercel"],
    github: "https://github.com/nehamary/lumina",
    demo: "https://lumina-cms.vercel.app",
  },
  {
    title: "Wavelength — Realtime Chat",
    desc: "End-to-end realtime chat with rooms, presence, typing indicators, and a buttery-smooth message virtualization layer for thousands of messages.",
    tech: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    github: "https://github.com/nehamary/wavelength",
    demo: "https://wavelength-chat.vercel.app",
  },
];

const skillGroups = [
  { title: "Frontend Development", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend Development", items: ["Node.js", "Express.js", "Django", "Laravel", "RESTful APIs", "MySQL", "MongoDB", "SQLite"] },
  { title: "Programming Languages", items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C"] },
  { title: "Tools & Technologies", items: ["Git", "GitHub", "VS Code", "Postman", "Composer", "Vercel", "Render"] },
  { title: "Soft Skills", items: ["Communication", "Team Collaboration", "Leadership", "Problem Solving"] },
  { title: "Other", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"] },
];

const certs = [
  "Coding Competition",
  "Backend Frameworks & API Development",
  "No Code / Low Code Workshop",
  "Portfolio Website Building Session",
  "Web Developer Internship",
  "IIT Guwahati Campus Immersion Programme",
  "IEEE YESS '24",
  "GDGC Day 2025",
  "MERN Stack Course",
];

const achievements = [
  { title: "Basketball Player", level: "State Level", desc: "Achieved 4th place at State Level representing the district." },
  { title: "Dancer", level: "State Level", desc: "Achieved 3rd place at State Level Dance Competition." },
];

const channels = [
  { icon: Mail, label: "Email", value: "hello@nehamary.dev", href: "mailto:hello@nehamary.dev", desc: "Get in touch via email" },
  { icon: Linkedin, label: "LinkedIn", value: "neha-mary-pramod", href: "https://linkedin.com", desc: "Connect with me professionally" },
  { icon: Github, label: "GitHub", value: "nehamary", href: "https://github.com", desc: "Check out my code on GitHub" },
];

function Index() {
  const PAGE_SIZE = 9;
  const [certPage, setCertPage] = useState(0);
  const certPageCount = Math.max(1, Math.ceil(certs.length / PAGE_SIZE));
  const visibleCerts = certs.slice(certPage * PAGE_SIZE, certPage * PAGE_SIZE + PAGE_SIZE);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{ backgroundColor: "#f1e7df" }}
      >
        {/* Full-bleed hero artwork — image is the section, not an inserted card */}
        <div className="w-full">
          {/* Desktop / large screens: landscape composition */}
          <img
            src={heroLandscape}
            alt="Portfolio '26 — Neha Mary Pramod"
            className="hidden md:block w-full h-auto select-none"
            loading="eager"
          />
          {/* Mobile / tablet: portrait composition */}
          <img
            src={heroPortrait}
            alt="Portfolio '26 — Neha Mary Pramod"
            className="block md:hidden w-full h-auto select-none"
            loading="eager"
          />
        </div>

        {/* Intro block */}
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-secondary-foreground">
                Welcome to my portfolio
              </span>
              <h2 className="mt-4 text-5xl md:text-7xl font-display leading-[0.95]">
                Hi, I'm <span className="italic font-light text-[var(--brand-rose)]">Neha</span>
                <br />
                Mary Pramod.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Full Stack Web Developer. I craft beautiful, high-performance
                web applications with modern technologies — turning ideas into
                elegant digital solutions with clean code and exceptional design.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-card)]"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground/20 text-sm font-semibold hover:bg-secondary transition"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-foreground hover:gap-3 transition-all"
                >
                  See projects <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { k: "3+", v: "Years building for the web" },
                { k: "20+", v: "Projects shipped end-to-end" },
                { k: "10+", v: "Modern technologies mastered" },
              ].map((s) => (
                <div key={s.v} className="flex items-baseline gap-4 p-5 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)]">
                  <span className="font-display text-4xl text-foreground">{s.k}</span>
                  <span className="text-sm text-muted-foreground">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">About</p>
          <h2 className="mt-2 text-5xl md:text-6xl font-display">Get to know me better.</h2>

          {/* ID card on left (all screens) — bio + traits on right */}
          <div className="mt-12 grid grid-cols-[180px_1fr] sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr] gap-5 sm:gap-8 items-start">
            {/* ID Card */}
            <div className="relative w-full max-w-[280px] flex flex-col">
              <div className="mx-auto h-10 w-1.5 bg-foreground/70 rounded-b-sm" aria-hidden />
              <div className="mx-auto -mt-1 h-3 w-10 rounded-md bg-foreground/80 shadow-sm" aria-hidden />
              <div className="mt-2 flex-1 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-soft)] overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-4 py-2 bg-foreground text-background">
                  <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">Portfolio · 2026</span>
                  <span className="text-[9px] sm:text-[10px] font-mono opacity-80">ID 026</span>
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-secondary">
                    <img
                      src={nehaPhoto}
                      alt="Neha Mary Pramod portrait"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Name</p>
                    <p className="font-display text-base sm:text-lg leading-tight">Neha Mary Pramod</p>
                    <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Role</p>
                    <p className="text-xs sm:text-sm">Full Stack Developer</p>
                  </div>
                  <div className="mt-auto pt-3 mx-1">
                    <div className="h-6 rounded bg-[repeating-linear-gradient(90deg,var(--foreground)_0_2px,transparent_2px_5px)] opacity-80" aria-hidden />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: bio paragraphs + trait cards */}
            <div className="flex flex-col gap-8">
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack web developer with a strong interest in
                  creating intuitive and impactful digital experiences. I thrive on
                  building applications that are not only visually appealing but also
                  efficient and user-friendly.
                </p>
                <p>
                  My journey in web development began with curiosity and has grown
                  into a commitment to continuous learning. I stay updated with the
                  latest technologies and best practices in the ever-evolving tech
                  landscape.
                </p>
                <p>
                  Beyond code, I'm driven by collaboration, knowledge sharing, and
                  tackling challenges that push me to grow both technically and
                  creatively.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {traits.map((t) => (
                  <div
                    key={t.title}
                    className="p-4 sm:p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)] flex flex-col"
                  >
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-secondary flex items-center justify-center">
                      <t.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                    </div>
                    <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-xl">{t.title}</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Selected work</p>
          <h2 className="mt-2 text-5xl md:text-6xl font-display">My Projects.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Showcasing innovative solutions and web applications I've built end-to-end.
          </p>

          <div className="mt-12 space-y-6">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="group p-7 md:p-9 rounded-3xl bg-card border border-border/60 hover:border-foreground/40 transition shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="mt-4 text-muted-foreground max-w-3xl">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-sm font-semibold hover:bg-secondary transition"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Toolkit</p>
          <h2 className="mt-2 text-5xl md:text-6xl font-display">Skills & Technologies.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical expertise and capabilities.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {skillGroups.map((g) => (
              <div key={g.title} className="p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Recognition</p>
              <h2 className="mt-2 text-5xl md:text-6xl font-display">Certificates.</h2>
            </div>
            {certPageCount > 1 && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-mono">
                  {certPage + 1} / {certPageCount}
                </span>
                <button
                  type="button"
                  aria-label="Previous certificates"
                  onClick={() => setCertPage((p) => Math.max(0, p - 1))}
                  disabled={certPage === 0}
                  className="h-11 w-11 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-secondary transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next certificates"
                  onClick={() => setCertPage((p) => Math.min(certPageCount - 1, p + 1))}
                  disabled={certPage >= certPageCount - 1}
                  className="h-11 w-11 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleCerts.map((c) => (
              <div key={c} className="p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)] flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold leading-snug">{c}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Click to view</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Beyond code</p>
            <h3 className="mt-2 text-4xl md:text-5xl font-display">Achievements.</h3>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {achievements.map((a) => (
                <div key={a.title} className="p-7 rounded-2xl bg-foreground text-background shadow-[var(--shadow-soft)]">
                  <span className="text-xs uppercase tracking-widest opacity-70">{a.level}</span>
                  <h4 className="mt-2 font-display text-2xl">{a.title}</h4>
                  <p className="mt-3 opacity-80">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 border-t border-border/60">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Say hello</p>
          <h2 className="mt-2 text-5xl md:text-6xl font-display">Let's connect.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            I'm always interested in hearing about new projects and opportunities.
            Drop a line — I'll get back to you within a day or two.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group p-7 rounded-3xl bg-card border border-border/60 hover:border-foreground/40 transition shadow-[var(--shadow-card)]"
              >
                <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{c.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <p className="mt-4 text-foreground font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {c.value} <ArrowRight className="h-4 w-4" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
