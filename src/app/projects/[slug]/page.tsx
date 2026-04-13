/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, use } from "react";
import { useLanguage } from "@/context/language-context";
import FadeContent from "@/components/reactbits/FadeContent";

import ProjectHero from "@/components/sections/projects/project-hero";
import ProjectTabs from "@/components/sections/projects/project-tabs";
import ProjectSidebar from "@/components/sections/projects/project-sidebar";
import ProjectNavigation from "@/components/sections/projects/project-navigation";
import ProjectNotFound from "@/components/sections/projects/project-not-found";

type ProjectType = "personal" | "collaboration";

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  type: ProjectType;
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  const getProjects = (): Project[] => {
    const projects: Project[] = [];
    let index = 1;

    while ((t as any)[`project${index}Slug`] !== undefined) {
      const projectSlug = (t as any)[`project${index}Slug`];
      if (projectSlug && projectSlug !== "") {
        projects.push({
          slug: projectSlug,
          title: (t as any)[`project${index}Title`],
          description: (t as any)[`project${index}Description`],
          thumbnail: (t as any)[`project${index}Thumbnail`],
          tags: (t as any)[`project${index}Tags`] as string[],
          liveUrl: (t as any)[`project${index}LiveUrl`],
          repoUrl: (t as any)[`project${index}RepoUrl`],
          type: (t as any)[`project${index}Type`] as ProjectType,
        });
      }
      index++;
    }

    return projects;
  };

  const allProjects = getProjects();
  const validProjects = allProjects.filter((p) => p.slug && p.slug !== "");

  const currentIndex = validProjects.findIndex((p) => p.slug === slug);
  const project = validProjects[currentIndex];

  const prevProject = currentIndex > 0 ? validProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < validProjects.length - 1
      ? validProjects[currentIndex + 1]
      : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!project) return <ProjectNotFound />;

  return (
    <main className="relative bg-background min-h-screen overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <ProjectHero
        title={project.title}
        thumbnail={project.thumbnail}
        projectsTag={t.projectsTag}
        noPreviewLabel={t.noPreviewLabel}
      />

      <div className="relative z-10 -mt-32 h-48 bg-linear-to-t from-background to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 xl:gap-20">
          <FadeContent
            blur
            duration={900}
            ease="ease-out"
            initialOpacity={0}
            delay={0.2}
          >
            <ProjectTabs
              description={project.description}
              thumbnail={project.thumbnail}
              tags={project.tags}
              liveUrl={project.liveUrl}
            />
          </FadeContent>

          <FadeContent
            blur
            duration={900}
            ease="ease-out"
            initialOpacity={0}
            delay={0.35}
          >
            <ProjectSidebar
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              tags={project.tags}
              currentIndex={currentIndex}
              allProjects={validProjects}
              liveDemoLabel={t.liveDemoLabel}
              noLiveDemoLabel={t.noLiveDemoLabel}
              sourceLabel={t.sourceLabel}
              projectType={project.type}
            />
          </FadeContent>
        </div>

        <FadeContent
          blur
          duration={800}
          ease="ease-out"
          initialOpacity={0}
          delay={0.45}
        >
          <ProjectNavigation
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </FadeContent>
      </div>
    </main>
  );
}
