import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// Storefront Components
import Header from './components/storefront/Header';
import Footer from './components/storefront/Footer';
import CategoryDrawer from './components/storefront/CategoryDrawer';
import MobileBottomNav from './components/storefront/MobileBottomNav';

// Storefront Pages
import HomePage from './pages/storefront/HomePage';
import CatalogPage from './pages/storefront/CatalogPage';
import ProductDetailPage from './pages/storefront/ProductDetailPage';
import CartPage from './pages/storefront/CartPage';
import CheckoutPage from './pages/storefront/CheckoutPage';
import WishlistPage from './pages/storefront/WishlistPage';
import ComparePage from './pages/storefront/ComparePage';
import AccountPage from './pages/storefront/AccountPage';
import DeliveryPage from './pages/storefront/DeliveryPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-white dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {!isAdminRoute && (
        <Header
          onToggleCatalog={() => setCatalogOpen((prev) => !prev)}
          isCatalogOpen={catalogOpen}
        />
      )}
      <CategoryDrawer isOpen={catalogOpen} onClose={() => setCatalogOpen(false)} />

      <main className="flex-1 w-full max-w-full min-w-0 bg-white dark:bg-black transition-colors duration-200 pb-16 md:pb-0">
        <Routes>
          {/* Storefront Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<CatalogPage />} />
          <Route path="/shop/:categorySlug" element={<CatalogPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/about" element={<DeliveryPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && (
        <MobileBottomNav
          onToggleCatalog={() => setCatalogOpen((prev) => !prev)}
          isCatalogOpen={catalogOpen}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <CompareProvider>
                  <AppContent />
                </CompareProvider>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}
