import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { hash: "home", label: "Home" },
  { hash: "about", label: "About" },
  { hash: "projects", label: "Projects" },
  { hash: "skills", label: "Skills" },
  { hash: "certificates", label: "Certificates" },
  { hash: "achievements", label: "Achievements" },
  { hash: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [showFullName, setShowFullName] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = links.map((l) => l.hash);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        const navWidth = navRef.current.offsetWidth;
        // Show full name if width is greater than 400px (enough space)
        // This accounts for small mobile devices
        setShowFullName(navWidth > 400);
      }
    };

    // Use ResizeObserver for more accurate tracking
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (navRef.current) {
      resizeObserver.observe(navRef.current);
      handleResize(); // Initial check
    }

    window.addEventListener("resize", handleResize);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${hash}`);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.985_0.008_85_/_0.75)] border-b border-border/60">
      <div ref={navRef} className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={handleClick("home")}
          className="flex items-center gap-2 font-display text-xl tracking-tight whitespace-nowrap"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-foreground" />
          Neha{(showFullName || open) && <span> Mary Pramod</span>}<span className="text-muted-foreground">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.hash;
            return (
              <a
                key={l.hash}
                href={`#${l.hash}`}
                onClick={handleClick(l.hash)}
                className={
                  isActive
                    ? "px-3 py-2 text-sm font-semibold text-foreground rounded-md bg-secondary"
                    : "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
                }
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.hash}
                href={`#${l.hash}`}
                onClick={handleClick(l.hash)}
                className={
                  active === l.hash
                    ? "py-2 text-sm font-semibold text-foreground"
                    : "py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                }
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
