"use client";

import Lanyard from "../reactbits/Lanyard";
import RotatingText from "../reactbits/RotatingText";

export default function HeroSection() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="mx-auto h-screen max-w-7xl px-6">
        <div className="grid grid-cols-12 h-full items-center gap-8">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-6 text-white z-10">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg">I&apos;m Ready For Job</h2>
              <RotatingText
                texts={["React", "Next.js", "Tailwind", "TypeScript"]}
                mainClassName="px-3 sm:px-3 md:px-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-full"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                M. ARYA ARDIANSYAH
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-emerald-500">
                Front end Developer
              </h1>
            </div>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-2xl">🇮🇩</span> Based in Indonesia •{" "}
                <span className="text-purple-400 font-semibold">
                  Magang Experience
                </span>
              </p>
              <p className="leading-relaxed">
                Full Stack Product Designer with expertise in analyzing systems,
                managing teams, and creating exceptional user interfaces.
              </p>
              <p className="leading-relaxed">
                Currently working as a{" "}
                <span className="text-purple-400 font-semibold">
                  Full Stack Product Designer
                </span>
                and{" "}
                <span className="text-pink-400 font-semibold">
                  Freelance Frontend Developer
                </span>
                .
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Hire Me
              </button>
              <button className="px-6 py-3 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Download CV
              </button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <div className="relative group">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

              {/* Image Container - with overflow-hidden to prevent ping overflow */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Main Image Circle */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/20 z-10">
                  <img
                    src="/assets/foto1.png"
                    alt="M. Arya Ardiansyah - Front End Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Decorative ring animation - without causing overflow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
