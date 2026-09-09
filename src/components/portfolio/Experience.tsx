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
            className="rounded-3xl border border-border bg-card p-7 transition-colors hover:bg-surface"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display text-xl tracking-tight text-foreground">
                  {job.company}
                </h3>
                <p className="mt-1 font-serif text-lg text-foreground/80">{job.role}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {job.period}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
              </div>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((t) => (
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
