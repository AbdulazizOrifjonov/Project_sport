import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function PromoTiles() {
  const { t } = useLanguage();

  const tiles = [
    {
      badge: 'Sport & Fitnes',
      badgeColor: 'text-[#A37A00] dark:text-amber-400',
      title: 'Trenajorlar & Gantellar',
      desc: 'Uy va zal uchun professional trenajorlar, massaj kreslolari va og‘irliklar',
      link: '/shop?category=trenajorlar',
      bgColor: 'bg-[var(--color-tile-2)] dark:bg-[#1c1a16]',
      borderColor: 'border-amber-100 dark:border-[#3d3318]',
      img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&auto=format&fit=crop&q=80',
    },
    {
      badge: 'Yo‘l & Harakat Xavfsizligi',
      badgeColor: 'text-[#ea580c] dark:text-orange-400',
      title: 'Yo‘l Konuslari & To‘siqlar',
      desc: 'Dorojniy konuslar, rezinali to‘siqlar, lejachiy politseyskiy va belgilar',
      link: '/shop?category=yol-konuslari',
      bgColor: 'bg-orange-50/70 dark:bg-[#20140d]',
      borderColor: 'border-orange-200 dark:border-[#45220f]',
      img: 'https://images.unsplash.com/photo-1579294800821-694d95e86143?w=400&auto=format&fit=crop&q=80',
    },
    {
      badge: 'Asbob-Uskunalar & Qurilish',
      badgeColor: 'text-[#0284c7] dark:text-sky-400',
      title: 'Drellar & Balgarkalar',
      desc: 'Zarbli drellar, burchakli silliqlash (USHm), svarka apparatlari va asboblar',
      link: '/shop?category=drellar-shurupovyort',
      bgColor: 'bg-[var(--color-tile-1)] dark:bg-[#131c29]',
      borderColor: 'border-sky-100 dark:border-[#1e2f47]',
      img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&auto=format&fit=crop&q=80',
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
