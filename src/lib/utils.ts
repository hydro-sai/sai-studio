import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

export function formatYear(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(new Date(date));
}

/**
 * 部署前缀。本地开发为空字符串，GitHub Pages 上为 "/sai-studio"。
 * 由 next.config.ts 注入，一般不需要改这里。
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * 给 public/ 目录下的静态资源加上部署前缀。
 * 头像、favicon、论文配图这类 <img>/<link> 路径都必须走这个函数，
 * 否则部署到 GitHub Pages 子路径后会 404。
 */
export function asset(path?: string | null): string {
  if (!path) return '';
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}