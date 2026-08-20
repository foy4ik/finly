"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, TrendingUp, Wallet } from "lucide-react";

import { AnimatedCounter } from "@/components/finly/animated-counter";
import { SpendingChart } from "@/components/finly/spending-chart";
import {
  DASHBOARD_SUMMARY,
  SPENDING_SERIES,
  TRANSACTIONS,
} from "@/lib/data";
import { formatCurrency, formatSignedCurrency } from "@/lib/utils";

export function DashboardMockupCard() {
  const recent = TRANSACTIONS.slice(0, 3);

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 32, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        whileHover={{ rotate: 0, y: -4 }}
        className="relative rounded-3xl border border-border bg-card p-5 shadow-[0_30px_60px_-25px_rgba(22,36,29,0.35)] sm:p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Общий баланс
            </p>
            <p className="mt-1 font-mono text-3xl font-semibold tabular-nums text-ink sm:text-4xl">
              <AnimatedCounter
                value={DASHBOARD_SUMMARY.balance}
                format={(v) => formatCurrency(Math.round(v))}
              />
            </p>
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-mint text-forest">
            <Wallet className="size-5" />
          </span>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-forest">
          <TrendingUp className="size-4" />
          <span className="font-tabular">+{DASHBOARD_SUMMARY.balanceChangePercent}%</span>
          <span className="text-muted-foreground">за последний месяц</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-paper-alt p-3.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowDownRight className="size-3.5 text-forest" />
              Доходы
            </div>
            <p className="mt-1 font-mono text-base font-semibold tabular-nums text-ink">
              {formatCurrency(DASHBOARD_SUMMARY.income)}
            </p>
          </div>
          <div className="rounded-2xl bg-paper-alt p-3.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowUpRight className="size-3.5 text-destructive" />
              Расходы
            </div>
            <p className="mt-1 font-mono text-base font-semibold tabular-nums text-ink">
              {formatCurrency(DASHBOARD_SUMMARY.expenses)}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <SpendingChart data={SPENDING_SERIES} height={110} />
        </div>

        <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4">
          <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Последние операции
          </p>
          {recent.map((t) => (
            <div key={t.id} className="flex items-center gap-3 py-1.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-paper-alt text-ink/70">
                <t.icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{t.merchant}</p>
              </div>
              <p
                className={
                  "font-mono text-sm font-medium tabular-nums " +
                  (t.amount > 0 ? "text-forest" : "text-ink/80")
                }
              >
                {formatSignedCurrency(t.amount)}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-6 top-10 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block"
      >
        <p className="text-[11px] font-medium text-muted-foreground">Цель «Отпуск»</p>
        <p className="mt-0.5 font-mono text-sm font-semibold text-ink">68% выполнено</p>
        <div className="mt-1.5 h-1.5 w-28 overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "68%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gold"
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card px-4 py-2.5 shadow-lg sm:flex sm:items-center sm:gap-2"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-forest/10 text-forest">
          <TrendingUp className="size-3.5" />
        </span>
        <p className="text-xs font-medium text-ink">Бюджет под контролем</p>
      </motion.div>
    </div>
  );
}
