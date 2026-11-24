import { supabase, isSupabaseConfigured } from './supabaseClient';
import {
  defaultCategories,
  defaultProducts,
  defaultBanners,
  defaultCoupons,
  defaultReviews,
  defaultOrders,
  getLocalCollection,
  saveLocalCollection
} from './mockData';

// Local storage collection keys (v10 Multi-Department Store with Real Road Safety & Tool Prices)
const KEYS = {
  CATEGORIES: 'nsb_categories_v8_multidept',
  PRODUCTS: 'nsb_products_v10_real',
  BANNERS: 'nsb_banners_v4_sport',
  COUPONS: 'nsb_coupons_v4_sport',
  REVIEWS: 'nsb_reviews_v4_sport',
  ORDERS: 'nsb_orders_v4_sport'
};

// Normalize database product (snake_case from Supabase -> camelCase + snake_case for frontend)
function normalizeProduct(p) {
  if (!p) return null;
  const id = p.id || p._id;
  const oldPrice = p.oldPrice !== undefined ? Number(p.oldPrice) : Number(p.old_price || 0);
  const discountPercent = p.discountPercent !== undefined ? Number(p.discountPercent) : Number(p.discount_percent || 0);
  const categorySlug = p.categorySlug || p.category_slug || '';
  const isBestseller = p.isBestseller !== undefined ? Boolean(p.isBestseller) : Boolean(p.is_bestseller);
  const isNewArrival = p.isNewArrival !== undefined ? Boolean(p.isNewArrival) : Boolean(p.is_new_arrival);
  const isWeeklyDeal = p.isWeeklyDeal !== undefined ? Boolean(p.isWeeklyDeal) : Boolean(p.is_weekly_deal);
  const inStock = p.inStock !== undefined ? Boolean(p.inStock) : (p.in_stock !== undefined ? Boolean(p.in_stock) : (Number(p.stock) > 0));
  const reviewsCount = p.reviewsCount !== undefined ? Number(p.reviewsCount) : Number(p.reviews_count || 0);
  
  let images = p.images;
  if (typeof images === 'string') {
    try { images = JSON.parse(images); } catch (_) { images = [images]; }
  }
  if (!Array.isArray(images)) images = [];
  // Exclude rogue non-product stick images (e.g. 6213 from tatami)
  images = images.filter((img) => img && !img.includes('6213'));

  let specifications = p.specifications;
  if (typeof specifications === 'string') {
    try { specifications = JSON.parse(specifications); } catch (_) { specifications = []; }
  }
  if (!Array.isArray(specifications)) specifications = [];

  return {
    ...p,
    _id: id,
    id: id,
    price: Number(p.price || 0),
    oldPrice,
    old_price: oldPrice,
    discountPercent,
    discount_percent: discountPercent,
    categorySlug,
    category_slug: categorySlug,
    isBestseller,
    is_bestseller: isBestseller,
    isNewArrival,
    is_new_arrival: isNewArrival,
    isWeeklyDeal,
    is_weekly_deal: isWeeklyDeal,
    stock: Number(p.stock !== undefined ? p.stock : 10),
    inStock,
    in_stock: inStock,
    rating: Number(p.rating || 5.0),
    reviewsCount,
    reviews_count: reviewsCount,
    images,
    specifications,
    createdAt: p.createdAt || p.created_at || new Date().toISOString()
  };
}

