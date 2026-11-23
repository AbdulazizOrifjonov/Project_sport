import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  Truck,
  Sun,
  Moon,
  ShieldCheck,
  Package,
  Dumbbell,
  Footprints,
  Shirt,
  Trophy,
  Activity,
  MapPin,
  Cone,
  Wrench,
  Hammer
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
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const headerRef = useRef(null);
  const activeNavRef = useRef(null);

  // Sync searchQuery from URL params when on /shop?search=...
  useEffect(() => {
    const q = new URLSearchParams(location.search).get('search');
    if (q !== null && q !== undefined) {
      setSearchQuery(q);
    }
  }, [location.search]);

  // Active Category / Tag from location
  const currentParams = new URLSearchParams(location.search);
  const currentCategory = currentParams.get('category') || (location.pathname.startsWith('/shop/') ? location.pathname.replace('/shop/', '') : '');
  const currentTag = currentParams.get('tag') || '';

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || '';
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height || headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--nsb-navbar-height', `${height}px`);
        document.documentElement.style.setProperty('--nsb-header-height', `${height}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && headerRef.current) {
      ro = new ResizeObserver(updateHeaderHeight);
      ro.observe(headerRef.current);
    }
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      if (ro) ro.disconnect();
    };
  }, []);

  // Active horizontal scroll for subnav: auto-scroll to the active link
  useEffect(() => {
    if (activeNavRef.current) {
      activeNavRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [location.pathname, location.search]);

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
    <>
      {/* Sticky Active Navbar Header (Topbar + Main Header + Kategoriyalar tasmagichi) */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-200"
      >
        {/* 1. Top Utility Contact Bar */}
        <div className="hidden md:block bg-white dark:bg-black text-[12px] text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800/80 py-1.5 transition-colors duration-200">
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

        {/* 2. Main Header Row - Spacious, Stable & Fixed */}
        <div className="mx-auto max-w-[1820px] px-3 sm:px-6 lg:px-8 xl:px-10">
          {/* 1. DESKTOP HEADER ROW (md+) */}
          <div className="hidden md:flex items-center justify-between md:justify-start gap-3 lg:gap-4 h-18 md:h-20">
            {/* Brand Logo & Catalog Button */}
            <div className="flex items-center gap-3 md:gap-4">
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group h-12 shrink-0">
                <div className="h-11 px-2.5 rounded-xl bg-white border border-slate-200 dark:border-slate-800 text-slate-900 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-all overflow-hidden shrink-0">
                  <img src="/logo.png" alt="WYUE SPORT OUTLET" className="h-7 w-auto max-w-[110px] object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-black text-[17px] sm:text-[19px] leading-tight tracking-tight text-slate-950 dark:text-white flex items-center gap-1.5 uppercase font-sans">
                    SPORT OUTLET
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-extrabold -mt-0.5">
                    Sport &amp; Fitness Store
                  </span>
                </div>
              </Link>

              {/* Catalog Button */}
              <button
                type="button"
                onClick={onToggleCatalog}
                className="hidden md:inline-flex h-12 items-center gap-2.5 px-5 rounded-xl text-[14px] font-black active:scale-98 transition-all cursor-pointer shadow-md shrink-0 bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 shadow-slate-950/20 dark:shadow-white/10"
                aria-expanded={isCatalogOpen}
                aria-label={t('header.catalog', 'Katalog')}
              >
                {isCatalogOpen ? (
                  <X className="w-5 h-5 text-white dark:text-slate-950 stroke-[2.5]" />
                ) : (
                  <Menu className="w-5 h-5 text-white dark:text-slate-950 stroke-[2.5]" />
                )}
                <span>{t('header.catalog', 'Katalog')}</span>
              </button>
            </div>

            {/* Desktop Unified Omnisearch Bar */}
            <div ref={searchRef} className="flex-1 relative max-w-3xl xl:max-w-4xl mx-auto h-12">
              <form onSubmit={handleSearchSubmit} className="relative h-12 flex items-center">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('header.searchPlaceholder', "Trenajorlar, gantellar, krossovkalar, sport kiyimlari qidirish…")}
                  className="w-full h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700/80 pl-11 pr-28 text-[13px] text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none font-medium box-border shadow-xs"
                  autoComplete="off"
                />
                <Search className="lucide lucide-search w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-22 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
                    title="Tozalash"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-black hover:bg-slate-800 dark:hover:bg-slate-100 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  Qidirish
                </button>
              </form>

              {/* Suggestions dropdown */}
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
                          className="w-10 h-10 object-contain p-0.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] uppercase font-bold text-slate-400">{p.category}</div>
                          <div className="text-[13px] font-medium text-slate-900 dark:text-white truncate">{p.title}</div>
                          <div className="text-[13px] font-extrabold text-slate-950 dark:text-white">{formatPrice(p.price)}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-400">{t('header.noProducts')}</div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Action Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2 ml-auto md:ml-0 flex-shrink-0">
              <Link
                to="/compare"
                className="hidden xl:inline-flex h-12 px-3.5 flex-col items-center justify-center gap-0.5 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-all shadow-xs box-border active:scale-95"
                title={t('header.compare')}
              >
                <span className="relative">
                  <GitCompare className="w-4.5 h-4.5 text-slate-700 dark:text-slate-300" />
                  {compareList.length > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-[17px] h-[17px] px-1 rounded-full bg-emerald-500 text-slate-950 text-[9px] font-black flex items-center justify-center shadow-xs">
                      {compareList.length}
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-bold leading-none">{t('header.compare')}</span>
              </Link>

              <Link
                to="/account"
                className="hidden md:inline-flex h-12 px-3.5 flex-col items-center justify-center gap-0.5 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-all shadow-xs box-border active:scale-95"
              >
                <User className="w-4.5 h-4.5 text-slate-700 dark:text-slate-300" />
                <span className="text-[10px] font-bold leading-none">{user ? user.name.split(' ')[0] : t('header.login')}</span>
              </Link>

              <Link
                to="/wishlist"
                className="inline-flex h-12 px-3.5 flex-col items-center justify-center gap-0.5 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-all shadow-xs box-border active:scale-95"
                aria-label={t('header.wishlist')}
              >
                <span className="relative">
                  <Heart className="w-4.5 h-4.5 text-slate-700 dark:text-slate-300" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-[17px] h-[17px] px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center shadow-xs">
                      {wishlist.length}
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-bold leading-none">{t('header.wishlist')}</span>
              </Link>

              <Link
                to="/cart"
                className="ml-1 h-12 inline-flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-950 dark:text-white border border-slate-300 dark:border-slate-700/80 px-4 rounded-xl transition-all cursor-pointer shadow-xs font-black box-border shrink-0 active:scale-98"
                aria-label={t('header.cart', 'Savat')}
                title={t('header.cart', 'Savat')}
              >
                <span className="relative">
                  <ShoppingCart className="w-5 h-5 text-slate-950 dark:text-white" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 min-w-4.5 h-4.5 px-1 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[10px] font-black flex items-center justify-center shadow-xs">
                      {cartCount}
                    </span>
                  )}
                </span>
                <span className="text-[13px] font-extrabold tracking-tight">{t('header.cart', 'Savat')}</span>
              </Link>
            </div>
          </div>

          {/* 2. MOBILE CLEAN 1-ROW NAVBAR (< md) — [LOGO] + [INPUT] + [= BUTTON] */}
          <div className="flex md:hidden items-center gap-2 h-14 w-full">
            {/* Logo (chapda) */}
            <Link to="/" className="flex items-center shrink-0">
              <div className="h-10 px-2 rounded-xl bg-white border border-slate-200 dark:border-slate-800 text-slate-900 flex items-center justify-center shadow-2xs overflow-hidden active:scale-95 transition-transform shrink-0">
                <img src="/logo.png" alt="WYUE SPORT OUTLET" className="h-6 w-auto max-w-[85px] object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </Link>

            {/* Input (o'rtada, to'liq qidiruv) */}
            <div ref={mobileSearchRef} className="flex-1 relative min-w-0">
              <form onSubmit={handleSearchSubmit} className="relative h-10 flex items-center w-full">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('header.searchPlaceholder', "Qidiruv...")}
                  className="w-full h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 pl-8 pr-7 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:border-slate-900 dark:focus:border-white transition-all outline-none font-medium box-border shadow-2xs [&::-webkit-search-cancel-button]:hidden"
                  autoComplete="off"
                />
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </form>

              {/* Mobile search suggestions */}
              {showSuggestions && (
                <div className="absolute left-0 right-0 top-full mt-1.5 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 max-h-72 overflow-y-auto">
                  {suggestions.length > 0 ? (
                    suggestions.map((p) => (
                      <Link
                        key={p._id}
                        to={`/product/${p.slug}`}
                        onClick={() => setShowSuggestions(false)}
                        className="flex items-center gap-2.5 p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <img
                          src={p.images?.[0] || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200'}
                          alt={p.title}
                          className="w-9 h-9 object-contain p-0.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-[12px] font-medium text-slate-900 dark:text-white truncate">{p.title}</div>
                          <div className="text-[11px] font-extrabold text-slate-950 dark:text-white">{formatPrice(p.price)}</div>
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

            {/* Sidebarni ochadigan buton (=) (o'ng burchakda - bosilganda yon sidebar ochiladi) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 border border-slate-900 dark:border-white transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95"
              aria-label="Menyu va sozlamalar"
              title="Menyu"
            >
              <Menu className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
        {/* Sub-Navigation Strip (Kategoriyalar tasmagichi - o'z joyiga qaytarildi) */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-black transition-colors duration-200 py-2 sm:py-2.5">
          <div className="mx-auto max-w-[1820px] px-4 sm:px-6 lg:px-8 xl:px-10">
            <nav className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none py-0.5">
            {/* 1. Aksiyalar kuni */}
            {(() => {
              const isActive = currentTag === 'sale';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/shop?tag=sale"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-500/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Flame className={`w-4 h-4 shrink-0 ${isActive ? 'text-white fill-white/20' : 'text-rose-600 dark:text-rose-400 fill-rose-500/20'}`} />
                  <span>{t('nav.deals', 'Aksiyalar kuni')}</span>
                </Link>
              );
            })()}

            {/* 2. Trenajorlar & Kardio (Sport) */}
            {(() => {
              const isActive = currentCategory === 'trenajorlar';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/shop?category=trenajorlar"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md ring-2 ring-slate-950/20 dark:ring-white/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Activity className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-amber-500'}`} />
                  <span>Trenajorlar &amp; Kardio</span>
                </Link>
              );
            })()}

            {/* 3. Yo'l Harakati & Konuslar (Ko'cha/Yo'l jihozlari) */}
            {(() => {
              const isActive = currentCategory === 'yol-konuslari' || currentCategory === 'yol-belgilari' || currentCategory === 'suniy-notekislik';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/shop?category=yol-konuslari"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-md ring-2 ring-orange-500/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Cone className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-orange-500'}`} />
                  <span>Yo‘l Xavfsizligi &amp; Konuslar</span>
                </Link>
              );
            })()}

            {/* 4. Asbob-Uskunalar (Drellar, Balgarkalar) */}
            {(() => {
              const isActive = currentCategory === 'drellar-shurupovyort' || currentCategory === 'balgarkalar-ushm' || currentCategory === 'perforator-otboynik' || currentCategory === 'payvandlash-svarka';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/shop?category=drellar-shurupovyort"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-500/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Wrench className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-blue-500'}`} />
                  <span>Drellar &amp; Balgarkalar</span>
                </Link>
              );
            })()}

            {/* 5. Gantellar & Shtangalar */}
            {(() => {
              const isActive = currentCategory === 'stoykalar' || currentCategory === 'gantellar';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/shop?category=gantellar"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md ring-2 ring-slate-950/20 dark:ring-white/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Dumbbell className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-400' : 'text-blue-500'}`} />
                  <span>Gantellar &amp; Shtangalar</span>
                </Link>
              );
            })()}

            {/* 6. Boks & Yakka Kurash */}
            {(() => {
              const isActive = currentCategory === 'boks-yakka-kurash';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/shop?category=boks-yakka-kurash"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md ring-2 ring-slate-950/20 dark:ring-white/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Trophy className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-amber-500'}`} />
                  <span>Boks &amp; Yakka Kurash</span>
                </Link>
              );
            })()}

            {/* 6. Ommabop */}
            {(() => {
              const isActive = currentTag === 'bestseller';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/shop?tag=bestseller"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md ring-2 ring-slate-950/20 dark:ring-white/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Star className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400 fill-amber-400/20' : 'text-purple-500 fill-purple-500/20'}`} />
                  <span>{t('nav.popular', 'Ommabop')}</span>
                </Link>
              );
            })()}

            {/* 7. Yetkazib berish va to'lov */}
            {(() => {
              const isActive = location.pathname === '/delivery';
              return (
                <Link
                  ref={isActive ? activeNavRef : null}
                  to="/delivery"
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md ring-2 ring-slate-950/20 dark:ring-white/30 font-black'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Truck className={`w-4 h-4 shrink-0 ${isActive ? 'text-sky-400' : 'text-sky-500'}`} />
                  <span>{t('nav.delivery', 'Yetkazib berish va to‘lov')}</span>
                </Link>
              );
            })()}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Drawer Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden flex" role="dialog" aria-modal="true">
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel sliding from left */}
          <div className="relative w-[85%] max-w-sm h-full bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white shadow-2xl flex flex-col z-10 overflow-hidden">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="h-10 px-2 rounded-xl bg-white border border-slate-200 dark:border-slate-800 text-slate-900 flex items-center justify-center shadow-2xs overflow-hidden shrink-0">
                  <img
                    src="/logo.png"
                    alt="WYUE SPORT OUTLET"
                    className="h-6 w-auto max-w-[85px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-black text-[15px] tracking-tight text-slate-950 dark:text-white uppercase font-sans">
                    SPORT OUTLET
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-extrabold -mt-0.5">
                    Sport &amp; Fitness Store
                  </div>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Admin Panel Demo Banner */}
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs shadow-md border border-slate-900 dark:border-white active:scale-98 transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 dark:bg-emerald-600 animate-pulse" />
                  <ShieldCheck className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  <span>Admin Panel (Demo)</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500/20 dark:bg-emerald-100 text-emerald-300 dark:text-emerald-800">
                  Kirish →
                </span>
              </Link>

              {/* Quick Settings: Theme & Language */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-3">
                {/* Theme switch */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Rejim / Тема:
                  </span>
                  <div className="h-8 inline-flex items-center p-0.5 rounded-lg bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() => isDark && toggleTheme()}
                      className={`h-full px-2.5 flex items-center gap-1.5 rounded-md text-xs cursor-pointer transition-all ${
                        !isDark
                          ? 'bg-white text-amber-600 font-black shadow-xs'
                          : 'text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" />
                      <span>Kun</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => !isDark && toggleTheme()}
                      className={`h-full px-2.5 flex items-center gap-1.5 rounded-md text-xs cursor-pointer transition-all ${
                        isDark
                          ? 'bg-slate-900 text-indigo-400 font-black shadow-xs'
                          : 'text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium'
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5" />
                      <span>Tun</span>
                    </button>
                  </div>
                </div>

                {/* Language switch */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Til / Язык:
                  </span>
                  <div className="h-8 inline-flex items-center p-0.5 rounded-lg bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    {['uz', 'ru', 'en'].map((l) => (
                      <button
                        key={l}
                        type="button"
                        onClick={() => setLang(l)}
                        className={`h-full px-2.5 flex items-center justify-center rounded-md text-xs uppercase cursor-pointer transition-all ${
                          lang === l
                            ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white font-black shadow-xs'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white font-semibold'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Catalog Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleCatalog();
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs border border-slate-200 dark:border-slate-800 transition-all cursor-pointer shadow-xs"
              >
                <span className="flex items-center gap-2.5">
                  <LayoutGrid className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span className="text-slate-900 dark:text-white">Katalog (Barcha toifalar)</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              {/* Category & Section Links */}
              <div className="space-y-1">
                <div className="px-1 text-[11px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-slate-500">
                  Bo‘limlar va toifalar
                </div>
                <div className="grid grid-cols-1 gap-1 pt-1">
                  <Link
                    to="/shop?tag=sale"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 bg-red-50/70 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/50"
                  >
                    <span className="flex items-center gap-2.5">
                      <Flame className="w-4 h-4" />
                      <span>{t('nav.deals', 'Aksiyalar va Chegirmalar')}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </Link>

                  <Link
                    to="/shop?tag=bestseller"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span>{t('nav.popular', 'Ommabop mahsulotlar')}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/shop?category=trenajorlar"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Activity className="w-4 h-4 text-emerald-500" />
                      <span>Trenajorlar &amp; Kardio (Sport)</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/shop?category=yol-konuslari"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-50/70 dark:bg-orange-950/20 border border-orange-200/80 dark:border-orange-900/50"
                  >
                    <span className="flex items-center gap-2.5">
                      <Cone className="w-4 h-4" />
                      <span>Yo‘l Xavfsizligi &amp; Konuslar</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                  </Link>

                  <Link
                    to="/shop?category=drellar-shurupovyort"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50"
                  >
                    <span className="flex items-center gap-2.5">
                      <Wrench className="w-4 h-4" />
                      <span>Drellar, Balgarkalar &amp; Uskunalar</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                  </Link>

                  <Link
                    to="/shop?category=gantellar"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Dumbbell className="w-4 h-4 text-amber-500" />
                      <span>Gantellar &amp; Shtangalar</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/shop?category=boks-yakka-kurash"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Trophy className="w-4 h-4 text-rose-500" />
                      <span>Boks &amp; Yakka Kurash (Tatami)</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/shop/sport-sumkalari"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Package className="w-4 h-4 text-purple-500" />
                      <span>{t('cat.sport-sumkalari', 'Sport Sumkalari & Ryukzaklar')}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/shop/boks-yakka-kurash"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-red-500" />
                      <span>{t('cat.boks-yakka-kurash', 'Boks & Yakka Kurash')}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/compare"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <GitCompare className="w-4 h-4 text-slate-500" />
                      <span>{t('header.compare', 'Mahsulotlarni taqqoslash')}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    to="/delivery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Truck className="w-4 h-4 text-slate-500" />
                      <span>{t('nav.delivery', 'Yetkazib berish va to‘lov')}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Contact & Store Info */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5 pb-6">
                <a
                  href="tel:+998951554500"
                  className="flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-850 flex items-center justify-center text-slate-700 dark:text-slate-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div>+998 (95) 155-45-00</div>
                    <div className="text-[10px] text-slate-500 font-normal">Har kuni 09:00 - 20:00</div>
                  </div>
                </a>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 pl-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Buxoro shahri, M.Iqbol ko‘chasi, 26-uy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
