"use client";

import { useRouter } from "next/navigation";

export default function ProjectNotFound() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground/40 mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold font-syne text-foreground mb-6">
          Project not found
        </h1>
        <button
          onClick={() => router.back()}
          className="text-sm font-mono text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          ← Go back
        </button>
      </div>
    </section>
  );
}
