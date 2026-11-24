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
    "_id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-4561",
    "id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-4561",
    "title": "4&1 Professional Akkumulyatorli Asboblar To‘plami (Gaykavyort, Balgarka, Drel, Perforator)",
    "slug": "4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-4561",
    "sku": "NSB-494561",
    "price": 895000,
    "oldPrice": 1029250,
    "old_price": 1029250,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Asboblar To‘plamlari (Naborlar)",
    "category_slug": "asboblar-to-plami",
    "categorySlug": "drellar-shurupovyort",
    "department": "Asboblar To‘plamlari (Naborlar)",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Universal Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-492456_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Barcha kerakli qurilish va ta'mirlash asboblari bir to'plamda. Mustahkam keys, kuchli cho'tkasiz motorlar va sig'imli akkumulyatorlar bilan.",
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
    "created_at": "2026-11-24T11:41:34.561Z",
    "tags": [
      "nabor",
      "4v1",
      "dewalt",
      "professional",
      "asboblar"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-4542",
    "id": "prod_universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-4542",
    "title": "Universal Akkumulyatorli Maysa O‘radigan Trimmer (G‘ildirakli va diskli)",
    "slug": "universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-4542",
    "sku": "NSB-494542",
    "price": 440000,
    "oldPrice": 506000,
    "old_price": 506000,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Arralar & Bog‘ Texnikasi",
    "category_slug": "arralar-elektr-uskunalar",
    "categorySlug": "arralar-uskunalar",
    "department": "Arralar & Bog‘ Texnikasi",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "GreenGarden",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-480962_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Bog' va hovli maysazorlarini o'rish uchun qulay g'ildirakli akkumulyatorli trimmer. Metall pichoqlar va disk bilan jihozlangan.",
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
    "created_at": "2026-11-24T11:41:34.542Z",
    "tags": [
      "trimmer",
      "bog'",
      "maysa",
      "greencut",
      "akkumulyatorli"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-4492",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-4492",
    "title": "Akkumulyatorli Zarbli Drel-shurupovyort DeWalt 72V (Keys va 2 ta batareya)",
    "slug": "akkumulyatorli-zarbli-drel-shurupovyort-dewalt-72v-keys-va-2-ta-batareya-4492",
    "sku": "NSB-494492",
    "price": 330000,
    "oldPrice": 379500,
    "old_price": 379500,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-480959_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Zarbli funksiyaga ega kuchli drel-shurupovyort. 2 ta batareya, tezkor zaryadlovchi va sifatli qattiq keys bilan.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:41:34.492Z",
    "tags": [
      "drel",
      "shurupovyort",
      "dewalt",
      "72v",
      "zarbli"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-4408",
    "id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-4408",
    "title": "Turbo Texnik Sanoat Feni 2000W (Haroratni rostlagichli)",
    "slug": "turbo-texnik-sanoat-feni-2000w-haroratni-rostlagichli-4408",
    "sku": "NSB-494408",
    "price": 92000,
    "oldPrice": 105800,
    "old_price": 105800,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "lazer-qol-asboblari",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "TurboPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-480968_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "2000W quvvatli sanoat feni. Haroratni ikki bosqichli boshqarish, trubalarni eritish, payvandlash va quritish ishlari uchun.",
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
    "created_at": "2026-11-24T11:41:34.408Z",
    "tags": [
      "fen",
      "sanoat feni",
      "texnik fen",
      "2000w"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_slj-elektr-toshli-stol-charxi-ikki-tomonlama-toshli-charxlash-uskunasi-4280",
    "id": "prod_slj-elektr-toshli-stol-charxi-ikki-tomonlama-toshli-charxlash-uskunasi-4280",
    "title": "SLJ Elektr Toshli Stol Charxi (Ikki tomonlama charxlash uskunasi)",
    "slug": "slj-elektr-toshli-stol-charxi-ikki-tomonlama-charxlash-uskunasi-4280",
    "sku": "NSB-494280",
    "price": 135000,
    "oldPrice": 155250,
    "old_price": 155250,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Balgarkalar & Silliqlash",
    "category_slug": "balgarka-shlifovka",
    "categorySlug": "balgarkalar-ushm",
    "department": "Balgarkalar & Silliqlash",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "SLJ",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-480963_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Pichoq, bolta, burg'u va metall buyumlarni charxlash uchun mustahkam ikki diskli stol charxi.",
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
    "created_at": "2026-11-24T11:41:34.280Z",
    "tags": [
      "charx",
      "stol charxi",
      "slj",
      "silliqlash"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_2-1-akkumulyatorli-bog-va-qurilish-to-plami-mini-zanjirli-arra-bog-qaychisi-0941",
    "id": "prod_2-1-akkumulyatorli-bog-va-qurilish-to-plami-mini-zanjirli-arra-bog-qaychisi-0941",
    "title": "2&1 Akkumulyatorli Bog‘ To‘plami (Mini Zanjirli Arra + Bog‘ Qaychisi)",
    "slug": "2-1-akkumulyatorli-bog-to-plami-mini-zanjirli-arra-bog-qaychisi-0941",
    "sku": "NSB-480941",
    "price": 569000,
    "oldPrice": 654350,
    "old_price": 654350,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Arralar & Bog‘ Texnikasi",
    "category_slug": "arralar-elektr-uskunalar",
    "categorySlug": "arralar-uskunalar",
    "department": "Arralar & Bog‘ Texnikasi",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "GardenPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-458603_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Daraxt shoxlarini kesish va bog' parvarishi uchun yengil va qulay mini zanjirli arra va elektr sekator to'plami.",
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
    "created_at": "2026-11-24T11:41:20.941Z",
    "tags": [
      "bog'",
      "mini arra",
      "sekator",
      "qaychi",
      "2v1"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_professional-akkumulyatorli-zarbli-gaykavyort-kuchli-cho-tkasiz-motor-0903",
    "id": "prod_professional-akkumulyatorli-zarbli-gaykavyort-kuchli-cho-tkasiz-motor-0903",
    "title": "Professional Akkumulyatorli Zarbli Gaykavyort (Cho‘tkasiz Motor)",
    "slug": "professional-akkumulyatorli-zarbli-gaykavyort-cho-tkasiz-motor-0903",
    "sku": "NSB-480903",
    "price": 164000,
    "oldPrice": 188600,
    "old_price": 188600,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "ProTools",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-458909_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil g'ildiraklari va og'ir metall konstruksiyalarni qotirish uchun yuqori buralish momentiga ega zarbli gaykavyort.",
    "specifications": [
      {
        "label": "Aylanma moment",
        "value": "350-450 Nm kuchli zarbli moment"
      },
      {
        "label": "Patron o‘lchami",
        "value": "1/2 dyuym (12.7 mm) standart kvadrat"
      },
      {
        "label": "Tezlikni sozlash",
        "value": "Elektron 3 pog‘onali tezlik va revers"
      },
      {
        "label": "Yoritgich",
        "value": "Ish hududini yorituvchi LED diod"
      }
    ],
    "created_at": "2026-11-24T11:41:20.903Z",
    "tags": [
      "gaykavyort",
      "zarbli",
      "cho'tkasiz",
      "avto asbob"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-9178",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-9178",
    "title": "Kompakt Akkumulyatorli Shurupovyort 12V (Uy va ustaxona uchun)",
    "slug": "kompakt-akkumulyatorli-shurupovyort-12v-uy-va-ustaxona-uchun-9178",
    "sku": "NSB-459178",
    "price": 169000,
    "oldPrice": 194350,
    "old_price": 194350,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-449095_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Kundalik uy ro'zg'or va mebel yig'ish ishlari uchun yengil, qulay va ixcham akkumulyatorli shurupovyort.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:40:59.178Z",
    "tags": [
      "shurupovyort",
      "12v",
      "kompakt",
      "mebel"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8586",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8586",
    "title": "Standart Akkumulyatorli Drel-shurupovyort 12V (Zaryadlovchi bilan)",
    "slug": "standart-akkumulyatorli-drel-shurupovyort-12v-zaryadlovchi-bilan-8586",
    "sku": "NSB-458586",
    "price": 130000,
    "oldPrice": 149500,
    "old_price": 149500,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-449918_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Tezkor patron va teskari (revers) aylanish funksiyasiga ega ishonchli 12V shurupovyort.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:40:58.586Z",
    "tags": [
      "drel",
      "shurupovyort",
      "12v",
      "standart"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-9884",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-9884",
    "title": "Zarbli Drel-shurupovyort To'plami (Ko'k keys, 2 batareya va aksessuarlar)",
    "slug": "zarbli-drel-shurupovyort-to-plami-ko-k-keys-2-batareya-va-aksessuarlar-9884",
    "sku": "NSB-449884",
    "price": 825000,
    "oldPrice": 948750,
    "old_price": 948750,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-428458_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ko'k rangli mustahkam keysda joylashgan to'liq drel komplekti: bitlar, burg'ular va 2 ta litiy-ion batareya.",
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
    "created_at": "2026-11-24T11:40:49.884Z",
    "tags": [
      "drel",
      "to'plam",
      "keys",
      "burg'ulash"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-9906",
    "id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-9906",
    "title": "4&1 Super Master Akkumulyatorli Asboblar To‘plami (To'liq Komplekt)",
    "slug": "4-1-super-master-akkumulyatorli-asboblar-to-plami-to-liq-komplekt-9906",
    "sku": "NSB-439906",
    "price": 895000,
    "oldPrice": 1029250,
    "old_price": 1029250,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Asboblar To‘plamlari (Naborlar)",
    "category_slug": "asboblar-to-plami",
    "categorySlug": "drellar-shurupovyort",
    "department": "Asboblar To‘plamlari (Naborlar)",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Universal Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-411882_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Masterlar uchun maxsus 4&1 akkumulyatorli komplekt: gaykavyort, perforator, burchak silliqlash mashinasi va drel.",
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
    "created_at": "2026-11-24T11:40:39.906Z",
    "tags": [
      "nabor",
      "4v1",
      "master",
      "perforator",
      "balgarka"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-9879",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-9879",
    "title": "Professional Akkumulyatorli Balgarka (USH-M 125 mm, Cho'tkasiz)",
    "slug": "professional-akkumulyatorli-balgarka-ush-m-125-mm-cho-tkasiz-9879",
    "sku": "NSB-439879",
    "price": 460000,
    "oldPrice": 529000,
    "old_price": 529000,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Balgarkalar & Silliqlash",
    "category_slug": "balgarka-shlifovka",
    "categorySlug": "drellar-shurupovyort",
    "department": "Balgarkalar & Silliqlash",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-439355_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Metall va toshlarni kesish, tozalash va silliqlash uchun kuchli cho'tkasiz akkumulyatorli balgarka.",
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
    "created_at": "2026-11-24T11:40:39.879Z",
    "tags": [
      "balgarka",
      "ushm",
      "125mm",
      "silliqlash",
      "akkumulyatorli"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-9731",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-9731",
    "title": "Akkumulyatorli Tsirkulyar Diskli Arra (Dumaloq qo'l arrasi)",
    "slug": "akkumulyatorli-tsirkulyar-diskli-arra-dumaloq-qo-l-arrasi-9731",
    "sku": "NSB-439731",
    "price": 339000,
    "oldPrice": 389850,
    "old_price": 389850,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Arralar & Bog‘ Texnikasi",
    "category_slug": "arralar-elektr-uskunalar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Arralar & Bog‘ Texnikasi",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-439211_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yog'och, fanera va laminat taxtalarni to'g'ri va aniq burchak ostida kesish uchun simsiz diskli arra.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:40:39.731Z",
    "tags": [
      "tsirkulyarka",
      "dumaloq arra",
      "diskli arra",
      "yog'och kesish"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8920",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8920",
    "title": "Universal Shurupovyort 12V To'plami (Plastik keysda)",
    "slug": "universal-shurupovyort-12v-to-plami-plastik-keysda-8920",
    "sku": "NSB-428920",
    "price": 130000,
    "oldPrice": 149500,
    "old_price": 149500,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-411855_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Qulay ixcham plastik qutidagi drel-shurupovyort. 2 ta akkumulyator va asosiy burg'ulash nasadkalari bilan.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:40:28.920Z",
    "tags": [
      "shurupovyort",
      "12v",
      "keys",
      "universal"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-1370",
    "id": "prod_universal-akkumulyatorli-maysa-o-radigan-trimmer-g-ildirakli-va-diskli-1370",
    "title": "Bog‘ va Maysazor Uchun Akkumulyatorli Trimmer (G'ildirakli komplekt)",
    "slug": "bog-va-maysazor-uchun-akkumulyatorli-trimmer-g-ildirakli-komplekt-1370",
    "sku": "NSB-411370",
    "price": 440000,
    "oldPrice": 506000,
    "old_price": 506000,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Arralar & Bog‘ Texnikasi",
    "category_slug": "arralar-elektr-uskunalar",
    "categorySlug": "arralar-uskunalar",
    "department": "Arralar & Bog‘ Texnikasi",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "GreenGarden",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-286227_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Teleskopik tutqichli va qo'shimcha g'ildiraklarga ega akkumulyatorli maysa o'rgich. O't va butalarni oson tozalaydi.",
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
    "created_at": "2026-11-24T11:40:11.370Z",
    "tags": [
      "trimmer",
      "maysa",
      "bog'bon",
      "teleskopik"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_2-1-akkumulyatorli-bog-va-qurilish-to-plami-mini-zanjirli-arra-bog-qaychisi-6488",
    "id": "prod_2-1-akkumulyatorli-bog-va-qurilish-to-plami-mini-zanjirli-arra-bog-qaychisi-6488",
    "title": "2&1 Professional Bog‘bon To‘plami (Akkumulyatorli arra va sekator)",
    "slug": "2-1-professional-bog-bon-to-plami-akkumulyatorli-arra-va-sekator-6488",
    "sku": "NSB-376488",
    "price": 569000,
    "oldPrice": 654350,
    "old_price": 654350,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Arralar & Bog‘ Texnikasi",
    "category_slug": "arralar-elektr-uskunalar",
    "categorySlug": "arralar-uskunalar",
    "department": "Arralar & Bog‘ Texnikasi",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "GardenPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-286063_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Daraxt butash, bog' parvarishi va o'tin tayyorlash uchun mo'ljallangan mini zanjirli arra va elektr qaychi.",
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
    "created_at": "2026-11-24T11:39:36.488Z",
    "tags": [
      "bog'bon",
      "arra",
      "sekator",
      "2v1"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_slj-elektr-toshli-stol-charxi-ikki-tomonlama-toshli-charxlash-uskunasi-6344",
    "id": "prod_slj-elektr-toshli-stol-charxi-ikki-tomonlama-toshli-charxlash-uskunasi-6344",
    "title": "SLJ Professional Stol Charxi (Pichoq va burg'u charxlagich 150W)",
    "slug": "slj-professional-stol-charxi-pichoq-va-burg-u-charxlagich-150w-6344",
    "sku": "NSB-376344",
    "price": 135000,
    "oldPrice": 155250,
    "old_price": 155250,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Balgarkalar & Silliqlash",
    "category_slug": "balgarka-shlifovka",
    "categorySlug": "balgarkalar-ushm",
    "department": "Balgarkalar & Silliqlash",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "SLJ",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-286248_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Tebranishsiz barqaror ishlaydigan ikki diskli stol usti charx uskunasi. Himoya oynalari bilan.",
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
    "created_at": "2026-11-24T11:39:36.344Z",
    "tags": [
      "charx",
      "slj",
      "150w",
      "pichoq charx"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-3621",
    "id": "prod_turbo-texnik-fen-2000w-haroratni-rostlagichli-sanoat-feni-3621",
    "title": "Sanoat Issiqlik Feni 2000W (Harorat sozlagichli texnik fen)",
    "slug": "sanoat-issiqlik-feni-2000w-harorat-sozlagichli-texnik-fen-3621",
    "sku": "NSB-373621",
    "price": 92000,
    "oldPrice": 105800,
    "old_price": 105800,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "lazer-qol-asboblari",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "TurboPro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-320653_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Plastmassa shakllantirish, bo'yoq tozalash va quritish ishlari uchun yuqori haroratli texnik fen.",
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
    "created_at": "2026-11-24T11:39:33.621Z",
    "tags": [
      "fen",
      "texnik fen",
      "2000w",
      "issiqlik"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_professional-akkumulyatorli-zarbli-gaykavyort-kuchli-cho-tkasiz-motor-9701",
    "id": "prod_professional-akkumulyatorli-zarbli-gaykavyort-kuchli-cho-tkasiz-motor-9701",
    "title": "Avtomobil va Qurilish Uchun Akkumulyatorli Zarbli Gaykavyort",
    "slug": "avtomobil-va-qurilish-uchun-akkumulyatorli-zarbli-gaykavyort-9701",
    "sku": "NSB-329701",
    "price": 164000,
    "oldPrice": 188600,
    "old_price": 188600,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "ProTools",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-285866_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Boltlarni oson yechuvchi va qotiruvchi zarbli impulsli mexanizmga ega gaykavyort.",
    "specifications": [
      {
        "label": "Aylanma moment",
        "value": "350-450 Nm kuchli zarbli moment"
      },
      {
        "label": "Patron o‘lchami",
        "value": "1/2 dyuym (12.7 mm) standart kvadrat"
      },
      {
        "label": "Tezlikni sozlash",
        "value": "Elektron 3 pog‘onali tezlik va revers"
      },
      {
        "label": "Yoritgich",
        "value": "Ish hududini yorituvchi LED diod"
      }
    ],
    "created_at": "2026-11-24T11:38:49.701Z",
    "tags": [
      "gaykavyort",
      "zarbli",
      "avto",
      "qurilish"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-9569",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-9569",
    "title": "Akkumulyatorli Drel 12V Mini Nabor (Aksessuarlar to'plami bilan)",
    "slug": "akkumulyatorli-drel-12v-mini-nabor-aksessuarlar-to-plami-bilan-9569",
    "sku": "NSB-299569",
    "price": 130000,
    "oldPrice": 149500,
    "old_price": 149500,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-285943_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Uyda ishlatish uchun zarur bo'lgan barcha mayda asboblar va burg'ular to'plamiga ega ixcham drel.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:38:19.569Z",
    "tags": [
      "drel",
      "12v",
      "mini nabor",
      "uy uchun"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-6046",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-6046",
    "title": "Akkumulyatorli Kuchaytirilgan Shurupovyort 18V (2 ta akkumulyator)",
    "slug": "akkumulyatorli-kuchaytirilgan-shurupovyort-18v-2-ta-akkumulyator-6046",
    "sku": "NSB-286046",
    "price": 169000,
    "oldPrice": 194350,
    "old_price": 194350,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-285439_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Metall va qattiq yog'och bilan ishlash uchun kuchaytirilgan reduktorli 18V drel-shurupovyort.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:38:06.046Z",
    "tags": [
      "shurupovyort",
      "18v",
      "kuchaytirilgan",
      "drel"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-5844",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-5844",
    "title": "Akkumulyatorli Cho‘tkasiz Balgarka (USH-M 125 mm, Yashil korpus)",
    "slug": "akkumulyatorli-cho-tkasiz-balgarka-ush-m-125-mm-yashil-korpus-5844",
    "sku": "NSB-285844",
    "price": 460000,
    "oldPrice": 529000,
    "old_price": 529000,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Balgarkalar & Silliqlash",
    "category_slug": "balgarka-shlifovka",
    "categorySlug": "drellar-shurupovyort",
    "department": "Balgarkalar & Silliqlash",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-282800_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Simsiz, o'ta qulay tutqichli va xavfsiz himoya qoplamali zamonaviy cho'tkasiz burchak silliqlash mashinasi.",
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
    "created_at": "2026-11-24T11:38:05.844Z",
    "tags": [
      "balgarka",
      "ushm",
      "cho'tkasiz",
      "125mm"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-5358",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-5358",
    "title": "Professional Diskli Qo‘l Arrasi (Tsirkulyarka 185 mm)",
    "slug": "professional-diskli-qo-l-arrasi-tsirkulyarka-185-mm-5358",
    "sku": "NSB-285358",
    "price": 339000,
    "oldPrice": 389850,
    "old_price": 389850,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Arralar & Bog‘ Texnikasi",
    "category_slug": "arralar-elektr-uskunalar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Arralar & Bog‘ Texnikasi",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-282416_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Qalin yog'och va qurilish materiallarini tekis arralash uchun kuchli diskli dumaloq arra.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:38:05.358Z",
    "tags": [
      "tsirkulyarka",
      "dumaloq arra",
      "yog'och",
      "diskli"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_drellar-shurupovyortlar-mahsuloti-5339",
    "id": "prod_drellar-shurupovyortlar-mahsuloti-5339",
    "title": "Professional Akkumulyatorli Zarbli Drel To‘plami (Mustahkam keysda)",
    "slug": "professional-akkumulyatorli-zarbli-drel-to-plami-mustahkam-keysda-5339",
    "sku": "NSB-285339",
    "price": 825000,
    "oldPrice": 948750,
    "old_price": 948750,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-282254_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "G'isht va beton devorlarni tesha oladigan zarbli rejimli akkumulyatorli universal drel to'plami.",
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
    "created_at": "2026-11-24T11:38:05.339Z",
    "tags": [
      "drel",
      "zarbli drel",
      "keys",
      "professional"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-5309",
    "id": "prod_4-1-professional-akkumulyatorli-asboblar-to-plami-gaykavyort-balgarka-drel-perforator-5309",
    "title": "4&1 Universal Qurilish va Ta'mirlash Asboblari To‘plami (To'liq keys)",
    "slug": "4-1-universal-qurilish-va-ta-mirlash-asboblari-to-plami-to-liq-keys-5309",
    "sku": "NSB-285309",
    "price": 895000,
    "oldPrice": 1029250,
    "old_price": 1029250,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Asboblar To‘plamlari (Naborlar)",
    "category_slug": "asboblar-to-plami",
    "categorySlug": "drellar-shurupovyort",
    "department": "Asboblar To‘plamlari (Naborlar)",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Universal Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-282288_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Har bir usta va xonadon uchun mukammal 4 ta asbob: perforator, gaykavyort, drel va balgarka bitta katta keysda.",
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
    "created_at": "2026-11-24T11:38:05.309Z",
    "tags": [
      "nabor",
      "4v1",
      "universal",
      "perforator",
      "balgarka"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-5270",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-5270",
    "title": "Yengil Akkumulyatorli Shurupovyort 12V (Ergonomik korpus)",
    "slug": "yengil-akkumulyatorli-shurupovyort-12v-ergonomik-korpus-5270",
    "sku": "NSB-285270",
    "price": 130000,
    "oldPrice": 149500,
    "old_price": 149500,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-282238_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Uzoq vaqt charchamasdan ishlash imkonini beruvchi yengil va qulay tutqichli shurupovyort.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:38:05.270Z",
    "tags": [
      "shurupovyort",
      "12v",
      "yengil",
      "ergonomik"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-5497",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-5497",
    "title": "Uy Ro‘zg‘or Uchun Akkumulyatorli Drel-shurupovyort 12V",
    "slug": "uy-ro-zg-or-uchun-akkumulyatorli-drel-shurupovyort-12v-5497",
    "sku": "NSB-095497",
    "price": 128500,
    "oldPrice": 147775,
    "old_price": 147775,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Drellar & Shurupovyortlar",
    "category_slug": "drellar-shurupovyortlar",
    "categorySlug": "drellar-shurupovyort",
    "department": "Drellar & Shurupovyortlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-018448_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Oddiy va ishonchli boshqaruvga ega shurupovyort. 2 tezlikli uzatmalar qutisi va LED yoritgich.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:34:55.497Z",
    "tags": [
      "drel",
      "shurupovyort",
      "12v",
      "uy ro'zg'or"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_pvc-8457",
    "id": "prod_pvc-8457",
    "title": "PVX Taktil Plitka 300x300 mm (Ko‘zi ojizlar uchun yo‘naltiruvchi va ogohlantiruvchi)",
    "slug": "pvx-taktil-plitka-300x300-mm-ko-zi-ojizlar-uchun-yo-naltiruvchi-va-ogohlantiruvchi-8457",
    "sku": "NSB-078457",
    "price": 16000,
    "oldPrice": 18500,
    "old_price": 18500,
    "discountPercent": 14,
    "discount_percent": 14,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "yol-konuslari",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/taktil-plitka-pvc.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ko'zi ojiz va zaif ko'ruvchi insonlar xavfsiz harakatlanishi uchun maxsus relefli sariq PVX taktil plitka.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Yo‘l & Harakat Xavfsizligi"
      },
      {
        "label": "Toifa",
        "value": "Yo‘l Konuslari & To‘siqlar"
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
    "created_at": "2026-11-24T11:34:38.457Z",
    "tags": [
      "taktil plitka",
      "pvx",
      "yo'l xavfsizligi",
      "sariq"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_1480-80-8376",
    "id": "prod_1480-80-8376",
    "title": "Sanoat Yo‘l Bordyuri 1480x80 mm (Bardur to'sig'i)",
    "slug": "sanoat-yo-l-bordyuri-1480x80-mm-bardur-to-sig-i-8376",
    "sku": "NSB-078376",
    "price": 642500,
    "oldPrice": 738875,
    "old_price": 738875,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-018433_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yo'l va avtoturargohlarni ajratish, piyodalar yo'lagini himoyalash uchun mo'ljallangan mustahkam kompozit bordyur.",
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
    "created_at": "2026-11-24T11:34:38.376Z",
    "tags": [
      "bordyur",
      "yo'l to'sig'i",
      "avtoturargoh",
      "1480x80"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_1-84-15-15-3399",
    "id": "prod_1-84-15-15-3399",
    "title": "Kauchuk Kolesootboynik 1.84m * 15 * 15 sm (G‘ildirak to‘xtatgich)",
    "slug": "kauchuk-kolesootboynik-1-84m-15-15-sm-g-ildirak-to-xtatgich-3399",
    "sku": "NSB-063399",
    "price": 514000,
    "oldPrice": 591100,
    "old_price": 591100,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "suniy-notekislik",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972569_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobillar to'xtash joyida devor va boshqa mashinalarga urilishining oldini oluvchi mustahkam kauchuk to'xtatgich.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Yo‘l & Harakat Xavfsizligi"
      },
      {
        "label": "Toifa",
        "value": "Sun‘iy Notekislik & Ustunlar"
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
    "created_at": "2026-11-24T11:34:23.399Z",
    "tags": [
      "kolesootboynik",
      "g'ildirak to'xtatgich",
      "avtoturargoh",
      "kauchuk"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2487",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2487",
    "title": "Og‘ir Asosli Yo‘l Konusi 75 sm (Egiluvchan, 2 tasmali)",
    "slug": "og-ir-asosli-yo-l-konusi-75-sm-egiluvchan-2-tasmali-2487",
    "sku": "NSB-052487",
    "price": 231300,
    "oldPrice": 265995,
    "old_price": 265995,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-018443_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Shamol va kuchli oqimda ag'darilmaydigan og'ir kauchuk asosli, 2 ta keng nur qaytaruvchi tasmali yo'l konusi.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:34:12.487Z",
    "tags": [
      "konus",
      "yo'l konusi",
      "75sm",
      "og'ir asos",
      "nur qaytaruvchi"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2730",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2730",
    "title": "Signalli Yo‘l Konusi 70 sm (Nur qaytaruvchi chiziqli)",
    "slug": "signalli-yo-l-konusi-70-sm-nur-qaytaruvchi-chiziqli-2730",
    "sku": "NSB-042730",
    "price": 192750,
    "oldPrice": 221662,
    "old_price": 221662,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972431_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yo'l ta'mirlash va avtoturargohlar uchun elastik, ustiga mashina bosganda sinmaydigan yorqin signalli konus.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:34:02.730Z",
    "tags": [
      "konus",
      "70sm",
      "yo'l harakati",
      "signalli"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2375",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2375",
    "title": "Standart Egiluvchan Yo‘l Konusi 50 sm",
    "slug": "standart-egiluvchan-yo-l-konusi-50-sm-2375",
    "sku": "NSB-032375",
    "price": 160625,
    "oldPrice": 184719,
    "old_price": 184719,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-018438_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ixcham va yorqin rangli yo'l harakati xavfsizlik konusi. Nur qaytaruvchi tasma bilan tunda ham yaqqol ko'rinadi.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:52.375Z",
    "tags": [
      "konus",
      "50sm",
      "egiluvchan",
      "yo'l xavfsizligi"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2341",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2341",
    "title": "Og‘ir Rezin Asosli Yo‘l Konusi 75 sm (Shamolga chidamli)",
    "slug": "og-ir-rezin-asosli-yo-l-konusi-75-sm-shamolga-chidamli-2341",
    "sku": "NSB-032341",
    "price": 205600,
    "oldPrice": 236440,
    "old_price": 236440,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972558_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Katta magistral yo'llar va qurilish maydonlari uchun barqaror, mustahkam rezina poydevorli yo'l konusi.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:52.341Z",
    "tags": [
      "konus",
      "75sm",
      "rezin asos",
      "magistral"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8555",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8555",
    "title": "Sariq-Qora Signalli Yo‘l Ustuni 75 sm (Delimiter)",
    "slug": "sariq-qora-signalli-yo-l-ustuni-75-sm-delimiter-8555",
    "sku": "NSB-018555",
    "price": 218450,
    "oldPrice": 251217,
    "old_price": 251217,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-971619_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Qarama-qarshi yo'nalishlarni va xavfli zonalarni ajratuvchi yorqin sariq-qora tasmali ogohlantiruvchi ustun.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:38.555Z",
    "tags": [
      "ustun",
      "stolbik",
      "delimiter",
      "sariq qora"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_3-8536",
    "id": "prod_3-8536",
    "title": "Lenta Stoyka 3m (Xrom to‘siq ustuni tortiluvchi qizil lenta bilan)",
    "slug": "lenta-stoyka-3m-xrom-to-siq-ustuni-tortiluvchi-qizil-lenta-bilan-8536",
    "sku": "NSB-018536",
    "price": 578250,
    "oldPrice": 664988,
    "old_price": 664988,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972363_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Banklar, aeroportlar, mehmonxonalar va tadbirlarda odamlar oqimini tartibga soluvchi sifatli zanglamas metall lenta stoyka.",
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
    "created_at": "2026-11-24T11:33:38.536Z",
    "tags": [
      "lenta stoyka",
      "to'siq ustuni",
      "3m",
      "tartibga solish"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8508",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-8508",
    "title": "Egiluvchan Qizil-Oq Yo‘l Ustuni 75 sm (Stolbik nur qaytaruvchi)",
    "slug": "egiluvchan-qizil-oq-yo-l-ustuni-75-sm-stolbik-nur-qaytaruvchi-8508",
    "sku": "NSB-018508",
    "price": 218450,
    "oldPrice": 251217,
    "old_price": 251217,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972476_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomobil urilganda qayta o'z holiga qaytuvchi egiluvchan poliuretan yo'l ustuni.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:38.508Z",
    "tags": [
      "stolbik",
      "ustun",
      "75sm",
      "egiluvchan"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3328",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3328",
    "title": "Signalli Yo‘l Ajratuvchi Ustun 60 sm (Sariq-Qora)",
    "slug": "signalli-yo-l-ajratuvchi-ustun-60-sm-sariq-qora-3328",
    "sku": "NSB-003328",
    "price": 154200,
    "oldPrice": 177330,
    "old_price": 177330,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972226_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtoturargoh va piyodalar hududini ajratish uchun maxsus nur qaytaruvchi chiziqli ogohlantirish ustuni.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:23.328Z",
    "tags": [
      "ustun",
      "60sm",
      "ajratuvchi",
      "yo'l belgisi"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3295",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3295",
    "title": "Egiluvchan Rezin Yo‘l Ustuni 75 sm (Qizil-Oq chiziqli)",
    "slug": "egiluvchan-rezin-yo-l-ustuni-75-sm-qizil-oq-chiziqli-3295",
    "sku": "NSB-003295",
    "price": 179900,
    "oldPrice": 206885,
    "old_price": 206885,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972127_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Uzoq xizmat qiluvchi, quyosh va sovuqqa chidamli elastik yo'l ustuni.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:23.295Z",
    "tags": [
      "stolbik",
      "rezin ustun",
      "75sm",
      "qizil oq"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3244",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3244",
    "title": "Kompakt Yo‘l Konusi 45 sm (Nur qaytaruvchi tasmali)",
    "slug": "kompakt-yo-l-konusi-45-sm-nur-qaytaruvchi-tasmali-3244",
    "sku": "NSB-003244",
    "price": 128500,
    "oldPrice": 147775,
    "old_price": 147775,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972315_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Avtomaktablar, vaqtinchalik to'siqlar va shaxsiy avtoturargohlar uchun qulay ixcham konus.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:23.244Z",
    "tags": [
      "konus",
      "45sm",
      "kompakt",
      "avtomaktab"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3204",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-3204",
    "title": "Elastik Yo‘l Konusi 70 sm (2 ta nur qaytaruvchi tasmali)",
    "slug": "elastik-yo-l-konusi-70-sm-2-ta-nur-qaytaruvchi-tasmali-3204",
    "sku": "NSB-003204",
    "price": 179900,
    "oldPrice": 206885,
    "old_price": 206885,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972197_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Sifatli polimerdan tayyorlangan, tunda yuqori ko'rinish beruvchi ikkitalik tasmali xavfsizlik konusi.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:33:23.204Z",
    "tags": [
      "konus",
      "70sm",
      "elastik",
      "2 tasma"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_product-3161",
    "id": "prod_product-3161",
    "title": "Suriluvchi Metall Garmoshka To‘siq (Mobil yig‘iluvchi)",
    "slug": "suriluvchi-metall-garmoshka-to-siq-mobil-yig-iluvchi-3161",
    "sku": "NSB-003161",
    "price": 462600,
    "oldPrice": 531990,
    "old_price": 531990,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "yol-konuslari",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-971622_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Tez ochiladigan va yig'iladigan qizil-oq suriluvchi xavfsizlik to'sig'i. Yo'l yopish va ta'mirlash joylari uchun.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Yo‘l & Harakat Xavfsizligi"
      },
      {
        "label": "Toifa",
        "value": "Yo‘l Konuslari & To‘siqlar"
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
    "created_at": "2026-11-24T11:33:23.161Z",
    "tags": [
      "garmoshka",
      "to'siq",
      "suriluvchi",
      "metall to'siq"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-3034",
    "id": "prod_yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-tasmali-3034",
    "title": "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, nur qaytaruvchi)",
    "slug": "yo-l-harakati-xavfsizlik-konusi-tpu-75-sm-egiluvchan-nur-qaytaruvchi-3034",
    "sku": "NSB-003034",
    "price": 130000,
    "oldPrice": 150000,
    "old_price": 150000,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "yol-konuslari",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "RoadSafety Pro",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/konus-tpu-75sm.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yuqori sifatli TPU materialdan tayyorlangan, o'ta elastik va chidamli xavfsizlik konusi.",
    "specifications": [
      {
        "label": "Balandligi",
        "value": "75 sm"
      },
      {
        "label": "Materiali",
        "value": "TPU (Elastik poliuretan)"
      },
      {
        "label": "Ko‘rinuvchanlik",
        "value": "Nur qaytaruvchi tasmali"
      }
    ],
    "created_at": "2026-11-24T11:33:23.034Z",
    "tags": [
      "konus",
      "tpu",
      "75sm",
      "egiluvchan"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_product-3001",
    "id": "prod_product-3001",
    "title": "Nerjaveyka Garmoshka To‘siq (Zanglamas po‘latdan suriluvchi)",
    "slug": "nerjaveyka-garmoshka-to-siq-zanglamas-po-latdan-suriluvchi-3001",
    "sku": "NSB-003001",
    "price": 771000,
    "oldPrice": 886650,
    "old_price": 886650,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "yol-konuslari",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-969023_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Zanglamas po'latdan ishlangan mustahkam, uzoq muddat xizmat qiladigan premium yig'iluvchi garmoshka to'siq.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Yo‘l & Harakat Xavfsizligi"
      },
      {
        "label": "Toifa",
        "value": "Yo‘l Konuslari & To‘siqlar"
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
    "created_at": "2026-11-24T11:33:23.001Z",
    "tags": [
      "garmoshka",
      "nerjaveyka",
      "zanglamas",
      "suriluvchi to'siq"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_115-8758",
    "id": "prod_115-8758",
    "title": "Egiluvchan Katta Yo‘l Ustuni (Stolbik) 115 sm",
    "slug": "egiluvchan-katta-yo-l-ustuni-stolbik-115-sm-8758",
    "sku": "NSB-988758",
    "price": 514000,
    "oldPrice": 591100,
    "old_price": 591100,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "suniy-notekislik",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-972236_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Balandligi 115 sm bo'lgan, uzoqdan ko'rinadigan qizil-oq tasmali yirik egiluvchan delimitator ustuni.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Yo‘l & Harakat Xavfsizligi"
      },
      {
        "label": "Toifa",
        "value": "Sun‘iy Notekislik & Ustunlar"
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
    "created_at": "2026-11-24T11:33:08.758Z",
    "tags": [
      "stolbik",
      "115sm",
      "katta ustun",
      "yo'l belgisi"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2537",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2537",
    "title": "Quyosh Reflektorli Infraqizil Elektr Isitgich 30 sm",
    "slug": "quyosh-reflektorli-infraqizil-elektr-isitgich-30-sm-2537",
    "sku": "NSB-972537",
    "price": 109225,
    "oldPrice": 125609,
    "old_price": 125609,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "drellar-shurupovyort",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968702_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Xonani bir zumda isituvchi tejamkor infraqizil reflektorli elektr pechka. Xavfsiz panjarali.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:32:52.537Z",
    "tags": [
      "quyosh",
      "isitgich",
      "reflektor",
      "pechka"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_product-2508",
    "id": "prod_product-2508",
    "title": "Katta Quyosh Energiyali Signal Migalka (Ogohlantiruvchi LED chiroq)",
    "slug": "katta-quyosh-energiyali-signal-migalka-ogohlantiruvchi-led-chiroq-2508",
    "sku": "NSB-972508",
    "price": 1542000,
    "oldPrice": 1773300,
    "old_price": 1773300,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-971612_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Quyosh batareyasi orqali zaryadlanuvchi, tunda o'zi yonuvchi kuchli LED ogohlantirish chirog'i (migalka).",
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
    "created_at": "2026-11-24T11:32:52.508Z",
    "tags": [
      "migalka",
      "quyosh energiyasi",
      "led chiroq",
      "yo'l signali"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_product-2459",
    "id": "prod_product-2459",
    "title": "Masofadan Boshqariladigan Avtomatik Parkovka To‘sig‘i (Akkumulyatorli)",
    "slug": "masofadan-boshqariladigan-avtomatik-parkovka-to-sig-i-akkumulyatorli-2459",
    "sku": "NSB-972459",
    "price": 706750,
    "oldPrice": 812762,
    "old_price": 812762,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-971625_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Pult orqali ko'tarilib-tushuvchi shaxsiy avtoturargoh to'sig'i. Suv o'tkazmaydigan va signalizatsiyali.",
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
    "created_at": "2026-11-24T11:32:52.459Z",
    "tags": [
      "parkovka",
      "avtomatik to'siq",
      "pultli",
      "avtoturargoh"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_80-2418",
    "id": "prod_80-2418",
    "title": "Rezina Burchak Himoyalovchi Dempfer 80 sm (Sariq-Qora)",
    "slug": "rezina-burchak-himoyalovchi-dempfer-80-sm-sariq-qora-2418",
    "sku": "NSB-972418",
    "price": 77100,
    "oldPrice": 88665,
    "old_price": 88665,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-971578_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ustaxonalar va garaj burchaklarini mashina tirnashidan saqlovchi nur qaytaruvchi rezina dempfer.",
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
    "created_at": "2026-11-24T11:32:52.418Z",
    "tags": [
      "dempfer",
      "80sm",
      "burchak himoya",
      "garaj"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_100-2207",
    "id": "prod_100-2207",
    "title": "Rezina Burchak Himoyalovchi Dempfer 100 sm (Kuchaytirilgan)",
    "slug": "rezina-burchak-himoyalovchi-dempfer-100-sm-kuchaytirilgan-2207",
    "sku": "NSB-972207",
    "price": 83525,
    "oldPrice": 96054,
    "old_price": 96054,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-971712_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "1 metrli qalin rezina ustun va devor burchak himoyasi. Nur qaytaruvchi sariq tasmalar bilan.",
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
    "created_at": "2026-11-24T11:32:52.207Z",
    "tags": [
      "dempfer",
      "100sm",
      "rezina",
      "burchak"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_quyosh-35-2068",
    "id": "prod_quyosh-35-2068",
    "title": "Quyosh 35 sm Reflektorli Infraqizil Elektr Isitgich",
    "slug": "quyosh-35-sm-reflektorli-infraqizil-elektr-isitgich-2068",
    "sku": "NSB-972068",
    "price": 75815,
    "oldPrice": 87187,
    "old_price": 87187,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "drellar-shurupovyort",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968785_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "35 sm diametrli dumaloq infraqizil reflektorli isitgich. Kam tok sarflaydi va tez qizdiradi.",
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
    "created_at": "2026-11-24T11:32:52.068Z",
    "tags": [
      "quyosh 35",
      "isitgich",
      "infraqizil",
      "tejamkor"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_product-2056",
    "id": "prod_product-2056",
    "title": "Quyosh Batareyali Avtonom Yo‘l Migalkasi (Signal chirog'i)",
    "slug": "quyosh-batareyali-avtonom-yo-l-migalkasi-signal-chirog-i-2056",
    "sku": "NSB-972056",
    "price": 1285000,
    "oldPrice": 1477750,
    "old_price": 1477750,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "drellar-shurupovyort",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968998_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "To'siqlar va konuslarga o'rnatiladigan o'chmas miltillovchi quyosh signali.",
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
    "created_at": "2026-11-24T11:32:52.056Z",
    "tags": [
      "migalka",
      "quyosh batareyali",
      "signal",
      "xavfsizlik"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2040",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-2040",
    "title": "Sanoat Issiqlik To‘pi / Portativ Ustaxona Isitgichi 2000W",
    "slug": "sanoat-issiqlik-to-pi-portativ-ustaxona-isitgichi-2000w-2040",
    "sku": "NSB-972040",
    "price": 141350,
    "oldPrice": 162553,
    "old_price": 162553,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "drellar-shurupovyort",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968851_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Katta ustaxona, ombor va xonalarni tez qizdirish uchun spiral qizdirgichli kuchli ventilyatorli isitgich.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:32:52.040Z",
    "tags": [
      "teploventilyator",
      "issiqlik to'pi",
      "2000w",
      "ustaxona"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_80-300-1605",
    "id": "prod_80-300-1605",
    "title": "Suriluvchi Garmoshka To‘siq 80x300 sm (Sariq-Qora)",
    "slug": "suriluvchi-garmoshka-to-siq-80x300-sm-sariq-qora-1605",
    "sku": "NSB-971605",
    "price": 449750,
    "oldPrice": 517212,
    "old_price": 517212,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "yol-konuslari",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968844_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "3 metrgacha cho'ziluvchi, g'ildirakli va qulflanuvchi yirik metall garmoshka to'siq.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Yo‘l & Harakat Xavfsizligi"
      },
      {
        "label": "Toifa",
        "value": "Yo‘l Konuslari & To‘siqlar"
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
    "created_at": "2026-11-24T11:32:51.605Z",
    "tags": [
      "garmoshka",
      "80x300",
      "suriluvchi to'siq",
      "sariq qora"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_quyosh-40-1588",
    "id": "prod_quyosh-40-1588",
    "title": "Quyosh 40 sm Kuchaytirilgan Reflektorli Elektr Isitgich",
    "slug": "quyosh-40-sm-kuchaytirilgan-reflektorli-elektr-isitgich-1588",
    "sku": "NSB-971588",
    "price": 83525,
    "oldPrice": 96054,
    "old_price": 96054,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "drellar-shurupovyort",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968695_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "40 sm keng reflektorli kuchli infraqizil isitgich. Katta xonalar uchun qulay.",
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
    "created_at": "2026-11-24T11:32:51.588Z",
    "tags": [
      "quyosh 40",
      "isitgich",
      "katta reflektor",
      "isitish"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-1565",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-1565",
    "title": "Mini Keramik Stol Isitgichi (Termostatli, Pushti/Oq)",
    "slug": "mini-keramik-stol-isitgichi-termostatli-pushti-oq-1565",
    "sku": "NSB-971565",
    "price": 115650,
    "oldPrice": 132998,
    "old_price": 132998,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "drellar-shurupovyort",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968699_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ish stoli va yotoqxona uchun sokin ishlaydigan ixcham va xavfsiz keramik isitgich.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:32:51.565Z",
    "tags": [
      "stol isitgichi",
      "keramik",
      "mini",
      "termostat"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-1534",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-1534",
    "title": "Ustaxona va Qurilish Issiqlik Ventilyatori 2000W (Dumaloq)",
    "slug": "ustaxona-va-qurilish-issiqlik-ventilyatori-2000w-dumaloq-1534",
    "sku": "NSB-971534",
    "price": 115650,
    "oldPrice": 132998,
    "old_price": 132998,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "drellar-shurupovyort",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968784_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Metall mustahkam korpusli, harorat regulyatoriga ega qurilish issiqlik ventilyatori.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:32:51.534Z",
    "tags": [
      "issiqlik feni",
      "ventilyator",
      "2000w",
      "dumaloq isitgich"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_product-1518",
    "id": "prod_product-1518",
    "title": "Plastmassa Yig‘iluvchi Garmoshka To‘siq (Yengil mobil to‘siq)",
    "slug": "plastmassa-yig-iluvchi-garmoshka-to-siq-yengil-mobil-to-siq-1518",
    "sku": "NSB-971518",
    "price": 706750,
    "oldPrice": 812762,
    "old_price": 812762,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Yo‘l Xavfsizligi & Jihozlar",
    "category_slug": "yol-xavfsizligi",
    "categorySlug": "yol-konuslari",
    "department": "Yo‘l Xavfsizligi & Jihozlar",
    "departmentName": "Yo‘l & Harakat Xavfsizligi",
    "subcategory": "",
    "brand": "Original Brand",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968600_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Yengil, zanglamaydigan va suv to'ldirib og'irlashtirish mumkin bo'lgan yig'iluvchi plastik to'siq.",
    "specifications": [
      {
        "label": "Yo‘nalish",
        "value": "Yo‘l & Harakat Xavfsizligi"
      },
      {
        "label": "Toifa",
        "value": "Yo‘l Konuslari & To‘siqlar"
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
    "created_at": "2026-11-24T11:32:51.518Z",
    "tags": [
      "garmoshka",
      "plastik to'siq",
      "mobil",
      "yig'iluvchi"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
  },
  {
    "_id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-1424",
    "id": "prod_akkumulyatorli-zarbli-drel-shurupovyort-universal-2-ta-batareya-va-keys-bilan-1424",
    "title": "Kompakt Maishiy Stol Isitgichi (Tez qizdiruvchi)",
    "slug": "kompakt-maishiy-stol-isitgichi-tez-qizdiruvchi-1424",
    "sku": "NSB-971424",
    "price": 141350,
    "oldPrice": 162553,
    "old_price": 162553,
    "discountPercent": 13,
    "discount_percent": 13,
    "category": "Isitgichlar & Texnik Fenlar",
    "category_slug": "isitgichlar-iqlim",
    "categorySlug": "drellar-shurupovyort",
    "department": "Isitgichlar & Texnik Fenlar",
    "departmentName": "Asbob-Uskunalar & Qurilish",
    "subcategory": "",
    "brand": "PowerFix",
    "stock": 25,
    "inStock": true,
    "in_stock": true,
    "rating": 5,
    "reviews_count": 8,
    "images": [
      "/uploads/prod-968566_1.jpg"
    ],
    "is_bestseller": true,
    "is_new_arrival": true,
    "is_weekly_deal": false,
    "variantLabel": "",
    "variants": [],
    "description": "Ofis va xona uchun tejamkor, zamonaviy dizayndagi stol usti elektr isitgichi.",
    "specifications": [
      {
        "label": "Turi",
        "value": "Akkumulyatorli zarbli drel-shurupovyort"
      },
      {
        "label": "Patron o‘lchami",
        "value": "10 mm tez qisuvchi metall patron"
      },
      {
        "label": "Tezliklar soni",
        "value": "2 ta rejim (0-450 / 0-1450 ayl/daq)"
      },
      {
        "label": "Moment rostlagichi",
        "value": "18+1 bosqichli kuch momenti"
      },
      {
        "label": "Batareya",
        "value": "2 ta Li-Ion akkumulyator to‘plamda"
      },
      {
        "label": "Komplekt",
        "value": "Drel, 2x batareya, zaryadlovchi, bita va keys"
      }
    ],
    "created_at": "2026-11-24T11:32:51.424Z",
    "tags": [
      "stol isitgich",
      "maishiy",
      "tez qizdiruvchi",
      "ofis"
    ],
    "features": [
      "100% original va kafolatlangan sifat",
      "Ishonchli va xizmat muddatiga chidamli material",
      "Buxoro va O'zbekiston bo'ylab tezkor yetkazib berish",
      "To'lov: Click, Payme yoki naqd"
    ],
    "stock_count": 25
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

