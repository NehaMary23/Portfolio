import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Neha Mary Pramod. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="mailto:nehapramo05@gmail.com"
            onClick={(e) => {
              if (/Mobi|Android/i.test(navigator.userAgent)) return;
              e.preventDefault();
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=nehapramo05@gmail.com",
                "_blank",
              );
            }}
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/NehaMary23"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/neha-mary-pramod/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
