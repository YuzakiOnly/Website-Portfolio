/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  VscHome,
  VscInfo,
  VscCode,
  VscBriefcase,
  VscTools,
  VscMail,
  VscChevronRight,
} from "react-icons/vsc";
import { FaGraduationCap, FaGithub } from "react-icons/fa";
import FadeContent from "@/components/reactbits/FadeContent";

const navItems = [
  { icon: <VscHome size={20} />, label: "Home", href: "/", sectionId: "home" },
  {
    icon: <VscInfo size={20} />,
    label: "About",
    href: "/#about",
    sectionId: "about",
  },
  {
    icon: <FaGraduationCap size={20} />,
    label: "Education",
    href: "/#education",
    sectionId: "education",
  },
  {
    icon: <VscBriefcase size={20} />,
    label: "Work",
    href: "/#work",
    sectionId: "work",
  },
  {
    icon: <VscTools size={20} />,
    label: "Skills",
    href: "/#skills",
    sectionId: "skills",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    href: "/#github",
    sectionId: "github",
  },
  {
    icon: <VscCode size={20} />,
    label: "Projects",
    href: "/#projects",
    sectionId: "projects",
  },
  {
    icon: <VscMail size={20} />,
    label: "Contact",
    href: "/#contact",
    sectionId: "contact",
  },
];

export default function NavLeft() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems
      .filter(
        (item) =>
          item.sectionId && document.querySelector(`#${item.sectionId}`),
      )
      .map((item) => item.sectionId);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((sectionId) => {
      const el = document.querySelector(`#${sectionId}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavigation = (
    item: (typeof navItems)[0],
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.querySelector(`#${item.sectionId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(item.sectionId);
      }
    } else {
      router.push(`/#${item.sectionId}`);
    }
  };

  const isActiveLink = (item: (typeof navItems)[0]) =>
    pathname === "/" ? activeSection === item.sectionId : false;

  return (
    <>
      {isOpen && (
        <div
          className="hidden lg:block fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="hidden md:block fixed left-0 top-1/2 -translate-y-1/2 z-50 font-instrument-sans">
        <div
          className={`
            relative flex flex-row items-center
            transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-[calc(100%-18px)]"}
          `}
        >
          <div className="flex flex-col gap-3 bg-background/80 backdrop-blur-md rounded-r-2xl p-3 border border-l-0 border-border shadow-xl">
            {navItems.map((item, index) => {
              const isActive = isActiveLink(item);
              return (
                <FadeContent
                  key={index}
                  blur
                  duration={400}
                  ease="ease-out"
                  initialOpacity={0}
                  delay={index * 0.06}
                >
                  <button
                    onClick={(e) => handleNavigation(item, e)}
                    className={`
                      relative group flex items-center justify-center
                      w-11 h-11 rounded-xl transition-all duration-200 ease-in-out cursor-pointer
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
                        transition-all duration-200 pointer-events-none shadow-lg
                        dark:bg-gray-800 dark:text-gray-100
                        ${isActive ? "bg-emerald-600!" : ""}
                      `}
                    >
                      {item.label}
                    </span>
                  </button>
                </FadeContent>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`
              shrink-0 flex items-center justify-center
              w-4.5 h-14 cursor-pointer select-none
              rounded-r-md border border-l-0 border-border
              bg-background/80 backdrop-blur-md shadow-md
              text-muted-foreground hover:text-foreground hover:bg-accent
              transition-all duration-200
            `}
            title={isOpen ? "Hide navigation" : "Show navigation"}
            aria-label={isOpen ? "Hide navigation" : "Show navigation"}
          >
            <VscChevronRight
              size={11}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
