



import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hrixecwkvkbnimqbumjl.supabase.co";
const supabaseKey = "sb_publishable_KvkamOx85QPHgMZ6KyGnbg_YvBnmkJp";


export const supabase = createClient(supabaseUrl, supabaseKey);