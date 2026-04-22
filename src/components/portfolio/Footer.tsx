import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shourya Khanna. Crafted with care.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="mailto:hello@shourya.dev" aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}