/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const COLORS = {
  dark: ["#34d399", "#2dd4bf", "#a78bfa", "#f472b6", "#fbbf24"],
  light: ["#059669", "#0284c7", "#7c3aed", "#db2777", "#ea580c"],
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
};

export default function NetworkCanvas({
  fullScreen = false,
}: {
  fullScreen?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isLight = mounted ? resolvedTheme === "light" : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = fullScreen
        ? (canvas.parentElement?.offsetWidth ?? window.innerWidth)
        : canvas.offsetWidth;
      canvas.height = fullScreen
        ? (canvas.parentElement?.offsetHeight ?? window.innerHeight)
        : canvas.offsetHeight;

      const PARTICLE_COUNT = fullScreen ? 80 : 65;
      const activeColors = isLight ? COLORS.light : COLORS.dark;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2.5 + 1.5,
        color: activeColors[Math.floor(Math.random() * activeColors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.035,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const MAX_DIST = 130;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        p.x = Math.min(Math.max(p.x, 0), W);
        p.y = Math.min(Math.max(p.y, 0), H);
      }

      const lineAlpha = isLight ? 0.5 : 0.4;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * lineAlpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isLight
              ? `rgba(2, 132, 199, ${alpha})`
              : `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = isLight ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      const particleAlpha = isLight ? 0.9 : 0.8;

      for (const p of particlesRef.current) {
        const glow = 0.6 + Math.sin(p.pulse) * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * glow, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = particleAlpha * glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * glow * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = (particleAlpha * glow) / 2;
        ctx.fill();

        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [mounted, fullScreen]);

  useEffect(() => {
    if (!mounted || particlesRef.current.length === 0) return;
    const activeColors = isLight ? COLORS.light : COLORS.dark;
    for (let i = 0; i < particlesRef.current.length; i++) {
      particlesRef.current[i].color =
        activeColors[Math.floor(Math.random() * activeColors.length)];
    }
  }, [isLight, mounted]);

  const opacity = !mounted ? 0 : isLight ? 0.85 : 0.6;

  const fullScreenStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    opacity,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  };

  const defaultStyle: React.CSSProperties = {
    zIndex: 0,
    opacity,
    transition: "opacity 0.3s ease",
  };

  return (
    <canvas
      ref={canvasRef}
      className={
        fullScreen ? "" : "absolute inset-0 w-full h-full pointer-events-none"
      }
      style={fullScreen ? fullScreenStyle : defaultStyle}
    />
  );
}
