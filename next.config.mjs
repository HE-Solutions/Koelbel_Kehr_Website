/** @type {import('next').NextConfig} */

let rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const basePath = rawBasePath.endsWith("/")
    ? rawBasePath.slice(0, -1)
    : rawBasePath;

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },

    basePath,
    assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
