"use client";

import type React from "react";

export function SpinRing({
  size,
  duration,
  direction,
  borderStyle,
}: {
  size: number;
  duration: number;
  direction: "normal" | "reverse";
  borderStyle: string;
}) {
  const animName = direction === "normal" ? "spin-cw" : "spin-ccw";
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        border: borderStyle,
        animation: `${animName} ${duration}s linear infinite`,
      }}
    />
  );
}

export function GradientCircleRing({ size }: { size: number }) {
  return (
    <div
      className="absolute z-1 pointer-events-none"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "conic-gradient(#10b981, #06b6d4, #8b5cf6, #10b981)",
        animation: "spin-cw 6s linear infinite",
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#1f2937",
        }}
      />
    </div>
  );
}

export function FloatTag({
  label,
  dotColor,
  pulse = false,
  style,
  className = "",
}: {
  label: string;
  dotColor: string;
  pulse?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full
        text-[10px] md:text-[11px] font-medium whitespace-nowrap
        bg-card/90 backdrop-blur-sm border border-border text-foreground
        shadow-sm
        ${className}
      `}
      style={style}
    >
      <span
        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shrink-0 ${
          pulse ? "animate-pulse" : ""
        }`}
        style={{ background: dotColor }}
      />
      {label}
    </div>
  );
}
