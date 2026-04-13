/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useRouter } from "next/navigation";
import { ExternalLink, Users, GitCommit } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

interface GitHubContributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface ProjectItem {
  slug: string;
}

interface ProjectSidebarProps {
  liveUrl: string;
  repoUrl: string;
  tags: string[];
  currentIndex: number;
  allProjects: ProjectItem[];
  liveDemoLabel: string;
  noLiveDemoLabel: string;
  sourceLabel: string;
  projectType?: "personal" | "collaboration";
}

function parseRepoPath(repoUrl: string): string | null {
  try {
    const url = new URL(repoUrl);
    if (url.hostname !== "github.com") return null;
    const parts = url.pathname.replace(/^\//, "").split("/");
    if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
    return null;
  } catch {
    return null;
  }
}

function ContributorsSection({ repoUrl }: { repoUrl: string }) {
  const [contributors, setContributors] = useState<GitHubContributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const repoPath = parseRepoPath(repoUrl);

  useEffect(() => {
    if (!repoPath) {
      setLoading(false);
      setError(true);
      return;
    }

    const controller = new AbortController();

    fetch(`https://api.github.com/repos/${repoPath}/contributors?per_page=10`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data: GitHubContributor[]) => {
        setContributors(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [repoPath]);

  if (loading) {
    return (
      <div className="flex flex-col gap-2.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-3 animate-pulse">
            <div className="w-8 h-8 rounded-full bg-foreground/8" />
            <div className="flex flex-col gap-1 flex-1">
              <div className="h-2.5 bg-foreground/8 rounded w-24" />
              <div className="h-2 bg-foreground/5 rounded w-16" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error || contributors.length === 0) {
    return (
      <p className="text-[10px] font-mono text-foreground/25 italic">
        Contributors data unavailable
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {contributors.map((c) => (
        <a
          key={c.login}
          href={c.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/contrib flex items-center gap-3 rounded-xl p-2 -mx-2 hover:bg-foreground/4 transition-colors duration-200"
        >
          <img
            src={c.avatar_url}
            alt={c.login}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border border-foreground/10 object-cover shrink-0"
          />
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-xs font-mono text-foreground/70 group-hover/contrib:text-foreground transition-colors truncate">
              {c.login}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-mono text-foreground/30">
              <GitCommit className="w-2.5 h-2.5" />
              {c.contributions} commit{c.contributions !== 1 ? "s" : ""}
            </span>
          </div>
          <FaGithub className="w-3.5 h-3.5 text-foreground/20 group-hover/contrib:text-foreground/50 transition-colors shrink-0" />
        </a>
      ))}
    </div>
  );
}

export default function ProjectSidebar({
  liveUrl,
  repoUrl,
  tags,
  currentIndex,
  allProjects,
  liveDemoLabel,
  noLiveDemoLabel,
  sourceLabel,
}: ProjectSidebarProps) {
  const router = useRouter();

  return (
    <aside className="space-y-5">
      <div className="flex flex-col gap-2.5">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-background font-mono text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <ExternalLink className="w-4 h-4" />
            {liveDemoLabel}
          </a>
        ) : (
          <div className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl border border-foreground/6 text-foreground/25 font-mono text-sm cursor-not-allowed">
            {noLiveDemoLabel}
          </div>
        )}

        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl border border-foreground/10 bg-foreground/3 hover:border-foreground/20 hover:bg-foreground/6 text-foreground/60 hover:text-foreground font-mono text-sm transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
            {sourceLabel}
          </a>
        )}
      </div>

      <div className="h-px bg-foreground/8" />

      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-3">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-1 bg-foreground/5 text-foreground/45 rounded-full border border-foreground/8 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {repoUrl && (
        <>
          <div className="h-px bg-foreground/8" />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-3 h-3 text-violet-400" />
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30">
                Contributors
              </p>
            </div>
            <ContributorsSection repoUrl={repoUrl} />
          </div>
        </>
      )}

      <div className="h-px bg-foreground/8" />

      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-3">
          Project {currentIndex + 1} of {allProjects.length}
        </p>
        <div className="flex gap-1.5">
          {allProjects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => router.push(`/projects/${p.slug}`)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-emerald-500"
                  : "w-2 bg-foreground/15 hover:bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
