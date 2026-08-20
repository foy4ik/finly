import { Quote } from "lucide-react";
import { RevealItem } from "@/components/finly/reveal";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ name, role, quote, initials }: Testimonial) {
  return (
    <RevealItem className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-7">
      <Quote className="size-6 text-gold" />
      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/85 text-balance">
        «{quote}»
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-mint font-heading text-sm font-semibold text-forest">
          {initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </RevealItem>
  );
}
