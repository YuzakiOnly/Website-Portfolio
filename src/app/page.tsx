/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import HeroSection from "@/components/sections/hero-section";
import Section from "@/components/sections/section";
import ShapeGrid from "@/components/ui/ShapeGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-linear-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      <div className="fixed inset-0 z-0 opacity-60">
        <ShapeGrid
          speed={0.8}
          squareSize={40}
          direction="diagonal"
          borderColor="#FFE66D"
          hoverFillColor="#4ECDC4"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <Section />
      </div>
    </main>
  );
}
