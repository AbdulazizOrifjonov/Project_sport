const puppeteer = require('d:/allProject/tools/node_modules/puppeteer-core');
const path = require('path');
const os = require('os');
const fs = require('fs');

(async () => {
  const tempDir = path.join(os.tmpdir(), 'pupp_' + Date.now());
  fs.mkdirSync(tempDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    userDataDir: tempDir,
    defaultViewport: { width: 1440, height: 950 }
  });

  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.message);
    pageErrors.push(err.message);
  });

  console.log('--- TEST: HIT TOVARLAR & YANGI KELGANLAR ON HOMEPAGE ---');
  await page.goto('http://[::1]:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('article', { timeout: 12000 });
  await new Promise(r => setTimeout(r, 1000));

  // Check section titles & badges
  const pageInfo = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim());
    const xitBadges = Array.from(document.querySelectorAll('*')).filter(el => el.innerText && el.innerText.trim() === '🔥 XIT').length;
    const yangiBadges = Array.from(document.querySelectorAll('*')).filter(el => el.innerText && el.innerText.trim() === '✨ YANGI').length;
    const cards = document.querySelectorAll('article').length;
    return { headings, xitBadges, yangiBadges, cards };
  });

  console.log('Page Info:', JSON.stringify(pageInfo, null, 2));

  // Screenshot 1: Top Hero & Hit Tovarlar
  await page.evaluate(() => window.scrollTo(0, 350));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_home_hit_top_section.png'
  });
  console.log('Captured qa_home_hit_top_section.png');

  // Screenshot 2: Full Catalog section with category tabs
  await page.evaluate(() => {
    const el = document.getElementById('barcha-katalog');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_home_catalog_section.png'
  });
  console.log('Captured qa_home_catalog_section.png');

  // Mobile viewport test
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 250));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_home_mobile_view.png'
  });
  console.log('Captured qa_home_mobile_view.png');

  await browser.close();
  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (_) {}
  console.log('TEST COMPLETE! Total errors:', pageErrors.length);
})();
