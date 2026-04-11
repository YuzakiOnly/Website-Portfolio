"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import Lanyard from "../reactbits/Lanyard";
import { useState, useEffect } from "react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "3+", label: "Technologies" },
];

export default function Section() {
  const [position, setPosition] = useState<[number, number, number]>([
    0, 0, 16,
  ]); // default

  useEffect(() => {
    const updatePosition = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setPosition([0, 0, 11]); 
      } else if (width >= 768) {
        setPosition([0, 0, 20]); 
      } else {
        setPosition([0, 0, 20]); 
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <section className="relative bg-background min-h-screen flex items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        <div className="hidden md:block w-full md:w-1/2 h-130 lg:h-170 shrink-0 relative self-start">
          <Lanyard position={position} gravity={[0, -40, 0] as const} />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pl-12 pt-22">
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
            delay={0.5}
          >
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-foreground/30" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40">
                About Us
              </span>
            </div>
          </AnimatedContent>

          <FadeContent
            blur={true}
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.6}
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-foreground font-syne">
              I AM AVAILABLE
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                FOR WEBSITE
              </span>
              <br />
              PROJECT
            </h2>
          </FadeContent>

          <FadeContent
            blur={true}
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.7}
          >
            <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-md font-mono">
              I&apos;m a passionate junior front-end developer eager to create
              engaging and user-friendly web experiences. With a strong
              foundation in modern frameworks and a keen eye for design,
              I&apos;m ready to contribute to real-world projects and grow with
              a collaborative team.
            </p>
          </FadeContent>

          <FadeContent
            blur={true}
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.8}
          >
            <div className="flex flex-wrap gap-6 mt-2">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-4xl font-extrabold text-foreground tabular-nums font-syne">
                    {s.value}
                  </span>
                  <span className="text-xs text-foreground/35 uppercase tracking-widest font-mono">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeContent>

          <div className="w-full h-px bg-foreground/10 mt-1" />

          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse
            duration={0.8}
            ease="power3.out"
            disappearEase="power3.in"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.9}
          >
            <button className="group px-6 md:px-8 py-3 md:py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/25 text-sm md:text-base font-montserrat cursor-pointer">
              VIEW MY WORK
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
