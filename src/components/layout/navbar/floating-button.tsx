/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import {
  ChevronUp,
  MessageCircle,
  Mail,
  Download,
  FileText,
  X,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        flex items-center justify-center w-12 h-12 rounded-full 
        bg-background/80 backdrop-blur-md border border-border 
        text-muted-foreground hover:text-foreground hover:bg-accent 
        shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer
        ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      title="Scroll to Top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

function ChatButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`
        flex items-center justify-center w-12 h-12 rounded-full shadow-lg 
        transition-all duration-500 ease-out hover:scale-110 cursor-pointer
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        ${
          isOpen
            ? "bg-foreground text-background"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }
      `}
      title="Quick Actions"
    >
      <span
        className={`absolute transition-all duration-200 ${
          isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
        }`}
      >
        <X className="h-5 w-5" />
      </span>
      <span
        className={`absolute transition-all duration-200 ${
          isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
        }`}
      >
        <MessageCircle className="h-5 w-5" />
      </span>
    </button>
  );
}

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Send Email",
      sub: "your.email@example.com",
      onClick: () => (window.location.href = "mailto:your.email@example.com"),
      color: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
    },
    {
      icon: <Download className="h-4 w-4" />,
      label: "Download CV",
      sub: "PDF • 1.2 MB",
      onClick: () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "CV.pdf";
        link.click();
      },
      color: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20",
    },
    {
      icon: <FileText className="h-4 w-4" />,
      label: "View Portfolio",
      sub: "Projects & works",
      onClick: () => window.open("/portfolio", "_blank"),
      color: "bg-violet-500/10 text-violet-400 hover:bg-violet-500/20",
    },
    {
      icon: <FaLinkedin className="h-4 w-4" />,
      label: "LinkedIn",
      sub: "Connect with me",
      onClick: () =>
        window.open("https://linkedin.com/in/yourprofile", "_blank"),
      color: "bg-sky-500/10 text-sky-400 hover:bg-sky-500/20",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-montserrat">
      <div
        className={`
          transition-all duration-300 ease-out origin-bottom-right
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/20 overflow-hidden w-64">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Quick Links
            </p>
          </div>

          <div className="p-2 flex flex-col gap-1">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.onClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 hover:bg-accent group cursor-pointer"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors ${action.color}`}
                >
                  {action.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground leading-none mb-0.5">
                    {action.label}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {action.sub}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="px-4 py-2.5 border-t border-border">
            <p className="text-[10px] text-muted-foreground/60 text-center">
              M. Arya Ardiansyah · Front End Dev
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ScrollToTopButton />
        <ChatButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
