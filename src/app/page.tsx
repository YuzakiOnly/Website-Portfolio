"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import AboutUs from "@/components/sections/about-us";
import Education from "@/components/sections/education";
import GitHubSection from "@/components/sections/github-section";
import HeroSection from "@/components/sections/hero-section";
import LogoLoopSection from "@/components/sections/logo-loop-section";
import MyProjects from "@/components/sections/my-projects";
import MySkills from "@/components/sections/my-skills";
import WorkExperience from "@/components/sections/work-experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo === "projects" && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, "", "/");
      }, 100);
    }
  }, [searchParams]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <LogoLoopSection />
        <section id="about">
          <AboutUs />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="work">
          <WorkExperience />
        </section>
        <section id="skills">
          <MySkills />
        </section>
        <section id="github">
          <GitHubSection />
        </section>
        <section id="projects" ref={projectsRef}>
          <MyProjects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
