const { createClient } = require('../frontend/node_modules/@supabase/supabase-js');
const c = createClient('https://xeaiyoiqyrwnhgtwlpga.supabase.co', 'sb_publishable_cAzTbZesi-1Khha3AH1Mcw_EniamLhY');

(async () => {
  const { data, error } = await c.from('products').delete().ilike('title', '%nimadur%');
  console.log('Deleted nimadur:', data, error);

  // Also check if any product has category 'Trenajorlar & Kardio'
  const { data: d2, error: e2 } = await c.from('products').delete().ilike('category', '%trenajor%');
  console.log('Deleted trenajor items:', d2, e2);

  const { count } = await c.from('products').select('*', { count: 'exact', head: true });
  console.log('Total products remaining in Supabase:', count);
})();
