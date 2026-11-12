import React from 'react';
import { Star, CheckCircle2, Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ReviewsSection() {
  const { t, lang } = useLanguage();

  const reviewsByLang = {
    uz: [
      {
        author: 'Aziz Raximov',
        role: 'Bosh ta’minotchi, "Bukhara Desert Oasis" MCHJ',
        date: '3 noyabr 2026',
        comment: 'NSB orqali butun ofisimiz uchun SvetoCopy qog‘ozlari va Epson printerlarini xarid qildik. Buyurtma 2 soat ichida yetib keldi, hisob-fakturalar Didox orqali bir kunda tasdiqlandi. 100% ishonchli!',
        rating: 5,
      },
      {
        author: 'Nodira Salimova',
        role: 'Direktor, "Zarafshon IT Solutions"',
        date: '28 oktyabr 2026',
        comment: 'Apple MacBook Pro M3 stansiyalarini buyurtma qildik. Rasmiy kafolati bor, qadoqlari butun va toza. Buxoroda professional korporativ xizmat a’lo darajada.',
        rating: 5,
      },
      {
        author: 'Jamshid Toirov',
        role: 'Menejer, "Buxoro Neft Ta’minot"',
        date: '15 oktyabr 2026',
        comment: 'Ulgurji narxlar va to‘g‘ridan-to‘g‘ri shartnoma tuzish juda qulay. Barcha kantselyariya va ofis jihozlarini faqat shu yerdan xarid qilamiz.',
        rating: 5,
      },
      {
        author: 'Dilnoza Karimova',
        role: 'Bosh hisobchi, "Sharq Invest Agro"',
        date: '8 oktyabr 2026',
        comment: 'Ergonomik ofis kreslolari va server kabellari sotib oldik. QQS 12% bilan to‘liq hisob-kitob qilindi. Mahsulot sifati a’lo darajada.',
        rating: 5,
      },
    ],
    ru: [
      {
        author: 'Азиз Рахимов',
        role: 'Главный снабженец, ООО "Bukhara Desert Oasis"',
        date: '3 ноября 2026',
        comment: 'Закупали через NSB бумагу SvetoCopy и принтеры Epson для всего офиса. Доставили за 2 часа, счета-фактуры подписали через Didox в тот же день. 100% надежность!',
        rating: 5,
      },
      {
        author: 'Нодира Салимова',
        role: 'Директор, "Zarafshon IT Solutions"',
        date: '28 октября 2026',
        comment: 'Заказали рабочие станции Apple MacBook Pro M3. Оригинальная гарантия, заводская упаковка. Отличный корпоративный сервис в Бухаре.',
        rating: 5,
      },
      {
        author: 'Жамшид Тоиров',
        role: 'Менеджер, "Buxoro Neft Ta’minot"',
        date: '15 октября 2026',
        comment: 'Оптовые спеццены и прямой договор с НДС. Менеджеры всегда на связи. Все канцтовары заказываем только здесь.',
        rating: 5,
      },
      {
        author: 'Дильноза Каримова',
        role: 'Главный бухгалтер, "Sharq Invest Agro"',
        date: '8 октября 2026',
        comment: 'Приобрели ортопедические кресла и сетевые шкафы. Полный пакет бухгалтерских документов с 12% НДС без задержек.',
        rating: 5,
      },
    ],
    en: [
      {
        author: 'Aziz Rakhimov',
        role: 'Head of Procurement, "Bukhara Desert Oasis" LLC',
        date: 'November 3, 2026',
        comment: 'Purchased SvetoCopy paper and Epson printers for the entire branch. Delivered within 2 hours, invoices verified via Didox on the same day.',
        rating: 5,
      },
      {
        author: 'Nodira Salimova',
        role: 'Managing Director, "Zarafshon IT Solutions"',
        date: 'October 28, 2026',
        comment: 'Ordered Apple MacBook Pro M3 stations. Full official manufacturer warranty, sealed boxes. Outstanding B2B service.',
        rating: 5,
      },
      {
        author: 'Jamshid Toirov',
        role: 'Operations Lead, "Buxoro Neft Ta’minot"',
        date: 'October 15, 2026',
        comment: 'Direct wholesale rates and formal contract execution. All corporate stationery and IT needs fulfilled reliably.',
        rating: 5,
      },
      {
        author: 'Dilnoza Karimova',
        role: 'Chief Accountant, "Sharq Invest Agro"',
        date: 'October 8, 2026',
        comment: 'Acquired ergonomic office chairs and network infrastructure with 12% VAT. Pristine product quality and prompt paperwork.',
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
