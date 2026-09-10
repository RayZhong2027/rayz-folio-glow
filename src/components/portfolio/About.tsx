import { aboutCards } from "@/data/portfolioData";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Energy systems, measured carefully"
      lead="A short map of where I study, what I research, and where I currently work."
    >
      <div className="grid gap-4 lg:grid-cols-6">
        {aboutCards.map((card) => (
          <article
            key={card.title}
            className={cn(
              "rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface/70 hover:shadow-lg hover:shadow-accent/5",
              card.span,
            )}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {card.kicker}
            </p>
            <h3 className="mt-3 font-display font-bold text-lg tracking-tight text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