// Normalize order
function normalizeOrder(o) {
  if (!o) return null;
  const id = o.id || o._id;
  const orderNumber = o.orderNumber || o.order_number || `NSB-${id}`;
  const totalAmount = Number(o.totalAmount || o.total_amount || 0);
  const deliveryFee = Number(o.deliveryFee || o.delivery_fee || 0);
  const paymentMethod = o.paymentMethod || o.payment_method || 'cash';
  const paymentStatus = o.paymentStatus || o.payment_status || 'pending';
  const orderStatus = o.orderStatus || o.order_status || 'new';
  const deliveryType = o.deliveryType || o.delivery_type || 'standard';

  let items = o.items;
  if (typeof items === 'string') {
    try { items = JSON.parse(items); } catch (_) { items = []; }
  }
  if (!Array.isArray(items)) items = [];

  const customerDetails = o.customerDetails || {
    fullName: o.customer_name || 'Noma‘lum mijoz',
    phone: o.customer_phone || '+998 90 000 00 00',
    city: o.city || 'Buxoro',
    address: o.address || '',
    notes: o.notes || '',
    coordinates: o.coordinates || {},
    locationUrl: o.location_url || ''
  };

  return {
    ...o,
    _id: id,
    id: id,
    orderNumber,
    order_number: orderNumber,
    customerDetails,
    customer_name: customerDetails.fullName,
    customer_phone: customerDetails.phone,
    city: customerDetails.city,
    address: customerDetails.address,
    notes: customerDetails.notes,
    items,
    totalAmount,
    total_amount: totalAmount,
    deliveryFee,
    delivery_fee: deliveryFee,
    paymentMethod,
    payment_method: paymentMethod,
    paymentStatus,
    payment_status: paymentStatus,
    orderStatus,
    order_status: orderStatus,
    deliveryType,
    delivery_type: deliveryType,
    createdAt: o.createdAt || o.created_at || new Date().toISOString()
  };
}

// Normalize review
function normalizeReview(r) {
  if (!r) return null;
  const id = r.id || r._id;
  return {
    ...r,
    _id: id,
    id: id,
    productId: r.productId || r.product_id || null,
    product_id: r.productId || r.product_id || null,
    productTitle: r.productTitle || r.product_title || '',
    userName: r.userName || r.user_name || 'Mijoz',
    user_name: r.userName || r.user_name || 'Mijoz',
    userEmail: r.userEmail || r.user_email || '',
    rating: Number(r.rating || 5),
    comment: r.comment || '',
    status: r.status || 'approved',
    verifiedPurchase: r.verifiedPurchase !== undefined ? r.verifiedPurchase : Boolean(r.verified_purchase),
    createdAt: r.createdAt || r.created_at || new Date().toISOString()
  };
}

// Normalize category
function normalizeCategory(c) {
  if (!c) return null;
  const id = c.id || c._id;
  return {
    ...c,
    _id: id,
    id: id,
    name: c.name,
    slug: c.slug,
    icon: c.icon || 'Folder',
    description: c.description || '',
    image: c.image || '',
    order: c.order !== undefined ? Number(c.order) : Number(c.display_order || 0),
    active: c.active !== undefined ? Boolean(c.active) : true
  };
}

// Normalize banner
function normalizeBanner(b) {
  if (!b) return null;
  const id = b.id || b._id;
  return {
    ...b,
    _id: id,
    id: id,
    title: b.title,
    subtitle: b.subtitle || '',
    badge: b.badge || '',
    image: b.image || '',
    link: b.link || '/shop',
    type: b.type || 'hero',
    order: b.order !== undefined ? Number(b.order) : Number(b.display_order || 0),
    active: b.active !== undefined ? Boolean(b.active) : true
  };
}

/* ==============================================================================
   DATA ACCESS LAYER (SUPABASE + LOCAL STORAGE FALLBACK)
============================================================================== */

