import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 4 Full-Bleed Background Slides with Rich Content
  const slides = [
    {
      id: 'general',
      badge: {
        uz: "NEXT NOUT — Yangi Avlod",
        ru: "NEXT NOUT — Новое Поколение",
        en: "NEXT NOUT — Next-Gen Laptops"
      },
      title: {
        uz: "Noutbuklar va Zamonaviy IT Texnikalar",
        ru: "Ноутбуки и Современная IT Техника",
        en: "Laptops & Cutting-Edge IT Hardware"
      },
      desc: {
        uz: "Eng so‘nggi avlod Apple MacBook, ASUS, Lenovo, HP noutbuklari va professional IT aksessuarlar. 100% original, rasmiy kafolat bilan.",
        ru: "Новейшие ноутбуки Apple MacBook, ASUS, Lenovo, HP и профессиональные аксессуары. 100% оригинал с официальной гарантией.",
        en: "Latest generation Apple MacBook, ASUS, Lenovo, HP laptops and pro IT gear with official warranty."
      },
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&auto=format&fit=crop&q=85",
      btnPrimaryText: {
        uz: "Katalogga o‘tish",
        ru: "Перейти в каталог",
        en: "Browse Catalog"
      },
      btnPrimaryLink: "/shop",
      btnSecondaryText: {
        uz: "Barcha aksiyalar",
        ru: "Все акции",
        en: "All Deals"
      },
      btnSecondaryLink: "/shop?tag=sale",
      gradient: "from-zinc-950/95 via-slate-950/85 to-black/40"
    },
    {
      id: 'apple',
      badge: {
        uz: "Apple & IT Ishchi Stansiyalar",
        ru: "Apple и Рабочие Станции",
        en: "Apple & IT Workstations"
      },
      title: {
        uz: "Apple MacBook Pro M3 & Server Texnikalari",
        ru: "Apple MacBook Pro M3 и Серверное Оборудование",
        en: "Apple MacBook Pro M3 & Enterprise Servers"
      },
      desc: {
        uz: "Eng so‘nggi avlod MacBook, iMac va professional noutbuklar. 100% original, rasmiy kafolat va tezkor yetkazib berish bilan.",
        ru: "Новейшие MacBook, iMac и мощные ноутбуки с официальной гарантией и быстрой доставкой.",
        en: "Latest generation MacBooks, iMacs and pro notebooks with official warranty and fast shipping."
      },
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&auto=format&fit=crop&q=85",
      btnPrimaryText: {
        uz: "Apple katalogi",
        ru: "Каталог Apple",
        en: "Apple Catalog"
      },
      btnPrimaryLink: "/shop/apple",
      btnSecondaryText: {
        uz: "Kompyuter texnikasi",
        ru: "Компьютерная техника",
        en: "Computers"
      },
      btnSecondaryLink: "/shop/kompyuternaya-tehnika",
      gradient: "from-[#070b16]/95 via-[#0e1726]/85 to-black/35"
    },
    {
      id: 'gaming',
      badge: {
        uz: "O‘yin va 3D Grafika",
        ru: "Гейминг и 3D Графика",
        en: "Gaming & 3D Workloads"
      },
      title: {
        uz: "Gaming Noutbuklar & RTX Grafikasi",
        ru: "Игровые Ноутбуки и Графика RTX",
        en: "Gaming Laptops & RTX Graphics"
      },
      desc: {
        uz: "ASUS ROG, Lenovo Legion va HP Victus. Yuqori unumdorlikdagi og‘ir montaj, render va kibersport o‘yinlari uchun maxsus.",
        ru: "ASUS ROG, Lenovo Legion и HP Victus. Максимальная производительность для монтажа, рендеринга и киберспорта.",
        en: "ASUS ROG, Lenovo Legion and HP Victus. Maximum performance for rendering, editing and gaming."
      },
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1600&auto=format&fit=crop&q=85",
      btnPrimaryText: {
        uz: "Gaming noutbuklar",
        ru: "Игровые ноутбуки",
        en: "Gaming Laptops"
      },
      btnPrimaryLink: "/shop/kompyuternaya-tehnika",
      btnSecondaryText: {
        uz: "B2B Shartnoma",
        ru: "B2B Договор",
        en: "B2B Contract"
      },
      btnSecondaryLink: "/delivery#b2b",
      gradient: "from-[#081b33]/95 via-[#0d2a4d]/85 to-black/35"
    },
    {
      id: 'peripherals',
      badge: {
        uz: "Professional Aksessuarlar",
        ru: "Профессиональные Аксессуары",
        en: "Pro Peripherals & Gear"
      },
      title: {
        uz: "Logitech, Razer Sichqoncha va Klaviaturalar",
        ru: "Мыши и Клавиатуры Logitech, Razer",
        en: "Logitech, Razer Mice & Keyboards"
      },
      desc: {
        uz: "Ergonomik MX Master sichqonchalari, mexanik klaviaturalar, monitorlar va quloqchinlar eng yaxshi narxlarda.",
        ru: "Эргономичные мыши MX Master, механические клавиатуры, мониторы и наушники по лучшим ценам.",
        en: "Ergonomic MX Master mice, mechanical keyboards, displays and headsets at top prices."
      },
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1600&auto=format&fit=crop&q=85",
      btnPrimaryText: {
        uz: "Aksessuarlar",
        ru: "Аксессуары",
        en: "Peripherals"
      },
      btnPrimaryLink: "/shop/kompyuternaya-tehnika",
      btnSecondaryText: {
        uz: "Barcha tovarlar",
        ru: "Все товары",
        en: "All Products"
      },
      btnSecondaryLink: "/shop",
      gradient: "from-[#1a1510]/95 via-[#2b1f14]/85 to-black/35"
    }
  ];

  // Extended slides for infinite seamless sliding animation
  // [Slide3_clone, Slide0, Slide1, Slide2, Slide3, Slide0_clone]
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Current track index (starts at 1 which is Slide 0)
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
      // Reached the clone of Slide 0 at the end -> jump smoothly without transition to real Slide 0 (index 1)
      setIsTransitioning(false);
      setCurrentIndex(1);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    } else if (currentIndex <= 0) {
      // Reached the clone of Slide 3 at the beginning -> jump smoothly to real Slide 3 (index 4)
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

                    {/* Slide Title */}
                    <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.18] mt-4 sm:mt-5 max-w-2xl drop-shadow-md">
                      {getLoc(s.title)}
                    </h1>

                    {/* Slide Description */}
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-xl drop-shadow-xs line-clamp-3 sm:line-clamp-none">
                      {getLoc(s.desc)}
                    </p>

                    {/* CTA Action Buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        to={s.btnPrimaryLink}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-xl text-[13px] sm:text-sm font-extrabold hover:bg-white/95 active:scale-95 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                      >
                        {getLoc(s.btnPrimaryText)} <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to={s.btnSecondaryLink}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] sm:text-sm font-bold text-white border border-white/35 hover:bg-white/15 backdrop-blur-sm active:scale-95 transition-all cursor-pointer"
                      >
                        {getLoc(s.btnSecondaryText)}
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Info Bar inside Slide */}
                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/85 flex-wrap gap-3">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Truck className="w-3.5 h-3.5 text-emerald-400" /> {t('hero.fastDelivery')}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> {t('hero.original')}
                      </span>
                    </div>

                    {/* Slide Counter badge */}
                    <span className="hidden sm:inline-block font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-black/40 text-white/90 backdrop-blur-xs">
                      {realIndex + 1} / {slides.length}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Navigation Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            aria-label="Oldingi slayd"
            title="Oldingi"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            aria-label="Keyingi slayd"
            title="Keyingi"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Dot / Bar Indicators with Real-Time Animated Progress Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
            {slides.map((_, i) => {
              const isActive = realIndex === i;
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

        {/* Right 2 Side Promo Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 h-full">
          {/* Tile 1: Pale Blue / Dark Sapphire */}
          <Link
            to="/shop/apple"
            className="group relative rounded-2xl p-6 bg-[var(--color-tile-1)] border border-sky-100 dark:border-slate-800 flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
          >
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                {t('hero.tile1Badge')}
              </span>
              <h3 className="mt-1 text-[19px] font-extrabold tracking-tight text-slate-950 dark:text-white leading-snug">
                {t('hero.tile1Title')}
              </h3>
              <p className="mt-1 text-[12px] text-slate-600 dark:text-slate-300 line-clamp-2">
                {t('hero.tile1Desc')}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-200/60 dark:border-slate-700/60 flex items-center justify-between">
              <span className="text-[13px] font-bold text-slate-900 dark:text-white group-hover:underline inline-flex items-center gap-1">
                {t('hero.more')} <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[12px] font-bold text-slate-950 dark:text-white">
                {t('hero.tile1Price')}
              </span>
            </div>
          </Link>

          {/* Tile 2: Pale Yellow / Dark Amber */}
          <Link
            to="/shop/kompyuternaya-tehnika"
            className="group relative rounded-2xl p-6 bg-[var(--color-tile-2)] border border-amber-100 dark:border-slate-800 flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
          >
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {t('hero.tile2Badge')}
              </span>
              <h3 className="mt-1 text-[19px] font-extrabold tracking-tight text-slate-950 dark:text-white leading-snug">
                {t('hero.tile2Title')}
              </h3>
              <p className="mt-1 text-[12px] text-slate-600 dark:text-slate-300 line-clamp-2">
                {t('hero.tile2Desc')}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/60 dark:border-slate-700/60 flex items-center justify-between">
              <span className="text-[13px] font-bold text-amber-900 dark:text-amber-300 group-hover:underline inline-flex items-center gap-1">
                {t('hero.btnCatalog')} <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[12px] font-semibold text-amber-800 dark:text-amber-300">
                {t('hero.tile2Warranty')}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
