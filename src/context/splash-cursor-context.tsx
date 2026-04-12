/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface SplashCursorContextType {
  splashEnabled: boolean;
  toggleSplash: () => void;
}

const SplashCursorContext = createContext<SplashCursorContextType>({
  splashEnabled: false,
  toggleSplash: () => {},
});

export function SplashCursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [splashEnabled, setSplashEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("splash-cursor-enabled");
    setSplashEnabled(stored === "true");
  }, []);

  const toggleSplash = () => {
    setSplashEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("splash-cursor-enabled", String(next));
      return next;
    });
  };

  return (
    <SplashCursorContext.Provider value={{ splashEnabled, toggleSplash }}>
      {children}
    </SplashCursorContext.Provider>
  );
}

export function useSplashCursor() {
  return useContext(SplashCursorContext);
}
