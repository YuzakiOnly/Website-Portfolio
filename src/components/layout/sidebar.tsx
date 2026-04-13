"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Work Experience", href: "/#work", sectionId: "work" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "GitHub", href: "/#github", sectionId: "github" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId: string,
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }

    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 z-70 h-full w-72 bg-background border-r border-border flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <span className="font-syne font-bold text-sm tracking-widest uppercase text-foreground">
            Menu
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground hover:bg-muted/80 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href, link.sectionId)}
              className="font-montserrat font-semibold text-sm tracking-wider uppercase px-3 py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
