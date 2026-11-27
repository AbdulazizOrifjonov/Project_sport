import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('nsb_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Reconcile wishlist items with live Supabase products
  useEffect(() => {
    api
      .get('/products/featured')
      .then((res) => {
        if (res.data.success && Array.isArray(res.data.allProducts)) {
          const byId = new Map();
          const bySlug = new Map();
          for (const p of res.data.allProducts) {
            if (p._id) byId.set(p._id, p);
            if (p.id) byId.set(p.id, p);
            if (p.slug) bySlug.set(p.slug, p);
          }
          setWishlist((prev) => {
            if (!prev.length) return prev;
            return prev
              .map((item) => byId.get(item._id) || byId.get(item.id) || bySlug.get(item.slug))
              .filter(Boolean);
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    localStorage.setItem('nsb_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item._id === product._id);
      if (exists) {
        return prev.filter(item => item._id !== product._id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) => wishlist.some(item => item._id === productId);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
