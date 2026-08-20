import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const rubFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
})

/** Formats a number as rubles, e.g. 214300 -> "214 300 ₽" */
export function formatCurrency(value: number) {
  return rubFormatter.format(value)
}

/** Formats a signed amount for transaction rows, e.g. -420 -> "−420 ₽", 128000 -> "+128 000 ₽" */
export function formatSignedCurrency(value: number) {
  const formatted = rubFormatter.format(Math.abs(value))
  return value >= 0 ? `+${formatted}` : `−${formatted}`
}

export function formatPercent(value: number, withSign = true) {
  const sign = withSign && value > 0 ? "+" : ""
  return `${sign}${value.toFixed(1)}%`
}
