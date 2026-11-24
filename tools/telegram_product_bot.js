/**
 * SPORT OUTLET & MULTI-DEPARTMENT STORE — Telegram Product Bot v2.0
 * Bot Token: 6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w
 * Bot Username: @Ttxtxtctxtxtxhxhchxhbot
 * 
 * 3 TA ASOSIY YO'NALISH:
 * 1. 🏆 SPORT & FITNES (Trenajorlar, Gantellar, Podstavkalar, Boks/Tatami, To'plar, Fitnes)
 * 2. 🚧 YO'L & HARAKAT XAVFSIZLIGI (Yo'l konuslari, Belgilar, To'siqlar, Lejachiy politseyskiy, Ustunlar, To'xtatgichlar)
 * 3. 🛠️ ASBOB-USKUNALAR & QURILISH (Drellar, Balgarkalar, Perforatorlar, Svarka apparatlari, Arralar, Naborlar)
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const UPLOADS_DIR = path.join(FRONTEND_DIR, 'public', 'uploads');
const MOCK_DATA_PATH = path.join(FRONTEND_DIR, 'src', 'services', 'mockData.js');
const CONFIG_FILE = path.join(__dirname, 'bot_config.json');

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

function getGeminiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
      if (cfg.gemini_key) return cfg.gemini_key.trim();
    } catch (_) {}
  }
  return '';
}

function saveGeminiKey(key) {
  try {
    let cfg = {};
    if (fs.existsSync(CONFIG_FILE)) {
      cfg = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    }
    cfg.gemini_key = key.trim();
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(cfg, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Failed to save config:', e);
    return false;
  }
}

// 3 TA KATTA YO'NALISH TOIFALARI (Bilingual: Uzbek + Russian + Cyrillic)
const CATEGORIES = [
  // 1. YO'L VA HARAKAT XAVFSIZLIGI (Yo'l Jihozlari)
  {
    slug: 'yol-konuslari',
    name: 'Yo‘l Konuslari & To‘siqlar',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'Cone',
    keywords: [
      'konus', 'konis', 'конус', 'конусы', 'dorojniy konus', 'yo‘l konusi', 'yol konusi', 'rezina konus', 'tpu', 'тпу',
      'reflektor', 'svetootrajatel', 'to‘siq', 'tosiq', 'bariyer', 'barier', 'barrikada', 'fexting', 'fensing', 'lentasi',
      'гармошка', 'видвижной', 'выдвижной', 'garmoshka', 'vidvijnoy', 'плитка', 'тактильный', 'тактильная', 'taktil', 'taktilniy',
      'plitka', 'pvc', 'пвх', 'водоналивной', 'vodonalivnoy', 'zabor', 'panjara', 'сетка'
    ]
  },
  {
    slug: 'suniy-notekislik',
    name: 'Sun‘iy Notekislik & Ustunlar',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'Construction',
    keywords: [
      'notekislik', 'неровность', 'искусственная неровность', 'lejachiy', 'politseyskiy', 'лежачий', 'полицейский', 'leja',
      'stolbik', 'ustun', 'столбик', 'делиниатор', 'deliniator', 'katofot', 'катафот', 'демурун',
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
      'yo‘l belgisi', 'yol belgisi', 'znak', 'znaki', 'знак', 'знаки', 'дорожный знак', 'ko‘zgu', 'sferik', 'sfericheskoye', 'зеркало', 'сферическое',
      'ogohlantiruvchi', 'yo‘l ko‘rsatkich', 'shchit', 'табличка',
      'стойка ограждения', 'столбик с лентой', 'turniket ustun', 'turniket', 'to‘siq ustun', 'tosiq ustun', 'lentali ustun', 'arqonli ustun', 'stanchion', 'plastina', 'пластина'
    ]
  },

  // 2. ASBOB-USKUNALAR & QURILISH TEXNIKASI
  {
    slug: 'drellar-shurupovyort',
    name: 'Drellar & Shurupovyortlar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Wrench',
    keywords: [
      'drel', 'drill', 'дрель', 'shurupovert', 'shurupovyort', 'шуруповерт', 'gaykavyort', 'gaykovert', 'гайковерт',
      'vintovyort', 'shurupavort', 'drel-shurupovyort', 'akkumulyator drel', 'аккумуляторная дрель', 'zarbli drel', 'mikser'
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
    keywords: ['svarka', 'сварка', 'payvandlash', 'invertor', 'инвертор', 'svarochniy', 'elektrod', 'электрод', 'maska', 'xameleon', 'хамелеон', 'generator', 'генератор', 'kompressor', 'компрессор', 'aragon', 'yarimavtomat', 'полуавтомат']
  },
  {
    slug: 'arralar-uskunalar',
    name: 'Arralar & Elektr Uskunalar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Construction',
    keywords: ['arra', 'пила', 'pila', 'diskoviy', 'дисковая', 'sirkulyarka', 'циркулярка', 'lobzik', 'лобзик', 'frez', 'фрезер', 'stanok', 'станок', 'torsovka', 'торцовка', 'benzopila', 'бензопила', 'elektr arra', 'цепная пила', 'trimmer', 'триммер', 'maysa']
  },
  {
    slug: 'lazer-qol-asboblari',
    name: 'Lazer Uroven & Asbob Naborlari',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Wrench',
    keywords: ['uroven', 'уровень', 'lazer', 'лазер', 'lazerniy', 'лазерный', 'rulyetka', 'рулетка', 'nabor', 'набор', 'to‘plam', 'kalit', 'otvyortka', 'отвертка', 'asboblar', 'chemodan', 'klyuch', 'ключи', 'fen', 'фен', 'turbo fen', 'технический фен']
  },

  // 3. SPORT & FITNES
  {
    slug: 'trenajorlar',
    name: 'Trenajorlar & Kardio',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Activity',
    keywords: ['masaj', 'massaj', 'kreslo', 'massage', 'trenajor', 'yugurish', 'dorojka', 'yo‘lakcha', 'yolakcha', 'velo', 'velotrenajor', 'bike', 'kardio', 'kuch trenajori', 'multi-gym', 'treadmill', 'беговая дорожка', 'тренажер', 'велотренажер', 'массажное кресло']
  },
  {
    slug: 'gantellar',
    name: 'Gantellar & Shtangalar',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Dumbbell',
    keywords: ['gantel', 'shtanga', 'grif', 'disk', 'blin', 'ogirlik', 'og‘irlik', 'dumbel', 'dumbbell', 'barbell', 'kauchuk', 'гантель', 'штанга', 'диск', 'блин', 'гриф', 'гантели']
  },
  {
    slug: 'stoykalar',
    name: 'Podstavka & Skameykalar',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Layers',
    keywords: ['podstavka', 'stoyka', 'skameyka', 'bench', 'turnik', 'brus', 'стойка', 'подставка', 'скамейка', 'турник', 'брусья']
  },
  {
    slug: 'boks-yakka-kurash',
    name: 'Boks & Yakka Kurash',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Shield',
    keywords: ['tatami', 'mat', 'boks', 'qop', 'grusha', 'kurash', 'kimono', 'bint', 'venum', 'everlast', 'dzyudo', 'karate', 'sambo', 'lapa', 'perchatka', 'perchatkalar', 'бокс', 'перчатки', 'груша', 'кимоно', 'татами']
  },
  {
    slug: 'toplar-oyinlar',
    name: 'To‘plar & Sport O‘yinlari',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Trophy',
    keywords: ['tennis', 'stol tennis', 'raketka', 'padel', 'futbol', 'top', 'to‘p', 'koptok', 'voleybol', 'basketbol', 'мяч', 'футбол', 'теннис']
  },
  {
    slug: 'fitnes-aksessuarlari',
    name: 'Fitnes & Sport Aksessuarlari',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Award',
    keywords: ['rezinka', 'espander', 'qolqop', 'qo‘lqop', 'sumka', 'gilamcha', 'kamar', 'tasma', 'suv idish', 'эспандер', 'коврик', 'резинка']
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

  // Smart department heuristics if no direct keyword matched:
  if (/(?:sm|mm|metr|kg|xavfsiz|yo'l|yo‘l|qurilish|asbob)/i.test(lower)) {
    return CATEGORIES.find(c => c.slug === 'yol-konuslari');
  }

  // Default to Road Safety if road terms or generic
  return CATEGORIES.find(c => c.slug === 'yol-konuslari');
}

function detectBrand(text = '') {
  const lower = text.toLowerCase();
  const brands = [
    // Tools
    'Makita', 'DeWalt', 'Bosch', 'Total', 'Crown', 'Ingco', 'Dnepr-M', 'Denzel', 'Resanta', 'Edon', 'Huter', 'Stanley', 'Metabo',
    // Road & Safety
    'RoadSafety Pro', 'Yo‘l Standart', 'AutoSafety', 'TrafficPro', 'Uzbekistan Airports', 'SafeRoad',
    // Sport
    'WYUE', 'Sport Line', 'Anelus', 'IronPower', 'ProForm', 'Nike', 'Under Armour', 'Adidas', 'Puma', 'Jordan', 'Everlast', 'Venum'
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
  let rawPriceLabel = '';
  let priceSubstr = '';

  // 1. Check for Dollar prices ($10, 10$, 35 USD)
  for (const line of rawLines) {
    const dollarMatch = line.match(/(?:\$)\s*(\d+(?:[.,]\d+)?)/i) ||
                        line.match(/(\d+(?:[.,]\d+)?)\s*(?:\$|usd|долл)/i);
    if (dollarMatch) {
      const num = parseFloat(dollarMatch[1].replace(',', '.'));
      if (num > 0) {
        priceUSD = num;
        price = Math.round(num * USD_RATE);
        rawPriceLabel = `$${num} (${new Intl.NumberFormat('uz-UZ').format(price)} so'm)`;
        priceSubstr = dollarMatch[0];
        break;
      }
    }
  }

  // 2. Check for UZS prices with currency word (so'm, sum, uzs, ming, etc.)
  if (!price) {
    for (const line of rawLines) {
      const somMatch = line.match(/\b(\d{1,3}(?:[\s.,]\d{3})+|\d{4,9})\s*(?:so'?m|sōm|sum|ming|uzs|сум)\b/i);
      if (somMatch) {
        let digits = somMatch[1].replace(/[^\d]/g, '');
        if (/ming/i.test(somMatch[0])) {
          digits = digits + '000';
        }
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
    rawPriceLabel,
    priceSubstr
  };
}

/**
 * Intelligent parser for Telegram captions
 */
