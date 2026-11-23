import React from 'react';
import { Star, CheckCircle2, Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ReviewsSection() {
  const { t, lang } = useLanguage();

  const reviewsByLang = {
    uz: [
      {
        author: 'Aziz Raximov',
        role: 'Yugurish klubi a’zosi, Buxoro',
        date: '3 noyabr 2026',
        comment: 'WYUE dan Nike Air Jordan 1 va Air Force 1 krossovkalarini xarid qildik. Mahsulot 100% original, sifati va qulayligi juda ajoyib. Tezkor yetkazib berishdi!',
        rating: 5,
      },
      {
        author: 'Nodira Salimova',
        role: 'Fitnes murabbiyi, "FitLife Bukhara"',
        date: '28 oktyabr 2026',
        comment: 'Fitnes zalimiz uchun Gymshark kiyimlari va mashg‘ulot rezinalari buyurtma berdik. Materiali elastik, nafas oladi va judayam chidamli. Rahmat!',
        rating: 5,
      },
      {
        author: 'Jamshid Toirov',
        role: 'Sport klubi rahbari, "Chempion Gym"',
        date: '15 oktyabr 2026',
        comment: 'Hexagonal gantellar to‘plami va zal uchun universal skameykalar oldik. Og‘irligi aniq, rezina qoplamasi hidsiz va sifatli. Sportchilarimizga juda yoqdi.',
        rating: 5,
      },
      {
        author: 'Dilnoza Karimova',
        role: 'Sportchi va krossfit ixlosmandi',
        date: '8 oktyabr 2026',
        comment: 'Under Armour sport kiyimlari va Nike ryukzaklari oldik. Kuryer 2 soatda yetkazib berdi, o‘lchamlari aniq mos keldi. Buxoroda haqiqiy original sport do‘koni!',
        rating: 5,
      },
    ],
    ru: [
      {
        author: 'Азиз Рахимов',
        role: 'Член бегового клуба, Бухара',
        date: '3 ноября 2026',
        comment: 'Заказали в WYUE оригинальные кроссовки Nike Air Jordan 1 и Air Force 1. Качество 100% оригинальное, коробки в идеале, доставка очень быстрая!',
        rating: 5,
      },
      {
        author: 'Нодира Салимова',
        role: 'Фитнес-тренер, "FitLife Bukhara"',
        date: '28 октября 2026',
        comment: 'Заказали для нашего фитнес-клуба форму Gymshark и фитнес-резинки. Ткань дышащая, швы прочные, сидит идеально. Спасибо WYUE!',
        rating: 5,
      },
      {
        author: 'Жамшид Тоиров',
        role: 'Руководитель спортклуба, "Chempion Gym"',
        date: '15 октября 2026',
        comment: 'Приобрели набор гексагональных гантелей и регулируемую скамью. Точный вес, качественное резиновое покрытие без запаха. Отличный инвентарь.',
        rating: 5,
      },
      {
        author: 'Дильноза Каримова',
        role: 'Спортсменка и энтузиаст кроссфита',
        date: '8 октября 2026',
        comment: 'Купили экипировку Under Armour и спортивные рюкзаки Nike. Доставили за пару часов, размер подошел безупречно. Настоящий брендовый магазин!',
        rating: 5,
      },
    ],
    en: [
      {
        author: 'Aziz Rakhimov',
        role: 'Running Club Member, Bukhara',
        date: 'November 3, 2026',
        comment: 'Ordered authentic Nike Air Jordan 1 and Air Force 1 sneakers from WYUE. 100% original quality, perfect packaging and rapid delivery.',
        rating: 5,
      },
      {
        author: 'Nodira Salimova',
        role: 'Fitness Coach, "FitLife Bukhara"',
        date: 'October 28, 2026',
        comment: 'Ordered Gymshark training apparel and resistance bands for our fitness center. Outstanding breathable material and durable stitching.',
        rating: 5,
      },
      {
        author: 'Jamshid Toirov',
        role: 'Club Director, "Chempion Gym"',
        date: 'October 15, 2026',
        comment: 'Purchased a set of hexagonal dumbbells and an adjustable workout bench. Accurate weight, odorless rubber coating and top-tier build.',
        rating: 5,
      },
      {
        author: 'Dilnoza Karimova',
        role: 'Athlete & Crossfit Enthusiast',
        date: 'October 8, 2026',
        comment: 'Acquired Under Armour training apparel and Nike gym backpacks. Delivered within 2 hours, sizing fits perfectly. Best authentic sport store in Bukhara!',
        rating: 5,
      },
    ]
  };

  const list = reviewsByLang[lang] || reviewsByLang.uz;

  return (
    <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-12">
      <div className="grid lg:grid-cols-[0.9fr_2fr] gap-7 items-stretch">
        {/* Left Google Rating Summary Card */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[var(--color-soft)] to-white dark:from-[#111827] dark:to-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-7 flex flex-col justify-between shadow-xs transition-colors duration-200">
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[var(--color-primary-500)] opacity-[0.06] pointer-events-none"
          />

          <div className="relative z-10">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[var(--color-primary-600)] dark:text-white">
              {t('reviews.badge')}
            </div>
            <h2 className="mt-2.5 text-[28px] lg:text-[32px] font-extrabold tracking-tight leading-tight text-slate-950 dark:text-white">
              {t('reviews.title')}
            </h2>
            <p className="mt-2 text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
              {t('reviews.desc')}
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-baseline gap-2.5">
              <span className="text-4xl font-black text-slate-950 dark:text-white tracking-tight">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <div className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('reviews.basedOn')}
            </div>
          </div>
        </div>

        {/* Right Verified Reviews Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {list.map((r, i) => (
            <div
              key={i}
              className="rounded-xl p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    {r.date}
                  </span>
                </div>
                <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-bold text-slate-950 dark:text-white flex items-center gap-1.5">
                    {r.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate max-w-[200px]">
                    {r.role}
                  </div>
                </div>
                <Building2 className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
