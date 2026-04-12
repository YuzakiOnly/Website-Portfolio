/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import { useLanguage } from "@/context/language-context";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function MyProjects() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const projects = [
    {
      title: t.project1Title,
      description: t.project1Description,
      thumbnail: t.project1Thumbnail,
      tags: t.project1Tags,
      liveUrl: t.project1LiveUrl,
      repoUrl: t.project1RepoUrl,
    },
    {
      title: t.project2Title,
      description: t.project2Description,
      thumbnail: t.project2Thumbnail,
      tags: t.project2Tags,
      liveUrl: t.project2LiveUrl,
      repoUrl: t.project2RepoUrl,
    },
    {
      title: t.project3Title,
      description: t.project3Description,
      thumbnail: t.project3Thumbnail,
      tags: t.project3Tags,
      liveUrl: t.project3LiveUrl,
      repoUrl: t.project3RepoUrl,
    },
    {
      title: t.project4Title,
      description: t.project4Description,
      thumbnail: t.project4Thumbnail,
      tags: t.project4Tags,
      liveUrl: t.project4LiveUrl,
      repoUrl: t.project4RepoUrl,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector("[data-card]") as HTMLElement;
    const amount = card ? card.offsetWidth + 24 : 360;
    trackRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-14 md:mb-16">
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
            delay={0.3}
          >
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="block w-8 h-px bg-foreground/30" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40">
                {t.projectsTag}
              </span>
            </div>
          </AnimatedContent>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <FadeContent
              blur
              duration={1000}
              ease="ease-out"
              initialOpacity={0}
              delay={0.4}
            >
              <div>
                <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-[1.1] tracking-tight text-foreground font-syne text-center md:text-left">
                  {t.projectsHeadline1}
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                    {t.projectsHeadlineAccent}
                  </span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-foreground/45 font-mono leading-relaxed text-center md:text-left max-w-md">
                  {t.projectsDescription}
                </p>
              </div>
            </FadeContent>

            <FadeContent
              blur
              duration={800}
              ease="ease-out"
              initialOpacity={0}
              delay={0.5}
            >
              <div className="flex items-center gap-3 justify-end md:justify-start">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-foreground/10 hover:border-emerald-500/40 flex items-center justify-center text-foreground/40 hover:text-emerald-500 transition-all duration-300"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-foreground/10 hover:border-emerald-500/40 flex items-center justify-center text-foreground/40 hover:text-emerald-500 transition-all duration-300"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>

      <FadeContent
        blur
        duration={900}
        ease="ease-out"
        initialOpacity={0}
        delay={0.5}
      >
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-6
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ maxWidth: "100vw" }}
        >
          <div className="shrink-0 w-0 xl:w-40 " />

          {projects.map((project) => (
            <article
              key={project.title}
              data-card
              className="group shrink-0 w-[320px] md:w-95 flex flex-col rounded-2xl border border-foreground/8 bg-foreground/2 hover:border-emerald-500/20 hover:bg-foreground/5 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-video bg-foreground/5 overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs font-mono text-foreground/20 uppercase tracking-widest">
                      {t.noPreviewLabel}
                    </span>
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="View source code"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-emerald-500 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-base font-bold text-foreground font-syne group-hover:text-emerald-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-foreground/40 leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 bg-foreground/5 text-foreground/45 rounded-full border border-foreground/8 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-foreground/8 mt-auto">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-mono text-foreground/35 hover:text-foreground transition-colors duration-200"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      {t.sourceLabel}
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 hover:text-emerald-400 transition-colors duration-200 ml-auto"
                    >
                      {t.liveDemoLabel}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-foreground/25 ml-auto">
                      {t.noLiveDemoLabel}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}

          <div className="shrink-0 w-6 lg:w-16" />
        </div>
      </FadeContent>
    </section>
  );
}
