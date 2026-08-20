"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  format?: (value: number) => string;
  className?: string;
  duration?: number;
};

/**
 * Counts up from 0 to `value` once it scrolls into view. Used throughout
 * the page as Finly's signature motif: money figures that arrive in
 * motion, echoing a ledger tallying itself up.
 */
export function AnimatedCounter({
  value,
  format = (v) => Math.round(v).toLocaleString("ru-RU"),
  className,
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest);
      }
    });
    return unsubscribe;
  }, [spring, format]);

  return (
    <span ref={ref} className={className}>
      {format(0)}
    </span>
  );
}
