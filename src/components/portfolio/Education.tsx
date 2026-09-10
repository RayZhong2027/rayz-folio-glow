import { education } from "@/data/portfolioData";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => {
          const isMichigan = e.school.toLowerCase().includes("michigan");
          return (
            <article
              key={e.school}
              className={`rounded-3xl border p-7 transition-all duration-300 hover:scale-[1.01] ${
                isMichigan
                  ? "border-accent/40 bg-card shadow-xl shadow-accent/5"
                  : "border-border bg-card hover:border-border/80"
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-xl tracking-tight text-foreground">
                    {e.school}
                  </h3>
                  {isMichigan && (
                    <span className="rounded-md bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Go Blue
                    </span>
                  )}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="mt-3 font-display font-medium text-lg tracking-tight text-foreground/90">
                {e.degree}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{e.track}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground/80">{e.location}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
                Relevant coursework
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {e.coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
