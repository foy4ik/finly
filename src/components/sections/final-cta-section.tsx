"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaDialog } from "@/components/finly/cta-dialog";

export function FinalCtaSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-forest-deep px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(143,214,172,0.18),transparent)]"
        />
        <div
          aria-hidden="true"
          className="bg-noise pointer-events-none absolute inset-0 text-white opacity-40"
        />

        <h2 className="relative font-heading text-3xl leading-[1.15] font-semibold text-balance text-white sm:text-4xl lg:text-5xl">
          Your money. Your future.
          <br className="hidden sm:block" /> Your control.
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-base text-white/65 sm:text-lg">
          Присоединяйтесь к Finly сегодня — первый шаг к финансовой ясности
          занимает меньше минуты.
        </p>

        <div className="relative mt-8 flex justify-center">
          <CtaDialog mode="signup">
            <Button className="h-12 rounded-full bg-white px-8 text-base text-forest-deep hover:bg-white/90">
              Start for free
              <ArrowRight className="size-4" />
            </Button>
          </CtaDialog>
        </div>
      </motion.div>
    </section>
  );
}
