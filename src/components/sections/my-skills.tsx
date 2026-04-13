"use client";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import FadeContent from "@/components/reactbits/FadeContent";
import { useLanguage } from "@/context/language-context";
import SkillCard from "./myskills/skills-card";
import { skills } from "@/lib/data/skills-data";

export default function MySkills() {
  const { t } = useLanguage();

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
                {t.skillsTag}
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
              {t.skillsHeadline1}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                {t.skillsHeadlineAccent}
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
              {t.skillsDescription}
            </p>
          </FadeContent>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-8 gap-3 md:gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={0.3 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
