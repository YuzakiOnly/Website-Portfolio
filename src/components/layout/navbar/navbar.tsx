"use client";

import StaggeredMenu from "@/components/reactbits/StaggeredMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About Me", ariaLabel: "Learn about me", link: "/about" },
    { label: "Projects", ariaLabel: "View my projects", link: "/projects" },
    { label: "Services", ariaLabel: "View my services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/aryaa" },
    { label: "LinkedIn", link: "https://linkedin.com/in/aryaa" },
    { label: "Instagram", link: "https://instagram.com/aryaa" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#10b981"
        changeMenuColorOnOpen={true}
        colors={["#1f2937", "#111827", "#0f172a"]}
        logoUrl="/logo.svg"
        accentColor="#10b981"
        closeOnClickAway={true}
        isFixed={false}
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  );
}
