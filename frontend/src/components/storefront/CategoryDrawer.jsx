import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  Footprints,
  Shirt,
  Sparkles,
  Dumbbell,
  Package,
  Shield,
  Trophy,
  Activity,
  Layers,
  Award,
  ArrowRight,
  PhoneCall,
  LayoutGrid,
  X,
  Cone,
  AlertTriangle,
  Construction,
  Wrench,
  HardHat,
  Hammer,
  Zap
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import api from '../../services/api';

const iconMap = {
  Footprints: <Footprints className="w-5 h-5 text-amber-500" />,
  Shirt: <Shirt className="w-5 h-5 text-blue-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-500" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-emerald-500" />,
  Package: <Package className="w-5 h-5 text-violet-500" />,
  Shield: <Shield className="w-5 h-5 text-rose-500" />,
  Trophy: <Trophy className="w-5 h-5 text-amber-400" />,
  Activity: <Activity className="w-5 h-5 text-sky-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  Award: <Award className="w-5 h-5 text-amber-500" />,
  Cone: <Cone className="w-5 h-5 text-orange-500" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-amber-500" />,
  Construction: <Construction className="w-5 h-5 text-yellow-500" />,
  Wrench: <Wrench className="w-5 h-5 text-blue-500" />,
  HardHat: <HardHat className="w-5 h-5 text-teal-500" />,
  Hammer: <Hammer className="w-5 h-5 text-indigo-500" />,
  Zap: <Zap className="w-5 h-5 text-red-500" />
};

