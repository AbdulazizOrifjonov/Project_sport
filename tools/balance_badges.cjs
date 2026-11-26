const fs = require('fs');
const path = require('path');

const mockDataPath = path.resolve(__dirname, '../frontend/src/services/mockData.js');
const content = fs.readFileSync(mockDataPath, 'utf8');
const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));

const DISCOUNT_OPTIONS = [10, 12, 15, 18, 20];

const balanced = products.map((p, idx) => {
  // Distribute cleanly in 4 buckets (mod 4):
  // 0 -> XIT only
  // 1 -> Chegirma only
  // 2 -> YANGI only
  // 3 -> Clean (no badge)
  const bucket = idx % 4;
  let isBestseller = false;
  let isNewArrival = false;
  let isWeeklyDeal = false;
  let discountPercent = 0;
  let oldPrice = 0;

  if (bucket === 0) {
    isBestseller = true;
  } else if (bucket === 1) {
    discountPercent = DISCOUNT_OPTIONS[idx % DISCOUNT_OPTIONS.length];
    oldPrice = Math.round((p.price / (1 - discountPercent / 100)) / 1000) * 1000;
    isWeeklyDeal = true;
  } else if (bucket === 2) {
    isNewArrival = true;
  }

  return {
    ...p,
    oldPrice,
    old_price: oldPrice,
    discountPercent,
    discount_percent: discountPercent,
    isBestseller,
    is_bestseller: isBestseller,
    isNewArrival,
    is_new_arrival: isNewArrival,
    isWeeklyDeal,
    is_weekly_deal: isWeeklyDeal,
    is_hit: isBestseller
  };
});

const newContent = content.slice(0, pStart) + 'export const defaultProducts = ' + JSON.stringify(balanced, null, 2) + ';' + content.slice(pEnd + 3);
fs.writeFileSync(mockDataPath, newContent, 'utf8');

const counts = {
  xit: balanced.filter(p => p.isBestseller).length,
  sale: balanced.filter(p => p.discountPercent > 0).length,
  yangi: balanced.filter(p => p.isNewArrival).length,
  clean: balanced.filter(p => !p.isBestseller && p.discountPercent === 0 && !p.isNewArrival).length
};
console.log('Balanced badges across', balanced.length, 'products:', counts);
