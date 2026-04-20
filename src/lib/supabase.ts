import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Gracefully handle missing env vars (website still works, just form submission won't)
let supabase: SupabaseClient
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn('Supabase credentials not configured. Contact form will not work.')
  // Create a dummy that won't crash but will fail gracefully
  supabase = createClient('https://placeholder.supabase.co', 'placeholder')
}

export { supabase }

export const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.medi-lane.de'
