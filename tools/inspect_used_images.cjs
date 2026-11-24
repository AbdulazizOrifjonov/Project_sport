const fs = require('fs');

const content = fs.readFileSync('frontend/src/services/mockData.js', 'utf8');
const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));

const imgMap = new Map();
for (const p of products) {
  for (const img of (p.images || [])) {
    if (!imgMap.has(img)) imgMap.set(img, []);
    imgMap.get(img).push(p.title);
  }
}

console.log(`Total unique image URLs used by 59 products: ${imgMap.size}`);
for (const [img, titles] of imgMap.entries()) {
  const exists = fs.existsSync(`frontend/public${img}`);
  console.log(`${img} (exists: ${exists}) used by ${titles.length} products: "${titles[0].slice(0, 35)}..."`);
}
