const fs = require('fs');

const content = fs.readFileSync('frontend/src/services/mockData.js', 'utf8');
const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));

const unique = [];
const seen = new Set();

for (const p of products) {
  // normalize title
  const key = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(p);
  }
}

console.log(`Unique products count: ${unique.length} out of ${products.length}`);
unique.forEach((p, i) => {
  console.log(`${i + 1}. [${p.id}] ${p.title} | ${p.price} so'm | ${p.categorySlug}`);
});
