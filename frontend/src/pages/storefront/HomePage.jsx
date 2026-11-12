import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../../components/storefront/HeroSection';
import TrustBadges from '../../components/storefront/TrustBadges';
import ProductCard from '../../components/storefront/ProductCard';
import PromoTiles from '../../components/storefront/PromoTiles';
import WeeklyDeals from '../../components/storefront/WeeklyDeals';
import ReviewsSection from '../../components/storefront/ReviewsSection';
import { useLanguage } from '../../context/LanguageContext';
import api from '../../services/api';

export default function HomePage() {
  const { t } = useLanguage();
  const [bestsellers, setBestsellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [weeklyDeals, setWeeklyDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/products/featured')
      .then((res) => {
        if (res.data.success) {
          setBestsellers(res.data.bestsellers || []);
          setNewArrivals(res.data.newArrivals || []);
          setWeeklyDeals(res.data.weeklyDeals || []);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] transition-colors duration-200">
      {/* 1. Hero Grid Section */}
      <HeroSection />

      {/* 2. Trust Features Bar */}
      <TrustBadges />

      {/* 3. Bestsellers Section */}
      <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-10">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {t('home.bestsellers')}
          </h2>
          <Link
            to="/shop?tag=bestseller"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-colors"
          >
            {t('home.allBestsellers')} <ArrowRight className="w-3.5 h-3.5" />
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
            {bestsellers.slice(0, 5).map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* 4. Promo Triple Tiles */}
      <PromoTiles />

      {/* 5. New Arrivals Section */}
      <section className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pb-10">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {t('home.newArrivals')}
          </h2>
          <Link
            to="/shop?tag=new"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-colors"
          >
            {t('home.allNew')} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {newArrivals.slice(0, 5).map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      {/* 6. Weekly Deals with Countdown */}
      <WeeklyDeals products={weeklyDeals} />

      {/* 7. Corporate Reviews & Google Social Proof */}
      <ReviewsSection />
    </div>
  );
}
