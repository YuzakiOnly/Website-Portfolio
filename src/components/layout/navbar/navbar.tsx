"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscHeart,
  VscSearch,
  VscBell,
  VscGlobe,
} from "react-icons/vsc";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import FadeContent from "@/components/reactbits/FadeContent";

const navItems = [
  { icon: <VscHome size={24} />, label: "Home", href: "/" },
  { icon: <VscSearch size={24} />, label: "Search", href: "/search" },
  { icon: <VscHeart size={24} />, label: "Favorites", href: "/favorites" },
  { icon: <VscArchive size={24} />, label: "Archive", href: "/archive" },
  { icon: <VscAccount size={24} />, label: "Profile", href: "/profile" },
  { icon: <VscSettingsGear size={24} />, label: "Settings", href: "/settings" },
  {
    icon: <VscBell size={24} />,
    label: "Notifications",
    href: "/notifications",
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState("id");

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 gap-3">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.5}
            >
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-30 bg-muted/50 border-border text-foreground hover:bg-muted/80 transition-all duration-200 rounded-lg">
                  <VscGlobe size={15} className="mr-1 shrink-0" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border text-popover-foreground backdrop-blur-md">
                  <SelectItem
                    value="id"
                    className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
                  >
                    🇮🇩 Indonesia
                  </SelectItem>
                  <SelectItem
                    value="en"
                    className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
                  >
                    🇬🇧 English
                  </SelectItem>
                </SelectContent>
              </Select>
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <ThemeToggle />
            </AnimatedContent>
          </div>
        </div>
      </nav>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="flex flex-col gap-4 bg-background/60 backdrop-blur-md rounded-2xl p-3 border border-border shadow-xl">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <FadeContent
                  key={index}
                  blur={true}
                  duration={500}
                  ease="ease-out"
                  initialOpacity={0}
                  delay={index * 0.1}
                >
                  <button
                    onClick={() => router.push(item.href)}
                    className={`
                      relative group flex items-center justify-center 
                      w-12 h-12 rounded-xl transition-all duration-200 ease-in-out
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg scale-110"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-105"
                      }
                    `}
                    title={item.label}
                  >
                    {item.icon}

                    <span
                      className="
                        absolute left-full ml-3 px-2 py-1 
                        bg-popover text-popover-foreground text-xs rounded-md 
                        whitespace-nowrap opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible 
                        transition-all duration-200 pointer-events-none 
                        border border-border shadow-lg
                      "
                    >
                      {item.label}
                    </span>
                  </button>
                </FadeContent>
              );
            })}
          </div>
        </AnimatedContent>
      </div>
    </>
  );
}
