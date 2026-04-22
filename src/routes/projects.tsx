import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/portfolio/Layout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Neha Mary Pramod" },
      { name: "description", content: "Innovative solutions and web applications built by Neha Mary Pramod." },
      { property: "og:title", content: "Projects — Neha Mary Pramod" },
      { property: "og:description", content: "Innovative solutions and web applications." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Point Hub — Activity Points Calculator",
    desc: "A comprehensive web app that automates calculation and approval workflow of student activity points. Certificate uploads, teacher review, admin scoring management — transparent and efficient.",
    tech: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
    href: "#",
  },
  {
    title: "Lumina — Design Portfolio CMS",
    desc: "A headless content system for designers and creatives to publish case studies with cinematic galleries, MDX-powered writing, and lightning-fast page loads.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Vercel"],
    href: "#",
  },
  {
    title: "Wavelength — Realtime Chat",
    desc: "End-to-end realtime chat with rooms, presence, typing indicators, and a buttery-smooth message virtualization layer for thousands of messages.",
    tech: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    href: "#",
  },
];

function ProjectsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Selected work</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display">My Projects.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Showcasing innovative solutions and web applications I've built end-to-end.
        </p>

        <div className="mt-12 space-y-6">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block p-7 md:p-9 rounded-3xl bg-card border border-border/60 hover:border-foreground/40 transition shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  <h2 className="mt-1 font-display text-2xl md:text-3xl">{p.title}</h2>
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
      </section>
    </Layout>
  );
}