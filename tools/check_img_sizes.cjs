const fs = require('fs');
const path = require('path');

const uploadsDir = 'frontend/public/uploads';
const files = fs.readdirSync(uploadsDir);

// Check sizes
const stats = files.map(f => {
  const p = path.join(uploadsDir, f);
  const s = fs.statSync(p);
  return { name: f, size: s.size };
});

stats.sort((a, b) => b.size - a.size);
console.log('Top 30 largest files in uploads:');
stats.slice(0, 30).forEach(x => console.log(`${x.name}: ${(x.size/1024).toFixed(1)} KB`));
