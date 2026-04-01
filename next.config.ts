import type { NextConfig } from "next";

// todo: use env to set repository name
const repositoryName: string = "shoji";
const isProduction: boolean = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  ...(isProduction
    ? {
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
      }
    : {}),
};

export default nextConfig;
