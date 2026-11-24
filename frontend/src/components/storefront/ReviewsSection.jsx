import React from 'react';
import { Star, CheckCircle2, Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ReviewsSection() {
  const { t, lang } = useLanguage();

  const reviewsByLang = {
    uz: [
      {
        author: 'Aziz Raximov',
        role: 'Qurilish brigadasi boshlig‘i, Buxoro',
        date: '3 noyabr 2026',
        comment: 'WYUE dan 4&1 akkumulyatorli asboblar to‘plami va zarbli gaykavyort oldik. Sifati 100% original, akkumulyatorlari uzoqqa yetadi va keysi juda qulay. Buxoroda 2 soatda yetkazishdi!',
        rating: 5,
      },
      {
        author: 'Nodira Salimova',
        role: 'Avtoturargoh menejeri, "Bukhara Plaza"',
        date: '28 oktyabr 2026',
        comment: 'Avtoturargohimiz uchun TPU 75 sm egiluvchan yo‘l konuslari va dempferlar buyurtma berdik. Materiali elastik, mashina bosganda ham buzilmaydi. Rahmat!',
        rating: 5,
      },
      {
        author: 'Jamshid Toirov',
        role: 'Ustaxona ustasi, "Master Auto"',
        date: '15 oktyabr 2026',
        comment: 'SLJ stol charxi, akkumulyatorli balgarka va zarbli shurupovyort oldik. Kuchli dvigatellar, tebranishsiz ishlaydi. Mahsulotlar sifatiga gap yo‘q.',
        rating: 5,
      },
      {
        author: 'Dilshod Karimov',
        role: 'Katta ombor mudiri, Kogon',
        date: '8 oktyabr 2026',
        comment: 'Suriluvchi metall garmoshka to‘siqlar va Quyosh reflektorli elektr isitgichlar xarid qildik. Ombor hududini tezkor ajratish va isitish uchun ayni muddao bo‘ldi.',
        rating: 5,
      },
    ],
    ru: [
      {
        author: 'Азиз Рахимов',
        role: 'Бригадир строительной группы, Бухара',
        date: '3 ноября 2026',
        comment: 'Купили в WYUE набор аккумуляторных инструментов 4в1 и гайковерт. 100% оригинал, аккумуляторы держат долго, кейс прочный. Доставка по Бухаре за 2 часа!',
        rating: 5,
      },
      {
        author: 'Нодира Салимова',
        role: 'Менеджер парковки, "Bukhara Plaza"',
        date: '28 октября 2026',
        comment: 'Заказали дорожные конусы TPU 75 см и резиновые демпферы. Очень гибкие, выдерживают наезд автомобиля и моментально восстанавливают форму.',
        rating: 5,
      },
      {
        author: 'Жамшид Тоиров',
        role: 'Мастер цеха, "Master Auto"',
        date: '15 октября 2026',
        comment: 'Приобрели заточной станок SLJ, болгарку и шуруповерт. Мощные моторы, надежная сборка. Отличное оборудование по доступной цене.',
        rating: 5,
      },
      {
        author: 'Дильшод Каримов',
        role: 'Заведующий складом, Когон',
        date: '8 октября 2026',
        comment: 'Купили раздвижные ограждения гармошка и инфракрасные обогреватели. Прекрасное решение для зонирования и обогрева складских зон.',
        rating: 5,
      },
    ],
    en: [
      {
        author: 'Aziz Rakhimov',
        role: 'Construction Team Lead, Bukhara',
        date: 'November 3, 2026',
        comment: 'Ordered 4-in-1 cordless power tool set and impact wrench from WYUE. 100% original quality, durable case and rapid delivery within 2 hours.',
        rating: 5,
      },
      {
        author: 'Nodira Salimova',
        role: 'Parking Operations Manager, "Bukhara Plaza"',
        date: 'October 28, 2026',
        comment: 'Ordered TPU 75cm flexible traffic cones and corner guards. Ultra-durable, highly reflective and vehicle-runover resistant.',
        rating: 5,
      },
      {
        author: 'Jamshid Toirov',
        role: 'Workshop Supervisor, "Master Auto"',
        date: 'October 15, 2026',
        comment: 'Purchased SLJ bench grinder, cordless angle grinder and drills. Heavy-duty build and seamless performance.',
        rating: 5,
      },
      {
        author: 'Dilshod Karimov',
        role: 'Logistics Warehouse Manager, Kogon',
        date: 'October 8, 2026',
        comment: 'Acquired expandable safety barriers and reflector space heaters. Perfect for rapid perimeter control and winter heating.',
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

          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary-600)] dark:text-cyan-400 mb-3">
              <Building2 className="w-4 h-4" />
              <span>{t('reviews.b2bBadge', 'Mijozlarimiz fikrlari')}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
              {t('reviews.title', 'Haqiqiy Mijozlar Baholari')}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('reviews.subtitle', 'Buxoro va butun O‘zbekiston bo‘yicha minglab korxona hamda usta mijozlarimizning ishonchi.')}
            </p>
          </div>

          <div className="my-6 pt-5 pb-5 border-y border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-slate-950 dark:text-white tracking-tight">
                4.9
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {t('reviews.verifiedCount', '420+ tasdiqlangan sharh')}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{t('reviews.point1', '100% rasmiy sifat kafolati')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{t('reviews.point2', 'Buxoro bo‘yicha 2 soatda yetkazib berish')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{t('reviews.point3', 'Click, Payme va QQS bilan shartnoma')}</span>
            </div>
          </div>
        </div>

        {/* Right 4 Customer Review Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {list.map((r, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {r.date}
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  «{r.comment}»
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white">
                    {r.author}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {r.role}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Xarid tasdiqlangan</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
