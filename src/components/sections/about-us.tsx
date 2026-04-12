"use client";

import { ArrowRight } from "lucide-react";
import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import Lanyard from "../reactbits/Lanyard";
import { useLanguage } from "@/context/language-context";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const { t } = useLanguage();
  const [lanyardPosition, setLanyardPosition] = useState<
    [number, number, number]
  >([0, 0, 12]);

  useEffect(() => {
    const updatePosition = () => {
      const width = window.innerWidth;
      if (width >= 1280) setLanyardPosition([0, 0, 12]);
      else setLanyardPosition([0, 0, 25]);
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
  ];

  return (
    <section className="relative bg-background min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="md:grid md:grid-cols-2 gap-4 xl:gap-0 items-start">
          <div className="w-full flex justify-center items-start">
            <div className="hidden md:block w-full max-w-md sticky top-0 h-screen">
              <Lanyard position={lanyardPosition} gravity={[0, -40, 0]} />
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 py-24">
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
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="block w-8 h-px bg-foreground/30" />
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40">
                  {t.aboutTag}
                </span>
              </div>
            </AnimatedContent>

            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.6}
            >
              <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-[1.1] tracking-tight text-foreground font-syne text-center md:text-left">
                {t.aboutHeadline1}
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                  {t.aboutHeadlineAccent}
                </span>
                <br />
                {t.aboutHeadline2}
              </h2>
            </FadeContent>

            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.7}
            >
              <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-2xl mx-auto md:mx-0 text-center md:text-left font-mono">
                {t.aboutDescription}
              </p>
            </FadeContent>

            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.75}
            >
              <div className="space-y-3 border-l-2 border-emerald-500/30 pl-4">
                <h3 className="text-sm font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest font-mono">
                  {t.journeyTitle}
                </h3>
                <p className="text-xs md:text-sm text-foreground/40 leading-relaxed font-mono">
                  {t.journeyP1}
                </p>
                <p className="text-xs md:text-sm text-foreground/40 leading-relaxed font-mono">
                  {t.journeyP2}
                </p>
              </div>
            </FadeContent>

            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.85}
            >
              <div className="flex flex-wrap gap-6 mt-2 justify-center md:justify-start">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-1 items-center md:items-start"
                  >
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

            <div className="w-full h-px bg-foreground/10" />

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
              <div className="flex justify-center md:justify-start">
                <button onClick={() => scrollToSection("github")} className="group px-6 md:px-8 py-3 md:py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/25 text-sm md:text-base font-montserrat cursor-pointer">
                  {t.viewMyWork}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
