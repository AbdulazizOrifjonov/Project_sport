import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Plus, Minus, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage } from '../../context/LanguageContext';
import ProductFeedbackModal from './ProductFeedbackModal';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, updateQuantity, cartItems } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { t } = useLanguage();

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(product.rating || 5.0);
  const [currentReviewsCount, setCurrentReviewsCount] = useState(product.reviewsCount || 0);

  const handleReviewSubmitted = (newRating, newCount) => {
    setCurrentRating(newRating);
    setCurrentReviewsCount(newCount);
  };

  const isFavorite = isInWishlist(product._id);
  const cartItem = cartItems.find((item) => item._id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const currencyLabel = t('product.currency', 'so‘m');
  const formatPrice = (num) => {
    return `${(num || 0).toLocaleString('ru-RU').replace(/,/g, ' ')} ${currencyLabel}`;
  };

  const fallbackImage =
    'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&auto=format&fit=crop&q=80';

  const validImages =
    product.images && Array.isArray(product.images)
      ? product.images.filter((img) => img && typeof img === 'string' && img.trim() !== '')
      : [];
  const images = validImages.length > 0 ? validImages : [fallbackImage];
  const hasMultipleImages = images.length > 1;

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const hasSwipedRef = useRef(false);

  // Next image
  const handleNextImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!hasMultipleImages) return;
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  // Prev image
  const handlePrevImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!hasMultipleImages) return;
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Mobile Touch Swipe Handlers (faqat gorizontal surish > 30px bo'lganda rasm almashadi, tap esa to'g'ri single pagega olib o'tadi)
  const handleTouchStart = (e) => {
    if (!hasMultipleImages) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    hasSwipedRef.current = false;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || !hasMultipleImages) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      hasSwipedRef.current = true;
      if (diffX < 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Ko'p rasmli mahsulotlar ustiga sichqoncha kelganda (hover) har 1 sekundda rasmlarni navbat bilan almashtirish
  useEffect(() => {
    if (!isHovered || !hasMultipleImages) return;

    const timer = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [isHovered, hasMultipleImages, images.length]);

  // Preload images for instant switching
  useEffect(() => {
    if (!hasMultipleImages) return;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [hasMultipleImages, images]);

  const currentImageSrc = images[activeImgIndex] || fallbackImage;
  const productUrl = `/product/${product.slug || product._id || product.id}`;
  const categoryName = product.category || 'Sport Anjomlari';
  const categorySlug = product.categorySlug || 'trenajorlar';

  return (
    <article
      onClick={(e) => {
        if (e.target.closest('button') || e.target.closest('a')) return;
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        navigate(productUrl);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImgIndex(0);
      }}
      className="group relative flex flex-col h-full min-w-0 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden cursor-pointer"
    >
      {/* 1. Top Image Area - To'liq va katta rasm */}
      <div
        className="relative w-full aspect-square bg-slate-50 dark:bg-[#0b0f19] overflow-hidden select-none cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Chegirma foizi belgisi */}
        {product.discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-red-600 text-white tracking-wider shadow-sm pointer-events-none">
            -{product.discountPercent}%
          </span>
        )}

        {/* Rasmlar soni nishoni - joriy rasm indeksini ko'rsatadi (masalan: 📷 1 / 7) */}
        {hasMultipleImages && (
          <span className="absolute bottom-2.5 left-2.5 z-10 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/75 backdrop-blur-xs text-white shadow-xs pointer-events-none flex items-center gap-1 transition-all">
            <span>📷</span> {activeImgIndex > 0 || isHovered ? `${activeImgIndex + 1} / ${images.length}` : `${images.length} ta rasm`}
          </span>
        )}

        {/* Oldinga / Orqaga o'tish strelkalari (Desktop hoverda yoki telefonda) */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 active:scale-90 shadow-md cursor-pointer"
              aria-label="Oldingi rasm"
              title="Oldingi rasm"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 active:scale-90 shadow-md cursor-pointer"
              aria-label="Keyingi rasm"
              title="Keyingi rasm"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </>
        )}

        {/* Ko'p rasmli mahsulotlar uchun indikator chiziqchalar / nuqtalar */}
        {hasMultipleImages && (
          <div
            className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1 transition-opacity duration-300"
          >
            {images.slice(0, 7).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImgIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeImgIndex
                    ? 'w-4 bg-white shadow-md'
                    : 'w-1.5 bg-white/50 hover:bg-white/80 backdrop-blur-xs'
                }`}
                title={`Rasm ${idx + 1}`}
              />
            ))}
            {images.length > 7 && (
              <span className="text-[9px] font-black text-white drop-shadow-sm ml-0.5">+{images.length - 7}</span>
            )}
          </div>
        )}

        {/* Sevimlilar (Wishlist) tugmasi */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs ${
            isFavorite
              ? 'text-red-500 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40'
              : 'text-slate-400 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-label={t('product.toWishlist')}
          title={t('product.toWishlist')}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Mahsulot rasmi - Bosilganda to'g'ridan-to'g'ri Single Page ochiladi */}
        <Link
          to={productUrl}
          onClick={(e) => {
            if (hasSwipedRef.current) {
              e.preventDefault();
              hasSwipedRef.current = false;
            }
          }}
          className="relative block w-full h-full overflow-hidden cursor-pointer"
        >
          <img
            src={currentImageSrc}
            alt={product.title}
            draggable={false}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
            className="w-full h-full object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
          />
        </Link>
      </div>

      {/* 2. Mahsulot ma'lumotlari qismi */}
      <div className="flex flex-col flex-1 p-3 sm:p-3.5 bg-white dark:bg-[#0a0a0c] transition-colors duration-200">
        {/* Kategoriya */}
        <div className="mb-1">
          <Link
            to={`/shop/${categorySlug}`}
            className="truncate block text-[11px] text-slate-400 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {categoryName}
          </Link>
        </div>

        {/* Mahsulot nomi */}
        <h3 className="text-[13px] leading-snug mb-2 font-medium line-clamp-2 h-[2.6em] text-slate-900 dark:text-slate-100">
          <Link
            to={productUrl}
            className="hover:text-slate-900 dark:hover:text-white transition-colors line-clamp-2"
          >
            {product.title}
          </Link>
        </h3>

        {/* Narx va Baholash (⭐⭐⭐⭐⭐) qismi */}
        <div className="mt-auto pt-2">
          {/* Yuqori qator: Eski narx (yoki Mavjudlik holati) VA ⭐⭐⭐⭐⭐ Baholash tugmasi */}
          <div className="flex items-center justify-between gap-1 mb-1">
            {product.oldPrice > product.price ? (
              <span className="text-[11px] text-slate-400 dark:text-slate-500 line-through block leading-tight">
                {formatPrice(product.oldPrice)}
              </span>
            ) : (
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                {t('product.inStock', 'Mavjud')}
              </span>
            )}

            {/* ⭐⭐⭐⭐⭐ Baholash va Sharh qoldirish tugmasi */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowFeedbackModal(true);
              }}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded-md hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-transparent hover:border-amber-200 dark:hover:border-amber-800/80 transition-all cursor-pointer group/rate"
              title="Mahsulotni baholash va fikr bildirish"
            >
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 ${
                      star <= Math.round(currentRating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] font-extrabold text-slate-700 dark:text-slate-200">
                {Number(currentRating).toFixed(1)}
              </span>
              <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                ({currentReviewsCount})
              </span>
            </button>
          </div>

          <div className="flex items-baseline gap-1 text-[14px] sm:text-[15px] font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            <span>{formatPrice(product.price)}</span>
            {product.variants && product.variants.length > 0 && (
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">dan</span>
            )}
            <span className="text-[10px] font-normal text-slate-400 ml-auto">{t('product.vat')}</span>
          </div>
          {product.variants && product.variants.length > 0 && (
            <div className="mt-1 flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {product.variants.length} xil qalinlik
              </span>
            </div>
          )}
        </div>

        {/* 3. Pastdagi uzun savatcha tugmasi va - 1 + boshqaruvi */}
        <div className="mt-2.5">
          {quantity > 0 ? (
            /* Bitta bosilgandan keyin chiqadigan - {quantity} + boshqaruvi */
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="w-full h-9 flex items-center justify-between rounded-xl border-2 border-slate-900 dark:border-white bg-slate-100 dark:bg-slate-900 p-0.5 shadow-xs"
            >
              {/* Kamaytirish tugmasi (-) */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  updateQuantity(product._id, quantity - 1);
                }}
                className="w-8 h-full flex items-center justify-center rounded-lg bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 transition-all cursor-pointer shadow-xs active:scale-90 font-bold"
                aria-label="Kamaytirish"
                title="Kamaytirish"
              >
                <Minus className="w-3.5 h-3.5 text-white dark:text-slate-950 stroke-[2.5]" />
              </button>

              {/* Miqdor ko'rsatkichi (1, 2, 3...) */}
              <span className="font-black text-xs text-slate-950 dark:text-white select-none px-2">
                {quantity}
              </span>

              {/* Ko'paytirish tugmasi (+) */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  updateQuantity(product._id, quantity + 1);
                }}
                className="w-8 h-full flex items-center justify-center rounded-lg bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 transition-all cursor-pointer shadow-xs active:scale-90 font-bold"
                aria-label="Ko'paytirish"
                title="Ko'paytirish"
              >
                <Plus className="w-3.5 h-3.5 text-white dark:text-slate-950 stroke-[2.5]" />
              </button>
            </div>
          ) : (
            /* Dastlabki uzun savatchaga qo'shish tugmasi */
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product, 1);
              }}
              className="w-full h-9 flex items-center justify-center gap-2 rounded-xl bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 border border-slate-900 dark:border-white font-extrabold text-xs transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98]"
              aria-label={t('product.addToCart')}
            >
              <ShoppingCart className="w-4 h-4 text-white dark:text-slate-950" />
              <span className="text-white dark:text-slate-950 font-extrabold">{t('product.addToCart', 'Savatga')}</span>
            </button>
          )}
        </div>
      </div>

      {/* ⭐⭐⭐⭐⭐ Baholash va Sharh Modali */}
      <ProductFeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        product={product}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </article>
  );
}
