"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/finly/section-heading";
import { PricingCard } from "@/components/finly/pricing-card";
import { RevealGroup } from "@/components/finly/reveal";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PRICING_PLANS, type BillingPeriod } from "@/lib/data";

export function PricingSection() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Тарифы"
          title="Простые тарифы для любых задач"
          description="Начните бесплатно и переходите на более широкий план, когда потребуется больше возможностей."
        />

        <div className="mt-9 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              period === "monthly" ? "text-ink" : "text-muted-foreground"
            )}
          >
            Ежемесячно
          </span>
          <Switch
            checked={period === "yearly"}
            onCheckedChange={(checked) => setPeriod(checked ? "yearly" : "monthly")}
            aria-label="Переключить период оплаты"
          />
          <span
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              period === "yearly" ? "text-ink" : "text-muted-foreground"
            )}
          >
            Ежегодно
            <Badge className="bg-gold text-forest-deep">-20%</Badge>
          </span>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center lg:gap-5">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} period={period} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
