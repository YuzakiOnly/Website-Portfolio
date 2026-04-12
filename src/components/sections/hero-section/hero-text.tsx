"use client";

import { useLanguage } from "@/context/language-context";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import FadeContent from "@/components/reactbits/FadeContent";
import ScrambledText from "@/components/reactbits/ScrambledText";
import TrueFocus from "@/components/reactbits/TrueFocus";
import TextType from "@/components/reactbits/TextType";
import { ArrowRight } from "lucide-react";

export default function HeroText({
  mobileOnly = false,
}: {
  mobileOnly?: boolean;
}) {
  const { t } = useLanguage(); 

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-5 md:gap-6 text-foreground z-10 text-center md:text-left items-center md:items-start">
      {!mobileOnly && (
        <div className="w-full hidden md:block">
          <FadeContent
            blur
            duration={1000}
            ease="bounce-out"
            initialOpacity={0}
            delay={1}
          >
            <div className="my-2 md:my-4 flex justify-start">
              <TrueFocus
                sentence={t.greeting}
                manualMode={false}
                blurAmount={5}
                borderColor="#10b981"
                animationDuration={0.8}
                pauseBetweenAnimations={1.5}
              />
            </div>
          </FadeContent>

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
            delay={0}
          >
            <div className="flex items-center gap-3 mt-3 justify-start">
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
              <TextType
                text={[...t.roles]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                className="text-emerald-500 dark:text-emerald-400 font-medium tracking-wide text-base"
              />
            </div>
          </AnimatedContent>
        </div>
      )}

      <div className="space-y-4 text-muted-foreground">
        <FadeContent
          blur
          duration={1000}
          ease="bounce-out"
          initialOpacity={0}
          delay={0.4}
        >
          <ScrambledText
            className="scrambled-text-demo leading-relaxed text-sm md:text-base"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            {t.description}
          </ScrambledText>
        </FadeContent>

        <FadeContent
          blur={false}
          duration={2000}
          ease="bounce-out"
          initialOpacity={0}
          delay={1}
        >
          <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm flex-wrap justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">🇮🇩</span>
              <span className="text-muted-foreground">{t.location}</span>
            </div>
            <div className="w-1 h-1 bg-border rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
                {t.available}
              </span>
            </div>
          </div>
        </FadeContent>
      </div>

      <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 flex-wrap justify-center md:justify-start">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse
          duration={0.8}
          ease="bounce.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={1}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="group px-6 md:px-8 py-3 md:py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/25 text-sm md:text-base cursor-pointer"
          >
            {t.getInTouch}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </AnimatedContent>

        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.4}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 md:px-8 py-3 md:py-3.5 border-2 border-emerald-500 text-emerald-500 dark:text-emerald-400 dark:hover:text-white dark:border-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm md:text-base cursor-pointer"
          >
            {t.myProjects}
          </button>
        </AnimatedContent>
      </div>
    </div>
  );
}
