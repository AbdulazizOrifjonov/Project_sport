const fs = require('fs');
const path = require('path');

const mockDataPath = path.resolve(__dirname, '../frontend/src/services/mockData.js');
let content = fs.readFileSync(mockDataPath, 'utf8');

const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);
const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));
const realMap = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'real_images_map.json'), 'utf8'));
const uploadsDir = path.resolve(__dirname, '../frontend/public/uploads');

function rotate(arr, offset) {
  if (!arr || arr.length === 0) return [];
  const n = arr.length;
  const k = offset % n;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

function validList(arr) {
  return arr.filter(u => u && fs.existsSync(path.join(uploadsDir, path.basename(u))));
}

const familyCounters = {};
function pickRotated(arr, key) {
  const clean = validList(arr);
  const count = familyCounters[key] || 0;
  familyCounters[key] = count + 1;
  return rotate(clean, count).slice(0, 4);
}

const updatedProducts = products.map((p) => {
  const slug = (p.slug || p.id.replace('prod_', '')).toLowerCase();
  const t = (p.title + ' ' + slug).toLowerCase();

  let department = p.department || "elektr-asboblar";
  let departmentName = p.departmentName || "Elektr Asbob-Uskunalar";
  let category = p.category;
  let categorySlug = p.categorySlug;
  let newTitle = p.title;
  let specs = p.specifications || [];
  let images = [];

  if (p.id === 'prod_balgarka-edon-1050w-125mm' || slug.includes('edon-1050w')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Balgarkalar & Silliqlash Mashinalari";
    categorySlug = "balgarkalar-ushm";
    newTitle = "Edon ED-AG125-1050 Professional Burchakli Silliqlash Mashinasi (Balgarka 1050W, 125 mm)";
    images = validList([
      "/uploads/balgarka-1050w-125mm_1.jpg",
      "/uploads/balgarka-1050w-125mm_2.jpg",
      "/uploads/balgarka-1050w-125mm_3.jpg"
    ]);
  } else if (slug.includes('bordyur') || slug.includes('1480-80')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Sun‘iy Notekislik & Dempferlar";
    categorySlug = "suniy-notekislik";
    newTitle = "Sanoat Yo‘l Bordyuri 1480x80 mm (Yo‘lak va qator ajratuvchi rezina bardur to‘sig‘i)";
    images = pickRotated(realMap.road_curb, 'road_curb');
    specs = [
      { label: "O‘lchami", value: "1480 x 80 mm" },
      { label: "Materiali", value: "Zarbaga chidamli qalin vulkanizatsiyalangan rezina" },
      { label: "Rangi", value: "Qora va sariq nur qaytaruvchi elementlar" },
      { label: "O‘rnatish", value: "Anker boltlar bilan asfalt/betonga mahkamlanadi" }
    ];
  } else if (slug.includes('parkovka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Signal Ustunlari & Belgilar";
    categorySlug = "yol-belgilari";
    newTitle = "Masofadan Boshqariladigan Avtomatik Parkovka To‘sig‘i (Pultli, akkumulyatorli, zarbaga chidamli)";
    images = pickRotated(realMap.parking_lock, 'parking_lock');
    specs = [
      { label: "Boshqaruv", value: "2 ta masofadan boshqarish pulti (30m masofa)" },
      { label: "Quvvat manbai", value: "O‘rnatilgan qayta zaryadlanuvchi akkumulyator" },
      { label: "Himoya darajasi", value: "IP67 suv va changdan himoya, 180° zarba himoyasi" },
      { label: "Materiali", value: "Qalin sovuq prokatlangan po‘lat" }
    ];
  } else if (t.includes('4&1') || (t.includes('perforator') && t.includes('gaykavyort'))) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Asboblar To‘plamlari (Naborlar)";
    categorySlug = "asboblar-to-plami";
    newTitle = "DeWalt 4&1 Professional Akkumulyatorli Asboblar To‘plami (Balgarka 125mm, Zarbli Drel, Gaykavyort, Perforator 21V)";
    images = pickRotated(realMap.combo_4in1, 'combo_4in1');
  } else if (t.includes('trimmer')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Arralar & Bog‘ Texnikasi";
    categorySlug = "arralar-bog";
    newTitle = "Universal Akkumulyatorli Maysa O‘radigan Trimmer 21V (G‘ildirakli baza, metall disk va pichoqlar bilan)";
    images = pickRotated(realMap.trimmer, 'trimmer');
  } else if (t.includes('2&1') || t.includes('bog-bon') || t.includes('zanjirli-arra')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Arralar & Bog‘ Texnikasi";
    categorySlug = "arralar-bog";
    newTitle = "2&1 Akkumulyatorli Bog‘bon To‘plami 21V (Mini zanjirli arra 6 dyuym + Akkumulyatorli sekator)";
    images = pickRotated(realMap.garden_2in1, 'garden_2in1');
  } else if (t.includes('fen')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Qo‘l Asboblari & O‘lchov";
    categorySlug = "qol-asboblari";
    newTitle = "Turbo 2000W Professional Sanoat Texnik Feni (50-600°C harorat sozlagichi, 4 ta nasadka bilan)";
    images = pickRotated(realMap.heat_gun, 'heat_gun');
  } else if (t.includes('charx')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Balgarkalar & Silliqlash Mashinalari";
    categorySlug = "balgarkalar-ushm";
    newTitle = "SLJ 150W Ikki Tomonlama Elektr Toshli Stol Charxi (150 mm charx disklari, himoya oynalari bilan)";
    images = pickRotated(realMap.bench_grinder, 'bench_grinder');
  } else if (t.includes('gaykavyort')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Drellar & Shurupovyortlar";
    categorySlug = "drellar-shurupovyortlar";
    newTitle = "Professional Akkumulyatorli Zarbli Gaykavyort 21V (Cho‘tkasiz motor, 1/2 dyuym kallak, 2 ta akkumulyator)";
    const useGen = (familyCounters['gaykavyort'] || 0) % 2 === 0;
    familyCounters['gaykavyort'] = (familyCounters['gaykavyort'] || 0) + 1;
    images = useGen
      ? validList(["/uploads/impact-wrench-21v_1.jpg", "/uploads/impact-wrench-21v_2.jpg", "/uploads/impact-wrench-21v_3.jpg"])
      : pickRotated(realMap.impact_wrench, 'impact_wrench_real');
  } else if (t.includes('balgarka') || t.includes('ush-m')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Balgarkalar & Silliqlash Mashinalari";
    categorySlug = "balgarkalar-ushm";
    newTitle = "Professional Akkumulyatorli Burchakli Silliqlash Mashinasi (Balgarka 125 mm, 21V cho‘tkasiz motor)";
    const useGen = (familyCounters['cordless_balgarka'] || 0) % 2 === 0;
    familyCounters['cordless_balgarka'] = (familyCounters['cordless_balgarka'] || 0) + 1;
    images = useGen
      ? validList(["/uploads/cordless-balgarka-21v_1.jpg", "/uploads/cordless-balgarka-21v_2.jpg", realMap.cordless_balgarka[0], realMap.cordless_balgarka[1]])
      : pickRotated(realMap.cordless_balgarka, 'cordless_balgarka_real');
  } else if (t.includes('tsirkulyar') || t.includes('diskli-qo-l-arrasi')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Arralar & Bog‘ Texnikasi";
    categorySlug = "arralar-bog";
    newTitle = "Professional Akkumulyatorli Tsirkulyar Diskli Arra 21V (185 mm disk, burchak va chuqurlik sozlagichi)";
    images = pickRotated(realMap.circular_saw, 'circular_saw');
  } else if ((t.includes('drel') || t.includes('shurupovyort')) && p.price >= 300000) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Drellar & Shurupovyortlar";
    categorySlug = "drellar-shurupovyortlar";
    newTitle = "DeWalt DCD796 21V Professional Zarbli Drel-shurupovyort (Cho‘tkasiz motor, 2 ta batareya va metall keys)";
    const c = familyCounters['dewalt_drill'] || 0;
    familyCounters['dewalt_drill'] = c + 1;
    images = c === 0
      ? validList(["/uploads/dewalt-drill-21v_1.jpg", "/uploads/dewalt-drill-21v_2.jpg", "/uploads/dewalt-drill-21v_3.jpg"])
      : pickRotated(realMap.drill_18v, 'drill_18v');
  } else if (t.includes('drel') || t.includes('shurupovyort')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Drellar & Shurupovyortlar";
    categorySlug = "drellar-shurupovyortlar";
    newTitle = "Kompakt Akkumulyatorli Drel-shurupovyort 12V (Ergonomik rezinali tutqich, LED yoritgich, 2 batareya)";
    images = pickRotated(realMap.drill_12v, 'drill_12v');
  } else if (t.includes('taktil') || t.includes('plitka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Yo‘l Konuslari & To‘siqlar";
    categorySlug = "yol-konuslari";
    newTitle = "PVX Taktil Yo‘lak Plitkasi 300x300 mm (Ko‘zi ojizlar uchun sariq yo‘naltiruvchi va ogohlantiruvchi)";
    images = validList(["/uploads/tactile-tile-pvc_1.jpg", "/uploads/tactile-tile-pvc_2.jpg", "/uploads/tactile-tile-pvc_3.jpg"]);
  } else if (t.includes('kolesootboynik')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Sun‘iy Notekislik & Dempferlar";
    categorySlug = "suniy-notekislik";
    newTitle = "Kauchuk Kolesootboynik 1.84m * 15 * 10 sm (Avtoturargoh uchun sariq nur qaytaruvchi g‘ildirak to‘xtatgich)";
    images = validList(["/uploads/wheel-stop-184_1.jpg", "/uploads/wheel-stop-184_2.jpg", "/uploads/wheel-stop-184_3.jpg"]);
  } else if (t.includes('lenta-stoyka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Signal Ustunlari & Belgilar";
    categorySlug = "yol-belgilari";
    newTitle = "Lenta Stoyka 3m (Zanglamas po‘lat xrom to‘siq ustuni, 3 metrlik avtomatik tortiluvchi qizil lenta bilan)";
    images = validList(["/uploads/stanchion-3m_1.jpg", "/uploads/stanchion-3m_2.jpg", "/uploads/stanchion-3m_3.jpg"]);
  } else if (t.includes('konus')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Yo‘l Konuslari & To‘siqlar";
    categorySlug = "yol-konuslari";
    const c = familyCounters['cone'] || 0;
    familyCounters['cone'] = c + 1;
    if (c === 0) {
      images = validList(["/uploads/konus-tpu-75sm_1.jpg", "/uploads/konus-tpu-75sm_2.jpg", realMap.traffic_cone[0], realMap.traffic_cone[1]]);
    } else {
      images = pickRotated(realMap.traffic_cone, 'traffic_cone');
    }
  } else if (t.includes('ustun') || t.includes('stolbik') || t.includes('delimiter')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Signal Ustunlari & Belgilar";
    categorySlug = "yol-belgilari";
    images = pickRotated(realMap.delineator_post, 'delineator_post');
  } else if (t.includes('garmoshka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Yo‘l Konuslari & To‘siqlar";
    categorySlug = "yol-konuslari";
    images = pickRotated(realMap.barrier_accordion, 'barrier_accordion');
  } else if (t.includes('dempfer')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Sun‘iy Notekislik & Dempferlar";
    categorySlug = "suniy-notekislik";
    images = pickRotated(realMap.corner_guard, 'corner_guard');
  } else if (t.includes('migalka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Signal Ustunlari & Belgilar";
    categorySlug = "yol-belgilari";
    images = pickRotated(realMap.solar_beacon, 'solar_beacon');
  } else if (t.includes('quyosh') && t.includes('isitgich')) {
    department = "iqlim-isitgichlar";
    departmentName = "Isitgichlar & Iqlim Texnikasi";
    category = "Infraqizil & Reflektorli Isitgichlar";
    categorySlug = "infrakrasnye-isitgichlar";
    const pool = ["/uploads/heater-quyosh-40cm_1.jpg", ...realMap.heater_quyosh];
    images = pickRotated(pool, 'heater_quyosh');
  } else if (t.includes('issiqlik-to-pi') || t.includes('ventilyator')) {
    department = "iqlim-isitgichlar";
    departmentName = "Isitgichlar & Iqlim Texnikasi";
    category = "Sanoat Issiqlik To‘plari & Teploventilyatorlar";
    categorySlug = "sanoat-issiqlik-toplari";
    const pool = ["/uploads/heater-cannon-2000w_1.jpg", ...realMap.heater_cannon];
    images = pickRotated(pool, 'heater_cannon');
  } else if (t.includes('keramik') || t.includes('stol-isitgichi')) {
    department = "iqlim-isitgichlar";
    departmentName = "Isitgichlar & Iqlim Texnikasi";
    category = "Maishiy Stol & Keramik Isitgichlar";
    categorySlug = "maishiy-isitgichlar";
    const pool = ["/uploads/heater-ceramic-desk_1.jpg", ...realMap.heater_ceramic];
    images = pickRotated(pool, 'heater_ceramic');
  }

  images = [...new Set(images)];
  if (images.length < 3) {
    console.warn(`WARNING: ${p.slug} only has ${images.length} unique images!`);
  }

  return {
    ...p,
    title: newTitle,
    department,
    departmentName,
    category,
    categorySlug,
    category_slug: categorySlug,
    images,
    specifications: specs,
    price: p.price,
    oldPrice: p.oldPrice || Math.round(p.price * 1.2 / 1000) * 1000,
    old_price: p.oldPrice || Math.round(p.price * 1.2 / 1000) * 1000
  };
});

const updatedJson = JSON.stringify(updatedProducts, null, 2);
const newContent = content.slice(0, pStart) + 'export const defaultProducts = ' + updatedJson + ';' + content.slice(pEnd + 3);
fs.writeFileSync(mockDataPath, newContent, 'utf8');

let minUnique = 99;
updatedProducts.forEach(p => {
  const u = new Set(p.images).size;
  if (u < minUnique) minUnique = u;
});
console.log(`Updated ${updatedProducts.length} products! Minimum unique images per product: ${minUnique}`);
