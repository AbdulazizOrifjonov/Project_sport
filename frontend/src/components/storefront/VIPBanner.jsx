import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function VIPBanner() {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  if (!visible) return null;

  return (
    <div className="relative bg-slate-950 dark:bg-black dark:from-[#080c14] dark:via-[#111827] dark:to-[#080c14] text-white dark:text-slate-200 py-1.5 border-b border-rose-500/40 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        <a
          href="https://t.me/nsb_bukhara"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
        >
          <span className="font-extrabold bg-white/20 dark:bg-rose-500/20 px-2 py-0.5 rounded-md text-[11px] uppercase tracking-wider text-white dark:text-rose-400">
            {t('vip.badge', 'NSB B2B')}
          </span>
          <span className="hidden sm:inline font-semibold">
            {t('vip.text', 'Buxoro korxona va tashkilotlari uchun yopiq aksiyalar va to‘g‘ridan-to‘g‘ri shartnomalar!')}
          </span>
          <span className="sm:hidden font-semibold">
            {t('vip.textMobile', 'Yopiq aksiyalar va tovarlar!')}
          </span>
          <span className="font-extrabold underline underline-offset-2 ml-1">
            {t('vip.join', 'Qo‘shilish →')}
          </span>
        </a>
        <button
          onClick={() => setVisible(false)}
          className="p-1 text-white/80 hover:text-white dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer rounded-md hover:bg-white/10 dark:hover:bg-slate-800"
          aria-label={t('header.close', 'Yopish')}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
