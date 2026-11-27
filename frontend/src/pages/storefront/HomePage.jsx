import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Filter, ChevronDown, Flame } from 'lucide-react';
import HeroSection from '../../components/storefront/HeroSection';
import TrustBadges from '../../components/storefront/TrustBadges';
import ProductCard from '../../components/storefront/ProductCard';
import PromoTiles from '../../components/storefront/PromoTiles';
import ReviewsSection from '../../components/storefront/ReviewsSection';
import { useLanguage } from '../../context/LanguageContext';
import api from '../../services/api';
import { getGroupedProductsSortedByCount, getProductMainGroup } from '../../utils/productGroups';
import { translateProductText } from '../../utils/i18nProduct';

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState('all');
  const [visibleCount, setVisibleCount] = useState(100);

  useEffect(() => {
    api
      .get('/products/featured')
      .then((res) => {
        if (res.data.success) {
          const all = res.data.allProducts || [];
          setAllProducts(all);
          setVisibleCount(all.length || 100);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Dynamically group into 3 main types & sort ascending by product count (fewest -> middle -> most)
  const { groups: orderedGroups, orderedProducts } = useMemo(
    () => getGroupedProductsSortedByCount(allProducts),
    [allProducts]
  );

  // Build HomePage tabs: "Barchasi" + the 3 main groups ordered fewest -> most
  const homeTabs = useMemo(
    () => [
      { id: 'all', label: 'Barcha Mahsulotlar', count: orderedProducts.length },
      ...orderedGroups.map((g) => ({
        id: g.id,
        label: g.label,
        count: g.items.length
      }))
    ],
    [orderedGroups, orderedProducts.length]
  );

  // Filter products by selected main group tab
  const filteredProducts = useMemo(() => {
    if (selectedCat === 'all') return orderedProducts;
    return orderedProducts.filter((p) => getProductMainGroup(p) === selectedCat);
  }, [orderedProducts, selectedCat]);

  // Handle category change
  const handleCategoryChange = (catId) => {
    setSelectedCat(catId);
    setVisibleCount(100);
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] transition-colors duration-200">
      {/* 1. Hero Grid Section */}
      <HeroSection />

      {/* 2. Trust Features Bar */}
      <TrustBadges />

      {/* 3. 🔥 Xit Tovarlar & Yangi Kelganlar (Birinchi Vitrina - Eng Ommabop Mahsulotlar) */}
      <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-2">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Ommabop & Yangi Kelganlar</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-950 dark:text-white tracking-tight flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500 shrink-0" />
              <span>Xit Tovarlar & Yangi Kelganlar</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Do‘konimizning eng sara, xaridorgir va yangi keltirilgan original uskunalari
            </p>
          </div>
          <a
            href="#barcha-katalog"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-all shrink-0 self-start md:self-end shadow-sm cursor-pointer"
          >
            <span>Barcha {allProducts.length || 60} ta mahsulotni ko‘rish</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Main Groups Ordered by Product Count (Fewest -> Middle -> Most) */}
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
          <div className="space-y-10">
            {orderedGroups.map((group, idx) => (
              <div key={group.id} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-black">
                      {idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-950 dark:text-white tracking-tight">
                      {translateProductText(group.label, lang)}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold">
                      {group.items.length} {translateProductText('ta mahsulot', lang)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {translateProductText(group.description, lang)}
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                  {group.items.map((p) => (
                    <ProductCard key={`featured-${group.id}-${p._id || p.id}`} product={p} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Promo Triple Tiles */}
      <PromoTiles />

      {/* 5. Barcha Mahsulotlar Katalogi (To'liq va takrorlanmas vitrina: toifalar bo'yicha saralash) */}
      <section id="barcha-katalog" className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-16">
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
            {homeTabs.map((cat) => {
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
                  <span>{translateProductText(cat.label, lang)}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                      isActive
                        ? 'bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid - All Products Rendered Cleanly Without Duplication */}
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

            {/* Load More Button (if needed) */}
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

      {/* 5. Corporate Reviews & Social Proof */}
      <ReviewsSection />
    </div>
  );
}
