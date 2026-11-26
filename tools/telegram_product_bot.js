/**
 * SPORT OUTLET & MULTI-DEPARTMENT STORE — Telegram Product Bot v2.5 (Smart Auto-Enricher)
 * Bot Token: 6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w
 * Bot Username: @Ttxtxtctxtxtxhxhchxhbot
 * 
 * 3 TA ASOSIY YO'NALISH:
 * 1. 🛠️ ASBOB-USKUNALAR & QURILISH (Drellar, Balgarkalar, Gaykavyortlar, Arralar, Charx, Trimmer, Fen, Naborlar)
 * 2. 🚧 YO'L & HARAKAT XAVFSIZLIGI (Yo'l konuslari, Belgilar, To'siqlar, Lejachiy politseyskiy, Ustunlar, To'xtatgichlar)
 * 3. 🏆 SPORT & FITNES (Trenajorlar, Gantellar, Podstavkalar, Boks/Tatami, To'plar, Fitnes)
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const UPLOADS_DIR = path.join(FRONTEND_DIR, 'public', 'uploads');
const MOCK_DATA_PATH = path.join(FRONTEND_DIR, 'src', 'services', 'mockData.js');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Supabase client initialization
let supabase = null;
try {
  const { createClient } = require(path.join(FRONTEND_DIR, 'node_modules', '@supabase/supabase-js'));
  supabase = createClient('https://xeaiyoiqyrwnhgtwlpga.supabase.co', 'sb_publishable_cAzTbZesi-1Khha3AH1Mcw_EniamLhY');
} catch (e) {
  console.warn('Supabase client module loading warning:', e.message);
}

// Render & Cloud platform health-check listener
const PORT = process.env.PORT || 5001;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('SPORT OUTLET Multi-Department Telegram Bot is running!\n');
}).listen(PORT, () => {
  console.log(`Telegram Bot health-check server listening on port ${PORT}`);
});

const BOT_TOKEN = '6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
const TELEGRAM_FILE_API = `https://api.telegram.org/file/bot${BOT_TOKEN}`;

const USD_RATE = 12850; // 1 USD = 12,850 UZS

// 3 TA KATTA YO'NALISH TOIFALARI
const CATEGORIES = [
  // 1. ASBOB-USKUNALAR & QURILISH TEXNIKASI
  {
    slug: 'drellar-shurupovyort',
    name: 'Drellar & Shurupovyortlar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Wrench',
    keywords: [
      'drel', 'drill', 'дрель', 'shurupovert', 'shurupovyort', 'шуруповерт', 'gaykavyort', 'gaykovert', 'гайковерт',
      'vintovyort', 'shurupavort', 'drel-shurupovyort', 'akkumulyator drel', 'аккумуляторная дрель', 'zarbli drel', 'mikser', 'bl-4126', '4&1'
    ]
  },
  {
    slug: 'balgarkalar-ushm',
    name: 'Balgarka & Shlifovka',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'HardHat',
    keywords: [
      'balgarka', 'bolgarka', 'болгарка', 'ushm', 'ушм', 'burchakli silliqlash', 'shlifovka', 'шлифмашина', 'rezak',
      'ugloshlifovalnaya', 'shlifovalniy', 'charx', 'tochilo', 'точило', 'точильный', 'slj'
    ]
  },
  {
    slug: 'arralar-uskunalar',
    name: 'Arralar & Elektr Uskunalar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Construction',
    keywords: [
      'arra', 'пила', 'pila', 'diskoviy', 'дисковая', 'sirkulyarka', 'циркулярка', 'lobzik', 'лобзик', 'frez', 'фрезер',
      'stanok', 'станок', 'torsovka', 'торцовка', 'benzopila', 'бензопила', 'elektr arra', 'цепная пила', 'trimmer', 'триммер', 'maysa'
    ]
  },
  {
    slug: 'lazer-qol-asboblari',
    name: 'Lazer Uroven & Asbob Naborlari',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Wrench',
    keywords: [
      'uroven', 'уровень', 'lazer', 'лазер', 'lazerniy', 'лазерный', 'rulyetka', 'рулетка', 'nabor', 'набор', 'to‘plam',
      'kalit', 'otvyortka', 'отвертка', 'asboblar', 'chemodan', 'klyuch', 'ключи', 'fen', 'фен', 'turbo fen', 'технический фен'
    ]
  },
  {
    slug: 'perforator-otboynik',
    name: 'Perforatorlar & Otboyniklar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Hammer',
    keywords: ['perforator', 'перфоратор', 'otboynik', 'отбойный', 'bolg‘a', 'zarbli bolg‘a', 'beton', 'otboyniy', 'pik', 'zubilo', 'sds']
  },
  {
    slug: 'payvandlash-svarka',
    name: 'Payvandlash & Generatorlar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Zap',
    keywords: ['svarka', 'сварка', 'payvandlash', 'invertor', 'инвертор', 'svarochniy', 'elektrod', 'электрод', 'maska', 'xameleon', 'генератор', 'компрессор']
  },

  // 2. YO'L VA HARAKAT XAVFSIZLIGI
  {
    slug: 'yol-konuslari',
    name: 'Yo‘l Konuslari & To‘siqlar',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'Cone',
    keywords: [
      'konus', 'konis', 'конус', 'конусы', 'dorojniy konus', 'yo‘l konusi', 'yol konusi', 'rezina konus', 'tpu', 'тпу',
      'to‘siq', 'tosiq', 'bariyer', 'barier', 'barrikada', 'fexting', 'fensing', 'lentasi',
      'гармошка', 'видвижной', 'выдвижной', 'garmoshka', 'vidvijnoy', 'плитка', 'тактильный', 'тактильная', 'taktil', 'taktilniy',
      'plitka', 'pvc', 'пвх', 'водоналивной', 'vodonalivnoy', 'zabor', 'panjara'
    ]
  },
  {
    slug: 'suniy-notekislik',
    name: 'Sun‘iy Notekislik & Ustunlar',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'Construction',
    keywords: [
      'notekislik', 'неровность', 'lejachiy', 'politseyskiy', 'лежачий', 'полицейский', 'leja',
      'stolbik', 'ustun', 'столбик', 'делиниатор', 'deliniator', 'katofot', 'катафот',
      'otboynik', 'отбойник', 'колесоотбойник', 'kolesootboynik', 'колесо', 'башмак', 'подколесник', 'boshmoq', 'podkolyosnik', 'wheel chock', 'chock'
    ]
  },
  {
    slug: 'yol-belgilari',
    name: 'Yo‘l Belgilari & Ko‘zgular',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'AlertTriangle',
    keywords: [
      'yo‘l belgisi', 'yol belgisi', 'znak', 'znaki', 'знак', 'знаки', 'дорожный знак', 'ko‘zgu', 'sferik', 'зеркало',
      'стойка ограждения', 'столбик с лентой', 'лента стойка', 'lenta stoyka', 'лента 3м', 'lenta 3m', 'turniket ustun', 'turniket', 'to‘siq ustun', 'lentali ustun', 'arqonli ustun', 'stanchion', 'plastina', 'пластина'
    ]
  },

  // 3. SPORT & FITNES
  {
    slug: 'trenajorlar',
    name: 'Trenajorlar & Kardio',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Activity',
    keywords: ['masaj', 'massaj', 'kreslo', 'massage', 'trenajor', 'yugurish', 'dorojka', 'velo', 'velotrenajor', 'kardio', 'беговая дорожка', 'бегавой', 'беговой', 'беговая', 'тренажер', 'treadmill', 'нагрузка', 'stepper', 'степпер']
  },
  {
    slug: 'gantellar',
    name: 'Gantellar & Shtangalar',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Dumbbell',
    keywords: ['gantel', 'shtanga', 'grif', 'disk', 'blin', 'гантель', 'штанга', 'диск']
  },
  {
    slug: 'boks-yakka-kurash',
    name: 'Boks & Yakka Kurash',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Shield',
    keywords: ['tatami', 'mat', 'boks', 'qop', 'grusha', 'kimono', 'бокс', 'перчатки', 'татами']
  }
];

function detectCategory(text = '') {
  const lower = text.toLowerCase();
  for (const cat of CATEGORIES) {
    for (const kw of cat.keywords) {
      if (lower.includes(kw)) {
        return cat;
      }
    }
  }

  // Smart department heuristics
  if (/(?:drel|shurup|balgarka|gayk|arra|charx|trimmer|fen|nabor|ushm|drill|volt|v|quvvat)/i.test(lower)) {
    return CATEGORIES.find(c => c.slug === 'drellar-shurupovyort');
  }

  if (/(?:konus|plitka|tosiq|ustun|politseyskiy|bariyer|zabor|stopper)/i.test(lower)) {
    return CATEGORIES.find(c => c.slug === 'yol-konuslari');
  }

  // Default to Power Tools for current tool upload phase
  return CATEGORIES.find(c => c.slug === 'drellar-shurupovyort');
}

function detectBrand(text = '') {
  const lower = text.toLowerCase();
  const brands = [
    // Tools
    'Makita', 'DeWalt', 'Bosch', 'Total', 'Crown', 'Ingco', 'Dnepr-M', 'Denzel', 'Resanta', 'Edon', 'Huter', 'Stanley', 'Metabo', 'SLJ',
    // Road & Safety
    'RoadSafety Pro', 'Yo‘l Standart', 'AutoSafety', 'TrafficPro', 'Uzbekistan Airports', 'SafeRoad',
    // Sport
    'WYUE', 'Sport Line', 'Anelus', 'IronPower', 'ProForm', 'Nike', 'Under Armour', 'Adidas'
  ];
  for (const b of brands) {
    if (lower.includes(b.toLowerCase())) return b;
  }
  return 'Original Brand';
}

/**
 * Extracts price and clean title from caption
 */
