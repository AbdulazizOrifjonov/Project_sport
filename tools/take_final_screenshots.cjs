const puppeteer = require('d:/allProject/tools/node_modules/puppeteer-core');
const path = require('path');
const os = require('os');
const fs = require('fs');

(async () => {
  const tempDir = path.join(os.tmpdir(), 'pupp_shot_' + Date.now());
  fs.mkdirSync(tempDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    userDataDir: tempDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1440, height: 950 }
  });

  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.message);
    pageErrors.push(err.message);
  });

  console.log('--- CAPTURING FINAL HOMEPAGE & HIT SHOWCASE ---');
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('article', { timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  // Count badges
  const badgeStats = await page.evaluate(() => {
    const xit = Array.from(document.querySelectorAll('*')).filter(el => el.innerText && el.innerText.trim() === '🔥 XIT').length;
    const yangi = Array.from(document.querySelectorAll('*')).filter(el => el.innerText && el.innerText.trim() === '✨ YANGI').length;
    const cards = document.querySelectorAll('article').length;
    return { xit, yangi, cards };
  });
  console.log('Badge Stats:', badgeStats);

  // 1. Screenshot of Top Hit Products Section
  await page.evaluate(() => window.scrollTo(0, 380));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_final_hit_showcase_top.png'
  });
  console.log('Saved qa_final_hit_showcase_top.png');

  // 2. Screenshot of Full Catalog Section
  await page.evaluate(() => {
    const el = document.getElementById('barcha-katalog');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_final_all_catalog.png'
  });
  console.log('Saved qa_final_all_catalog.png');

  // 3. Mobile Viewport
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 320));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_final_mobile_hit.png'
  });
  console.log('Saved qa_final_mobile_hit.png');

  await browser.close();
  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (_) {}
  console.log('DONE!');
})();
