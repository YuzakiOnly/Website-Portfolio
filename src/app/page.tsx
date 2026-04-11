/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import HeroSection from "@/components/sections/hero-section";
import Section from "@/components/sections/section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      <div className="relative z-10">
        <HeroSection />
        <Section />
      </div>
    </main>
  );
}
