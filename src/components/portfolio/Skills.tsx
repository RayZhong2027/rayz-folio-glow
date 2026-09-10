import { skills } from "@/data/portfolioData";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Toolkit">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
          >
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {group.category}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
