# Sai Studio

赛的个人主页 · <https://hydro-sai.github.io/sai-studio/>

基于 [PRISM](https://github.com/xyjoey/PRISM) 模板（MIT）搭建的静态个人网站，Next.js 15 + Tailwind CSS 4，
托管在 GitHub Pages 上，没有后端、没有数据库。

## 快速开始

```bash
npm install       # 第一次
npm run dev       # 本地预览 → http://localhost:3000
```

Windows 下也可以直接双击 **`start-dev.bat`**，它会自动装依赖、起服务、打开浏览器。

## 怎么改内容

**几乎所有内容都在 `content/`（英文）和 `content_zh/`（中文）两个目录里，不用碰代码。**

改完之后浏览器会自动刷新。完整的「改哪里 → 页面上变哪里」对照表、以及改完怎么上线，
都写在 **[修改指南.md](./修改指南.md)** 里，先看那个。

最常改的几个文件：

| 想改的东西 | 文件 |
|---|---|
| 姓名、单位、邮箱、导航栏 | `content_zh/config.toml` |
| 首页自我介绍 | `content_zh/bio.md` |
| 最近动态 | `content_zh/news.toml` |
| 论文列表 | `content/publications.bib` |
| 项目卡片 | `content_zh/projects.toml` |
| 头像 / 图标 | `public/bio.jpg`、`public/favicon.svg` |

## 部署

推到 `main` 分支即自动构建发布（`.github/workflows/deploy.yml`），约 1–2 分钟。
Pages 的 Source 已经设为 **GitHub Actions**，不需要再手动配置。

常用命令：

```bash
git add -A
git commit -m "更新内容"
git push
```

进度看仓库的 **Actions** 标签。

## 目录

```
content/         英文内容
content_zh/      中文内容
public/          图片等静态素材
src/             代码（组件、样式、i18n）
修改指南.md       改内容的详细说明
```

## 许可

网站内容版权归作者所有；基于 PRISM 模板构建，模板以 MIT 许可发布，原许可见 [LICENSE](./LICENSE)。
