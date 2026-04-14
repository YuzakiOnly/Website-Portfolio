"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectItem {
  slug: string;
  title: string;
}

interface ProjectNavigationProps {
  prevProject: ProjectItem | null;
  nextProject: ProjectItem | null;
}

export default function ProjectNavigation({
  prevProject,
  nextProject,
}: ProjectNavigationProps) {
  const router = useRouter();

  if (!prevProject && !nextProject) return null;

  return (
    <div className="mt-20 pt-10 border-t border-foreground/8">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-6">
        More projects
      </p>
      <div className="grid grid-cols-2 gap-4">
        {prevProject ? (
          <button
            onClick={() => router.push(`/projects/${prevProject.slug}`)}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-foreground/8 bg-foreground/2 hover:border-emerald-500/20 hover:bg-foreground/5 transition-all duration-300 text-left"
          >
            <ArrowLeft className="w-4 h-4 text-foreground/30 group-hover:text-emerald-500 transition-colors shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-wider text-foreground/30 mb-1">
                Previous
              </p>
              <p className="text-sm font-bold font-syne text-foreground group-hover:text-emerald-500 transition-colors truncate">
                {prevProject.title}
              </p>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextProject ? (
          <button
            onClick={() => router.push(`/projects/${nextProject.slug}`)}
            className={`group flex items-center p-5 rounded-2xl border border-foreground/8 bg-foreground/2 hover:border-emerald-500/20 hover:bg-foreground/5 transition-all duration-300 text-right ${
              !prevProject ? "justify-end col-span-2" : "justify-between"
            }`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-wider text-foreground/30 mb-1">
                Next
              </p>
              <p className="text-sm font-bold font-syne text-foreground group-hover:text-emerald-500 transition-colors truncate">
                {nextProject.title}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-emerald-500 transition-colors shrink-0" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
