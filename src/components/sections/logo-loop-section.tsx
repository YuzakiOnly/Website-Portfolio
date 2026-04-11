"use client";

const logos = [
  {
    name: "Next.js",
    svg: (
      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <mask
          id="mask0_nextjs"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_nextjs)">
          <circle cx="90" cy="90" r="90" fill="white" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#paint0_nextjs)"
          />
          <rect
            x="115"
            y="54"
            width="12"
            height="72"
            fill="url(#paint1_nextjs)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_nextjs"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="black" />
            <stop offset="1" stopColor="black" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_nextjs"
            x1="115"
            y1="54"
            x2="115.48"
            y2="106.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="black" />
            <stop offset="1" stopColor="black" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <circle cx="50" cy="50" r="7" fill="#61DAFB" />
        <ellipse
          cx="50"
          cy="50"
          rx="46"
          ry="18"
          stroke="#61DAFB"
          strokeWidth="4"
          fill="none"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="46"
          ry="18"
          stroke="#61DAFB"
          strokeWidth="4"
          fill="none"
          transform="rotate(60 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="46"
          ry="18"
          stroke="#61DAFB"
          strokeWidth="4"
          fill="none"
          transform="rotate(120 50 50)"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <rect width="100" height="100" rx="8" fill="#3178C6" />
        <text
          x="10"
          y="72"
          fontFamily="monospace"
          fontWeight="bold"
          fontSize="52"
          fill="white"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    svg: (
      <svg
        viewBox="0 0 54 33"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-6"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 15.84 40.5 15.84c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C37.256 3.168 34.192 0 27 0zM13.5 15.84C6.3 15.84 1.8 19.44 0 26.64c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.512 19.808 31.68 26.5 31.68c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.756 19.008 20.692 15.84 13.5 15.84z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: "Framer",
    svg: (
      <svg
        viewBox="0 0 14 21"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-7"
      >
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7L0 14z" fill="#0055FF" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg
        viewBox="0 0 76 65"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-6"
      >
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg
        viewBox="0 0 256 289"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-7"
      >
        <path
          d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.155.795-.53 1.855-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.2c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.935c-1.06-.53-2.385-.53-3.18 0L20.405 80.165c-1.06.53-1.59 1.855-1.59 2.915v122.4c0 1.06.53 2.385 1.59 2.915l29.152 16.961c15.9 7.95 25.707-1.325 25.707-10.6V94.21c0-1.59 1.325-3.18 2.915-3.18h12.455c1.59 0 2.915 1.325 2.915 3.18v120.55c0 20.671-11.13 32.596-30.742 32.596-5.832 0-10.6 0-23.852-6.625l-27.827-15.9C4.24 220.396 0 212.446 0 203.96V81.49c0-8.48 4.24-16.431 11.13-20.671L116.87 1.061c6.625-3.975 15.635-3.975 22.26 0l105.74 59.758C251.495 65.059 256 73.009 256 81.49v122.4c0 8.48-4.505 16.431-11.13 20.671l-105.74 61.2c-3.18 1.59-6.89 2.65-11.13 2.65v.053z"
          fill="#539E43"
        />
      </svg>
    ),
  },
  {
    name: "Prisma",
    svg: (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M2.8 24.5l10.6-22c.3-.6 1.1-.7 1.5-.1l14.3 21.1c.4.5.1 1.3-.6 1.4L3.5 25.8c-.7.1-1.1-.7-.7-1.3z"
          stroke="#5A67D8"
          strokeWidth="1.5"
          fill="#5A67D8"
          fillOpacity="0.25"
        />
        <path
          d="M12 20l5.5-16"
          stroke="#818CF8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg
        viewBox="0 0 109 113"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z"
          fill="#3ECF8E"
        />
        <path
          d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.265c-8.19 0-12.758-9.46-7.664-15.875L45.317 2.071z"
          fill="#3ECF8E"
          fillOpacity="0.6"
        />
      </svg>
    ),
  },
  {
    name: "shadcn",
    svg: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="white"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const allLogos = [...logos, ...logos, ...logos];

export default function LogoLoopSection() {
  return (
    <div
      className="relative z-20 flex justify-center"
      style={{ marginTop: "-22px", marginBottom: "-22px" }}
    >
      <div className="relative overflow-hidden bg-black backdrop-blur-lg border py-6 border-white/12 shadow-[0_4px_24px_rgba(0,0,0,0.5)] dark:bg-white/6 dark:border-white/12">
        <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-black/50 to-transparent z-10 pointer-events-none dark:from-black/50" />
        <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-black/50 to-transparent z-10 pointer-events-none dark:from-black/50" />

        <div className="logo-loop-track flex items-center py-2.5">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center mx-7 opacity-55 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
