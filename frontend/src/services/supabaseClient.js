import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('placeholder') &&
  supabaseUrl.startsWith('https://')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true
      }
    })
  : null;

/**
 * Upload an image file to Supabase Storage 'product-images' bucket.
 * Falls back to base64 data-URL if Supabase is not configured or on network error.
 */
export async function uploadProductImage(file) {
  if (!file) return null;

  if (isSupabaseConfigured && supabase) {
    try {
      const ext = file.name.split('.').pop() || 'jpg';
      const fileName = `product_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const filePath = `uploads/${fileName}`;

      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) {
        console.warn('Supabase storage upload error, falling back to base64:', error.message);
      } else {
        const { data: publicData } = supabase.storage
          .from('product-images')
          .getPublicUrl(filePath);

        if (publicData?.publicUrl) {
          return publicData.publicUrl;
        }
      }
    } catch (err) {
      console.warn('Upload exception:', err);
    }
  }

  // Fallback: Read as base64 DataURL
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}
