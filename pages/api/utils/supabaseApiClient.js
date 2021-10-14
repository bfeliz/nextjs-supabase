// setup api supabase client for easy use throughout application; using this backend version protects database from alteration on client-side
import { createClient } from '@supabase/supabase-js';

// variables generated in supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRole = process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseServiceRole);
