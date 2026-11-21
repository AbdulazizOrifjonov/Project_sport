/**
 * SPORT OUTLET — Telegram Product Bot
 * Bot Token: 6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w
 * 
 * Features:
 * - Automatically receives product photos, titles, and prices from Telegram.
 * - SMART PRICE PARSER: Handles $ (USD) and so'm (UZS), ignores codes/dimensions.
 * - SMART DUPLICATE PREVENTION: If a product already exists (by title, model, or SKU),
 *   it UPDATES the existing product (price, image, description) instead of creating a duplicate!
 * - Syncs with mockData.js and pushes to GitHub for instant live deployment!
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BOT_TOKEN = '6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
const TELEGRAM_FILE_API = `https://api.telegram.org/file/bot${BOT_TOKEN}`;

const USD_RATE = 12850; // 1 USD = 12,850 UZS

const ROOT_DIR = path.resolve(__dirname, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const UPLOADS_DIR = path.join(FRONTEND_DIR, 'public', 'uploads');
const MOCK_DATA_PATH = path.join(FRONTEND_DIR, 'src', 'services', 'mockData.js');

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Sport & Fitness Categories
const CATEGORIES = [
  { slug: 'stoykalar', name: 'Podstavka & Skameykalar', keywords: ['podstavka', 'stoyka', 'skameyka', 'bench', 'turnik', 'brus', 'sc80263', 'sc80270', 'ax003', 'an-001'] },
  { slug: 'trenajorlar', name: 'Trenajorlar & Kardio', keywords: ['trenajor', 'yugurish', 'dorojka', 'yo‘lakcha', 'yolakcha', 'velo', 'velotrenajor', 'bike', 'kardio', 'kuch trenajori', 'multi-gym', 'treadmill'] },
  { slug: 'gantellar', name: 'Gantellar & Shtangalar', keywords: ['gantel', 'shtanga', 'grif', 'disk', 'blin', 'ogirlik', 'og‘irlik', 'dumbel', 'dumbbell', 'barbell', 'kauchuk'] },
  { slug: 'toplar-oyinlar', name: 'Futbol & To‘plar', keywords: ['tennis', 'stol tennis', 'raketka', 'k2008', 'futbol', 'top', 'to‘p', 'koptok', 'voleybol', 'basketbol'] },
  { slug: 'krossovkalar', name: 'Krossovkalar & Poyabzallar', keywords: ['krossovka', 'poyabzal', 'keda', 'butsa', 'nike', 'jordan', 'adidas', 'sneaker', 'yugurish poyabzali', 'snickers'] },
  { slug: 'sport-kiyimlari', name: 'Sport Kiyimlari', keywords: ['kiyim', 'kostyum', 'futbolka', 'shortik', 'hudi', 'triko', 'rashgard', 'under armour', 'puma', 'gymshark', 'leggins'] },
  { slug: 'boks-yakka-kurash', name: 'Boks & Yakka Kurash', keywords: ['tatami', 'mat', 'boks', 'qop', 'grusha', 'kurash', 'kimono', 'bint', 'venum', 'everlast', 'dzyudo', 'karate', 'sambo'] },
  { slug: 'fitnes-aksessuarlari', name: 'Fitnes & Sport Aksessuarlari', keywords: ['rezinka', 'espander', 'qolqop', 'qo‘lqop', 'sumka', 'gilamcha', 'kamar', 'tasma', 'suv idish'] }
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
  return { slug: 'stoykalar', name: 'Podstavka & Skameykalar' };
}

function detectBrand(text = '') {
  const lower = text.toLowerCase();
  const brands = ['Sport Line', 'IronPower', 'ProForm', 'Nike', 'Under Armour', 'Adidas', 'Puma', 'Jordan', 'Everlast', 'Venum', 'Gymshark', 'SPORT OUTLET'];
  for (const b of brands) {
    if (lower.includes(b.toLowerCase())) return b;
  }
  return 'Sport Line';
}

/**
 * Intelligent parser for Telegram product captions
 */
