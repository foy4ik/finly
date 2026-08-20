import type { LucideIcon } from "lucide-react";
import { RevealItem } from "@/components/finly/reveal";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <RevealItem className="group relative h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_20px_45px_-25px_rgba(22,36,29,0.35)]">
      <span className="flex size-11 items-center justify-center rounded-2xl bg-mint text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </RevealItem>
  );
}
