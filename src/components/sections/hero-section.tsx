"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaDialog } from "@/components/finly/cta-dialog";
import { DashboardMockupCard } from "@/components/finly/dashboard-mockup-card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--forest)_12%,transparent),transparent)]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-ink/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            Новое поколение личных финансов
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl font-heading text-4xl leading-[1.08] font-semibold text-balance text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Take control of your{" "}
            <span className="relative whitespace-nowrap text-forest">
              money
              <svg
                aria-hidden="true"
                viewBox="0 0 280 12"
                className="absolute -bottom-1 left-0 w-full text-gold"
              >
                <path
                  d="M2 9.5C60 3 180 1 278 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground text-balance"
          >
            Finly helps you understand your spending, plan your budget and
            build better financial habits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CtaDialog mode="signup">
              <Button className="h-12 rounded-full px-7 text-base shadow-sm">
                Попробовать бесплатно
                <ArrowRight className="size-4" />
              </Button>
            </CtaDialog>
            <Button
              variant="outline"
              nativeButton={false}
              className="h-12 rounded-full px-7 text-base"
              render={<a href="#dashboard-preview" />}
            >
              <PlayCircle className="size-4" />
              Посмотреть демо
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Бесплатно навсегда для базового плана · Без карты при регистрации
          </motion.p>
        </div>

        <DashboardMockupCard />
      </div>
    </section>
  );
}
