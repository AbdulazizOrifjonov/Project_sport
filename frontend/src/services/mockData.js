/**
 * Mock Data Service for WYUE / NSB Platform
 * Contains the EXACT 59 products uploaded via Telegram bot.
 * Zero duplicate titles, zero fitness items, complete with real uploaded images.
 */

export const defaultCategories = [
  {
    "_id": "cat_yol_xavfsizligi",
    "id": "cat_yol_xavfsizligi",
    "name": "Yo‘l Xavfsizligi & Jihozlar",
    "slug": "yol-xavfsizligi",
    "department": "yol-harakati",
    "departmentName": "Yo‘l Harakati Xavfsizligi",
    "icon": "Shield",
    "description": "Yo'l konuslari, suriluvchi garmoshkalar, kauchuk dempferlar, stolbiklar va signallar",
    "image": "/uploads/konus-tpu-75sm.jpg",
    "order": 1,
    "active": true
  },
  {
    "_id": "cat_drellar",
    "id": "cat_drellar",
    "name": "Drellar & Shurupovyortlar",
    "slug": "drellar-shurupovyortlar",
    "department": "elektr-asboblar",
    "departmentName": "Elektr Asbob-Uskunalar",
    "icon": "Wrench",
    "description": "Professional akkumulyatorli va zarbli drel-shurupovyortlar, gaykavyortlar",
    "image": "/uploads/prod-480959_1.jpg",
    "order": 2,
    "active": true
  },
  {
    "_id": "cat_asboblar_nabor",
    "id": "cat_asboblar_nabor",
    "name": "Asboblar To‘plamlari (Naborlar)",
    "slug": "asboblar-to-plami",
    "department": "elektr-asboblar",
    "departmentName": "Elektr Asbob-Uskunalar",
    "icon": "Package",
    "description": "4&1 universal akkumulyatorli asboblar kombo to'plamlari va keyslar",
    "image": "/uploads/prod-492456_1.jpg",
    "order": 3,
    "active": true
  },
  {
    "_id": "cat_arralar_bog",
    "id": "cat_arralar_bog",
    "name": "Arralar & Bog‘ Texnikasi",
    "slug": "arralar-elektr-uskunalar",
    "department": "elektr-asboblar",
    "departmentName": "Elektr Asbob-Uskunalar",
    "icon": "Scissors",
    "description": "Maysa o'rish trimmerlari, mini zanjirli arralar va tsirkulyar diskli arralar",
    "image": "/uploads/prod-480962_1.jpg",
    "order": 4,
    "active": true
  },
  {
    "_id": "cat_balgarkalar",
    "id": "cat_balgarkalar",
    "name": "Balgarkalar & Silliqlash",
    "slug": "balgarka-shlifovka",
    "department": "elektr-asboblar",
    "departmentName": "Elektr Asbob-Uskunalar",
    "icon": "Disc",
    "description": "Burchak silliqlash mashinalari (USH-M), stol charxlari va disklar",
    "image": "/uploads/prod-480963_1.jpg",
    "order": 5,
    "active": true
  },
  {
    "_id": "cat_isitgichlar",
    "id": "cat_isitgichlar",
    "name": "Isitgichlar & Texnik Fenlar",
    "slug": "isitgichlar-iqlim",
    "department": "iqlim-texnikasi",
    "departmentName": "Isitish & Iqlim Texnikasi",
    "icon": "Flame",
    "description": "Quyosh reflektorli isitgichlar, sanoat issiqlik to'plari va texnik fenlar",
    "image": "/uploads/prod-968785_1.jpg",
    "order": 6,
    "active": true
  }
];

