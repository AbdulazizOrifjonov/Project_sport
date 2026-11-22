/**
 * SPORT OUTLET — Telegram Product Bot
 * Bot Token: 6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w
 * Bot Username: @Ttxtxtctxtxtxhxhchxhbot
 * 
 * Features:
 * 1. MULTI-PHOTO & ALBUM SUPPORT:
 *    Automatically detects Telegram media groups (albums) and consecutive photos.
 *    Downloads ALL photos and attaches them to ONE single product as a gallery!
 * 2. MULTI-VARIANT DETECTION:
 *    If caption has multiple thickness/size options (e.g. Tatami 2sm, 2.5sm, 3sm, 4sm),
 *    creates 1 single product with interactive variant selection and individual prices!
 * 3. SMART PRICE & TITLE PARSER:
 *    Accurately handles USD ($) and UZS (so'm), detects Model/Madel lines,
 *    and recognizes massage chairs, gym equipment, cardio, etc.
 * 4. CLEAN GALLERY INTEGRITY:
 *    Each product gets ONLY its own photos. Never mixes or merges random photos!
 * 5. DUAL DATABASE SYNC:
 *    Directly upserts to Supabase cloud database AND mockData.js.
 * 6. AUTO-DEPLOYMENT:
 *    Pushes changes to GitHub (Project_sport & next-nout) for live deployment!
 * 7. /clear or /delete_all COMMAND:
 *    Allows clearing all products instantly right from Telegram!
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const UPLOADS_DIR = path.join(FRONTEND_DIR, 'public', 'uploads');
const MOCK_DATA_PATH = path.join(FRONTEND_DIR, 'src', 'services', 'mockData.js');

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
  res.end('SPORT OUTLET Telegram Bot is running!\n');
}).listen(PORT, () => {
  console.log(`Telegram Bot health-check server listening on port ${PORT}`);
});

const BOT_TOKEN = '6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
const TELEGRAM_FILE_API = `https://api.telegram.org/file/bot${BOT_TOKEN}`;

const USD_RATE = 12850; // 1 USD = 12,850 UZS

// Sport & Fitness Categories with Massage Chair & Gym Support
const CATEGORIES = [
  { slug: 'trenajorlar', name: 'Trenajorlar & Kardio', keywords: ['masaj', 'massaj', 'kreslo', 'massage', 'trenajor', 'yugurish', 'dorojka', 'yo‘lakcha', 'yolakcha', 'velo', 'velotrenajor', 'bike', 'kardio', 'kuch trenajori', 'multi-gym', 'treadmill'] },
  { slug: 'stoykalar', name: 'Podstavka & Skameykalar', keywords: ['podstavka', 'stoyka', 'skameyka', 'bench', 'turnik', 'brus', 'sc80263', 'sc80270', 'ax003', 'an-001'] },
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
  return { slug: 'trenajorlar', name: 'Trenajorlar & Kardio' };
}

function detectBrand(text = '') {
  const lower = text.toLowerCase();
  const brands = ['Sport Line', 'Anelus', 'IronPower', 'ProForm', 'Nike', 'Under Armour', 'Adidas', 'Puma', 'Jordan', 'Everlast', 'Venum', 'Gymshark', 'SPORT OUTLET'];
  for (const b of brands) {
    if (lower.includes(b.toLowerCase())) return b;
  }
  return 'Sport Line';
}

/**
 * Detects multiple variants/options in caption (e.g. Tatami 2sm, 2.5sm, 3sm, 4sm)
 */
