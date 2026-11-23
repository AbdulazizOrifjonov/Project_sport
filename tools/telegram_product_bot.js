/**
 * SPORT OUTLET & MULTI-DEPARTMENT STORE — Telegram Product Bot
 * Bot Token: 6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w
 * Bot Username: @Ttxtxtctxtxtxhxhchxhbot
 * 
 * 3 TA ASOSIY YO'NALISH:
 * 1. 🏆 SPORT & FITNES (Trenajorlar, Gantellar, Podstavkalar, Boks/Tatami, To'plar, Fitnes)
 * 2. 🚧 YO'L & HARAKAT XAVFSIZLIGI (Yo'l konuslari, Belgilar, To'siqlar, Lejachiy politseyskiy)
 * 3. 🛠️ ASBOB-USKUNALAR & QURILISH (Drellar, Balgarkalar, Perforatorlar, Svarka apparatlari, Arralar)
 * 
 * QAT'IY QOIDALAR:
 * - Faqat rasm bo'lsa (tagida narxi bo'lmasa) -> QABUL QILMAYDI!
 * - Faqat matn bo'lsa (rasm biriktirilmagan bo'lsa) -> QABUL QILMAYDI!
 * - Rasm + Narx bo'lsa -> Qabul qiladi! Rasmga qarab AI Vision / aqlli tahlilchi orqali toifasi va nomini qo'yadi!
 * 
 * BUYRUQLAR:
 * - /clear yoki /tozala: Barcha eski mahsulotlarni tozalaydi
 * - /key <GEMINI_API_KEY>: Rasmga qarab AI mahsulot nomini aniqlashi uchun bepul Gemini API kalitini kiritish
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

// Ensure uploads folder exists
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

// 3 TA KATTA YO'NALISH TOIFALARI (Sport, Yo'l Xavfsizligi, Asbob-Uskunalar)
const CATEGORIES = [
  // 1. SPORT & FITNES
  {
    slug: 'trenajorlar',
    name: 'Trenajorlar & Kardio',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Activity',
    keywords: ['masaj', 'massaj', 'kreslo', 'massage', 'trenajor', 'yugurish', 'dorojka', 'yo‘lakcha', 'yolakcha', 'velo', 'velotrenajor', 'bike', 'kardio', 'kuch trenajori', 'multi-gym', 'treadmill']
  },
  {
    slug: 'gantellar',
    name: 'Gantellar & Shtangalar',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Dumbbell',
    keywords: ['gantel', 'shtanga', 'grif', 'disk', 'blin', 'ogirlik', 'og‘irlik', 'dumbel', 'dumbbell', 'barbell', 'kauchuk']
  },
  {
    slug: 'stoykalar',
    name: 'Podstavka & Skameykalar',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Layers',
    keywords: ['podstavka', 'stoyka', 'skameyka', 'bench', 'turnik', 'brus', 'sc80263', 'sc80270', 'ax003', 'an-001']
  },
  {
    slug: 'boks-yakka-kurash',
    name: 'Boks & Yakka Kurash',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Shield',
    keywords: ['tatami', 'mat', 'boks', 'qop', 'grusha', 'kurash', 'kimono', 'bint', 'venum', 'everlast', 'dzyudo', 'karate', 'sambo', 'lapa', 'perchatka', 'perchatkalar']
  },
  {
    slug: 'toplar-oyinlar',
    name: 'To‘plar & Sport O‘yinlari',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Trophy',
    keywords: ['tennis', 'stol tennis', 'raketka', 'padel', 'k2008', 'futbol', 'top', 'to‘p', 'koptok', 'voleybol', 'basketbol']
  },
  {
    slug: 'fitnes-aksessuarlari',
    name: 'Fitnes & Sport Aksessuarlari',
    department: 'sport',
    departmentName: 'Sport & Fitnes',
    icon: 'Award',
    keywords: ['rezinka', 'espander', 'qolqop', 'qo‘lqop', 'sumka', 'gilamcha', 'kamar', 'tasma', 'suv idish']
  },

  // 2. YO'L VA HARAKAT XAVFSIZLIGI (Ko'cha / Yo'l anjomlari)
  {
    slug: 'yol-konuslari',
    name: 'Yo‘l Konuslari & To‘siqlar',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'Cone',
    keywords: ['konus', 'konis', 'dorojniy konus', 'yo‘l konusi', 'yol konusi', 'rezina konus', 'reflektor', 'svetootrajatel', 'to‘siq', 'tosiq', 'barrikada', 'fexting', 'fensing', 'lentasi', 'xavfsizlik lentasi']
  },
  {
    slug: 'yol-belgilari',
    name: 'Yo‘l Belgilari & Ko‘zgular',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'AlertTriangle',
    keywords: ['yo‘l belgisi', 'yol belgisi', 'znak', 'znaki', 'ko‘zgu', 'sferik', 'sfericheskoye', 'ogohlantiruvchi', 'yo‘l ko‘rsatkich', 'shchit']
  },
  {
    slug: 'suniy-notekislik',
    name: 'Sun‘iy Notekislik & Ustunlar',
    department: 'yol-harakati',
    departmentName: 'Yo‘l & Harakat Xavfsizligi',
    icon: 'Construction',
    keywords: ['notekislik', 'lejachiy', 'politseyskiy', 'leja', 'suniy', 'sun‘iy', 'rezina politseyskiy', 'stolbik', 'ustun', 'deliniator', 'katofot', 'signal chiroq']
  },

  // 3. ASBOB-USKUNALAR & QURILISH TEXNIKASI (Drel, Balgarka va h.k.)
  {
    slug: 'drellar-shurupovyort',
    name: 'Drellar & Shurupovyortlar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Wrench',
    keywords: ['drel', 'drill', 'shurupovert', 'shurupovyort', 'gaykavyort', 'gaykovert', 'vintovyort', 'shurupavort', 'drel-shurupovyort', 'akkumulyator drel', 'zarbli drel', 'mikser']
  },
  {
    slug: 'balgarkalar-ushm',
    name: 'Balgarka & Shlifovka',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'HardHat',
    keywords: ['balgarka', 'bolgarka', 'ushm', 'burchakli silliqlash', 'shlifovka', 'rezak', 'diska', 'ugloshlifovalnaya', 'shlifovalniy']
  },
  {
    slug: 'perforator-otboynik',
    name: 'Perforatorlar & Otboyniklar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Hammer',
    keywords: ['perforator', 'otboynik', 'bolg‘a', 'zarbli bolg‘a', 'beton', 'otboyniy', 'pik', 'zubilo', 'sds']
  },
  {
    slug: 'payvandlash-svarka',
    name: 'Payvandlash & Generatorlar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Zap',
    keywords: ['svarka', 'payvandlash', 'invertor', 'svarochniy', 'elektrod', 'maska', 'xameleon', 'generator', 'kompressor', 'aragon', 'yarimavtomat']
  },
  {
    slug: 'arralar-uskunalar',
    name: 'Arralar & Elektr Uskunalar',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Construction',
    keywords: ['arra', 'pila', 'diskoviy', 'sirkulyarka', 'lobzik', 'frez', 'stanok', 'torsovka', 'benzopila', 'elektr arra']
  },
  {
    slug: 'lazer-qol-asboblari',
    name: 'Lazer Uroven & Asbob Naborlari',
    department: 'uskunalar',
    departmentName: 'Asbob-Uskunalar & Qurilish',
    icon: 'Wrench',
    keywords: ['uroven', 'lazer', 'lazerniy', 'rulyetka', 'nabor', 'to‘plam', 'kalit', 'otvyortka', 'asboblar', 'chemodan', 'klyuch']
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
  return { slug: 'trenajorlar', name: 'Trenajorlar & Kardio', department: 'sport', departmentName: 'Sport & Fitnes' };
}

function detectBrand(text = '') {
  const lower = text.toLowerCase();
  const brands = [
    // Tools
    'Makita', 'DeWalt', 'Bosch', 'Total', 'Crown', 'Ingco', 'Dnepr-M', 'Denzel', 'Resanta', 'Edon', 'Huter', 'Stanley', 'Metabo',
    // Road & Safety
    'Yo‘l Standart', 'RoadSafety', 'ProRoad', 'AutoSafety',
    // Sport
    'WYUE', 'Sport Line', 'Anelus', 'IronPower', 'ProForm', 'Nike', 'Under Armour', 'Adidas', 'Puma', 'Jordan', 'Everlast', 'Venum', 'SPORT OUTLET'
  ];
  for (const b of brands) {
    if (lower.includes(b.toLowerCase())) return b;
  }
  return 'Original Brand';
}

/**
 * AI Vision Analysis: Sends image to Gemini Vision to automatically determine product name, brand and category
 */
