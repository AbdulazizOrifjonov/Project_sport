import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Send, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-[1820px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* Col 1: About & Contacts */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex items-center justify-center shrink-0 bg-transparent border-none shadow-none">
                <img src="/wyue-logo-clean-dark.png?v=30" alt="WYUE" className="h-8 w-auto max-w-[110px] object-contain shadow-none border-none" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <span className="text-white text-lg font-black tracking-tight uppercase font-sans">WYUE</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 mb-4">
              {t('footer.desc')}
            </p>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href="tel:+998951554500"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                +998 (95) 155-45-00
              </a>
              <a
                href="https://t.me/nsb_bukhara"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400" />
                @nsb_bukhara
              </a>
              <a
                href="mailto:info@nsb.uz"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                info@nsb.uz
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400" />
                {t('footer.address')}
              </span>
            </div>
          </div>

          {/* Col 2: Catalog Links */}
          <div>
            <h6 className="text-white text-sm font-bold mb-3 tracking-wide">{t('footer.catalog')}</h6>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link to="/shop?category=yol-xavfsizligi" className="hover:text-white transition-colors">
                  Yo‘l Xavfsizligi &amp; Jihozlar
                </Link>
              </li>
              <li>
                <Link to="/shop?category=drellar-shurupovyortlar" className="hover:text-white transition-colors">
                  Drellar &amp; Shurupovyortlar
                </Link>
              </li>
              <li>
                <Link to="/shop?category=asboblar-to-plami" className="hover:text-white transition-colors">
                  Asboblar To‘plamlari (Naborlar)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=arralar-elektr-uskunalar" className="hover:text-white transition-colors">
                  Arralar &amp; Bog‘ Texnikasi
                </Link>
              </li>
              <li>
                <Link to="/shop?category=balgarka-shlifovka" className="hover:text-white transition-colors">
                  Balgarkalar &amp; Silliqlash
                </Link>
              </li>
              <li>
                <Link to="/shop?category=isitgichlar-iqlim" className="hover:text-white transition-colors">
                  Isitgichlar &amp; Texnik Fenlar
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors font-semibold text-slate-300">
                  {t('drawer.viewAll')} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h6 className="text-white text-sm font-bold mb-3 tracking-wide">{t('footer.company')}</h6>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link to="/delivery" className="hover:text-white transition-colors">
                  {t('nav.delivery')}
                </Link>
              </li>
              <li>
                <Link to="/delivery#b2b" className="hover:text-white transition-colors">
                  {t('nav.b2b')}
                </Link>
              </li>
              <li>
                <Link to="/delivery#warranty" className="hover:text-white transition-colors">
                  {t('trust.badge2Title')}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white transition-colors text-slate-500">
                  {t('topbar.admin')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Account & Payments */}
          <div>
            <h6 className="text-white text-sm font-bold mb-3 tracking-wide">{t('footer.customers')}</h6>
            <ul className="flex flex-col gap-2 text-xs mb-4">
              <li>
                <Link to="/account" className="hover:text-white transition-colors">
                  {t('header.login')}
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors">
                  {t('header.wishlist')}
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-white transition-colors">
                  {t('header.compare')}
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors font-semibold text-slate-300">
                  {t('header.cart')}
                </Link>
              </li>
            </ul>

            {/* Payment badges */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-2">
                {t('footer.payments')}
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] font-bold text-slate-300">
                  Click
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] font-bold text-slate-300">
                  Payme
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] font-bold text-slate-300">
                  Uzcard
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] font-bold text-slate-300">
                  Humo
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] font-bold text-emerald-400">
                  QQS 12%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 "WYUE" Do‘koni. {t('footer.rights')}</p>
          <p className="flex items-center gap-2">
            <span>{t('footer.inn')}: 308941258</span>
            <span>•</span>
            <span>{t('footer.vatRegistered')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