function extractPriceAndTitle(caption = '') {
  let text = (caption || '').trim();
  const rawLines = text.split('\n').map(l => l.trim()).filter(Boolean);

  let price = 0;
  let priceUSD = 0;
  let currency = 'UZS';
  let rawPriceLabel = '';
  let priceSubstr = '';

  // 1. Check for Dollar prices ($10, 10$, 35 USD) — keep price directly in USD!
  for (const line of rawLines) {
    const dollarMatch = line.match(/(?:\$)\s*(\d+(?:[.,]\d+)?)/i) ||
                        line.match(/(\d+(?:[.,]\d+)?)\s*(?:\$|usd|долл)/i);
    if (dollarMatch) {
      const num = parseFloat(dollarMatch[1].replace(',', '.'));
      if (num > 0) {
        priceUSD = num;
        price = num;
        currency = 'USD';
        rawPriceLabel = `$${num}`;
        priceSubstr = dollarMatch[0];
        break;
      }
    }
  }

  // 2. Check for UZS prices with "ming / минг / тыс" (e.g. "750 минг", "130 ming") or currency word
  if (!price) {
    for (const line of rawLines) {
      const mingMatch = line.match(/(\d+(?:[.,]\d+)?)\s*(?:ming|минг|тыс\.?)(?:\s*(?:so'?m|sōm|sum|uzs|сум))?(?![a-zA-Zа-яА-ЯёЁ0-9])/i);
      if (mingMatch) {
        const num = parseFloat(mingMatch[1].replace(',', '.'));
        if (num > 0) {
          price = Math.round(num * 1000);
          rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
          priceSubstr = mingMatch[0];
          break;
        }
      }
      const somMatch = line.match(/(\d{1,3}(?:[\s.,]\d{3})+|\d{4,9})\s*(?:so'?m|sōm|sum|uzs|сум)(?![a-zA-Zа-яА-ЯёЁ0-9])/i);
      if (somMatch) {
        const digits = somMatch[1].replace(/[^\d]/g, '');
        if (digits.length >= 4) {
          price = parseInt(digits, 10);
          rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
          priceSubstr = somMatch[0];
          break;
        }
      }
    }
  }

  // 3. Check for standalone 4-8 digit number that isn't dimensions or model
  if (!price) {
    for (const line of rawLines) {
      const matches = [...line.matchAll(/(?<![a-zA-Z*xX\d])(\d{4,8})(?![a-zA-Z*xX\d])/g)];
      for (const m of matches) {
        const val = parseInt(m[1], 10);
        if (val >= 1000) {
          price = val;
          rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
          priceSubstr = m[0];
          break;
        }
      }
      if (price) break;
    }
  }

  // Clean Title by removing only the matched price substring
  let titleText = text;
  if (priceSubstr) {
    titleText = titleText.replace(priceSubstr, ' ');
  }

  titleText = titleText
    .replace(/(?:narxi?|baho[si]?|price|цена)\s*[:=-]?/gi, ' ')
    .replace(/^[:=\-–—\s*]+|[:=\-–—\s*]+$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const lines = titleText.split('\n').map(l => l.trim()).filter(Boolean);
  let title = lines[0] || '';
  title = title.replace(/^(?:nomi|mahsulot|tovar|title|наименование)\s*[:=-]\s*/i, '').trim();

  return {
    title,
    price,
    priceUSD,
    currency,
    rawPriceLabel,
    priceSubstr
  };
}

/**
 * Knowledge Base: Enriches power tools and road products with complete specs, titles and descriptions
 */
function enrichWithKnowledge(rawText = '', price = 0) {
  const lower = (rawText || '').toLowerCase();

  // ==========================================
  // A. ROAD & TRAFFIC SAFETY (Yo'l Xavfsizligi) - CHECK FIRST
  // ==========================================
  // 1. Konuslar (Traffic Cones)
  if (lower.includes('конус') || lower.includes('konus')) {
    const size = lower.includes('75') ? '75 sm' : (lower.includes('50') ? '50 sm' : (lower.includes('100') ? '100 sm' : '75 sm'));
    return {
      title: `Yo‘l harakati xavfsizlik konusi TPU ${size} (Egiluvchan, nur qaytaruvchi tasmali)`,
      categorySlug: 'yol-konuslari',
      brand: 'RoadSafety Pro',
      description: "Avtomobil harakati va yo‘l ta'mirlash xavfsizligi uchun maxsus elastik TPU egiluvchan konusi. Avtomobil bosib ketganda sinmaydi va o‘z holatiga qaytadi. Yuqori sifatli nur qaytaruvchi lentalar bilan tunda ham uzoqdan aniq ko‘rinadi.",
      specifications: [
        { label: "Balandligi", value: size },
        { label: "Materiali", value: "TPU (Yuqori elastik poliuretan)" },
        { label: "Ko‘rinuvchanlik", value: "3M nur qaytaruvchi tasmalar" },
        { label: "Chidamlilik", value: "Avtomobil bosib ketishiga chidamli" },
        { label: "Qo‘llanishi", value: "Yo‘l ta'miri, avtomaktab, parkovka va xavfsizlik" }
      ]
    };
  }

  // 2. Taktil plitkalar (Tactile Paving Tiles)
  if (lower.includes('тактильн') || lower.includes('taktil') || lower.includes('плитка') || lower.includes('plitka')) {
    return {
      title: "PVX Taktil plitka 300x300 mm (Ko‘zi ojizlar uchun yo‘naltiruvchi va ogohlantiruvchi)",
      categorySlug: 'yol-konuslari',
      brand: 'SafeRoad',
      description: "Ko‘zi ojiz va zaif ko‘ruvchi insonlar piyoda harakatlanishi uchun maxsus taktil ogohlantiruvchi va yo‘naltiruvchi sarg‘ish PVX plitkasi. Sirpanmaydigan, yorug‘lik va ob-havo haroratiga o‘ta chidamli polimer material.",
      specifications: [
        { label: "O‘lchami", value: "300x300x7 mm" },
        { label: "Materiali", value: "Yuqori sifatli egiluvchan elastik PVX" },
        { label: "Rangi", value: "Yorqin sariq (Signal sariq)" },
        { label: "Xususiyati", value: "Sirpanishga qarshi relyefli yuzaga ega" }
      ]
    };
  }

  // 3. Sun'iy notekislik / Tezlik pasaytirgich (Speed Bumps)
  if (lower.includes('полицейск') || lower.includes('лежач') || lower.includes('notekislik') || lower.includes('tezlik pasaytirgich') || lower.includes('nerovnost')) {
    return {
      title: "Sun‘iy Yo‘l Notekisligi (Tezlik Pasaytirgich Rezina 500x500x50 mm)",
      categorySlug: 'suniy-notekislik',
      brand: 'RoadSafety Pro',
      description: "Avtomobillar tezligini xavfsiz chegaralash uchun mo‘ljallangan zarbga chidamli rezinadan tayyorlangan sun'iy yo‘l notekisligi. Nur qaytaruvchi sariq elementlar va anker mahkamlagichlar uchun tayyor teshiklar mavjud.",
      specifications: [
        { label: "O‘lchami", value: "500x500x50 mm" },
        { label: "Materiali", value: "Og‘ir yukka chidamli vulkanizatsiyalangan rezina" },
        { label: "Rang", value: "Qora va nur qaytaruvchi sariq elementlar" }
      ]
    };
  }

  // 4. Kolesootboynik / G'ildirak to'xtatgich (Wheel Stops)
  if (lower.includes('отбойник') || lower.includes('otboynik') || lower.includes('делиниатор') || lower.includes('deliniator') || lower.includes('kolesootboynik')) {
    return {
      title: "Avtoturargoh G‘ildirak To‘xtatgichi (Rezina Kolesootboynik 560x160x100 mm)",
      categorySlug: 'suniy-notekislik',
      brand: 'RoadSafety Pro',
      description: "Parkovka joylarida avtomobillarning devorga yoki boshqa mashinalarga urilishining oldini oluvchi mustahkam rezina kolesootboynik. Yorqin nur qaytaruvchi stikerlar bilan jihozlangan.",
      specifications: [
        { label: "O‘lchami", value: "560x160x100 mm" },
        { label: "Materiali", value: "Zarbga chidamli texnik rezina" },
        { label: "Rang", value: "Sariq aks ettiruvchi tasmali qora rezina" }
      ]
    };
  }

  // 5. Garmoshka to'siq (Retractable Barriers)
  if (lower.includes('гармошка') || lower.includes('garmoshka') || lower.includes('видвижной') || lower.includes('suriluvchi to‘siq')) {
    return {
      title: "Suriluvchi Mobil Yo‘l To‘sig‘i Garmoshka (Mobil to‘siq tizimi)",
      categorySlug: 'yol-konuslari',
      brand: 'SafeRoad',
      description: "Harakatlanishni vaqtinchalik cheklash, ta'mirlash yoki xavfli hududlarni to‘sish uchun ixcham yig‘iluvchi va tez ochiluvchi mobil to‘siq (garmoshka).",
      specifications: [
        { label: "Turi", value: "Yig‘iluvchan mobil to‘siq" },
        { label: "Material", value: "Mustahkam plastik / zanglamas po‘lat" }
      ]
    };
  }

  // ==========================================
  // B. POWER TOOLS & CONSTRUCTION (Asbob-uskunalar)
  // ==========================================
  // 1. Combo 4&1 sets
  if (lower.includes('4&1') || lower.includes('4in1') || lower.includes('4 da 1') || lower.includes('4 v 1') || lower.includes('4 в 1')) {
    return {
      title: "4&1 Professional Akkumulyatorli Asboblar To‘plami (Gaykavyort, Balgarka, Drel, Perforator)",
      categorySlug: 'drellar-shurupovyort',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'Universal Pro',
      description: "Qurilish, montaj va ta'mirlash uchun 4 ta eng zarur elektr asboblar to‘plami: Kuchli zarbli gaykavyort, 125 mm burchakli shlifovka (balgarka), drel-shurupovyort va zarbli perforator. Barchasi bitta qulay mustahkam keysda, katta sig‘imli Li-Ion akkumulyatorlar bilan birga taqdim etiladi.",
      specifications: [
        { label: "To‘plam tarkibi", value: "Gaykavyort, Balgarka (USH-M), Drel-shurupovyort, Perforator" },
        { label: "Dvigatel turi", value: "Beshchetochniy (Brushless / Cho‘tkasiz) yuqori resursli" },
        { label: "Batareya", value: "Yuqori sig‘imli universal Li-Ion akkumulyatorlar" },
        { label: "Komplektatsiya", value: "4 ta uskuna, 2x batareya, tezkor zaryadlovchi, mustahkam keys" },
        { label: "Kafolat", value: "1 yil rasmiy kafolat" }
      ]
    };
  }

  // 2. Combo 2&1 sets
  if (lower.includes('2&1') || lower.includes('2in1') || lower.includes('2 da 1') || lower.includes('2 v 1') || lower.includes('2 в 1')) {
    return {
      title: "2&1 Akkumulyatorli Bog‘ va Qurilish To‘plami (Mini Zanjirli Arra + Bog‘ Qaychisi)",
      categorySlug: 'arralar-uskunalar',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'GardenPro',
      description: "Bog‘dorchilik, tomorqa va qurilish ishlari uchun qulay 2&1 universal to‘plam: Daraxt shoxlarini oson kesuvchi mini zanjirli arra va elektr kesuvchi sekator-qaychi. Yengil, bir qo‘lda boshqarish mumkin va juda tejamkor.",
      specifications: [
        { label: "To‘plam tarkibi", value: "1x Mini zanjirli arra, 1x Akkumulyatorli bog‘ qaychisi" },
        { label: "Shina uzunligi", value: "6 dyuym (15 sm) zanjirli shina" },
        { label: "Qaychi kesish qalinligi", value: "30 mm gacha bo‘lgan shoxlar" },
        { label: "Akkumulyator", value: "2 dona Li-Ion batareya va zaryadlovchi" }
      ]
    };
  }

  // 3. Gaykavyort (Impact Wrench)
  if (lower.includes('gaykavyort') || lower.includes('gaykovert') || lower.includes('гайковерт')) {
    return {
      title: "Professional Akkumulyatorli Zarbli Gaykavyort (Kuchli Cho‘tkasiz Motor)",
      categorySlug: 'drellar-shurupovyort',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'ProTools',
      description: "Avtomobil g‘ildiraklarini yechish, metall konstruksiyalar va og‘ir gaykalarni qotirish uchun mo‘ljallangan kuchli zarbli gaykavyort. Cho‘tkasiz (brushless) motor yuqori quvvat va uzoq xizmat muddatini kafolatlaydi.",
      specifications: [
        { label: "Aylanma moment", value: "350-450 Nm kuchli zarbli moment" },
        { label: "Patron o‘lchami", value: "1/2 dyuym (12.7 mm) standart kvadrat" },
        { label: "Tezlikni sozlash", value: "Elektron 3 pog‘onali tezlik va revers" },
        { label: "Yoritgich", value: "Ish hududini yorituvchi LED diod" }
      ]
    };
  }

  // 4. Toshli charx (SLJ Bench Grinder)
  if (lower.includes('slj') || lower.includes('charx') || lower.includes('chax') || lower.includes('точило') || lower.includes('tochilo')) {
    return {
      title: "SLJ Elektr Toshli Stol Charxi (Ikki tomonlama toshli charxlash uskunasi)",
      categorySlug: 'balgarkalar-ushm',
      brand: 'SLJ',
      description: "Pichoqlar, boltalar, burg‘ular (sverlolar), duradgorlik asboblari va metall qismlarni charxlash hamda tozalash uchun stol usti elektr charxi. Ikki tomonida turli donadorlikdagi (qo‘pol va mayin) charx toshlari va himoya oynachalari mavjud.",
      specifications: [
        { label: "Turi", value: "Stol usti ikki diskli charx" },
        { label: "Tosh diametri", value: "125-150 mm standart charx toshlari" },
        { label: "Xavfsizlik", value: "Uchqundan himoyalovchi shaffof ekranlar" }
      ]
    };
  }

  // 5. Trimmer / Maysa kaltalagich
  if (lower.includes('trimmer') || lower.includes('maysa') || lower.includes('триммер') || lower.includes('kaltalagich')) {
    return {
      title: "Universal Akkumulyatorli Maysa O‘radigan Trimmer (G‘ildirakli va diskli)",
      categorySlug: 'arralar-uskunalar',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'GreenGarden',
      description: "Bog‘, hovli va maysazorlarni toza saqlash uchun akkumulyatorli qulay trimmer. Metall disk, arra tishi va plastik pichoqlar to‘plamda beriladi. Balandligini bo‘yga moslab sozlash mumkin.",
      specifications: [
        { label: "Teleskopik shtanga", value: "Bo‘yga moslab 90-125 sm gacha uzayadi" },
        { label: "Pichoqlar", value: "Metall pichoq, arra diski va plastik pichoqlar" },
        { label: "Batareya", value: "2x Li-Ion akkumulyator" }
      ]
    };
  }

  // 6. Turbo fen / Texnik fen
  if (lower.includes('fen') || lower.includes('turbo fen') || lower.includes('фен') || lower.includes('технический фен')) {
    return {
      title: "Turbo Texnik Fen 2000W (Haroratni rostlagichli sanoat feni)",
      categorySlug: 'lazer-qol-asboblari',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'TurboPro',
      description: "Plastik quvurlarni bukish, payvandlash, bo‘yoq va lakni tozalash, avtomobil oynalariga plyonka tortish va quritish ishlari uchun 2000 Vt quvvatli professional texnik fen.",
      specifications: [
        { label: "Quvvati", value: "2000 Vt" },
        { label: "Harorat diapazoni", value: "50°C - 600°C gacha rostlanadi" }
      ]
    };
  }

  // 7. Sirkulyar arra
  if (lower.includes('sirkulyar') || lower.includes('circular') || lower.includes('циркуляр') || lower.includes('diskoviy arra')) {
    return {
      title: "Professional Elektr Sirkulyar Arra (Yog‘och va DSP kesuvchi 185 mm)",
      categorySlug: 'arralar-uskunalar',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'WoodMaster',
      description: "Yog‘och, DSP, fanera, brus va pol taxtalarini to‘g‘ri hamda 45 gradus burchak ostida aniq kesish uchun mustahkam diskli sirkulyar arra.",
      specifications: [
        { label: "Disk diametri", value: "185 mm qattiq qotishmali tishli disk" },
        { label: "Burchak ostida kesish", value: "0° dan 45° gacha qiya kesish" }
      ]
    };
  }

  // 8. Asboblar nabori (Chemodan)
  if (lower.includes('nabor') || lower.includes('chemodan') || lower.includes('набор') || lower.includes('asboblar toplami')) {
    return {
      title: "Universal Avtomobil va Mexanika Asboblar To‘plami (Katta Nabor Chemodan)",
      categorySlug: 'lazer-qol-asboblari',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'MasterKey',
      description: "Har bir usta va haydovchi uchun zarur bo‘lgan universal asboblar to‘plami: Klyuchlar, treshtotkalar, golovkalar, bita va otvyortkalar. Xrom-vanadiy (Cr-V) mustahkam po‘latdan ishlangan.",
      specifications: [
        { label: "Materiali", value: "Zanglamas xrom-vanadiy qotishma (Chrome Vanadium)" },
        { label: "Keysi", value: "Zarbga chidamli plastik qulflanuvchi chemodan" }
      ]
    };
  }

  // 9. Balgarka (USH-M)
  if (lower.includes('balgarka') || lower.includes('bolgarka') || lower.includes('болгарка') || lower.includes('ushm') || lower.includes('ушм')) {
    return {
      title: "Professional Burchakli Silliqlash Mashinasi (Balgarka 125 mm)",
      categorySlug: 'balgarkalar-ushm',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'PowerCraft',
      description: "Metall, tosh, kafeli va payvand choklarini kesish hamda silliqlash uchun yuqori aylanish tezligiga ega ixcham va qulay balgarka. Changdan himoyalangan mustahkam podshipniklar.",
      specifications: [
        { label: "Disk diametri", value: "125 mm" },
        { label: "Aylanish tezligi", value: "11000 ayl/daq" }
      ]
    };
  }

  // 10. Drel / Shurupovyort (MUST HAVE EXPLICIT DREL/SHURUPOVYORT KEYWORDS)
  if (lower.includes('drel') || lower.includes('shurupovyort') || lower.includes('shurupovert') || lower.includes('дрель') || lower.includes('шуруповерт') || lower.includes('bl-4126') || lower.includes('bl4126')) {
    const volt = lower.includes('48v') ? '48V' : (lower.includes('36v') ? '36V' : (lower.includes('24v') ? '24V' : 'Universal'));
    const model = lower.includes('bl-4126') || lower.includes('4126') ? ' BL-4126' : '';
    return {
      title: `Akkumulyatorli Zarbli Drel-shurupovyort${model} (${volt}, 2 ta batareya va keys bilan)`,
      categorySlug: 'drellar-shurupovyort',
      brand: detectBrand(rawText) !== 'Original Brand' ? detectBrand(rawText) : 'PowerFix',
      description: "Uy ta'miri, mebel yig‘ish va qurilish montaj ishlari uchun ixcham va kuchli akkumulyatorli drel-shurupovyort. 2 tezlikli uzatmalar qutisi, revers va yorqin LED chirog‘i mavjud. 2 dona Li-Ion batareya va zaryadlash stansiyasi keysda jamlangan.",
      specifications: [
        { label: "Turi", value: "Akkumulyatorli zarbli drel-shurupovyort" },
        { label: "Patron o‘lchami", value: "10 mm tez qisuvchi metall patron" },
        { label: "Tezliklar soni", value: "2 ta rejim (0-450 / 0-1450 ayl/daq)" },
        { label: "Moment rostlagichi", value: "18+1 bosqichli kuch momenti" },
        { label: "Batareya", value: "2 ta Li-Ion akkumulyator to‘plamda" },
        { label: "Komplekt", value: "Drel, 2x batareya, zaryadlovchi, bita va keys" }
      ]
    };
  }

  return null;
}

/**
 * Intelligent parser for Telegram captions
 */
function parseProductInfo(text = '') {
  let normalizedText = (text || '').trim();
  const { title: rawTitle, price, priceUSD, currency, rawPriceLabel } = extractPriceAndTitle(normalizedText);

  // Check enrichment
  const enriched = enrichWithKnowledge(normalizedText, price);

  let title = enriched ? enriched.title : rawTitle;
  let categorySlug = enriched ? enriched.categorySlug : null;
  let category = categorySlug ? CATEGORIES.find(c => c.slug === categorySlug) : null;
  let brand = enriched ? enriched.brand : detectBrand(normalizedText);
  let description = enriched ? enriched.description : '';
  let specifications = enriched ? enriched.specifications : [];

  if (!category) {
    category = detectCategory(`${title} ${normalizedText}`);
  }

  if (!title || title.length < 3) {
    title = `${category.name} Mahsuloti`;
  }

  if (!description) {
    description = `${title} - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.`;
  }

  if (!specifications || specifications.length === 0) {
    specifications = [
      { label: "Yo‘nalish", value: category.departmentName || "Do‘kon mahsuloti" },
      { label: "Toifa", value: category.name },
      { label: "Brend", value: brand },
      { label: "Holati", value: "Yangi / Kafolatli" },
      { label: "Yetkazib berish", value: "Buxoro va O‘zbekiston bo‘ylab tezkor" }
    ];
  }

  if (currency === 'USD') {
    specifications = specifications.filter(s => s && s.label !== 'Valyuta');
    specifications.push({ label: 'Valyuta', value: 'USD ($)' });
  }

  let sku = '';
  const skuMatch = normalizedText.match(/(?:kodi?|sku|artikul|kod)\s*[:=-]?\s*([a-zA-Z0-9_-]+)/i);
  if (skuMatch) sku = skuMatch[1];

  return {
    title,
    sku,
    price: price || (currency === 'USD' ? 15 : 150000),
    priceUSD,
    currency,
    rawPriceLabel,
    description,
    category,
    brand,
    specifications,
    variants: []
  };
}

async function sendTelegram(method, data) {
  try {
    const res = await fetch(`${TELEGRAM_API}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (err) {
    console.error('Telegram API error:', err.message);
    return null;
  }
}

async function downloadTelegramPhoto(fileId, destFileName) {
  try {
    const fileRes = await fetch(`${TELEGRAM_API}/getFile?file_id=${fileId}`);
    const fileData = await fileRes.json();
    if (!fileData.ok || !fileData.result?.file_path) {
      console.error('Failed to get file path from Telegram:', fileData);
      return null;
    }

    const filePath = fileData.result.file_path;
    const downloadUrl = `${TELEGRAM_FILE_API}/${filePath}`;
    const localDest = path.join(UPLOADS_DIR, destFileName);

    const imageRes = await fetch(downloadUrl);
    const arrayBuffer = await imageRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(localDest, buffer);
    console.log(`Saved photo to: ${localDest}`);
    return `/uploads/${destFileName}`;
  } catch (err) {
    console.error('Download photo error:', err.message);
    return null;
  }
}

function loadMockProducts() {
  try {
    const content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const pStart = content.indexOf('export const defaultProducts = [');
    if (pStart === -1) return [];

    const arrayStart = content.indexOf('[', pStart);
    let depth = 0;
    let arrayEnd = -1;
    for (let i = arrayStart; i < content.length; i++) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') {
        depth--;
        if (depth === 0) {
          arrayEnd = i + 1;
          break;
        }
      }
    }

    if (arrayEnd === -1) return [];
    const jsonStr = content.slice(arrayStart, arrayEnd);
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Failed to parse mock products:', err);
    return [];
  }
}

function writeMockProducts(products) {
  try {
    let content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const pStart = content.indexOf('export const defaultProducts = [');
    const bStart = content.indexOf('export const defaultBanners = [');
    if (pStart === -1 || bStart === -1) return false;

    const formatted = JSON.stringify(products, null, 2);
    const updatedContent = content.slice(0, pStart + 'export const defaultProducts = '.length) + 
      formatted + ';\n\n' + content.slice(bStart);

    fs.writeFileSync(MOCK_DATA_PATH, updatedContent, 'utf8');
    console.log(`Updated mockData.js with ${products.length} products.`);
    return true;
  } catch (err) {
    console.error('Failed to write mockData.js:', err);
    return false;
  }
}

async function syncProductToSupabase(product) {
  if (!supabase) return;
  try {
    const row = {
      id: product.id || product._id,
      title: product.title,
      slug: product.slug,
      sku: product.sku || '',
      price: product.price,
      old_price: product.oldPrice || product.old_price || 0,
      discount_percent: product.discountPercent || product.discount_percent || 0,
      category: product.category,
      category_slug: product.category_slug || product.categorySlug,
      subcategory: product.subcategory || '',
      brand: product.brand || 'Original Brand',
      stock: product.stock || 20,
      in_stock: true,
      rating: 5.0,
      reviews_count: 0,
      images: product.images || [],
      is_bestseller: Boolean(product.is_bestseller),
      is_new_arrival: Boolean(product.is_new_arrival),
      is_weekly_deal: Boolean(product.is_weekly_deal),
      variants: product.variants || [],
      description: product.description || '',
      specifications: product.specifications || []
    };

    const { error } = await supabase.from('products').upsert(row, { onConflict: 'id' });
    if (error) {
      console.warn('Supabase bot upsert warning:', error.message);
    } else {
      console.log(`Synced product "${product.title}" to Supabase cloud!`);
    }
  } catch (err) {
    console.warn('Supabase sync exception:', err.message);
  }
}

function saveOrUpdateProduct(parsed, imagePaths = []) {
  const products = loadMockProducts();
  const newSku = (parsed.sku || '').trim().toLowerCase();

  let existingIndex = -1;

  if (newSku) {
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const pSku = (p.sku || '').trim().toLowerCase();
      if (pSku && newSku === pSku) {
        existingIndex = i;
        break;
      }
    }
  }

  const oldPrice = 0;
  const discountPercent = 0;

  if (existingIndex !== -1) {
    const existing = products[existingIndex];
    existing.title = parsed.title;
    existing.price = parsed.price;
    existing.currency = parsed.currency || 'UZS';
    existing.oldPrice = oldPrice;
    existing.old_price = oldPrice;
    existing.discountPercent = discountPercent;
    existing.discount_percent = discountPercent;
    existing.category = parsed.category.name;
    existing.category_slug = parsed.category.slug;
    existing.categorySlug = parsed.category.slug;
    existing.department = parsed.category.department;
    existing.departmentName = parsed.category.departmentName;
    existing.description = parsed.description;
    existing.brand = parsed.brand;
    existing.specifications = parsed.specifications || [];
    if (parsed.sku) existing.sku = parsed.sku;
    if (imagePaths && imagePaths.length > 0) {
      existing.images = imagePaths;
    }
    existing.updated_at = new Date().toISOString();

    writeMockProducts(products);
    return { isUpdate: true, product: existing };
  } else {
    const slug = (parsed.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'product') + '-' + Date.now().toString().slice(-4);

    const newProduct = {
      _id: `prod_${slug}`,
      id: `prod_${slug}`,
      title: parsed.title,
      slug: slug,
      sku: parsed.sku || `NSB-${Date.now().toString().slice(-6)}`,
      price: parsed.price,
      currency: parsed.currency || 'UZS',
      oldPrice: oldPrice,
      old_price: oldPrice,
      discountPercent: discountPercent,
      discount_percent: discountPercent,
      category: parsed.category.name,
      category_slug: parsed.category.slug,
      categorySlug: parsed.category.slug,
      department: parsed.category.department || 'uskunalar',
      departmentName: parsed.category.departmentName || 'Asbob-Uskunalar & Qurilish',
      subcategory: '',
      brand: parsed.brand,
      stock: 25,
      inStock: true,
      in_stock: true,
      rating: 5.0,
      reviews_count: 0,
      images: imagePaths.length > 0 ? imagePaths : [],
      is_bestseller: false,
      is_new_arrival: true,
      is_weekly_deal: false,
      variantLabel: '',
      variants: [],
      description: parsed.description,
      specifications: parsed.specifications || [
        { label: 'Yo‘nalish', value: parsed.category.departmentName || 'Do‘kon mahsuloti' },
        { label: 'Toifa', value: parsed.category.name },
        { label: 'Brend', value: parsed.brand },
        { label: 'Holati', value: 'Yangi / Kafolatli' },
        { label: 'Yetkazib berish', value: 'Buxoro va O‘zbekiston bo‘ylab tezkor' }
      ],
      created_at: new Date().toISOString()
    };

    products.unshift(newProduct);
    writeMockProducts(products);
    return { isUpdate: false, product: newProduct };
  }
}

function pushChangesToGitHub(productTitle, isUpdate) {
  try {
    console.log('Pushing changes to GitHub...');
    execSync('git add frontend/public/uploads frontend/src/services/mockData.js tools/bot_config.json', { cwd: ROOT_DIR });
    const status = execSync('git status --porcelain', { cwd: ROOT_DIR }).toString().trim();
    if (!status) {
      console.log('No new changes to commit.');
      return true;
    }
    const action = isUpdate ? 'update' : 'add';
    const safeTitle = (productTitle || 'item').replace(/["`$\\]/g, '');
    execSync(`git commit -m "feat(store): ${action} product '${safeTitle}' via Telegram"`, { cwd: ROOT_DIR });
    execSync('git push https://github.com/AbdulazizOrifjonov/Project_sport.git main', { cwd: ROOT_DIR, timeout: 60000 });
    console.log('Successfully pushed to GitHub! Render will auto-deploy.');
    return true;
  } catch (err) {
    console.warn('Git push warning:', err.message);
    return false;
  }
}

// Media Group Buffer
const mediaGroupBuffer = new Map();
const userSinglePhotoBuffer = new Map();

async function processMediaGroup(key, groupData) {
  const { chatId, photos, caption } = groupData;
  mediaGroupBuffer.delete(key);
  userSinglePhotoBuffer.delete(key);

  const cleanCaption = (caption || '').trim();
  if (!cleanCaption) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `❌ <b>Faqat rasm qabul qilinmaydi!</b>\n\nIltimos, rasm tagiga mahsulot <b>narxini</b> yozib yuboring (masalan: <code>750 ming</code>, <code>130 000 so‘m</code> yoki <code>$35</code>).`
    });
    return;
  }

  const priceCheck = extractPriceAndTitle(cleanCaption);
  if (!priceCheck || priceCheck.price <= 0) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `⚠️ <b>Mahsulot narxi topilmadi!</b>\n\nIltimos, rasm tagiga mahsulot narxini yozing (masalan: <code>750 ming</code>, <code>130 000 so‘m</code> yoki <code>$25</code>).`
    });
    return;
  }

  console.log(`Processing media group with ${photos.length} photos...`);

  await sendTelegram('sendMessage', {
    chat_id: chatId,
    text: `⏳ Mahsulot qabul qilinmoqda (${photos.length} ta rasm)... Sifatli nom va tavsif tayyorlanmoqda...`
  });

  const baseSlug = 'prod-' + Date.now().toString().slice(-6);

  // Download all photos (supports both compressed photo & uncompressed file/document)
  const downloadedImages = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const ext = photo._ext || 'jpg';
    const fileName = `${baseSlug}_${i + 1}.${ext}`;
    const imagePath = await downloadTelegramPhoto(photo.file_id, fileName);
    if (imagePath) downloadedImages.push(imagePath);
  }

  if (downloadedImages.length === 0) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      text: `❌ Rasmlarni yuklab olishda xatolik yuz berdi. Iltimos qaytadan yuboring.`
    });
    return;
  }

  // 1. Parse product info with knowledge base enrichment
  const parsed = parseProductInfo(caption);

  // 2. Save or update product
  const { isUpdate, product } = saveOrUpdateProduct(parsed, downloadedImages);

  // 3. Sync to Supabase
  await syncProductToSupabase(product);

  // 4. Push to GitHub
  pushChangesToGitHub(parsed.title, isUpdate);

  const priceText = product.currency === 'USD'
    ? `$${Number(product.price).toLocaleString('en-US')}`
    : `${new Intl.NumberFormat('uz-UZ').format(product.price)} so‘m`;
  const deptEmoji = product.department === 'yol-harakati' ? '🚧' : (product.department === 'uskunalar' ? '🛠️' : '🏆');

  const statusTitle = isUpdate
    ? `🔄 <b>Mavjud mahsulot yangilandi!</b>`
    : `✅ <b>Yangi mahsulot do‘konga qo‘shildi!</b>`;

  await sendTelegram('sendMessage', {
    chat_id: chatId,
    parse_mode: 'HTML',
    text: `${statusTitle}\n\n` +
          `📦 <b>Nomi:</b> ${product.title}\n` +
          `💰 <b>Narxi:</b> ${priceText}\n` +
          `${deptEmoji} <b>Toifa:</b> ${product.category}\n` +
          `🏷 <b>Brend:</b> ${product.brand}\n` +
          `🖼 <b>Galereya:</b> ${downloadedImages.length} ta rasm to‘liq biriktirildi\n\n` +
          `🚀 <b>Saytda jonli chiqdi:</b> To‘liq professional tavsif va xususiyatlari bilan kartochka ochildi!`
  });
}

