const fs = require('fs');
const path = require('path');

const src1 = 'C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/angle_grinder_main_isometric_1795543198360.jpg';
const src2 = 'C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/angle_grinder_complete_kit_1795543231100.jpg';
const src3 = 'C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/angle_grinder_detail_closeup_v3_1795543303669.jpg';

const targetDir = 'frontend/public/uploads';

fs.copyFileSync(src1, path.join(targetDir, 'balgarka-1050w-125mm_1.jpg'));
fs.copyFileSync(src2, path.join(targetDir, 'balgarka-1050w-125mm_2.jpg'));
fs.copyFileSync(src3, path.join(targetDir, 'balgarka-1050w-125mm_3.jpg'));

console.log('Copied all 3 balgarka images to uploads!');
