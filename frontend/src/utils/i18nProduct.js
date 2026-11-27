/**
 * Client-side UZ -> RU / EN product & category translator.
 * Keeps Uzbek as the canonical default and translates product titles,
 * descriptions, and categories smoothly when the user switches to RU or EN.
 */

const PHRASE_MAP = [
  // Main 3 groups
  ['Yo‘l qurilish mahsulotlari', 'Товары для дорожного строительства', 'Road Construction & Safety'],
  ['Sportga oid mahsulotlar', 'Спортивные товары', 'Sports & Fitness'],
  ['Qurilish asbob-uskunalari', 'Строительные инструменты и оборудование', 'Construction Tools & Equipment'],

  // Group descriptions
  [
    'Yo‘l konuslari, bordyurlar, dempferlar, to‘siqlar va xavfsizlik jihozlari',
    'Дорожные конусы, бордюры, демпферы, ограждения и оборудование безопасности',
    'Traffic cones, curbs, corner guards, barriers, and road safety equipment'
  ],
  [
    'Yugurish yo‘lakchalari, stepperlar, kardio va fitnes trenajyorlari',
    'Беговые дорожки, степперы, кардио и фитнес-тренажеры',
    'Treadmills, steppers, cardio and fitness equipment'
  ],
  [
    'Drellar, shurupovyortlar, balgarkalar, isitgichlar va sanoat uskunalari',
    'Дрели, шуруповерты, болгарки, обогреватели и промышленное оборудование',
    'Drills, screwdrivers, angle grinders, heaters, and industrial equipment'
  ],

  // Common product phrases (longest first)
  ['Elektr Yugurish Yo‘lakchasi', 'Электрическая беговая дорожка', 'Electric Treadmill'],
  ['Yugurish Yo‘lakchasi', 'Беговая дорожка', 'Treadmill'],
  ['Devoriy Turnik va Brus Trenajyori 2-si 1-da', 'Настенный турник и брусья 2-в-1', 'Wall-Mounted Pull-Up & Dip Bar 2-in-1'],
  ['Reaksiyani Rivojlantiruvchi Interaktiv Sport-O‘yin Apparati', 'Интерактивный тренажер для развития реакции', 'Interactive Reaction Training Game Apparatus'],
  ['Inversion Stol — Bel va Umurtqani Cho‘zuvchi Massaj Trenajyori', 'Инверсионный стол для растяжки спины и позвоночника', 'Inversion Table — Back & Spine Stretching Massager'],
  ['Yig‘iluvchi Samokat', 'Складной самокат', 'Foldable Kick Scooter'],
  ['Makrame Osma Belanchak Kreslo', 'Подвесное кресло-качели макраме', 'Macrame Hanging Swing Chair'],
  ['Himoya To‘rli Bolalar Batuti', 'Детский батут с защитной сеткой', 'Kids Trampoline with Safety Net'],
  ['Tutqichli Bolalar va Fitnes Batuti', 'Детский и фитнес-батут с ручкой', 'Kids & Fitness Trampoline with Handlebar'],
  ['Bolalar Tebranma Belanchak-Shezlongi', 'Детский шезлонг-качалка', 'Baby Bouncer & Rocker Chair'],
  ['Portativ Isituvchi Bo‘yin va Yelka Massajyori', 'Портативный массажер с подогревом для шеи и плеч', 'Portable Heated Neck & Shoulder Massager'],
  ['Klassik Shaffof Akril Stul', 'Классический прозрачный акриловый стул', 'Classic Transparent Acrylic Chair'],
  ['6 Kishilik Shaffof Akril va Shisha Ustli Stol', 'Прозрачный акриловый стол со стеклянной столешницей на 6 персон', '6-Seater Transparent Acrylic & Glass Dining Table'],
  ['Yumshoq O‘rindiqli Shaffof Akril Stul', 'Прозрачный акриловый стул с мягкой подушкой', 'Transparent Acrylic Chair with Cushioned Seat'],
  ['Akkumulyatorli Zarbli Gaykavyort va Drel-Bita To‘plami', 'Аккумуляторный ударный гайковерт с набором бит', 'Cordless Impact Wrench & Bit Set'],
  ['Katta Zarbli Gaykavyort', 'Мощный ударный гайковерт', 'Heavy-Duty Cordless Impact Wrench'],
  ['Akkumulyatorli Zarbli Shurupovyort-Drel', 'Аккумуляторная ударная дрель-шуруповерт', 'Cordless Brushless Hammer Drill'],
  ['Akkumulyatorli Shurupovyort-Drel Nabori', 'Набор аккумуляторной дрели-шуруповерта', 'Cordless Drill & Driver Kit'],
  ['Katta Elektr Burchakli Silliqlash Mashinasi — Balgarka', 'Большая электрическая угловая шлифмашина (Болгарка)', 'Heavy-Duty Electric Angle Grinder'],
  ['Ixcham Elektr Burchakli Silliqlash Mashinasi — Balgarka', 'Компактная электрическая угловая шлифмашина (Болгарка)', 'Compact Electric Angle Grinder'],
  ['Elektr Burchakli Silliqlash Mashinasi — Balgarka', 'Электрическая угловая шлифмашина (Болгарка)', 'Electric Angle Grinder'],
  ['Sanoat Elektr Issiqlik To‘pi', 'Промышленная электрическая тепловая пушка', 'Industrial Electric Fan Heater'],
  ['Reflektorli Infraqizil Elektr Isitgich', 'Инфракрасный электрический обогреватель с отражателем', 'Reflective Infrared Electric Heater'],
  ['Kuchaytirilgan Reflektorli Infraqizil Elektr Isitgich', 'Усиленный инфракрасный электрический обогреватель', 'Heavy-Duty Infrared Electric Heater'],
  ['Katta Reflektorli Infraqizil Elektr Isitgich', 'Большой инфракрасный электрический обогреватель', 'Large Infrared Electric Heater'],
  ['Yo‘l Harakati Xavfsizlik Konusi', 'Дорожный конус безопасности', 'Traffic Safety Cone'],
  ['Sun‘iy Yo‘l Notekisligi', 'Искусственная дорожная неровность (лежачий полицейский)', 'Rubber Speed Bump'],
  ['Rezina Burchak Himoyalovchi Dempfer', 'Резиновый угловой демпфер защиты стен', 'Rubber Corner Guard Protector'],
  ['Suriluvchi Mobil Yo‘l To‘sig‘i Garmoshka', 'Раздвижное мобильное дорожное ограждение (гармошка)', 'Expandable Mobile Safety Barrier'],
  ['Rezbali Egiluvchan Yo‘l Ustuni', 'Гибкий дорожный столбик с резьбой', 'Flexible Threaded Road Bollard'],
  ['Katta Egiluvchan Yo‘l Ustuni', 'Большой гибкий дорожный столбик', 'Tall Flexible Road Bollard'],
  ['Egiluvchan Signal Yo‘l Ustuni', 'Гибкий сигнальный дорожный столбик', 'Flexible Signal Road Post'],
  ['Premium Lenta Stoyka', 'Премиум стойка с вытяжной лентой', 'Premium Retractable Belt Stanchion'],
  ['Lenta Stoyka', 'Стойка ограждения с лентой', 'Retractable Belt Stanchion'],
  ['Sanoat Yo‘l Bordyuri', 'Промышленный дорожный бордюр', 'Industrial Road Curb / Divider'],
  ['Mahalliy Yo‘l Bordyuri', 'Дорожный разделительный бордюр', 'Heavy-Duty Road Divider Curb'],
  ['Avtoturargoh G‘ildirak To‘xtatgichi', 'Парковочный колесоотбойник', 'Rubber Parking Wheel Stopper'],
  ['Yuk Mashinalari Uchun Rezina G‘ildirak To‘xtatgichi', 'Резиновый противооткатный упор (башмак) для грузовиков', 'Heavy-Duty Truck Rubber Wheel Chock'],
  ['Kabel Himoyalovchi Rezina Kord-Tramplin', 'Резиновый кабельный трап (кабель-канал)', 'Rubber Cable Protector Ramp'],
  ['Quyosh Energiyali Avtonom Yo‘l Migalkasi', 'Автономный дорожный сигнальный маячок на солнечной батарее', 'Solar-Powered Road Warning Beacon'],
  ['Katta Quyosh Energiyali Signal Migalka', 'Большой сигнальный маячок 360° на солнечной батарее', 'Large 360° Solar Warning Beacon'],
  ['Masofadan Boshqariladigan Avtomatik Parkovka To‘sig‘i', 'Автоматический парковочный барьер с пультом ДУ', 'Remote-Controlled Automatic Parking Lock'],
  ['PVX Taktil plitka', 'Тактильная плитка ПВХ', 'PVC Tactile Paving Tile'],
  ['Buriluvchi Kardio Stepper Trenajyori', 'Поворотный кардио степпер-тренажер', 'Twist Cardio Stepper Machine'],
  ['Eshkak Eshish Kardio Trenajyori', 'Гребной кардио тренажер', 'Rowing Cardio Machine'],
  ['Qorin Pressi va Bel Mushaklarini Chiniqtirish Trenajyori', 'Тренажер для пресса и мышц спины', 'Abdominal & Back Workout Machine'],
  ['Kardio Stepper Trenajyori', 'Кардио степпер-тренажер', 'Cardio Stepper Machine'],
  ['Universal Akkumulyatorli Maysa O‘radigan Trimmer', 'Универсальный аккумуляторный триммер для газона', 'Universal Cordless Grass Trimmer'],
  ['2&1 Akkumulyatorli Bog‘ va Qurilish To‘plami', 'Аккумуляторный набор 2-в-1 для сада и строительства', '2-in-1 Cordless Garden & Construction Kit'],
  ['4&1 Professional Akkumulyatorli Asboblar To‘plami', 'Профессиональный набор аккумуляторных инструментов 4-в-1', '4-in-1 Professional Cordless Tool Kit'],
  ['SLJ Elektr Toshli Stol Charxi', 'Электрический настольный точильный станок SLJ', 'SLJ Electric Bench Grinder'],
  ['Turbo Texnik Fen', 'Технический термофен Turbo', 'Turbo Heat Gun'],

  // Word-level suffixes / qualifiers
  ['Teploventilyator', 'Тепловентилятор', 'Fan Heater'],
  ['Termostatli', 'с термостатом', 'with Thermostat'],
  ['ta mahsulot', 'товаров', 'products'],
  ['mahsulot', 'товар', 'product'],
  ['Bolalar va Kattalar Uchun', 'Для детей и взрослых', 'For Kids & Adults'],
  ['Uy va Zal Uchun', 'Для дома и зала', 'For Home & Gym'],
  ['Uy va Fitnes Uchun', 'Для дома и фитнеса', 'For Home & Fitness'],
  ['Zal Uchun', 'Для зала', 'For Gym'],
  ['Uy va Ofis Uchun Ixcham', 'Компактный для дома и офиса', 'Compact for Home & Office'],
  ['Banket va Interyer Uchun', 'Для банкетов и интерьера', 'For Banquet & Interior'],
  ['Mehmonxona Uchun', 'Для гостиной', 'For Living Room'],
  ['Akkumulyator va Keysli Nabor', 'Аккумуляторы и кейс в комплекте', 'With Batteries & Carrying Case'],
  ['Akkumulyator', 'Аккумулятор', 'Battery'],
  ['Zaryadka va Keysda', 'с зарядкой и кейсом', 'with Charger & Case'],
  ['Keysli', 'в кейсе', 'with Case'],
  ['Keysda', 'в кейсе', 'in Case'],
  ['Shtativli', 'со штативом', 'with Tripod'],
  ['Massajyorli', 'с массажером', 'with Massager'],
  ['Displeyli', 'с дисплеем', 'with Display'],
  ['km/soat', 'км/ч', 'km/h'],
  ['dona', 'шт.', 'pcs'],
  ['sm', 'см', 'cm'],
  ['mm', 'мм', 'mm'],
  ['kg', 'кг', 'kg']
];

export function translateProductText(text, lang = 'uz') {
  if (!text || lang === 'uz') return text || '';
  const targetIdx = lang === 'ru' ? 1 : 2;
  let result = String(text);

  for (const row of PHRASE_MAP) {
    const uz = row[0];
    const target = row[targetIdx];
    if (result.includes(uz)) {
      result = result.split(uz).join(target);
    }
  }
  return result;
}

export function getLocalizedProduct(product, lang = 'uz') {
  if (!product || lang === 'uz') return product;
  return {
    ...product,
    title: translateProductText(product.title, lang),
    description: translateProductText(product.description, lang),
    category: translateProductText(product.category, lang)
  };
}
