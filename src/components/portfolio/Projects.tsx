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
            className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface/50 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display font-bold text-xl leading-snug tracking-tight text-foreground transition-colors group-hover:text-foreground">
                {p.title}
              </h3>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all hover:border-accent hover:bg-primary hover:text-primary-foreground"
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
            <div className="mt-3 rounded-2xl border border-border/60 bg-surface/50 p-3.5">
              <p className="font-mono text-xs leading-relaxed text-foreground/85">
                <span className="text-accent font-semibold mr-1.5">// Method:</span>
                {p.method}
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-mono font-bold text-xl tracking-tight text-accent">
                    {m.value}
                  </dd>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground font-sans">
                    {m.label}
                  </p>
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-surface/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
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
