"use client";

import { useId, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SeriesPoint = {
  label: string;
  value: number;
};

type SpendingChartProps = {
  data: SeriesPoint[];
  className?: string;
  tone?: "light" | "dark";
  height?: number;
};

/** Builds a smooth cubic-bezier path through a set of points. */
function buildSmoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function SpendingChart({
  data,
  className,
  tone = "light",
  height = 220,
}: SpendingChartProps) {
  const gradientId = useId();
  const width = 560;
  const padding = 16;

  const { linePath, areaPath, points } = useMemo(() => {
    const values = data.map((d) => d.value);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;

    const pts = data.map((d, i) => {
      const x = padding + (i / (data.length - 1)) * (width - padding * 2);
      const y =
        height -
        padding -
        ((d.value - min) / range) * (height - padding * 2);
      return { x, y };
    });

    const line = buildSmoothPath(pts);
    const area = `${line} L ${pts[pts.length - 1].x} ${height} L ${pts[0].x} ${height} Z`;

    return { linePath: line, areaPath: area, points: pts };
  }, [data, height]);

  const strokeColor = tone === "dark" ? "#8fd6ac" : "var(--forest)";
  const gridColor =
    tone === "dark" ? "rgba(255,255,255,0.08)" : "rgba(22,36,29,0.08)";
  const labelColor = tone === "dark" ? "rgba(255,255,255,0.55)" : "var(--muted-foreground)";

  return (
    <div className={cn("w-full", className)}>
      <svg
        viewBox={`0 0 ${width} ${height + 24}`}
        className="w-full overflow-visible"
        role="img"
        aria-label="График расходов по месяцам"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity={tone === "dark" ? 0.45 : 0.28} />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={padding}
            x2={width - padding}
            y1={height * t}
            y2={height * t}
            stroke={gridColor}
            strokeWidth={1}
          />
        ))}

        <motion.path
          d={areaPath}
          fill={`url(#${gradientId})`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.path
          d={linePath}
          fill="none"
          stroke={strokeColor}
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {points.map((p, i) => {
          const isLast = i === points.length - 1;
          return (
            <g key={i}>
              {isLast && (
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={8}
                  fill={strokeColor}
                  opacity={0.18}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.4, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              )}
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={isLast ? 4.5 : 3}
                fill={tone === "dark" ? "#0b2118" : "#ffffff"}
                stroke={strokeColor}
                strokeWidth={2}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
              />
              <text
                x={p.x}
                y={height + 18}
                textAnchor="middle"
                fontSize={11}
                fill={labelColor}
                fontFamily="var(--font-sans)"
              >
                {data[i].label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
