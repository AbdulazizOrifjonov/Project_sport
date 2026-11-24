import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 4 Full-Bleed Background Slides for WYUE / NSB Platform
  const slides = [
    {
      id: 'asboblar-main',
      badge: {
        uz: "ELEKTR ASBOBLAR & QURILISH",
        ru: "ЭЛЕКТРОИНСТРУМЕНТЫ И СТРОИТЕЛЬСТВО",
        en: "POWER TOOLS & CONSTRUCTION"
      },
      title: {
        uz: "Professional Akkumulyatorli Asboblar To‘plamlari",
        ru: "Профессиональные Наборы Аккумуляторных Инструментов",
        en: "Professional Cordless Power Tool Sets"
      },
      desc: {
        uz: "4&1 universal komplektlar (gaykavyort, balgarka, drel, perforator), zarbli drel-shurupovyortlar va elektr uskunalar. Buxoro va O‘zbekiston bo‘ylab tezkor yetkazish.",
        ru: "Универсальные наборы 4в1 (гайковерт, болгарка, дрель, перфоратор), аккумуляторные ударные шуруповерты и надежные инструменты.",
        en: "4-in-1 combo tool sets (impact wrench, angle grinder, drill, rotary hammer) and cordless tools with fast delivery."
      },
      image: "/uploads/prod-492456_1.jpg",
      btnPrimaryText: {
        uz: "Asboblar katalogi",
        ru: "Каталог инструментов",
        en: "Browse Tools"
      },
      btnPrimaryLink: "/shop?category=drellar-shurupovyortlar",
      btnSecondaryText: {
        uz: "Barcha mahsulotlar",
        ru: "Все товары",
        en: "All Products"
      },
      btnSecondaryLink: "/shop",
      gradient: "from-zinc-950/95 via-slate-950/85 to-black/40"
    },
    {
      id: 'yol-xavfsizlik-main',
      badge: {
        uz: "YO‘L HARAKATI XAVFSIZLIGI",
        ru: "ДОРОЖНАЯ БЕЗОПАСНОСТЬ",
        en: "ROAD & TRAFFIC SAFETY"
      },
      title: {
        uz: "Yo‘l Harakati Xavfsizlik Konuslari va To‘siqlar",
        ru: "Дорожные Конусы, Ограждения и Знаки",
        en: "Traffic Cones, Barriers & Equipment"
      },
      desc: {
        uz: "Yuqori sifatli egiluvchan TPU konuslar, suriluvchi metall garmoshkalar, kauchuk kolesootboyniklar, dempferlar va avtomatik parkovka to‘siqlari.",
        ru: "Высококачественные эластичные дорожные конусы TPU, раздвижные металлические ограждения, колесоотбойники и парковочные барьеры.",
        en: "High-grade flexible TPU traffic safety cones, expandable scissor barriers, rubber wheel stops and automatic parking barriers."
      },
      image: "/uploads/konus-tpu-75sm.jpg",
      btnPrimaryText: {
        uz: "Yo‘l xavfsizligi",
        ru: "Дорожная безопасность",
        en: "Road Safety"
      },
      btnPrimaryLink: "/shop?category=yol-xavfsizligi",
      btnSecondaryText: {
        uz: "Barcha to‘siqlar",
        ru: "Все ограждения",
        en: "All Barriers"
      },
      btnSecondaryLink: "/shop?category=yol-xavfsizligi",
      gradient: "from-[#08080a]/95 via-[#1a120b]/85 to-black/35"
    },
    {
      id: 'isitgichlar-main',
      badge: {
        uz: "ISITGICHLAR & TEXNIK FENLAR",
        ru: "ОБОГРЕВАТЕЛИ И ТЕПЛОВЫЕ ПУШКИ",
        en: "HEATERS & HEAT GUNS"
      },
      title: {
        uz: "Quyosh Reflektorli Isitgichlar va Sanoat Fenlari",
        ru: "Инфракрасные Обогреватели и Технические Фены",
        en: "Reflector Sun Heaters & Industrial Heat Guns"
      },
      desc: {
        uz: "Tejamkor infraqizil elektr quyosh isitgichlar, sanoat issiqlik to‘plari va harorat sozlagichli 2000W kuchli texnik fenlar.",
        ru: "Экономичные инфракрасные обогреватели, промышленные тепловые пушки 2000W и фены с регулировкой температуры.",
        en: "Energy-efficient infrared reflector heaters, industrial fan heaters, and 2000W variable temperature heat guns."
      },
      image: "/uploads/prod-968785_1.jpg",
      btnPrimaryText: {
        uz: "Isitgichlar katalogi",
        ru: "Каталог обогревателей",
        en: "Browse Heaters"
      },
      btnPrimaryLink: "/shop?category=isitgichlar-iqlim",
      btnSecondaryText: {
        uz: "Barcha aksiyalar",
        ru: "Все товары",
        en: "All Deals"
      },
      btnSecondaryLink: "/shop",
      gradient: "from-[#0a0a0c]/95 via-[#1a150b]/85 to-black/35"
    },
    {
      id: 'arralar-main',
      badge: {
        uz: "ARRALAR & BOG‘ TEXNIKASI",
        ru: "ПИЛЫ И САДОВАЯ ТЕХНИКА",
        en: "SAWS & GARDEN TOOLS"
      },
      title: {
        uz: "Akkumulyatorli Trimmerlar va Mini Arralar",
        ru: "Аккумуляторные Триммеры и Мини Пилы",
        en: "Cordless Grass Trimmers & Mini Chainsaws"
      },
      desc: {
        uz: "Universal g‘ildirakli maysa o‘radigan trimmerlar, 2&1 bog‘bon to‘plamlari (mini zanjirli arra + sekator) va diskli arralar.",
        ru: "Аккумуляторные триммеры на колесах для газона, садовые наборы 2в1 (мини пила + секатор) и дисковые циркулярные пилы.",
        en: "Cordless wheeled grass trimmers, 2-in-1 gardening kits (mini chainsaw + pruner) and circular saws."
      },
      image: "/uploads/prod-480962_1.jpg",
      btnPrimaryText: {
        uz: "Trimmerlar & Arralar",
        ru: "Триммеры и пилы",
        en: "Trimmers & Saws"
      },
      btnPrimaryLink: "/shop?category=arralar-elektr-uskunalar",
      btnSecondaryText: {
        uz: "Katalogga o‘tish",
        ru: "Перейти в каталог",
        en: "All Products"
      },
      btnSecondaryLink: "/shop",
      gradient: "from-zinc-950/95 via-slate-950/85 to-black/40"
    }
  ];

  // Extended slides with clones for seamless infinite horizontal slider looping
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Start on index 1 (the first real slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  // Active real index for indicator dots and counter (0, 1, 2, 3)
  const realIndex = (currentIndex - 1 + slides.length) % slides.length;

  // Auto-play Slider every 5 seconds with automatic smooth animation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    if (currentIndex >= slides.length + 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setSlideKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setSlideKey((prev) => prev + 1);
  };

  const goToSlide = (targetRealIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(targetRealIndex + 1);
    setSlideKey((prev) => prev + 1);
  };

  // Seamless infinite loop handler
  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  const getLoc = (obj) => (typeof obj === 'object' ? obj[lang] || obj.uz : obj);

  return (
    <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 md:pt-6 pb-6">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-3.5 min-h-[500px] lg:h-[540px]">
        {/* Main Hero Slider with Infinite Smooth Horizontal Carousel Animation */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-2xl overflow-hidden shadow-lg select-none group h-full flex flex-col justify-between bg-slate-900"
        >
          {/* Continuous Sliding Track with Hardware Accelerated CSS Transform */}
          <div
            className={`flex h-full w-full will-change-transform ${
              isTransitioning
                ? 'transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]'
                : 'transition-none'
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((s, idx) => (
              <div
                key={`${s.id}-${idx}`}
                className="relative min-w-full w-full h-full shrink-0 flex flex-col justify-between overflow-hidden"
              >
                {/* Full Bleed Background Image */}
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Contrast Gradient Overlays for maximum text readability */}
                <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient}`} />
                <div className="absolute inset-0 bg-black/25" />

                {/* Slide Content Layer */}
                <div className="relative z-10 px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 flex flex-col justify-between h-full">
                  {/* Top Slide Badge */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-black tracking-wider uppercase bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/25 shadow-xs w-fit transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      {getLoc(s.badge)}
                    </span>
                  </div>

                  {/* Center Hero Heading & Subtitle */}
                  <div className="my-auto max-w-2xl py-4 sm:py-6">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
                      {getLoc(s.title)}
                    </h1>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-slate-200/90 max-w-xl leading-relaxed drop-shadow-sm font-medium line-clamp-3">
                      {getLoc(s.desc)}
                    </p>

                    {/* Action CTA Buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        to={s.btnPrimaryLink}
                        className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group/btn cursor-pointer active:scale-95"
                      >
                        {getLoc(s.btnPrimaryText)}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>

                      <Link
                        to={s.btnSecondaryLink}
                        className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm tracking-wide transition-all border border-white/20 cursor-pointer active:scale-95"
                      >
                        {getLoc(s.btnSecondaryText)}
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Trust Indicators */}
                  <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold text-slate-200">
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{t('hero.delivery', 'Tezkor yetkazish')}</span>
                    </div>
                    <span className="text-white/40">•</span>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{t('hero.guarantee', '100% Original kafolat')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Oldingi slayd"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 cursor-pointer active:scale-90"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Keyingi slayd"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 cursor-pointer active:scale-90"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Interactive Slide Indicators */}
          <div className="absolute bottom-5 right-5 sm:right-8 z-20 flex items-center gap-2">
            {slides.map((_, i) => {
              const isActive = i === realIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                    isActive ? 'w-10 bg-white/30' : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Slayd ${i + 1}`}
                >
                  {isActive && (
                    <span
                      key={`progress-${realIndex}-${slideKey}`}
                      className="absolute inset-y-0 left-0 bg-white rounded-full animate-slide-progress"
                      style={{
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right 2 Side Promo Tiles (Yo'l Xavfsizligi & 4&1 Asboblar To'plami) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 h-full">
          {/* Tile 1: Yo'l Xavfsizligi */}
          <Link
            to="/shop?category=yol-xavfsizligi"
            className="group relative rounded-2xl p-6 bg-slate-900/90 hover:bg-slate-800/95 border-2 border-slate-700/80 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-all"
          >
            <div>
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/15 px-2.5 py-1 rounded-lg border border-orange-500/30">
                Yo‘l Harakati Xavfsizligi
              </span>
              <h3 className="mt-2 text-[19px] font-black tracking-tight text-white leading-snug">
                TPU Egiluvchan Yo‘l Konuslari & To‘siqlar
              </h3>
              <p className="mt-1 text-[12px] text-slate-300 line-clamp-2">
                Egiluvchan, mashina bosganda sinmaydigan 75 sm konuslar, suriluvchi garmoshkalar va dempferlar.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between">
              <span className="text-[13px] font-bold text-white group-hover:underline inline-flex items-center gap-1">
                Katalogga o‘tish <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              </span>
              <span className="text-[13px] font-black text-orange-400">
                130 000 so‘mdan
              </span>
            </div>
          </Link>

          {/* Tile 2: 4&1 Kombo To'plam */}
          <Link
            to="/shop?category=asboblar-to-plami"
            className="group relative rounded-2xl p-6 bg-slate-900/90 hover:bg-slate-800/95 border-2 border-slate-700/80 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-all"
          >
            <div>
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/30">
                Asboblar To‘plami
              </span>
              <h3 className="mt-2 text-[19px] font-black tracking-tight text-white leading-snug">
                4&1 Professional Akkumulyatorli To‘plam
              </h3>
              <p className="mt-1 text-[12px] text-slate-300 line-clamp-2">
                Gaykavyort, balgarka, drel va perforator bitta mustahkam qattiq keysda. To‘liq komplekt.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between">
              <span className="text-[13px] font-bold text-amber-300 group-hover:underline inline-flex items-center gap-1">
                Batafsil ko‘rish <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </span>
              <span className="text-[13px] font-black text-amber-400">
                895 000 so‘m
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
