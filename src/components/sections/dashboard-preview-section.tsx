import { PiggyBank, Receipt, Wallet } from "lucide-react";

import { SectionHeading } from "@/components/finly/section-heading";
import { StatTile } from "@/components/finly/stat-tile";
import { SpendingChart } from "@/components/finly/spending-chart";
import { CategoryBreakdown } from "@/components/finly/category-breakdown";
import { TransactionList } from "@/components/finly/transaction-list";
import { RevealGroup, RevealItem } from "@/components/finly/reveal";
import { DASHBOARD_SUMMARY, SPENDING_SERIES } from "@/lib/data";

export function DashboardPreviewSection() {
  return (
    <section
      id="dashboard-preview"
      className="scroll-mt-20 bg-forest-deep py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Внутри приложения"
          title="Один экран — вся картина ваших финансов"
          description="Баланс, доходы, расходы, категории и последние операции — обновляются в реальном времени, без лишних кликов."
          tone="inverted"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatTile
            icon={<Wallet className="size-4" />}
            label="Баланс"
            value={DASHBOARD_SUMMARY.balance}
            changePercent={DASHBOARD_SUMMARY.balanceChangePercent}
          />
          <StatTile
            icon={<PiggyBank className="size-4" />}
            label="Доходы за месяц"
            value={DASHBOARD_SUMMARY.income}
            changePercent={DASHBOARD_SUMMARY.incomeChangePercent}
          />
          <StatTile
            icon={<Receipt className="size-4" />}
            label="Расходы за месяц"
            value={DASHBOARD_SUMMARY.expenses}
            changePercent={DASHBOARD_SUMMARY.expensesChangePercent}
          />
        </RevealGroup>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
          <RevealItem className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:col-span-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-medium text-white">
                Динамика расходов
              </h3>
              <span className="text-xs text-white/45">Последние 7 месяцев</span>
            </div>
            <div className="mt-4">
              <SpendingChart data={SPENDING_SERIES} tone="dark" height={200} />
            </div>
          </RevealItem>

          <RevealItem className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:col-span-2">
            <h3 className="font-heading text-lg font-medium text-white">По категориям</h3>
            <div className="mt-5">
              <CategoryBreakdown />
            </div>
          </RevealItem>
        </div>

        <RevealItem className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-medium text-white">
              Последние операции
            </h3>
            <span className="text-xs text-white/45">Фильтр по категории</span>
          </div>
          <div className="mt-5">
            <TransactionList />
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