function extractVariants(text = '') {
  let normalized = text.trim();
  if (!normalized.includes('\n')) {
    normalized = normalized.replace(/\s+(narx[i]?|kodi?|sku|artikul|rangi|sig[i]?mi|model[i]?)\s*[:=-]/gi, '\n$1:');
  }

  const blocks = normalized.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const variants = [];
  let baseTitle = '';

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    // Price
    let price = 0;
    let priceUSD = 0;
    const priceLine = lines.find(l => /(?:narx[i]?|baho[si]?|price|\$)/i.test(l));
    if (priceLine) {
      const dMatch = priceLine.match(/(\d+(?:[.,]\d+)?)\s*\$/);
      if (dMatch) {
        priceUSD = parseFloat(dMatch[1].replace(',', '.'));
        price = Math.round(priceUSD * USD_RATE);
      } else {
        const uzsDigits = priceLine.replace(/[^\d]/g, '');
        if (uzsDigits.length >= 4) {
          price = parseInt(uzsDigits, 10);
        }
      }
    }

    if (!price) continue;

    // Colors
    const colors = [];
    const colorLine = lines.find(l => /(?:rang[i]?|color)/i.test(l));
    if (colorLine) {
      const parts = colorLine.replace(/^[^:]*:\s*/i, '')
        .split(/[,;]+/)
        .map(p => p.replace(/[✅✔]/g, '').trim())
        .filter(Boolean);
      colors.push(...parts);
    }

    // Name / Size
    const rawName = lines[0].replace(/^(nomi|mahsulot|title)\s*:\s*/i, '').trim();
    const sizeMatch = rawName.match(/(\d+(?:[.,]\d+)?\s*(?:sm|mm|kg|m\b))/i);
    const shortName = sizeMatch ? sizeMatch[1].trim() : rawName;

    if (!baseTitle) {
      baseTitle = rawName.replace(/[-–—]?\s*\d+(?:[.,]\d+)?\s*(?:sm|mm|kg)\b/i, '').trim();
    }

    variants.push({
      id: 'var_' + (shortName.replace(/[^a-z0-9]/gi, '_').toLowerCase() || i),
      name: shortName,
      fullName: rawName,
      price,
      oldPrice: Math.round(price * 1.15),
      priceUSD,
      colors
    });
  }

  if (variants.length >= 2) {
    return {
      hasVariants: true,
      baseTitle: baseTitle || 'Sport Mahsuloti',
      variants
    };
  }

  return { hasVariants: false };
}

/**
 * Intelligent parser for Telegram product captions
 */
function parseProductInfo(text = '') {
  let normalizedText = (text || '').trim();
  if (!normalizedText.includes('\n')) {
    normalizedText = normalizedText.replace(/\s+(narx[i]?|kodi?|sku|artikul|rangi|sig[i]?mi|model[i]?|madel[i]?)\s*[:=-]/gi, '\n$1:');
  }

  const rawLines = normalizedText.split('\n').map(l => l.trim()).filter(Boolean);
  if (rawLines.length === 0) {
    return {
      title: 'Yangi Sport Mahsuloti',
      price: 500000,
      rawPriceLabel: '500 000 so‘m',
      sku: '',
      description: 'SPORT OUTLET - kafolatli va sifatli sport anjomi.',
      category: { slug: 'trenajorlar', name: 'Trenajorlar & Kardio' },
      brand: 'Sport Line',
      variants: []
    };
  }

  // Check if text has multiple variants (e.g. Tatami thicknesses)
  const variantResult = extractVariants(normalizedText);
  if (variantResult.hasVariants) {
    const minPrice = Math.min(...variantResult.variants.map(v => v.price));
    const category = detectCategory(normalizedText);
    const brand = detectBrand(normalizedText);
    const variantTitles = variantResult.variants.map(v => v.name).join(', ');

    return {
      title: `${variantResult.baseTitle} (Sport Qoplamasi)`,
      sku: '',
      price: minPrice,
      rawPriceLabel: `${new Intl.NumberFormat('uz-UZ').format(minPrice)} so'mdan`,
      description: `${variantResult.baseTitle} professional sport qoplamasi. Variantlar: ${variantTitles}. Boks, yakka kurash va fitnes zallari uchun maxsus qoplama.`,
      category,
      brand,
      variantLabel: 'Qalinlik / O‘lchamni tanlang',
      variants: variantResult.variants
    };
  }

  // Single product parsing: Combine Title + Model line if present
  let title = rawLines[0].replace(/^(nomi|mahsulot|title)\s*:\s*/i, '').trim();
  if (rawLines.length > 1) {
    const secondLine = rawLines[1].trim();
    if (/^(?:madel|model|rusum)\s*[:=-]?\s*(.+)/i.test(secondLine)) {
      title = `${title} ${secondLine}`;
    }
  }

  let sku = '';
  let price = 0;
  let rawPriceLabel = '';

  for (const line of rawLines) {
    const skuMatch = line.match(/(?:kodi?|sku|artikul|kod)\s*[:=-]?\s*([a-zA-Z0-9_-]+)/i);
    if (skuMatch && !sku) {
      sku = skuMatch[1];
    }
  }

  // Parse Price accurately
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const isPriceLine = /(?:narx[i]?|baho[si]?|price)/i.test(line);

    // Dollar price
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

    // UZS price
    if (isPriceLine) {
      const uzsDigits = line.replace(/[^\d]/g, '');
      if (uzsDigits.length >= 4) {
        price = parseInt(uzsDigits, 10);
        rawPriceLabel = `${new Intl.NumberFormat('uz-UZ').format(price)} so'm`;
        break;
      }
    }
  }

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

  if (!price) {
    price = 750000;
    rawPriceLabel = '750 000 so‘m';
  }

  const description = rawLines.slice(1).join('\n') || `${title} - SPORT OUTLET kafolatli original mahsuloti. Buxoro bo'ylab tezkor yetkazib berish.`;
  const category = detectCategory(normalizedText);
  const brand = detectBrand(normalizedText);

  return {
    title,
    sku,
    price,
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
      brand: product.brand || 'SPORT OUTLET',
      stock: product.stock || 15,
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

/**
 * SAVE OR UPDATE:
 * Handles multiple images, variants, and strict duplicate prevention!
 * NEVER combines unrelated images into one product!
 */
function saveOrUpdateProduct(parsed, imagePaths = []) {
  const products = loadMockProducts();
  const normNewTitle = normalizeKey(parsed.title);
  const newSku = (parsed.sku || '').trim().toLowerCase();

  let existingIndex = -1;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const normPTitle = normalizeKey(p.title);
    const pSku = (p.sku || '').trim().toLowerCase();

    // 1. Strict SKU match
    if (newSku && pSku && newSku === pSku) {
      existingIndex = i;
      break;
    }

    // 2. Strict EXACT title match
    if (normNewTitle && normPTitle && normNewTitle === normPTitle) {
      existingIndex = i;
      break;
    }
  }

  const oldPrice = Math.round(parsed.price * 1.15);
  const discountPercent = Math.round(((oldPrice - parsed.price) / oldPrice) * 100);

  if (existingIndex !== -1) {
    // UPDATE EXISTING PRODUCT
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
    if (parsed.sku) existing.sku = parsed.sku;
    if (parsed.variants && parsed.variants.length > 0) {
      existing.variants = parsed.variants;
      existing.variantLabel = parsed.variantLabel || 'Qalinlik / O‘lcham';
    }

    // REPLACE images with newly sent gallery (never accumulate random old photos!)
    if (imagePaths && imagePaths.length > 0) {
      existing.images = imagePaths;
    }
    existing.updated_at = new Date().toISOString();

    writeMockProducts(products);
    return { isUpdate: true, product: existing };
  } else {
    // CREATE NEW PRODUCT WITH FULL GALLERY & VARIANTS
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
      stock: 15,
      inStock: true,
      in_stock: true,
      rating: 5.0,
      reviews_count: 0,
      images: imagePaths.length > 0 ? imagePaths : [],
      is_bestseller: true,
      is_new_arrival: true,
      is_weekly_deal: false,
      variantLabel: parsed.variantLabel || '',
      variants: parsed.variants || [],
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
    console.log('Pushing changes to GitHub (Project_sport & next-nout)...');
    execSync('git add frontend/public/uploads frontend/src/services/mockData.js', { cwd: ROOT_DIR });
    const action = isUpdate ? 'update' : 'add';
    execSync(`git commit -m "feat(store): ${action} product '${productTitle}' via Telegram"`, { cwd: ROOT_DIR });
    execSync('git push origin main', { cwd: ROOT_DIR, timeout: 45000 });
    console.log('Successfully pushed to both GitHub repositories! Cloud platforms will auto-deploy.');
    return true;
  } catch (err) {
    console.warn('Git push warning:', err.message);
    return false;
  }
}

