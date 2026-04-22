import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/portfolio/Layout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Neha Mary Pramod" },
      { name: "description", content: "A comprehensive overview of Neha's technical expertise across frontend, backend, and tooling." },
      { property: "og:title", content: "Skills — Neha Mary Pramod" },
      { property: "og:description", content: "Frontend, backend, languages and tools — Neha's stack." },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  { title: "Frontend Development", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend Development", items: ["Node.js", "Express.js", "Django", "Laravel", "RESTful APIs", "MySQL", "MongoDB", "SQLite"] },
  { title: "Programming Languages", items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C"] },
  { title: "Tools & Technologies", items: ["Git", "GitHub", "VS Code", "Postman", "Composer", "Vercel", "Render"] },
  { title: "Soft Skills", items: ["Communication", "Team Collaboration", "Leadership", "Problem Solving"] },
  { title: "Other", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"] },
];

function SkillsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Toolkit</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display">Skills & Technologies.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A comprehensive overview of my technical expertise and capabilities.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {groups.map((g) => (
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
      </section>
    </Layout>
  );
}