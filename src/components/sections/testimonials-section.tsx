import { SectionHeading } from "@/components/finly/section-heading";
import { TestimonialCard } from "@/components/finly/testimonial-card";
import { RevealGroup } from "@/components/finly/reveal";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="bg-paper-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят те, кто уже навёл порядок в финансах"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
