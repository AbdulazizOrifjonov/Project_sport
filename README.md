# NEXT NOUT — Notebook Store Platform

NEXT NOUT (Buxoro) — Noutbuklar, kompyuterlar va zamonaviy IT texnikalar uchun to'liq funksional internet-do'kon va B2B savdo platformasi.

## 🚀 Texnologiyalar (Tech Stack)

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, Leaflet (Yandex Maps)
- **Ma'lumotlar bazasi**: Supabase PostgreSQL (Serverless Jamstack arxitekturasi)
- **Rasm ombori**: Supabase Storage (`product-images` bucket)
- **Hosting**: Vercel Edge Network
- **Admin Panel**: Boshqaruv paneli, mahsulotlar CRUD, toifalar, buyurtmalar, hisobotlar (CSV) va sotuvlar dinamikasi

---

## 📦 Loyihani Ishga Tushirish (Local Development)

```bash
# 1. Frontend papkasiga o'tish
cd frontend

# 2. Bog'liqliklarni o'rnatish
npm install

# 3. Loyihani dev serverda yurgazish
npm run dev
```

Sayt brauzerda `http://localhost:3000` manzilida ochiladi.

---

## 🗄️ Supabase Ma'lumotlar Bazasini Sozlash (1 Click Setup)

1. [Supabase](https://supabase.com) platformasida yangi loyiha oching.
2. Chap menyudan **SQL Editor** bo'limiga kiring.
3. Loyihadagi `supabase_setup.sql` fayli tarkibini nusxalab, SQL Editorga qo'ying va **RUN** tugmasini bosing.
   - Barcha jadvallar (`products`, `categories`, `orders`, `reviews`, `banners`, `coupons`) yaratiladi.
   - 45+ ta boy parametrli noutbuklar va orgtexnika mahsulotlari avtomatik yuklanadi.
   - `product-images` Storage ombori ochiladi.
4. `frontend/.env.example` faylidan nusxa olib `frontend/.env` yarating:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

---

## 🌐 Vercel-ga Joylash (Deploy to Vercel)

1. Loyihani GitHub-ga push qiling.
2. [Vercel](https://vercel.com) orqali ushbu repository-ni ulang.
3. Sozlamalarda:
   - **Root Directory**: `frontend`
4. **Environment Variables** ga quyidagilarni kiriting:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. **Deploy** tugmasini bosing!
