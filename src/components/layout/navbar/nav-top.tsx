"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { HiCursorArrowRipple } from "react-icons/hi2";
import ReactCountryFlag from "react-country-flag";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import { useLanguage } from "@/context/language-context";
import { useSplashCursor } from "@/context/splash-cursor-context";
import Sidebar from "@/components/layout/sidebar";
import type { Locale } from "@/lib/i18n";

const languageFlags: Record<Locale, string> = {
  id: "ID",
  en: "US",
};

export default function NavTop() {
  const { locale, setLocale } = useLanguage();
  const { splashEnabled, toggleSplash } = useSplashCursor();
  const [isChanging, setIsChanging] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleLanguage = () => {
    if (isChanging) return;
    setIsChanging(true);
    setLocale(locale === "id" ? "en" : "id");
    setTimeout(() => setIsChanging(false), 400);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <AnimatedContent
              distance={30}
              direction="horizontal"
              reverse
              duration={0.6}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1.5}
            >
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setSidebarOpen(true)}
                  className="sm:hidden bg-muted/50 border-border text-foreground hover:bg-muted/80 shadow-sm cursor-pointer transition-all duration-300"
                  aria-label="Open menu"
                >
                  <Menu className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  disabled={isChanging}
                  className="gap-2 bg-muted/50 border-border text-foreground hover:bg-muted/80 shadow-sm cursor-pointer transition-all duration-300"
                >
                  <ReactCountryFlag
                    countryCode={languageFlags[locale]}
                    svg
                    style={{
                      width: "18px",
                      height: "13px",
                      objectFit: "cover",
                      borderRadius: "2px",
                    }}
                  />
                  <span className="text-xs font-semibold font-montserrat tracking-wider">
                    {locale.toUpperCase()}
                  </span>
                </Button>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={30}
              direction="horizontal"
              duration={0.6}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1.5}
            >
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleSplash}
                  title={
                    splashEnabled
                      ? "Disable splash cursor"
                      : "Enable splash cursor"
                  }
                  className="gap-1.5 bg-muted/50 border-border text-foreground hover:bg-muted/80 shadow-sm cursor-pointer transition-all duration-300"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      splashEnabled
                        ? "bg-emerald-400"
                        : "bg-muted-foreground/40"
                    }`}
                  />
                  <HiCursorArrowRipple
                    size={14}
                    className={`transition-colors duration-300 ${
                      splashEnabled
                        ? "text-emerald-400"
                        : "text-muted-foreground/40"
                    }`}
                  />
                </Button>
                <ThemeToggle />
              </div>
            </AnimatedContent>
          </div>
        </div>
      </nav>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
