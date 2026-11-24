const fs = require('fs');

const content = fs.readFileSync('frontend/src/services/mockData.js', 'utf8');
const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));

console.log(`Total products: ${products.length}`);

// Group by category/type
const byImages = {
  singleImage: products.filter(p => !p.images || p.images.length <= 1),
  multiImage: products.filter(p => p.images && p.images.length > 1)
};

console.log(`Products with <= 1 image: ${byImages.singleImage.length}`);
console.log(`Products with > 1 image: ${byImages.multiImage.length}`);

console.log('\n--- SINGLE IMAGE PRODUCTS (First 20) ---');
byImages.singleImage.slice(0, 20).forEach(p => {
  console.log(`[${p.id}] ${p.title} (${p.category}) -> ${p.images?.[0]}`);
});
