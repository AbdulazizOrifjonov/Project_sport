import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Package, MapPin, Phone, Mail, ShieldAlert } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

export default function AccountPage() {
  const { user, login, register, logout, isAdmin } = useAuth();

  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      api.get('/orders/my-orders')
        .then(res => {
          if (res.data.success) setOrders(res.data.orders);
        })
        .catch(() => {});
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLoginTab) {
        await login(email, password);
      } else {
        await register(name, email, password, phone);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Xatolik yuz berdi');
    }
  };

  const formatPrice = (n) => (n || 0).toLocaleString('ru-RU');

  if (user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 transition-colors duration-200">
        {/* Profile Header */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-[var(--color-primary-600)] dark:text-white flex items-center justify-center font-black text-2xl border border-rose-100 dark:border-rose-900 shadow-xs">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 dark:text-white">{user.name}</h1>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{user.email} {user.phone && `| ${user.phone}`}</div>
              {isAdmin && (
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[var(--color-primary-500)] text-white text-[10px] font-bold">
                  Administrator
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 text-white text-xs font-bold transition-all shadow-xs border border-slate-800 dark:border-slate-700"
              >
                Admin Panelga o‘tish
              </Link>
            )}
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-red-600 dark:text-red-400 text-xs font-bold transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" /> Chiqish
            </button>
          </div>
        </div>

        {/* Orders History */}
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-[var(--color-primary-500)]" />
            Buyurtmalar tarixi ({orders.length})
          </h2>

          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((o) => (
                <div key={o._id} className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">Buyurtma: </span>
                      <strong className="text-[var(--color-primary-600)] dark:text-white font-mono">{o.orderNumber}</strong>
                      <span className="text-slate-400 dark:text-slate-500 ml-3">
                        {new Date(o.createdAt).toLocaleDateString('uz-UZ')}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold capitalize ${
                      o.orderStatus === 'delivered' ? 'bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300' :
                      o.orderStatus === 'processing' ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300' :
                      'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                    }`}>
                      {o.orderStatus === 'delivered' ? 'Yetkazildi' : o.orderStatus === 'processing' ? 'Yetkazilmoqda' : 'Yangi'}
                    </span>
                  </div>

                  <div className="py-3 divide-y divide-slate-100 dark:divide-slate-800/80 text-xs">
                    {o.items.map((it, idx) => (
                      <div key={idx} className="py-2 flex justify-between items-center text-slate-700 dark:text-slate-300">
                        <span className="font-medium">{it.title} × {it.quantity}</span>
                        <span className="font-bold text-slate-900 dark:text-white font-mono">{formatPrice(it.price * it.quantity)} so'm</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-baseline text-xs">
                    <span className="text-slate-500 dark:text-slate-400">To‘lov: <strong className="uppercase text-slate-900 dark:text-white">{o.paymentMethod}</strong></span>
                    <span className="text-sm font-black text-slate-950 dark:text-white">Jami: {formatPrice(o.totalAmount)} so'm</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Hozircha buyurtmalar mavjud emas.
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 transition-colors duration-200">
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs transition-colors">
        {/* Toggle Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 text-sm font-bold">
          <button
            onClick={() => { setIsLoginTab(true); setError(''); }}
            className={`flex-1 pb-3 text-center transition-colors border-b-2 cursor-pointer ${
              isLoginTab ? 'border-[var(--color-primary-500)] text-[var(--color-primary-600)] dark:text-white' : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Kirish
          </button>
          <button
            onClick={() => { setIsLoginTab(false); setError(''); }}
            className={`flex-1 pb-3 text-center transition-colors border-b-2 cursor-pointer ${
              !isLoginTab ? 'border-[var(--color-primary-500)] text-[var(--color-primary-600)] dark:text-white' : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>

        {error && (
          <div className="p-3 mb-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-red-600 dark:text-red-400 text-xs font-semibold border border-rose-200 dark:border-rose-900">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {!isLoginTab && (
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Ismingiz *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jamshid Karimov"
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-slate-400 transition-all"
              />
            </div>
          )}

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Email manzilingiz *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.uz"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-slate-400 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Parol *</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-slate-400 transition-all"
            />
          </div>

          {!isLoginTab && (
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Telefon raqam</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 90 123 45 67"
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-slate-900 dark:focus:border-slate-400 transition-all font-mono"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 border border-slate-900 dark:border-white text-white font-extrabold text-sm transition-all shadow-xs cursor-pointer active:scale-95"
          >
            {isLoginTab ? 'Tizimga kirish' : 'Ro‘yxatdan o‘tish'}
          </button>

          {isLoginTab && (
            <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
              Admin hisob: <span className="font-mono text-slate-900 dark:text-white font-bold">admin@nsb.uz</span> / <span className="font-mono text-slate-900 dark:text-white font-bold">admin123</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
