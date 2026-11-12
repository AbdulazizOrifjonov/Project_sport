const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Banner = require('../models/Banner');
const Order = require('../models/Order');
const Coupon = require('../models/Coupon');
const Review = require('../models/Review');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nsb_bukhara';

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB Connected for Seeding...');

  // Clear existing
  await User.deleteMany({});
  await Product.deleteMany({});
  await Category.deleteMany({});
  await Banner.deleteMany({});
  await Order.deleteMany({});
  await Coupon.deleteMany({});
  await Review.deleteMany({});

  console.log('Cleared existing collections.');

  // 1. Create Users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  const admin = await User.create({
    name: 'NSB Super Admin',
    email: 'admin@nsb.uz',
    password: adminPassword,
    role: 'superadmin',
    phone: '+998 90 123 45 67'
  });

  const customer = await User.create({
    name: 'Bekzod Karimov',
    email: 'mijoz@nsb.uz',
    password: userPassword,
    role: 'customer',
    phone: '+998 91 987 65 43',
    address: { city: 'Buxoro', street: 'Ibn Sino ko‘chasi, 12-uy' }
  });

  console.log('Created Users.');

  // 2. Create Categories
  const categoriesData = [
    { name: 'Apple & Gadgetlar', slug: 'apple', icon: 'Smartphone', order: 1 },
    { name: 'Kompyuter Texnikasi', slug: 'kompyuternaya-tehnika', icon: 'Laptop', order: 2 },
    { name: 'Kantselyariya tovarlari', slug: 'kanctovary', icon: 'FileText', order: 3 },
    { name: 'Orgtexnika & Printerlar', slug: 'orgtehnika', icon: 'Printer', order: 4 },
    { name: 'Ofis mebellari & Kreslolar', slug: 'ofisnaya-mebel', icon: 'Armchair', order: 5 },
    { name: 'Monitory va Proyektorlar', slug: 'monitory-i-proektory', icon: 'Tv', order: 6 },
    { name: 'Serverlar va Tarmoq', slug: 'servernoe-oborudovanie', icon: 'Server', order: 7 },
    { name: 'Xo‘jalik tovarlari', slug: 'hozyajstvennye-tovary', icon: 'Package', order: 8 }
  ];
  const categories = await Category.insertMany(categoriesData);
  console.log(`Created ${categories.length} Categories.`);

  // 3. Create 50+ Products with 100% verified working CDN images
  const productsData = [
    // ---------------- Apple & Gadgetlar ----------------
    {
      title: 'Apple MacBook Pro 16" M3 Max (36GB RAM, 1TB SSD, Space Black)',
      slug: 'apple-macbook-pro-16-m3-max',
      sku: 'MBP16-M3MAX-BLK',
      description: 'Apple kompaniyasining eng kuchli protsessoriga ega professional noutbuki. Dizaynerlar va dasturchilar uchun.',
      price: 42500000,
      oldPrice: 46000000,
      discountPercent: 8,
      category: 'Apple & Gadgetlar',
      categorySlug: 'apple',
      brand: 'Apple',
      stock: 7,
      rating: 5.0,
      reviewsCount: 32,
      isBestseller: true,
      isNewArrival: true,
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1000&auto=format&fit=crop&q=80'
      ],
      specifications: [
        { key: 'Ekran', value: '16.2" Liquid Retina XDR 120Hz' },
        { key: 'Protsessor', value: 'Apple M3 Max (14-core CPU, 30-core GPU)' },
        { key: 'Tezkor xotira', value: '36GB Unified Memory' },
        { key: 'Doimiy xotira', value: '1TB SSD' },
        { key: 'Rang', value: 'Space Black' }
      ]
    },
    {
      title: 'Apple MacBook Air 15" M3 (16GB RAM, 512GB SSD, Starlight)',
      slug: 'apple-macbook-air-15-m3-starlight',
      sku: 'MBA15-M3-STAR',
      description: 'Yupqa va yengil korpus, kuchli M3 chip va butun kun yetadigan batareya quvvati.',
      price: 21800000,
      oldPrice: 23500000,
      discountPercent: 7,
      category: 'Apple & Gadgetlar',
      categorySlug: 'apple',
      brand: 'Apple',
      stock: 12,
      rating: 4.9,
      reviewsCount: 19,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Ekran', value: '15.3" Liquid Retina Display' },
        { key: 'Protsessor', value: 'Apple M3' },
        { key: 'Xotira', value: '16GB RAM / 512GB SSD' }
      ]
    },
    {
      title: 'Apple MacBook Air 13" M2 (8GB RAM, 256GB SSD, Midnight)',
      slug: 'apple-macbook-air-13-m2-midnight',
      sku: 'MBA13-M2-MID',
      description: 'Ofis va o‘qish ishlari uchun ideal darajada ixcham va tezkor noutbuk.',
      price: 13400000,
      oldPrice: 14800000,
      discountPercent: 9,
      category: 'Apple & Gadgetlar',
      categorySlug: 'apple',
      brand: 'Apple',
      stock: 18,
      rating: 4.8,
      reviewsCount: 42,
      isWeeklyDeal: true,
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Ekran', value: '13.6" Liquid Retina' },
        { key: 'Protsessor', value: 'Apple M2' },
        { key: 'Xotira', value: '8GB / 256GB' }
      ]
    },
    {
      title: 'Apple iPad Pro 13" M4 Wi-Fi 256GB Space Black',
      slug: 'apple-ipad-pro-13-m4-wifi-256gb',
      sku: 'IPAD-PRO13-M4',
      description: 'Eng yangi Ultra Retina XDR OLED displeyli planshet va Apple M4 protsessori.',
      price: 16200000,
      oldPrice: 17500000,
      discountPercent: 7,
      category: 'Apple & Gadgetlar',
      categorySlug: 'apple',
      brand: 'Apple',
      stock: 9,
      rating: 5.0,
      reviewsCount: 23,
      isNewArrival: true,
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Ekran', value: '13" Tandem OLED Ultra Retina XDR' },
        { key: 'Chip', value: 'Apple M4' }
      ]
    },
    {
      title: 'Apple Magic Keyboard with Touch ID and Numeric Keypad',
      slug: 'apple-magic-keyboard-touchid-numeric',
      sku: 'MK-NUM-TOUCH',
      description: 'Barmoq izi skaneri (Touch ID) va to‘liq raqamlar paneli mavjud simsiz klaviatura.',
      price: 2600000,
      oldPrice: 2850000,
      discountPercent: 8,
      category: 'Apple & Gadgetlar',
      categorySlug: 'apple',
      brand: 'Apple',
      stock: 25,
      rating: 4.9,
      reviewsCount: 15,
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Ulanish', value: 'Bluetooth, Lightning/Type-C' },
        { key: 'Funksiya', value: 'Touch ID xavfsiz avtorizatsiya' }
      ]
    },
    {
      title: 'Apple Magic Mouse Wireless (Black Multi-Touch Surface)',
      slug: 'apple-magic-mouse-black-wireless',
      sku: 'MM-BLK-WIRELESS',
      description: 'Multi-Touch imo-ishoralarni qo‘llab-quvvatlovchi zamonaviy simsiz qora sichqoncha.',
      price: 1450000,
      oldPrice: 1650000,
      discountPercent: 12,
      category: 'Apple & Gadgetlar',
      categorySlug: 'apple',
      brand: 'Apple',
      stock: 30,
      rating: 4.8,
      reviewsCount: 27,
      images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Sensor', value: 'Lazerli yuqori aniqlik' },
        { key: 'Yuzasi', value: 'Multi-Touch imo-ishoralar' }
      ]
    },

    // ---------------- Kompyuter Texnikasi (Mishka, Klaviatura, Noutbuklar, PK) ----------------
    {
      title: 'Ergonomik simsiz sichqoncha Logitech MX Master 3S Wireless',
      slug: 'logitech-mx-master-3s-wireless',
      sku: 'LOGI-MX3S-GRY',
      description: 'Dasturchilar va ofis rahbarlari uchun eng qulay ergonomik simsiz sichqoncha (mishka).',
      price: 1650000,
      oldPrice: 1850000,
      discountPercent: 11,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Logitech',
      stock: 28,
      rating: 5.0,
      reviewsCount: 47,
      isBestseller: true,
      images: [
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1000&auto=format&fit=crop&q=80'
      ],
      specifications: [
        { key: 'Turi', value: 'Simsiz lazerli sichqoncha (Mishka)' },
        { key: 'Sensor', value: '8000 DPI Darkfield shishada ham ishlaydi' },
        { key: 'Skroll', value: 'MagSpeed elektromagnit sokin g‘ildirak' }
      ]
    },
    {
      title: 'Simsiz ofis sichqonchasi Logitech M220 Silent Wireless',
      slug: 'logitech-m220-silent-wireless-mouse',
      sku: 'LOGI-M220-BLK',
      description: 'Shovqinsiz tugmalarga ega (90% sokin) kundalik ofis sichqonchasi.',
      price: 195000,
      oldPrice: 230000,
      discountPercent: 15,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Logitech',
      stock: 85,
      rating: 4.8,
      reviewsCount: 64,
      isWeeklyDeal: true,
      images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Turi', value: 'Simsiz sokin sichqoncha (Mishka)' },
        { key: 'Batareya', value: '18 oygacha xizmat qiladi' }
      ]
    },
    {
      title: 'Simsiz vertikal ergonomik sichqoncha Delux M618C RGB',
      slug: 'delux-m618c-vertical-ergonomic-mouse',
      sku: 'DELUX-M618C',
      description: 'Qo‘l bilagini charchatmaydigan va tunnel sindromidan himoyalovchi vertikal sichqoncha.',
      price: 280000,
      oldPrice: 320000,
      discountPercent: 12,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Delux',
      stock: 40,
      rating: 4.9,
      reviewsCount: 31,
      images: ['https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Shakli', value: '57° vertikal ergonomik burchak' },
        { key: 'DPI', value: '1600 DPI 3 bosqichli' }
      ]
    },
    {
      title: 'Simsiz klaviatura va sichqoncha to‘plami Logitech MK295 Silent Combo',
      slug: 'logitech-mk295-silent-wireless-combo',
      sku: 'LOGI-MK295-BLK',
      description: 'SilentTouch texnologiyasi bilan 90% shovqinsiz klaviatura va simsiz sichqoncha to‘plami.',
      price: 480000,
      oldPrice: 550000,
      discountPercent: 12,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Logitech',
      stock: 65,
      rating: 4.9,
      reviewsCount: 58,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Komplekt', value: 'Simsiz klaviatura + Sichqoncha' },
        { key: 'Shovqin', value: 'SilentTouch sokin bosilish' }
      ]
    },
    {
      title: 'Mexanik RGB klaviatura Redragon K552 Kumara Blue Switches',
      slug: 'redragon-k552-kumara-rgb-mechanical',
      sku: 'REDRAGON-K552',
      description: 'Metall korpusli, bosilishi aniq va uzoq umrli mexanik kompyuter klaviaturasi.',
      price: 450000,
      oldPrice: 520000,
      discountPercent: 13,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Redragon',
      stock: 35,
      rating: 4.8,
      reviewsCount: 39,
      isNewArrival: true,
      images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Turi', value: 'Mexanik klaviatura' },
        { key: 'Svitchlar', value: 'Outemu Blue (50 million bosish)' }
      ]
    },
    {
      title: 'Katta ofis va o‘yin gilamchasi Razer Gigantus V2 Large (450x400 mm)',
      slug: 'razer-gigantus-v2-large-mousepad',
      sku: 'RZ-GIGANTUS-L',
      description: 'Sichqoncha yengil sirpanishi va klaviatura siljimasligi uchun maxsus to‘qimali gilamcha (kovrik).',
      price: 210000,
      oldPrice: 250000,
      discountPercent: 16,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Razer',
      stock: 50,
      rating: 4.9,
      reviewsCount: 22,
      images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'O‘lchami', value: '450 x 400 x 3 mm' },
        { key: 'Asosi', value: 'Sirpanmaydigan rezina taglik' }
      ]
    },
    {
      title: 'Noutbuk Lenovo ThinkPad E16 Gen 1 (Core i7-1355U, 16GB, 512GB SSD)',
      slug: 'lenovo-thinkpad-e16-gen1-core-i7',
      sku: 'THINKPAD-E16-I7',
      description: 'Harbiy standartlar bo‘yicha sinovdan o‘tgan mustahkam va ishonchli korporativ noutbuk.',
      price: 11200000,
      oldPrice: 12500000,
      discountPercent: 10,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Lenovo',
      stock: 14,
      rating: 4.9,
      reviewsCount: 28,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Ekran', value: '16.0" WUXGA IPS Antiglare' },
        { key: 'Protsessor', value: 'Intel Core i7-1355U 10-yadroli' },
        { key: 'Xotira', value: '16GB DDR4 / 512GB PCIe SSD' }
      ]
    },
    {
      title: 'Noutbuk ASUS ZenBook 14 OLED (Intel Core Ultra 7, 32GB RAM, 1TB SSD)',
      slug: 'asus-zenbook-14-oled-ultra7',
      sku: 'ZENBOOK-14-U7',
      description: 'Yuqori aniqlikdagi 3K OLED ekran va yangi avlod sun’iy intellekt AI protsessori.',
      price: 16900000,
      oldPrice: 18400000,
      discountPercent: 8,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'ASUS',
      stock: 8,
      rating: 5.0,
      reviewsCount: 16,
      images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Ekran', value: '14" 3K OLED 120Hz 100% DCI-P3' },
        { key: 'Protsessor', value: 'Intel Core Ultra 7 155H' },
        { key: 'Xotira', value: '32GB LPDDR5X / 1TB SSD' }
      ]
    },
    {
      title: 'Tizimli blok Dell OptiPlex 7010 Micro (Core i5-13500T, 16GB, 512GB SSD)',
      slug: 'dell-optiplex-7010-micro',
      sku: 'DELL-OPT-7010',
      description: 'Monitor orqasiga o‘rnatiladigan o‘ta ixcham va kuchli korporativ mini-PK.',
      price: 7900000,
      oldPrice: 8500000,
      discountPercent: 7,
      category: 'Kompyuter Texnikasi',
      categorySlug: 'kompyuternaya-tehnika',
      brand: 'Dell',
      stock: 15,
      rating: 4.9,
      reviewsCount: 12,
      images: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Hajm', value: 'Micro Form Factor (1 litr)' },
        { key: 'Protsessor', value: 'Intel Core i5-13500T' }
      ]
    },

    // ---------------- Kantselyariya tovarlari ----------------
    {
      title: 'Qog‘oz SvetoCopy Classic A4, 500 varaq, 80 g/m² (Pallet narxi)',
      slug: 'svetocopy-classic-a4-500-varaq',
      sku: 'PAP-A4-SVETO',
      description: 'Ofis texnikasi, lazerli va siyohli printerlar uchun eng ommabop va sifatli oq qog‘oz.',
      price: 43500,
      oldPrice: 48000,
      discountPercent: 9,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'SvetoCopy',
      stock: 3500,
      rating: 5.0,
      reviewsCount: 142,
      isBestseller: true,
      isWeeklyDeal: true,
      images: ['https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Format', value: 'A4 (210 x 297 mm)' },
        { key: 'Zichlik', value: '80 g/m²' },
        { key: 'Varaqlar soni', value: '500 varaq' },
        { key: 'Oqlik darajasi', value: '146% CIE' }
      ]
    },
    {
      title: 'Qog‘oz Double A Premium A4, 80 g/m², 500 varaq (Tailand)',
      slug: 'double-a-premium-a4-80g',
      sku: 'PAP-A4-DOUBLEA',
      description: 'Yuqori sifatli evkalipt tolasidan tayyorlangan benuqson oq silliq qog‘oz.',
      price: 56000,
      oldPrice: 62000,
      discountPercent: 10,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'Double A',
      stock: 1200,
      rating: 5.0,
      reviewsCount: 88,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Format', value: 'A4' },
        { key: 'Oqlik', value: '165% CIE' }
      ]
    },
    {
      title: 'Qog‘oz Ballet Premier A4, 80 g/m², 500 varaq yuqori oqlik',
      slug: 'ballet-premier-a4-80g',
      sku: 'PAP-A4-BALLET',
      description: 'Muhim hujjatlar va taqdimotlar chop etish uchun A sinfidagi premium qog‘oz.',
      price: 52000,
      oldPrice: 58000,
      discountPercent: 10,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'Ballet',
      stock: 850,
      rating: 4.9,
      reviewsCount: 46,
      images: ['https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Klass', value: 'Klass A' },
        { key: 'Oqlik', value: '162% CIE' }
      ]
    },
    {
      title: 'Deli kantselyariya to‘plami (Ruchkalar, korrektor, markerlar, qisqichlar)',
      slug: 'deli-kantselyariya-toplami-premium',
      sku: 'DELI-SET-01',
      description: 'Ofis xodimlari uchun 12 xil kerakli buyumdan iborat to‘liq kantselyariya to‘plami.',
      price: 185000,
      oldPrice: 220000,
      discountPercent: 16,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'Deli',
      stock: 150,
      rating: 4.9,
      reviewsCount: 65,
      isNewArrival: true,
      images: ['https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Komplekt', value: '12 dona predmet' },
        { key: 'Brend', value: 'Deli Official' }
      ]
    },
    {
      title: 'ErichKrause sharikli ruchkalar to‘plami (50 dona, ko‘k)',
      slug: 'erichkrause-sharikli-ruchkalar-50dona',
      sku: 'EK-PEN-BLUE50',
      description: 'Yumshoq yozuvchi, iz qoldirmaydigan va uzoq xizmat qiluvchi sifatli sharikli ruchkalar.',
      price: 125000,
      oldPrice: 145000,
      discountPercent: 14,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'ErichKrause',
      stock: 240,
      rating: 4.9,
      reviewsCount: 78,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Soni', value: '50 dona qutida' },
        { key: 'Rang', value: 'Ko‘k siyoh' }
      ]
    },
    {
      title: 'Shtapler Deli Heavy Duty 24/6 metall korpus (30 varaqgacha)',
      slug: 'stapler-deli-heavy-duty-24-6',
      sku: 'DELI-STP-02',
      description: 'Zanglamas po‘latdan ishlangan baquvvat shtapler va mexanizm.',
      price: 68000,
      oldPrice: 79000,
      discountPercent: 14,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'Deli',
      stock: 90,
      rating: 4.8,
      reviewsCount: 31,
      images: ['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Sig‘imi', value: '30 varaq qog‘oz' },
        { key: 'Skoba', value: '24/6, 26/6' }
      ]
    },
    {
      title: 'Papka-registrator Attache 75mm A4 (Qora marmar)',
      slug: 'papka-registrator-attache-75mm-black',
      sku: 'REG-ATT-75BLK',
      description: 'Arxiv hujjatlarini saqlash uchun metal burchakli mustahkam registrator.',
      price: 28000,
      oldPrice: 32000,
      discountPercent: 12,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'Attache',
      stock: 450,
      rating: 4.9,
      reviewsCount: 92,
      images: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Eni', value: '75 mm' },
        { key: 'Sig‘imi', value: '500 tagacha A4 varaq' }
      ]
    },
    {
      title: 'Shaffof fayllar to‘plami Deli A4 40 mkm (100 dona)',
      slug: 'shaffof-fayllar-deli-a4-100dona',
      sku: 'FILE-DELI-100',
      description: 'Yirtilmaydigan mustahkam teshikli polietilen fayllar.',
      price: 34000,
      oldPrice: 39000,
      discountPercent: 13,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'Deli',
      stock: 600,
      rating: 4.9,
      reviewsCount: 110,
      images: ['https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Qalinlik', value: '40 mkm' },
        { key: 'Soni', value: '100 dona' }
      ]
    },
    {
      title: 'Ejednevnik (Kundalik daftar) charm muqovali A5 datiratsiyasiz',
      slug: 'ejednevnik-charm-a5-datiratsiyasiz',
      sku: 'NOTE-A5-LEATH',
      description: 'Rahbarlar va ofis xodimlari uchun eslatma va rejalashtirish daftari.',
      price: 95000,
      oldPrice: 110000,
      discountPercent: 14,
      category: 'Kantselyariya tovarlari',
      categorySlug: 'kanctovary',
      brand: 'Attache',
      stock: 180,
      rating: 5.0,
      reviewsCount: 52,
      images: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Format', value: 'A5' },
        { key: 'Muqova', value: 'Ekologik yumshoq charm' }
      ]
    },

    // ---------------- Orgtexnika & Printerlar ----------------
    {
      title: 'Ko‘p funksiyali printer HP LaserJet Pro MFP M428fdw',
      slug: 'hp-laserjet-pro-mfp-m428fdw',
      sku: 'HP-M428FDW',
      description: 'Tezkor va tejamkor monoxrom MFP: chop etish, skanerlash, nusxalash va faks. Avtomatik ikki tomonlama bosma.',
      price: 6850000,
      oldPrice: 7400000,
      discountPercent: 7,
      category: 'Orgtexnika & Printerlar',
      categorySlug: 'orgtehnika',
      brand: 'HP',
      stock: 15,
      rating: 4.8,
      reviewsCount: 29,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Chop etish turi', value: 'Lazerli monoxrom' },
        { key: 'Tezlik', value: '38 bet/daqiqasiga' },
        { key: 'Dupleks (ikki tomonlama)', value: 'Mavjud' },
        { key: 'Ulanish', value: 'Wi-Fi, Ethernet, USB' }
      ]
    },
    {
      title: 'Rangli MFP Epson EcoTank L3250 Wi-Fi doimiy siyohli',
      slug: 'epson-ecotank-l3250-wifi',
      sku: 'EPSON-L3250',
      description: 'Doimiy siyoh idishiga (CISS) ega tejamkor rangli printer, skaner va nusxalagich.',
      price: 3450000,
      oldPrice: 3800000,
      discountPercent: 9,
      category: 'Orgtexnika & Printerlar',
      categorySlug: 'orgtehnika',
      brand: 'Epson',
      stock: 24,
      rating: 4.9,
      reviewsCount: 54,
      isBestseller: true,
      isWeeklyDeal: true,
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Rangli chop', value: '4 xil rangli doimiy siyoh' },
        { key: 'Resurs', value: 'Qutidagi siyoh 4500 qora / 7500 rangli varaqqa yetadi' }
      ]
    },
    {
      title: 'Monoxrom printer Canon i-SENSYS LBP223dw Wi-Fi ikki tomonlama',
      slug: 'canon-i-sensys-lbp223dw-wifi',
      sku: 'CANON-LBP223',
      description: 'Katta yuklamaga bardoshli, ishonchli va tezkor lazerli monoxrom ofis printeri.',
      price: 3950000,
      oldPrice: 4300000,
      discountPercent: 8,
      category: 'Orgtexnika & Printerlar',
      categorySlug: 'orgtehnika',
      brand: 'Canon',
      stock: 18,
      rating: 4.8,
      reviewsCount: 22,
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Tezlik', value: '33 bet/daqiqasiga' },
        { key: 'Ulanish', value: 'Wi-Fi, LAN, USB' }
      ]
    },
    {
      title: 'Katta formatli plotter HP DesignJet T650 36-in A0/A1',
      slug: 'hp-designjet-t650-36-in-plotter',
      sku: 'HP-T650-PLOT',
      description: 'Muhandislik chizmalari, arxitektura loyihalari va xaritalar uchun yuqori aniqlikdagi plotter.',
      price: 28500000,
      oldPrice: 31000000,
      discountPercent: 8,
      category: 'Orgtexnika & Printerlar',
      categorySlug: 'orgtehnika',
      brand: 'HP',
      stock: 3,
      rating: 5.0,
      reviewsCount: 8,
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Format', value: '36 dyuym (A0, A1, A2, A3, A4)' },
        { key: 'Tezlik', value: 'A1 format 25 soniyada' }
      ]
    },
    {
      title: 'Hujjat maydalagich (Shredder) Deli E9939 12 varaq CD/kartochka',
      slug: 'shredder-deli-e9939-12varaq',
      sku: 'DELI-SHRED-9939',
      description: 'Maxfiy hujjatlar, plastik kartochkalar va disklarni parchalovchi xavfsiz ofis shredderi.',
      price: 1650000,
      oldPrice: 1850000,
      discountPercent: 11,
      category: 'Orgtexnika & Printerlar',
      categorySlug: 'orgtehnika',
      brand: 'Deli',
      stock: 20,
      rating: 4.7,
      reviewsCount: 17,
      images: ['https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Bir martalik maydalash', value: '12 varaq' },
        { key: 'Xavfsizlik darajasi', value: 'P-4 mikro-kesish' }
      ]
    },
    {
      title: 'Laminator Deli A4 / A3 issiq va sovuq laminatsiya',
      slug: 'laminator-deli-a4-a3-pro',
      sku: 'DELI-LAM-A3',
      description: 'Hujjatlar, sertifikatlar va fotosuratlarni sifatli qoplash uchun harorat rostlagichli laminator.',
      price: 890000,
      oldPrice: 990000,
      discountPercent: 10,
      category: 'Orgtexnika & Printerlar',
      categorySlug: 'orgtehnika',
      brand: 'Deli',
      stock: 32,
      rating: 4.8,
      reviewsCount: 24,
      images: ['https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Format', value: 'A3 va A4 gacha' },
        { key: 'Plenka qalinligi', value: '75-250 mkm' }
      ]
    },

    // ---------------- Ofis mebellari & Kreslolar ----------------
    {
      title: 'Ergonomik ofis kreslosi NSB Executive Orthopedic Mesh Chair',
      slug: 'nsb-executive-orthopedic-mesh-chair',
      sku: 'CHR-NSB-ORTHO',
      description: 'Bel qismini qo‘llab-quvvatlovchi zamonaviy nafas oluvchi to‘rli kreslo.',
      price: 2450000,
      oldPrice: 2900000,
      discountPercent: 15,
      category: 'Ofis mebellari & Kreslolar',
      categorySlug: 'ofisnaya-mebel',
      brand: 'NSB Furniture',
      stock: 22,
      rating: 4.9,
      reviewsCount: 38,
      isWeeklyDeal: true,
      images: ['https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Material', value: 'Nafas oluvchi elastik Mesh' },
        { key: 'Mexanizm', value: 'Multiblok tebranish va qulflash' },
        { key: 'Maksimal yuklama', value: '150 kg gacha' }
      ]
    },
    {
      title: 'Rahbar kreslosi NSB Director Boss Genuine Leather Black',
      slug: 'nsb-director-boss-genuine-leather',
      sku: 'CHR-NSB-BOSS',
      description: 'Tabiiy charmdan ishlangan, xrom detallarga ega obro‘li rahbarlik kreslosi.',
      price: 4200000,
      oldPrice: 4800000,
      discountPercent: 12,
      category: 'Ofis mebellari & Kreslolar',
      categorySlug: 'ofisnaya-mebel',
      brand: 'NSB Furniture',
      stock: 10,
      rating: 5.0,
      reviewsCount: 19,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Material', value: '100% Tabiiy qora charm' },
        { key: 'Krestovina', value: 'Qalin mustahkam xrom' }
      ]
    },
    {
      title: 'Xodimlar uchun qulay kreslo NSB Staff Ergonomic Black',
      slug: 'nsb-staff-ergonomic-black',
      sku: 'CHR-NSB-STAFF',
      description: 'Uzoq vaqt kompyuter oldida o‘tirib ishlovchi xodimlar uchun yengil va mustahkam kreslo.',
      price: 1150000,
      oldPrice: 1300000,
      discountPercent: 11,
      category: 'Ofis mebellari & Kreslolar',
      categorySlug: 'ofisnaya-mebel',
      brand: 'NSB Furniture',
      stock: 45,
      rating: 4.8,
      reviewsCount: 62,
      images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Gazlift', value: 'Klass 3 xavfsiz gazlift' },
        { key: 'Yuklama', value: '120 kg gacha' }
      ]
    },
    {
      title: 'Konferensiya kreslosi NSB Visitor Chrome Black',
      slug: 'nsb-visitor-chrome-black-chair',
      sku: 'CHR-NSB-VISITOR',
      description: 'Muzokaralar va majlislar zali uchun xrom oyoqli qulay kreslo.',
      price: 650000,
      oldPrice: 750000,
      discountPercent: 13,
      category: 'Ofis mebellari & Kreslolar',
      categorySlug: 'ofisnaya-mebel',
      brand: 'NSB Furniture',
      stock: 60,
      rating: 4.7,
      reviewsCount: 34,
      images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Karkas', value: 'Yaxlit xromli po‘lat' }
      ]
    },
    {
      title: 'Zamonaviy ofis yozuv stoli NSB Loft Office Desk 140x70 sm metall karkas',
      slug: 'nsb-loft-office-desk-140x70',
      sku: 'DSK-NSB-LOFT',
      description: 'Qalin metall profil va tirnalishga chidamli LDSP stol yuzasi.',
      price: 1850000,
      oldPrice: 2100000,
      discountPercent: 12,
      category: 'Ofis mebellari & Kreslolar',
      categorySlug: 'ofisnaya-mebel',
      brand: 'NSB Furniture',
      stock: 26,
      rating: 4.9,
      reviewsCount: 27,
      images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'O‘lchami', value: '140 sm x 70 sm, balandligi 75 sm' },
        { key: 'Karkas', value: 'Qora kukunli bo‘yoqli metall' }
      ]
    },

    // ---------------- Monitory va Proyektorlar ----------------
    {
      title: 'Monitor 27" Dell UltraSharp U2724D 2K QHD IPS 120Hz',
      slug: 'dell-ultrasharp-u2724d-2k',
      sku: 'DELL-U2724D',
      description: 'Dizaynerlar va ofis ishlari uchun ajoyib ranglar aniqligiga ega 2K monitor.',
      price: 5200000,
      oldPrice: 5600000,
      discountPercent: 7,
      category: 'Monitory va Proyektorlar',
      categorySlug: 'monitory-i-proektory',
      brand: 'Dell',
      stock: 10,
      rating: 5.0,
      reviewsCount: 21,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Dioganal', value: '27 dyuym (68.5 sm)' },
        { key: 'Ruxsat', value: '2560 x 1440 QHD' },
        { key: 'Matritsa', value: 'IPS Black' }
      ]
    },
    {
      title: 'Monitor 24" Samsung Essential S3 IPS 75Hz Full HD',
      slug: 'samsung-essential-s3-24-ips',
      sku: 'SAM-S3-24IPS',
      description: 'Kundalik ofis ishlari va jadvallar bilan qulay ishlash uchun ko‘zni toliqtirmaydigan ekran.',
      price: 1750000,
      oldPrice: 1950000,
      discountPercent: 10,
      category: 'Monitory va Proyektorlar',
      categorySlug: 'monitory-i-proektory',
      brand: 'Samsung',
      stock: 35,
      rating: 4.8,
      reviewsCount: 47,
      images: ['https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Dioganal', value: '24 dyuym Full HD (1920x1080)' },
        { key: 'Chastota', value: '75 Hz Eye Saver Mode' }
      ]
    },
    {
      title: 'Taqdimot va majlislar uchun proyektor Epson EB-E01 3LCD 3300 Lumens',
      slug: 'epson-eb-e01-3lcd-proyektor',
      sku: 'EPSON-EB-E01',
      description: 'Yorug‘ xonalarda ham tiniq va yorqin tasvir uzatuvchi professional majlis proyektori.',
      price: 6100000,
      oldPrice: 6700000,
      discountPercent: 9,
      category: 'Monitory va Proyektorlar',
      categorySlug: 'monitory-i-proektory',
      brand: 'Epson',
      stock: 8,
      rating: 4.9,
      reviewsCount: 14,
      images: ['https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Yorug‘lik', value: '3300 ANSI Lumens' },
        { key: 'Texnologiya', value: '3LCD yorqin ranglar' }
      ]
    },

    // ---------------- Serverlar va Tarmoq ----------------
    {
      title: 'Server HPE ProLiant DL380 Gen10 Plus 2x Intel Xeon 64GB',
      slug: 'server-hpe-proliant-dl380-gen10-plus',
      sku: 'HPE-DL380-GEN10',
      description: 'Korxona va tashkilotlar infratuzilmasi uchun xavfsiz va quvvatli 2U server.',
      price: 89000000,
      oldPrice: 95000000,
      discountPercent: 6,
      category: 'Serverlar va Tarmoq',
      categorySlug: 'servernoe-oborudovanie',
      brand: 'HPE',
      stock: 3,
      rating: 5.0,
      reviewsCount: 8,
      images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Protsessor', value: '2x Intel Xeon Silver 4314' },
        { key: 'Xotira', value: '64GB RDIMM ECC DDR4' }
      ]
    },
    {
      title: 'Tarmoq kommutatori Cisco CBS350-24T-4G 24-Port Gigabit',
      slug: 'cisco-cbs350-24t-4g-switch',
      sku: 'CISCO-CBS350-24T',
      description: 'Katta tarmoqlar uchun 24 ta Gigabit port va 4 ta SFP optik portga ega boshqariladigan kommutator.',
      price: 8900000,
      oldPrice: 9800000,
      discountPercent: 9,
      category: 'Serverlar va Tarmoq',
      categorySlug: 'servernoe-oborudovanie',
      brand: 'Cisco',
      stock: 9,
      rating: 5.0,
      reviewsCount: 15,
      images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Portlar', value: '24 x 10/100/1000 Gigabit + 4 x SFP' }
      ]
    },
    {
      title: 'Uzluksiz quvvat manbai (UPS) APC Smart-UPS 1500VA LCD 230V',
      slug: 'apc-smart-ups-1500va-lcd',
      sku: 'APC-SMT1500I',
      description: 'Serverlar va tarmoq uskunalarini elektr tebranishlari va uzilishlaridan himoyalovchi ishonchli UPS.',
      price: 9800000,
      oldPrice: 10600000,
      discountPercent: 8,
      category: 'Serverlar va Tarmoq',
      categorySlug: 'servernoe-oborudovanie',
      brand: 'APC',
      stock: 12,
      rating: 4.9,
      reviewsCount: 19,
      images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Quvvati', value: '1500 VA / 1000 Watt' },
        { key: 'Chiqish to‘lqini', value: 'Toza sinus to‘lqini' }
      ]
    },

    // ---------------- Xo‘jalik tovarlari ----------------
    {
      title: 'Ofis oshxonasi uchun suv dispenseri (Kuler) Vatten V45NK',
      slug: 'kuler-vatten-v45nk-muzlatgichli',
      sku: 'WAT-V45NK',
      description: 'Pastki qismida mini-sovutgichga ega issiq, sovuq va xona haroratidagi suv beruvchi kuler.',
      price: 2100000,
      oldPrice: 2400000,
      discountPercent: 12,
      category: 'Xo‘jalik tovarlari',
      categorySlug: 'hozyajstvennye-tovary',
      brand: 'Vatten',
      stock: 16,
      rating: 4.8,
      reviewsCount: 31,
      images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Isitish', value: '90-95 °C gacha (5 l/soat)' },
        { key: 'Sovutish', value: 'Kompressorli 5-10 °C gacha' }
      ]
    },
    {
      title: 'Qahva mashinasi DeLonghi Magnifica S ECAM 22.110.B ofis uchun',
      slug: 'delonghi-magnifica-s-ecam-kofe-mashina',
      sku: 'DEL-MAG-S',
      description: 'Yangi yanchilgan donali qahvadan espresso va kapuchino tayyorlovchi italyan kofe mashinasi.',
      price: 7300000,
      oldPrice: 8100000,
      discountPercent: 10,
      category: 'Xo‘jalik tovarlari',
      categorySlug: 'hozyajstvennye-tovary',
      brand: 'DeLonghi',
      stock: 8,
      rating: 5.0,
      reviewsCount: 42,
      isBestseller: true,
      images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Bosim', value: '15 Bar professional pompa' }
      ]
    },
    {
      title: 'Professional tozalash vositalari to‘plami Grass Office Box',
      slug: 'grass-office-box-tozalash-vositalari',
      sku: 'GRASS-OFFICE-BOX',
      description: 'Ofis pollari, derazalar, mebel va sanitariya xonalari uchun 6 xil konsentrat vosita.',
      price: 260000,
      oldPrice: 310000,
      discountPercent: 16,
      category: 'Xo‘jalik tovarlari',
      categorySlug: 'hozyajstvennye-tovary',
      brand: 'Grass',
      stock: 95,
      rating: 4.9,
      reviewsCount: 53,
      isWeeklyDeal: true,
      images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Tarkibi', value: '6 xil vosita + mikrofibra sochiqlar' }
      ]
    },
    {
      title: 'Xiaomi Robot Vacuum S10 ofis pol tozalagich aqlli changyutgich',
      slug: 'xiaomi-robot-vacuum-s10-laser',
      sku: 'MI-ROBOT-S10',
      description: 'Lazerli navigatsiya (LDS) va 4000 Pa kuchli so‘rish quvvatiga ega robot-changyutgich.',
      price: 2850000,
      oldPrice: 3300000,
      discountPercent: 14,
      category: 'Xo‘jalik tovarlari',
      categorySlug: 'hozyajstvennye-tovary',
      brand: 'Xiaomi',
      stock: 18,
      rating: 4.9,
      reviewsCount: 29,
      images: ['https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80'],
      specifications: [
        { key: 'Navigatsiya', value: 'LDS Lazerli 360° xaritalash' },
        { key: 'Quvvati', value: '4000 Pa kuchli turbo so‘rish' }
      ]
    }
  ];

  const createdProducts = await Product.insertMany(productsData);
  console.log(`Successfully created ${createdProducts.length} rich products!`);

  // 4. Create Coupons
  await Coupon.create({
    code: 'NSB2026',
    discountPercent: 10,
    expiryDate: new Date('2026-12-31'),
    active: true
  });
  await Coupon.create({
    code: 'BUKHARA5',
    discountPercent: 5,
    expiryDate: new Date('2026-12-31'),
    active: true
  });
  console.log('Created Coupon codes.');

  // 5. Create Sample Orders
  const sampleOrder = await Order.create({
    orderNumber: 'NSB-100245',
    user: customer._id,
    customerDetails: {
      fullName: customer.name,
      phone: customer.phone,
      city: 'Buxoro',
      address: 'Ibn Sino ko‘chasi, 12-uy',
      notes: 'Ofis 3-qavat'
    },
    paymentMethod: 'click',
    paymentStatus: 'paid',
    orderStatus: 'delivered',
    items: [
      {
        product: createdProducts[0]._id,
        title: createdProducts[0].title,
        price: createdProducts[0].price,
        quantity: 1,
        image: createdProducts[0].images[0]
      },
      {
        product: createdProducts[6]._id,
        title: createdProducts[6].title,
        price: createdProducts[6].price,
        quantity: 10,
        image: createdProducts[6].images[0]
      }
    ],
    totalAmount: createdProducts[0].price + (createdProducts[6].price * 10)
  });

  console.log('Created sample Order:', sampleOrder.orderNumber);
  console.log('=== SEEDING COMPLETED SUCCESSFULLY ===');
  process.exit(0);
}

seed().catch(err => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
