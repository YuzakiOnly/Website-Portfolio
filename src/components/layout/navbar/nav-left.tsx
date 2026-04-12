/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  VscHome,
  VscInfo,
  VscCode,
  VscBriefcase,
  VscTools,
  VscMail,
} from "react-icons/vsc";
import { FaGraduationCap, FaGithub } from "react-icons/fa";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import FadeContent from "@/components/reactbits/FadeContent";

const navItems = [
  {
    icon: <VscHome size={24} />,
    label: "Home",
    href: "#home",
    sectionId: "home",
  },
  {
    icon: <VscInfo size={24} />,
    label: "About",
    href: "#about",
    sectionId: "about",
  },
  {
    icon: <FaGraduationCap size={24} />,
    label: "Education",
    href: "#education",
    sectionId: "education",
  },
  {
    icon: <VscBriefcase size={24} />,
    label: "Work",
    href: "#work",
    sectionId: "work",
  },
  {
    icon: <VscTools size={24} />,
    label: "Skills",
    href: "#skills",
    sectionId: "skills",
  },
  {
    icon: <FaGithub size={24} />,
    label: "GitHub",
    href: "#github",
    sectionId: "github",
  },
  {
    icon: <VscCode size={24} />,
    label: "Projects",
    href: "#projects",
    sectionId: "projects",
  },
  {
    icon: <VscMail size={24} />,
    label: "Contact",
    href: "#contact",
    sectionId: "contact",
  },
];

export default function NavLeft() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");

  if (pathname !== "/") return null;

  const handleScrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (sectionId.startsWith("#")) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection(sectionId.substring(1));
      }
    } else {
      window.location.href = sectionId;
    }
  };

  useEffect(() => {
    const sections = navItems
      .filter(
        (item) =>
          item.sectionId && document.querySelector(`#${item.sectionId}`),
      )
      .map((item) => item.sectionId);

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((sectionId) => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-50 font-instrument-sans">
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
            const isActive = item.sectionId
              ? activeSection === item.sectionId
              : pathname === item.href;

            const isSectionLink = item.href.startsWith("#");

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
                  onClick={(e) => {
                    if (isSectionLink) {
                      handleScrollToSection(item.href, e);
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className={`
                    relative group flex items-center justify-center 
                    w-12 h-12 rounded-xl transition-all duration-300 ease-in-out cursor-pointer
                    ${
                      isActive
                        ? "bg-emerald-500 text-white shadow-lg scale-110"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-105"
                    }
                  `}
                  title={item.label}
                >
                  {item.icon}

                  <span
                    className={`
                      absolute left-full ml-3 px-2.5 py-1.5 
                      bg-gray-900 text-white text-xs font-medium rounded-md 
                      whitespace-nowrap opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 pointer-events-none 
                      shadow-lg
                      dark:bg-gray-800 dark:text-gray-100
                      ${isActive ? "bg-emerald-600 text-white dark:bg-emerald-600" : ""}
                    `}
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
  );
}
