/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
      },
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
    ],
  },
  output: 'export',
  // GitHub Pages的基本路径配置
  basePath: '/TOBY',
  assetPrefix: '/TOBY',
};

export default nextConfig;
