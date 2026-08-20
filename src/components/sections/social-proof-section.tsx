import { Reveal } from "@/components/finly/reveal";
import { SOCIAL_PROOF_LOGOS } from "@/lib/data";

export function SocialProofSection() {
  const logos = [...SOCIAL_PROOF_LOGOS, ...SOCIAL_PROOF_LOGOS];

  return (
    <section className="border-y border-border/70 bg-paper-alt/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            Finly доверяют <span className="font-tabular font-semibold text-ink">10 000+</span> человек
          </p>

          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none">
              {logos.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 font-heading text-xl font-medium text-ink/35 select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