async function analyzeProductImageWithAI(imageRelativePath, userCaption = '') {
  const apiKey = getGeminiKey();
  if (!apiKey) return null;

  try {
    const fullLocalPath = path.isAbsolute(imageRelativePath)
      ? imageRelativePath
      : path.join(FRONTEND_DIR, 'public', imageRelativePath.replace(/^\//, ''));

    if (!fs.existsSync(fullLocalPath)) return null;

    const imgBuffer = fs.readFileSync(fullLocalPath);
    const base64Data = imgBuffer.toString('base64');
    const mimeType = fullLocalPath.endsWith('.png') ? 'image/png' : 'image/jpeg';

    const promptText = `Sen internet-do'kon uchun professional tovar mutaxassisisan. Rasmda ko'rsatilgan mahsulotni aniqla.
Do'konda 3 ta katta yo'nalish bor:
1) Sport & Fitnes:
   - trenajorlar (yugurish yo'lakchasi, velotrenajor, massaj kreslo)
   - gantellar (gantellar, shtangalar, disklar)
   - stoykalar (podstavkalar, skameykalar, turniklar)
   - boks-yakka-kurash (tatami, boks qo'lqop, qop, kimono)
   - toplar-oyinlar (futbol, tennis, padel, raketka)
   - fitnes-aksessuarlari (rezinkalar, gilamcha, kamar)
2) Yo'l Harakati & Xavfsizlik jihozlari:
   - yol-konuslari (yo'l konuslari, to'siqlar, barrikadalar)
   - yol-belgilari (yo'l belgilari, ko'zgular, shchitlar)
   - suniy-notekislik (lejachiy politseyskiy, to'siq ustunlar/stolbik, katofot)
3) Asbob-Uskunalar & Qurilish:
   - drellar-shurupovyort (drel, shurupovyort, gaykavyort)
   - balgarkalar-ushm (balgarka, burchakli silliqlash)
   - perforator-otboynik (perforator, otboynik)
   - payvandlash-svarka (svarka apparati, generator, kompressor)
   - arralar-uskunalar (diskoviy arra, lobzik, frezer)
   - lazer-qol-asboblari (lazer sath o'lchagich, asbob naborlari)

Foydalanuvchi yozgan qo'shimcha izoh: "${userCaption || ''}"

Faqat quyidagi JSON formatida javob ber (hech qanday qo'shimcha matnsiz va markdown teglarsiz, to'g'ridan-to'g'ri JSON):
{
  "title": "Mahsulotning o'zbek tilidagi to'liq va aniq nomi (masalan: Yo'l Xavfsizlik Konusi 75sm yoki Makita Zarbli Drel HP1630 yoki Masaj Kreslo AX-1007)",
  "brand": "Aniqlangan brend (masalan: Makita, DeWalt, Total, Crown, Sport Line, WYUE yoki Yo'l Standart)",
  "categorySlug": "yuqoridagi sluglardan eng mos keladigani",
  "description": "Mahsulot haqida 1-2 jumlali o'zbekcha tavsif"
}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: promptText },
              {
                inline_data: {
                  mime_type: mimeType,
                  data: base64Data
                }
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 400
        }
      })
    });

    const data = await response.json();
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      const rawText = data.candidates[0].content.parts[0].text.trim()
        .replace(/^```json\s*/i, '')
        .replace(/```$/i, '')
        .trim();
      const parsed = JSON.parse(rawText);
      console.log('🤖 Gemini AI recognized product:', parsed);
      return parsed;
    }
  } catch (err) {
    console.warn('Gemini Vision AI exception:', err.message);
  }
  return null;
}

/**
 * Extracts price from caption
 */
function extractPrice(text = '') {
  let normalized = (text || '').trim();
  const rawLines = normalized.split('\n').map(l => l.trim()).filter(Boolean);

  let price = 0;
  let priceUSD = 0;
  let rawPriceLabel = '';

  for (const line of rawLines) {
    const isPriceLine = /(?:narx[i]?|baho[si]?|price|\$)/i.test(line);

    // Dollar price
    const dollarMatch = line.match(/(?:narx[i]?|baho[si]?|price)?\s*[:=-]?\s*\$?\s*(\d+(?:[.,]\d+)?)\s*(?:\$|usd)/i) ||
                        (isPriceLine && line.match(/(\d+(?:[.,]\d+)?)\s*\$/i)) ||
                        (isPriceLine && line.match(/\$\s*(\d+(?:[.,]\d+)?)/i));

    if (dollarMatch) {
      const num = parseFloat(dollarMatch[1].replace(',', '.'));
      if (num > 0) {
        priceUSD = num;
        price = Math.round(num * USD_RATE);
        rawPriceLabel = `$${num} (${new Intl.NumberFormat('uz-UZ').format(price)} so'm)`;
        return { price, priceUSD, rawPriceLabel };
      }
    }

    // UZS price
    if (isPriceLine) {
      const uzsDigits = line.replace(/[^\d]/g, '');
      if (uzsDigits.length >= 4) {
        price = parseInt(uzsDigits, 10);
        rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
        return { price, priceUSD: 0, rawPriceLabel };
      }
    }
  }

  // Standalone numbers in caption
  for (const line of rawLines) {
    const standAloneDollar = line.match(/(\d{1,5})\s*\$/) || line.match(/\$\s*(\d{1,5})/);
    if (standAloneDollar) {
      const num = parseInt(standAloneDollar[1], 10);
      priceUSD = num;
      price = Math.round(num * USD_RATE);
      rawPriceLabel = `$${num} (${new Intl.NumberFormat('uz-UZ').format(price)} so'm)`;
      return { price, priceUSD, rawPriceLabel };
    }

    // Clean line of model patterns like 4&1, 2&1, 3in1 before checking for standalone digits
    const cleanedLine = line.replace(/\b\d+\s*&\s*\d+\b/g, '').replace(/\b\d+\s*in\s*\d+\b/gi, '');

    const somMatch = cleanedLine.match(/(\d[\d\s.,]{3,})\s*(?:so'?m|sōm|sum|ming|uzs)/i);
    if (somMatch) {
      let digits = somMatch[1].replace(/[^\d]/g, '');
      if (/ming/i.test(line)) {
        digits = digits + '000';
      }
      if (digits.length >= 4) {
        price = parseInt(digits, 10);
        rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
        return { price, priceUSD: 0, rawPriceLabel };
      }
    }
  }

  // If user just typed a 4+ digit number
  for (const line of rawLines) {
    const cleanedLine = line.replace(/\b\d+\s*&\s*\d+\b/g, '').replace(/\b\d+\s*in\s*\d+\b/gi, '');
    const somMatch = cleanedLine.match(/(\d{4,9})/);
    if (somMatch) {
      price = parseInt(somMatch[1], 10);
      rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
      return { price, priceUSD: 0, rawPriceLabel };
    }
  }

  return null;
}

/**
 * Intelligent parser for Telegram captions
 */
function parseProductInfo(text = '', aiResult = null) {
  let normalizedText = (text || '').trim();
  const rawLines = normalizedText.split('\n').map(l => l.trim()).filter(Boolean);

  const priceData = extractPrice(normalizedText) || {
    price: 350000,
    priceUSD: 0,
    rawPriceLabel: '350 000 so‘m'
  };

  // Determine Title, Brand, Category, Description
  let title = '';
  let brand = '';
  let category = null;
  let description = '';

  if (aiResult) {
    // If Gemini Vision AI recognized the product
    title = aiResult.title || '';
    brand = aiResult.brand || '';
    description = aiResult.description || '';
    if (aiResult.categorySlug) {
      category = CATEGORIES.find(c => c.slug === aiResult.categorySlug);
    }
  }

  if (!title) {
    // Fallback: extract title from caption
    // Remove price-related lines
    const titleCandidates = rawLines.filter(l => !extractPrice(l) && !/(?:narx|baho|price|\$)/i.test(l));
    if (titleCandidates.length > 0) {
      title = titleCandidates[0].replace(/^(nomi|mahsulot|title)\s*[:=-]\s*/i, '').trim();
      if (titleCandidates.length > 1) {
        title = `${title} ${titleCandidates[1]}`.trim();
      }
    }
  }

  if (!category) {
    category = detectCategory(`${title} ${normalizedText}`);
  }

  if (!brand) {
    brand = detectBrand(`${title} ${normalizedText}`) || 'Original Brand';
  }

  if (!title) {
    title = `${category.name} Mahsuloti`;
  }

  if (!description) {
    description = `${title} - kafolatli, yuqori sifatli mahsulot. Buxoro va O'zbekiston bo'ylab tezkor yetkazib beriladi.`;
  }

  let sku = '';
  for (const line of rawLines) {
    const skuMatch = line.match(/(?:kodi?|sku|artikul|kod)\s*[:=-]?\s*([a-zA-Z0-9_-]+)/i);
    if (skuMatch && !sku) sku = skuMatch[1];
  }

  return {
    title,
    sku,
    price: priceData.price,
    priceUSD: priceData.priceUSD,
    rawPriceLabel: priceData.rawPriceLabel,
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
      variant_label: product.variantLabel || '',
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
  const normNewTitle = normalizeKey(parsed.title);
  const newSku = (parsed.sku || '').trim().toLowerCase();

  let existingIndex = -1;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const normPTitle = normalizeKey(p.title);
    const pSku = (p.sku || '').trim().toLowerCase();

    if (newSku && pSku && newSku === pSku) {
      existingIndex = i;
      break;
    }
    if (normNewTitle && normPTitle && normNewTitle === normPTitle) {
      existingIndex = i;
      break;
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
    const slug = (parsed.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'product') + '-' + Date.now().toString().slice(-4);

    const newProduct = {
      _id: `prod_${slug}`,
      id: `prod_${slug}`,
      title: parsed.title,
      slug: slug,
      sku: parsed.sku || '',
      price: parsed.price,
      oldPrice: oldPrice,
      old_price: oldPrice,
      discountPercent: discountPercent,
      discount_percent: discountPercent,
      category: parsed.category.name,
      category_slug: parsed.category.slug,
      categorySlug: parsed.category.slug,
      department: parsed.category.department || 'sport',
      departmentName: parsed.category.departmentName || 'Sport & Fitnes',
      subcategory: '',
      brand: parsed.brand,
      stock: 20,
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
        { label: 'Yetkazib berish', value: 'Buxoro bo‘ylab tezkor' }
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
    const action = isUpdate ? 'update' : 'add';
    execSync(`git commit -m "feat(store): ${action} product '${productTitle}' via Telegram"`, { cwd: ROOT_DIR });
    execSync('git push origin main', { cwd: ROOT_DIR, timeout: 45000 });
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
    text: `⏳ Mahsulot qabul qilinmoqda (${photos.length} ta rasm)... Rasm tahlil qilinmoqda...`
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

  // 1. Try AI Vision recognition
  let aiResult = null;
  const geminiKey = getGeminiKey();
  if (geminiKey) {
    aiResult = await analyzeProductImageWithAI(downloadedImages[0], caption);
  }

  // 2. Parse product info
  const parsed = parseProductInfo(caption, aiResult);

  // 3. Save or update product
  const { isUpdate, product } = saveOrUpdateProduct(parsed, downloadedImages);

  // 4. Sync to Supabase
  await syncProductToSupabase(product);

  // 5. Push to GitHub
  pushChangesToGitHub(parsed.title, isUpdate);

  const formattedPrice = new Intl.NumberFormat('uz-UZ').format(product.price);
  const deptEmoji = product.department === 'yol-harakati' ? '🚧' : (product.department === 'uskunalar' ? '🛠️' : '🏆');

  const statusTitle = isUpdate
    ? `🔄 <b>Mavjud mahsulot yangilandi!</b>`
    : `✅ <b>Yangi mahsulot do‘konga qo‘shildi!</b>`;

  const aiNote = aiResult ? `\n🤖 <i>(Gemini AI rasmdan mahsulotni avtomatik aniqladi)</i>` : '';

  await sendTelegram('sendMessage', {
    chat_id: chatId,
    parse_mode: 'HTML',
    text: `${statusTitle}\n\n` +
          `📦 <b>Nomi:</b> ${product.title}\n` +
          `💰 <b>Narxi:</b> ${formattedPrice} so‘m\n` +
          `${deptEmoji} <b>Toifa:</b> ${product.category}\n` +
          `🏷 <b>Brend:</b> ${product.brand}\n` +
          `🖼 <b>Galereya:</b> ${downloadedImages.length} ta rasm to‘liq biriktirildi\n` +
          `${aiNote}\n\n` +
          `🚀 <b>Saytda jonli chiqdi:</b> Barcha rasmlari va tavsifi bilan mahsulot kartochkasi ochildi!`
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

  // 1. /clear or /tozala command
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

  // 2. /key command for Gemini Vision AI
  if (rawText.startsWith('/key') || rawText.startsWith('/gemini')) {
    const parts = rawText.split(/\s+/);
    if (parts.length >= 2 && parts[1].length > 10) {
      saveGeminiKey(parts[1]);
      await sendTelegram('sendMessage', {
        chat_id: chatId,
        parse_mode: 'HTML',
        text: `✅ <b>Gemini Vision AI muvaffaqiyatli faollashtirildi!</b>\n\nEndi botga mahsulot rasmi va narxini yuborganingizda, AI rasmga qarab tovar nomi, brendi va toifasini (Sport, Yo'l, Uskunalar) avtomatik aniqlab kiritadi!`
      });
    } else {
      const current = getGeminiKey() ? 'Faol (ulangan)' : 'Ulanmagan';
      await sendTelegram('sendMessage', {
        chat_id: chatId,
        parse_mode: 'HTML',
        text: `🔑 <b>Gemini Vision AI sozlamasi:</b>\n\nHolat: <b>${current}</b>\n\nAI kalitingizni ulash uchun: <code>/key AIzaSy...</code> deb yuboring.\n(Google AI Studio saytidan bepul olinadi)`
      });
    }
    return;
  }

  // 3. /start command
  if (rawText.startsWith('/start') || rawText.startsWith('/help')) {
    const aiStatus = getGeminiKey() ? '🟢 Faol' : '⚪ Ulanmagan (/key orqali ulanadi)';
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `👋 <b>Assalomu alaykum!</b>\n\nDo‘koningizga mahsulot qo‘shuvchi rasmiy botga xush kelibsiz!\n\n` +
            `📂 <b>Do‘konda 3 ta katta yo‘nalish mavjud:</b>\n` +
            `1. 🏆 <b>Sport & Fitnes:</b> Trenajorlar, Gantellar, Stoykalar, Boks, Tatami, To‘plar\n` +
            `2. 🚧 <b>Yo‘l & Harakat Xavfsizligi:</b> Yo‘l konuslari, Belgilar, To‘siqlar, Lejachiy politseyskiy\n` +
            `3. 🛠️ <b>Asbob-Uskunalar & Qurilish:</b> Drellar, Balgarkalar, Perforatorlar, Svarka, Arralar\n\n` +
            `📌 <b>QAT'IY QOIDALAR:</b>\n` +
            `❌ Faqat rasm (narxsiz) yuborsangiz — qabul qilinmaydi!\n` +
            `❌ Faqat matn (rasmsiz) yuborsangiz — qabul qilinmaydi!\n` +
            `✅ <b>Rasm + Tagiga narxi (va qisqa nomi)</b> yuborilganda — mahsulot avtomatik saytga qo‘shiladi!\n\n` +
            `🤖 <b>Gemini Vision AI:</b> ${aiStatus}\n` +
            `🗑 <b>Tozalash:</b> /tozala yoki /clear buyrug‘i orqali barcha mahsulotlarni o‘chirish mumkin.`
    });
    return;
  }

  // 4. CHECK STRICT RULE: TEXT ONLY (NO PHOTO)
  if (!msg.photo || msg.photo.length === 0) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `❌ <b>Faqat matn qabul qilinmaydi!</b>\n\nIltimos, mahsulot <b>rasmini</b> narxi bilan birga yuboring.`
    });
    return;
  }

  // 5. CHECK STRICT RULE: PHOTO WITHOUT CAPTION
  if (!caption) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `❌ <b>Faqat rasm qabul qilinmaydi!</b>\n\nIltimos, rasm tagiga mahsulot <b>narxini</b> (va qisqa nomini) yozib yuboring (masalan: <code>450 000 so‘m</code> yoki <code>$35</code>).`
    });
    return;
  }

  // 6. CHECK STRICT RULE: CAPTION MUST HAVE A PRICE
  const priceCheck = extractPrice(caption);
  if (!priceCheck || priceCheck.price <= 0) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `⚠️ <b>Mahsulot narxi topilmadi!</b>\n\nIltimos, rasm tagiga mahsulot narxini yozing (masalan: <code>250 000 so‘m</code> yoki <code>$20</code>).`
    });
    return;
  }

  // 7. PHOTO IS VALID AND HAS PRICE -> PROCESS!
  const largestPhoto = msg.photo[msg.photo.length - 1];
  const mediaGroupId = msg.media_group_id;

  if (mediaGroupId) {
    // TELEGRAM MEDIA GROUP (ALBUM) BUFFERING
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

  // SINGLE PHOTO WITH VALID CAPTION
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
console.log('🤖 MULTI-DEPARTMENT STORE TELEGRAM BOT RUNNING...');
console.log(`Bot username: @Ttxtxtctxtxtxhxhchxhbot`);
console.log('3 Categories: Sport | Yo\'l Xavfsizligi | Asbob-Uskunalar');
console.log('Strict validation: Only Photo+Price accepted!');
console.log('====================================================');

// Start polling
pollUpdates();
