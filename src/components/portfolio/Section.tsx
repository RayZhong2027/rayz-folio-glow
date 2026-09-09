import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 px-4 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {lead && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
