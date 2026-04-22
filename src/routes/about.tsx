import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/portfolio/Layout";
import { Target, Code2, GraduationCap, Users } from "lucide-react";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Neha Mary Pramod" },
      { name: "description", content: "Get to know Neha Mary Pramod — a passionate full-stack developer focused on intuitive, impactful digital experiences." },
      { property: "og:title", content: "About — Neha Mary Pramod" },
      { property: "og:description", content: "Get to know Neha Mary Pramod — passionate full-stack developer." },
    ],
  }),
  component: AboutPage,
});

const traits = [
  { icon: Target, title: "Problem Solver", desc: "Focused on building high-quality, scalable web applications." },
  { icon: Code2, title: "Full Stack Developer", desc: "Expert in modern frontend and backend development." },
  { icon: GraduationCap, title: "Continuous Learner", desc: "Always eager to learn new technologies and best practices." },
  { icon: Users, title: "Team Player", desc: "Love collaborating with teams to create amazing products." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">About</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display">Get to know me better.</h1>

        <div className="mt-12 grid md:grid-cols-[260px_1fr] gap-10 items-start">
          <div className="rounded-3xl overflow-hidden border border-border/60 bg-secondary/40 shadow-[var(--shadow-card)]">
            <img src={avatar} alt="Neha Mary Pramod" className="w-full h-auto block" />
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
      </section>
    </Layout>
  );
}