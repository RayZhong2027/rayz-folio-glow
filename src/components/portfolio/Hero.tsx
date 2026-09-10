import { ArrowDown, ArrowUpRight, FileDown, Mail } from "lucide-react";
import { profile } from "@/data/portfolioData";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-36 sm:pt-44">
      {/* Dual ambient aurora glow: Michigan Maize + Michigan Blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-0 h-[520px] w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-10 h-[480px] w-[540px] rounded-full bg-blue-600/15 blur-[160px]"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-xs font-mono tracking-wide text-muted-foreground backdrop-blur-sm">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] animate-pulse" />
            Open to 2027 energy & sustainability roles
          </span>

          <h1 className="mt-6 font-display font-bold text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display font-medium text-2xl leading-snug tracking-tight text-foreground/90 sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-accent/10 transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              Explore Projects <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-surface active:scale-95"
            >
              <Mail className="size-4" /> Get in Touch
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-accent/40 hover:text-foreground active:scale-95"
            >
              <FileDown className="size-4" /> Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px]">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-accent/20 to-blue-500/20 blur-3xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl transition-all duration-500 hover:border-accent/50">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-3 bg-surface">
                <span className="font-display font-bold text-6xl tracking-tight text-foreground/70">
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
        className="mx-auto mt-16 flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
      >
        Scroll <ArrowDown className="size-3.5 animate-bounce" />
      </a>
    </section>
  );
}
