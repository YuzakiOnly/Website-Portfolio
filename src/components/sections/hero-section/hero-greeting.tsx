"use client";

import FadeContent from "@/components/reactbits/FadeContent";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import TrueFocus from "@/components/reactbits/TrueFocus";
import TextType from "@/components/reactbits/TextType";

export default function HeroGreeting() {
  return (
    <div className="flex flex-col items-center text-center w-full text-foreground">
      <FadeContent
        blur
        duration={1000}
        ease="bounce-out"
        initialOpacity={0}
        delay={1}
      >
        <div className="my-2 flex justify-center">
          <TrueFocus
            sentence="Hellooo, I'm Aryaa."
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
        <div className="flex items-center gap-3 mt-3 justify-center">
          <div className="h-1 w-8 bg-emerald-500 rounded-full" />
          <TextType
            text={[
              "FRONT END DEVELOPER",
              "UI/UX DESIGNER",
              "REACT EXPERT",
              "CREATIVE CODER",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            className="text-emerald-500 dark:text-emerald-400 font-medium tracking-wide text-sm"
          />
        </div>
      </AnimatedContent>
    </div>
  );
}
