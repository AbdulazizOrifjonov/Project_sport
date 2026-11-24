const fs = require('fs');

const files = fs.readdirSync('frontend/public/uploads');
console.log('Total files:', files.length);

const grouped = {};
for (const f of files) {
  const ext = f.split('.').pop().toLowerCase();
  grouped[ext] = (grouped[ext] || 0) + 1;
}
console.log('File extensions:', grouped);

// Find files that don't match prod-XXXXXX_1
const custom = files.filter(f => !f.match(/^prod-\d+_\d+\./));
console.log('Non-random files count:', custom.length);
console.log('Sample non-random files:', custom.slice(0, 40));
