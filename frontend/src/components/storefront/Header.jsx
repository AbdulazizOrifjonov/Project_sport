import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  LayoutGrid,
  Phone,
  GitCompare,
  X,
  Menu,
  ChevronRight,
  Flame,
  Star,
  Monitor,
  Truck,
  Sun,
  Moon,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import api from '../../services/api';

export default function Header({ onToggleCatalog, isCatalogOpen = false }) {
  const { cartItems, cartTotal, cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();
  const { user } = useAuth();
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--nsb-header-height', `${height}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const timer = setTimeout(() => {
        api
          .get(`/products?search=${encodeURIComponent(searchQuery)}&limit=6`)
          .then((res) => {
            if (res.data.success) {
              setSuggestions(res.data.products);
              setShowSuggestions(true);
            }
          })
          .catch(() => {});
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        (!mobileSearchRef.current || !mobileSearchRef.current.contains(e.target))
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const currencyLabel = t('product.currency', 'so‘m');
  const formatPrice = (num) => `${(num || 0).toLocaleString('ru-RU').replace(/,/g, ' ')} ${currencyLabel}`;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-200">
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-50 dark:bg-black border-b border-slate-200/80 dark:border-slate-800 text-[12px] py-1.5 text-slate-700 dark:text-slate-300 transition-colors duration-200">
        <div className="max-w-[1820px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Demo Admin Panel Quick Button */}
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-[11px] sm:text-xs shadow-xs transition-all border border-slate-900 dark:border-white group"
              title="Admin boshqaruv paneliga demo kirish"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
              <span>Admin Panel</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-emerald-500/20 dark:bg-emerald-100 text-emerald-300 dark:text-emerald-800 tracking-wider">
                Demo
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-xs font-semibold">
            {/* Multi-language Selector (UZ | RU | EN) */}
            <div className="h-7.5 inline-flex items-center p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/70 dark:border-slate-700/70 shadow-2xs box-border transition-colors">
              {['uz', 'ru', 'en'].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`h-full px-2.5 flex items-center justify-center rounded-md text-[11px] uppercase cursor-pointer transition-all duration-150 ${
                    lang === l
                      ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white font-black shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white font-semibold hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Kun / Tun Segmented Theme Switcher */}
            <div className="h-7.5 inline-flex items-center p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/70 dark:border-slate-700/70 shadow-2xs box-border transition-colors">
              <button
                type="button"
                onClick={() => isDark && toggleTheme()}
                className={`h-full px-2.5 flex items-center gap-1.5 rounded-md text-[11px] cursor-pointer transition-all duration-150 ${
                  !isDark
                    ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 font-black shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white font-semibold hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
                }`}
                title={t('topbar.day', 'Kun')}
                aria-label={t('topbar.day', 'Kun')}
              >
                <Sun className="w-3.5 h-3.5 fill-amber-500/20" />
                <span className="hidden sm:inline">{t('topbar.day', 'Kun')}</span>
              </button>
              <button
                type="button"
                onClick={() => !isDark && toggleTheme()}
                className={`h-full px-2.5 flex items-center gap-1.5 rounded-md text-[11px] cursor-pointer transition-all duration-150 ${
                  isDark
                    ? 'bg-white dark:bg-slate-900 text-indigo-400 font-black shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white font-semibold hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
                }`}
                title={t('topbar.night', 'Tun')}
                aria-label={t('topbar.night', 'Tun')}
              >
                <Moon className="w-3.5 h-3.5 fill-indigo-400/20" />
                <span className="hidden sm:inline">{t('topbar.night', 'Tun')}</span>
              </button>
            </div>

            <a
              href="tel:+998951554500"
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>+998 (95) 155-45-00</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="mx-auto max-w-[1820px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between md:justify-start gap-3 lg:gap-4 h-15 md:h-18">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden h-10 w-10 flex items-center justify-center -ml-1 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer shrink-0"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Brand Logo & Catalog Button */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link to="/" className="flex items-center gap-2.5 group h-11 shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black border border-white/20 text-white flex items-center justify-center p-1 shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
                <img src="/logo.png" alt="NEXT NOUT" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-[15px] sm:text-[18px] leading-tight tracking-tight text-slate-950 dark:text-white flex items-center gap-1.5">
                  NEXT NOUT
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold -mt-0.5">
                  Notebook Store
                </span>
              </div>
            </Link>

            {/* Catalog Button - Visible on md+ */}
            <button
              type="button"
              onClick={onToggleCatalog}
              className={`hidden md:inline-flex h-11 items-center gap-2.5 px-4 rounded-xl text-[13px] font-bold active:scale-98 transition-all cursor-pointer shadow-xs border box-border shrink-0 ${
                isCatalogOpen
                  ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-md'
                  : 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-slate-900 dark:border-white hover:bg-slate-800 dark:hover:bg-slate-100'
              }`}
              aria-expanded={isCatalogOpen}
              aria-label={isCatalogOpen ? t('header.close', 'Yopish') : t('header.catalog')}
            >
              {isCatalogOpen ? (
                <X className="w-4 h-4 text-white dark:text-slate-950" />
              ) : (
                <LayoutGrid className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              )}
              {isCatalogOpen ? t('header.close', 'Yopish') : t('header.catalog')}
            </button>
          </div>

          {/* Unified Omnisearch Bar */}
          <div ref={searchRef} className="hidden md:block flex-1 relative max-w-3xl xl:max-w-4xl mx-auto h-11">
            <form onSubmit={handleSearchSubmit} className="relative h-11 flex items-center">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('header.searchPlaceholder', "Noutbuklar, MacBook, kompyuterlar, aksessuarlar qidirish…")}
                className="w-full h-11 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 pl-10 pr-4 text-[13px] text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:border-slate-900 dark:focus:border-slate-400 transition-all outline-none font-medium box-border"
                autoComplete="off"
              />
              <Search className="lucide lucide-search w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </form>

            {/* Suggestions drop */}
            {showSuggestions && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
                {suggestions.length > 0 ? (
                  suggestions.map((p) => (
                    <Link
                      key={p._id}
                      to={`/product/${p.slug}`}
                      onClick={() => setShowSuggestions(false)}
                      className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <img
                        src={p.images?.[0] || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80'}
                        alt={p.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80';
                        }}
                        className="w-10 h-10 object-cover rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase font-bold text-slate-400">
                          {p.category}
                        </div>
                        <div className="text-[13px] font-medium text-slate-900 dark:text-white truncate">
                          {p.title}
                        </div>
                        <div className="text-[13px] font-extrabold text-slate-950 dark:text-white">
                          {formatPrice(p.price)}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-slate-400">
                    {t('header.noProducts')}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Action Icons - Desktop */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2 ml-auto md:ml-0 flex-shrink-0">
            {/* Compare */}
            <Link
              to="/compare"
              className="relative hidden xl:inline-flex h-11 px-2.5 flex-col items-center justify-center gap-0.5 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors box-border"
              title={t('header.compare')}
            >
              <GitCompare className="w-4 h-4" />
              <span className="text-[10px] font-medium leading-none">{t('header.compare')}</span>
              {compareList.length > 0 && (
                <span className="absolute top-1 right-1.5 w-4 h-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[9px] font-bold flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              to="/account"
              className="hidden md:inline-flex h-11 px-2.5 flex-col items-center justify-center gap-0.5 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors box-border"
            >
              <User className="w-4 h-4" />
              <span className="text-[10px] font-medium leading-none">
                {user ? user.name.split(' ')[0] : t('header.login')}
              </span>
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative inline-flex h-11 px-2.5 flex-col items-center justify-center gap-0.5 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors box-border"
              aria-label={t('header.wishlist')}
            >
              <Heart className="w-4 h-4" />
              <span className="text-[10px] font-medium leading-none">{t('header.wishlist')}</span>
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[9px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Unified Shopping Cart Button */}
            <Link
              to="/cart"
              className="ml-1 h-11 inline-flex items-center gap-2.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 border border-slate-900 dark:border-white px-4 rounded-xl transition-all cursor-pointer shadow-xs font-semibold box-border shrink-0"
              aria-label={t('header.cart')}
            >
              <span className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 text-slate-950 dark:text-white text-[9px] font-black flex items-center justify-center border border-slate-950/20 dark:border-white/20">
                    {cartCount}
                  </span>
                )}
              </span>
              <span className="text-[13px] font-bold">
                {cartCount > 0 ? formatPrice(cartTotal) : t('header.cart')}
              </span>
            </Link>
          </div>

          {/* Mobile Right Quick Action Icons (Visible only on < md) */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Phone quick call */}
            <a
              href="tel:+998951554500"
              className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center border border-slate-200 dark:border-slate-700 active:scale-95 transition-all shadow-2xs"
              aria-label="Telefon qilish"
              title="Qo‘ng‘iroq qilish"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Savat with live badge */}
            <Link
              to="/cart"
              className="relative h-9 px-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 active:bg-slate-800 dark:active:bg-slate-100 rounded-xl flex items-center gap-1.5 shadow-xs active:scale-95 transition-all border border-slate-900 dark:border-white"
              aria-label="Savat"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 ? (
                <span className="text-xs font-black">{cartCount}</span>
              ) : (
                <span className="text-[11px] font-bold">{t('header.cart')}</span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Row 2: Mobile Omnisearch Bar (< md) */}
      <div className="md:hidden px-4 pb-2.5 pt-0.5">
        <div ref={mobileSearchRef} className="relative w-full">
          <form onSubmit={handleSearchSubmit} className="relative h-10 flex items-center">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('header.searchPlaceholder', "Noutbuklar, MacBook, kompyuterlar, aksessuarlar…")}
              className="w-full h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 pl-9 pr-9 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:border-slate-900 dark:focus:border-white transition-all outline-none font-medium box-border shadow-2xs [&::-webkit-search-cancel-button]:hidden"
              autoComplete="off"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>

          {/* Mobile search suggestions dropdown */}
          {showSuggestions && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 max-h-80 overflow-y-auto">
              {suggestions.length > 0 ? (
                suggestions.map((p) => (
                  <Link
                    key={p._id}
                    to={`/product/${p.slug}`}
                    onClick={() => setShowSuggestions(false)}
                    className="flex items-center gap-3 p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <img
                      src={p.images?.[0] || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80'}
                      alt={p.title}
                      className="w-9 h-9 object-cover rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 truncate">{p.category}</div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">{p.title}</div>
                      <div className="text-xs font-black text-slate-950 dark:text-white">{formatPrice(p.price)}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                  </Link>
                ))
              ) : (
                <div className="p-3 text-center text-xs text-slate-400">{t('header.noProducts')}</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sub-Navigation Strip (Spacious & Clean) */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-black transition-colors duration-200">
        <div className="mx-auto max-w-[1820px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <nav className="flex items-center gap-3 sm:gap-4 py-2.5 overflow-x-auto">
            <Link
              to="/shop?tag=sale"
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors border border-red-200 dark:border-red-900/60 bg-red-50/70 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/60"
            >
              <Flame className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              {t('nav.deals', 'Aksiyalar')}
            </Link>

            <Link
              to="/shop/kompyuternaya-tehnika"
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white"
            >
              <Monitor className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              {t('nav.computers', 'Noutbuklar & Kompyuterlar')}
            </Link>

            <Link
              to="/shop/apple"
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white"
            >
              <span>🍎</span>
              {t('nav.apple', 'Apple MacBook')}
            </Link>

            <Link
              to="/shop?tag=bestseller"
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white"
            >
              <Star className="w-3.5 h-3.5 text-amber-500" />
              {t('nav.popular', 'Ommabop')}
            </Link>

            <Link
              to="/delivery"
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white"
            >
              <Truck className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              {t('nav.delivery', 'Yetkazib berish')}
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
          {/* Mobile Admin Demo Link */}
          <Link
            to="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs shadow-xs border border-slate-900 dark:border-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>Admin Panel (Demo)</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500/20 dark:bg-emerald-100 text-emerald-300 dark:text-emerald-800">
              Kirish →
            </span>
          </Link>

          {/* Mobile Theme Switcher */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Rejim / Режим:</span>
            <button
              type="button"
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-extrabold cursor-pointer ${
                isDark
                  ? 'bg-slate-800 border-indigo-500/50 text-indigo-300'
                  : 'bg-amber-50 border-amber-300 text-amber-800'
              }`}
            >
              {isDark ? (
                <>
                  <Moon className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                  <span>🌙 Tun (Tungi)</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>☀️ Kun (Kunduzgi)</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Til / Язык / Language:</span>
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700 text-xs font-bold">
              {['uz', 'ru', 'en'].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded uppercase cursor-pointer ${
                    lang === l ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onToggleCatalog();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs"
          >
            <span className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" /> {t('header.catalog', 'Katalog')}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <Link
              to="/shop?tag=sale"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-bold border border-red-200 dark:border-red-900/60"
            >
              🔥 {t('nav.deals', 'Aksiyalar')}
            </Link>
            <Link
              to="/shop?tag=bestseller"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700"
            >
              ⭐ {t('nav.popular', 'Ommabop')}
            </Link>
            <Link
              to="/shop/apple"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700"
            >
              🍎 {t('nav.apple', 'Apple MacBook')}
            </Link>
            <Link
              to="/shop/kompyuternaya-tehnika"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700"
            >
              💻 {t('nav.computers', 'Noutbuklar')}
            </Link>
            <Link
              to="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700"
            >
              👤 {t('header.login', 'Kirish')}
            </Link>
            <Link
              to="/delivery"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700"
            >
              🚚 {t('nav.delivery', 'Yetkazib berish')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
