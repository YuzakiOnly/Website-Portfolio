"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import { useLanguage } from "@/context/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function WorkExperience() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t.exp1Role,
      company: t.exp1Company,
      period: t.exp1Period,
      location: t.exp1Location,
      description: t.exp1Description,
      tags: t.exp1Tags,
      current: t.exp1Current,
      currentLabel: t.exp1CurrentLabel,
    },
    {
      role: t.exp2Role,
      company: t.exp2Company,
      period: t.exp2Period,
      location: t.exp2Location,
      description: t.exp2Description,
      tags: t.exp2Tags,
      current: t.exp2Current,
      currentLabel: t.exp2Current,
    },
    {
      role: t.exp3Role,
      company: t.exp3Company,
      period: t.exp3Period,
      location: t.exp3Location,
      description: t.exp3Description,
      tags: t.exp3Tags,
      current: t.exp3Current,
      currentLabel: t.exp3Current,
    },
    {
      role: t.exp4Role,
      company: t.exp4Company,
      period: t.exp4Period,
      location: t.exp4Location,
      description: t.exp4Description,
      tags: t.exp4Tags,
      current: t.exp4Current,
      currentLabel: t.exp4Current,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-background min-h-screen flex items-center py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16 md:mb-8">
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
                {t.experienceTag}
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
              {t.experienceHeadline1}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                {t.experienceHeadlineAccent}
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
              {t.experienceDescription}
            </p>
          </FadeContent>
        </div>

        <div className="relative">
          <div className="absolute left-1.25 top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />

          <Accordion type="single" collapsible className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <FadeContent
                key={exp.company}
                blur
                duration={800}
                ease="ease-out"
                initialOpacity={0}
                delay={0.3 + i * 0.12}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="border-b border-foreground/8 last:border-b-0"
                >
                  <AccordionTrigger className="py-7 hover:no-underline group [&>svg]:hidden">
                    <div className="flex items-start gap-4 w-full text-left">
                      <div className="hidden md:flex shrink-0 items-center justify-center mt-1.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                            exp.current
                              ? "bg-emerald-500 border-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.4)]"
                              : "bg-background border-foreground/25 group-hover:border-emerald-500"
                          }`}
                        />
                      </div>

                      <div className="flex-1 flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base md:text-lg font-bold text-foreground font-syne group-hover:text-emerald-500 transition-colors duration-300">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                                {exp.currentLabel}
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-mono text-foreground/45">
                            {exp.company}
                            <span className="text-foreground/20 mx-2">·</span>
                            {exp.location}
                            <span className="text-foreground/20 mx-2">·</span>
                            {exp.period}
                          </p>
                        </div>

                        <ChevronDown className="w-4 h-4 text-foreground/30 mt-1 shrink-0 transition-transform duration-300 group-data-[state=open]:-rotate-180" />
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-7">
                    <div className="md:pl-6.5">
                      <p className="text-xs md:text-sm text-foreground/45 leading-relaxed font-mono mb-4 max-w-2xl">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2.5 py-1 bg-foreground/5 text-foreground/50 rounded-full border border-foreground/10 uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </FadeContent>
            ))}
          </Accordion>
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
