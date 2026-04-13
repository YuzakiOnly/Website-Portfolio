import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";

export const skills = [
  {
    name: "HTML",
    percent: 95,
    icon: <SiHtml5 size={32} className="text-[#E44D26]" />,
  },
  {
    name: "CSS",
    percent: 88,
    icon: <SiCss size={32} className="text-[#1572B6]" />,
  },
  {
    name: "JavaScript",
    percent: 82,
    icon: (
      <SiJavascript size={32} className="text-[#F7DF1E]" />
    ),
  },
  {
    name: "React",
    percent: 78,
    icon: <SiReact size={32} className="text-[#61DAFB]" />,
  },
  {
    name: "Next.js",
    percent: 74,
    icon: <SiNextdotjs size={32} className="text-black dark:text-white" />,
  },
  {
    name: "Laravel",
    percent: 70,
    icon: <SiLaravel size={32} className="text-[#FF2D20]" />,
  },
  {
    name: "PHP",
    percent: 72,
    icon: <SiPhp size={32} className="text-[#8892BF]" />,
  },
  {
    name: "Tailwind",
    percent: 90,
    icon: <SiTailwindcss size={32} className="text-[#38BDF8]" />,
  },
];
