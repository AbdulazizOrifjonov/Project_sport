const fs = require('fs');
const path = require('path');

function scanDir(dir, maxDepth = 3, currentDepth = 0) {
  if (currentDepth > maxDepth) return [];
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'build') continue;
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        results = results.concat(scanDir(full, maxDepth, currentDepth + 1));
      } else if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        results.push({ path: full, name: file, size: stat.size });
      }
    }
  } catch (e) {}
  return results;
}

const all = scanDir('.');
console.log('Total image files in project:', all.length);
// Filter by keywords
const keywords = ['drill', 'drel', 'konus', 'cone', 'balgarka', 'grinder', 'arra', 'saw', 'fen', 'charx', 'lenta', 'isitgich', 'heater', 'plitka', 'stoyka'];
const matches = all.filter(img => keywords.some(k => img.name.toLowerCase().includes(k)));
console.log('Keyword matches count:', matches.length);
matches.slice(0, 30).forEach(m => console.log(`${m.name} (${(m.size/1024).toFixed(1)} KB)`));
