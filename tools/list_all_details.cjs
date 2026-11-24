const fs = require('fs');

const content = fs.readFileSync('frontend/src/services/mockData.js', 'utf8');
const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));

console.log('ID | TITLE | PRICE | CATEGORY | CURRENT_IMAGES');
products.forEach((p, i) => {
  console.log(`${i+1}. [${p.id}] "${p.title}" | ${p.price} | ${p.categorySlug} | ${(p.images||[]).join(', ')}`);
});
