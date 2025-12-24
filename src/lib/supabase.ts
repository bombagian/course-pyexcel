import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Only create the client if credentials are provided
let supabase: SupabaseClient | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }

export interface Lead {
  id?: string
  name: string
  email: string
  interest_type: 'individual' | 'corporate'
  company_name?: string
  team_size?: string
  message?: string
  consent: boolean
  created_at?: string
}

export async function submitLead(lead: Omit<Lead, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string }> {
  // If Supabase is not configured, use localStorage as fallback
  if (!supabase) {
    console.log('Supabase not configured - storing lead locally')
    const leads = JSON.parse(localStorage.getItem('leads') || '[]')
    leads.push({ ...lead, id: Date.now().toString(), created_at: new Date().toISOString() })
    localStorage.setItem('leads', JSON.stringify(leads))
    return { success: true }
  }

  const { error } = await supabase
    .from('leads')
    .insert([lead])

  if (error) {
    console.error('Error submitting lead:', error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
