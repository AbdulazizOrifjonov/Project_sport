-- ==============================================================================
-- NEXT NOUT (NSB BUKHARA) — FULL SUPABASE DATABASE SCHEMA & SEED SCRIPT
-- Paste this script directly into Supabase SQL Editor and click RUN.
-- It creates all tables, enables RLS with permissive public access,
-- sets up the 'product-images' Storage bucket, and seeds all 45+ products,
-- categories, orders, reviews, and coupons.
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. CATEGORIES TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    icon TEXT DEFAULT 'Folder',
    description TEXT DEFAULT '',
    image TEXT DEFAULT '',
    parent_id TEXT DEFAULT NULL,
    display_order INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 2. PRODUCTS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    sku TEXT DEFAULT '',
    description TEXT DEFAULT '',
    price NUMERIC NOT NULL,
    old_price NUMERIC DEFAULT 0,
    discount_percent INT DEFAULT 0,
    category TEXT NOT NULL,
    category_slug TEXT NOT NULL,
    subcategory TEXT DEFAULT '',
    brand TEXT DEFAULT 'NSB',
    stock INT DEFAULT 10,
    in_stock BOOLEAN DEFAULT TRUE,
    rating NUMERIC DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    images JSONB DEFAULT '[]'::jsonb,
    is_bestseller BOOLEAN DEFAULT FALSE,
    is_new_arrival BOOLEAN DEFAULT FALSE,
    is_weekly_deal BOOLEAN DEFAULT FALSE,
    specifications JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 3. ORDERS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    order_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    city TEXT DEFAULT 'Buxoro',
    address TEXT NOT NULL,
    notes TEXT DEFAULT '',
    coordinates JSONB DEFAULT '{}'::jsonb,
    location_url TEXT DEFAULT '',
    items JSONB NOT NULL,
    total_amount NUMERIC NOT NULL,
    delivery_fee NUMERIC DEFAULT 0,
    payment_method TEXT DEFAULT 'cash',
    payment_status TEXT DEFAULT 'pending',
    order_status TEXT DEFAULT 'new',
    delivery_type TEXT DEFAULT 'standard',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 4. REVIEWS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.reviews (
    id TEXT PRIMARY KEY,
    product_id TEXT DEFAULT NULL,
    product_title TEXT DEFAULT '',
    user_name TEXT NOT NULL,
    user_email TEXT DEFAULT '',
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    verified_purchase BOOLEAN DEFAULT TRUE,
    status TEXT DEFAULT 'approved',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 5. BANNERS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.banners (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT DEFAULT '',
    badge TEXT DEFAULT '',
    image TEXT DEFAULT '',
    link TEXT DEFAULT '/shop',
    type TEXT DEFAULT 'hero',
    bg_color TEXT DEFAULT '#000000',
    text_color TEXT DEFAULT '#ffffff',
    display_order INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 6. COUPONS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.coupons (
    id TEXT PRIMARY KEY,
    code TEXT UNIQUE NOT NULL,
    discount_percent INT NOT NULL,
    expiry_date TIMESTAMPTZ,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Allow public reads on storefront data
CREATE POLICY "Public Categories Select" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public Products Select" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public Banners Select" ON public.banners FOR SELECT USING (true);
CREATE POLICY "Public Coupons Select" ON public.coupons FOR SELECT USING (true);
CREATE POLICY "Public Reviews Select" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Public Orders Select" ON public.orders FOR SELECT USING (true);

-- Allow public creation for orders and reviews
CREATE POLICY "Public Orders Insert" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Reviews Insert" ON public.reviews FOR INSERT WITH CHECK (true);

-- Allow full manage access for admin demo / management
CREATE POLICY "Admin All Products" ON public.products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Orders" ON public.orders FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Reviews" ON public.reviews FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Banners" ON public.banners FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Coupons" ON public.coupons FOR ALL USING (true) WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- STORAGE BUCKET: product-images
-- ------------------------------------------------------------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Storage RLS
CREATE POLICY "Public Storage Read" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');
CREATE POLICY "Public Storage Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'product-images');
CREATE POLICY "Public Storage Manage" ON storage.objects FOR ALL USING (bucket_id = 'product-images') WITH CHECK (bucket_id = 'product-images');

-- ------------------------------------------------------------------------------
-- SEED DATA INSERTION
-- ------------------------------------------------------------------------------

-- Insert Categories
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_apple', 'Apple & Gadgetlar', 'apple', 'Smartphone', 'Apple & Gadgetlar Buxoro bo''yicha kafolatli yetkazib berish', '', 1, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_kompyuternaya-tehnika', 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', 'Laptop', 'Kompyuter Texnikasi Buxoro bo''yicha kafolatli yetkazib berish', '', 2, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_kanctovary', 'Kantselyariya tovarlari', 'kanctovary', 'FileText', 'Kantselyariya tovarlari Buxoro bo''yicha kafolatli yetkazib berish', '', 3, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_orgtehnika', 'Orgtexnika & Printerlar', 'orgtehnika', 'Printer', 'Orgtexnika & Printerlar Buxoro bo''yicha kafolatli yetkazib berish', '', 4, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_ofisnaya-mebel', 'Ofis mebellari & Kreslolar', 'ofisnaya-mebel', 'Armchair', 'Ofis mebellari & Kreslolar Buxoro bo''yicha kafolatli yetkazib berish', '', 5, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_monitory-i-proektory', 'Monitory va Proyektorlar', 'monitory-i-proektory', 'Tv', 'Monitory va Proyektorlar Buxoro bo''yicha kafolatli yetkazib berish', '', 6, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_servernoe-oborudovanie', 'Serverlar va Tarmoq', 'servernoe-oborudovanie', 'Server', 'Serverlar va Tarmoq Buxoro bo''yicha kafolatli yetkazib berish', '', 7, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_hozyajstvennye-tovary', 'Xo‘jalik tovarlari', 'hozyajstvennye-tovary', 'Package', 'Xo‘jalik tovarlari Buxoro bo''yicha kafolatli yetkazib berish', '', 8, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;

-- Insert Products
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_apple-macbook-pro-16-m3-max', 'Apple MacBook Pro 16" M3 Max (36GB RAM, 1TB SSD, Space Black)', 'apple-macbook-pro-16-m3-max', 'MBP16-M3MAX-BLK', 'Apple kompaniyasining eng kuchli protsessoriga ega professional noutbuki. Dizaynerlar va dasturchilar uchun.', 42500000, 46000000, 8, 'Apple & Gadgetlar', 'apple', '', 'Apple', 7, TRUE, 5, 32, '["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1000&auto=format&fit=crop&q=80"]'::jsonb, TRUE, TRUE, FALSE, '[{"key":"Ekran","value":"16.2\" Liquid Retina XDR 120Hz"},{"key":"Protsessor","value":"Apple M3 Max (14-core CPU, 30-core GPU)"},{"key":"Tezkor xotira","value":"36GB Unified Memory"},{"key":"Doimiy xotira","value":"1TB SSD"},{"key":"Rang","value":"Space Black"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_apple-macbook-air-15-m3-starlight', 'Apple MacBook Air 15" M3 (16GB RAM, 512GB SSD, Starlight)', 'apple-macbook-air-15-m3-starlight', 'MBA15-M3-STAR', 'Yupqa va yengil korpus, kuchli M3 chip va butun kun yetadigan batareya quvvati.', 21800000, 23500000, 7, 'Apple & Gadgetlar', 'apple', '', 'Apple', 12, TRUE, 4.9, 19, '["https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Ekran","value":"15.3\" Liquid Retina Display"},{"key":"Protsessor","value":"Apple M3"},{"key":"Xotira","value":"16GB RAM / 512GB SSD"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_apple-macbook-air-13-m2-midnight', 'Apple MacBook Air 13" M2 (8GB RAM, 256GB SSD, Midnight)', 'apple-macbook-air-13-m2-midnight', 'MBA13-M2-MID', 'Ofis va o‘qish ishlari uchun ideal darajada ixcham va tezkor noutbuk.', 13400000, 14800000, 9, 'Apple & Gadgetlar', 'apple', '', 'Apple', 18, TRUE, 4.8, 42, '["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, TRUE, '[{"key":"Ekran","value":"13.6\" Liquid Retina"},{"key":"Protsessor","value":"Apple M2"},{"key":"Xotira","value":"8GB / 256GB"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_apple-ipad-pro-13-m4-wifi-256gb', 'Apple iPad Pro 13" M4 Wi-Fi 256GB Space Black', 'apple-ipad-pro-13-m4-wifi-256gb', 'IPAD-PRO13-M4', 'Eng yangi Ultra Retina XDR OLED displeyli planshet va Apple M4 protsessori.', 16200000, 17500000, 7, 'Apple & Gadgetlar', 'apple', '', 'Apple', 9, TRUE, 5, 23, '["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, TRUE, FALSE, '[{"key":"Ekran","value":"13\" Tandem OLED Ultra Retina XDR"},{"key":"Chip","value":"Apple M4"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_apple-magic-keyboard-touchid-numeric', 'Apple Magic Keyboard with Touch ID and Numeric Keypad', 'apple-magic-keyboard-touchid-numeric', 'MK-NUM-TOUCH', 'Barmoq izi skaneri (Touch ID) va to‘liq raqamlar paneli mavjud simsiz klaviatura.', 2600000, 2850000, 8, 'Apple & Gadgetlar', 'apple', '', 'Apple', 25, TRUE, 4.9, 15, '["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Ulanish","value":"Bluetooth, Lightning/Type-C"},{"key":"Funksiya","value":"Touch ID xavfsiz avtorizatsiya"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_apple-magic-mouse-black-wireless', 'Apple Magic Mouse Wireless (Black Multi-Touch Surface)', 'apple-magic-mouse-black-wireless', 'MM-BLK-WIRELESS', 'Multi-Touch imo-ishoralarni qo‘llab-quvvatlovchi zamonaviy simsiz qora sichqoncha.', 1450000, 1650000, 12, 'Apple & Gadgetlar', 'apple', '', 'Apple', 30, TRUE, 4.8, 27, '["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Sensor","value":"Lazerli yuqori aniqlik"},{"key":"Yuzasi","value":"Multi-Touch imo-ishoralar"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_logitech-mx-master-3s-wireless', 'Ergonomik simsiz sichqoncha Logitech MX Master 3S Wireless', 'logitech-mx-master-3s-wireless', 'LOGI-MX3S-GRY', 'Dasturchilar va ofis rahbarlari uchun eng qulay ergonomik simsiz sichqoncha (mishka).', 1650000, 1850000, 11, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Logitech', 28, TRUE, 5, 47, '["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=1000&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1000&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Turi","value":"Simsiz lazerli sichqoncha (Mishka)"},{"key":"Sensor","value":"8000 DPI Darkfield shishada ham ishlaydi"},{"key":"Skroll","value":"MagSpeed elektromagnit sokin g‘ildirak"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_logitech-m220-silent-wireless-mouse', 'Simsiz ofis sichqonchasi Logitech M220 Silent Wireless', 'logitech-m220-silent-wireless-mouse', 'LOGI-M220-BLK', 'Shovqinsiz tugmalarga ega (90% sokin) kundalik ofis sichqonchasi.', 195000, 230000, 15, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Logitech', 85, TRUE, 4.8, 64, '["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, TRUE, '[{"key":"Turi","value":"Simsiz sokin sichqoncha (Mishka)"},{"key":"Batareya","value":"18 oygacha xizmat qiladi"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_delux-m618c-vertical-ergonomic-mouse', 'Simsiz vertikal ergonomik sichqoncha Delux M618C RGB', 'delux-m618c-vertical-ergonomic-mouse', 'DELUX-M618C', 'Qo‘l bilagini charchatmaydigan va tunnel sindromidan himoyalovchi vertikal sichqoncha.', 280000, 320000, 12, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Delux', 40, TRUE, 4.9, 31, '["https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Shakli","value":"57° vertikal ergonomik burchak"},{"key":"DPI","value":"1600 DPI 3 bosqichli"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_logitech-mk295-silent-wireless-combo', 'Simsiz klaviatura va sichqoncha to‘plami Logitech MK295 Silent Combo', 'logitech-mk295-silent-wireless-combo', 'LOGI-MK295-BLK', 'SilentTouch texnologiyasi bilan 90% shovqinsiz klaviatura va simsiz sichqoncha to‘plami.', 480000, 550000, 12, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Logitech', 65, TRUE, 4.9, 58, '["https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Komplekt","value":"Simsiz klaviatura + Sichqoncha"},{"key":"Shovqin","value":"SilentTouch sokin bosilish"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_redragon-k552-kumara-rgb-mechanical', 'Mexanik RGB klaviatura Redragon K552 Kumara Blue Switches', 'redragon-k552-kumara-rgb-mechanical', 'REDRAGON-K552', 'Metall korpusli, bosilishi aniq va uzoq umrli mexanik kompyuter klaviaturasi.', 450000, 520000, 13, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Redragon', 35, TRUE, 4.8, 39, '["https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, TRUE, FALSE, '[{"key":"Turi","value":"Mexanik klaviatura"},{"key":"Svitchlar","value":"Outemu Blue (50 million bosish)"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_razer-gigantus-v2-large-mousepad', 'Katta ofis va o‘yin gilamchasi Razer Gigantus V2 Large (450x400 mm)', 'razer-gigantus-v2-large-mousepad', 'RZ-GIGANTUS-L', 'Sichqoncha yengil sirpanishi va klaviatura siljimasligi uchun maxsus to‘qimali gilamcha (kovrik).', 210000, 250000, 16, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Razer', 50, TRUE, 4.9, 22, '["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"O‘lchami","value":"450 x 400 x 3 mm"},{"key":"Asosi","value":"Sirpanmaydigan rezina taglik"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_lenovo-thinkpad-e16-gen1-core-i7', 'Noutbuk Lenovo ThinkPad E16 Gen 1 (Core i7-1355U, 16GB, 512GB SSD)', 'lenovo-thinkpad-e16-gen1-core-i7', 'THINKPAD-E16-I7', 'Harbiy standartlar bo‘yicha sinovdan o‘tgan mustahkam va ishonchli korporativ noutbuk.', 11200000, 12500000, 10, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Lenovo', 14, TRUE, 4.9, 28, '["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Ekran","value":"16.0\" WUXGA IPS Antiglare"},{"key":"Protsessor","value":"Intel Core i7-1355U 10-yadroli"},{"key":"Xotira","value":"16GB DDR4 / 512GB PCIe SSD"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_asus-zenbook-14-oled-ultra7', 'Noutbuk ASUS ZenBook 14 OLED (Intel Core Ultra 7, 32GB RAM, 1TB SSD)', 'asus-zenbook-14-oled-ultra7', 'ZENBOOK-14-U7', 'Yuqori aniqlikdagi 3K OLED ekran va yangi avlod sun’iy intellekt AI protsessori.', 16900000, 18400000, 8, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'ASUS', 8, TRUE, 5, 16, '["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Ekran","value":"14\" 3K OLED 120Hz 100% DCI-P3"},{"key":"Protsessor","value":"Intel Core Ultra 7 155H"},{"key":"Xotira","value":"32GB LPDDR5X / 1TB SSD"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_dell-optiplex-7010-micro', 'Tizimli blok Dell OptiPlex 7010 Micro (Core i5-13500T, 16GB, 512GB SSD)', 'dell-optiplex-7010-micro', 'DELL-OPT-7010', 'Monitor orqasiga o‘rnatiladigan o‘ta ixcham va kuchli korporativ mini-PK.', 7900000, 8500000, 7, 'Kompyuter Texnikasi', 'kompyuternaya-tehnika', '', 'Dell', 15, TRUE, 4.9, 12, '["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Hajm","value":"Micro Form Factor (1 litr)"},{"key":"Protsessor","value":"Intel Core i5-13500T"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_svetocopy-classic-a4-500-varaq', 'Qog‘oz SvetoCopy Classic A4, 500 varaq, 80 g/m² (Pallet narxi)', 'svetocopy-classic-a4-500-varaq', 'PAP-A4-SVETO', 'Ofis texnikasi, lazerli va siyohli printerlar uchun eng ommabop va sifatli oq qog‘oz.', 43500, 48000, 9, 'Kantselyariya tovarlari', 'kanctovary', '', 'SvetoCopy', 3500, TRUE, 5, 142, '["https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, TRUE, '[{"key":"Format","value":"A4 (210 x 297 mm)"},{"key":"Zichlik","value":"80 g/m²"},{"key":"Varaqlar soni","value":"500 varaq"},{"key":"Oqlik darajasi","value":"146% CIE"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_double-a-premium-a4-80g', 'Qog‘oz Double A Premium A4, 80 g/m², 500 varaq (Tailand)', 'double-a-premium-a4-80g', 'PAP-A4-DOUBLEA', 'Yuqori sifatli evkalipt tolasidan tayyorlangan benuqson oq silliq qog‘oz.', 56000, 62000, 10, 'Kantselyariya tovarlari', 'kanctovary', '', 'Double A', 1200, TRUE, 5, 88, '["https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Format","value":"A4"},{"key":"Oqlik","value":"165% CIE"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_ballet-premier-a4-80g', 'Qog‘oz Ballet Premier A4, 80 g/m², 500 varaq yuqori oqlik', 'ballet-premier-a4-80g', 'PAP-A4-BALLET', 'Muhim hujjatlar va taqdimotlar chop etish uchun A sinfidagi premium qog‘oz.', 52000, 58000, 10, 'Kantselyariya tovarlari', 'kanctovary', '', 'Ballet', 850, TRUE, 4.9, 46, '["https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Klass","value":"Klass A"},{"key":"Oqlik","value":"162% CIE"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_deli-kantselyariya-toplami-premium', 'Deli kantselyariya to‘plami (Ruchkalar, korrektor, markerlar, qisqichlar)', 'deli-kantselyariya-toplami-premium', 'DELI-SET-01', 'Ofis xodimlari uchun 12 xil kerakli buyumdan iborat to‘liq kantselyariya to‘plami.', 185000, 220000, 16, 'Kantselyariya tovarlari', 'kanctovary', '', 'Deli', 150, TRUE, 4.9, 65, '["https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, TRUE, FALSE, '[{"key":"Komplekt","value":"12 dona predmet"},{"key":"Brend","value":"Deli Official"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_erichkrause-sharikli-ruchkalar-50dona', 'ErichKrause sharikli ruchkalar to‘plami (50 dona, ko‘k)', 'erichkrause-sharikli-ruchkalar-50dona', 'EK-PEN-BLUE50', 'Yumshoq yozuvchi, iz qoldirmaydigan va uzoq xizmat qiluvchi sifatli sharikli ruchkalar.', 125000, 145000, 14, 'Kantselyariya tovarlari', 'kanctovary', '', 'ErichKrause', 240, TRUE, 4.9, 78, '["https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Soni","value":"50 dona qutida"},{"key":"Rang","value":"Ko‘k siyoh"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_stapler-deli-heavy-duty-24-6', 'Shtapler Deli Heavy Duty 24/6 metall korpus (30 varaqgacha)', 'stapler-deli-heavy-duty-24-6', 'DELI-STP-02', 'Zanglamas po‘latdan ishlangan baquvvat shtapler va mexanizm.', 68000, 79000, 14, 'Kantselyariya tovarlari', 'kanctovary', '', 'Deli', 90, TRUE, 4.8, 31, '["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Sig‘imi","value":"30 varaq qog‘oz"},{"key":"Skoba","value":"24/6, 26/6"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_papka-registrator-attache-75mm-black', 'Papka-registrator Attache 75mm A4 (Qora marmar)', 'papka-registrator-attache-75mm-black', 'REG-ATT-75BLK', 'Arxiv hujjatlarini saqlash uchun metal burchakli mustahkam registrator.', 28000, 32000, 12, 'Kantselyariya tovarlari', 'kanctovary', '', 'Attache', 450, TRUE, 4.9, 92, '["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Eni","value":"75 mm"},{"key":"Sig‘imi","value":"500 tagacha A4 varaq"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_shaffof-fayllar-deli-a4-100dona', 'Shaffof fayllar to‘plami Deli A4 40 mkm (100 dona)', 'shaffof-fayllar-deli-a4-100dona', 'FILE-DELI-100', 'Yirtilmaydigan mustahkam teshikli polietilen fayllar.', 34000, 39000, 13, 'Kantselyariya tovarlari', 'kanctovary', '', 'Deli', 600, TRUE, 4.9, 110, '["https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Qalinlik","value":"40 mkm"},{"key":"Soni","value":"100 dona"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_ejednevnik-charm-a5-datiratsiyasiz', 'Ejednevnik (Kundalik daftar) charm muqovali A5 datiratsiyasiz', 'ejednevnik-charm-a5-datiratsiyasiz', 'NOTE-A5-LEATH', 'Rahbarlar va ofis xodimlari uchun eslatma va rejalashtirish daftari.', 95000, 110000, 14, 'Kantselyariya tovarlari', 'kanctovary', '', 'Attache', 180, TRUE, 5, 52, '["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Format","value":"A5"},{"key":"Muqova","value":"Ekologik yumshoq charm"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_hp-laserjet-pro-mfp-m428fdw', 'Ko‘p funksiyali printer HP LaserJet Pro MFP M428fdw', 'hp-laserjet-pro-mfp-m428fdw', 'HP-M428FDW', 'Tezkor va tejamkor monoxrom MFP: chop etish, skanerlash, nusxalash va faks. Avtomatik ikki tomonlama bosma.', 6850000, 7400000, 7, 'Orgtexnika & Printerlar', 'orgtehnika', '', 'HP', 15, TRUE, 4.8, 29, '["https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Chop etish turi","value":"Lazerli monoxrom"},{"key":"Tezlik","value":"38 bet/daqiqasiga"},{"key":"Dupleks (ikki tomonlama)","value":"Mavjud"},{"key":"Ulanish","value":"Wi-Fi, Ethernet, USB"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_epson-ecotank-l3250-wifi', 'Rangli MFP Epson EcoTank L3250 Wi-Fi doimiy siyohli', 'epson-ecotank-l3250-wifi', 'EPSON-L3250', 'Doimiy siyoh idishiga (CISS) ega tejamkor rangli printer, skaner va nusxalagich.', 3450000, 3800000, 9, 'Orgtexnika & Printerlar', 'orgtehnika', '', 'Epson', 24, TRUE, 4.9, 54, '["https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, TRUE, '[{"key":"Rangli chop","value":"4 xil rangli doimiy siyoh"},{"key":"Resurs","value":"Qutidagi siyoh 4500 qora / 7500 rangli varaqqa yetadi"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_canon-i-sensys-lbp223dw-wifi', 'Monoxrom printer Canon i-SENSYS LBP223dw Wi-Fi ikki tomonlama', 'canon-i-sensys-lbp223dw-wifi', 'CANON-LBP223', 'Katta yuklamaga bardoshli, ishonchli va tezkor lazerli monoxrom ofis printeri.', 3950000, 4300000, 8, 'Orgtexnika & Printerlar', 'orgtehnika', '', 'Canon', 18, TRUE, 4.8, 22, '["https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Tezlik","value":"33 bet/daqiqasiga"},{"key":"Ulanish","value":"Wi-Fi, LAN, USB"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_hp-designjet-t650-36-in-plotter', 'Katta formatli plotter HP DesignJet T650 36-in A0/A1', 'hp-designjet-t650-36-in-plotter', 'HP-T650-PLOT', 'Muhandislik chizmalari, arxitektura loyihalari va xaritalar uchun yuqori aniqlikdagi plotter.', 28500000, 31000000, 8, 'Orgtexnika & Printerlar', 'orgtehnika', '', 'HP', 3, TRUE, 5, 8, '["https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Format","value":"36 dyuym (A0, A1, A2, A3, A4)"},{"key":"Tezlik","value":"A1 format 25 soniyada"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_shredder-deli-e9939-12varaq', 'Hujjat maydalagich (Shredder) Deli E9939 12 varaq CD/kartochka', 'shredder-deli-e9939-12varaq', 'DELI-SHRED-9939', 'Maxfiy hujjatlar, plastik kartochkalar va disklarni parchalovchi xavfsiz ofis shredderi.', 1650000, 1850000, 11, 'Orgtexnika & Printerlar', 'orgtehnika', '', 'Deli', 20, TRUE, 4.7, 17, '["https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Bir martalik maydalash","value":"12 varaq"},{"key":"Xavfsizlik darajasi","value":"P-4 mikro-kesish"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_laminator-deli-a4-a3-pro', 'Laminator Deli A4 / A3 issiq va sovuq laminatsiya', 'laminator-deli-a4-a3-pro', 'DELI-LAM-A3', 'Hujjatlar, sertifikatlar va fotosuratlarni sifatli qoplash uchun harorat rostlagichli laminator.', 890000, 990000, 10, 'Orgtexnika & Printerlar', 'orgtehnika', '', 'Deli', 32, TRUE, 4.8, 24, '["https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Format","value":"A3 va A4 gacha"},{"key":"Plenka qalinligi","value":"75-250 mkm"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_nsb-executive-orthopedic-mesh-chair', 'Ergonomik ofis kreslosi NSB Executive Orthopedic Mesh Chair', 'nsb-executive-orthopedic-mesh-chair', 'CHR-NSB-ORTHO', 'Bel qismini qo‘llab-quvvatlovchi zamonaviy nafas oluvchi to‘rli kreslo.', 2450000, 2900000, 15, 'Ofis mebellari & Kreslolar', 'ofisnaya-mebel', '', 'NSB Furniture', 22, TRUE, 4.9, 38, '["https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, TRUE, '[{"key":"Material","value":"Nafas oluvchi elastik Mesh"},{"key":"Mexanizm","value":"Multiblok tebranish va qulflash"},{"key":"Maksimal yuklama","value":"150 kg gacha"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_nsb-director-boss-genuine-leather', 'Rahbar kreslosi NSB Director Boss Genuine Leather Black', 'nsb-director-boss-genuine-leather', 'CHR-NSB-BOSS', 'Tabiiy charmdan ishlangan, xrom detallarga ega obro‘li rahbarlik kreslosi.', 4200000, 4800000, 12, 'Ofis mebellari & Kreslolar', 'ofisnaya-mebel', '', 'NSB Furniture', 10, TRUE, 5, 19, '["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Material","value":"100% Tabiiy qora charm"},{"key":"Krestovina","value":"Qalin mustahkam xrom"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_nsb-staff-ergonomic-black', 'Xodimlar uchun qulay kreslo NSB Staff Ergonomic Black', 'nsb-staff-ergonomic-black', 'CHR-NSB-STAFF', 'Uzoq vaqt kompyuter oldida o‘tirib ishlovchi xodimlar uchun yengil va mustahkam kreslo.', 1150000, 1300000, 11, 'Ofis mebellari & Kreslolar', 'ofisnaya-mebel', '', 'NSB Furniture', 45, TRUE, 4.8, 62, '["https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Gazlift","value":"Klass 3 xavfsiz gazlift"},{"key":"Yuklama","value":"120 kg gacha"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_nsb-visitor-chrome-black-chair', 'Konferensiya kreslosi NSB Visitor Chrome Black', 'nsb-visitor-chrome-black-chair', 'CHR-NSB-VISITOR', 'Muzokaralar va majlislar zali uchun xrom oyoqli qulay kreslo.', 650000, 750000, 13, 'Ofis mebellari & Kreslolar', 'ofisnaya-mebel', '', 'NSB Furniture', 60, TRUE, 4.7, 34, '["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Karkas","value":"Yaxlit xromli po‘lat"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_nsb-loft-office-desk-140x70', 'Zamonaviy ofis yozuv stoli NSB Loft Office Desk 140x70 sm metall karkas', 'nsb-loft-office-desk-140x70', 'DSK-NSB-LOFT', 'Qalin metall profil va tirnalishga chidamli LDSP stol yuzasi.', 1850000, 2100000, 12, 'Ofis mebellari & Kreslolar', 'ofisnaya-mebel', '', 'NSB Furniture', 26, TRUE, 4.9, 27, '["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"O‘lchami","value":"140 sm x 70 sm, balandligi 75 sm"},{"key":"Karkas","value":"Qora kukunli bo‘yoqli metall"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_dell-ultrasharp-u2724d-2k', 'Monitor 27" Dell UltraSharp U2724D 2K QHD IPS 120Hz', 'dell-ultrasharp-u2724d-2k', 'DELL-U2724D', 'Dizaynerlar va ofis ishlari uchun ajoyib ranglar aniqligiga ega 2K monitor.', 5200000, 5600000, 7, 'Monitory va Proyektorlar', 'monitory-i-proektory', '', 'Dell', 10, TRUE, 5, 21, '["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Dioganal","value":"27 dyuym (68.5 sm)"},{"key":"Ruxsat","value":"2560 x 1440 QHD"},{"key":"Matritsa","value":"IPS Black"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_samsung-essential-s3-24-ips', 'Monitor 24" Samsung Essential S3 IPS 75Hz Full HD', 'samsung-essential-s3-24-ips', 'SAM-S3-24IPS', 'Kundalik ofis ishlari va jadvallar bilan qulay ishlash uchun ko‘zni toliqtirmaydigan ekran.', 1750000, 1950000, 10, 'Monitory va Proyektorlar', 'monitory-i-proektory', '', 'Samsung', 35, TRUE, 4.8, 47, '["https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Dioganal","value":"24 dyuym Full HD (1920x1080)"},{"key":"Chastota","value":"75 Hz Eye Saver Mode"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_epson-eb-e01-3lcd-proyektor', 'Taqdimot va majlislar uchun proyektor Epson EB-E01 3LCD 3300 Lumens', 'epson-eb-e01-3lcd-proyektor', 'EPSON-EB-E01', 'Yorug‘ xonalarda ham tiniq va yorqin tasvir uzatuvchi professional majlis proyektori.', 6100000, 6700000, 9, 'Monitory va Proyektorlar', 'monitory-i-proektory', '', 'Epson', 8, TRUE, 4.9, 14, '["https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Yorug‘lik","value":"3300 ANSI Lumens"},{"key":"Texnologiya","value":"3LCD yorqin ranglar"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_server-hpe-proliant-dl380-gen10-plus', 'Server HPE ProLiant DL380 Gen10 Plus 2x Intel Xeon 64GB', 'server-hpe-proliant-dl380-gen10-plus', 'HPE-DL380-GEN10', 'Korxona va tashkilotlar infratuzilmasi uchun xavfsiz va quvvatli 2U server.', 89000000, 95000000, 6, 'Serverlar va Tarmoq', 'servernoe-oborudovanie', '', 'HPE', 3, TRUE, 5, 8, '["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Protsessor","value":"2x Intel Xeon Silver 4314"},{"key":"Xotira","value":"64GB RDIMM ECC DDR4"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_cisco-cbs350-24t-4g-switch', 'Tarmoq kommutatori Cisco CBS350-24T-4G 24-Port Gigabit', 'cisco-cbs350-24t-4g-switch', 'CISCO-CBS350-24T', 'Katta tarmoqlar uchun 24 ta Gigabit port va 4 ta SFP optik portga ega boshqariladigan kommutator.', 8900000, 9800000, 9, 'Serverlar va Tarmoq', 'servernoe-oborudovanie', '', 'Cisco', 9, TRUE, 5, 15, '["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Portlar","value":"24 x 10/100/1000 Gigabit + 4 x SFP"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_apc-smart-ups-1500va-lcd', 'Uzluksiz quvvat manbai (UPS) APC Smart-UPS 1500VA LCD 230V', 'apc-smart-ups-1500va-lcd', 'APC-SMT1500I', 'Serverlar va tarmoq uskunalarini elektr tebranishlari va uzilishlaridan himoyalovchi ishonchli UPS.', 9800000, 10600000, 8, 'Serverlar va Tarmoq', 'servernoe-oborudovanie', '', 'APC', 12, TRUE, 4.9, 19, '["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Quvvati","value":"1500 VA / 1000 Watt"},{"key":"Chiqish to‘lqini","value":"Toza sinus to‘lqini"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_kuler-vatten-v45nk-muzlatgichli', 'Ofis oshxonasi uchun suv dispenseri (Kuler) Vatten V45NK', 'kuler-vatten-v45nk-muzlatgichli', 'WAT-V45NK', 'Pastki qismida mini-sovutgichga ega issiq, sovuq va xona haroratidagi suv beruvchi kuler.', 2100000, 2400000, 12, 'Xo‘jalik tovarlari', 'hozyajstvennye-tovary', '', 'Vatten', 16, TRUE, 4.8, 31, '["https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Isitish","value":"90-95 °C gacha (5 l/soat)"},{"key":"Sovutish","value":"Kompressorli 5-10 °C gacha"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_delonghi-magnifica-s-ecam-kofe-mashina', 'Qahva mashinasi DeLonghi Magnifica S ECAM 22.110.B ofis uchun', 'delonghi-magnifica-s-ecam-kofe-mashina', 'DEL-MAG-S', 'Yangi yanchilgan donali qahvadan espresso va kapuchino tayyorlovchi italyan kofe mashinasi.', 7300000, 8100000, 10, 'Xo‘jalik tovarlari', 'hozyajstvennye-tovary', '', 'DeLonghi', 8, TRUE, 5, 42, '["https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80"]'::jsonb, TRUE, FALSE, FALSE, '[{"key":"Bosim","value":"15 Bar professional pompa"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_grass-office-box-tozalash-vositalari', 'Professional tozalash vositalari to‘plami Grass Office Box', 'grass-office-box-tozalash-vositalari', 'GRASS-OFFICE-BOX', 'Ofis pollari, derazalar, mebel va sanitariya xonalari uchun 6 xil konsentrat vosita.', 260000, 310000, 16, 'Xo‘jalik tovarlari', 'hozyajstvennye-tovary', '', 'Grass', 95, TRUE, 4.9, 53, '["https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, TRUE, '[{"key":"Tarkibi","value":"6 xil vosita + mikrofibra sochiqlar"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;
INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES ('prod_xiaomi-robot-vacuum-s10-laser', 'Xiaomi Robot Vacuum S10 ofis pol tozalagich aqlli changyutgich', 'xiaomi-robot-vacuum-s10-laser', 'MI-ROBOT-S10', 'Lazerli navigatsiya (LDS) va 4000 Pa kuchli so‘rish quvvatiga ega robot-changyutgich.', 2850000, 3300000, 14, 'Xo‘jalik tovarlari', 'hozyajstvennye-tovary', '', 'Xiaomi', 18, TRUE, 4.9, 29, '["https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80"]'::jsonb, FALSE, FALSE, FALSE, '[{"key":"Navigatsiya","value":"LDS Lazerli 360° xaritalash"},{"key":"Quvvati","value":"4000 Pa kuchli turbo so‘rish"}]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock, images = EXCLUDED.images;

-- Insert Banners
INSERT INTO public.banners (id, title, subtitle, badge, image, link, type, bg_color, text_color, display_order, active)
VALUES ('banner_1', 'Noutbuklar va Zamonaviy IT Texnikalar', 'Eng so‘nggi avlod Apple MacBook, ASUS, Lenovo, HP noutbuklari', 'NEXT NOUT — Yangi Avlod', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&auto=format&fit=crop&q=85', '/shop', 'hero', '#000000', '#ffffff', 1, TRUE)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, image = EXCLUDED.image;
INSERT INTO public.banners (id, title, subtitle, badge, image, link, type, bg_color, text_color, display_order, active)
VALUES ('banner_2', 'Apple MacBook Pro M3 & Server Texnikalari', 'Buxoro korxonalari va IT mutaxassislari uchun maxsus takliflar', 'Apple & IT Ishchi Stansiyalar', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1600&auto=format&fit=crop&q=85', '/shop?tag=bestseller', 'hero', '#0a0a0a', '#ffffff', 2, TRUE)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, image = EXCLUDED.image;

-- Insert Coupons
INSERT INTO public.coupons (id, code, discount_percent, expiry_date, active)
VALUES ('coupon_1', 'NSB2026', 10, '2026-12-31T23:59:59.000Z', TRUE)
ON CONFLICT (code) DO UPDATE SET discount_percent = EXCLUDED.discount_percent;
INSERT INTO public.coupons (id, code, discount_percent, expiry_date, active)
VALUES ('coupon_2', 'BUKHARA5', 5, '2026-12-31T23:59:59.000Z', TRUE)
ON CONFLICT (code) DO UPDATE SET discount_percent = EXCLUDED.discount_percent;

-- Insert Reviews
INSERT INTO public.reviews (id, product_id, product_title, user_name, user_email, rating, comment, verified_purchase, status)
VALUES ('rev_1', 'prod_apple-macbook-pro-16-m3-max', 'Apple MacBook Pro 16" M3 Max (36GB RAM, 1TB SSD, Space Black)', 'Aziz Raximov', 'aziz@bukhara.uz', 5, 'NSB orqali butun ofisimiz uchun noutbuklar va orgtexnika xarid qildik. Buyurtma 2 soat ichida yetib keldi, hisob-fakturalar Didox orqali tasdiqlandi. 100% ishonchli!', TRUE, 'approved')
ON CONFLICT (id) DO NOTHING;
INSERT INTO public.reviews (id, product_id, product_title, user_name, user_email, rating, comment, verified_purchase, status)
VALUES ('rev_2', 'prod_apple-macbook-air-15-m3-starlight', 'Apple MacBook Air 15" M3 (16GB RAM, 512GB SSD, Starlight)', 'Nodira Salimova', 'nodira@zarafshon.it', 5, 'Apple MacBook Pro stansiyalarini buyurtma qildik. Rasmiy kafolati bor, qadoqlari butun va toza. Buxoroda professional korporativ xizmat a’lo darajada.', TRUE, 'approved')
ON CONFLICT (id) DO NOTHING;
INSERT INTO public.reviews (id, product_id, product_title, user_name, user_email, rating, comment, verified_purchase, status)
VALUES ('rev_3', 'prod_lenovo-thinkpad-e16-gen1-core-i7', 'Noutbuk Lenovo ThinkPad E16 Gen 1 (Core i7-1355U, 16GB, 512GB SSD)', 'Jamshid Toirov', 'jamshid@neft.uz', 5, 'Ulgurji narxlar va to‘g‘ridan-to‘g‘ri shartnoma tuzish juda qulay. Barcha kantselyariya va ofis jihozlarini faqat shu yerdan xarid qilamiz.', TRUE, 'approved')
ON CONFLICT (id) DO NOTHING;

-- Insert Orders
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100240', 'NSB-100240', 'Bekzod Karimov', '+998 90 123 45 67', 'Buxoro', 'Mustaqillik ko‘chasi, 24-uy', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_apple-macbook-pro-16-m3-max","product_id":"prod_apple-macbook-pro-16-m3-max","title":"Apple MacBook Pro 16\" M3 Max (36GB RAM, 1TB SSD, Space Black)","price":42500000,"quantity":1,"image":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&auto=format&fit=crop&q=80"},{"product":"prod_apple-ipad-pro-13-m4-wifi-256gb","product_id":"prod_apple-ipad-pro-13-m4-wifi-256gb","title":"Apple iPad Pro 13\" M4 Wi-Fi 256GB Space Black","price":16200000,"quantity":1,"image":"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 58700000, 0, 'click', 'paid', 'delivered', 'standard', '2026-11-07T06:00:34.342Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100241', 'NSB-100241', 'Shahzod Aliyev', '+998 91 445 11 22', 'Buxoro', 'Ibn Sino ko‘chasi, 12-uy', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_apple-macbook-air-15-m3-starlight","product_id":"prod_apple-macbook-air-15-m3-starlight","title":"Apple MacBook Air 15\" M3 (16GB RAM, 512GB SSD, Starlight)","price":21800000,"quantity":2,"image":"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80"},{"product":"prod_apple-magic-keyboard-touchid-numeric","product_id":"prod_apple-magic-keyboard-touchid-numeric","title":"Apple Magic Keyboard with Touch ID and Numeric Keypad","price":2600000,"quantity":2,"image":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 48800000, 0, 'payme', 'pending', 'processing', 'standard', '2026-11-11T05:00:34.342Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100242', 'NSB-100242', 'Nodira Xoliqova', '+998 93 333 88 99', 'Kogon', 'Navoiy shoh ko‘chasi, 8-dom', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_apple-macbook-air-13-m2-midnight","product_id":"prod_apple-macbook-air-13-m2-midnight","title":"Apple MacBook Air 13\" M2 (8GB RAM, 256GB SSD, Midnight)","price":13400000,"quantity":3,"image":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80"},{"product":"prod_apple-magic-mouse-black-wireless","product_id":"prod_apple-magic-mouse-black-wireless","title":"Apple Magic Mouse Wireless (Black Multi-Touch Surface)","price":1450000,"quantity":1,"image":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 41650000, 0, 'cash', 'pending', 'new', 'standard', '2026-11-12T04:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100243', 'NSB-100243', '«Buxoro Qurilish Servis» MCHJ', '+998 97 700 20 20', 'Buxoro', 'Sanoat hududi, 5-bino', '12% QQS bilan shartnoma talab qilinadi', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_apple-ipad-pro-13-m4-wifi-256gb","product_id":"prod_apple-ipad-pro-13-m4-wifi-256gb","title":"Apple iPad Pro 13\" M4 Wi-Fi 256GB Space Black","price":16200000,"quantity":1,"image":"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80"},{"product":"prod_logitech-mx-master-3s-wireless","product_id":"prod_logitech-mx-master-3s-wireless","title":"Ergonomik simsiz sichqoncha Logitech MX Master 3S Wireless","price":1650000,"quantity":2,"image":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1000&auto=format&fit=crop&q=80"}]'::jsonb, 19500000, 0, 'bank_transfer', 'paid', 'delivered', 'standard', '2026-11-06T03:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100244', 'NSB-100244', 'Jasur Temirov', '+998 90 555 44 33', 'G‘ijduvon', 'Yusuf Hamadoniy ko‘chasi, 15', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_apple-magic-keyboard-touchid-numeric","product_id":"prod_apple-magic-keyboard-touchid-numeric","title":"Apple Magic Keyboard with Touch ID and Numeric Keypad","price":2600000,"quantity":2,"image":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80"},{"product":"prod_logitech-m220-silent-wireless-mouse","product_id":"prod_logitech-m220-silent-wireless-mouse","title":"Simsiz ofis sichqonchasi Logitech M220 Silent Wireless","price":195000,"quantity":1,"image":"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 5395000, 0, 'click', 'pending', 'shipped', 'standard', '2026-11-10T02:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100245', 'NSB-100245', 'Aziza Rahimova', '+998 99 812 34 56', 'Buxoro', 'Bahouddin Naqshband, 45', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_apple-magic-mouse-black-wireless","product_id":"prod_apple-magic-mouse-black-wireless","title":"Apple Magic Mouse Wireless (Black Multi-Touch Surface)","price":1450000,"quantity":3,"image":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80"},{"product":"prod_delux-m618c-vertical-ergonomic-mouse","product_id":"prod_delux-m618c-vertical-ergonomic-mouse","title":"Simsiz vertikal ergonomik sichqoncha Delux M618C RGB","price":280000,"quantity":2,"image":"https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 4910000, 0, 'payme', 'paid', 'delivered', 'standard', '2026-11-08T01:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100246', 'NSB-100246', '«Oasis Tech» IT Hub', '+998 95 155 45 00', 'Buxoro', 'Universitet ko‘chasi, 1-bino', '12% QQS bilan shartnoma talab qilinadi', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_logitech-mx-master-3s-wireless","product_id":"prod_logitech-mx-master-3s-wireless","title":"Ergonomik simsiz sichqoncha Logitech MX Master 3S Wireless","price":1650000,"quantity":1,"image":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1000&auto=format&fit=crop&q=80"},{"product":"prod_logitech-mk295-silent-wireless-combo","product_id":"prod_logitech-mk295-silent-wireless-combo","title":"Simsiz klaviatura va sichqoncha to‘plami Logitech MK295 Silent Combo","price":480000,"quantity":1,"image":"https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 2130000, 0, 'bank_transfer', 'paid', 'delivered', 'standard', '2026-11-09T00:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100247', 'NSB-100247', 'Farrux Saidov', '+998 94 222 10 30', 'Vobkent', 'Markaziy ko‘cha, 7', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_logitech-m220-silent-wireless-mouse","product_id":"prod_logitech-m220-silent-wireless-mouse","title":"Simsiz ofis sichqonchasi Logitech M220 Silent Wireless","price":195000,"quantity":2,"image":"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80"},{"product":"prod_redragon-k552-kumara-rgb-mechanical","product_id":"prod_redragon-k552-kumara-rgb-mechanical","title":"Mexanik RGB klaviatura Redragon K552 Kumara Blue Switches","price":450000,"quantity":2,"image":"https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 1290000, 0, 'cash', 'pending', 'new', 'standard', '2026-11-11T23:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100248', 'NSB-100248', 'Dilshod Normatov', '+998 91 999 00 11', 'Qorako‘l', 'Buyuk Ipak Yo‘li, 29', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_delux-m618c-vertical-ergonomic-mouse","product_id":"prod_delux-m618c-vertical-ergonomic-mouse","title":"Simsiz vertikal ergonomik sichqoncha Delux M618C RGB","price":280000,"quantity":3,"image":"https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop&q=80"},{"product":"prod_razer-gigantus-v2-large-mousepad","product_id":"prod_razer-gigantus-v2-large-mousepad","title":"Katta ofis va o‘yin gilamchasi Razer Gigantus V2 Large (450x400 mm)","price":210000,"quantity":1,"image":"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 1050000, 0, 'click', 'pending', 'processing', 'standard', '2026-11-10T22:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100249', 'NSB-100249', '«Zarafshon Agro» XK', '+998 93 456 78 90', 'Buxoro', 'Hamza ko‘chasi, 14', '12% QQS bilan shartnoma talab qilinadi', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_logitech-mk295-silent-wireless-combo","product_id":"prod_logitech-mk295-silent-wireless-combo","title":"Simsiz klaviatura va sichqoncha to‘plami Logitech MK295 Silent Combo","price":480000,"quantity":1,"image":"https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=600&auto=format&fit=crop&q=80"},{"product":"prod_lenovo-thinkpad-e16-gen1-core-i7","product_id":"prod_lenovo-thinkpad-e16-gen1-core-i7","title":"Noutbuk Lenovo ThinkPad E16 Gen 1 (Core i7-1355U, 16GB, 512GB SSD)","price":11200000,"quantity":2,"image":"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 22880000, 0, 'bank_transfer', 'paid', 'delivered', 'standard', '2026-11-04T21:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100250', 'NSB-100250', 'Malika Ergasheva', '+998 90 888 77 66', 'Kogon', 'Temiryo‘lchilar ko‘chasi, 3', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_redragon-k552-kumara-rgb-mechanical","product_id":"prod_redragon-k552-kumara-rgb-mechanical","title":"Mexanik RGB klaviatura Redragon K552 Kumara Blue Switches","price":450000,"quantity":2,"image":"https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80"},{"product":"prod_asus-zenbook-14-oled-ultra7","product_id":"prod_asus-zenbook-14-oled-ultra7","title":"Noutbuk ASUS ZenBook 14 OLED (Intel Core Ultra 7, 32GB RAM, 1TB SSD)","price":16900000,"quantity":1,"image":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 17800000, 0, 'cash', 'failed', 'cancelled', 'standard', '2026-11-08T20:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;
INSERT INTO public.orders (id, order_number, customer_name, customer_phone, city, address, notes, coordinates, location_url, items, total_amount, delivery_fee, payment_method, payment_status, order_status, delivery_type, created_at)
VALUES ('ord_100251', 'NSB-100251', 'Sherzod Po‘latov', '+998 97 123 98 76', 'Buxoro', 'Abu Ali Ibn Sino 88', 'Tezkor yetkazish', '{"lat":39.7681,"lon":64.4556}'::jsonb, 'https://yandex.uz/maps/?pt=64.4556,39.7681&z=15', '[{"product":"prod_razer-gigantus-v2-large-mousepad","product_id":"prod_razer-gigantus-v2-large-mousepad","title":"Katta ofis va o‘yin gilamchasi Razer Gigantus V2 Large (450x400 mm)","price":210000,"quantity":3,"image":"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80"},{"product":"prod_dell-optiplex-7010-micro","product_id":"prod_dell-optiplex-7010-micro","title":"Tizimli blok Dell OptiPlex 7010 Micro (Core i5-13500T, 16GB, 512GB SSD)","price":7900000,"quantity":2,"image":"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=80"}]'::jsonb, 16430000, 0, 'click', 'pending', 'new', 'standard', '2026-11-11T19:00:34.343Z')
ON CONFLICT (order_number) DO NOTHING;

-- ------------------------------------------------------------------------------
-- SPORT & FITNES: Gantel podstavka SC80263
-- ------------------------------------------------------------------------------
INSERT INTO public.categories (id, name, slug, icon, description, image, display_order, active)
VALUES ('cat_sport-fitnes', 'Sport va Fitnes', 'sport-fitnes', 'Activity', 'Sport va fitnes anjomlari Buxoro bo''yicha kafolatli yetkazib berish', '', 9, TRUE)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, description = EXCLUDED.description;

INSERT INTO public.products (id, title, slug, sku, description, price, old_price, discount_percent, category, category_slug, subcategory, brand, stock, in_stock, rating, reviews_count, images, is_bestseller, is_new_arrival, is_weekly_deal, specifications)
VALUES (
    'prod_gantel-podstavka-sc80263',
    'Gantel podstavka SC80263',
    'gantel-podstavka-sc80263',
    '0455763',
    'Gantel podstavka SC80263 (Kodi: 0455763, Narxi: 75$). Mustahkam po''lat konstruksiyaga ega professional gantel qo''yish stoykasi. A-shaklli qulay va ixcham dizayn.',
    960000,
    1100000,
    13,
    'Sport va Fitnes',
    'sport-fitnes',
    'Gantellar va Stoykalar',
    'Sport Line',
    15,
    TRUE,
    5.0,
    6,
    '["/uploads/gantel-podstavka-sc80263.png"]'::jsonb,
    TRUE,
    TRUE,
    TRUE,
    '[{"label": "Model", "value": "SC80263"}, {"label": "Mahsulot kodi", "value": "0455763"}, {"label": "Narxi (USD)", "value": "75$"}, {"label": "Material", "value": "Mustahkam qotishma po''lat"}, {"label": "Sig''imi", "value": "6 juft gantellar uchun"}, {"label": "Yetkazib berish", "value": "Buxoro bo''ylab bepul"}]'::jsonb
)
ON CONFLICT (slug) DO UPDATE SET price = EXCLUDED.price, images = EXCLUDED.images;
