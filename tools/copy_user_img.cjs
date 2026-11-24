const fs = require('fs');
const path = require('path');

// Let's copy media_1795541403338_0f58c27b.jpg to artifacts so we can read it directly
const src = 'C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/.user_uploaded/media_1795541403338_0f58c27b.jpg';
const dest = 'C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/user_balgarka.jpg';
fs.copyFileSync(src, dest);
console.log('Copied user balgarka image.');
