import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function PromoTiles() {
  const { t } = useLanguage();

  const tiles = [
    {
      badge: t('promo.tile1Badge', 'Faqat bugun'),
      badgeColor: 'text-[#A37A00] dark:text-amber-400',
      title: t('promo.tile1Title', 'Qog‘oz pallet narxida'),
      desc: t('promo.tile1Desc', 'SvetoCopy A4 — ulgurji arzon narx'),
      link: '/shop/kanctovary',
      bgColor: 'bg-[var(--color-tile-2)] dark:bg-[#231c12]',
      borderColor: 'border-amber-100 dark:border-[#4a3818]',
      img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&auto=format&fit=crop&q=80',
    },
    {
      badge: t('promo.tile2Badge', 'Ofis mebeli'),
      badgeColor: 'text-[#0369a1] dark:text-sky-400',
      title: t('promo.tile2Title', 'Ortopedik kreslolar'),
      desc: t('promo.tile2Desc', 'Rahbarlar va xodimlar uchun'),
      link: '/shop/ofisnaya-mebel',
      bgColor: 'bg-[var(--color-tile-1)] dark:bg-[#132238]',
      borderColor: 'border-sky-100 dark:border-[#1e3a5f]',
      img: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=300&auto=format&fit=crop&q=80',
    },
    {
      badge: t('promo.tile3Badge', 'Orgtexnika'),
      badgeColor: 'text-[#15803d] dark:text-emerald-400',
      title: t('promo.tile3Title', 'HP MFP va Printerlari'),
      desc: t('promo.tile3Desc', 'Tezkor ikki tomonlama chop etish'),
      link: '/shop/orgtehnika',
      bgColor: 'bg-[var(--color-tile-3)] dark:bg-[#12241b]',
      borderColor: 'border-emerald-100 dark:border-[#1f4a30]',
      img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {tiles.map((tile, i) => (
          <Link
            key={i}
            to={tile.link}
            className={`group ${tile.bgColor} border ${tile.borderColor} rounded-[20px] p-5 grid grid-cols-[1fr_auto] items-center gap-3.5 hover:-translate-y-0.5 transition-transform`}
          >
            <div>
              <div
                className={`text-[11px] font-bold uppercase tracking-wider ${tile.badgeColor}`}
              >
                {tile.badge}
              </div>
              <div className="mt-1.5 text-[20px] font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white">
                {tile.title}
              </div>
              <div className="mt-1 text-[12px] text-slate-600 dark:text-slate-300">{tile.desc}</div>
              <div className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-bold text-slate-950 dark:text-white group-hover:text-[var(--color-primary-600)] dark:group-hover:text-pink-400 transition-colors">
                {t('promo.go', 'Ko‘rish')} <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="w-20 h-20 rounded-[12px] bg-white dark:bg-slate-800 p-2 border border-black/5 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-xs">
              <img
                src={tile.img}
                alt={tile.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