export const dataService = {
  // ---------------- CATEGORIES ----------------
  async getCategories() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('display_order', { ascending: true });
        if (!error && data && data.length) {
          return data.map(normalizeCategory);
        }
      } catch (e) {
        console.warn('Supabase getCategories error, falling back to local:', e);
      }
    }
    const local = getLocalCollection(KEYS.CATEGORIES, defaultCategories);
    return local.map(normalizeCategory);
  },

  async createCategory(catData) {
    const slug = catData.slug || catData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newCat = {
      id: `cat_${slug}_${Date.now().toString().slice(-4)}`,
      name: catData.name,
      slug,
      icon: catData.icon || 'Folder',
      description: catData.description || '',
      image: catData.image || '',
      display_order: Number(catData.order || 99),
      active: true
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('categories').insert(newCat).select().single();
        if (!error && data) return normalizeCategory(data);
      } catch (e) {
        console.warn('Supabase createCategory error:', e);
      }
    }

    const local = getLocalCollection(KEYS.CATEGORIES, defaultCategories);
    const normalized = normalizeCategory(newCat);
    local.push(normalized);
    saveLocalCollection(KEYS.CATEGORIES, local);
    return normalized;
  },

  async deleteCategory(id) {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('categories').delete().or(`id.eq.${id},slug.eq.${id}`);
      } catch (e) {
        console.warn('Supabase deleteCategory error:', e);
      }
    }
    let local = getLocalCollection(KEYS.CATEGORIES, defaultCategories);
    local = local.filter(c => c.id !== id && c._id !== id && c.slug !== id);
    saveLocalCollection(KEYS.CATEGORIES, local);
    return true;
  },

  // ---------------- PRODUCTS ----------------
  async getAllProducts(params = {}) {
    let all = [];
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from('products').select('*').order('created_at', { ascending: false });
        if (params.categorySlug) {
          query = query.eq('category_slug', params.categorySlug);
        }
        if (params.tag === 'bestseller') {
          query = query.eq('is_bestseller', true);
        } else if (params.tag === 'new') {
          query = query.eq('is_new_arrival', true);
        } else if (params.tag === 'sale') {
          query = query.gt('discount_percent', 0);
        }
        const { data, error } = await query;
        if (!error && data && data.length) {
          all = data.map(normalizeProduct);
        }
      } catch (e) {
        console.warn('Supabase getAllProducts error, falling back:', e);
      }
    }

    if (!all.length) {
      const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
      all = local.map(normalizeProduct);
    }

    // Har doim yangi mahsulotlar oldinda turishi uchun saralash
    all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Client-side filtering & sorting for full search / price range support
    let filtered = [...all];

    if (params.search) {
      const normalize = (str) => (str || '').toLowerCase().replace(/[`'‘’ʻʼ]/g, '').trim();
      const rawQ = normalize(params.search);
      const words = rawQ.split(/\s+/).filter(Boolean);

      filtered = filtered.filter(p => {
        const variantText = (p.variants || []).map(v => `${v.name || ''} ${v.fullName || ''} ${(v.colors || []).join(' ')}`).join(' ');
        const searchableText = normalize(`
          ${p.title || ''} 
          ${p.description || ''} 
          ${p.category || ''} 
          ${p.categorySlug || ''} 
          ${p.brand || ''} 
          ${p.sku || ''} 
          ${variantText}
        `);
        return words.every(w => searchableText.includes(w));
      });
    }

    if (params.categorySlug && (!isSupabaseConfigured || !supabase)) {
      filtered = filtered.filter(p => p.categorySlug === params.categorySlug || p.category?.toLowerCase() === params.categorySlug.toLowerCase());
    } else if (params.category) {
      const cat = params.category.toLowerCase();
      filtered = filtered.filter(p => p.category?.toLowerCase().includes(cat) || p.categorySlug?.toLowerCase().includes(cat));
    }

    if (params.tag === 'sale') {
      filtered = filtered.filter(p => (p.discountPercent || 0) > 0);
    } else if (params.tag === 'bestseller') {
      filtered = filtered.filter(p => p.isBestseller);
    } else if (params.tag === 'new') {
      filtered = filtered.filter(p => p.isNewArrival);
    }

    if (params.brand) {
      filtered = filtered.filter(p => p.brand?.toLowerCase() === params.brand.toLowerCase());
    }

    if (params.minPrice) {
      filtered = filtered.filter(p => p.price >= Number(params.minPrice));
    }
    if (params.maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(params.maxPrice));
    }

    if (params.inStock === 'true' || params.inStock === true) {
      filtered = filtered.filter(p => p.inStock);
    }

    // Sort
    if (params.sort === 'price_asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (params.sort === 'price_desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (params.sort === 'popularity') {
      filtered.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
    } else {
      // Default: newest
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    const total = filtered.length;
    const page = Number(params.page || 1);
    const limit = Number(params.limit || 100);
    const skip = (page - 1) * limit;
    const products = filtered.slice(skip, skip + limit);

    return {
      total,
      page,
      pages: Math.ceil(total / limit) || 1,
      products
    };
  },

  async getFeaturedProducts() {
    let all = [];
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length) {
          all = data.map(normalizeProduct);
        }
      } catch (e) {
        console.warn('Supabase getFeatured error:', e);
      }
    }
    if (!all.length) {
      const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
      all = local.map(normalizeProduct);
    }

    // Har doim eng yangi qo'shilgan mahsulotlar birinchi turishi uchun saralash
    all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const bestsellers = all.filter(p => p.isBestseller);
    const newArrivals = all.filter(p => p.isNewArrival);
    const weeklyDeals = all.filter(p => p.isWeeklyDeal || (p.discountPercent || 0) > 0);

    return {
      bestsellers: bestsellers.length ? bestsellers.slice(0, 10) : all.slice(0, 10),
      newArrivals: newArrivals.length ? newArrivals.slice(0, 10) : all.slice(0, 10),
      weeklyDeals: weeklyDeals.length ? weeklyDeals.slice(0, 10) : all.slice(0, 10),
      allProducts: all
    };
  },

  async getProductBySlug(slug) {
    const raw = String(slug || '').toLowerCase().trim();
    let decoded = raw;
    try {
      decoded = decodeURIComponent(raw).toLowerCase().trim();
    } catch (_) {}

    // 1. Direct Supabase query (blazing fast single item fetch)
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .or(`slug.eq.${raw},slug.eq.${decoded},id.eq.${raw},id.eq.${decoded}`)
          .maybeSingle();

        if (!error && data) {
          const product = normalizeProduct(data);
          const { data: relData } = await supabase
            .from('products')
            .select('*')
            .eq('category_slug', product.categorySlug)
            .neq('id', product.id)
            .limit(5);
          const related = (relData || []).map(normalizeProduct);
          return { product, related };
        }
      } catch (e) {
        console.warn('Supabase getProductBySlug direct query error:', e);
      }
    }

    // 2. Fallback: fetch all and match
    let all = [];
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (!error && data && data.length) {
          all = data.map(normalizeProduct);
        }
      } catch (e) {
        console.warn('Supabase getProductBySlug error:', e);
      }
    }
    if (!all.length) {
      const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
      all = local.map(normalizeProduct);
    }

    let product = all.find(p => {
      const pSlug = String(p.slug || '').toLowerCase().trim();
      const pId = String(p.id || p._id || '').toLowerCase().trim();
      return pSlug === raw || pSlug === decoded || pId === raw || pId === decoded;
    });

    // If not found in Supabase list, check local collection
    if (!product) {
      const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
      const localNormalized = local.map(normalizeProduct);
      product = localNormalized.find(p => {
        const pSlug = String(p.slug || '').toLowerCase().trim();
        const pId = String(p.id || p._id || '').toLowerCase().trim();
        return pSlug === raw || pSlug === decoded || pId === raw || pId === decoded;
      });
      if (product) {
        all = [...all, ...localNormalized];
      }
    }

    // Fuzzy title slug match fallback
    if (!product) {
      const slugify = (str) => String(str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
      const combined = [...all, ...local.map(normalizeProduct)];
      product = combined.find(p => {
        const titleSlug = slugify(p.title);
        return titleSlug === raw || titleSlug === decoded || titleSlug.includes(raw) || raw.includes(titleSlug);
      });
      if (product) {
        all = combined;
      }
    }

    if (!product) return null;

    const related = all
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 5);

    return { product, related };
  },

  async createProduct(productData) {
    const title = productData.title || 'Nomsiz Mahsulot';
    const slug = productData.slug || (title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString().slice(-4));
    const price = Number(productData.price || 0);
    const oldPrice = Number(productData.oldPrice || productData.old_price || 0);
    const discountPercent = oldPrice > price ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
    const stock = Number(productData.stock || 10);
    const inStock = stock > 0;
    const id = `prod_${slug}`;

    const newProd = {
      id,
      title,
      slug,
      sku: productData.sku || `SKU-${Date.now().toString().slice(-5)}`,
      description: productData.description || '',
      price,
      old_price: oldPrice,
      discount_percent: discountPercent,
      category: productData.category || 'Trenajorlar & Kardio',
      category_slug: productData.categorySlug || productData.category_slug || 'trenajorlar',
      subcategory: productData.subcategory || '',
      brand: productData.brand || 'WYUE',
      stock,
      in_stock: inStock,
      rating: 5.0,
      reviews_count: 0,
      images: Array.isArray(productData.images) && productData.images.length ? productData.images : ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80'],
      is_bestseller: Boolean(productData.isBestseller || productData.is_bestseller),
      is_new_arrival: Boolean(productData.isNewArrival || productData.is_new_arrival),
      is_weekly_deal: Boolean(productData.isWeeklyDeal || productData.is_weekly_deal),
      specifications: Array.isArray(productData.specifications) ? productData.specifications : []
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('products').insert(newProd).select().single();
        if (!error && data) {
          const normalized = normalizeProduct(data);
          const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
          local.unshift(normalized);
          saveLocalCollection(KEYS.PRODUCTS, local);
          return normalized;
        }
        if (error) {
          console.error('Supabase createProduct DB error:', error);
        }
      } catch (e) {
        console.warn('Supabase createProduct error:', e);
      }
    }

    const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
    const normalized = normalizeProduct(newProd);
    local.unshift(normalized);
    saveLocalCollection(KEYS.PRODUCTS, local);
    return normalized;
  },

  async updateProduct(id, updates) {
    const dbUpdates = {};
    if (updates.title !== undefined) dbUpdates.title = updates.title;
    if (updates.price !== undefined) dbUpdates.price = Number(updates.price);
    if (updates.oldPrice !== undefined) dbUpdates.old_price = Number(updates.oldPrice);
    if (updates.old_price !== undefined) dbUpdates.old_price = Number(updates.old_price);
    if (updates.stock !== undefined) {
      dbUpdates.stock = Number(updates.stock);
      dbUpdates.in_stock = Number(updates.stock) > 0;
    }
    if (updates.category !== undefined) dbUpdates.category = updates.category;
    if (updates.categorySlug !== undefined) dbUpdates.category_slug = updates.categorySlug;
    if (updates.category_slug !== undefined) dbUpdates.category_slug = updates.category_slug;
    if (updates.brand !== undefined) dbUpdates.brand = updates.brand;
    if (updates.description !== undefined) dbUpdates.description = updates.description;
    if (updates.images !== undefined) dbUpdates.images = updates.images;
    if (updates.specifications !== undefined) dbUpdates.specifications = updates.specifications;
    if (updates.isBestseller !== undefined) dbUpdates.is_bestseller = Boolean(updates.isBestseller);
    if (updates.isNewArrival !== undefined) dbUpdates.is_new_arrival = Boolean(updates.isNewArrival);
    if (updates.isWeeklyDeal !== undefined) dbUpdates.is_weekly_deal = Boolean(updates.isWeeklyDeal);

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('products')
          .update(dbUpdates)
          .or(`id.eq.${id},slug.eq.${id}`)
          .select()
          .single();
        if (!error && data) return normalizeProduct(data);
      } catch (e) {
        console.warn('Supabase updateProduct error:', e);
      }
    }

    const local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
    const idx = local.findIndex(p => p.id === id || p._id === id || p.slug === id);
    if (idx !== -1) {
      local[idx] = normalizeProduct({ ...local[idx], ...updates, ...dbUpdates });
      saveLocalCollection(KEYS.PRODUCTS, local);
      return local[idx];
    }
    return null;
  },

  async deleteProduct(id) {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('products').delete().or(`id.eq.${id},slug.eq.${id}`);
      } catch (e) {
        console.warn('Supabase deleteProduct error:', e);
      }
    }
    let local = getLocalCollection(KEYS.PRODUCTS, defaultProducts);
    local = local.filter(p => p.id !== id && p._id !== id && p.slug !== id);
    saveLocalCollection(KEYS.PRODUCTS, local);
    return true;
  },

  // ---------------- ORDERS ----------------
  async getAllOrders(status = 'all') {
    let all = [];
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from('orders').select('*').order('created_at', { ascending: false });
        if (status && status !== 'all') {
          query = query.eq('order_status', status);
        }
        const { data, error } = await query;
        if (!error && data && data.length) {
          all = data.map(normalizeOrder);
        }
      } catch (e) {
        console.warn('Supabase getAllOrders error:', e);
      }
    }

    if (!all.length) {
      const local = getLocalCollection(KEYS.ORDERS, defaultOrders);
      all = local.map(normalizeOrder);
    }

    if (status && status !== 'all') {
      all = all.filter(o => o.orderStatus === status || o.order_status === status);
    }

    return all;
  },

  async createOrder(payload) {
    const orderNumber = 'NSB-' + Date.now().toString().slice(-6) + '-' + Math.floor(10 + Math.random() * 90);
    const id = `ord_${Date.now()}`;
    const cust = payload.customerDetails || {};

    const newOrder = {
      id,
      order_number: orderNumber,
      customer_name: cust.fullName || payload.customer_name || 'Mijoz',
      customer_phone: cust.phone || payload.customer_phone || '+998 90 000 00 00',
      city: cust.city || 'Buxoro',
      address: cust.address || '',
      notes: cust.notes || '',
      coordinates: cust.coordinates || {},
      location_url: cust.locationUrl || cust.location_url || '',
      items: payload.items || [],
      total_amount: Number(payload.totalAmount || payload.total_amount || 0),
      delivery_fee: Number(payload.deliveryFee || payload.delivery_fee || 0),
      payment_method: payload.paymentMethod || payload.payment_method || 'cash',
      payment_status: 'pending',
      order_status: 'new',
      delivery_type: payload.deliveryType || payload.delivery_type || 'standard'
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('orders').insert(newOrder).select().single();
        if (!error && data) return normalizeOrder(data);
      } catch (e) {
        console.warn('Supabase createOrder error, saving locally:', e);
      }
    }

    const local = getLocalCollection(KEYS.ORDERS, defaultOrders);
    const normalized = normalizeOrder(newOrder);
    local.unshift(normalized);
    saveLocalCollection(KEYS.ORDERS, local);
    return normalized;
  },

  async updateOrderStatus(orderId, newStatus) {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('orders')
          .update({ order_status: newStatus })
          .or(`id.eq.${orderId},order_number.eq.${orderId}`)
          .select()
          .single();
        if (!error && data) return normalizeOrder(data);
      } catch (e) {
        console.warn('Supabase updateOrderStatus error:', e);
      }
    }

    const local = getLocalCollection(KEYS.ORDERS, defaultOrders);
    const idx = local.findIndex(o => o.id === orderId || o._id === orderId || o.orderNumber === orderId);
    if (idx !== -1) {
      local[idx].orderStatus = newStatus;
      local[idx].order_status = newStatus;
      saveLocalCollection(KEYS.ORDERS, local);
      return local[idx];
    }
    return null;
  },

  // ---------------- DASHBOARD STATS ----------------
  async getDashboardStats() {
    const orders = await this.getAllOrders();
    const { products } = await this.getAllProducts({ limit: 1000 });
    const categories = await this.getCategories();

    const activeOrders = orders.filter(o => o.orderStatus !== 'cancelled');
    const totalRevenue = activeOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    const totalOrders = orders.length;
    const totalProducts = products.length;

    // Unique customers count
    const uniquePhones = new Set(orders.map(o => o.customerDetails?.phone || o.customer_phone).filter(Boolean));
    const totalCustomers = uniquePhones.size || 5;

    const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;
    const lowStockProducts = products.filter(p => (p.stock || 0) <= 6).slice(0, 6);
    const topProducts = products.filter(p => p.isBestseller).slice(0, 6);

    const b2bOrders = orders.filter(o => o.paymentMethod === 'bank_transfer' && o.orderStatus !== 'cancelled');
    const b2bRevenue = b2bOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

    const days = ['Dush', 'Sesh', 'Chor', 'Pay', 'Juma', 'Shan', 'Yak'];
    const dailySales = days.map((day, idx) => ({
      day,
      revenue: Math.round((totalRevenue / 7) * (0.8 + (idx % 3) * 0.2)),
      orders: Math.max(1, Math.round((totalOrders / 7) * (0.9 + (idx % 2) * 0.3)))
    }));

    // Status counts
    const statusMap = { new: 0, processing: 0, shipped: 0, delivered: 0, cancelled: 0 };
    orders.forEach(o => {
      const st = o.orderStatus || 'new';
      statusMap[st] = (statusMap[st] || 0) + 1;
    });
    const statusCounts = Object.keys(statusMap).map(k => ({ _id: k, count: statusMap[k] }));

    // Payment counts
    const payMap = {};
    orders.forEach(o => {
      const pm = o.paymentMethod || 'cash';
      if (!payMap[pm]) payMap[pm] = { count: 0, total: 0 };
      payMap[pm].count += 1;
      payMap[pm].total += (o.totalAmount || 0);
    });
    const paymentCounts = Object.keys(payMap).map(k => ({ _id: k, count: payMap[k].count, total: payMap[k].total }));

    // Category counts
    const catMap = {};
    products.forEach(p => {
      const c = p.category || 'Trenajorlar & Kardio';
      catMap[c] = (catMap[c] || 0) + 1;
    });
    const categoryCounts = Object.keys(catMap).map(k => ({ _id: k, count: catMap[k] }));

    return {
      totalOrders,
      totalProducts,
      totalCustomers,
      totalRevenue,
      averageOrderValue: avgOrderValue,
      avgOrderValue,
      b2bRevenue,
      recentOrders: orders.slice(0, 8),
      topProducts,
      lowStockProducts,
      dailySales,
      statusCounts,
      paymentCounts,
      categoryCounts
    };
  },

  async getCustomers() {
    const orders = await this.getAllOrders();
    const map = new Map();
    orders.forEach(o => {
      const phone = o.customerDetails?.phone || o.customer_phone;
      if (!phone) return;
      if (!map.has(phone)) {
        map.set(phone, {
          _id: `cust_${phone.replace(/\D/g, '')}`,
          name: o.customerDetails?.fullName || o.customer_name || 'Mijoz',
          phone,
          city: o.customerDetails?.city || o.city || 'Buxoro',
          ordersCount: 1,
          totalSpent: o.totalAmount || 0,
          lastOrderDate: o.createdAt
        });
      } else {
        const item = map.get(phone);
        item.ordersCount += 1;
        item.totalSpent += (o.totalAmount || 0);
      }
    });
    return Array.from(map.values());
  },

  // ---------------- BANNERS ----------------
  async getBanners() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('banners').select('*').eq('active', true).order('display_order', { ascending: true });
        if (!error && data && data.length) return data.map(normalizeBanner);
      } catch (e) {
        console.warn('Supabase getBanners error:', e);
      }
    }
    const local = getLocalCollection(KEYS.BANNERS, defaultBanners);
    return local.map(normalizeBanner);
  },

  async createBanner(bannerData) {
    const newBanner = {
      id: `banner_${Date.now()}`,
      title: bannerData.title,
      subtitle: bannerData.subtitle || '',
      badge: bannerData.badge || '',
      image: bannerData.image || '',
      link: bannerData.link || '/shop',
      type: bannerData.type || 'hero',
      display_order: Number(bannerData.order || 1),
      active: true
    };
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('banners').insert(newBanner).select().single();
        if (!error && data) return normalizeBanner(data);
      } catch (e) {
        console.warn('Supabase createBanner error:', e);
      }
    }
    const local = getLocalCollection(KEYS.BANNERS, defaultBanners);
    const normalized = normalizeBanner(newBanner);
    local.push(normalized);
    saveLocalCollection(KEYS.BANNERS, local);
    return normalized;
  },

  async deleteBanner(id) {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('banners').delete().eq('id', id);
      } catch (e) {
        console.warn('Supabase deleteBanner error:', e);
      }
    }
    let local = getLocalCollection(KEYS.BANNERS, defaultBanners);
    local = local.filter(b => b.id !== id && b._id !== id);
    saveLocalCollection(KEYS.BANNERS, local);
    return true;
  },

  // ---------------- COUPONS ----------------
  async getCoupons() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('coupons').select('*').eq('active', true);
        if (!error && data && data.length) return data;
      } catch (e) {
        console.warn('Supabase getCoupons error:', e);
      }
    }
    return getLocalCollection(KEYS.COUPONS, defaultCoupons);
  },

  async createCoupon(couponData) {
    const newCoupon = {
      id: `coupon_${Date.now()}`,
      code: couponData.code.toUpperCase(),
      discount_percent: Number(couponData.discountPercent || couponData.discount_percent || 10),
      discountPercent: Number(couponData.discountPercent || couponData.discount_percent || 10),
      expiry_date: couponData.expiryDate || '2026-12-31T23:59:59.000Z',
      active: true
    };
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('coupons').insert(newCoupon).select().single();
        if (!error && data) return data;
      } catch (e) {
        console.warn('Supabase createCoupon error:', e);
      }
    }
    const local = getLocalCollection(KEYS.COUPONS, defaultCoupons);
    local.push(newCoupon);
    saveLocalCollection(KEYS.COUPONS, local);
    return newCoupon;
  },

  async deleteCoupon(id) {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('coupons').delete().eq('id', id);
      } catch (e) {
        console.warn('Supabase deleteCoupon error:', e);
      }
    }
    let local = getLocalCollection(KEYS.COUPONS, defaultCoupons);
    local = local.filter(c => c.id !== id && c._id !== id && c.code !== id);
    saveLocalCollection(KEYS.COUPONS, local);
    return true;
  },

  // ---------------- REVIEWS ----------------
  async getReviews(productId = null) {
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from('reviews').select('*').eq('status', 'approved').order('created_at', { ascending: false });
        if (productId) {
          query = query.eq('product_id', productId);
        }
        const { data, error } = await query;
        if (!error && data && data.length) return data.map(normalizeReview);
      } catch (e) {
        console.warn('Supabase getReviews error:', e);
      }
    }
    const local = getLocalCollection(KEYS.REVIEWS, defaultReviews);
    let filtered = local.map(normalizeReview);
    if (productId) {
      filtered = filtered.filter(r => r.productId === productId || r.product_id === productId);
    }
    return filtered;
  },

  async createReview(reviewData) {
    const newRev = {
      id: `rev_${Date.now()}`,
      product_id: reviewData.productId || reviewData.product_id || null,
      product_title: reviewData.productTitle || reviewData.product_title || '',
      user_name: reviewData.userName || reviewData.user_name || 'Mijoz',
      user_email: reviewData.userEmail || reviewData.user_email || '',
      rating: Number(reviewData.rating || 5),
      comment: reviewData.comment || '',
      verified_purchase: true,
      status: 'approved'
    };
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from('reviews').insert(newRev).select().single();
        if (!error && data) return normalizeReview(data);
      } catch (e) {
        console.warn('Supabase createReview error:', e);
      }
    }
    const local = getLocalCollection(KEYS.REVIEWS, defaultReviews);
    const normalized = normalizeReview(newRev);
    local.unshift(normalized);
    saveLocalCollection(KEYS.REVIEWS, local);
    return normalized;
  },

  async deleteReview(id) {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('reviews').delete().eq('id', id);
      } catch (e) {
        console.warn('Supabase deleteReview error:', e);
      }
    }
    let local = getLocalCollection(KEYS.REVIEWS, defaultReviews);
    local = local.filter(r => r.id !== id && r._id !== id);
    saveLocalCollection(KEYS.REVIEWS, local);
    return true;
  }
};
