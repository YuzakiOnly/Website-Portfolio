/* eslint-disable @next/next/no-img-element */
"use client";

import NetworkCanvas from "./network-canvas";
import { FloatTag } from "./photo-rings";

export default function PhotoProfile() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none gap-4 w-full">
      <NetworkCanvas />

      <div
        className="
          relative flex items-center justify-center
          w-70 h-70
          sm:w-90 sm:h-90
          md:w-100 md:h-100
          lg:w-120 lg:h-120
        "
      >
        <PercentRing
          pct={99}
          duration={28}
          direction="normal"
          borderStyle="1px dashed rgba(139,92,246,0.22)"
        />
        <PercentRing
          pct={93}
          duration={18}
          direction="reverse"
          borderStyle="1px solid rgba(6,182,212,0.28)"
        />
        <PercentRing
          pct={86}
          duration={12}
          direction="normal"
          borderStyle="1.5px solid rgba(16,185,129,0.32)"
        />
        
        <div
          className="absolute z-1 pointer-events-none"
          style={{
            width: "66%",
            height: "66%",
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
            className="bg-background"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          />
        </div>

        <div
          className="relative z-10"
          style={{
            width: "62%",
            height: "62%",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #10b981, #06b6d4)",
            padding: 4,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/foto1.png"
              alt="M. Arya Ardiansyah - Front End Developer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </div>

        <FloatTag
          className="hidden sm:flex"
          style={{ top: "6%", right: "4%" }}
          dotColor="#10b981"
          pulse
          label="✦ Available"
        />
        <FloatTag
          className="hidden sm:flex"
          style={{ top: "20%", left: "0%" }}
          dotColor="#06b6d4"
          label="React · Next.js"
        />
        <FloatTag
          className="hidden sm:flex"
          style={{ top: "50%", left: "-2%", transform: "translateY(-50%)" }}
          dotColor="#8b5cf6"
          label="3+ yrs exp"
        />
        <FloatTag
          className="hidden sm:flex"
          style={{ bottom: "20%", left: "0%" }}
          dotColor="#ec4899"
          label="UI/UX Design"
        />
        <FloatTag
          className="hidden sm:flex"
          style={{ bottom: "6%", right: "4%" }}
          dotColor="#f59e0b"
          label="TypeScript"
        />
        <FloatTag
          className="hidden sm:flex"
          style={{ top: "50%", right: "-2%", transform: "translateY(-50%)" }}
          dotColor="#38bdf8"
          label="Tailwind CSS"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center gap-1.5 pb-2">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 md:w-10 bg-linear-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-500 dark:text-emerald-400 text-[10px] md:text-xs font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase">
            Full Stack Developer
          </span>
          <div className="h-px w-8 md:w-10 bg-linear-to-l from-transparent to-emerald-500" />
        </div>
        <h2 className="text-foreground font-bold tracking-widest text-center text-lg md:text-xl lg:text-2xl">
          M. ARYA ARDIANSYAH
        </h2>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-muted-foreground text-[10px] md:text-xs">
            Based in Indonesia
          </span>
        </div>
      </div>
    </div>
  );
}

function PercentRing({
  pct,
  duration,
  direction,
  borderStyle,
}: {
  pct: number;
  duration: number;
  direction: "normal" | "reverse";
  borderStyle: string;
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${pct}%`,
        height: `${pct}%`,
        border: borderStyle,
        animation: `${direction === "normal" ? "spin-cw" : "spin-ccw"} ${duration}s linear infinite`,
      }}
    />
  );
}
