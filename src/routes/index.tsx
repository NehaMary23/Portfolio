import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import heroImg from "@/assets/hero-portrait.png";
import { Layout } from "@/components/portfolio/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neha Mary Pramod — Portfolio '25" },
      { name: "description", content: "Full Stack Web Developer crafting beautiful, high-performance web applications with modern technologies." },
      { property: "og:title", content: "Neha Mary Pramod — Portfolio '25" },
      { property: "og:description", content: "Full Stack Web Developer crafting beautiful, high-performance web applications." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="rounded-3xl bg-card shadow-[var(--shadow-soft)] border border-border/60 overflow-hidden">
            <img
              src={heroImg}
              alt="Neha Mary Pramod — Portfolio 2025 illustrated hero"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>

          <div className="mt-10 grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-secondary-foreground">
                Welcome to my portfolio
              </span>
              <h1 className="mt-4 text-5xl md:text-7xl font-display leading-[0.95]">
                Hi, I'm <span className="italic font-light text-[var(--brand-rose)]">Neha</span>
                <br />
                Khanna.
              </h1>
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
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-foreground hover:gap-3 transition-all"
                >
                  See projects <ArrowRight className="h-4 w-4" />
                </Link>
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

      {/* QUICK NAV */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: "/about" as const, title: "About me", desc: "My story & values" },
            { to: "/projects" as const, title: "Projects", desc: "Things I've built" },
            { to: "/skills" as const, title: "Skills", desc: "What I work with" },
            { to: "/contact" as const, title: "Contact", desc: "Let's talk" },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group p-6 rounded-2xl bg-card border border-border/60 hover:border-foreground/40 transition shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl">{c.title}</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
