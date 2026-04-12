"use client";

import FadeContent from "@/components/reactbits/FadeContent";
import CountUp from "@/components/reactbits/CountUp";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  percent: number;
  icon: React.ReactNode;
}

interface SkillCardProps {
  skill: Skill;
  delay: number;
}

export default function SkillCard({ skill, delay }: SkillCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <FadeContent
      blur
      duration={800}
      ease="ease-out"
      initialOpacity={0}
      delay={delay}
    >
      <div ref={ref} className="group flex flex-col items-center gap-3">
        <div className="relative w-full aspect-square rounded-2xl border border-foreground/8 bg-foreground/3 hover:bg-foreground/6 hover:border-emerald-500/20 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-5 overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none">
            <span className="text-[10px] font-mono text-foreground/15 tracking-widest">
              {inView && (
                <CountUp
                  from={0}
                  to={skill.percent}
                  duration={1.4}
                  separator=""
                  className="text-[11px] font-mono text-foreground/25 tabular-nums"
                />
              )}
            </span>
          </div>

          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/5"
            />
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 46}`}
              strokeDashoffset={
                inView
                  ? `${2 * Math.PI * 46 * (1 - skill.percent / 100)}`
                  : `${2 * Math.PI * 46}`
              }
              className="text-emerald-500 transition-all duration-1400 ease-out"
            />
          </svg>

          <div className="relative z-10">{skill.icon}</div>

          <div className="relative z-10 flex items-baseline gap-0.5">
            {inView ? (
              <CountUp
                from={0}
                to={skill.percent}
                duration={1.4}
                separator=""
                className="text-xl font-extrabold text-foreground tabular-nums font-syne"
              />
            ) : (
              <span className="text-xl font-extrabold text-foreground font-syne">
                0
              </span>
            )}
            <span className="text-sm font-bold text-foreground font-syne">
              %
            </span>
          </div>
        </div>

        <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest group-hover:text-emerald-500 transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </FadeContent>
  );
}
