"use client";

import type { ReactNode } from "react";
import { AnimatedCounter } from "@/components/finly/animated-counter";
import { RevealItem } from "@/components/finly/reveal";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";

type StatTileProps = {
  icon: ReactNode;
  label: string;
  value: number;
  changePercent: number;
};

export function StatTile({ icon, label, value, changePercent }: StatTileProps) {
  const positive = changePercent >= 0;

  return (
    <RevealItem className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-center justify-between">
        <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-white">
          {icon}
        </span>
        <span
          className={cn(
            "font-tabular rounded-full px-2 py-0.5 text-xs font-medium",
            positive ? "bg-[#8fd6ac]/15 text-[#8fd6ac]" : "bg-white/10 text-white/60"
          )}
        >
          {formatPercent(changePercent)}
        </span>
      </div>
      <p className="mt-4 text-sm text-white/55">{label}</p>
      <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-white sm:text-3xl">
        <AnimatedCounter value={value} format={(v) => formatCurrency(Math.round(v))} />
      </p>
    </RevealItem>
  );
}
