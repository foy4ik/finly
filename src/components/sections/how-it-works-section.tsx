import { SectionHeading } from "@/components/finly/section-heading";
import { StepCard } from "@/components/finly/step-card";
import { RevealGroup } from "@/components/finly/reveal";
import { STEPS } from "@/lib/data";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Как это работает"
          title="Три шага до полного порядка в финансах"
          description="Никакой ручной сверки чеков — Finly делает всю рутинную работу за вас."
        />

        <RevealGroup className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute top-[3.25rem] right-[16.5%] left-[16.5%] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent sm:block"
          />
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
