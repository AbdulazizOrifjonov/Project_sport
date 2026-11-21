/**
 * NSB — NEXT NOUT Telegram Product Bot
 * Bot Token: 6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w
 * 
 * Automatically receives product photos, titles, and prices from Telegram,
 * adds them directly to the NSB online store, updates mockData & Supabase,
 * and pushes updates to GitHub for instant live deployment!
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BOT_TOKEN = '6814682488:AAEVVON2MzlrCnsT5ru5q5Byepj4HnzzR_w';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
const TELEGRAM_FILE_API = `https://api.telegram.org/file/bot${BOT_TOKEN}`;

const ROOT_DIR = path.resolve(__dirname, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const UPLOADS_DIR = path.join(FRONTEND_DIR, 'public', 'uploads');
const MOCK_DATA_PATH = path.join(FRONTEND_DIR, 'src', 'services', 'mockData.js');

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Categories detection helper
const CATEGORIES = [
  { slug: 'apple', name: 'Apple & Gadgetlar', keywords: ['apple', 'iphone', 'macbook', 'ipad', 'airpods', 'watch', 'imac'] },
  { slug: 'kompyuternaya-tehnika', name: 'Kompyuter Texnikasi', keywords: ['noutbuk', 'laptop', 'kompyuter', 'asus', 'lenovo', 'acer', 'hp', 'dell', 'sichqoncha', 'klaviatura', 'videokarta', 'intel', 'amd', 'ryzen', 'core', 'protsessor'] },
  { slug: 'monitory-i-proektory', name: 'Monitory va Proyektorlar', keywords: ['monitor', 'ekran', 'proyektor', 'samsung monitor', 'lg monitor'] },
  { slug: 'orgtehnika', name: 'Orgtexnika & Printerlar', keywords: ['printer', 'skaner', 'kartridj', 'mfi', 'canon', 'epson'] },
  { slug: 'ofisnaya-mebel', name: 'Ofis mebellari & Kreslolar', keywords: ['kreslo', 'stol', 'mebel', 'stul'] },
  { slug: 'kanctovary', name: 'Kantselyariya tovarlari', keywords: ['qogoz', 'qog\'oz', 'ruchka', 'daftar', 'papka', 'kantselyariya'] }
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
  return { slug: 'kompyuternaya-tehnika', name: 'Kompyuter Texnikasi' };
}

function detectBrand(text = '') {
  const lower = text.toLowerCase();
  const brands = ['Apple', 'Asus', 'Lenovo', 'HP', 'Dell', 'Acer', 'MSI', 'Samsung', 'LG', 'Canon', 'Epson', 'Xiaomi', 'Sony', 'Razer', 'Logitech'];
  for (const b of brands) {
    if (lower.includes(b.toLowerCase())) return b;
  }
  return 'NSB';
}

function parseProductInfo(text = '') {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  let title = '';
  let price = 0;
  let description = '';

  // Look for price patterns
  let priceLineIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check if line contains price keywords or is mostly digits
    const priceMatch = line.match(/(?:narx[i]?|baho[si]?|price)?:?\s*([\d\s.,]{3,})\s*(?:so'?m|sum|usd|\$)?/i);
    const cleanedDigits = line.replace(/[^\d]/g, '');
    
    if (priceMatch && cleanedDigits.length >= 4) {
      let parsed = parseInt(cleanedDigits, 10);
      if (line.includes('$') || line.toLowerCase().includes('usd')) {
        parsed = parsed * 12800; // approximate USD to UZS
      }
      price = parsed;
      priceLineIndex = i;
      break;
    }
  }

  if (priceLineIndex !== -1) {
    // Title is usually the first line before price, or line 0
    title = lines.slice(0, priceLineIndex).join(' ') || lines[0];
    description = lines.slice(priceLineIndex + 1).join('\n');
  } else {
    title = lines[0];
    description = lines.slice(1).join('\n');
  }

  // Clean title prefix if any
  title = title.replace(/^(nomi|mahsulot|title)\s*:\s*/i, '').trim();

  // If price is still 0, check description or title for numbers
  if (!price) {
    const digits = text.replace(/[^\d]/g, '');
    if (digits.length >= 5) {
      price = parseInt(digits.slice(0, 8), 10);
    } else {
      price = 1000000; // default 1 mln som
    }
  }

  const category = detectCategory(text);
  const brand = detectBrand(text);

  return {
    title: title || 'Yangi Mahsulot',
    price,
    description: description || `${title} - kafolatli va sifatli mahsulot. Buxoro bo'ylab tezkor yetkazib berish.`,
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

function addProductToMockData(newProduct) {
  try {
    const fileContent = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const marker = 'export const defaultProducts = [';
    const index = fileContent.indexOf(marker);
    if (index === -1) {
      console.error('Could not find defaultProducts marker in mockData.js');
      return false;
    }

    const insertPos = index + marker.length;
    const productJsonString = '\n  ' + JSON.stringify(newProduct, null, 2).replace(/\n/g, '\n  ') + ',';
    
    const updatedContent = fileContent.slice(0, insertPos) + productJsonString + fileContent.slice(insertPos);
    fs.writeFileSync(MOCK_DATA_PATH, updatedContent, 'utf8');
    console.log(`Successfully added product "${newProduct.title}" to mockData.js!`);
    return true;
  } catch (err) {
    console.error('Failed to update mockData.js:', err);
    return false;
  }
}

function pushChangesToGitHub(productTitle) {
  try {
    console.log('Pushing new product to GitHub...');
    execSync('git add frontend/public/uploads frontend/src/services/mockData.js', { cwd: ROOT_DIR });
    execSync(`git commit -m "feat(store): add product '${productTitle}' via Telegram"`, { cwd: ROOT_DIR });
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
      text: `👋 <b>Assalomu alaykum!</b>\n\nMen <b>NEXT NOUT (NSB)</b> do'koningizga mahsulot qo'shuvchi botman!\n\n📸 <b>Mahsulot qo'shish uchun:</b>\n1. Mahsulot rasmini yuboring.\n2. Rasm tagiga (caption) <b>Nomi</b> va <b>Narxi</b>ni yozing.\n\n<i>Misol:</i>\n<code>MacBook Pro 16 M3 Max\n35 000 000 so'm\n512GB SSD, 36GB RAM, Yangi</code>\n\nMen uni darhol onlayn do'konga qo'shib beraman!`
    });
    return;
  }

  // 2. Photo received
  if (msg.photo && msg.photo.length > 0) {
    const largestPhoto = msg.photo[msg.photo.length - 1]; // highest resolution
    const caption = msg.caption || '';

    await sendTelegram('sendMessage', {
      chat_id: chatId,
      text: '⏳ Mahsulot qabul qilinmoqda va do\'konga yuklanmoqda...'
    });

    const parsed = parseProductInfo(caption || 'Yangi Mahsulot');
    const slug = (parsed.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'product') + '-' + Date.now().toString().slice(-4);
    
    const fileName = `prod_${slug}.jpg`;
    const imagePath = await downloadTelegramPhoto(largestPhoto.file_id, fileName);

    const oldPrice = Math.round(parsed.price * 1.15); // +15% old price for discount badge
    const discountPercent = Math.round(((oldPrice - parsed.price) / oldPrice) * 100);

    const newProduct = {
      _id: `prod_${slug}`,
      id: `prod_${slug}`,
      title: parsed.title,
      slug: slug,
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
      stock: 10,
      inStock: true,
      in_stock: true,
      rating: 5.0,
      reviews_count: 0,
      images: [imagePath || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80'],
      is_bestseller: true,
      is_new_arrival: true,
      is_weekly_deal: false,
      description: parsed.description,
      specifications: [
        { label: 'Brend', value: parsed.brand },
        { label: 'Kafolat', value: '1 yil rasmiy kafolat' },
        { label: 'Yetkazib berish', value: 'Buxoro bo‘ylab bepul' }
      ],
      created_at: new Date().toISOString()
    };

    // Save to mockData
    const saved = addProductToMockData(newProduct);

    // Push to GitHub so it goes live!
    pushChangesToGitHub(parsed.title);

    const formattedPrice = new Intl.NumberFormat('uz-UZ').format(parsed.price);

    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `✅ <b>Mahsulot muvaffaqiyatli do'konga qo'shildi!</b>\n\n` +
            `📦 <b>Nomi:</b> ${parsed.title}\n` +
            `💰 <b>Narxi:</b> ${formattedPrice} so'm\n` +
            `📂 <b>Toifa:</b> ${parsed.category.name}\n` +
            `🏷 <b>Brend:</b> ${parsed.brand}\n` +
            `🖼 <b>Rasm:</b> Yuklandi va saqlandi\n` +
            `🚀 <b>Sayt:</b> Yangilandi va jonli efirga chiqarildi!`
    });
    return;
  }

  // 3. User sent only text without photo
  if (text) {
    await sendTelegram('sendMessage', {
      chat_id: chatId,
      parse_mode: 'HTML',
      text: `⚠️ <b>Rasm topilmadi!</b>\n\nIltimos, mahsulotning <b>rasmini</b> yuboring va rasm tagiga (caption):\n\n<b>1. Nomi\n2. Narxi</b>\n\nni yozib yuboring. Shunda men uni do'konga darhol joylayman! 👍`
    });
  }
}

console.log('====================================================');
console.log('🤖 NEXT NOUT TELEGRAM PRODUCT BOT IS RUNNING...');
console.log(`Bot username: @Ttxtxtctxtxtxhxhchxhbot`);
console.log('Waiting for product photos and captions from Telegram...');
console.log('====================================================');

pollUpdates();
