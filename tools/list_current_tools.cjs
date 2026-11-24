const fs = require('fs');

const content = fs.readFileSync('frontend/src/services/mockData.js', 'utf8');
const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));

console.log(`Total products: ${products.length}`);

// Let's filter products added recently or power tools / electronics
const tools = products.filter(p => 
  p.department === 'uskunalar' || 
  (p.categorySlug && (
    p.categorySlug.includes('balgarka') || 
    p.categorySlug.includes('drel') || 
    p.categorySlug.includes('arra') || 
    p.categorySlug.includes('lazer') ||
    p.categorySlug.includes('uskuna')
  ))
);

console.log(`\n=== POWER TOOLS & EQUIPMENT (${tools.length} products) ===`);
tools.forEach((p, idx) => {
  console.log(`${idx + 1}. [${p.id}]`);
  console.log(`   Title: ${p.title}`);
  console.log(`   Price: ${p.price} so'm (Old: ${p.oldPrice})`);
  console.log(`   Category: ${p.category} (${p.categorySlug})`);
  console.log(`   Images (${p.images?.length || 0}): ${JSON.stringify(p.images)}`);
  console.log(`   Specs: ${JSON.stringify(p.specifications || [])}`);
});
