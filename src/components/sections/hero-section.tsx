"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import HeroText from "./hero-section/hero-text";
import HeroGreeting from "./hero-section/hero-greeting";
import PhotoProfile from "./hero-section/photo-profile";
import NetworkCanvas from "./hero-section/network-canvas";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden font-montserrat bg-background transition-colors duration-300">
      <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
        <NetworkCanvas fullScreen />
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-3xl lg:max-w-5xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col min-h-screen items-center justify-center gap-6 py-20 md:hidden">
          <HeroGreeting />
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
            <PhotoProfile />
          </AnimatedContent>
          <HeroText mobileOnly />
        </div>

        <div className="hidden md:grid grid-cols-12 min-h-screen items-center gap-6 md:gap-8">
          <div className="col-span-6">
            <HeroText />
          </div>
          <div className="col-span-6 flex justify-center items-center">
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
              <PhotoProfile />
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
}
