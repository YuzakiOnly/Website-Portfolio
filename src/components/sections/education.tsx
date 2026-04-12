"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import { useLanguage } from "@/context/language-context";
import { ArrowRight, GraduationCap, Hourglass } from "lucide-react";

export default function Education() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-background py-24 flex items-center min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16 md:mb-20">
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
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="block w-8 h-px bg-foreground/30" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40">
                {t.educationTag}
              </span>
            </div>
          </AnimatedContent>

          <FadeContent
            blur
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.4}
          >
            <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-[1.1] tracking-tight text-foreground font-syne text-center md:text-left">
              {t.educationHeadline1}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                {t.educationHeadlineAccent}
              </span>
            </h2>
          </FadeContent>

          <FadeContent
            blur
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.5}
          >
            <p className="mt-4 text-sm md:text-base text-foreground/45 font-mono leading-relaxed text-center md:text-left max-w-md">
              {t.educationDescription}
            </p>
          </FadeContent>
        </div>

        <div className="relative flex flex-col gap-0">
          <div className="absolute left-2.25 top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />

          <FadeContent
            blur
            duration={800}
            ease="ease-out"
            initialOpacity={0}
            delay={0.4}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 py-8 border-b border-foreground/8">
              <div className="hidden md:flex shrink-0 mt-1.5">
                <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 border-2 border-emerald-500 shadow-[0_0_10px_3px_rgba(16,185,129,0.35)] flex items-center justify-center">
                  <GraduationCap className="w-2.5 h-2.5 text-white" />
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base md:text-lg font-bold text-foreground font-syne">
                        {t.currentDegree}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                        {t.currentStatus}
                      </span>
                    </div>
                    <p className="text-sm font-mono text-foreground/45">
                      {t.currentSchool}
                      <span className="text-foreground/20 mx-2">·</span>
                      {t.currentLocation}
                      <span className="text-foreground/20 mx-2">·</span>
                      {t.currentPeriod}
                    </p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-foreground/40 leading-relaxed font-mono mb-4 max-w-2xl">
                  {t.currentDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {t.currentSkills?.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 bg-foreground/5 text-foreground/50 rounded-full border border-foreground/10 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeContent>

          <FadeContent
            blur
            duration={800}
            ease="ease-out"
            initialOpacity={0}
            delay={0.55}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 py-8">
              <div className="hidden md:flex shrink-0 mt-1.5">
                <span className="w-4.5 h-4.5 rounded-full border-2 border-dashed border-foreground/25 flex items-center justify-center">
                  <Hourglass className="w-2.5 h-2.5 text-foreground/30" />
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-start gap-2 mb-1">
                  <h3 className="text-base md:text-lg font-bold text-foreground/30 font-syne">
                    {t.futureTitle}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-foreground/5 text-foreground/35 rounded-full border border-foreground/10 uppercase tracking-wider">
                    {t.futureStatus}
                  </span>
                </div>
                <p className="text-sm font-mono text-foreground/25 mb-3">
                  {t.futureLocation}
                  <span className="text-foreground/15 mx-2">·</span>
                  TBD
                </p>
                <p className="text-xs md:text-sm text-foreground/25 leading-relaxed font-mono max-w-2xl italic">
                  {t.futureDescription}
                </p>
              </div>
            </div>
          </FadeContent>
        </div>

        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.6}
        >
          <div className="mt-14 flex justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-6 md:px-8 py-3 md:py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/25 text-sm md:text-base font-montserrat cursor-pointer"
            >
              {t.projectsButton}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
