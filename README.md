# Project_sport — SPORT OUTLET (Sport & Fitness Store Platform)

SPORT OUTLET — Sport anjomlari, trenajorlar, kardio uskunalar, gantel va shtangalar, tatami, boks va sport kiyimlari uchun to'liq funksional internet-do'kon va savdo platformasi.

## 🚀 Texnologiyalar (Tech Stack)

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons
- **Storefront & UI**:
  - Interaktiv rasm slayderi (1 soniyalik avto-aylanish hover effekti)
  - Zoom-in kattalashtirish (2.1x interaktiv lupa)
  - Qalinlik va o'lchamlar varianti (Variant selector)
  - Yopishqoq zamonaviy navigatsiya (Sticky Navbar)
  - Kun/Tun (Dark/Light mode) tizimi
- **Boshqaruv**: Admin Panel (`/admin`) va Telegram Mahsulot Boti
- **Baza & Saqlash**: Supabase PostgreSQL / MockData Service
- **Deploy**: Vercel (`vercel.json` tayyorlangan)

---

## 📦 Loyihani Ishga Tushirish (Local Development)

```bash
# 1. Frontend papkasiga o'tish
cd frontend

# 2. Bog'liqliklarni o'rnatish
npm install

# 3. Saytni yurgazish
npm run dev
```

Sayt brauzerda `http://localhost:3000` manzilida ochiladi.

---

## 🤖 Telegram Bot Orqali Mahsulot Qo'shish

```bash
# Botni yurgazish
node tools/telegram_product_bot.js
```

Telegramdan rasmlar va narxlarni yuborganingizda bot avtomatik ravishda yangi mahsulotni yaratadi, rasmlarni optimallashtiradi va saytga qo'shadi.

---

## 🌐 Vercel-ga Joylash (Deploy to Vercel)

1. GitHub omboringizni (`Project_sport`) [Vercel](https://vercel.com) bilan ulang.
2. Vercel barcha sozlamalarni `vercel.json` orqali avtomatik aniqlaydi va bir necha soniyada saytni jonli efirga chiqaradi.
