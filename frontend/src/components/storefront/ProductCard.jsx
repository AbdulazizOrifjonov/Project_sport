import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Plus, Minus, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage } from '../../context/LanguageContext';
import ProductFeedbackModal from './ProductFeedbackModal';

export default function ProductCard({ product }) {
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

  const imageSrc =
    product.images && product.images[0] && product.images[0].trim() !== ''
      ? product.images[0]
      : fallbackImage;

  const categoryName = product.category || 'Kantselyariya';
  const categorySlug = product.categorySlug || 'kanctovary';

  return (
    <article className="group relative flex flex-col h-full min-w-0 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden">
      {/* 1. Top Image Area - To'liq va katta rasm */}
      <div className="relative w-full aspect-square bg-slate-50 dark:bg-[#0b0f19] overflow-hidden">
        {/* Chegirma foizi belgisi */}
        {product.discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-red-600 text-white tracking-wider shadow-sm pointer-events-none">
            -{product.discountPercent}%
          </span>
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

        {/* Mahsulot rasmi - Hoverda oldinga kattalashuvchi (Zoom-in) */}
        <Link
          to={`/product/${product.slug}`}
          className="relative block w-full h-full overflow-hidden"
        >
          <img
            src={imageSrc}
            alt={product.title}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 will-change-transform"
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
            to={`/product/${product.slug}`}
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

          <div className="text-[14px] sm:text-[15px] font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            {formatPrice(product.price)}
            <span className="text-[10px] font-normal text-slate-400 ml-1">{t('product.vat')}</span>
          </div>
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
