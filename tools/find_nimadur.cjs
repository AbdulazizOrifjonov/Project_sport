const { createClient } = require('../frontend/node_modules/@supabase/supabase-js');
const c = createClient('https://xeaiyoiqyrwnhgtwlpga.supabase.co', 'sb_publishable_cAzTbZesi-1Khha3AH1Mcw_EniamLhY');

(async () => {
  const { data: nimadur } = await c.from('products').select('*').ilike('title', '%nimadur%');
  console.log('nimadur:', nimadur);

  const { data: trenajor } = await c.from('products').select('id, title, category, category_slug').ilike('category', '%trenajor%');
  console.log('trenajor items:', trenajor);

  const { data: recent } = await c.from('products').select('id, title, category, created_at').order('created_at', { ascending: false }).limit(5);
  console.log('Most recent products:', recent);
})();
