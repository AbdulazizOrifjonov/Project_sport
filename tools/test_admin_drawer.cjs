const puppeteer = require('d:/allProject/tools/node_modules/puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true }
  });
  const page = await browser.newPage();
  console.log('Loading /admin on mobile (390x844)...');
  await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Click mobile hamburger menu to open sidebar
  console.log('Opening mobile sidebar drawer...');
  await page.evaluate(() => {
    const menuBtn = document.querySelector('button[aria-label="Menyu"]');
    if (menuBtn) menuBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const drawerHeader = await page.evaluate(() => {
    const aside = document.querySelector('aside');
    if (!aside) return 'no aside';
    const header = aside.querySelector('.sticky.top-0');
    return {
      text: header ? header.innerText.replace(/\n+/g, ' ') : '',
      rect: header ? {
        width: header.getBoundingClientRect().width,
        height: header.getBoundingClientRect().height
      } : null
    };
  });
  console.log('Drawer Header Info:', drawerHeader);

  await page.screenshot({
    path: 'C:/Users/Abdul/.gemini/antigravity/brain/535e5449-532e-4ad8-aadb-e2692339701e/qa_admin_mobile_drawer_verified.png'
  });
  console.log('Saved qa_admin_mobile_drawer_verified.png');

  await browser.close();
})();
