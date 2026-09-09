import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolioData";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected technical work"
      lead="Forecasting, geospatial analysis, life-cycle modeling and agentic automation — with the numbers that came out of them."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:bg-surface"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl leading-snug tracking-tight text-foreground">
                {p.title}
              </h3>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              ) : (
                <span
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground/40"
                  title="Link coming soon"
                >
                  <ArrowUpRight className="size-4" />
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {p.period}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <p className="mt-3 font-serif text-base leading-relaxed text-foreground/75">{p.method}</p>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-display text-xl tracking-tight text-accent">{m.value}</dd>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
