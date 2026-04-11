/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-18 h-9 rounded-full bg-white/10 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`
        relative flex items-center gap-1.5 px-3 py-1.5 rounded-full
        border transition-all duration-300 ease-in-out
        text-xs font-semibold tracking-wide select-none
        ${
          isDark
            ? "bg-white/10 border-white/15 text-white hover:bg-white/20"
            : "bg-black/8 border-black/12 text-gray-800 hover:bg-black/15"
        }
      `}
    >
      <span
        className={`
          flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300
          ${isDark ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-400/20 text-amber-500"}
        `}
      >
        {isDark ? (
          <Moon size={11} strokeWidth={2.5} />
        ) : (
          <Sun size={11} strokeWidth={2.5} />
        )}
      </span>
      <span className="w-9 text-center">{isDark ? "Dark" : "Light"}</span>
      {/* pill indicator */}
      <span
        className={`
          absolute inset-0 rounded-full ring-1 transition-all duration-300
          ${isDark ? "ring-emerald-500/25" : "ring-amber-400/30"}
        `}
      />
    </button>
  );
}