// Media Group (Album) Buffer
const mediaGroupBuffer = new Map();
const userSinglePhotoBuffer = new Map();

async function processMediaGroup(key, groupData) {
  const { chatId, photos, caption } = groupData;
  mediaGroupBuffer.delete(key);
  userSinglePhotoBuffer.delete(key);

  console.log(`Processing media group ${key} with ${photos.length} photos...`);

  await sendTelegram('sendMessage', {
    chat_id: chatId,
    text: `⏳ Albom qabul qilindi (${photos.length} ta rasm)! Barchasi bitta mahsulotga biriktirilmoqda...`
  });

  const parsed = parseProductInfo(caption || 'Sport Mahsuloti');
  const baseSlug = (parsed.title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'product') + '-' + Date.now().toString().slice(-4);

  // Download all photos in the album
  const downloadedImages = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const fileName = `prod_${baseSlug}_${i + 1}.jpg`;
    const imagePath = await downloadTelegramPhoto(photo.file_id, fileName);
    if (imagePath) downloadedImages.push(imagePath);
  }

  // Save product with full gallery and variants
  const { isUpdate, product } = saveOrUpdateProduct(parsed, downloadedImages);

  // Sync to Supabase cloud database
  await syncProductToSupabase(product);

  // Push to GitHub
  pushChangesToGitHub(parsed.title, isUpdate);

  const formattedPrice = new Intl.NumberFormat('uz-UZ').format(product.price);
  const variantText = product.variants && product.variants.length > 0
    ? `\n🔀 <b>Variantlar (${product.variants.length} xil):</b>\n` + product.variants.map(v => `• ${v.name}: ${new Intl.NumberFormat('uz-UZ').format(v.price)} so'm ($${v.priceUSD || '-'})`).join('\n')
    : '';

  const statusTitle = isUpdate
    ? `🔄 <b>Mavjud mahsulot yangilandi!</b>`
    : `✅ <b>Yangi mahsulot do‘konga qo‘shildi!</b>`;

  await sendTelegram('sendMessage', {
    chat_id: chatId,
    parse_mode: 'HTML',
    text: `${statusTitle}\n\n` +
          `📦 <b>Nomi:</b> ${product.title}\n` +
          `🖼 <b>Rasmlar:</b> ${downloadedImages.length} ta rasm to‘liq bitta galereyaga biriktirildi\n` +
          `💰 <b>Boshlang‘ich narx:</b> ${formattedPrice} so'mdan\n` +
          `${variantText}\n` +
          `📂 <b>Toifa:</b> ${product.category}\n` +
          `🏷 <b>Brend:</b> ${product.brand}\n\n` +
          `🚀 <b>Saytda jonli chiqdi:</b> Barcha rasmlari va tavsifi bilan bitta mahsulot sifatida ochildi!`
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
  const text = (msg.text || msg.caption || '').trim();

  // 1. /clear or /tozala command
  if (text === '/clear' || text === '/delete_all' || text === '/tozala') {
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
  if (text.startsWith('/start')) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `👋 <b>Assalomu alaykum!</b>\n\nMen <b>SPORT OUTLET</b> do'koningizga mahsulot qo'shuvchi va yangilovchi rasmiy botman!\n\n` +
            `📸 <b>Albom / Bir nechta rasm yuborish:</b>\n` +
            `• Mahsulotga 2 tadan 10 tagacha rasm albom qilib tashlasangiz, barchasini <b>1 ta mahsulot</b> ichiga galereya qilib saqlayman!\n` +
            `• Agar postda bir nechta razmer/qalinlik bo‘lsa (masalan Tatami 2sm, 2.5sm, 3sm, 4sm), saytda 1 ta mahsulot ochilib, ichida barcha variantlar tanlanadigan bo‘ladi!\n\n` +
            `🗑 <b>Tozalash:</b> Istalgan vaqt /tozala yoki /clear buyrug‘i orqali barcha mahsulotlarni o‘chirib tozalashingiz mumkin.`
    });
    return;
  }

  // 3. Photo received (Single or Album/MediaGroup)
  if (msg.photo && msg.photo.length > 0) {
    const largestPhoto = msg.photo[msg.photo.length - 1];
    const mediaGroupId = msg.media_group_id;

    if (mediaGroupId) {
      // TELEGRAM MEDIA GROUP (ALBUM) BUFFERING
      if (mediaGroupBuffer.has(mediaGroupId)) {
        const group = mediaGroupBuffer.get(mediaGroupId);
        group.photos.push(largestPhoto);
        if (msg.caption) group.caption = msg.caption;
        clearTimeout(group.timer);
        group.timer = setTimeout(() => processMediaGroup(mediaGroupId, group), 1800);
      } else {
        const group = {
          chatId,
          photos: [largestPhoto],
          caption: msg.caption || '',
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
      // If new single photo has its own caption, treat as distinct product!
      if (msg.caption && buffer.caption) {
        clearTimeout(buffer.timer);
        processMediaGroup(userKey, buffer);
        const newGroup = {
          chatId,
          photos: [largestPhoto],
          caption: msg.caption,
          timer: null
        };
        newGroup.timer = setTimeout(() => processMediaGroup(userKey, newGroup), 1500);
        userSinglePhotoBuffer.set(userKey, newGroup);
        return;
      }

      buffer.photos.push(largestPhoto);
      if (msg.caption) buffer.caption = msg.caption;
      clearTimeout(buffer.timer);
      buffer.timer = setTimeout(() => processMediaGroup(userKey, buffer), 1500);
      return;
    }

    const singleGroup = {
      chatId,
      photos: [largestPhoto],
      caption: msg.caption || '',
      timer: null
    };
    singleGroup.timer = setTimeout(() => processMediaGroup(userKey, singleGroup), 1500);
    userSinglePhotoBuffer.set(userKey, singleGroup);
    return;
  }

  // 4. Text only
  if (text) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `⚠️ <b>Rasm topilmadi!</b>\n\nIltimos, mahsulotning rasmini (yoki albomini) yuboring va tagiga nomi hamda narxini yozing.`
    });
  }
}

console.log('====================================================');
console.log('🤖 SPORT OUTLET TELEGRAM BOT (ALBUM & SUPABASE SYNC) RUNNING...');
console.log(`Bot username: @Ttxtxtctxtxtxhxhchxhbot`);
console.log('Multi-photo albums & Variant detection ACTIVE!');
console.log('====================================================');

// Start polling
pollUpdates();