export default function CategoryDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [previewProducts, setPreviewProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // Sahifa o'zgarganda (masalan, pastki navigatsiyadan savat, sevimlilar yoki boshqa panel bosilganda) katalogni avtomatik yopish
  useEffect(() => {
    if (isOpen) onClose();
  }, [location.pathname, location.search]);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll and fetch categories on open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      api
        .get('/categories')
        .then((res) => {
          if (res.data.success && res.data.categories.length > 0) {
            setCategories(res.data.categories);
            if (!activeCategory) {
              setActiveCategory(res.data.categories[0]);
            }
          }
        })
        .catch(() => {});

      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Fetch preview products when activeCategory changes
  useEffect(() => {
    if (activeCategory && isOpen) {
      setLoadingProducts(true);
      api
        .get(`/products?categorySlug=${activeCategory.slug}&limit=8`)
        .then((res) => {
          if (res.data.success) {
            setPreviewProducts(res.data.products || []);
          }
        })
        .catch(() => {})
        .finally(() => setLoadingProducts(false));
    }
  }, [activeCategory, isOpen]);

  const handleCategoryClick = (slug) => {
    onClose();
    navigate(`/shop/${slug}`);
  };

  const handleProductClick = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 md:inset-x-0 md:bottom-0 bg-slate-950/70 md:bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 pb-16 md:pb-0"
      style={{
        top: typeof window !== 'undefined' && window.innerWidth < 768 ? '0px' : 'var(--nsb-navbar-height, var(--nsb-header-height, 136px))',
        height: typeof window !== 'undefined' && window.innerWidth < 768 ? 'calc(100dvh - 64px)' : 'calc(100dvh - var(--nsb-navbar-height, var(--nsb-header-height, 136px)))'
      }}
      onClick={onClose}
    >
      {/* Mega-Menu Container: Fullscreen on mobile, Under-header on Desktop */}
      <div
        className="w-full h-full bg-white dark:bg-[#0b0f19] md:border-t border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-catalog-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Fullscreen Header for Category Drawer */}
        <div className="flex md:hidden items-center justify-between px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-black shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="h-8 px-2 rounded-lg bg-white border border-slate-200 dark:border-slate-800 text-slate-900 flex items-center justify-center shadow-2xs overflow-hidden shrink-0">
              <img src="/logo.png" alt="WYUE SPORT OUTLET" className="h-5 w-auto max-w-[75px] object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <div>
              <div className="font-black text-sm text-slate-950 dark:text-white uppercase leading-none">
                SPORT OUTLET
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-extrabold uppercase tracking-wider mt-0.5">
                Katalog (Barcha toifalar)
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
            aria-label="Yopish"
            title="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 max-w-[1820px] w-full mx-auto flex overflow-hidden">
          {/* Categories List: Full width on mobile (< md), Left sidebar on desktop (md+) */}
          <div className="w-full md:w-72 lg:w-80 shrink-0 border-r-0 md:border-r border-slate-200 dark:border-slate-800 overflow-y-auto py-3 px-3 sm:px-3 bg-white md:bg-slate-50/70 dark:bg-black md:dark:bg-[#080c14]/80 space-y-1 pb-24 md:pb-3">
            {/* Mobile All Products shortcut */}
            <button
              type="button"
              onClick={() => {
                onClose();
                navigate('/shop');
              }}
              className="w-full md:hidden flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-xs font-bold bg-slate-950 dark:bg-white text-white dark:text-slate-950 mb-2 shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <LayoutGrid className="w-4 h-4" />
                <span>Barcha mahsulotlar (Katalog)</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </button>

            {categories.map((cat) => {
              const isSelected = activeCategory?._id === cat._id;
              return (
                <button
                  key={cat._id}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      handleCategoryClick(cat.slug);
                    } else {
                      setActiveCategory(cat);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 sm:px-3.5 sm:py-3 rounded-xl text-left text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-100 md:bg-white dark:bg-slate-800/90 text-slate-950 dark:text-white shadow-xs border border-slate-200 dark:border-slate-700 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span
                      className={
                        isSelected
                          ? 'text-slate-950 dark:text-white font-bold'
                          : 'text-slate-500 dark:text-slate-400'
                      }
                    >
                      {iconMap[cat.icon] || <FileText className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                    <span className="truncate">{t(`cat.${cat.slug}`, cat.name)}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? 'text-slate-950 dark:text-white translate-x-0.5'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Content Area: Stretches across all remaining screen width (Desktop only) */}
          <div className="hidden md:flex flex-1 min-w-0 overflow-y-auto p-5 sm:p-7 lg:p-8 flex-col justify-between bg-white dark:bg-[#000000]">
            {activeCategory ? (
              <div className="space-y-6">
                {/* Category Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3">
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight truncate">
                      {t(`cat.${activeCategory.slug}`, activeCategory.name)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {t('drawer.categoryBanner')}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCategoryClick(activeCategory.slug)}
                    className="self-start sm:self-auto shrink-0 inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
                  >
                    {t('drawer.viewAll')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Subcategories Tags */}
                {activeCategory.subcategories && activeCategory.subcategories.length > 0 && (
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2.5">
                      {t('drawer.subcategories')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.subcategories.map((sub, i) => (
                        <button
                          key={i}
                          onClick={() => handleCategoryClick(activeCategory.slug)}
                          className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wide Top Products Preview Grid (2 to 6 columns) */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-3">
                    {t('drawer.popularItems')}
                  </h4>
                  {loadingProducts ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="h-44 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
                      {previewProducts.map((p) => (
                        <div
                          key={p._id}
                          onClick={() => handleProductClick(p.slug)}
                          className="group p-2.5 sm:p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white transition-all cursor-pointer bg-slate-50/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md"
                        >
                          <div className="w-full aspect-square rounded-lg bg-white dark:bg-slate-900 overflow-hidden mb-2 sm:mb-2.5 border border-slate-100 dark:border-slate-800">
                            <img
                              src={
                                p.images?.[0] ||
                                'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&auto=format&fit=crop&q=80'
                              }
                              alt={p.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out will-change-transform"
                            />
                          </div>
                          <h5 className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                            {p.title}
                          </h5>
                          <p className="text-xs font-black text-slate-950 dark:text-white mt-1">
                            {(p.price || 0).toLocaleString('ru-RU')} so‘m
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                {t('drawer.selectCategory')}
              </div>
            )}

            {/* Bottom Support Banner */}
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>
                  {t('drawer.consultation')}: <strong>+998 (95) 155-45-00</strong>
                </span>
              </div>
              <span>{t('drawer.monSat')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
