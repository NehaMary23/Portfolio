import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/portfolio/Layout";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates & Achievements — Neha Mary Pramod" },
      { name: "description", content: "Certificates, courses, and achievements earned by Neha Mary Pramod." },
      { property: "og:title", content: "Certificates & Achievements — Neha Mary Pramod" },
      { property: "og:description", content: "Certificates, courses, and achievements." },
    ],
  }),
  component: CertificatesPage,
});

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

function CertificatesPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Recognition</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display">Certificates.</h1>

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
          <h2 className="mt-2 text-4xl md:text-5xl font-display">Achievements.</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {achievements.map((a) => (
              <div key={a.title} className="p-7 rounded-2xl bg-foreground text-background shadow-[var(--shadow-soft)]">
                <span className="text-xs uppercase tracking-widest opacity-70">{a.level}</span>
                <h3 className="mt-2 font-display text-2xl">{a.title}</h3>
                <p className="mt-3 opacity-80">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}