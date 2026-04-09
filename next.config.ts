import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "three",
    "meshline",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/rapier",
  ],
  turbopack: {},
};

export default nextConfig;