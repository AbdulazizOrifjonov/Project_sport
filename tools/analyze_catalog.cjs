const fs = require('fs');

const content = fs.readFileSync('frontend/src/services/mockData.js', 'utf8');
const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));

console.log('Total products:', products.length);

const types = {};
for (const p of products) {
  let type = 'other';
  const t = p.title.toLowerCase();
  if (t.includes('4&1') || t.includes('to‘plami') || t.includes("to'plami")) type = 'combo_4in1';
  else if (t.includes('trimmer')) type = 'trimmer';
  else if (t.includes('2&1') || t.includes('sekator') || t.includes('bog‘bon')) type = 'garden_2in1';
  else if (t.includes('gaykavyort')) type = 'gaykavyort';
  else if (t.includes('fen')) type = 'heat_gun';
  else if (t.includes('charx')) type = 'bench_grinder';
  else if (t.includes('balgarka') || t.includes('ush-m') || t.includes('ushm')) type = 'balgarka';
  else if (t.includes('tsirkulyar') || t.includes('arra')) type = 'circular_saw';
  else if (t.includes('drel') || t.includes('shurupovyort')) type = 'drill';
  else if (t.includes('plitka') || t.includes('taktil')) type = 'tactile_tile';
  else if (t.includes('konus')) type = 'road_cone';
  else if (t.includes('ustun') || t.includes('stolbik') || t.includes('delimiter')) type = 'delineator_post';
  else if (t.includes('lenta stoyka')) type = 'stanchion';
  else if (t.includes('garmoshka')) type = 'barrier';
  else if (t.includes('kolesootboynik') || t.includes('bordyur') || t.includes('dempfer')) type = 'wheel_stop';
  else if (t.includes('isitgich') || t.includes('issiqlik')) type = 'heater';
  else if (t.includes('migalka') || t.includes('signal') || t.includes('parkovka')) type = 'solar_beacon';

  types[type] = (types[type] || 0) + 1;
}

console.log('Product types count:', types);
