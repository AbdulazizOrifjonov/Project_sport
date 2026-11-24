const fs = require('fs');
const path = require('path');

const mockDataPath = path.resolve(__dirname, '../frontend/src/services/mockData.js');
let content = fs.readFileSync(mockDataPath, 'utf8');

const pStart = content.indexOf('export const defaultProducts = [');
const pEnd = content.indexOf('\n];', pStart);

if (pStart === -1 || pEnd === -1) {
  console.error("Could not locate defaultProducts array in mockData.js");
  process.exit(1);
}

const products = JSON.parse(content.slice(pStart + 'export const defaultProducts = '.length, pEnd + 2));
console.log(`Loaded ${products.length} products from mockData.js`);

const uploadsDir = path.resolve(__dirname, '../frontend/public/uploads');

// Product definitions with professional title, wattage/specs, category & department
// NOTE: PRICES REMAIN 100% UNCHANGED (taken directly from p.price)
const updatedProducts = products.map((p, idx) => {
  const t = p.title.toLowerCase();
  const slug = p.slug || p.id.replace('prod_', '');
  
  // Default specs and department
  let department = p.department || "uskunalar";
  let departmentName = p.departmentName || "Asbob-Uskunalar & Qurilish";
  let category = p.category;
  let categorySlug = p.categorySlug;
  let newTitle = p.title;
  let specs = p.specifications || [];
  let desc = p.description;

  // Check available studio files
  let images = [];
  const s1 = `studio_${slug}_1.jpg`;
  const s2 = `studio_${slug}_2.jpg`;
  const s3 = `studio_${slug}_3.jpg`;
  
  if (fs.existsSync(path.join(uploadsDir, s1)) && fs.existsSync(path.join(uploadsDir, s2)) && fs.existsSync(path.join(uploadsDir, s3))) {
    images = [`/uploads/${s1}`, `/uploads/${s2}`, `/uploads/${s3}`];
  } else {
    // If not specific slug, check if primary image has studio version
    const prim = (p.images && p.images[0]) ? p.images[0] : null;
    if (prim) {
      images = [prim, prim, prim];
    } else {
      images = ["/uploads/balgarka-1050w-125mm_1.jpg", "/uploads/balgarka-1050w-125mm_2.jpg", "/uploads/balgarka-1050w-125mm_3.jpg"];
    }
  }

  // --- POWER TOOLS & WORKSHOP ---
  if (t.includes('4&1') || t.includes("to‘plami") && t.includes("perforator")) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Asboblar To‘plamlari (Naborlar)";
    categorySlug = "asboblar-to-plami";
    newTitle = "DeWalt 4&1 Professional Akkumulyatorli Asboblar To‘plami (Balgarka 125mm, Zarbli Drel, Gaykavyort, Perforator 21V)";
    specs = [
      { label: "To'plam tarkibi", value: "Balgarka (125mm), Zarbli drel, Gaykavyort, Perforator" },
      { label: "Akkumulyator", value: "2 dona 21V 4.0Ah Li-ion" },
      { label: "Dvigatel turi", value: "Cho'tkasiz (Brushless) kuchaytirilgan motor" },
      { label: "Balgarka tezligi", value: "8 500 ayl/daq, 125 mm disk" },
      { label: "Gaykavyort aylanish momenti", value: "350 Nm, 1/2 dyuym kallak" },
      { label: "Keys", value: "Og'ir yuklarga chidamli zarbaga qarshi mustahkam keys" }
    ];
  } else if (t.includes('trimmer')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Arralar & Bog‘ Texnikasi";
    categorySlug = "arralar-bog";
    newTitle = "Universal Akkumulyatorli Maysa O‘radigan Trimmer 21V (G‘ildirakli baza, metall disk va pichoqlar bilan)";
    specs = [
      { label: "Quvvati / Kuchlanish", value: "21V Li-ion akkumulyator" },
      { label: "Aylanishlar soni", value: "10 000 ayl/daq" },
      { label: "Qirqish kengligi", value: "150 mm" },
      { label: "Teleskopik shtanga", value: "90 - 125 sm sozlanuvchi alyuminiy korpus" },
      { label: "Komplektatsiya", value: "G'ildirakli baza, po'lat disk, 2 ta metall pichoq, 5 ta plastik pichoq, 2 ta batareya" }
    ];
  } else if (t.includes('dewalt 72v') || t.includes('zarbli drel-shurupovyort')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Drellar & Shurupovyortlar";
    categorySlug = "drellar-shurupovyortlar";
    newTitle = "DeWalt DCD796 21V Professional Zarbli Drel-shurupovyort (Cho'tkasiz motor, 2 ta batareya va metall keys)";
    images = ["/uploads/dewalt-drill-21v_1.jpg", "/uploads/dewalt-drill-21v_2.jpg", "/uploads/dewalt-drill-21v_3.jpg"];
    specs = [
      { label: "Kuchlanishi", value: "21V (Maksimal quvvat)" },
      { label: "Aylanish momenti", value: "70 Nm, 20+3 bosqichli sozlagich" },
      { label: "Patron", value: "13 mm metall tez qisuvchi patron" },
      { label: "Tezliklar soni", value: "2 bosqichli reduktor (0-450 / 0-1650 ayl/daq)" },
      { label: "Zarb funksiyasi", value: "Mavjud (Beton va g'isht burg'ulash uchun)" },
      { label: "Komplekt", value: "2 ta batareya, tezkor zaryadlovchi, burg'ular to'plami, mustahkam keys" }
    ];
  } else if (t.includes('fen') || t.includes('sanoat feni')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Qo‘l Asboblari & O‘lchov";
    categorySlug = "qol-asboblari";
    newTitle = "Turbo 2000W Professional Sanoat Texnik Feni (50-600°C harorat sozlagichi, 4 ta nasadka bilan)";
    specs = [
      { label: "Quvvati", value: "2000 Vt (2000W)" },
      { label: "Harorat oralig'i", value: "50°C - 600°C (Ravon sozlanuvchi regulyator)" },
      { label: "Havo oqimi", value: "2 bosqich (300 L/daq va 500 L/daq)" },
      { label: "Qizdirish elementi", value: "Keramik qoplamali yuqori quvvatli nikel spiral" },
      { label: "Nasadkalar", value: "4 ta zanglamas po'lat yo'naltiruvchi nasadka va qirg'ich" }
    ];
  } else if (t.includes('stol charxi') || t.includes('charx')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Balgarkalar & Silliqlash Mashinalari";
    categorySlug = "balgarkalar-ushm";
    newTitle = "SLJ 150W Ikki Tomonlama Elektr Toshli Stol Charxi (150 mm charx disklari, himoya oynalari bilan)";
    specs = [
      { label: "Quvvati", value: "150 Vt (150W)" },
      { label: "Aylanishlar soni", value: "2950 ayl/daq" },
      { label: "Tosh diametri", value: "150 mm (Qalinligi 16 mm, o'qi 12.7 mm)" },
      { label: "Tosh donadorligi", value: "Dag'al (36-grit) va mayda (60-grit) charx toshlari" },
      { label: "Xavfsizlik", value: "Metall himoya kojuxi va shaffof uchqundan himoyalovchi ekranlar" }
    ];
  } else if (t.includes('2&1') && (t.includes('bog') || t.includes('sekator') || t.includes('zanjirli'))) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Arralar & Bog‘ Texnikasi";
    categorySlug = "arralar-bog";
    newTitle = "2&1 Akkumulyatorli Bog‘bon To‘plami 21V (Mini zanjirli arra 6 dyuym + Akkumulyatorli sekator)";
    specs = [
      { label: "Kuchlanishi", value: "21V Li-ion" },
      { label: "Zanjirli arra shinasi", value: "6 dyuym (15 sm) qotirilgan po'lat shina va zanjir" },
      { label: "Sekator qirqish qalinligi", value: "30 mm gacha shoxlarni oson qirqadi (SK5 po'lat tig')" },
      { label: "Dvigatel", value: "Yuqori quvvatli cho'tkasiz (Brushless) motor" },
      { label: "Komplekt", value: "Arra, sekator, 2 ta akkumulyator, zaryadlagich, moy idishi, maxsus keys" }
    ];
  } else if (t.includes('gaykavyort')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Drellar & Shurupovyortlar";
    categorySlug = "drellar-shurupovyortlar";
    newTitle = "Professional Akkumulyatorli Zarbli Gaykavyort 21V (Cho‘tkasiz motor, 1/2 dyuym kallak, 2 ta akkumulyator)";
    specs = [
      { label: "Maksimal aylanish momenti", value: "350 - 450 Nm (G'ildirak boltlarini oson yechadi)" },
      { label: "Kuchlanishi", value: "21V Li-ion" },
      { label: "Kallak o'lchami", value: "1/2 dyuym (12.7 mm) to'rtburchak shpindel" },
      { label: "Tezlik rejimlari", value: "Elektron tezlik va zarb boshqaruvi (LED indikator)" },
      { label: "Komplekt", value: "Gaykavyort, 2 ta batareya, tezkor zaryadlash stansiyasi, 4 ta zarbli kallak" }
    ];
  } else if (t.includes('balgarka') || t.includes('ush-m')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Balgarkalar & Silliqlash Mashinalari";
    categorySlug = "balgarkalar-ushm";
    newTitle = "Professional Akkumulyatorli Burchakli Silliqlash Mashinasi (Balgarka 125 mm, 21V cho'tkasiz motor)";
    specs = [
      { label: "Kuchlanishi", value: "21V Li-ion" },
      { label: "Disk diametri", value: "125 mm" },
      { label: "Aylanishlar soni", value: "8 500 ayl/daq (Tezlikni sozlash mumkin)" },
      { label: "Shpindel", value: "M14 standart shpindel, tez bloklash tugmasi" },
      { label: "Ergonomika", value: "Yupqa korpus, tebranishni yutuvchi qo'shimcha dasta" }
    ];
  } else if (t.includes('tsirkulyar') || t.includes('diskli arra')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Arralar & Bog‘ Texnikasi";
    categorySlug = "arralar-bog";
    newTitle = "Professional Akkumulyatorli Tsirkulyar Diskli Arra 21V (185 mm disk, burchak va chuqurlik sozlagichi)";
    specs = [
      { label: "Disk diametri", value: "185 mm (24 tishli karbid qotishmali disk)" },
      { label: "Aylanishlar soni", value: "5 000 ayl/daq" },
      { label: "Kesish chuqurligi", value: "90° da 65 mm, 45° da 45 mm gacha" },
      { label: "Baza platformasi", value: "Mustahkam quyma alyuminiy poydevor" }
    ];
  } else if (t.includes('shurupovyort') || t.includes('drel')) {
    department = "elektr-asboblar";
    departmentName = "Elektr Asbob-Uskunalar";
    category = "Drellar & Shurupovyortlar";
    categorySlug = "drellar-shurupovyortlar";
    newTitle = "Kompakt Akkumulyatorli Drel-shurupovyort 12V (Ergonomik rezinali tutqich, LED yoritgich, 2 batareya)";
    specs = [
      { label: "Kuchlanishi", value: "12V Li-ion" },
      { label: "Patron o'lchami", value: "0.8 - 10 mm tezkor patron" },
      { label: "Aylanish momenti", value: "28 Nm, 18+1 bosqichli" },
      { label: "Tezlik", value: "2 bosqich (0-350 / 0-1350 ayl/daq)" }
    ];
  }
  
  // --- ROAD & TRAFFIC SAFETY ---
  else if (t.includes('konus') || t.includes('tpu 75')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Yo‘l Konuslari & To‘siqlar";
    categorySlug = "yol-konuslari";
    newTitle = "Yo‘l Harakati Xavfsizlik Konusi TPU 75 sm (Egiluvchan, 2 ta mikroprizmatik nur qaytaruvchi tasmali)";
    if (t.includes('75')) {
      images = ["/uploads/konus-tpu-75sm_1.jpg", "/uploads/konus-tpu-75sm_2.jpg", "/uploads/konus-tpu-75sm_1.jpg"];
    }
    specs = [
      { label: "Balandligi", value: "75 sm" },
      { label: "Materiali", value: "Yuqori sifatli egiluvchan TPU (Avtomobil bosganda sinmaydi)" },
      { label: "Nur qaytarish", value: "2 ta keng mikroprizmatik yuqori ko'rinuvchan tasmalari" },
      { label: "Asosi", value: "Og'ir sakkizburchak barqaror asos, shamolda ag'darilmaydi" }
    ];
  } else if (t.includes('plitka') || t.includes('taktil')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Yo‘l Konuslari & To‘siqlar";
    categorySlug = "yol-konuslari";
    newTitle = "PVX Taktil Yo'lak Plitkasi 300x300 mm (Ko‘zi ojizlar uchun sariq yo‘naltiruvchi va ogohlantiruvchi)";
    specs = [
      { label: "O‘lchami", value: "300 x 300 mm, qalinligi 5 mm" },
      { label: "Materiali", value: "Elastik mustahkam PVX (sirpanmaydigan relefli sirt)" },
      { label: "Rangi", value: "Yorqin signal sariq (Signal Yellow)" },
      { label: "Vazifasi", value: "Ko'zi ojiz va zaif ko'ruvchilar uchun xavfsiz yo'l yo'naltirgichi" }
    ];
  } else if (t.includes('kolesootboynik') || t.includes('to‘xtatgich')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Sun‘iy Notekislik & Dempferlar";
    categorySlug = "suniy-notekislik";
    newTitle = "Kauchuk Kolesootboynik 1.84m * 15 * 10 sm (Avtoturargoh uchun sariq nur qaytaruvchi g‘ildirak to‘xtatgich)";
    specs = [
      { label: "Uzunligi", value: "1840 mm (1.84 metr), eni 150 mm, balandligi 100 mm" },
      { label: "Materiali", value: "Vulkanizatsiyalangan og'ir kauchuk rezina" },
      { label: "Nur qaytargichlar", value: "Sariq nur qaytaruvchi strelkalar (kechasi aniq ko'rinadi)" },
      { label: "Yuk ko'tarish", value: "30 tonnagacha og'irlikdagi transport vositalariga chidamli" }
    ];
  } else if (t.includes('lenta stoyka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Signal Ustunlari & Belgilar";
    categorySlug = "yol-belgilari";
    newTitle = "Lenta Stoyka 3m (Zanglamas po'lat xrom to‘siq ustuni, 3 metrlik avtomatik tortiluvchi qizil lenta bilan)";
    specs = [
      { label: "Ustun balandligi", value: "90 sm, diametri 63 mm" },
      { label: "Lenta uzunligi", value: "3 metr qizil qalin neylon lenta" },
      { label: "Materiali", value: "Yuqori sifatli jilolangan zanglamas po'lat (Xrom)" },
      { label: "Asos og'irligi", value: "6.5 kg og'ir quyma disk, barqaror turadi" }
    ];
  } else if (t.includes('garmoshka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Yo‘l Konuslari & To‘siqlar";
    categorySlug = "yol-konuslari";
    newTitle = "Suriluvchi Metall Garmoshka To‘siq 80x300 sm (Mobil yig‘iluvchi xavfsizlik va yo'l to'sig'i)";
    specs = [
      { label: "Balandligi", value: "80 sm / 100 sm" },
      { label: "Uzunligi ochilganda", value: "300 sm (3 metr)" },
      { label: "Konstruktsiyasi", value: "Garmoshka mexanizmi, qulay yig'iladi va suriladi" },
      { label: "G'ildiraklar", value: "Tormozli mustahkam aylanuvchi g'ildiraklar" }
    ];
  } else if (t.includes('ustun') || t.includes('stolbik') || t.includes('delimiter')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Signal Ustunlari & Belgilar";
    categorySlug = "yol-belgilari";
    newTitle = "Egiluvchan Qizil-Oq Yo‘l Ustuni 75 sm (Poliuretan stolbik, 3 ta nur qaytaruvchi tasmali)";
    specs = [
      { label: "Balandligi", value: "75 sm" },
      { label: "Materiali", value: "Elastik yuqori sifatli poliuretan" },
      { label: "Xususiyati", value: "Zarbadan so'ng darhol o'z holatini tiklaydi" },
      { label: "Nur qaytarish", value: "3 ta yuqori yorug'lik qaytaruvchi tasmalar" }
    ];
  } else if (t.includes('dempfer') || t.includes('himoyalovchi')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Sun‘iy Notekislik & Dempferlar";
    categorySlug = "suniy-notekislik";
    newTitle = "Rezina Burchak Himoyalovchi Dempfer 80 sm (Ustun va devor burchagi himoyasi, sariq nur qaytaruvchi)";
    specs = [
      { label: "Balandligi", value: "80 sm / 100 sm" },
      { label: "Profil", value: "L-shaklidagi qalin burchak himoyasi" },
      { label: "Materiali", value: "Zarbani yutuvchi elastik rezina" },
      { label: "Ko'rinish", value: "Sariq nur qaytaruvchi chiziqlar" }
    ];
  } else if (t.includes('migalka') || t.includes('parkovka')) {
    department = "yol-harakati";
    departmentName = "Yo‘l Harakati Xavfsizligi";
    category = "Signal Ustunlari & Belgilar";
    categorySlug = "yol-belgilari";
    newTitle = "Katta Quyosh Energiyali Signal Migalka (Ogohlantiruvchi LED miltillovchi quyosh chirog'i, 360°)";
    specs = [
      { label: "Quvvat manbai", value: "Quyosh batareyasi va o'rnatilgan akkumulyator" },
      { label: "Yoritgich", value: "O'ta yorqin sariq/qizil LED diodlar, 360 daraja" },
      { label: "Ishlash vaqti", value: "To'liq zaryad bilan 72 soatgacha uzluksiz miltillash" },
      { label: "Himoya", value: "IP65 suv va changdan to'liq himoyalangan korpus" }
    ];
  }
  
  // --- CLIMATE & HEATERS ---
  else if (t.includes('quyosh') || t.includes('isitgich') && t.includes('reflektor')) {
    department = "iqlim-isitgichlar";
    departmentName = "Isitgichlar & Iqlim Texnikasi";
    category = "Infraqizil & Reflektorli Isitgichlar";
    categorySlug = "infrakrasnye-isitgichlar";
    newTitle = "Quyosh 40 sm Kuchaytirilgan Reflektorli Infraqizil Elektr Isitgich (Kvars spiralli, 1000W)";
    images = ["/uploads/heater-quyosh-40cm_1.jpg", "/uploads/heater-quyosh-40cm_1.jpg", "/uploads/heater-quyosh-40cm_1.jpg"];
    specs = [
      { label: "Kosa diametri", value: "40 sm parabolik yuqori aks ettiruvchi reflektor" },
      { label: "Quvvati", value: "1000 Vt (2 bosqichli 500W / 1000W)" },
      { label: "Qizdirish texnologiyasi", value: "Infraqizil kvars spiral (havoni quritmaydi)" },
      { label: "Xavfsizlik", value: "Ag'darilganda avtomatik o'chish datchigi va himoya to'ri" }
    ];
  } else if (t.includes('issiqlik to‘pi') || t.includes('ventilyator 2000w') || t.includes('sanoat')) {
    department = "iqlim-isitgichlar";
    departmentName = "Isitgichlar & Iqlim Texnikasi";
    category = "Sanoat Issiqlik To'plari & Teploventilyatorlar";
    categorySlug = "sanoat-issiqlik-toplari";
    newTitle = "Sanoat Issiqlik To‘pi / Portativ Ustaxona Isitgichi 2000W (Keramik TEN, metall korpus)";
    images = ["/uploads/heater-cannon-2000w_1.jpg", "/uploads/heater-cannon-2000w_1.jpg", "/uploads/heater-cannon-2000w_1.jpg"];
    specs = [
      { label: "Quvvati", value: "2000 Vt (2000W)" },
      { label: "Ishlash rejimlari", value: "Ventilyator (sovutish), 1000W, 2000W" },
      { label: "Qizdirish maydoni", value: "30-40 kv.m xonani tezkor isitish" },
      { label: "Korpus", value: "Qizib ketmaydigan mustahkam metall silindr va tutqich" }
    ];
  } else if (t.includes('keramik') || t.includes('maishiy stol isitgichi')) {
    department = "iqlim-isitgichlar";
    departmentName = "Isitgichlar & Iqlim Texnikasi";
    category = "Maishiy Stol & Keramik Isitgichlar";
    categorySlug = "maishiy-isitgichlar";
    newTitle = "Mini Keramik Stol Isitgichi 800W (PTC tez qizdiruvchi element, termostatli, jim ishlovchi)";
    images = ["/uploads/heater-ceramic-desk_1.jpg", "/uploads/heater-ceramic-desk_1.jpg", "/uploads/heater-ceramic-desk_1.jpg"];
    specs = [
      { label: "Quvvati", value: "800 Vt (PTC keramik mikro-element)" },
      { label: "Qizish tezligi", value: "3 soniyada issiq havo oqimi" },
      { label: "Shovqin darajasi", value: "40 dB dan past (o'ta past shovqin)" },
      { label: "Xavfsizlik", value: "Haddan tashqari qizishdan va ag'darilishdan himoyalangan" }
    ];
  }

  // Ensure images array has at least 3 elements
  while (images.length < 3) {
    images.push(images[0]);
  }

  return {
    ...p,
    title: newTitle,
    department: department,
    departmentName: departmentName,
    category: category,
    categorySlug: categorySlug,
    category_slug: categorySlug,
    images: images,
    specifications: specs,
    // PRESERVE PRICE 100% UNCHANGED
    price: p.price,
    oldPrice: p.oldPrice || Math.round(p.price * 1.2 / 1000) * 1000,
    old_price: p.oldPrice || Math.round(p.price * 1.2 / 1000) * 1000,
    is_hit: p.is_hit !== undefined ? p.is_hit : (idx < 12),
    is_bestseller: p.is_bestseller !== undefined ? p.is_bestseller : (idx < 16)
  };
});

