import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.20.10.5', '192.168.1.0/24', '10.0.0.0/8'],
};

export default nextConfig;
