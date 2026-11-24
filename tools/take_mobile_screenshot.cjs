const puppeteer = require('d:/allProject/tools/node_modules/puppeteer-core');
const path = require('path');
const os = require('os');
const fs = require('fs');

(async () => {
  const tempDir = path.join(os.tmpdir(), 'pupp_m_' + Date.now());
  fs.mkdirSync(tempDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    userDataDir: tempDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true }
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('article', { timeout: 15000 });
  await new Promise(r => setTimeout(r, 1500));

  await page.evaluate(() => window.scrollTo(0, 1050));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_final_mobile_hit_cards.png'
  });
  console.log('Saved qa_final_mobile_hit_cards.png');

  await browser.close();
  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch (_) {}
})();
