const puppeteer = require('d:/allProject/tools/node_modules/puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true }
  });
  const page = await browser.newPage();
  console.log('Navigating to live render...');
  await page.goto('https://project-sport-jp39.onrender.com', { waitUntil: 'networkidle0', timeout: 35000 });
  const title = await page.title();
  const bottomNavInfo = await page.evaluate(() => {
    const nav = document.querySelector('nav[aria-label="Mobil pastki navigatsiya"]');
    if (!nav) return 'no nav';
    const dots = nav.querySelectorAll('.w-1\\.5.h-1\\.5');
    return {
      hasDots: dots.length > 0,
      dotCount: dots.length
    };
  });
  console.log('Live Render Title:', title);
  console.log('Live Bottom Nav Dots:', bottomNavInfo);
  await page.screenshot({ path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_live_render_check.png' });
  await browser.close();
})();
