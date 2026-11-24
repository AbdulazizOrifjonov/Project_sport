const { createClient } = require('../frontend/node_modules/@supabase/supabase-js');
const SUPABASE_URL = 'https://xeaiyoiqyrwnhgtwlpga.supabase.co';
const SUPABASE_KEY = 'sb_publishable_cAzTbZesi-1Khha3AH1Mcw_EniamLhY';
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

(async () => {
  console.log('Setting is_bestseller: true and is_new_arrival: true for all products...');
  const { data, error } = await client
    .from('products')
    .update({ is_bestseller: true, is_new_arrival: true })
    .neq('id', 'non_existent_dummy');

  if (error) {
    console.error('Supabase update error:', error);
  } else {
    console.log('Successfully updated all products in Supabase to is_bestseller: true & is_new_arrival: true!');
  }

  const { data: check } = await client.from('products').select('id, title, is_bestseller, is_new_arrival').limit(3);
  console.log('Sample check:', check);
})();
