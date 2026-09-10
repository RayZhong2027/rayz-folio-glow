import { experience } from "@/data/portfolioData";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where the work happened"
      lead="Sustainability analytics and research roles across semiconductors, national-lab research, and ESG consulting."
    >
      <div className="flex flex-col gap-4">
        {experience.map((job) => (
          <article
            key={job.company}
            className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface/60"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight text-foreground">
                  {job.company}
                </h3>
                <p className="mt-1 font-display font-medium text-lg tracking-tight text-foreground/90">
                  {job.role}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {job.period}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground/80">{job.location}</p>
              </div>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]"
                  />
                  {p}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((t) => (
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
