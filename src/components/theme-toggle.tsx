/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-1">
        <div className="w-8 h-8 rounded-full bg-muted/50 animate-pulse" />
        <div className="w-8 h-8 rounded-full bg-muted/50 animate-pulse" />
        <div className="w-8 h-8 rounded-full bg-muted/50 animate-pulse" />
      </div>
    );
  }

  const themes = [
    { value: "light", icon: Sun, label: "Light", color: "amber" },
    { value: "dark", icon: Moon, label: "Dark", color: "emerald" },
    { value: "system", icon: Monitor, label: "System", color: "blue" },
  ];

  return (
    <div className="flex gap-1 bg-muted/50 rounded-full p-1 border border-border">
      {themes.map(({ value, icon: Icon, label, color }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            aria-label={label}
            className={`
              relative flex items-center justify-center
              w-8 h-8 rounded-full transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? `bg-${color}-500/20 text-${color}-400 ring-1 ring-${color}-500/25`
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }
            `}
            title={label}
          >
            <Icon size={14} strokeWidth={2.5} />
          </button>
        );
      })}
    </div>
  );
}