// Bot polling loop
let lastUpdateId = 0;

async function pollUpdates() {
  try {
    const res = await fetch(`${TELEGRAM_API}/getUpdates?offset=${lastUpdateId + 1}&timeout=25`);
    const data = await res.json();

    if (data.ok && Array.isArray(data.result)) {
      for (const update of data.result) {
        lastUpdateId = Math.max(lastUpdateId, update.update_id);
        await handleUpdate(update);
      }
    }
  } catch (err) {
    console.error('Polling error:', err.message);
    await new Promise(r => setTimeout(r, 3000));
  }
  
  setImmediate(pollUpdates);
}

async function handleUpdate(update) {
  const msg = update.message;
  if (!msg) return;

  const chatId = msg.chat.id;
  const rawText = (msg.text || '').trim();
  const caption = (msg.caption || '').trim();

  // 1. /clear command
  if (rawText === '/clear' || rawText === '/delete_all' || rawText === '/tozala') {
    writeMockProducts([]);
    if (supabase) {
      try {
        await supabase.from('products').delete().neq('id', '___non_existent___');
      } catch (_) {}
    }
    pushChangesToGitHub('Barcha mahsulotlar tozalandi', false);

    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `🗑 <b>Barcha mahsulotlar to‘liq o‘chirildi!</b>\n\nSayt va baza toza holatga keltirildi. Endi yangi mahsulotlaringizni botga jo‘natishingiz mumkin.`
    });
    return;
  }

  // 2. /start command
  if (rawText.startsWith('/start') || rawText.startsWith('/help')) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `👋 <b>Assalomu alaykum!</b>\n\nDo‘koningizga mahsulot qo‘shuvchi rasmiy botga xush kelibsiz!\n\n` +
            `📂 <b>Do‘konda 3 ta katta yo‘nalish mavjud:</b>\n` +
            `1. 🛠️ <b>Asbob-Uskunalar & Qurilish:</b> Drellar, Balgarkalar, Gaykavyortlar, Arralar, Naborlar, Charx\n` +
            `2. 🚧 <b>Yo‘l & Harakat Xavfsizligi:</b> Yo‘l konuslari, Belgilar, To‘siqlar, Lejachiy politseyskiy, Ustunlar\n` +
            `3. 🏆 <b>Sport & Fitnes:</b> Trenajorlar, Gantellar, Stoykalar, Boks, Tatami, To‘plar\n\n` +
            `📌 <b>QANDAY QO‘SHILADI:</b>\n` +
            `Rasm + Tagiga narxi (masalan: <code>130 000 so‘m</code> yoki <code>4&1 nabor 895000</code>) yuborilganda, bot avtomatik to‘liq professional nom, brend va xususiyatlarini qo‘shib saytga chiqaradi!`
    });
    return;
  }

  // 3. Extract image from either msg.photo OR uncompressed msg.document (file image)
  let photoObj = null;
  if (msg.photo && msg.photo.length > 0) {
    photoObj = { ...msg.photo[msg.photo.length - 1], _ext: 'jpg' };
  } else if (
    msg.document &&
    ((msg.document.mime_type && msg.document.mime_type.startsWith('image/')) ||
      /\.(jpe?g|png|webp)$/i.test(msg.document.file_name || ''))
  ) {
    const extMatch = (msg.document.file_name || '').match(/\.(jpe?g|png|webp)$/i);
    const ext = extMatch ? extMatch[1].toLowerCase().replace('jpeg', 'jpg') : 'jpg';
    photoObj = { ...msg.document, _ext: ext };
  }

  if (!photoObj) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `❌ <b>Faqat matn qabul qilinmaydi!</b>\n\nIltimos, mahsulot <b>rasmini</b> (yoki fayl ko‘rinishidagi tiniq rasmini) narxi bilan birga yuboring.`
    });
    return;
  }

  const mediaGroupId = msg.media_group_id;

  // Buffer ALL photos/files in an album (media_group_id) first, since Telegram often puts caption only on the last item!
  if (mediaGroupId) {
    if (mediaGroupBuffer.has(mediaGroupId)) {
      const group = mediaGroupBuffer.get(mediaGroupId);
      group.photos.push(photoObj);
      if (caption) group.caption = caption;
      clearTimeout(group.timer);
      group.timer = setTimeout(() => processMediaGroup(mediaGroupId, group), 1800);
    } else {
      const group = {
        chatId,
        photos: [photoObj],
        caption: caption,
        timer: null
      };
      group.timer = setTimeout(() => processMediaGroup(mediaGroupId, group), 1800);
      mediaGroupBuffer.set(mediaGroupId, group);
    }
    return;
  }

  // 4. CHECK STRICT RULE: SINGLE PHOTO/FILE WITHOUT CAPTION
  if (!caption) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `❌ <b>Faqat rasm qabul qilinmaydi!</b>\n\nIltimos, rasm tagiga mahsulot <b>narxini</b> yozib yuboring (masalan: <code>750 ming</code>, <code>130 000 so‘m</code> yoki <code>$35</code>).`
    });
    return;
  }

  // 5. CHECK STRICT RULE: CAPTION MUST HAVE A PRICE
  const priceCheck = extractPriceAndTitle(caption);
  if (!priceCheck || priceCheck.price <= 0) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `⚠️ <b>Mahsulot narxi topilmadi!</b>\n\nIltimos, rasm tagiga mahsulot narxini yozing (masalan: <code>750 ming</code>, <code>130 000 so‘m</code> yoki <code>$25</code>).`
    });
    return;
  }

  // 6. PHOTO OR IMAGE FILE IS VALID AND HAS PRICE -> PROCESS!
  const largestPhoto = photoObj;

  // SINGLE PHOTO
  const userKey = `user_${chatId}`;
  if (userSinglePhotoBuffer.has(userKey)) {
    const buffer = userSinglePhotoBuffer.get(userKey);
    if (caption && buffer.caption) {
      clearTimeout(buffer.timer);
      processMediaGroup(userKey, buffer);
      const newGroup = {
        chatId,
        photos: [largestPhoto],
        caption: caption,
        timer: null
      };
      newGroup.timer = setTimeout(() => processMediaGroup(userKey, newGroup), 1500);
      userSinglePhotoBuffer.set(userKey, newGroup);
      return;
    }

    buffer.photos.push(largestPhoto);
    if (caption) buffer.caption = caption;
    clearTimeout(buffer.timer);
    buffer.timer = setTimeout(() => processMediaGroup(userKey, buffer), 1500);
    return;
  }

  const singleGroup = {
    chatId,
    photos: [largestPhoto],
    caption: caption,
    timer: null
  };
  singleGroup.timer = setTimeout(() => processMediaGroup(userKey, singleGroup), 1500);
  userSinglePhotoBuffer.set(userKey, singleGroup);
}

console.log('====================================================');
console.log('🤖 MULTI-DEPARTMENT STORE TELEGRAM BOT RUNNING v2.5');
console.log(`Bot username: @Ttxtxtctxtxtxhxhchxhbot`);
console.log('Smart Auto-Enricher: Power Tools & Road Safety');
console.log('Strict validation: Only Photo+Price accepted!');
console.log('====================================================');

// Start polling
pollUpdates();