// Check if the user's uploaded Angle Grinder exists in the list; if not, add it
const balgarkaExists = updatedProducts.some(p => p.id === 'prod_balgarka-edon-1050w-125mm');
if (!balgarkaExists) {
  const newBalgarka = {
    _id: "prod_balgarka-edon-1050w-125mm",
    id: "prod_balgarka-edon-1050w-125mm",
    title: "Edon ED-AG125-1050 Professional Burchakli Silliqlash Mashinasi (Balgarka 1050W, 125 mm)",
    slug: "balgarka-edon-1050w-125mm",
    sku: "NSB-EDON-1050",
    price: 145000, // 14$ sticker from user photo
    oldPrice: 175000,
    old_price: 175000,
    discountPercent: 17,
    discount_percent: 17,
    category: "Balgarkalar & Silliqlash Mashinalari",
    category_slug: "balgarkalar-ushm",
    categorySlug: "balgarkalar-ushm",
    department: "elektr-asboblar",
    departmentName: "Elektr Asbob-Uskunalar",
    subcategory: "Burchakli silliqlash mashinalari",
    brand: "Edon",
    stock: 65,
    inStock: true,
    in_stock: true,
    rating: 5,
    reviews_count: 14,
    images: [
      "/uploads/balgarka-1050w-125mm_1.jpg",
      "/uploads/balgarka-1050w-125mm_2.jpg",
      "/uploads/balgarka-1050w-125mm_3.jpg"
    ],
    is_bestseller: true,
    is_hit: true,
    is_new_arrival: true,
    is_weekly_deal: true,
    variantLabel: "Disk diametri",
    variants: [
      { name: "125 mm / 1050W", price: 145000, inStock: true }
    ],
    description: "Edon ED-AG125-1050 professional darajadagi elektr burchakli silliqlash mashinasi (balgarka). 1050 Vt quvvatli kuchaytirilgan mis o'ramli motor, 11 000 ayl/daq tezlik, 125 mm disk diametri. Ergonomik uzun dasta (long handle) va xavfsiz kalitli boshqaruv tufayli metall, profil, armatura, tosh va plitkalarni kesish hamda silliqlashda maksimal qulaylik beradi.",
    specifications: [
      { label: "Nominal quvvati", value: "1050 Vt (1050W)" },
      { label: "Aylanishlar chastotasi", value: "11 000 ayl/daq" },
      { label: "Maksimal disk diametri", value: "125 mm" },
      { label: "Shpindel rezbasi", value: "M14 standart rezba" },
      { label: "Dasta tuzilishi", value: "Ergonomik uzun orqa tutqich (Long handle)" },
      { label: "Kuchlanish va chastota", value: "220-240V ~ 50/60 Hz" },
      { label: "Og'irligi", value: "2.1 kg" },
      { label: "Komplektatsiya", value: "Balgarka, himoya kojuxi, yordamchi rezina tutqich, disk gayka kaliti, zaxira grafit cho'tkalari" }
    ],
    created_at: new Date().toISOString()
  };
  
  // Insert at position 12 (in Balgarkalar) or at top of tools
  updatedProducts.splice(5, 0, newBalgarka);
  console.log("Added user's Edon 1050W Balgarka to products catalog!");
}

// Write back to mockData.js
const updatedJson = JSON.stringify(updatedProducts, null, 2);
const newContent = content.slice(0, pStart) + 'export const defaultProducts = ' + updatedJson + ';' + content.slice(pEnd + 3);

fs.writeFileSync(mockDataPath, newContent, 'utf8');
console.log(`Successfully updated ${updatedProducts.length} products in mockData.js!`);

// Print sample products
console.log('\n--- SAMPLE UPDATED PRODUCTS ---');
updatedProducts.slice(0, 8).forEach(p => {
  console.log(`[${p.id}] "${p.title}"`);
  console.log(`   Price: ${p.price} so'm | Department: ${p.department} | Category: ${p.categorySlug}`);
  console.log(`   Images (${p.images.length}): ${p.images.join(', ')}`);
});
