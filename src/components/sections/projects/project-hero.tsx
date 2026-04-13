/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

interface ProjectHeroProps {
  title: string;
  thumbnail: string;
  projectsTag: string;
  noPreviewLabel: string;
}

export default function ProjectHero({
  title,
  thumbnail,
  projectsTag,
  noPreviewLabel,
}: ProjectHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToProjectsSection = () => {
    router.push("/?scrollTo=projects");
  };

  return (
    <div className="relative w-full h-[54vh] md:h-[65vh] overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 will-change-transform ">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
          />
        ) : (
          <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
            <span className="text-xs font-mono text-foreground/20 uppercase tracking-widest">
              {noPreviewLabel}
            </span>
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-background via-background/90 to-transparent" />

      <div className="absolute top-20 left-6 md:left-16 z-10">
        <button
          onClick={goToProjectsSection}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-background/60 backdrop-blur-sm text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-all duration-300 text-xs font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-10 z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.1}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-foreground/30" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40">
                {projectsTag}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold font-syne leading-[1.05] tracking-tight text-foreground">
              {title}
            </h1>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