function parseProductInfo(text = '') {
  // If single line contains delimiters like Narxi:, Kodi:, Rangi:, split into newlines
  let normalizedText = (text || '').trim();
  if (!normalizedText.includes('\n')) {
    normalizedText = normalizedText.replace(/\s+(narx[i]?|kodi?|sku|artikul|rangi|sig[i]?mi|model[i]?)\s*[:=-]/gi, '\n$1:');
  }

  const rawLines = normalizedText.split('\n').map(l => l.trim()).filter(Boolean);
  if (rawLines.length === 0) {
    return {
      title: 'Yangi Sport Mahsuloti',
      price: 500000,
      rawPriceLabel: '500 000 so‘m',
      sku: '',
      description: 'SPORT OUTLET - kafolatli va sifatli sport anjomi.',
      category: { slug: 'stoykalar', name: 'Podstavka & Skameykalar' },
      brand: 'Sport Line'
    };
  }

  let title = rawLines[0].replace(/^(nomi|mahsulot|title)\s*:\s*/i, '').trim();
  let sku = '';
  let price = 0;
  let rawPriceLabel = '';
  const descLines = [];

  // 1. Extract SKU / Kod
  for (const line of rawLines) {
    const skuMatch = line.match(/(?:kodi?|sku|artikul|kod)\s*[:=-]?\s*([a-zA-Z0-9_-]+)/i);
    if (skuMatch && !sku) {
      sku = skuMatch[1];
    }
  }

  // 2. Parse Price accurately
  // Priority 1: Line with 'narx', 'baho', 'price'
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const isPriceLine = /(?:narx[i]?|baho[si]?|price)/i.test(line);

    // Dollar price: e.g. "Narxi: 750$" or "290$" or "$195" or "195 usd"
    const dollarMatch = line.match(/(?:narx[i]?|baho[si]?|price)?\s*[:=-]?\s*\$?\s*(\d+(?:[.,]\d+)?)\s*(?:\$|usd)/i) ||
                       (isPriceLine && line.match(/(\d+(?:[.,]\d+)?)\s*\$/i)) ||
                       (isPriceLine && line.match(/\$\s*(\d+(?:[.,]\d+)?)/i));

    if (dollarMatch) {
      const num = parseFloat(dollarMatch[1].replace(',', '.'));
      if (num > 0) {
        price = Math.round(num * USD_RATE);
        rawPriceLabel = `$${num} (${new Intl.NumberFormat('uz-UZ').format(price)} so'm)`;
        break;
      }
    }

    // UZS price: e.g. "Narxi: 1 850 000 so'm" or "1850000"
    if (isPriceLine) {
      const uzsDigits = line.replace(/[^\d]/g, '');
      if (uzsDigits.length >= 4) {
        price = parseInt(uzsDigits, 10);
        rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
        break;
      }
    }
  }

  // Priority 2: Standalone dollar or som in any line
  if (!price) {
    for (const line of rawLines) {
      const standAloneDollar = line.match(/(\d{2,5})\s*\$/) || line.match(/\$\s*(\d{2,5})/);
      if (standAloneDollar) {
        const num = parseInt(standAloneDollar[1], 10);
        price = Math.round(num * USD_RATE);
        rawPriceLabel = `$${num} (${new Intl.NumberFormat('uz-UZ').format(price)} so'm)`;
        break;
      }
      const somMatch = line.match(/(\d[\d\s.,]{3,})\s*(?:so'?m|sum)/i);
      if (somMatch) {
        const digits = somMatch[1].replace(/[^\d]/g, '');
        if (digits.length >= 4) {
          price = parseInt(digits, 10);
          rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
          break;
        }
      }
    }
  }

  // Fallback price if none detected
  if (!price) {
    price = 750000;
    rawPriceLabel = '750 000 so‘m';
  }

  // Build description (all lines after title)
  const description = rawLines.slice(1).join('\n') || `${title} - SPORT OUTLET kafolatli original mahsuloti. Buxoro bo'ylab tezkor yetkazib berish.`;

  const category = detectCategory(text);
  const brand = detectBrand(text);

  return {
    title,
    sku,
    price,
    rawPriceLabel,
    description,
    category,
    brand
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
    console.error(`Telegram API error (${method}):`, err.message);
    return null;
  }
}

async function downloadTelegramPhoto(fileId, targetFileName) {
  try {
    const fileRes = await fetch(`${TELEGRAM_API}/getFile?file_id=${fileId}`);
    const fileData = await fileRes.json();
    if (!fileData.ok || !fileData.result?.file_path) {
      console.error('Failed to get file path from Telegram:', fileData);
      return null;
    }

    const filePath = fileData.result.file_path;
    const downloadUrl = `${TELEGRAM_FILE_API}/${filePath}`;
    
    const imgRes = await fetch(downloadUrl);
    if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
    
    const arrayBuffer = await imgRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const localPath = path.join(UPLOADS_DIR, targetFileName);
    fs.writeFileSync(localPath, buffer);
    console.log(`Saved image to: ${localPath} (${buffer.length} bytes)`);

    return `/uploads/${targetFileName}`;
  } catch (err) {
    console.error('Error downloading telegram photo:', err);
    return null;
  }
}

/**
 * Normalizes title for duplicate checking
 */
function normalizeKey(str = '') {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Load existing defaultProducts from mockData.js
 */
function loadMockProducts() {
  try {
    const content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const pStart = content.indexOf('export const defaultProducts = [');
    const bStart = content.indexOf('export const defaultBanners = [');
    const closingIdx = content.lastIndexOf('];', bStart);
    if (pStart === -1 || closingIdx === -1) return [];

    const sub = content.slice(pStart + 'export const defaultProducts = '.length, closingIdx + 1);
    return JSON.parse(sub.trim().replace(/,\s*$/, ''));
  } catch (err) {
    console.error('Failed to parse mock products:', err);
    return [];
  }
}

/**
 * Write updated products array back to mockData.js
 */
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

/**
 * SMART DUPLICATE PREVENTION & UPDATE LOGIC:
 * If product exists (same SKU, same normalized title, or same model):
 *   UPDATE it in place! (Price, image, description)
 * Otherwise:
 *   ADD as new product.
 */
function saveOrUpdateProduct(parsed, imagePath) {
  const products = loadMockProducts();
  const normNewTitle = normalizeKey(parsed.title);
  const newSku = (parsed.sku || '').trim().toLowerCase();

  // Find existing duplicate product
  let existingIndex = -1;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const normPTitle = normalizeKey(p.title);
    const pSku = (p.sku || '').trim().toLowerCase();

    // 1. SKU match
    if (newSku && (pSku === newSku || (p.description && p.description.toLowerCase().includes(newSku)))) {
      existingIndex = i;
      break;
    }

    // 2. Exact or close title match (e.g. "gantel podstavka ax003" vs "Gantel podstavka AX003")
    if (normNewTitle && normPTitle && (normNewTitle === normPTitle || normNewTitle.includes(normPTitle) || normPTitle.includes(normNewTitle))) {
      existingIndex = i;
      break;
    }

    // 3. Match generic "yangi mahsulot" if re-sent within recent session
    if (normNewTitle === 'yangimahsulot' && normPTitle === 'yangimahsulot') {
      existingIndex = i;
      break;
    }
  }

  const oldPrice = Math.round(parsed.price * 1.15);
  const discountPercent = Math.round(((oldPrice - parsed.price) / oldPrice) * 100);

  if (existingIndex !== -1) {
    // DUPLICATE FOUND: UPDATE EXISTING INSTEAD OF ADDING DUPLICATE
    const existing = products[existingIndex];
    existing.price = parsed.price;
    existing.oldPrice = oldPrice;
    existing.old_price = oldPrice;
    existing.discountPercent = discountPercent;
    existing.discount_percent = discountPercent;
    existing.category = parsed.category.name;
    existing.category_slug = parsed.category.slug;
    existing.categorySlug = parsed.category.slug;
    existing.description = parsed.description;
    if (parsed.sku) existing.sku = parsed.sku;
    if (imagePath) {
      existing.images = [imagePath, ...(existing.images || []).filter(img => img !== imagePath)];
    }
    existing.updated_at = new Date().toISOString();

    writeMockProducts(products);
    return { isUpdate: true, product: existing };
  } else {
    // NEW UNIQUE PRODUCT: PREPEND TO LIST
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
      subcategory: '',
      brand: parsed.brand,
      stock: 12,
      inStock: true,
      in_stock: true,
      rating: 5.0,
      reviews_count: 0,
      images: [imagePath || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80'],
      is_bestseller: true,
      is_new_arrival: true,
      is_weekly_deal: false,
      description: parsed.description,
      specifications: [
        { label: 'Brend', value: parsed.brand },
        { label: 'Kodi', value: parsed.sku || 'SPORT-OUTLET' },
        { label: 'Kafolat', value: '1 yil rasmiy kafolat' },
        { label: 'Yetkazib berish', value: 'Buxoro bo‘ylab bepul' }
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
    execSync('git add frontend/public/uploads frontend/src/services/mockData.js', { cwd: ROOT_DIR });
    const action = isUpdate ? 'update' : 'add';
    execSync(`git commit -m "feat(store): ${action} product '${productTitle}' via Telegram"`, { cwd: ROOT_DIR });
    execSync('git push origin main', { cwd: ROOT_DIR, timeout: 30000 });
    console.log('Successfully pushed to GitHub! Vercel/Cloudflare will auto-deploy.');
    return true;
  } catch (err) {
    console.warn('Git push warning:', err.message);
    return false;
  }
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
  
  // Continue polling
  setImmediate(pollUpdates);
}

async function handleUpdate(update) {
  const msg = update.message;
  if (!msg) return;

  const chatId = msg.chat.id;
  const text = msg.text || msg.caption || '';

  // 1. /start command
  if (text.startsWith('/start')) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `👋 <b>Assalomu alaykum!</b>\n\nMen <b>SPORT OUTLET</b> do'koningizga mahsulot qo'shuvchi va yangilovchi botman!\n\n🛡 <b>Dublikatdan himoyalangan:</b> Agar bitta mahsulotni qayta tashlasangiz, dublikat yaratilmaydi — uning narxi, rasmi va tavsifi avtomatik yangilanadi!\n\n📸 <b>Mahsulot qo'shish/yangilash uchun:</b>\n1. Mahsulot rasmini yuboring.\n2. Rasm tagiga (caption) <b>Nomi</b>, <b>Kodi</b> va <b>Narxi ($ yoki so'mda)</b>ni yozing.\n\n<i>Misol:</i>\n<code>Stol Tennis: K2008\nKodi: 0455888\nNarxi: 750$\n25 mm MDF, 100 mm gildiraklar</code>\n\nMen uni darhol onlayn do'konga qo'shaman yoki yangilayman!`
    });
    return;
  }

  // 2. Photo received
  if (msg.photo && msg.photo.length > 0) {
    const largestPhoto = msg.photo[msg.photo.length - 1]; // highest resolution
    const caption = msg.caption || '';

    await sendTelegram('sendMessage', {
      chat_id: chatId,
      text: '⏳ Mahsulot qabul qilinmoqda, dublikat tekshirilmoqda va do‘konga saqlanmoqda...'
    });

    const parsed = parseProductInfo(caption || 'Yangi Sport Mahsuloti');
    const slug = (parsed.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'product') + '-' + Date.now().toString().slice(-4);
    
    const fileName = `prod_${slug}.jpg`;
    const imagePath = await downloadTelegramPhoto(largestPhoto.file_id, fileName);

    // Save or update with duplicate prevention
    const { isUpdate, product } = saveOrUpdateProduct(parsed, imagePath);

    // Push to GitHub so it goes live!
    pushChangesToGitHub(parsed.title, isUpdate);

    const formattedPrice = new Intl.NumberFormat('uz-UZ').format(product.price);

    if (isUpdate) {
      await sendTelegram('sendMessage', {
        chat_id: chatId,
        parse_mode: 'HTML',
        text: `🔄 <b>Mavjud mahsulot yangilandi! (Dublikat saqlanmadi)</b>\n\n` +
              `📦 <b>Nomi:</b> ${product.title}\n` +
              `💰 <b>Yangilangan narx:</b> ${formattedPrice} so'm (${parsed.rawPriceLabel})\n` +
              `🔢 <b>Kodi / SKU:</b> ${product.sku || 'Ko‘rsatilmagan'}\n` +
              `📂 <b>Toifa:</b> ${product.category}\n` +
              `🖼 <b>Rasm:</b> Yangilandi\n\n` +
              `✅ Ushbu mahsulot allaqachon do'konda mavjud bo'lgani uchun dublikat yaratilmadi — uning narxi va rasmi yangilandi!`
      });
    } else {
      await sendTelegram('sendMessage', {
        chat_id: chatId,
        parse_mode: 'HTML',
        text: `✅ <b>Yangi mahsulot do'konga qo'shildi!</b>\n\n` +
              `📦 <b>Nomi:</b> ${product.title}\n` +
              `💰 <b>Narxi:</b> ${formattedPrice} so'm (${parsed.rawPriceLabel})\n` +
              `🔢 <b>Kodi / SKU:</b> ${product.sku || 'Avtomatik'}\n` +
              `📂 <b>Toifa:</b> ${product.category}\n` +
              `🏷 <b>Brend:</b> ${product.brand}\n` +
              `🖼 <b>Rasm:</b> Yuklandi va saqlandi\n` +
              `🚀 <b>Sayt:</b> Jonli efirga chiqarildi!`
      });
    }
    return;
  }

  // 3. User sent only text without photo
  if (text) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `⚠️ <b>Rasm topilmadi!</b>\n\nIltimos, mahsulotning <b>rasmini</b> yuboring va rasm tagiga (caption):\n\n<b>1. Nomi\n2. Kodi (ixtiyoriy)\n3. Narxi ($ yoki so'mda)</b>\n\nni yozib yuboring. Qayta yuborsangiz ham dublikat bo'lmaydi, o'zi yangilanadi! 👍`
    });
  }
}

console.log('====================================================');
console.log('🤖 SPORT OUTLET TELEGRAM PRODUCT BOT IS RUNNING...');
console.log(`Bot username: @Ttxtxtctxtxtxhxhchxhbot`);
console.log('Smart Price Parser & Duplicate Prevention ACTIVE!');
console.log('====================================================');

pollUpdates();
