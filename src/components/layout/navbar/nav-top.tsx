"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages, Check } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

const languageNames: Record<string, string> = {
  id: "Indonesia",
  en: "English",
};

const languageFlags: Record<string, string> = {
  id: "id",
  en: "us",
};

export default function NavTop() {
  const [language, setLanguage] = useState("id");
  const [isChanging, setIsChanging] = useState(false);

  const switchLanguage = async (locale: string) => {
    if (locale === language || isChanging) return;

    setIsChanging(true);
    setLanguage(locale);

    setTimeout(() => {
      setIsChanging(false);
    }, 500);
  };

  const currentLang = {
    code: language,
    flag: languageFlags[language],
    name: languageNames[language],
  };

  const availableLocales = ["id", "en"];

  return (
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-muted/50 border-border text-foreground hover:bg-muted/80 shadow-sm cursor-pointer"
                  disabled={isChanging}
                >
                  <Languages className="h-4 w-4" />
                  <ReactCountryFlag
                    countryCode={currentLang.flag}
                    svg
                    style={{
                      width: "16px",
                      height: "12px",
                      objectFit: "contain",
                    }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-40 bg-popover border-border"
              >
                {availableLocales.map((locale) => (
                  <DropdownMenuItem
                    key={locale}
                    onSelect={(e) => {
                      e.preventDefault();
                      switchLanguage(locale);
                    }}
                    className={`gap-2 cursor-pointer focus:bg-accent focus:text-accent-foreground ${
                      language === locale ? "bg-accent/50" : ""
                    } ${isChanging ? "opacity-50 pointer-events-none" : ""}`}
                    disabled={isChanging}
                  >
                    <ReactCountryFlag
                      countryCode={languageFlags[locale]}
                      svg
                      style={{
                        width: "18px",
                        height: "12px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="flex justify-between items-center gap-10 flex-1 font-montserrat">
                      <span>{languageNames[locale]}</span>
                      {language === locale && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
            <ThemeToggle />
          </AnimatedContent>
        </div>
      </div>
    </nav>
  );
}
