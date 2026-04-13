/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

interface ProjectTabsProps {
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl: string;
}

type Tab = "overview" | "stack";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "stack", label: "Tech Stack" },
];

export default function ProjectTabs({
  description,
  thumbnail,
  tags,
  liveUrl,
}: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div>
      <div className="flex gap-1 mb-8 border-b border-foreground/8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px ${
              activeTab === tab.id
                ? "border-emerald-500 text-foreground"
                : "border-transparent text-foreground/35 hover:text-foreground/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="space-y-8">
          <p className="text-sm md:text-base font-mono text-foreground/55 leading-relaxed">
            {description}
          </p>

          {thumbnail && (
            <div className="rounded-2xl border border-foreground/8 overflow-hidden group">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-foreground/8 bg-foreground/2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                <span className="ml-3 flex-1 h-5 bg-foreground/5 rounded-md text-[10px] font-mono text-foreground/25 flex items-center px-3 truncate">
                  {liveUrl || "localhost:3000"}
                </span>
              </div>

              <div className="w-full aspect-video">
                <img
                  src={thumbnail}
                  alt="Project preview"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "stack" && (
        <div>
          <p className="text-xs font-mono text-foreground/35 mb-6">
            Technologies &amp; tools used in this project
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <div
                key={tag}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-foreground/8 bg-foreground/2 hover:border-emerald-500/30 hover:bg-foreground/5 transition-all duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors" />
                <span className="text-sm font-mono text-foreground/55 group-hover:text-foreground/90 transition-colors uppercase tracking-wider">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
