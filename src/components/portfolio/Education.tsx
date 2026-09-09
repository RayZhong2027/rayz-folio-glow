import { education } from "@/data/portfolioData";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <article key={e.school} className="rounded-3xl border border-border bg-card p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl tracking-tight text-foreground">{e.school}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {e.period}
              </span>
            </div>
            <p className="mt-3 font-serif text-lg text-foreground/85">{e.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">{e.track}</p>
            <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Relevant coursework
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {e.coursework.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
