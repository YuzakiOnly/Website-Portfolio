/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import HeroSection from "@/components/sections/hero-section";
import Section from "@/components/sections/section";
import LiquidEther from "@/components/reactbits/LiquidEther";
import ShapeGrid from "@/components/reactbits/ShapeGrid";
import SplashCursor from "@/components/reactbits/SplashCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0f172a]">
      {/* <div className="fixed inset-0 z-0">
        <ShapeGrid
          speed={0.5}
          squareSize={30}
          direction="diagonal"
          borderColor="#ffffff"
          hoverFillColor="#4ECDC4"
          shape="square"
          hoverTrailAmount={0}
        />
      </div> */}

      <div className="relative z-10">
        <HeroSection />
        <Section />
      </div>
    </main>
  );
}
