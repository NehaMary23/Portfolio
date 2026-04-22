import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  Download,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Target,
  Users,
} from "lucide-react";
import character from "@/assets/neha-character.png";
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
  },
  {
    title: "Lumina — Design Portfolio CMS",
    desc: "A headless content system for designers and creatives to publish case studies with cinematic galleries, MDX-powered writing, and lightning-fast page loads.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Vercel"],
  },
  {
    title: "Wavelength — Realtime Chat",
    desc: "End-to-end realtime chat with rooms, presence, typing indicators, and a buttery-smooth message virtualization layer for thousands of messages.",
    tech: ["React", "Socket.io", "Node.js", "PostgreSQL"],
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
  return (
    <Layout>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-background"
      >
        <div className="mx-auto max-w-6xl px-6 pt-6 pb-12 md:pt-10 md:pb-16">
          <div className="relative h-[420px] sm:h-[520px] md:h-[640px] lg:h-[700px]">
            {/* Vertical side label */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left tracking-[0.4em] text-[10px] md:text-xs uppercase text-muted-foreground/70 select-none">
              Neha Mary Pramod · 26
            </div>

            {/* Massive PORTFOLIO typography behind */}
            <h1
              aria-label="Portfolio 2026"
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display leading-[0.85] text-foreground select-none"
              style={{ fontSize: "clamp(5rem, 22vw, 18rem)", letterSpacing: "-0.04em" }}
            >
              PORTFOLIO
            </h1>

            {/* Year mark */}
            <span
              className="absolute right-2 md:right-6 top-2 md:top-6 font-display text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.75rem)" }}
            >
              '26
            </span>

            {/* Character cutout, floats above typography */}
            <img
              src={character}
              alt="Illustrated portrait of Neha Mary Pramod"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[95%] w-auto object-contain drop-shadow-[0_30px_40px_oklch(0.18_0.02_60_/_0.18)]"
              loading="eager"
            />
          </div>

          {/* Intro block */}
          <div className="mt-10 grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
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

          <div className="mt-12 grid md:grid-cols-[300px_1fr] gap-10 items-start">
            {/* ID Card */}
            <div className="relative mx-auto w-[280px]">
              <div className="mx-auto h-10 w-1.5 bg-foreground/70 rounded-b-sm" aria-hidden />
              <div className="mx-auto -mt-1 h-3 w-10 rounded-md bg-foreground/80 shadow-sm" aria-hidden />
              <div className="mt-2 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-soft)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-foreground text-background">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Portfolio · 2026</span>
                  <span className="text-[10px] font-mono opacity-80">ID 026</span>
                </div>
                <div className="p-3">
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
                    <p className="font-display text-lg leading-tight">Neha Mary Pramod</p>
                    <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Role</p>
                    <p className="text-sm">Full Stack Developer</p>
                  </div>
                  <div className="mt-3 mx-1 h-6 rounded bg-[repeating-linear-gradient(90deg,var(--foreground)_0_2px,transparent_2px_5px)] opacity-80" aria-hidden />
                </div>
              </div>
            </div>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
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
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {traits.map((t) => (
              <div key={t.title} className="p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)]">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                  <t.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-4 font-display text-xl">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
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
              <a
                key={p.title}
                href="#"
                className="group block p-7 md:p-9 rounded-3xl bg-card border border-border/60 hover:border-foreground/40 transition shadow-[var(--shadow-card)]"
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
              </a>
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
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Recognition</p>
          <h2 className="mt-2 text-5xl md:text-6xl font-display">Certificates.</h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((c) => (
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
