import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem('nsb_compare');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Reconcile compare items with live Supabase products
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
          setCompareList((prev) => {
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
    localStorage.setItem('nsb_compare', JSON.stringify(compareList));
  }, [compareList]);

  const toggleCompare = (product) => {
    setCompareList(prev => {
      const exists = prev.some(item => item._id === product._id);
      if (exists) {
        return prev.filter(item => item._id !== product._id);
      }
      if (prev.length >= 4) {
        alert('Taqqoslash uchun ko‘pi bilan 4 ta mahsulot tanlash mumkin');
        return prev;
      }
      return [...prev, product];
    });
  };

  const isInCompare = (productId) => compareList.some(item => item._id === productId);
  const clearCompare = () => setCompareList([]);

  return (
    <CompareContext.Provider value={{ compareList, toggleCompare, isInCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
