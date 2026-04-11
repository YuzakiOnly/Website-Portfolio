/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import SplashCursor from "@/components/reactbits/SplashCursor";
import HeroSection from "@/components/sections/hero-section";
import Section from "@/components/sections/about-us";
import LogoLoopSection from "@/components/sections/logo-loop-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        {/* <SplashCursor /> */}
        <section id="home">
          <HeroSection />
        </section>
        <LogoLoopSection />
        <section id="about">
          <Section />
        </section>
      </div>
    </main>
  );
}
