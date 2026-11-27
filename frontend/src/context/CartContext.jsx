import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('nsb_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Reconcile cart items with live Supabase products (removes deleted/stale products & refreshes prices)
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
          setCartItems((prev) => {
            if (!prev.length) return prev;
            const synced = [];
            for (const item of prev) {
              const live = byId.get(item._id) || byId.get(item.id) || bySlug.get(item.slug);
              if (live) {
                synced.push({
                  ...live,
                  quantity: item.quantity || 1
                });
              }
            }
            return synced;
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    localStorage.setItem('nsb_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item._id === productId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item._id !== productId));
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
