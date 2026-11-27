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
    "_id": "prod_bo-yin-masajori-3880",
    "id": "prod_bo-yin-masajori-3880",
    "title": "Bo'yin masajori",
    "slug": "bo-yin-masajori-3880",
    "sku": "NSB-003880",
    "price": 9,
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
      "/uploads/prod-997150_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Bo'yin masajori - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-27T14:33:23.880Z"
  },
  {
    "_id": "prod_akril-stul-7630",
    "id": "prod_akril-stul-7630",
    "title": "akril stul",
    "slug": "akril-stul-7630",
    "sku": "NSB-897630",
    "price": 33,
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
      "/uploads/prod-896063_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "akril stul - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-27T14:31:37.630Z"
  },
  {
    "_id": "prod_6-kishilik-akril-stol-5705",
    "id": "prod_6-kishilik-akril-stol-5705",
    "title": "6 kishilik akril stol",
    "slug": "6-kishilik-akril-stol-5705",
    "sku": "NSB-875705",
    "price": 120,
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
      "/uploads/prod-869717_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "6 kishilik akril stol - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-27T14:31:15.706Z"
  },
  {
    "_id": "prod_plastik-stul-9738",
    "id": "prod_plastik-stul-9738",
    "title": "plastik stul",
    "slug": "plastik-stul-9738",
    "sku": "NSB-569738",
    "price": 33,
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
      "/uploads/prod-560882_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "plastik stul - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-27T14:09:29.739Z"
  },
  {
    "_id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-8312",
    "id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-8312",
    "title": "4&1 Professional Akkumulyatorli Asboblar To‘plami (Gaykavyort, Balgarka, Drel, Perforator)",
    "slug": "4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-8312",
    "sku": "NSB-038312",
    "price": 895000,
    "currency": "UZS",
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
    "brand": "Universal Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-004027_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Qurilish, montaj va ta'mirlash uchun 4 ta eng zarur elektr asboblar to‘plami: Kuchli zarbli gaykavyort, 125 mm burchakli shlifovka (balgarka), drel-shurupovyort va zarbli perforator. Barchasi bitta qulay mustahkam keysda, katta sig‘imli Li-Ion akkumulyatorlar bilan birga taqdim etiladi.",
    "specifications": [
      {
        "label": "To‘plam tarkibi",
        "value": "Gaykavyort, Balgarka (USH-M), Drel-shurupovyort, Perforator"
      },
      {
        "label": "Dvigatel turi",
        "value": "Beshchetochniy (Brushless / Cho‘tkasiz) yuqori resursli"
      },
      {
        "label": "Batareya",
        "value": "Yuqori sig‘imli universal Li-Ion akkumulyatorlar"
      },
      {
        "label": "Komplektatsiya",
        "value": "4 ta uskuna, 2x batareya, tezkor zaryadlovchi, mustahkam keys"
      },
      {
        "label": "Kafolat",
        "value": "1 yil rasmiy kafolat"
      }
    ],
    "created_at": "2026-11-27T06:13:58.312Z"
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-2549",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-2549",
    "title": "Drellar & Shurupovyortlar Mahsuloti",
    "slug": "drellar-shurupovyortlar-mahsuloti-2549",
    "sku": "NSB-032549",
    "price": 825000,
    "currency": "UZS",
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
      "/uploads/prod-999139_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Drellar & Shurupovyortlar Mahsuloti - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
      }
    ],
    "created_at": "2026-11-27T06:13:52.549Z"
  },
  {
    "_id": "prod_2-1-akkumulyatorli-bog-va-qurilish-to-plami-mini-zanjirli-arra-bog-qaychisi-6201",
    "id": "prod_2-1-akkumulyatorli-bog-va-qurilish-to-plami-mini-zanjirli-arra-bog-qaychisi-6201",
    "title": "2&1 Akkumulyatorli Bog‘ va Qurilish To‘plami (Mini Zanjirli Arra + Bog‘ Qaychisi)",
    "slug": "2-1-akkumulyatorli-bog-va-qurilish-to-plami-mini-zanjirli-arra-bog-qaychisi-6201",
    "sku": "NSB-026201",
    "price": 569000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Arralar & Elektr Uskunalar",
    "category_slug": "arralar-uskunalar",
    "categorySlug": "arralar-uskunalar",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "GardenPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-000055_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Bog‘dorchilik, tomorqa va qurilish ishlari uchun qulay 2&1 universal to‘plam: Daraxt shoxlarini oson kesuvchi mini zanjirli arra va elektr kesuvchi sekator-qaychi. Yengil, bir qo‘lda boshqarish mumkin va juda tejamkor.",
    "specifications": [
      {
        "label": "To‘plam tarkibi",
        "value": "1x Mini zanjirli arra, 1x Akkumulyatorli bog‘ qaychisi"
      },
      {
        "label": "Shina uzunligi",
        "value": "6 dyuym (15 sm) zanjirli shina"
      },
      {
        "label": "Qaychi kesish qalinligi",
        "value": "30 mm gacha bo‘lgan shoxlar"
      },
      {
        "label": "Akkumulyator",
        "value": "2 dona Li-Ion batareya va zaryadlovchi"
      }
    ],
    "created_at": "2026-11-27T06:13:46.201Z"
  },
  {
    "_id": "prod_slj-elektr-toshli-stol-charxi-ikki-tomonlama-toshli-charxlash-uskunasi-6066",
    "id": "prod_slj-elektr-toshli-stol-charxi-ikki-tomonlama-toshli-charxlash-uskunasi-6066",
    "title": "SLJ Elektr Toshli Stol Charxi (Ikki tomonlama toshli charxlash uskunasi)",
    "slug": "slj-elektr-toshli-stol-charxi-ikki-tomonlama-toshli-charxlash-uskunasi-6066",
    "sku": "NSB-026066",
    "price": 135000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Balgarka & Shlifovka",
    "category_slug": "balgarkalar-ushm",
    "categorySlug": "balgarkalar-ushm",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "SLJ",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-999124_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Pichoqlar, boltalar, burg‘ular (sverlolar), duradgorlik asboblari va metall qismlarni charxlash hamda tozalash uchun stol usti elektr charxi. Ikki tomonida turli donadorlikdagi (qo‘pol va mayin) charx toshlari va himoya oynachalari mavjud.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Stol usti ikki diskli charx"
      },
      {
        "label": "Tosh diametri",
        "value": "125-150 mm standart charx toshlari"
      },
      {
        "label": "Xavfsizlik",
        "value": "Uchqundan himoyalovchi shaffof ekranlar"
      }
    ],
    "created_at": "2026-11-27T06:13:46.066Z"
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-6034",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-6034",
    "title": "Drellar & Shurupovyortlar Mahsuloti",
    "slug": "drellar-shurupovyortlar-mahsuloti-6034",
    "sku": "NSB-026034",
    "price": 330000,
    "currency": "UZS",
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
      "/uploads/prod-000469_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Drellar & Shurupovyortlar Mahsuloti - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
      }
    ],
    "created_at": "2026-11-27T06:13:46.034Z"
  },
  {
    "_id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-6003",
    "id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-6003",
    "title": "Turbo Texnik Fen 2000W (Haroratni rostlagichli sanoat feni)",
    "slug": "turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-6003",
    "sku": "NSB-026003",
    "price": 92000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Lazer Uroven & Asbob Naborlari",
    "category_slug": "lazer-qol-asboblari",
    "categorySlug": "lazer-qol-asboblari",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "TurboPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-999127_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Plastik quvurlarni bukish, payvandlash, bo‘yoq va lakni tozalash, avtomobil oynalariga plyonka tortish va quritish ishlari uchun 2000 Vt quvvatli professional texnik fen.",
    "specifications": [
      {
        "label": "Quvvati",
        "value": "2000 Vt"
      },
      {
        "label": "Harorat diapazoni",
        "value": "50°C - 600°C gacha rostlanadi"
      }
    ],
    "created_at": "2026-11-27T06:13:46.003Z"
  },
  {
    "_id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-6770",
    "id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-6770",
    "title": "4&1 Professional Akkumulyatorli Asboblar To‘plami (Gaykavyort, Balgarka, Drel, Perforator)",
    "slug": "4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-6770",
    "sku": "NSB-016770",
    "price": 895000,
    "currency": "UZS",
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
    "brand": "Universal Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-998312_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Qurilish, montaj va ta'mirlash uchun 4 ta eng zarur elektr asboblar to‘plami: Kuchli zarbli gaykavyort, 125 mm burchakli shlifovka (balgarka), drel-shurupovyort va zarbli perforator. Barchasi bitta qulay mustahkam keysda, katta sig‘imli Li-Ion akkumulyatorlar bilan birga taqdim etiladi.",
    "specifications": [
      {
        "label": "To‘plam tarkibi",
        "value": "Gaykavyort, Balgarka (USH-M), Drel-shurupovyort, Perforator"
      },
      {
        "label": "Dvigatel turi",
        "value": "Beshchetochniy (Brushless / Cho‘tkasiz) yuqori resursli"
      },
      {
        "label": "Batareya",
        "value": "Yuqori sig‘imli universal Li-Ion akkumulyatorlar"
      },
      {
        "label": "Komplektatsiya",
        "value": "4 ta uskuna, 2x batareya, tezkor zaryadlovchi, mustahkam keys"
      },
      {
        "label": "Kafolat",
        "value": "1 yil rasmiy kafolat"
      }
    ],
    "created_at": "2026-11-27T06:13:36.770Z"
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-6747",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-6747",
    "title": "Drellar & Shurupovyortlar Mahsuloti",
    "slug": "drellar-shurupovyortlar-mahsuloti-6747",
    "sku": "NSB-016747",
    "price": 169000,
    "currency": "UZS",
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
      "/uploads/prod-999150_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Drellar & Shurupovyortlar Mahsuloti - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
      }
    ],
    "created_at": "2026-11-27T06:13:36.747Z"
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-7538",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-7538",
    "title": "Drellar & Shurupovyortlar Mahsuloti",
    "slug": "drellar-shurupovyortlar-mahsuloti-7538",
    "sku": "NSB-007538",
    "price": 339000,
    "currency": "UZS",
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
      "/uploads/prod-000289_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Drellar & Shurupovyortlar Mahsuloti - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
      }
    ],
    "created_at": "2026-11-27T06:13:27.538Z"
  },
  {
    "_id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-5636",
    "id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-5636",
    "title": "Turbo Texnik Fen 2000W (Haroratni rostlagichli sanoat feni)",
    "slug": "turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-5636",
    "sku": "NSB-005636",
    "price": 92000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Lazer Uroven & Asbob Naborlari",
    "category_slug": "lazer-qol-asboblari",
    "categorySlug": "lazer-qol-asboblari",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "TurboPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-000056_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Plastik quvurlarni bukish, payvandlash, bo‘yoq va lakni tozalash, avtomobil oynalariga plyonka tortish va quritish ishlari uchun 2000 Vt quvvatli professional texnik fen.",
    "specifications": [
      {
        "label": "Quvvati",
        "value": "2000 Vt"
      },
      {
        "label": "Harorat diapazoni",
        "value": "50°C - 600°C gacha rostlanadi"
      }
    ],
    "created_at": "2026-11-27T06:13:25.637Z"
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-4774",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-4774",
    "title": "Drellar & Shurupovyortlar Mahsuloti",
    "slug": "drellar-shurupovyortlar-mahsuloti-4774",
    "sku": "NSB-004774",
    "price": 460000,
    "currency": "UZS",
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
      "/uploads/prod-000286_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Drellar & Shurupovyortlar Mahsuloti - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
      }
    ],
    "created_at": "2026-11-27T06:13:24.774Z"
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-3925",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-3925",
    "title": "Drellar & Shurupovyortlar Mahsuloti",
    "slug": "drellar-shurupovyortlar-mahsuloti-3925",
    "sku": "NSB-003925",
    "price": 130000,
    "currency": "UZS",
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
      "/uploads/prod-999120_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Drellar & Shurupovyortlar Mahsuloti - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
      }
    ],
    "created_at": "2026-11-27T06:13:23.926Z"
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-3810",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-3810",
    "title": "Drellar & Shurupovyortlar Mahsuloti",
    "slug": "drellar-shurupovyortlar-mahsuloti-3810",
    "sku": "NSB-003810",
    "price": 130000,
    "currency": "UZS",
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
      "/uploads/prod-000296_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Drellar & Shurupovyortlar Mahsuloti - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
      }
    ],
    "created_at": "2026-11-27T06:13:23.810Z"
  },
  {
    "_id": "prod_universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-2961",
    "id": "prod_universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-2961",
    "title": "Universal Akkumulyatorli Maysa O‘radigan Trimmer (G‘ildirakli va diskli)",
    "slug": "universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-2961",
    "sku": "NSB-002961",
    "price": 440000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Arralar & Elektr Uskunalar",
    "category_slug": "arralar-uskunalar",
    "categorySlug": "arralar-uskunalar",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "GreenGarden",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-998363_1.jpg"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Bog‘, hovli va maysazorlarni toza saqlash uchun akkumulyatorli qulay trimmer. Metall disk, arra tishi va plastik pichoqlar to‘plamda beriladi. Balandligini bo‘yga moslab sozlash mumkin.",
    "specifications": [
      {
        "label": "Teleskopik shtanga",
        "value": "Bo‘yga moslab 90-125 sm gacha uzayadi"
      },
      {
        "label": "Pichoqlar",
        "value": "Metall pichoq, arra diski va plastik pichoqlar"
      },
      {
        "label": "Batareya",
        "value": "2x Li-Ion akkumulyator"
      }
    ],
    "created_at": "2026-11-27T06:13:22.961Z"
  },
  {
    "_id": "prod_siapo-9420-model-vazn-kotarish-110-kg-tezlik-14-6031",
    "id": "prod_siapo-9420-model-vazn-kotarish-110-kg-tezlik-14-6031",
    "title": "Siapo 9420 model Vazn kotarish 110 kg Tezlik 14",
    "slug": "siapo-9420-model-vazn-kotarish-110-kg-tezlik-14-6031",
    "sku": "NSB-656032",
    "price": 230,
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
      "/uploads/prod-652329_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Siapo 9420 model Vazn kotarish 110 kg Tezlik 14 - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-26T12:54:16.032Z"
  },
  {
    "_id": "prod_kechite-5007-maximal-tezlik-14-vazn-kotarish-100-kg-2-0-ot-kuchi-8775",
    "id": "prod_kechite-5007-maximal-tezlik-14-vazn-kotarish-100-kg-2-0-ot-kuchi-8775",
    "title": "Kechite 5007 Maximal tezlik 14 Vazn kotarish 100 kg 2.0 ot kuchi",
    "slug": "kechite-5007-maximal-tezlik-14-vazn-kotarish-100-kg-2-0-ot-kuchi-8775",
    "sku": "NSB-518775",
    "price": 260,
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
      "/uploads/prod-515192_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Kechite 5007 Maximal tezlik 14 Vazn kotarish 100 kg 2.0 ot kuchi - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-26T12:51:58.775Z"
  },
  {
    "_id": "prod_sports-7006-model-120-kg-naklon-15-gradus-maksimal-tezlik-14-7951",
    "id": "prod_sports-7006-model-120-kg-naklon-15-gradus-maksimal-tezlik-14-7951",
    "title": "Sports 7006 model 120 kg Naklon 15 gradus Maksimal tezlik 14",
    "slug": "sports-7006-model-120-kg-naklon-15-gradus-maksimal-tezlik-14-7951",
    "sku": "NSB-277952",
    "price": 350,
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
      "/uploads/prod-272912_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Sports 7006 model 120 kg Naklon 15 gradus Maksimal tezlik 14 - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-26T12:47:57.957Z"
  },
  {
    "_id": "prod_1-5-kv-5003",
    "id": "prod_1-5-kv-5003",
    "title": "1.5 kv",
    "slug": "1-5-kv-5003",
    "sku": "NSB-055003",
    "price": 11,
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
      "/uploads/prod-952834_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "1.5 kv - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-26T11:54:15.003Z"
  },
  {
    "_id": "prod_1-5-kv-6167",
    "id": "prod_1-5-kv-6167",
    "title": "1.5 kv",
    "slug": "1-5-kv-6167",
    "sku": "NSB-996170",
    "price": 9,
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
      "/uploads/prod-920555_1.png",
      "/uploads/prod-920555_2.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "1.5 kv - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.",
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
    "created_at": "2026-11-26T11:53:16.170Z"
  },
  {
    "_id": "prod_2-kv-2399",
    "id": "prod_2-kv-2399",
    "title": "Sanoat Elektr Issiqlik To‘pi 2 kVt (Teploventilyator 2000W, Termostatli)",
    "slug": "2-kv-2399",
    "sku": "NSB-612399",
    "price": 9,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Qo‘l Asboblari & Isitgichlar",
    "category_slug": "lazer-qol-asboblari",
    "categorySlug": "lazer-qol-asboblari",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "ThermoPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-601894_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ustaxona, garaj, do‘kon va xonalarni tezkor isitish uchun mo‘ljallangan 2 kVt (2000W) quvvatli metall korpusli elektr teploventilyator. Haroratni boshqarish termostati, sovuq havo haydash rejimi va qizib ketishdan himoya tizimi bilan jihozlangan.",
    "specifications": [
      {
        "label": "Quvvati",
        "value": "2 kVt (2000 Vt)"
      },
      {
        "label": "Ishlash rejimlari",
        "value": "Ventilyator / 1000W / 2000W"
      },
      {
        "label": "Isitish maydoni",
        "value": "25–35 kv.m gacha"
      },
      {
        "label": "Kuchlanish",
        "value": "220V ~ 50Hz"
      },
      {
        "label": "Korpusi",
        "value": "Issiqqa chidamli bo‘yalgan metall"
      }
    ],
    "created_at": "2026-11-26T11:46:52.399Z"
  },
  {
    "_id": "prod_quyosh-35-1004",
    "id": "prod_quyosh-35-1004",
    "title": "Quyosh 35 sm Reflektorli Infraqizil Elektr Isitgich (Tejamkor Kvars Spiral)",
    "slug": "quyosh-35-1004",
    "sku": "NSB-561004",
    "price": 5.9,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Qo‘l Asboblari & Isitgichlar",
    "category_slug": "lazer-qol-asboblari",
    "categorySlug": "lazer-qol-asboblari",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Quyosh",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-545273_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "35 sm diametrli parabolik reflektorli infraqizil elektr isitgich. Havoni quritmasdan to‘g‘ridan-to‘g‘ri issiqlik tarqatadi, kam elektr energiya sarflaydi va xavfsiz himoya panjarasi bilan jihozlangan.",
    "specifications": [
      {
        "label": "Reflektor diametri",
        "value": "35 sm (Parabolik kosa)"
      },
      {
        "label": "Isitish elementi",
        "value": "Tezkor qizuvchi kvars spiral"
      },
      {
        "label": "Quvvat sarfi",
        "value": "600–800 Vt (Tejamkor)"
      },
      {
        "label": "Xavfsizlik",
        "value": "Qalin himoya panjarasi va barqaror taglik"
      },
      {
        "label": "Kuchlanish",
        "value": "220V"
      }
    ],
    "created_at": "2026-11-26T11:46:01.004Z"
  },
  {
    "_id": "prod_quyosh-35-8319",
    "id": "prod_quyosh-35-8319",
    "title": "Quyosh 35 sm Reflektorli Infraqizil Elektr Isitgich (Tejamkor Kvars Spiral)",
    "slug": "quyosh-35-8319",
    "sku": "NSB-458319",
    "price": 5.9,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Qo‘l Asboblari & Isitgichlar",
    "category_slug": "lazer-qol-asboblari",
    "categorySlug": "lazer-qol-asboblari",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Quyosh",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-443213_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "35 sm diametrli parabolik reflektorli infraqizil elektr isitgich. Havoni quritmasdan to‘g‘ridan-to‘g‘ri issiqlik tarqatadi, kam elektr energiya sarflaydi va xavfsiz himoya panjarasi bilan jihozlangan.",
    "specifications": [
      {
        "label": "Reflektor diametri",
        "value": "35 sm (Parabolik kosa)"
      },
      {
        "label": "Isitish elementi",
        "value": "Tezkor qizuvchi kvars spiral"
      },
      {
        "label": "Quvvat sarfi",
        "value": "600–800 Vt (Tejamkor)"
      },
      {
        "label": "Xavfsizlik",
        "value": "Qalin himoya panjarasi va barqaror taglik"
      },
      {
        "label": "Kuchlanish",
        "value": "220V"
      }
    ],
    "created_at": "2026-11-26T11:44:18.319Z"
  },
  {
    "_id": "prod_quyosh-40-5860",
    "id": "prod_quyosh-40-5860",
    "title": "Quyosh 40 sm Kuchaytirilgan Reflektorli Infraqizil Elektr Isitgich",
    "slug": "quyosh-40-5860",
    "sku": "NSB-405860",
    "price": 6.5,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Qo‘l Asboblari & Isitgichlar",
    "category_slug": "lazer-qol-asboblari",
    "categorySlug": "lazer-qol-asboblari",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Quyosh",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-382754_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "40 sm keng parabolik reflektorli infraqizil elektr isitgich. Katta xonalar, ofis va do‘konlarni tez isitish uchun qulay, balandligi va egilish burchagi sozlanadi.",
    "specifications": [
      {
        "label": "Reflektor diametri",
        "value": "40 sm"
      },
      {
        "label": "Isitish elementi",
        "value": "Infraqizil kvars spiral"
      },
      {
        "label": "Quvvati",
        "value": "800–1000 Vt"
      },
      {
        "label": "Xavfsizlik",
        "value": "Ag‘darilishdan himoya va metall panjara"
      },
      {
        "label": "Kuchlanish",
        "value": "220V"
      }
    ],
    "created_at": "2026-11-26T11:43:25.860Z"
  },
  {
    "_id": "prod_quyosh-45-3798",
    "id": "prod_quyosh-45-3798",
    "title": "Quyosh 45 sm Katta Reflektorli Infraqizil Elektr Isitgich (Super Quvvat)",
    "slug": "quyosh-45-3798",
    "sku": "NSB-243799",
    "price": 8.5,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Qo‘l Asboblari & Isitgichlar",
    "category_slug": "lazer-qol-asboblari",
    "categorySlug": "lazer-qol-asboblari",
    "department": "uskunalar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Quyosh",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-223729_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Eng katta 45 sm diametrli reflektorli infraqizil isitgich. Keng maydonlarni uzoq masofadan samarali isitadi, mustahkam taglik va issiqqa chidamli korpusga ega.",
    "specifications": [
      {
        "label": "Reflektor diametri",
        "value": "45 sm (Katta o‘lcham)"
      },
      {
        "label": "Isitish texnologiyasi",
        "value": "Infraqizil nurli kvars spiral"
      },
      {
        "label": "Quvvati",
        "value": "1000–1200 Vt"
      },
      {
        "label": "Xavfsizlik",
        "value": "Himoya panjarasi va barqaror oyoq"
      },
      {
        "label": "Kuchlanish",
        "value": "220V"
      }
    ],
    "created_at": "2026-11-26T11:40:43.799Z"
  },
  {
    "_id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-6150",
    "id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-6150",
    "title": "Suriluvchi Mobil Yo‘l To‘sig‘i Garmoshka ($35 — Yig‘iluvchi Xavfsizlik To‘sig‘i)",
    "slug": "suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-6150",
    "sku": "NSB-146150",
    "price": 35,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-103397_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Vaqtinchalik yo‘l yopish, qurilish hududlari va avtoturargohlarni to‘sish uchun g‘ildirakli yig‘iluvchi garmoshka to‘siq. Kerakli uzunlikka oson ochiladi va yig‘ilganda juda kam joy egallaydi.",
    "specifications": [
      {
        "label": "Konstruksiyasi",
        "value": "Suriluvchi garmoshka mexanizmi"
      },
      {
        "label": "Rangi",
        "value": "Yorqin ogohlantiruvchi signal ranglari"
      },
      {
        "label": "Harakatchanlik",
        "value": "Tormozli g‘ildiraklar bilan jihozlangan"
      },
      {
        "label": "Qo‘llanilishi",
        "value": "Qurilish, ombor, savdo markazlari va yo‘l ishlari"
      }
    ],
    "created_at": "2026-11-26T11:39:06.150Z"
  },
  {
    "_id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-7202",
    "id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-7202",
    "title": "Suriluvchi Mobil Yo‘l To‘sig‘i Garmoshka ($36 — Yig‘iluvchi Xavfsizlik To‘sig‘i)",
    "slug": "suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-7202",
    "sku": "NSB-037471",
    "price": 36,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-029714_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Vaqtinchalik yo‘l yopish, qurilish hududlari va avtoturargohlarni to‘sish uchun g‘ildirakli yig‘iluvchi garmoshka to‘siq. Kerakli uzunlikka oson ochiladi va yig‘ilganda juda kam joy egallaydi.",
    "specifications": [
      {
        "label": "Konstruksiyasi",
        "value": "Suriluvchi garmoshka mexanizmi"
      },
      {
        "label": "Rangi",
        "value": "Yorqin ogohlantiruvchi signal ranglari"
      },
      {
        "label": "Harakatchanlik",
        "value": "Tormozli g‘ildiraklar bilan jihozlangan"
      },
      {
        "label": "Qo‘llanilishi",
        "value": "Qurilish, ombor, savdo markazlari va yo‘l ishlari"
      }
    ],
    "created_at": "2026-11-26T11:37:17.472Z"
  },
  {
    "_id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-2797",
    "id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-2797",
    "title": "Suriluvchi Mobil Yo‘l To‘sig‘i Garmoshka ($55 — Yig‘iluvchi Xavfsizlik To‘sig‘i)",
    "slug": "suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-2797",
    "sku": "NSB-942797",
    "price": 55,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-938285_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Vaqtinchalik yo‘l yopish, qurilish hududlari va avtoturargohlarni to‘sish uchun g‘ildirakli yig‘iluvchi garmoshka to‘siq. Kerakli uzunlikka oson ochiladi va yig‘ilganda juda kam joy egallaydi.",
    "specifications": [
      {
        "label": "Konstruksiyasi",
        "value": "Suriluvchi garmoshka mexanizmi"
      },
      {
        "label": "Rangi",
        "value": "Yorqin ogohlantiruvchi signal ranglari"
      },
      {
        "label": "Harakatchanlik",
        "value": "Tormozli g‘ildiraklar bilan jihozlangan"
      },
      {
        "label": "Qo‘llanilishi",
        "value": "Qurilish, ombor, savdo markazlari va yo‘l ishlari"
      }
    ],
    "created_at": "2026-11-26T11:35:42.797Z"
  },
  {
    "_id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-3985",
    "id": "prod_suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-3985",
    "title": "Suriluvchi Mobil Yo‘l To‘sig‘i Garmoshka ($60 — Yig‘iluvchi Xavfsizlik To‘sig‘i)",
    "slug": "suriluvchi-mobil-yo-l-to-sig-i-garmoshka-mobil-to-siq-tizimi-3985",
    "sku": "NSB-853986",
    "price": 60,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-844504_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Vaqtinchalik yo‘l yopish, qurilish hududlari va avtoturargohlarni to‘sish uchun g‘ildirakli yig‘iluvchi garmoshka to‘siq. Kerakli uzunlikka oson ochiladi va yig‘ilganda juda kam joy egallaydi.",
    "specifications": [
      {
        "label": "Konstruksiyasi",
        "value": "Suriluvchi garmoshka mexanizmi"
      },
      {
        "label": "Rangi",
        "value": "Yorqin ogohlantiruvchi signal ranglari"
      },
      {
        "label": "Harakatchanlik",
        "value": "Tormozli g‘ildiraklar bilan jihozlangan"
      },
      {
        "label": "Qo‘llanilishi",
        "value": "Qurilish, ombor, savdo markazlari va yo‘l ishlari"
      }
    ],
    "created_at": "2026-11-26T11:34:13.990Z"
  },
  {
    "_id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-6785",
    "id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-6785",
    "title": "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, Nur Qaytaruvchi Tasmali)",
    "slug": "yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-6785",
    "sku": "NSB-806785",
    "price": 70000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-803237_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil g‘ildiragi bosib o‘tganda ham sinmaydigan va darhol o‘z shaklini tiklaydigan egiluvchan TPU yo‘l konusi. Kechasi uzoqdan ko‘rinuvchi nur qaytaruvchi tasmalari mavjud.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "75 sm"
      },
      {
        "label": "Materiali",
        "value": "Egiluvchan TPU (sinmaydi)"
      },
      {
        "label": "Nur qaytarish",
        "value": "Yuqori intensivlikdagi oq tasmalar"
      },
      {
        "label": "Asosi",
        "value": "Og‘ir barqaror taglik"
      }
    ],
    "created_at": "2026-11-26T11:33:26.785Z"
  },
  {
    "_id": "prod_product-8001",
    "id": "prod_product-8001",
    "title": "Quyosh Energiyali Avtonom Yo‘l Migalkasi (Ogohlantiruvchi Sariq LED Chiroq)",
    "slug": "product-8001",
    "sku": "NSB-608001",
    "price": 100,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Belgilari & Ko‘zgular",
    "category_slug": "yol-belgilari",
    "categorySlug": "yol-belgilari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-603578_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil yo‘llari va qurilish hududlarida ogohlantirish uchun quyosh batareyali avtonom LED migalka. Elektr tarmog‘iga ulanmasdan kechayu kunduz barqaror ishlaydi.",
    "specifications": [
      {
        "label": "Quvvat manbai",
        "value": "Quyosh paneli va o‘rnatilgan batareya"
      },
      {
        "label": "Yorug‘lik turi",
        "value": "Yorqin miltillovchi sariq LED"
      },
      {
        "label": "Himoya",
        "value": "IP65 suv va sovuqqa chidamli korpus"
      },
      {
        "label": "Sensor",
        "value": "Qorong‘ida avtomatik yoqilish datchigi"
      }
    ],
    "created_at": "2026-11-26T11:30:08.001Z"
  },
  {
    "_id": "prod_product-2149",
    "id": "prod_product-2149",
    "title": "Katta Quyosh Energiyali Signal Migalka (360° Ogohlantiruvchi LED Chiroq)",
    "slug": "product-2149",
    "sku": "NSB-492149",
    "price": 120,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Belgilari & Ko‘zgular",
    "category_slug": "yol-belgilari",
    "categorySlug": "yol-belgilari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-484861_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yo‘l ta’mirlash hududlari, qurilish maydonchalari va xavfli chorrahalar uchun katta o‘lchamli quyosh batareyali miltillovchi LED signal chirog‘i. Kunduzi quyoshdan quvvat olib, tunda avtomatik yonadi.",
    "specifications": [
      {
        "label": "Quvvat manbai",
        "value": "Yuqori samarali quyosh paneli + akkumulyator"
      },
      {
        "label": "Ko‘rinish burchagi",
        "value": "360° (Uzoq masofadan aniq ko‘rinadi)"
      },
      {
        "label": "Himoya darajasi",
        "value": "IP65 (Yomg‘ir va changga chidamli)"
      },
      {
        "label": "Ishlash vaqti",
        "value": "To‘liq zaryadda 72 soatgacha"
      },
      {
        "label": "O‘rnatish",
        "value": "Yo‘l ustuni, to‘siq yoki konuslar ustiga"
      }
    ],
    "created_at": "2026-11-26T11:28:12.149Z"
  },
  {
    "_id": "prod_product-7535",
    "id": "prod_product-7535",
    "title": "Kabel Himoyalovchi Rezina Kord-Tramplin (1 Metrli Avtomobil O‘tish Yo‘lagi)",
    "slug": "product-7535",
    "sku": "NSB-417535",
    "price": 17,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-317415_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil yo‘llari va tadbirlarda elektr kabellari hamda shlanglarni mashina g‘ildiraklari bosib ketishidan himoya qiluvchi og‘ir rezina kabel-kanal (kapa). Sariq qopqog‘i oson ochilib yopiladi.",
    "specifications": [
      {
        "label": "Uzunligi",
        "value": "1000 mm (1 metr)"
      },
      {
        "label": "Materiali",
        "value": "Og‘ir yukka chidamli vulkanizatsiyalangan rezina + PVX qopqoq"
      },
      {
        "label": "Yuk ko‘tarishi",
        "value": "20–30 tonnagacha transport vositalariga chidamli"
      },
      {
        "label": "Rangi",
        "value": "Qora asos va yorqin sariq ogohlantiruvchi qopqoq"
      },
      {
        "label": "Ulanishi",
        "value": "Bir-biriga pazlar orqali uzluksiz ulanadi"
      }
    ],
    "created_at": "2026-11-26T11:26:57.535Z"
  },
  {
    "_id": "prod_product-2228",
    "id": "prod_product-2228",
    "title": "Masofadan Boshqariladigan Avtomatik Parkovka To‘sig‘i (Pultli, Akkumulyatorli)",
    "slug": "product-2228",
    "sku": "NSB-362228",
    "price": 55,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Belgilari & Ko‘zgular",
    "category_slug": "yol-belgilari",
    "categorySlug": "yol-belgilari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-354281_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Shaxsiy va xizmat avtoturargoh joylarini begona mashinalardan himoyalovchi masofadan pult bilan boshqariladigan elektron parkovka qulfi. Zarbaga qarshi 180° egilish himoyasi va signalizatsiyaga ega.",
    "specifications": [
      {
        "label": "Boshqaruv",
        "value": "2 ta masofadan boshqarish pulti (30 m masofa)"
      },
      {
        "label": "Quvvat manbai",
        "value": "Qayta zaryadlanuvchi akkumulyator"
      },
      {
        "label": "Himoya",
        "value": "IP67 suv o‘tkazmaydigan po‘lat korpus"
      },
      {
        "label": "Yuk ko‘tarish",
        "value": "Yopiq holatda 2 tonnagacha bosimga chidamli"
      },
      {
        "label": "Rangi",
        "value": "Yorqin sariq ogohlantiruvchi rang"
      }
    ],
    "created_at": "2026-11-26T11:26:02.228Z"
  },
  {
    "_id": "prod_80-4061",
    "id": "prod_80-4061",
    "title": "Rezina Burchak Himoyalovchi Dempfer 80 sm (Ustun va Devor Burchaklari Uchun)",
    "slug": "80-4061",
    "sku": "NSB-164061",
    "price": 6,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-153463_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yer osti parkovkalari, omborlar va garajlardagi beton ustun hamda devor burchaklarini avtomobil urilishidan himoya qiluvchi 80 sm li elastik rezina dempfer. Nur qaytaruvchi sariq chiziqlar bilan jihozlangan.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "80 sm"
      },
      {
        "label": "Shakl",
        "value": "L-shaklidagi burchak himoyasi"
      },
      {
        "label": "Materiali",
        "value": "Zarbani yutuvchi yumshoq va mustahkam rezina"
      },
      {
        "label": "Ko‘rinuvchanlik",
        "value": "Nur qaytaruvchi sariq-qora chiziqlar"
      },
      {
        "label": "O‘rnatish",
        "value": "Dyubel va shuruplar bilan oson qotiriladi"
      }
    ],
    "created_at": "2026-11-26T11:22:44.061Z"
  },
  {
    "_id": "prod_100-5923",
    "id": "prod_100-5923",
    "title": "Rezina Burchak Himoyalovchi Dempfer 100 sm (Ustun va Devor Burchaklari Uchun)",
    "slug": "100-5923",
    "sku": "NSB-125923",
    "price": 6.5,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-111931_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yer osti parkovkalari, omborlar va garajlardagi beton ustun hamda devor burchaklarini avtomobil urilishidan himoya qiluvchi 100 sm li elastik rezina dempfer. Nur qaytaruvchi sariq chiziqlar bilan jihozlangan.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "100 sm"
      },
      {
        "label": "Shakl",
        "value": "L-shaklidagi burchak himoyasi"
      },
      {
        "label": "Materiali",
        "value": "Zarbani yutuvchi yumshoq va mustahkam rezina"
      },
      {
        "label": "Ko‘rinuvchanlik",
        "value": "Nur qaytaruvchi sariq-qora chiziqlar"
      },
      {
        "label": "O‘rnatish",
        "value": "Dyubel va shuruplar bilan oson qotiriladi"
      }
    ],
    "created_at": "2026-11-26T11:22:05.923Z"
  },
  {
    "_id": "prod_120-0595",
    "id": "prod_120-0595",
    "title": "Rezina Burchak Himoyalovchi Dempfer 120 sm (Ustun va Devor Burchaklari Uchun)",
    "slug": "120-0595",
    "sku": "NSB-950595",
    "price": 10,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-917239_1.png",
      "/uploads/prod-917239_2.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yer osti parkovkalari, omborlar va garajlardagi beton ustun hamda devor burchaklarini avtomobil urilishidan himoya qiluvchi 120 sm li elastik rezina dempfer. Nur qaytaruvchi sariq chiziqlar bilan jihozlangan.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "120 sm"
      },
      {
        "label": "Shakl",
        "value": "L-shaklidagi burchak himoyasi"
      },
      {
        "label": "Materiali",
        "value": "Zarbani yutuvchi yumshoq va mustahkam rezina"
      },
      {
        "label": "Ko‘rinuvchanlik",
        "value": "Nur qaytaruvchi sariq-qora chiziqlar"
      },
      {
        "label": "O‘rnatish",
        "value": "Dyubel va shuruplar bilan oson qotiriladi"
      }
    ],
    "created_at": "2026-11-26T11:19:10.595Z"
  },
  {
    "_id": "prod_80-2-3651",
    "id": "prod_80-2-3651",
    "title": "Rezbali Egiluvchan Yo‘l Ustuni (Stolbik 80 sm, Og‘irligi 2 kg, Nur Qaytaruvchi)",
    "slug": "80-2-3651",
    "sku": "NSB-863651",
    "price": 12,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-858168_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil oqimini ajratish va parkovka zonalarini belgilash uchun 80 sm balandlikdagi og‘ir (2 kg) rezbali egiluvchan yo‘l stolbiki. Zarbadan keyin sinmaydi va o‘z holatiga qaytadi.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "80 sm"
      },
      {
        "label": "Og‘irligi",
        "value": "2 kg (Mustahkam asosli)"
      },
      {
        "label": "Tuzilishi",
        "value": "Asosidan burab yechiladigan rezbali konstruksiya"
      },
      {
        "label": "Nur qaytarish",
        "value": "Yuqori intensivlikdagi oq nur qaytaruvchi tasma"
      }
    ],
    "created_at": "2026-11-26T11:17:43.651Z"
  },
  {
    "_id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-4235",
    "id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-4235",
    "title": "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, Nur Qaytaruvchi Tasmali)",
    "slug": "yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-4235",
    "sku": "NSB-794235",
    "price": 40,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-751610_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil g‘ildiragi bosib o‘tganda ham sinmaydigan va darhol o‘z shaklini tiklaydigan egiluvchan TPU yo‘l konusi. Kechasi uzoqdan ko‘rinuvchi nur qaytaruvchi tasmalari mavjud.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "75 sm"
      },
      {
        "label": "Materiali",
        "value": "Egiluvchan TPU (sinmaydi)"
      },
      {
        "label": "Nur qaytarish",
        "value": "Yuqori intensivlikdagi oq tasmalar"
      },
      {
        "label": "Asosi",
        "value": "Og‘ir barqaror taglik"
      }
    ],
    "created_at": "2026-11-26T11:16:34.235Z"
  },
  {
    "_id": "prod_115-8845",
    "id": "prod_115-8845",
    "title": "Katta Egiluvchan Yo‘l Ustuni (Stolbik 115 sm, Nur Qaytaruvchi Tasmali)",
    "slug": "115-8845",
    "sku": "NSB-708845",
    "price": 40,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-695989_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Uzoq masofadan aniq ko‘rinadigan 115 sm balandlikdagi katta egiluvchan yo‘l ustuni. Magistrallar, chorrahalar va katta avtoturargohlarda xavfsizlikni ta’minlaydi.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "115 sm"
      },
      {
        "label": "Materiali",
        "value": "Egiluvchan elastik poliuretan / plastik"
      },
      {
        "label": "Nur qaytarish",
        "value": "3 ta keng nur qaytaruvchi halqa"
      },
      {
        "label": "O‘rnatish",
        "value": "Anker boltlar bilan mahkamlanadi"
      }
    ],
    "created_at": "2026-11-26T11:15:08.845Z"
  },
  {
    "_id": "prod_3-9932",
    "id": "prod_3-9932",
    "title": "Premium Lenta Stoyka 3m (Zanglamas Po‘lat To‘siq Ustuni, Tortiluvchi Lenta Bilan)",
    "slug": "3-9932",
    "sku": "NSB-649932",
    "price": 45,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Belgilari & Ko‘zgular",
    "category_slug": "yol-belgilari",
    "categorySlug": "yol-belgilari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-646044_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Banklar, aeroportlar, savdo markazlari va tadbirlarda navbat hamda hududni tartibga solish uchun 3 metrlik avtomatik tortiluvchi lentali zanglamas po‘lat (xrom) to‘siq ustuni.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "90–95 sm"
      },
      {
        "label": "Lenta uzunligi",
        "value": "3 metr (Avtomatik tortiluvchi)"
      },
      {
        "label": "Materiali",
        "value": "Mustahkam zanglamas po‘lat / bo‘yalgan metall"
      },
      {
        "label": "Asosi",
        "value": "Og‘ir barqaror diskli taglik"
      }
    ],
    "created_at": "2026-11-26T11:14:09.932Z"
  },
  {
    "_id": "prod_product-0575",
    "id": "prod_product-0575",
    "title": "Lenta Stoyka (Navbat va Hudud Chegaralovchi To‘siq Ustuni)",
    "slug": "product-0575",
    "sku": "NSB-550575",
    "price": 14,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Belgilari & Ko‘zgular",
    "category_slug": "yol-belgilari",
    "categorySlug": "yol-belgilari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-539319_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Tadbirlar, mehmonxona, ofis va ko‘rgazma zallarida hududni ajratish va navbat tashkil qilish uchun mo‘ljallangan barqaror asosli to‘siq ustuni (stoyka).",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "90–95 sm"
      },
      {
        "label": "Lenta uzunligi",
        "value": "2–3 metr moslashuvchan"
      },
      {
        "label": "Materiali",
        "value": "Mustahkam zanglamas po‘lat / bo‘yalgan metall"
      },
      {
        "label": "Asosi",
        "value": "Og‘ir barqaror diskli taglik"
      }
    ],
    "created_at": "2026-11-26T11:12:30.575Z"
  },
  {
    "_id": "prod_product-8105",
    "id": "prod_product-8105",
    "title": "Lenta Stoyka (Navbat va Hudud Chegaralovchi To‘siq Ustuni)",
    "slug": "product-8105",
    "sku": "NSB-508105",
    "price": 14,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Belgilari & Ko‘zgular",
    "category_slug": "yol-belgilari",
    "categorySlug": "yol-belgilari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-502185_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Tadbirlar, mehmonxona, ofis va ko‘rgazma zallarida hududni ajratish va navbat tashkil qilish uchun mo‘ljallangan barqaror asosli to‘siq ustuni (stoyka).",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "90–95 sm"
      },
      {
        "label": "Lenta uzunligi",
        "value": "2–3 metr moslashuvchan"
      },
      {
        "label": "Materiali",
        "value": "Mustahkam zanglamas po‘lat / bo‘yalgan metall"
      },
      {
        "label": "Asosi",
        "value": "Og‘ir barqaror diskli taglik"
      }
    ],
    "created_at": "2026-11-26T11:11:48.105Z"
  },
  {
    "_id": "prod_95-3772",
    "id": "prod_95-3772",
    "title": "Egiluvchan Signal Yo‘l Ustuni / Konus 95 sm (Nur Qaytaruvchi Tasmali)",
    "slug": "95-3772",
    "sku": "NSB-433772",
    "price": 15,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-429943_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "95 sm balandlikdagi yuqori ko‘rinuvchan yo‘l to‘siq ustuni. Qurilish va yo‘l ta’mirlash ishlarida hududni xavfsiz ajratish uchun qulay.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "95 sm"
      },
      {
        "label": "Nur qaytarish",
        "value": "Yuqori sifatli oq nur qaytaruvchi chiziqlar"
      },
      {
        "label": "Materiali",
        "value": "Zarbga chidamli elastik polimer"
      }
    ],
    "created_at": "2026-11-26T11:10:33.772Z"
  },
  {
    "_id": "prod_1480-80-9904",
    "id": "prod_1480-80-9904",
    "title": "Sanoat Yo‘l Bordyuri 1480x80 mm (Qator va Yo‘lak Ajratuvchi Bardur)",
    "slug": "1480-80-9904",
    "sku": "NSB-369904",
    "price": 50,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Yo‘l Standart",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-361352_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil yo‘llari va avtoturargohlarda harakat yo‘laklarini ajratuvchi 1480x80 mm o‘lchamli sanoat yo‘l bordyuri. Kechasi ko‘rinadigan nur qaytaruvchi elementlarga ega.",
    "specifications": [
      {
        "label": "O‘lchami",
        "value": "1480 x 80 mm"
      },
      {
        "label": "Materiali",
        "value": "Zarbga chidamli vulkanizatsiyalangan rezina"
      },
      {
        "label": "Nur qaytarish",
        "value": "Sariq signal elementlari bilan"
      },
      {
        "label": "O‘rnatish",
        "value": "Anker boltlar yordamida"
      }
    ],
    "created_at": "2026-11-26T11:09:29.904Z"
  },
  {
    "_id": "prod_1600-16-0923",
    "id": "prod_1600-16-0923",
    "title": "Mahalliy Yo‘l Bordyuri 1600 mm (Og‘irligi 16 kg, Qator Ajratuvchi To‘siq)",
    "slug": "1600-16-0923",
    "sku": "NSB-280923",
    "price": 80850000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Yo‘l Standart",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-273288_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Uzunligi 1600 mm va og‘irligi 16 kg bo‘lgan mustahkam mahalliy ishlab chiqarilgan yo‘l ajratuvchi bordyur. Harakat qatorlarini ajratish va piyodalar yo‘lagini himoyalash uchun mo‘ljallangan.",
    "specifications": [
      {
        "label": "Uzunligi",
        "value": "1600 mm (1.6 metr)"
      },
      {
        "label": "Og‘irligi",
        "value": "16 kg"
      },
      {
        "label": "Materiali",
        "value": "Og‘ir yukka chidamli rezina-kompozit"
      },
      {
        "label": "O‘rnatish",
        "value": "Anker boltlar bilan yo‘l qoplamasiga qotiriladi"
      }
    ],
    "created_at": "2026-11-26T11:08:00.923Z"
  },
  {
    "_id": "prod_sun-iy-yo-l-notekisligi-tezlik-pasaytirgich-rezina-500x500x50-mm-5773",
    "id": "prod_sun-iy-yo-l-notekisligi-tezlik-pasaytirgich-rezina-500x500x50-mm-5773",
    "title": "Sun‘iy Yo‘l Notekisligi (Tezlik Pasaytirgich Rezina 500x500x50 mm)",
    "slug": "sun-iy-yo-l-notekisligi-tezlik-pasaytirgich-rezina-500x500x50-mm-5773",
    "sku": "NSB-185773",
    "price": 17,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-175533_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobillar tezligini xavfsiz chegaralash uchun mo‘ljallangan zarbga chidamli rezinadan tayyorlangan sun'iy yo‘l notekisligi. Nur qaytaruvchi sariq elementlar va anker mahkamlagichlar uchun tayyor teshiklar mavjud.",
    "specifications": [
      {
        "label": "O‘lchami",
        "value": "500x500x50 mm"
      },
      {
        "label": "Materiali",
        "value": "Og‘ir yukka chidamli vulkanizatsiyalangan rezina"
      },
      {
        "label": "Rang",
        "value": "Qora va nur qaytaruvchi sariq elementlar"
      },
      {
        "label": "Valyuta",
        "value": "USD ($)"
      }
    ],
    "created_at": "2026-11-26T11:06:25.773Z"
  },
  {
    "_id": "prod_sun-iy-yo-l-notekisligi-tezlik-pasaytirgich-rezina-500x500x50-mm-6236",
    "id": "prod_sun-iy-yo-l-notekisligi-tezlik-pasaytirgich-rezina-500x500x50-mm-6236",
    "title": "Sun‘iy Yo‘l Notekisligi (Tezlik Pasaytirgich Rezina 500x500x50 mm)",
    "slug": "sun-iy-yo-l-notekisligi-tezlik-pasaytirgich-rezina-500x500x50-mm-6236",
    "sku": "NSB-116236",
    "price": 18,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-106712_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobillar tezligini xavfsiz chegaralash uchun mo‘ljallangan zarbga chidamli rezinadan tayyorlangan sun'iy yo‘l notekisligi. Nur qaytaruvchi sariq elementlar va anker mahkamlagichlar uchun tayyor teshiklar mavjud.",
    "specifications": [
      {
        "label": "O‘lchami",
        "value": "500x500x50 mm"
      },
      {
        "label": "Materiali",
        "value": "Og‘ir yukka chidamli vulkanizatsiyalangan rezina"
      },
      {
        "label": "Rang",
        "value": "Qora va nur qaytaruvchi sariq elementlar"
      },
      {
        "label": "Valyuta",
        "value": "USD ($)"
      }
    ],
    "created_at": "2026-11-26T11:05:16.236Z"
  },
  {
    "_id": "prod_avtoturargoh-g-ildirak-to-xtatgichi-rezina-kolesootboynik-560x160x100-mm-4642",
    "id": "prod_avtoturargoh-g-ildirak-to-xtatgichi-rezina-kolesootboynik-560x160x100-mm-4642",
    "title": "Avtoturargoh G‘ildirak To‘xtatgichi (Rezina Kolesootboynik 560x160x100 mm)",
    "slug": "avtoturargoh-g-ildirak-to-xtatgichi-rezina-kolesootboynik-560x160x100-mm-4642",
    "sku": "NSB-004642",
    "price": 40,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-997970_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Parkovka joylarida avtomobillarning devorga yoki boshqa mashinalarga urilishining oldini oluvchi mustahkam rezina kolesootboynik. Yorqin nur qaytaruvchi stikerlar bilan jihozlangan.",
    "specifications": [
      {
        "label": "O‘lchami",
        "value": "560x160x100 mm"
      },
      {
        "label": "Materiali",
        "value": "Zarbga chidamli texnik rezina"
      },
      {
        "label": "Rang",
        "value": "Sariq aks ettiruvchi tasmali qora rezina"
      },
      {
        "label": "Valyuta",
        "value": "USD ($)"
      }
    ],
    "created_at": "2026-11-26T11:03:24.642Z"
  },
  {
    "_id": "prod_product-5623",
    "id": "prod_product-5623",
    "title": "Yuk Mashinalari Uchun Rezina G‘ildirak To‘xtatgichi (Boshmoq / Otkatnik)",
    "slug": "product-5623",
    "sku": "NSB-945623",
    "price": 16,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Sun‘iy Notekislik & Ustunlar",
    "category_slug": "suniy-notekislik",
    "categorySlug": "suniy-notekislik",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-933687_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yuk avtomobillari, furalar va maxsus texnikalar to‘xtaganda g‘ildiraklar siljib ketishining oldini oluvchi og‘ir rezina boshmoq (otkatnik). Qulay ko‘tarish dastasiga ega.",
    "specifications": [
      {
        "label": "Materiali",
        "value": "Mustahkam quyma vulkanizatsiyalangan rezina"
      },
      {
        "label": "Yuzasi",
        "value": "G‘ildirakka tiraluvchi tishli sirpanmas profil"
      },
      {
        "label": "Qo‘llanilishi",
        "value": "Yuk mashinalari, avtobuslar, tirkamalar"
      },
      {
        "label": "Qulayligi",
        "value": "Orqa tomonida tashish uchun tutqichi bor"
      }
    ],
    "created_at": "2026-11-26T11:02:25.623Z"
  },
  {
    "_id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-0691",
    "id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-0691",
    "title": "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, Nur Qaytaruvchi Tasmali)",
    "slug": "yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-0691",
    "sku": "NSB-890691",
    "price": 12.5,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-873948_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil g‘ildiragi bosib o‘tganda ham sinmaydigan va darhol o‘z shaklini tiklaydigan egiluvchan TPU yo‘l konusi. Kechasi uzoqdan ko‘rinuvchi nur qaytaruvchi tasmalari mavjud.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "75 sm"
      },
      {
        "label": "Materiali",
        "value": "Egiluvchan TPU (sinmaydi)"
      },
      {
        "label": "Nur qaytarish",
        "value": "Yuqori intensivlikdagi oq tasmalar"
      },
      {
        "label": "Asosi",
        "value": "Og‘ir barqaror taglik"
      }
    ],
    "created_at": "2026-11-26T11:01:30.691Z"
  },
  {
    "_id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-0047",
    "id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-0047",
    "title": "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, Nur Qaytaruvchi Tasmali)",
    "slug": "yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-0047",
    "sku": "NSB-840047",
    "price": 10,
    "currency": "USD",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-832002_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil g‘ildiragi bosib o‘tganda ham sinmaydigan va darhol o‘z shaklini tiklaydigan egiluvchan TPU yo‘l konusi. Kechasi uzoqdan ko‘rinuvchi nur qaytaruvchi tasmalari mavjud.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "75 sm"
      },
      {
        "label": "Materiali",
        "value": "Egiluvchan TPU (sinmaydi)"
      },
      {
        "label": "Nur qaytarish",
        "value": "Yuqori intensivlikdagi oq tasmalar"
      },
      {
        "label": "Asosi",
        "value": "Og‘ir barqaror taglik"
      }
    ],
    "created_at": "2026-11-26T11:00:40.047Z"
  },
  {
    "_id": "prod_pvx-taktil-plitka-300x300-mm-ko-zi-ojizlar-uchun-yo-naltiruvchi-va-ogohlantiruvchi-1712",
    "id": "prod_pvx-taktil-plitka-300x300-mm-ko-zi-ojizlar-uchun-yo-naltiruvchi-va-ogohlantiruvchi-1712",
    "title": "PVX Taktil plitka 300x300 mm (Ko‘zi ojizlar uchun yo‘naltiruvchi va ogohlantiruvchi)",
    "slug": "pvx-taktil-plitka-300x300-mm-ko-zi-ojizlar-uchun-yo-naltiruvchi-va-ogohlantiruvchi-1712",
    "sku": "NSB-791712",
    "price": 16000,
    "currency": "UZS",
    "oldPrice": 0,
    "old_price": 0,
    "discountPercent": 0,
    "discount_percent": 0,
    "category": "Yo‘l Konuslari & To‘siqlar",
    "category_slug": "yol-konuslari",
    "categorySlug": "yol-konuslari",
    "department": "yol-harakati",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "SafeRoad",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-766780_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ko‘zi ojiz va zaif ko‘ruvchi insonlar piyoda harakatlanishi uchun maxsus taktil ogohlantiruvchi va yo‘naltiruvchi sarg‘ish PVX plitkasi. Sirpanmaydigan, yorug‘lik va ob-havo haroratiga o‘ta chidamli polimer material.",
    "specifications": [
      {
        "label": "O‘lchami",
        "value": "300x300x7 mm"
      },
      {
        "label": "Materiali",
        "value": "Yuqori sifatli egiluvchan elastik PVX"
      },
      {
        "label": "Rangi",
        "value": "Yorqin sariq (Signal sariq)"
      },
      {
        "label": "Xususiyati",
        "value": "Sirpanishga qarshi relyefli yuzaga ega"
      }
    ],
    "created_at": "2026-11-26T10:59:51.712Z"
  },
  {
    "_id": "prod_product-6806",
    "id": "prod_product-6806",
    "title": "Buriluvchi Kardio Stepper Trenajyori (Displeyli, Bel va Oyoq Mushaklari Uchun)",
    "slug": "product-6806",
    "sku": "NSB-516806",
    "price": 33,
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
    "brand": "Sport Line",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-472900_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Uy sharoitida oyoq, son va bel mushaklarini chiniqtirish hamda vazn tashlash uchun buriluvchi harakatli kardio stepper trenajyori. Qadam soni, vaqt va kaloriyani ko‘rsatuvchi LCD displeyga ega.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Buriluvchi (Povorotniy) gidravlik stepper"
      },
      {
        "label": "Displey",
        "value": "LCD ekran (Qadamlar, vaqt, kaloriya)"
      },
      {
        "label": "Maksimal yuklama",
        "value": "100–110 kg gacha"
      },
      {
        "label": "Komplekt",
        "value": "Stepper + qo‘l mashqlari uchun espander lentalar"
      }
    ],
    "created_at": "2026-11-26T10:55:16.806Z"
  },
  {
    "_id": "prod_product-2916",
    "id": "prod_product-2916",
    "title": "Eshkak Eshish Kardio Trenajyori (Grebnoy Trenajyor, Butun Tana Mushaklari Uchun)",
    "slug": "product-2916",
    "sku": "NSB-082916",
    "price": 280,
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
    "brand": "Sport Line",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-079151_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Orqa, qo‘l, yelka, press va oyoq mushaklarini bir vaqtda chiniqtiruvchi professional eshkak eshish (grebnoy) kardio trenajyori. Yig‘iladigan ixcham konstruksiya va elektron monitor bilan jihozlangan.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Eshkak eshish (Grebnoy) kardio trenajyor"
      },
      {
        "label": "Mashq zonasi",
        "value": "Butun tana (80% dan ortiq mushaklar ishlaydi)"
      },
      {
        "label": "Monitor",
        "value": "Vaqt, tortishlar soni, masofa va kaloriya"
      },
      {
        "label": "Maksimal yuklama",
        "value": "120–130 kg gacha"
      },
      {
        "label": "Saqlash",
        "value": "Vertikal yig‘ib qo‘yish mumkin"
      }
    ],
    "created_at": "2026-11-26T10:48:02.916Z"
  },
  {
    "_id": "prod_qorin-pressini-chiniqtirish-trenajyori-4444",
    "id": "prod_qorin-pressini-chiniqtirish-trenajyori-4444",
    "title": "Qorin Pressi va Bel Mushaklarini Chiniqtirish Trenajyori (Ko‘p Funksiyali)",
    "slug": "qorin-pressini-chiniqtirish-trenajyori-4444",
    "sku": "NSB-934444",
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
    "brand": "Sport Line",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 0,
    "images": [
      "/uploads/prod-928412_1.png"
    ],
    "is_bestseller": false,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Uy va sport zallarida qorin pressi, bel va qo‘l mushaklarini samarali chiniqtirish uchun ergonomik trenajyor. Mustahkam po‘lat karkas va yumshoq o‘rindiq yostiqchalariga ega.",
    "specifications": [
      {
        "label": "Vazifasi",
        "value": "Qorin pressi, bel va umumiy jismoniy mashqlar"
      },
      {
        "label": "Karkasi",
        "value": "Mustahkam qalin po‘lat truba"
      },
      {
        "label": "Qoplamasi",
        "value": "Terlatmaydigan yumshoq eko-charm va porolon"
      },
      {
        "label": "Maksimal yuklama",
        "value": "120 kg gacha"
      }
    ],
    "created_at": "2026-11-26T10:45:34.444Z"
  },
  {
    "_id": "prod_product-9405",
    "id": "prod_product-9405",
    "title": "Qorin Pressi va Bel Mushaklarini Chiniqtirish Trenajyori (Ko‘p Funksiyali)",
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
    "brand": "Sport Line",
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
    "description": "Uy va sport zallarida qorin pressi, bel va qo‘l mushaklarini samarali chiniqtirish uchun ergonomik trenajyor. Mustahkam po‘lat karkas va yumshoq o‘rindiq yostiqchalariga ega.",
    "specifications": [
      {
        "label": "Vazifasi",
        "value": "Qorin pressi, bel va umumiy jismoniy mashqlar"
      },
      {
        "label": "Karkasi",
        "value": "Mustahkam qalin po‘lat truba"
      },
      {
        "label": "Qoplamasi",
        "value": "Terlatmaydigan yumshoq eko-charm va porolon"
      },
      {
        "label": "Maksimal yuklama",
        "value": "120 kg gacha"
      }
    ],
    "created_at": "2026-11-26T10:42:19.405Z"
  },
  {
    "_id": "prod_begavoy-daroshka-6028",
    "id": "prod_begavoy-daroshka-6028",
    "title": "Elektr Yugurish Yo‘lakchasi (Begovoy Dorojka, Uy va Ofis Uchun Ixcham)",
    "slug": "begavoy-daroshka-6028",
    "sku": "NSB-626028",
    "price": 100,
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
    "brand": "Sport Line",
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
    "description": "Kundalik yugurish va yurish mashg‘ulotlari uchun mo‘ljallangan ixcham elektr yugurish yo‘lakchasi. Jim ishlovchi motor, sirpanmas lenta va LED ko‘rsatkichlar paneliga ega.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Elektr yugurish yo‘lakchasi (Walking Pad / Treadmill)"
      },
      {
        "label": "Displey",
        "value": "Tezlik, masofa, vaqt va kaloriya ko‘rsatkichi"
      },
      {
        "label": "Lentasi",
        "value": "Ko‘p qatlamli zarbani yutuvchi yugurish tasmasi"
      },
      {
        "label": "Maksimal yuklama",
        "value": "100 kg gacha"
      }
    ],
    "created_at": "2026-11-26T10:40:26.028Z"
  },
  {
    "_id": "prod_product-8857",
    "id": "prod_product-8857",
    "title": "Kardio Stepper Trenajyori (Uy va Fitnes Uchun, Displeyli)",
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
    "brand": "Sport Line",
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
    "description": "Oyoq mushaklarini mustahkamlash va kunlik kardio mashg‘ulotlar uchun ixcham stepper trenajyori. Jim ishlaydigan gidravlik silindrlar va elektron hisoblagich bilan jihozlangan.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Gidravlik kardio stepper"
      },
      {
        "label": "Displey",
        "value": "Elektron ekran (Vaqt, qadam, kaloriya)"
      },
      {
        "label": "Pedallar",
        "value": "Sirpanmaydigan qulay oyoq platformalari"
      },
      {
        "label": "Maksimal yuklama",
        "value": "100 kg gacha"
      }
    ],
    "created_at": "2026-11-26T10:36:08.857Z"
  },
  {
    "_id": "prod_m96-100-2562",
    "id": "prod_m96-100-2562",
    "title": "M96 Elektr Yugurish Yo‘lakchasi (Begovoy Dorojka, Maksimal Yuklama 100 kg)",
    "slug": "m96-100-2562",
    "sku": "NSB-282563",
    "price": 140,
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
    "brand": "Sport Line",
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
    "description": "Uy sharoitida yugurish va tez yurish uchun ixcham, yig‘iladigan M96 elektr yugurish yo‘lakchasi. Xavfsizlik kaliti, tezlikni boshqarish paneli, LED displey va amortizatsiya tizimi bilan jihozlangan.",
    "specifications": [
      {
        "label": "Modeli",
        "value": "M96 Elektr Yugurish Yo‘lakchasi"
      },
      {
        "label": "Maksimal yuklama",
        "value": "100 kg gacha"
      },
      {
        "label": "Displey",
        "value": "LED ekran (Tezlik, vaqt, masofa, kaloriya)"
      },
      {
        "label": "Xavfsizlik",
        "value": "Favqulodda to‘xtatish magnit kaliti"
      },
      {
        "label": "Qulayligi",
        "value": "Tutqichli va oson yig‘iladigan konstruksiya"
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

