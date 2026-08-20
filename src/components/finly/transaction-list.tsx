"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Inbox } from "lucide-react";

import { cn, formatSignedCurrency } from "@/lib/utils";
import { CATEGORY_FILTERS, TRANSACTIONS, type CategoryKey } from "@/lib/data";

export function TransactionList() {
  const [active, setActive] = useState<CategoryKey | "all">("all");

  const filtered =
    active === "all"
      ? TRANSACTIONS
      : TRANSACTIONS.filter((t) => t.categoryKey === active);

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap gap-2">
        {CATEGORY_FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActive(filter.key)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              active === filter.key
                ? "border-transparent bg-white text-forest-deep"
                : "border-white/15 bg-transparent text-white/60 hover:border-white/30 hover:text-white"
            )}
            aria-pressed={active === filter.key}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex-1">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 px-6 py-12 text-center"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white/50">
                <Inbox className="size-5" />
              </span>
              <p className="text-sm font-medium text-white">
                В этой категории пока нет операций
              </p>
              <p className="text-sm text-white/50">
                Как только появятся траты в этой категории, они сразу отобразятся здесь.
              </p>
            </motion.div>
          ) : (
            <motion.ul
              key={active}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {filtered.map((t, i) => (
                <motion.li
                  key={t.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center gap-3 border-b border-white/10 py-3 last:border-none"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
                    <t.icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">{t.merchant}</p>
                    <p className="text-xs text-white/45">{t.date}</p>
                  </div>
                  <p
                    className={cn(
                      "font-mono text-sm font-medium tabular-nums",
                      t.amount > 0 ? "text-[#8fd6ac]" : "text-white/85"
                    )}
                  >
                    {formatSignedCurrency(t.amount)}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
