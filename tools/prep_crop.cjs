const fs = require('fs');
const path = require('path');

// Let's crop the label on the green body and the handle
// Image size of user_balgarka.jpg
const buf = fs.readFileSync('C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/user_balgarka.jpg');

// Let's use Jimp or pure node or canvas or sharp if available, or write a python script to crop
const pyScript = `
from PIL import Image

img = Image.open(r"C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/user_balgarka.jpg")
w, h = img.size
print(f"Original size: {w}x{h}")

# Crop label on the left side of the teal body
# Teal body is around x: 300-600, y: 150-550
label_crop = img.crop((int(w * 0.35), int(h * 0.25), int(w * 0.65), int(h * 0.45)))
label_crop.save(r"C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/label_crop.jpg")

# Crop gear head
gear_crop = img.crop((int(w * 0.3), 0, int(w * 0.8), int(h * 0.25)))
gear_crop.save(r"C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/gear_crop.jpg")

# Crop handle
handle_crop = img.crop((int(w * 0.4), int(h * 0.65), int(w * 0.75), int(h * 0.95)))
handle_crop.save(r"C:/Users/Abdul/.gemini/antigravity/brain/a1c287bc-7809-4e20-8938-2052ad2ed8e6/handle_crop.jpg")

print("Crops saved successfully.")
`;

fs.writeFileSync('tools/crop_label.py', pyScript);
console.log('Saved crop_label.py');
