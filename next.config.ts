import type { NextConfig } from "next";

/**
 * GitHub Pages 部署路径说明：
 * 仓库名是 sai-studio，所以线上地址是 https://<用户名>.github.io/sai-studio/
 * 这个前缀必须告诉 Next.js，否则 JS / CSS / 图片都会 404。
 *
 * - 本地开发 (npm run dev)：前缀为空，也就是 http://localhost:3000
 * - 生产构建 (npm run build)：前缀为 /sai-studio
 *
 * 如果哪天你把仓库改名了，只需要改下面这一行的 REPO_NAME。
 */
const REPO_NAME = "sai-studio";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${REPO_NAME}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  // 把前缀暴露给前端组件，用于 public/ 下的静态资源（头像、论文配图等）
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  // 说明：这里不写 webpack / turbopack 自定义配置。
  // 论文的 .bib 文件是在构建时用 fs 直接从 content/ 目录读取的，
  // 不经过打包器，所以不需要给 .bib 加 loader。
  // 一旦写了 webpack 配置，next dev（Turbopack 模式）就会持续报警告。
};

export default nextConfig;
