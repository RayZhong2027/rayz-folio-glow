import { useState } from "react";
import { FileDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolioData";
import { Section } from "./Section";

export function Contact() {
  const [sending, setSending] = useState(false);

  const channels = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Mail, label: profile.altEmail, href: `mailto:${profile.altEmail}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: FileDown, label: "Download resume", href: profile.resumeUrl },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nReply to: ${data.get("email")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app with the message ready to send.");
    form.reset();
    setSending(false);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk energy and data"
      lead="Reach out about research collaborations, sustainability analytics work, or 2027 full-time roles."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40">
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Direct</h3>
          <ul className="mt-5 flex flex-col gap-2">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-mono text-muted-foreground transition-all hover:border-accent/40 hover:bg-surface hover:text-foreground"
                >
                  <c.icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="break-all">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40">
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Send a message
          </h3>
          <div className="mt-5 flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Name
                <input
                  name="name"
                  required
                  className="rounded-2xl border border-border bg-surface px-4 py-2.5 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent/40"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-2xl border border-border bg-surface px-4 py-2.5 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent/40"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="resize-none rounded-2xl border border-border bg-surface px-4 py-3 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent/40"
                placeholder="What would you like to work on?"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-accent/10 transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              <Mail className="size-4" /> Send message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