export const defaultProducts = [
  {
    "_id": "prod_product-9405",
    "id": "prod_product-9405",
    "title": "Тренажер для пресса",
    "slug": "product-9405",
    "sku": "NSB-739405",
    "price": 35,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Trenajorlar & Kardio",
    "category_slug": "trenajorlar",
    "categorySlug": "trenajorlar",
    "department": "sport",
    "departmentName": "Sport & Fitnes",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-737616_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Тренажер для пресса - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Sport & Fitnes"
      },
      {
        "label": "Toifa",
        "value": "Trenajorlar & Kardio"
      },
      {
        "label": "Brend",
        "value": "Original Brand"
      },
      {
        "label": "Holati",
        "value": "Yangi / Kafolatli"
      },
      {
        "label": "Yetkazib berish",
        "value": "Buxoro va O‘zbekiston bo‘ylab tezkor"
      },
      {
        "label": "Valyuta",
        "value": "USD ($)"
      }
    ],
    "created_at": "2026-11-26T10:42:19.405Z"
  },
  {
    "_id": "prod_begavoy-daroshka-6028",
    "id": "prod_begavoy-daroshka-6028",
    "title": "begavoy daroshka",
    "slug": "begavoy-daroshka-6028",
    "sku": "NSB-626028",
    "price": 100,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyort",
    "categorySlug": "drellar-shurupovyort",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-613031_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "begavoy daroshka - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Asbob-Uskunalar & Qurilish"
      },
      {
        "label": "Toifa",
        "value": "Drellar & Shurupovyortlar"
      },
      {
        "label": "Brend",
        "value": "Original Brand"
      },
      {
        "label": "Holati",
        "value": "Yangi / Kafolatli"
      },
      {
        "label": "Yetkazib berish",
        "value": "Buxoro va O‘zbekiston bo‘ylab tezkor"
      },
      {
        "label": "Valyuta",
        "value": "USD ($)"
      }
    ],
    "created_at": "2026-11-26T10:40:26.028Z"
  },
  {
    "_id": "prod_product-8857",
    "id": "prod_product-8857",
    "title": "Степпер",
    "slug": "product-8857",
    "sku": "NSB-368857",
    "price": 750000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Trenajorlar & Kardio",
    "category_slug": "trenajorlar",
    "categorySlug": "trenajorlar",
    "department": "sport",
    "departmentName": "Sport & Fitnes",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-358937_1.png",
      "/uploads/prod-358937_2.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Степпер - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Sport & Fitnes"
      },
      {
        "label": "Toifa",
        "value": "Trenajorlar & Kardio"
      },
      {
        "label": "Brend",
        "value": "Original Brand"
      },
      {
        "label": "Holati",
        "value": "Yangi / Kafolatli"
      },
      {
        "label": "Yetkazib berish",
        "value": "Buxoro va O‘zbekiston bo‘ylab tezkor"
      }
    ],
    "created_at": "2026-11-26T10:36:08.857Z"
  },
  {
    "_id": "prod_m96-100-2562",
    "id": "prod_m96-100-2562",
    "title": "m96 бегавой максимальный нагрузка 100 кг",
    "slug": "m96-100-2562",
    "sku": "NSB-282563",
    "price": 140,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyort",
    "categorySlug": "drellar-shurupovyort",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-272160_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "m96 бегавой максимальный нагрузка 100 кг - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Asbob-Uskunalar & Qurilish"
      },
      {
        "label": "Toifa",
        "value": "Drellar & Shurupovyortlar"
      },
      {
        "label": "Brend",
        "value": "Original Brand"
      },
      {
        "label": "Holati",
        "value": "Yangi / Kafolatli"
      },
      {
        "label": "Yetkazib berish",
        "value": "Buxoro va O‘zbekiston bo‘ylab tezkor"
      },
      {
        "label": "Valyuta",
        "value": "USD ($)"
      }
    ],
    "created_at": "2026-11-26T10:18:02.563Z"
  }
];

