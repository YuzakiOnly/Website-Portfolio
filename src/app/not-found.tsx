/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import FadeContent from "@/components/reactbits/FadeContent";
import { useLanguage } from "@/context/language-context";

function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState(text);
  const frameRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null,
  );
  const CHARS = "01!?#@$%&X/<>[]{}";

  const scramble = () => {
    let progress = 0;
    const total = text.length * 4;

    const tick = () => {
      progress++;
      const resolved = Math.floor((progress / total) * text.length);
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (progress < total) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(text);
      }
    };
    frameRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const t1 = setTimeout(scramble, 300);
    const t2 = setInterval(scramble, 5000);
    return () => {
      clearTimeout(t1);
      clearInterval(t2);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [scramble]);

  return <span className={className}>{displayed}</span>;
}

type Particle = {
  w: number;
  h: number;
  left: number;
  top: number;
  opacity: number;
  dur: number;
  delay: number;
};

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        w: Math.random() * 3 + 1,
        h: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.25 + 0.05,
        dur: Math.random() * 8 + 6,
        delay: Math.random() * 6,
      })),
    );
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-emerald-500"
          style={{
            width: `${p.w}px`,
            height: `${p.h}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            animation: `float-up ${p.dur}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-up {
          0%   { transform: translateY(0px) scale(1); opacity: 0; }
          10%  { opacity: 0.2; }
          90%  { opacity: 0.1; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const LOG_LINES: string[] = [
  "> initializing route resolver...",
  "> scanning path registry...",
  "> no match found for requested path",
  "> fallback handler triggered",
  "> status: 404 NOT_FOUND",
];

function TerminalLog() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const addLine = (index: number) => {
      if (cancelled || index >= LOG_LINES.length) return;
      const line = LOG_LINES[index];
      if (typeof line === "string") {
        setLines((prev) => [...prev, line]);
      }
      timeoutId = setTimeout(
        () => addLine(index + 1),
        320 + Math.random() * 200,
      );
    };

    timeoutId = setTimeout(() => addLine(0), 800);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="font-mono text-xs space-y-1 mt-6 max-w-sm">
      {lines
        .filter((line): line is string => typeof line === "string")
        .map((line, idx) => (
          <div
            key={idx}
            className="flex gap-2 animate-in fade-in slide-in-from-left-2 duration-300"
          >
            <span className="text-emerald-500/60">$</span>
            <span
              className={
                line.includes("404")
                  ? "text-emerald-400/80"
                  : "text-foreground/30"
              }
            >
              {line}
            </span>
          </div>
        ))}
    </div>
  );
}

export default function NotFound() {
      const { t } = useLanguage(); 

  return (
    <section className="relative bg-background min-h-screen flex items-center overflow-hidden">
      <Particles />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(16,185,129,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="md:grid md:grid-cols-2 gap-4 xl:gap-0 items-center">
          <div className="hidden md:flex justify-center items-center">
            <div className="relative select-none flex items-center justify-center">
              <span
                aria-hidden
                className="text-[clamp(6rem,14vw,10rem)] font-black leading-none font-syne text-foreground/3 absolute"
              >
                404
              </span>
              <h1 className="text-[clamp(5rem,11vw,8rem)] font-black leading-none font-syne text-foreground relative z-10">
                <ScrambleText text="404" />
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 py-24">
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.3}
            >
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="block w-8 h-px bg-foreground/30" />
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40">
                  error · 404
                </span>
              </div>
            </AnimatedContent>

            <div className="md:hidden text-center">
              <h1 className="text-[clamp(4rem,16vw,6rem)] font-black leading-none font-syne text-foreground">
                <ScrambleText text="404" />
              </h1>
            </div>

            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.5}
            >
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight text-foreground font-syne text-center md:text-left">
                {t.errorTitle1}{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                  {t.errorTitleAccent}
                </span>
              </h2>
            </FadeContent>

            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.6}
            >
              <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left font-mono">
                {t.errorDescription}
              </p>
            </FadeContent>

            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.65}
            >
              <div className="border-l-2 border-emerald-500/20 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <Terminal size={12} className="text-emerald-500/60" />
                  <span className="text-xs font-mono tracking-widest uppercase text-emerald-500/60">
                    system log
                  </span>
                </div>
                <TerminalLog />
              </div>
            </FadeContent>

            <div className="w-full h-px bg-foreground/10" />

            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.8}
            >
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/"
                  className="group px-6 md:px-8 py-3 md:py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/25 text-sm md:text-base font-montserrat cursor-pointer"
                >
                  <ArrowLeft
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  {t.errorButton}
                </Link>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
