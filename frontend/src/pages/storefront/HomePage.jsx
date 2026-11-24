import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Filter, ChevronDown } from 'lucide-react';
import HeroSection from '../../components/storefront/HeroSection';
import TrustBadges from '../../components/storefront/TrustBadges';
import ProductCard from '../../components/storefront/ProductCard';
import PromoTiles from '../../components/storefront/PromoTiles';
import WeeklyDeals from '../../components/storefront/WeeklyDeals';
import ReviewsSection from '../../components/storefront/ReviewsSection';
import { useLanguage } from '../../context/LanguageContext';
import api from '../../services/api';

const HOME_CATEGORIES = [
  { id: 'all', label: 'Barcha Mahsulotlar' },
  { id: 'trenajorlar', label: 'Trenajorlar & Kardio' },
  { id: 'gantellar', label: 'Gantellar & Shtangalar' },
  { id: 'boks', label: 'Boks & Yakka Kurash' },
  { id: 'futbol', label: 'Futbol & To‘plar' },
  { id: 'stoykalar', label: 'Podstavka & Skameykalar' },
  { id: 'yol-xavfsizligi', label: 'Yo‘l Harakati Xavfsizligi' },
  { id: 'asboblar', label: 'Professional Asbob-Uskunalar' },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [bestsellers, setBestsellers] = useState([]);
  const [weeklyDeals, setWeeklyDeals] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState('all');
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    api
      .get('/products/featured')
      .then((res) => {
        if (res.data.success) {
          // Unique deduplicated products
          const all = res.data.allProducts || [];
          setBestsellers(res.data.bestsellers || all.slice(0, 10));
          setWeeklyDeals(res.data.weeklyDeals || []);
          setAllProducts(all);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Filter products by selected category tab
  const filteredProducts = useMemo(() => {
    if (selectedCat === 'all') return allProducts;
    if (selectedCat === 'trenajorlar') return allProducts.filter(p => p.category?.includes('Trenajor'));
    if (selectedCat === 'gantellar') return allProducts.filter(p => p.category?.includes('Gantel'));
    if (selectedCat === 'boks') return allProducts.filter(p => p.category?.includes('Boks'));
    if (selectedCat === 'futbol') return allProducts.filter(p => p.category?.includes('Futbol'));
    if (selectedCat === 'stoykalar') return allProducts.filter(p => p.category?.includes('Podstavka'));
    if (selectedCat === 'yol-xavfsizligi') {
      return allProducts.filter(p => p.category?.includes('Yo‘l') || p.category?.includes('Sun‘iy'));
    }
    if (selectedCat === 'asboblar') {
      return allProducts.filter(p =>
        p.category?.includes('Drel') ||
        p.category?.includes('Arra') ||
        p.category?.includes('Balgarka') ||
        p.category?.includes('Lazer')
      );
    }
    return allProducts;
  }, [allProducts, selectedCat]);

  // Handle category change
  const handleCategoryChange = (catId) => {
    setSelectedCat(catId);
    setVisibleCount(20);
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] transition-colors duration-200">
      {/* 1. Hero Grid Section */}
      <HeroSection />

      {/* 2. Trust Features Bar */}
      <TrustBadges />

      {/* 3. Eng Sara Bestsellerlar (10 xil toifadagi eng yaxshi mahsulotlar) */}
      <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-10">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {t('home.bestsellers', 'Eng Sara Mahsulotlar (Bestsellerlar)')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Mijozlar tomonidan eng ko‘p tanlangan turli toifadagi yetakchi mahsulotlar
              </p>
            </div>
          </div>
          <Link
            to="/shop?tag=bestseller"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-colors"
          >
            {t('home.allBestsellers', 'Barchasini ko‘rish')} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {bestsellers.slice(0, 10).map((p) => (
              <ProductCard key={p._id || p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* 4. Promo Triple Tiles */}
      <PromoTiles />

      {/* 5. Hafta Aksiyalari (Chegirmali maxsus takliflar) */}
      {weeklyDeals.length > 0 && (
        <WeeklyDeals products={weeklyDeals} />
      )}

      {/* 6. Barcha Mahsulotlar Katalogi (To'liq va takrorlanmas vitrina) */}
      <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-16">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide uppercase mb-2">
                <Filter className="w-3.5 h-3.5" /> To‘liq Katalog
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Barcha Mahsulotlar Katalogi
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Jami {allProducts.length} ta original mahsulot — har biri 1 tadan, takrorlanmas tartibda
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold transition-all shrink-0 self-start md:self-end"
            >
              Katalog filtrlari <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {HOME_CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? allProducts.length
                  : cat.id === 'trenajorlar'
                  ? allProducts.filter(p => p.category?.includes('Trenajor')).length
                  : cat.id === 'gantellar'
                  ? allProducts.filter(p => p.category?.includes('Gantel')).length
                  : cat.id === 'boks'
                  ? allProducts.filter(p => p.category?.includes('Boks')).length
                  : cat.id === 'futbol'
                  ? allProducts.filter(p => p.category?.includes('Futbol')).length
                  : cat.id === 'stoykalar'
                  ? allProducts.filter(p => p.category?.includes('Podstavka')).length
                  : cat.id === 'yol-xavfsizligi'
                  ? allProducts.filter(p => p.category?.includes('Yo‘l') || p.category?.includes('Sun‘iy')).length
                  : allProducts.filter(p =>
                      p.category?.includes('Drel') ||
                      p.category?.includes('Arra') ||
                      p.category?.includes('Balgarka') ||
                      p.category?.includes('Lazer')
                    ).length;

              const isActive = selectedCat === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                      isActive
                        ? 'bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse"
              />
            ))}
          </div>
        ) : displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {displayedProducts.map((p) => (
                <ProductCard key={p._id || p.id} product={p} />
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 20, filteredProducts.length))}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-sm font-black transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Yana 20 ta ko‘rsatish</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setVisibleCount(filteredProducts.length)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold transition-all active:scale-98 cursor-pointer"
                >
                  Barcha {filteredProducts.length} tasini ochish
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 text-slate-400 text-sm">
            Bu toifada hozircha mahsulotlar mavjud emas.
          </div>
        )}
      </section>

      {/* 7. Corporate Reviews & Google Social Proof */}
      <ReviewsSection />
    </div>
  );
}
