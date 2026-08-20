"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaDialog } from "@/components/finly/cta-dialog";
import { AnimatedCounter } from "@/components/finly/animated-counter";
import { RevealItem } from "@/components/finly/reveal";
import { cn } from "@/lib/utils";
import type { BillingPeriod, PricingPlan } from "@/lib/data";

type PricingCardProps = {
  plan: PricingPlan;
  period: BillingPeriod;
};

export function PricingCard({ plan, period }: PricingCardProps) {
  const price = period === "monthly" ? plan.priceMonthly : plan.priceYearly;
  const isFree = plan.priceMonthly === 0;

  return (
    <RevealItem
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-6 sm:p-7",
        plan.popular
          ? "border-forest bg-forest text-primary-foreground shadow-[0_30px_60px_-25px_rgba(31,90,63,0.55)] lg:-translate-y-3"
          : "border-border bg-card text-ink"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3.5 py-1 text-xs font-semibold text-forest-deep">
          Популярный выбор
        </span>
      )}

      <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
      <p
        className={cn(
          "mt-1.5 text-sm leading-relaxed",
          plan.popular ? "text-white/70" : "text-muted-foreground"
        )}
      >
        {plan.description}
      </p>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="font-mono text-4xl font-semibold tabular-nums">
          {isFree ? "0 ₽" : (
            <AnimatedCounter
              value={price}
              duration={0.6}
              format={(v) => `${Math.round(v).toLocaleString("ru-RU")} ₽`}
            />
          )}
        </span>
        {!isFree && (
          <span
            className={cn(
              "pb-1 text-sm",
              plan.popular ? "text-white/60" : "text-muted-foreground"
            )}
          >
            / мес
          </span>
        )}
      </div>
      {!isFree && period === "yearly" && (
        <p className={cn("mt-1 text-xs", plan.popular ? "text-white/55" : "text-muted-foreground")}>
          при оплате за год
        </p>
      )}

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                plan.popular ? "text-[#8fd6ac]" : "text-forest"
              )}
            />
            <span className={plan.popular ? "text-white/90" : "text-ink/80"}>{feature}</span>
          </li>
        ))}
      </ul>

      <CtaDialog mode="signup">
        <Button
          className={cn(
            "mt-7 h-11 w-full rounded-full text-base",
            plan.popular
              ? "bg-white text-forest-deep hover:bg-white/90"
              : ""
          )}
          variant={plan.popular ? undefined : "outline"}
        >
          {plan.cta}
        </Button>
      </CtaDialog>
    </RevealItem>
  );
}
