"use client";

import { useLanguage } from "@/context/language-context";
import { ArrowUp } from "lucide-react";
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from "react-icons/io5";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/YuzakiOnly",
    icon: IoLogoGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yuzakidesuu_/",
    icon: IoLogoInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/LVTsSxrJfSz3nARn/",
    icon: IoLogoFacebook,
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  // Create navLinks from translation data
  const navLinks = [
    { label: t.navAbout, href: "#about", sectionId: "about" },
    { label: t.navExperience, href: "#experience", sectionId: "work" },
    { label: t.navEducation, href: "#education", sectionId: "education" },
    { label: t.navSkills, href: "#skills", sectionId: "skills" },
    { label: t.navProjects, href: "#projects", sectionId: "projects" },
    { label: t.navGitHub, href: "#github", sectionId: "github" },
    { label: t.navContact, href: "#contact", sectionId: "contact" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <footer className="relative bg-background border-t border-foreground/8">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-xs">
            <p className="text-2xl font-bold text-foreground font-syne tracking-tight">
              {t.brandName}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600">
                {t.brandAccent}
              </span>
            </p>
            <p className="text-xs font-mono text-foreground/35 leading-relaxed">
              {t.brandDescription}
            </p>
            <div className="flex items-center gap-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_1px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-500 tracking-wide">
                {t.openToOpportunities}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-mono text-foreground/25 uppercase tracking-widest mb-1">
              {t.navigationTitle}
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.sectionId)}
                  className="text-xs font-mono text-foreground/40 hover:text-emerald-500 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono text-foreground/25 uppercase tracking-widest">
                {t.socialTitle}
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-9 h-9 rounded-xl border border-foreground/8 bg-foreground/3 hover:border-emerald-500/30 hover:bg-emerald-500/5 flex items-center justify-center transition-all duration-300"
                    title={s.label}
                  >
                    <s.icon className="w-3.5 h-3.5 text-foreground/35 group-hover:text-emerald-500 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-mono text-foreground/30 hover:text-emerald-500 transition-colors duration-300 w-fit"
            >
              <span className="w-7 h-7 rounded-full border border-foreground/8 hover:border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/5 transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
              {t.backToTop}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/8">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono text-foreground/25 text-center md:text-left">
            © {year} M. Arya Ardiansyah. {t.copyright}
          </p>
          <p className="text-[11px] font-mono text-foreground/20 text-center md:text-right">
            {t.builtWith} <span className="text-foreground/35">Next.js</span>
            {" · "}
            <span className="text-foreground/35">Tailwind CSS</span>
            {" · "}
            <span className="text-emerald-500/60">{t.heart}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
