'use client';

import { useEffect, useState } from 'react';
import { useLocaleStore } from '@/lib/stores/localeStore';
import { useMessages } from '@/lib/i18n/useMessages';

interface FooterProps {
  /** 默认语言的作者名（兜底用） */
  authorName?: string;
  /** 各语言的作者名，切到英文就显示英文名 */
  authorNameByLocale?: Record<string, string | undefined>;
  defaultLocale?: string;
}

export default function Footer({ authorName, authorNameByLocale, defaultLocale = 'en' }: FooterProps) {
  const locale = useLocaleStore((state) => state.locale);
  const messages = useMessages();

  /**
   * 年份必须「访问者打开页面的那一年」，不能用构建时写死的年份。
   * 本站是静态站点，构建产物里如果写死 2026，那么跨年后不重新部署就会一直显示 2026。
   * 所以这里先渲染空字符串（服务端与客户端一致，不会有 hydration 报警），
   * 等挂载到浏览器后再取本机时间补上。
   */
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const resolvedName =
    authorNameByLocale?.[locale] ||
    (defaultLocale ? authorNameByLocale?.[defaultLocale] : undefined) ||
    authorName ||
    '';

  return (
    <footer className="border-t border-neutral-200/50 bg-neutral-50/50 dark:bg-neutral-900/50 dark:border-neutral-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* 第一行：© 年份 姓名 —— 姓名取自 content/config.toml 的 [author] name */}
          <p className="text-xs text-neutral-500">
            © {year} {resolvedName}
          </p>
          {/* 第二行：文案在 src/lib/i18n/messages.ts 的 footer.closingNote */}
          <p className="text-xs text-neutral-500">{messages.footer.closingNote}</p>
        </div>
      </div>
    </footer>
  );
}
