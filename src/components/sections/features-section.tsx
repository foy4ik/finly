import { SectionHeading } from "@/components/finly/section-heading";
import { FeatureCard } from "@/components/finly/feature-card";
import { RevealGroup } from "@/components/finly/reveal";
import { FEATURES } from "@/lib/data";

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Возможности"
          title="Всё для контроля над деньгами — в одном месте"
          description="Finly объединяет бюджет, аналитику и цели в простом интерфейсе, который не требует финансового образования."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
