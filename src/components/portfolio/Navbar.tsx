import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks, profile } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-border px-3 py-2 backdrop-blur-xl transition-all duration-500",
          scrolled ? "bg-card/80 shadow-glass" : "bg-card/50",
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full border border-border/60 bg-surface px-3 py-1.5 text-sm font-semibold tracking-tight text-foreground transition-all hover:border-accent/40"
        >
          <span className="font-display font-bold text-accent">{profile.initials}</span>
          <span className="hidden font-display sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-95 sm:inline-flex"
          >
            <FileDown className="size-4" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-4xl rounded-3xl border border-border bg-card/95 p-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between border-t border-border px-4 py-2.5">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                Theme
              </span>
              <ThemeToggle showLabel />
            </li>
            <li>
              <a
                href={profile.resumeUrl}
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-2xl bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
