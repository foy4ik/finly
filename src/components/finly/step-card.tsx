import { RevealItem } from "@/components/finly/reveal";
import type { Step } from "@/lib/data";

export function StepCard({ number, title, description }: Step) {
  return (
    <RevealItem className="relative flex flex-col gap-3 rounded-3xl border border-border bg-card p-6">
      <span className="font-heading text-4xl font-semibold text-forest/20">{number}</span>
      <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </RevealItem>
  );
}
