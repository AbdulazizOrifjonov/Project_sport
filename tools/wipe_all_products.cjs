const fs = require('fs');
const path = require('path');
const { createClient } = require('../frontend/node_modules/@supabase/supabase-js');

const supabase = createClient(
  'https://xeaiyoiqyrwnhgtwlpga.supabase.co',
  'sb_publishable_cAzTbZesi-1Khha3AH1Mcw_EniamLhY'
);

const MOCK_DATA_PATH = path.resolve(__dirname, '../frontend/src/services/mockData.js');

async function wipe() {
  console.log('1. Clearing mockData.js defaultProducts to empty array []...');
  let content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
  const pStart = content.indexOf('export const defaultProducts = [');
  const bStart = content.indexOf('export const defaultBanners = [');
  if (pStart === -1 || bStart === -1) {
    console.error('Cannot locate defaultProducts in mockData.js');
    return;
  }

  const updatedContent = content.slice(0, pStart + 'export const defaultProducts = '.length) +
    '[];\n\n' + content.slice(bStart);

  fs.writeFileSync(MOCK_DATA_PATH, updatedContent, 'utf8');
  console.log('mockData.js is now empty []!');

  console.log('2. Wiping all products from Supabase cloud database...');
  try {
    const { error } = await supabase.from('products').delete().neq('id', '___safe_keep___');
    if (error) {
      console.error('Supabase delete error:', error.message);
    } else {
      console.log('Successfully wiped all products from Supabase cloud!');
    }
  } catch (e) {
    console.error('Supabase exception:', e.message);
  }
}

wipe();