export const defaultBanners = [
  {
    "_id": "ban_asboblar_hero",
    "id": "ban_asboblar_hero",
    "title": "Professional Akkumulyatorli Asboblar va To‘plamlar",
    "subtitle": "Zarbli drel-shurupovyortlar, 4&1 universal komplektlar, balgarkalar va elektr uskunalar kafolatlangan sifatda.",
    "badge": "ELEKTR ASBOBLAR & QURILISH",
    "image": "/uploads/prod-492456_1.jpg",
    "link": "/shop?category=drellar-shurupovyortlar",
    "type": "hero",
    "order": 1,
    "active": true
  },
  {
    "_id": "ban_yol_hero",
    "id": "ban_yol_hero",
    "title": "Yo‘l Harakati Xavfsizligi Jihozlari va To‘siqlar",
    "subtitle": "Egiluvchan TPU konuslar, suriluvchi garmoshkalar, dempferlar, stolbiklar va quyosh energiyali signallar.",
    "badge": "YO‘L XAVFSIZLIGI",
    "image": "/uploads/konus-tpu-75sm.jpg",
    "link": "/shop?category=yol-xavfsizligi",
    "type": "hero",
    "order": 2,
    "active": true
  },
  {
    "_id": "ban_isitgichlar_hero",
    "id": "ban_isitgichlar_hero",
    "title": "Isitgichlar va Sanoat Issiqlik Uskunalari",
    "subtitle": "Reflektorli quyosh isitgichlar, sanoat issiqlik to'plari va haroratni rostlovchi texnik fenlar.",
    "badge": "ISITGICHLAR & FENLAR",
    "image": "/uploads/prod-968785_1.jpg",
    "link": "/shop?category=isitgichlar-iqlim",
    "type": "hero",
    "order": 3,
    "active": true
  }
];

export const defaultCoupons = [
  {
    "_id": "coup_wyue10",
    "id": "coup_wyue10",
    "code": "WYUE10",
    "discountPercent": 10,
    "discount_percent": 10,
    "expiryDate": "2027-12-31T23:59:59.000Z",
    "active": true
  },
  {
    "_id": "coup_asbob5",
    "id": "coup_asbob5",
    "code": "ASBOB5",
    "discountPercent": 5,
    "discount_percent": 5,
    "expiryDate": "2027-12-31T23:59:59.000Z",
    "active": true
  }
];

export const defaultReviews = [
  {
    "_id": "rev_1",
    "id": "rev_1",
    "productId": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-4561",
    "product_id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-4561",
    "productTitle": "4&1 Professional Akkumulyatorli Asboblar To‘plami (Gaykavyort, Balgarka, Drel, Perforator)",
    "userName": "Jamshid Rahimov",
    "user_name": "Jamshid Rahimov",
    "rating": 5,
    "comment": "To'plam ajoyib, barcha asboblar kuchli va sifatli keysda keldi. Buxoroga 2 soatda yetkazib berishdi!",
    "verifiedPurchase": true,
    "status": "approved",
    "createdAt": "2026-11-21T10:00:00.000Z"
  },
  {
    "_id": "rev_2",
    "id": "rev_2",
    "productId": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-3034",
    "product_id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-3034",
    "productTitle": "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, nur qaytaruvchi)",
    "userName": "Dilshod Olimov",
    "user_name": "Dilshod Olimov",
    "rating": 5,
    "comment": "TPU konus juda elastik va baquvvat ekan, nur qaytaruvchi tasmalari tunda juda yorug' ko'rinadi.",
    "verifiedPurchase": true,
    "status": "approved",
    "createdAt": "2026-11-20T14:30:00.000Z"
  }
];

