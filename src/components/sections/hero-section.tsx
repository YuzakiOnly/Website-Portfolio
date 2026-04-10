/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import ScrambledText from "../reactbits/ScrambledText";
import TextType from "../reactbits/TextType";
import TrueFocus from "../reactbits/TrueFocus";

export default function HeroSection() {
  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 font-montserrat">
      <div className="mx-auto h-screen max-w-7xl px-6">
        <div className="grid grid-cols-12 h-full items-center gap-8">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-6 text-white z-10">
            <div className="flex items-center gap-2 flex-wrap">
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse
                duration={1}
                ease="power3.out"
                disappearEase="power3.in"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.5}
              >
                <div className="bg-linear-to-r from-emerald-500 to-emerald-600 px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/25">
                  <h1 className="text-white font-semibold text-sm tracking-wide">
                    M. ARYA ARDIANSYAH
                  </h1>
                </div>
              </AnimatedContent>
            </div>

            <div>
              <FadeContent
                blur={true}
                duration={1000}
                ease="bounce-out"
                disappearEase="bounce-in"
                initialOpacity={0}
                delay={1}
              >
                <div className="my-4">
                  <TrueFocus
                    sentence="Hellooo, I'm Aryaa"
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
                disappearEase="power3.in"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <div className="flex items-center gap-3 mt-3">
                  <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                  <TextType
                    text={[
                      "FRONT END DEVELOPER",
                      "UI/UX DESIGNER",
                      "REACT EXPERT",
                      "CREATIVE CODER",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                    deletingSpeed={50}
                    className="text-emerald-400 font-medium tracking-wide"
                  />
                </div>
              </AnimatedContent>
            </div>

            <div className="space-y-4 text-gray-300 mt-2">
              <FadeContent
                blur={true}
                duration={1000}
                ease="bounce-out"
                disappearEase="bounce-in"
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
                  A passionate front-end developer specializing in building
                  exceptional digital experiences with a focus on responsive
                  design. I create efficient, scalable, and user-friendly
                  interfaces that solve real-world problems while prioritizing
                  accessibility and performance optimization.
                </ScrambledText>
              </FadeContent>
              <FadeContent
                blur={false}
                duration={2000}
                ease="bounce-out"
                disappearEase="bounce-in"
                initialOpacity={0}
                delay={1}
              >
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇮🇩</span>
                    <span>Based in Indonesia</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 font-semibold">
                      Available for Work
                    </span>
                  </div>
                </div>
              </FadeContent>
            </div>

            <div className="flex gap-4 mt-6">
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse
                duration={0.8}
                ease="bounce.out"
                disappearEase="bounce.in"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={1}
              >
                <button className="group px-8 py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/25">
                  GET IN TOUCH
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </AnimatedContent>
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse
                duration={2}
                ease="power3.out"
                disappearEase="power3.in"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.4}
              >
                <button className="px-8 py-3.5 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                  MY PROJECTS
                </button>
              </AnimatedContent>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <AnimatedContent
              distance={30}
              direction="horizontal"
              duration={1}
              ease="bounce.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1.5}
            >
              <div className="relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-87.5 h-87.5 md:w-112.5 md:h-112.5 lg:w-137.5 lg:h-137.5 rounded-full bg-linear-to-r from-emerald-400/30 to-cyan-400/30 animate-spin-slow blur-xl"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-95 h-95 md:w-120 md:h-120 lg:w-145 lg:h-145 rounded-full border-2 border-dashed border-emerald-400/40"></div>
                </div>

                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-112.5 lg:h-112.5 z-10">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/20"></div>

                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-emerald-500/20">
                    <img
                      src="/assets/foto1.png"
                      alt="M. Arya Ardiansyah - Front End Developer"
                      className="w-full h-full object-cover object-top scale-105 transition-transform duration-500 "
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-500/30 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-105 h-105 md:w-130 md:h-130 lg:w-155 lg:h-155 rounded-full border border-emerald-400/20 animate-[spin_10s_linear_infinite]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-115 h-115 md:w-140 md:h-140 lg:w-165 lg:h-165 rounded-full border border-cyan-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
}
