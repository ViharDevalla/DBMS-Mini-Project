import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://rvuilxgmetzjnndsocnh.supabase.co"
const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

async function readRows(req, res) {
let data = await supabase
  .from('books')
  .select('*')

console.log(data)
}

readRows(req, res)