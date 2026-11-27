/**
 * Shared 3-group product classification and dynamic ordering (fewest -> middle -> most).
 * 1. Yo'l qurilish mahsulotlari
 * 2. Sportga oid mahsulotlar
 * 3. Qurilish asbob-uskunalari
 */

export const MAIN_GROUPS = [
  {
    id: 'yol',
    label: 'Yo‘l qurilish mahsulotlari',
    shortLabel: 'Yo‘l qurilish',
    description: 'Yo‘l konuslari, bordyurlar, dempferlar, to‘siqlar va xavfsizlik jihozlari',
    categorySlugs: [
      'yol-xavfsizligi',
      'yol-konuslari',
      'suniy-notekislik',
      'yol-belgilari',
      'stoykalar'
    ],
    defaultCategory: { name: 'Yo‘l Xavfsizligi & Jihozlar', slug: 'yol-xavfsizligi' }
  },
  {
    id: 'sport',
    label: 'Sportga oid mahsulotlar',
    shortLabel: 'Sportga oid',
    description: 'Yugurish yo‘lakchalari, stepperlar, kardio va fitnes trenajyorlari',
    categorySlugs: ['trenajorlar', 'sport-jihozlari'],
    defaultCategory: { name: 'Trenajyorlar & Kardio', slug: 'trenajorlar' }
  },
  {
    id: 'qurilish',
    label: 'Qurilish asbob-uskunalari',
    shortLabel: 'Qurilish asboblari',
    description: 'Drellar, shurupovyortlar, balgarkalar, isitgichlar va sanoat uskunalari',
    categorySlugs: [
      'drellar-shurupovyortlar',
      'drellar-shurupovyort',
      'asboblar-to-plami',
      'arralar-elektr-uskunalar',
      'balgarka-shlifovka',
      'isitgichlar-iqlim',
      'lazer-qol-asboblari'
    ],
    defaultCategory: { name: 'Drellar & Shurupovyortlar', slug: 'drellar-shurupovyortlar' }
  }
];

const SPORT_KEYWORDS = [
  'trenajyor',
  'stepper',
  'begovoy',
  'begavoy',
  'yugurish',
  'grebnoy',
  'eshkak',
  'qorin press',
  'fitnes',
  'sport',
  'kechite',
  'siapo',
  'kardio'
];

const QURILISH_KEYWORDS = [
  'shurupovyort',
  'drel',
  'balgarka',
  'perforator',
  'arra',
  'isitgich',
  'teploventilyator',
  'issiqlik to‘pi',
  'issiqlik to\'pi',
  'infraqizil',
  'kvars',
  'kvt',
  'fen',
  'lazer',
  'nabor',
  'trimmer'
];

const YOL_KEYWORDS = [
  'yo‘l',
  'yo\'l',
  'konus',
  'bordyur',
  'bardur',
  'dempfer',
  'stolbik',
  'stoyka',
  'to‘siq',
  'to\'siq',
  'migalka',
  'parkovka',
  'taktil',
  'notekislik',
  'kolesootboynik',
  'otkatnik',
  'tramplin',
  'garmoshka'
];

/**
 * Determine which of the 3 main groups ('yol' | 'sport' | 'qurilish') a product belongs to.
 */
export function getProductMainGroup(product) {
  if (!product) return 'yol';

  const title = (product.title || '').toLowerCase();
  const catName = (product.category || '').toLowerCase();
  const slug = (product.categorySlug || product.category_slug || '').toLowerCase();

  // Check explicit sport keywords in title first (handles legacy mis-categorized treadmills)
  if (SPORT_KEYWORDS.some((kw) => title.includes(kw))) {
    return 'sport';
  }

  // Check category slug membership
  for (const group of MAIN_GROUPS) {
    if (group.categorySlugs.includes(slug)) {
      return group.id;
    }
  }

  // Check title & category keywords
  const combined = `${title} ${catName}`;
  if (QURILISH_KEYWORDS.some((kw) => combined.includes(kw))) return 'qurilish';
  if (SPORT_KEYWORDS.some((kw) => combined.includes(kw))) return 'sport';
  if (YOL_KEYWORDS.some((kw) => combined.includes(kw))) return 'yol';

  return 'yol';
}

/**
 * Determine which main group ('yol' | 'sport' | 'qurilish') a category object belongs to.
 */
export function getCategoryMainGroup(category) {
  if (!category) return 'yol';
  const slug = (category.slug || '').toLowerCase();
  const name = (category.name || '').toLowerCase();

  for (const group of MAIN_GROUPS) {
    if (group.categorySlugs.includes(slug)) return group.id;
  }

  if (SPORT_KEYWORDS.some((kw) => name.includes(kw))) return 'sport';
  if (QURILISH_KEYWORDS.some((kw) => name.includes(kw))) return 'qurilish';
  return 'yol';
}

/**
 * Group products into the 3 main groups and sort groups ascending by product count
 * (fewest -> middle -> most).
 */
export function getGroupedProductsSortedByCount(products = []) {
  const buckets = {
    yol: [],
    sport: [],
    qurilish: []
  };

  for (const p of products) {
    const groupId = getProductMainGroup(p);
    buckets[groupId].push(p);
  }

  const groups = MAIN_GROUPS.map((g) => ({
    ...g,
    items: buckets[g.id] || []
  }))
    .filter((g) => g.items.length > 0)
    .sort((a, b) => a.items.length - b.items.length);

  const orderedProducts = groups.flatMap((g) => g.items);

  return { groups, orderedProducts };
}
