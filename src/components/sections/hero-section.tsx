"use client";

import Lanyard from "../ui/Lanyard";

export default function HeroSection() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="mx-auto h-screen max-w-7xl px-6">
        <div className="grid grid-cols-12 h-full items-center gap-8">
          {/* Left Side - Content */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-6 text-white">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-green-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-400">
                Open for Work
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                M. ARYA ARDIANSYAH
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-emerald-600">
                Front end Developer
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-3 text-gray-300">
              <p>
                🇮🇩 Based in Indonesia •{" "}
                <span className="text-purple-400">Magang Experience</span>
              </p>
              <p>
                Full Stack Product Designer with expertise in analyzing systems,
                managing teams, and creating exceptional user interfaces.
              </p>
              <p>
                Currently working as a{" "}
                <span className="text-purple-400">
                  Full Stack Product Designer
                </span>
                and{" "}
                <span className="text-pink-400">
                  Freelance Frontend Developer
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right Side - Lanyard */}
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
