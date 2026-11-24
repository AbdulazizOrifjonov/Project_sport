const { createClient } = require('../frontend/node_modules/@supabase/supabase-js');
const SUPABASE_URL = 'https://xeaiyoiqyrwnhgtwlpga.supabase.co';
const SUPABASE_KEY = 'sb_publishable_cAzTbZesi-1Khha3AH1Mcw_EniamLhY';
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

(async () => {
  const { data, error } = await client.from('products').select('id, title, is_bestseller, is_new_arrival').limit(5);
  console.log('Supabase products flags:', data);
})();
