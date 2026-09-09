import { ArrowDown, ArrowUpRight, FileDown, Mail } from "lucide-react";
import { profile } from "@/data/portfolioData";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-36 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Open to 2027 energy & sustainability roles
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-serif text-2xl leading-snug text-foreground/85 sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Explore Projects <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              <Mail className="size-4" /> Get in Touch
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              <FileDown className="size-4" /> Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px]">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-accent/10 blur-3xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-3 bg-surface">
                <span className="font-display text-6xl tracking-tight text-foreground/70">
                  {profile.initials}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Headshot
                </span>
              </div>
            )}
          </div>
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {profile.location}
          </p>
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-16 flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
      >
        Scroll <ArrowDown className="size-3.5 animate-bounce" />
      </a>
    </section>
  );
}