function parseProductInfo(text = '', aiResult = null) {
  let normalizedText = (text || '').trim();
  const { title: rawTitle, price, priceUSD, rawPriceLabel } = extractPriceAndTitle(normalizedText);

  let title = '';
  let brand = '';
  let category = null;
  let description = '';

  if (aiResult) {
    title = aiResult.title || '';
    brand = aiResult.brand || '';
    description = aiResult.description || '';
    if (aiResult.categorySlug) {
      category = CATEGORIES.find(c => c.slug === aiResult.categorySlug);
    }
  }

  if (!title) {
    title = rawTitle;
  }

  if (!category) {
    category = detectCategory(`${title} ${normalizedText}`);
  }

  if (!brand) {
    brand = detectBrand(`${title} ${normalizedText}`);
  }

  // Polish title if it is in Russian or short
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('конус') || lowerTitle.includes('konus')) {
    title = title.replace(/конус/i, 'Yo‘l harakati xavfsizlik konusi');
  } else if (lowerTitle.includes('плитка') || lowerTitle.includes('тактильн')) {
    title = title.replace(/тактильный\s*плитка/i, 'PVX Taktil plitka (300x300 mm)');
  } else if (lowerTitle.includes('гармошка')) {
    title = title.replace(/гармошка\s*видвижной/i, 'Garmoshka suriluvchi metall yo‘l to‘sig‘i');
  } else if (lowerTitle.includes('отбойник') || lowerTitle.includes('колесо')) {
    title = title.replace(/колесо\s*отбойник/i, 'Kolesootboynik - Avtomobil to‘xtatuvchi rezina');
  }

  if (!title || title.length < 3) {
    title = `${category.name} Mahsuloti`;
  }

  if (!description) {
    description = `${title} - sertifikatlangan, yuqori chidamli va sifatli mahsulot. Buxoro va butun O‘zbekiston bo‘ylab tezkor yetkazib berish xizmati mavjud.`;
  }

  let sku = '';
  const skuMatch = normalizedText.match(/(?:kodi?|sku|artikul|kod)\s*[:=-]?\s*([a-zA-Z0-9_-]+)/i);
  if (skuMatch) sku = skuMatch[1];

  return {
    title,
    sku,
    price: price || 150000,
    priceUSD,
    rawPriceLabel,
    description,
    category,
    brand,
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

function normalizeKey(str = '') {
  return str.toLowerCase().replace(/[^a-z0-9]/gi, '');
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
      is_bestseller: true,
      is_new_arrival: true,
      is_weekly_deal: false,
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

  // Only update existing product if SKU matches or if explicit update was requested
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

  const oldPrice = Math.round(parsed.price * 1.15);
  const discountPercent = Math.round(((oldPrice - parsed.price) / oldPrice) * 100);

  if (existingIndex !== -1) {
    const existing = products[existingIndex];
    existing.title = parsed.title;
    existing.price = parsed.price;
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
    if (parsed.sku) existing.sku = parsed.sku;
    if (imagePaths && imagePaths.length > 0) {
      existing.images = imagePaths;
    }
    existing.updated_at = new Date().toISOString();

    writeMockProducts(products);
    return { isUpdate: true, product: existing };
  } else {
    // Generate fresh unique slug and ID for every new product
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
      oldPrice: oldPrice,
      old_price: oldPrice,
      discountPercent: discountPercent,
      discount_percent: discountPercent,
      category: parsed.category.name,
      category_slug: parsed.category.slug,
      categorySlug: parsed.category.slug,
      department: parsed.category.department || 'yol-harakati',
      departmentName: parsed.category.departmentName || 'Yo‘l & Harakat Xavfsizligi',
      subcategory: '',
      brand: parsed.brand,
      stock: 25,
      inStock: true,
      in_stock: true,
      rating: 5.0,
      reviews_count: 0,
      images: imagePaths.length > 0 ? imagePaths : [],
      is_bestseller: true,
      is_new_arrival: true,
      is_weekly_deal: false,
      variantLabel: '',
      variants: [],
      description: parsed.description,
      specifications: [
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
    execSync('git push origin main', { cwd: ROOT_DIR, timeout: 60000 });
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

  console.log(`Processing media group with ${photos.length} photos...`);

  await sendTelegram('sendMessage', {
    chat_id: chatId,
    text: `⏳ Mahsulot qabul qilinmoqda (${photos.length} ta rasm)... Tahlil qilinmoqda...`
  });

  const baseSlug = 'prod-' + Date.now().toString().slice(-6);

  // Download all photos
  const downloadedImages = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const fileName = `${baseSlug}_${i + 1}.jpg`;
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

  // 1. Parse product info
  const parsed = parseProductInfo(caption, null);

  // 2. Save or update product
  const { isUpdate, product } = saveOrUpdateProduct(parsed, downloadedImages);

  // 3. Sync to Supabase
  await syncProductToSupabase(product);

  // 4. Push to GitHub
  pushChangesToGitHub(parsed.title, isUpdate);

  const formattedPrice = new Intl.NumberFormat('uz-UZ').format(product.price);
  const deptEmoji = product.department === 'yol-harakati' ? '🚧' : (product.department === 'uskunalar' ? '🛠️' : '🏆');

  const statusTitle = isUpdate
    ? `🔄 <b>Mavjud mahsulot yangilandi!</b>`
    : `✅ <b>Yangi mahsulot do‘konga qo‘shildi!</b>`;

  await sendTelegram('sendMessage', {
    chat_id: chatId,
    parse_mode: 'HTML',
    text: `${statusTitle}\n\n` +
          `📦 <b>Nomi:</b> ${product.title}\n` +
          `💰 <b>Narxi:</b> ${formattedPrice} so‘m\n` +
          `${deptEmoji} <b>Toifa:</b> ${product.category}\n` +
          `🏷 <b>Brend:</b> ${product.brand}\n` +
          `🖼 <b>Galereya:</b> ${downloadedImages.length} ta rasm to‘liq biriktirildi\n\n` +
          `🚀 <b>Saytda jonli chiqdi:</b> Mahsulot kartochkasi to‘liq ochildi!`
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
            `1. 🚧 <b>Yo‘l & Harakat Xavfsizligi:</b> Yo‘l konuslari, Belgilar, To‘siqlar, Lejachiy politseyskiy, Ustunlar\n` +
            `2. 🛠️ <b>Asbob-Uskunalar & Qurilish:</b> Drellar, Balgarkalar, Perforatorlar, Svarka, Arralar\n` +
            `3. 🏆 <b>Sport & Fitnes:</b> Trenajorlar, Gantellar, Stoykalar, Boks, Tatami, To‘plar\n\n` +
            `📌 <b>QANDAY QO‘SHILADI:</b>\n` +
            `Rasm + Tagiga narxi (masalan: <code>Конус TPU 75sm 10$</code> yoki <code>Тактильный плитка 16000 из pvc</code>) yuborilganda, mahsulot darhol to‘g‘ri toifasiga tushadi va saytda jonli chiqadi!`
    });
    return;
  }

  // 3. CHECK STRICT RULE: TEXT ONLY (NO PHOTO)
  if (!msg.photo || msg.photo.length === 0) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `❌ <b>Faqat matn qabul qilinmaydi!</b>\n\nIltimos, mahsulot <b>rasmini</b> narxi bilan birga yuboring.`
    });
    return;
  }

  // 4. CHECK STRICT RULE: PHOTO WITHOUT CAPTION
  if (!caption) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `❌ <b>Faqat rasm qabul qilinmaydi!</b>\n\nIltimos, rasm tagiga mahsulot <b>narxini</b> va qisqa nomini yozib yuboring (masalan: <code>Конус TPU 75sm 10$</code> yoki <code>16 000 so‘m</code>).`
    });
    return;
  }

  // 5. CHECK STRICT RULE: CAPTION MUST HAVE A PRICE
  const priceCheck = extractPriceAndTitle(caption);
  if (!priceCheck || priceCheck.price <= 0) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `⚠️ <b>Mahsulot narxi topilmadi!</b>\n\nIltimos, rasm tagiga mahsulot narxini yozing (masalan: <code>$10</code> yoki <code>130 000 so‘m</code>).`
    });
    return;
  }

  // 6. PHOTO IS VALID AND HAS PRICE -> PROCESS!
  const largestPhoto = msg.photo[msg.photo.length - 1];
  const mediaGroupId = msg.media_group_id;

  if (mediaGroupId) {
    if (mediaGroupBuffer.has(mediaGroupId)) {
      const group = mediaGroupBuffer.get(mediaGroupId);
      group.photos.push(largestPhoto);
      if (caption) group.caption = caption;
      clearTimeout(group.timer);
      group.timer = setTimeout(() => processMediaGroup(mediaGroupId, group), 1800);
    } else {
      const group = {
        chatId,
        photos: [largestPhoto],
        caption: caption,
        timer: null
      };
      group.timer = setTimeout(() => processMediaGroup(mediaGroupId, group), 1800);
      mediaGroupBuffer.set(mediaGroupId, group);
    }
    return;
  }

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
console.log('🤖 MULTI-DEPARTMENT STORE TELEGRAM BOT RUNNING v2.0');
console.log(`Bot username: @Ttxtxtctxtxtxhxhchxhbot`);
console.log('Categories: Yo\'l Xavfsizligi | Asbob-Uskunalar | Sport');
console.log('Strict validation: Only Photo+Price accepted!');
console.log('====================================================');

// Start polling
pollUpdates();
