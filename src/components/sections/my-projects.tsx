/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import { useLanguage } from "@/context/language-context";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Loader2,
  User,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ScrollArea } from "../ui/scroll-area";

type ProjectType = "personal" | "collaboration";

const ProjectTypeBadge = ({ type }: { type: ProjectType }) => {
  const config = {
    collaboration: { icon: Users, color: "violet", label: "Collaboration" },
    personal: { icon: User, color: "sky", label: "Personal" },
  };

  const { icon: Icon, color, label } = config[type];

  return (
    <span
      className={`px-2.5 py-1 rounded-full bg-${color}-500/15 backdrop-blur-sm border border-${color}-500/30 text-[10px] font-mono text-${color}-400 uppercase tracking-wider font-bold flex items-center gap-1.5`}
    >
      <Icon size={10} strokeWidth={2.5} />
      {label}
    </span>
  );
};

export default function MyProjects() {
  const { t } = useLanguage();
  const router = useRouter();
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

   const getProjects = () => {
     const projects = [];
     let index = 1;

     while ((t as any)[`project${index}Slug`] !== undefined) {
       projects.push({
         slug: (t as any)[`project${index}Slug`],
         title: (t as any)[`project${index}Title`],
         description: (t as any)[`project${index}Description`],
         thumbnail: (t as any)[`project${index}Thumbnail`],
         tags: (t as any)[`project${index}Tags`],
         liveUrl: (t as any)[`project${index}LiveUrl`],
         repoUrl: (t as any)[`project${index}RepoUrl`],
         type: (t as any)[`project${index}Type`] as ProjectType,
       });
       index++;
     }

     return projects;
   };

  const projects = getProjects();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector("[data-card]") as HTMLElement;
    const amount = card ? card.offsetWidth + 24 : 360;
    trackRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (!mounted) return null;

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
                <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                    <User size={10} /> Personal
                  </span>
                  <span className="text-foreground/20">·</span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-violet-400 uppercase tracking-wider">
                    <Users size={10} /> Collaboration
                  </span>
                </div>
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
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-foreground/10 hover:border-emerald-500/40 flex items-center justify-center text-foreground/40 hover:text-emerald-500 transition-all duration-300"
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
          className="flex gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ maxWidth: "100vw" }}
        >
          <div className="shrink-0 w-0 xl:w-40" />

          {projects.map((project, i) => (
            <article
              key={project.slug || i}
              data-card
              onClick={() =>
                project.slug && router.push(`/projects/${project.slug}`)
              }
              className={`group shrink-0 w-[320px] md:w-95 flex flex-col rounded-2xl border border-foreground/8 bg-foreground/2 transition-all duration-300 overflow-hidden
                ${project.slug ? "hover:border-emerald-500/20 hover:bg-foreground/5 cursor-pointer" : "opacity-60 cursor-not-allowed"}`}
            >
              <div className="relative w-full aspect-video bg-foreground/5 overflow-hidden">
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                  {!project.slug && (
                    <span className="px-2.5 py-1 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/40 text-[10px] font-mono text-white/70 dark:text-red-500/70 uppercase tracking-wider font-bold flex items-center gap-1.5">
                      <Loader2
                        size={12}
                        className="animate-spin"
                        strokeWidth={2.5}
                      />
                      In Progress
                    </span>
                  )}
                  <ProjectTypeBadge type={project.type} />
                </div>

                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 text-[11px] font-mono text-foreground/70 uppercase tracking-wider">
                    View details →
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
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

                <ScrollArea className="h-20 w-full pr-2">
                  <p className="text-xs font-mono text-foreground/40 leading-relaxed">
                    {project.description}
                  </p>
                </ScrollArea>

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
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
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
