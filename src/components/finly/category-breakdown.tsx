"use client";

import { motion } from "framer-motion";
import { CATEGORY_BREAKDOWN } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const BAR_COLORS = ["#8fd6ac", "#c6a265", "#5c8f75", "#7fb89a", "#e4c98a"];

export function CategoryBreakdown() {
  return (
    <div className="flex flex-col gap-4">
      {CATEGORY_BREAKDOWN.map((c, i) => (
        <div key={c.key}>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-white/85">{c.label}</span>
            <span className="font-mono tabular-nums text-white/60">
              {formatCurrency(c.amount)}
            </span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${c.percent}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: BAR_COLORS[i % BAR_COLORS.length] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
