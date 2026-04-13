/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedContent from "../reactbits/AnimatedContent";
import FadeContent from "../reactbits/FadeContent";
import CountUp from "../reactbits/CountUp";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { useInView } from "react-intersection-observer";
import { GitFork, Star, Users, BookOpen, ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "YuzakiOnly";

const TARGET_REPOSITORIES = [
  "Website-Portfolio",
  "Jaga-Modal",
  "Laporin_Banyuwangi",
  "Recipes_QuestCoff",
];

const REPO_FILTER_CONFIG = {
  mode: "whitelist" as "whitelist" | "featured", 
  maxRepos: 6, 
  minStars: 0, 
  excludeForks: true, 
  excludeArchived: true, 
  sortBy: "stars" as "stars" | "updated" | "created", 
};

interface GitHubProfile {
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  created_at: string;
  topics?: string[];
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  default: "#6e7681",
};

export default function GitHubSection() {
  const { t } = useLanguage();
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    async function fetchGitHub() {
      try {
        setError(null);

        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, // Fetch lebih banyak untuk filtering
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);

        let filteredRepos = [...reposData];

        if (
          REPO_FILTER_CONFIG.mode === "whitelist" &&
          TARGET_REPOSITORIES.length > 0
        ) {
          filteredRepos = filteredRepos.filter((repo: GitHubRepo) =>
            TARGET_REPOSITORIES.includes(repo.name),
          );
        } else if (REPO_FILTER_CONFIG.mode === "featured") {
          filteredRepos = filteredRepos.filter(
            (repo: GitHubRepo) =>
              repo.topics?.includes("featured") ||
              repo.topics?.includes("portfolio") ||
              repo.description?.toLowerCase().includes("project") ||
              repo.description?.toLowerCase().includes("app") ||
              repo.stargazers_count > 2,
          );
        }

        if (REPO_FILTER_CONFIG.excludeForks) {
          filteredRepos = filteredRepos.filter(
            (repo: GitHubRepo) => !repo.fork,
          );
        }

        if (REPO_FILTER_CONFIG.excludeArchived) {
          filteredRepos = filteredRepos.filter(
            (repo: GitHubRepo) => !repo.archived,
          );
        }

        if (REPO_FILTER_CONFIG.minStars > 0) {
          filteredRepos = filteredRepos.filter(
            (repo: GitHubRepo) =>
              repo.stargazers_count >= REPO_FILTER_CONFIG.minStars,
          );
        }

        if (REPO_FILTER_CONFIG.sortBy === "stars") {
          filteredRepos.sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              b.stargazers_count - a.stargazers_count,
          );
        } else if (REPO_FILTER_CONFIG.sortBy === "updated") {
          filteredRepos.sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          );
        } else if (REPO_FILTER_CONFIG.sortBy === "created") {
          filteredRepos.sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime(),
          );
        }

        setRepos(filteredRepos.slice(0, REPO_FILTER_CONFIG.maxRepos));
      } catch (e) {
        console.error("Error fetching GitHub data:", e);
        setError("Failed to load GitHub data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchGitHub();
  }, []);

  const stats = profile
    ? [
        { label: t.labelRepos, value: profile.public_repos, icon: BookOpen },
        { label: t.labelFollowers, value: profile.followers, icon: Users },
        { label: t.labelFollowing, value: profile.following, icon: Users },
      ]
    : [];

  return (
    <section className="relative bg-background py-24 overflow-visible">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16 md:mb-20">
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
                {t.githubTag}
              </span>
            </div>
          </AnimatedContent>

          <FadeContent
            blur
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.4}
          >
            <h2 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-[1.1] tracking-tight text-foreground font-syne text-center md:text-left">
              {t.githubHeadline1}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                {t.githubHeadlineAccent}
              </span>
            </h2>
          </FadeContent>

          <FadeContent
            blur
            duration={1000}
            ease="ease-out"
            initialOpacity={0}
            delay={0.5}
          >
            <p className="mt-4 text-sm md:text-base text-foreground/45 font-mono leading-relaxed text-center md:text-left max-w-md">
              {t.githubDescription}
            </p>
          </FadeContent>
        </div>

        {loading ? (
          <div className="flex flex-col gap-8 animate-pulse">
            <div className="flex gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-20 flex-1 rounded-2xl bg-foreground/5"
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-36 rounded-2xl bg-foreground/5" />
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 font-mono text-sm">{error}</p>
          </div>
        ) : (
          <div ref={ref} className="flex flex-col gap-10">
            <FadeContent
              blur
              duration={800}
              ease="ease-out"
              initialOpacity={0}
              delay={0.4}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                {profile && (
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 group"
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-foreground/10 group-hover:border-emerald-500/40 transition-all duration-300">
                      <img
                        src={profile.avatar_url}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                )}

                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-syne">
                      {profile?.name ?? GITHUB_USERNAME}
                    </h3>
                    <p className="text-xs font-mono text-foreground/40 mt-0.5">
                      @{GITHUB_USERNAME}
                    </p>
                    {profile?.bio && (
                      <p className="text-sm font-mono text-foreground/45 mt-2 max-w-sm">
                        {profile.bio}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col items-center md:items-start gap-0.5"
                      >
                        <div className="flex items-baseline gap-1">
                          {inView ? (
                            <CountUp
                              from={0}
                              to={s.value}
                              duration={1.4}
                              separator=","
                              className="text-2xl font-extrabold text-foreground tabular-nums font-syne"
                            />
                          ) : (
                            <span className="text-2xl font-extrabold text-foreground font-syne">
                              0
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-foreground/35 uppercase tracking-widest">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/10 hover:border-emerald-500/30 text-sm font-mono text-foreground/40 hover:text-emerald-500 transition-all duration-300 shrink-0"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  {t.viewProfileButton}
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </FadeContent>

            <FadeContent
              blur
              duration={800}
              ease="ease-out"
              initialOpacity={0}
              delay={0.5}
            >
              <div className="rounded-2xl border border-foreground/8 overflow-hidden p-4 bg-foreground/2">
                <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest mb-3">
                  {t.contributionActivity}
                </p>
                <img
                  src={`https://ghchart.rshah.org/10b981/${GITHUB_USERNAME}`}
                  alt="GitHub contribution chart"
                  className="w-full h-auto hidden dark:block"
                  style={{
                    filter:
                      "invert(1) hue-rotate(90deg) saturate(1.5) brightness(0.85)",
                  }}
                />
                <img
                  src={`https://ghchart.rshah.org/10b981/${GITHUB_USERNAME}`}
                  alt="GitHub contribution chart"
                  className="w-full h-auto dark:hidden opacity-80"
                />
              </div>
            </FadeContent>

            {repos.length === 0 ? (
              <div className="text-center py-12 border border-foreground/8 rounded-2xl bg-foreground/2">
                <p className="text-foreground/40 font-mono text-sm">
                  No featured repositories to display.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo, i) => (
                  <FadeContent
                    key={repo.id}
                    blur
                    duration={700}
                    ease="ease-out"
                    initialOpacity={0}
                    delay={0.4 + i * 0.07}
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-5 rounded-2xl border border-foreground/8 bg-foreground/2 hover:bg-foreground/5 hover:border-emerald-500/20 transition-all duration-300 h-full"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-foreground font-syne group-hover:text-emerald-500 transition-colors duration-300 leading-snug">
                          {repo.name}
                        </h4>
                        <ExternalLink className="w-3.5 h-3.5 text-foreground/20 group-hover:text-emerald-500 shrink-0 mt-0.5 transition-colors duration-300" />
                      </div>

                      <p className="text-xs font-mono text-foreground/40 leading-relaxed flex-1 line-clamp-2">
                        {repo.description ?? "No description provided."}
                      </p>

                      <div className="flex items-center gap-4 mt-auto">
                        {repo.language && (
                          <span className="flex items-center gap-1.5 text-[10px] font-mono text-foreground/35">
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{
                                backgroundColor:
                                  languageColors[repo.language] ??
                                  languageColors.default,
                              }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[10px] font-mono text-foreground/35">
                          <Star className="w-3 h-3" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-mono text-foreground/35">
                          <GitFork className="w-3 h-3" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </a>
                  </FadeContent>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