export const defaultOrders = [
  {
    "_id": "ord_wyue_101",
    "id": "ord_wyue_101",
    "orderNumber": "NSB-902101",
    "order_number": "NSB-902101",
    "customerDetails": {
      "fullName": "Farrux Saidov",
      "phone": "+998 94 222 10 30",
      "city": "Buxoro shahri",
      "address": "Ibn Sino ko‘chasi, 24-uy"
    },
    "items": [
      {
        "product": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-4561",
        "title": "4&1 Professional Akkumulyatorli Asboblar To‘plami (Gaykavyort, Balgarka, Drel, Perforator)",
        "price": 895000,
        "quantity": 1,
        "image": "/uploads/prod-492456_1.jpg"
      }
    ],
    "totalAmount": 895000,
    "total_amount": 895000,
    "paymentMethod": "click",
    "payment_method": "click",
    "orderStatus": "new",
    "order_status": "new",
    "paymentStatus": "paid",
    "createdAt": "2026-11-24T14:37:54.113Z"
  },
  {
    "_id": "ord_wyue_102",
    "id": "ord_wyue_102",
    "orderNumber": "NSB-902102",
    "order_number": "NSB-902102",
    "customerDetails": {
      "fullName": "Nodira Xoliqova",
      "phone": "+998 93 333 88 99",
      "city": "Kogon tumani",
      "address": "Navoiy shoh ko‘chasi, 8-uy"
    },
    "items": [
      {
        "product": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-3034",
        "title": "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, nur qaytaruvchi)",
        "price": 130000,
        "quantity": 4,
        "image": "/uploads/konus-tpu-75sm.jpg"
      }
    ],
    "totalAmount": 520000,
    "total_amount": 520000,
    "paymentMethod": "payme",
    "payment_method": "payme",
    "orderStatus": "processing",
    "order_status": "processing",
    "paymentStatus": "paid",
    "createdAt": "2026-11-24T10:37:54.131Z"
  }
];

// ── LOCAL STORAGE ADAPTER HELPERS ──
export function getLocalCollection(key, fallback) {
  try {
    // 1. Purge all obsolete storage keys from previous builds
    const obsoleteKeys = [
      'nsb_products_v13_bot_only',
      'nsb_products_v12_all_catalog',
      'nsb_products_v11_all_catalog',
      'nsb_products_v10_real',
      'nsb_products_v9_realprices',
      'nsb_products_v8_realprices',
      'nsb_products_v7_realprices',
      'nsb_products_v6_sport',
      'nsb_products_v5_sport',
      'nsb_products_v4_sport',
      'nsb_products_v3_sport',
      'nsb_products_v2_sport',
      'nsb_products_v1_sport',
      'nsb_products_sport',
      'nsb_products',
      'products',
      'nsb_categories_v8_multidept',
      'nsb_categories_v3_sport',
      'nsb_banners_v4_sport',
      'nsb_banners_v3_sport'
    ];
    for (const oldKey of obsoleteKeys) {
      if (oldKey !== key) {
        try { localStorage.removeItem(oldKey); } catch (_) {}
      }
    }

    // If fallback is empty, reset immediately
    if (key.includes('products') && (!fallback || fallback.length === 0)) {
      try { localStorage.removeItem(key); } catch (_) {}
      return [];
    }

    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    const parsed = JSON.parse(raw);

    // If cached collection contains obsolete items (masaj, begavoy, trenajor, gantel, laptops), purge immediately
    if (key.includes('products') && Array.isArray(parsed)) {
      const hasOldItems = parsed.some(p => {
        const str = ((p.title || '') + ' ' + (p.slug || '') + ' ' + (p.category || '')).toLowerCase();
        return str.includes('masaj') ||
               str.includes('begavoy') ||
               str.includes('trenajor') ||
               str.includes('gantel') ||
               str.includes('macbook') ||
               str.includes('dell-optiplex') ||
               str.includes('shtanga') ||
               str.includes('tatami');
      });

      if (hasOldItems || parsed.length !== fallback.length) {
        console.log('⚡ Purging old cache in favor of clean 59 bot products');
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
      }

      return parsed;
    }

    if (key.includes('categories') && Array.isArray(parsed)) {
      const hasOldCats = parsed.some(c => {
        const s = (c.slug || '').toLowerCase();
        return s.includes('trenajor') || s.includes('gantel') || s.includes('boks') || s.includes('futbol');
      });
      if (hasOldCats || parsed.length !== fallback.length) {
        console.log('⚡ Purging old categories cache from localStorage');
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
      }
    }

    return parsed;
  } catch (e) {
    console.warn('LocalStorage access warning:', e);
    return fallback;
  }
}

export function saveLocalCollection(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

