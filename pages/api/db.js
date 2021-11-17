import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://rvuilxgmetzjnndsocnh.supabase.co"
const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function connect(req, res) {
    if(req.method === 'GET') {
      let table = req.query.table
      let cols = req.query.cols
      console.log(table, cols)
      let response = await supabase
      .from(table)
      .select(cols)

      res.status(200).json({ data:response.data })
    }

    if(req.method === 'POST') {
      let table = req.body.table
      let data = req.body.data
      let response = await supabase
      .from(table)
      .insert(data)

      res.status(200).json({ data:response.data,err:response.error })
    }

    if(req.method === 'PUT') {
      let table = req.body.table
      let data = req.body.data
      let filter = req.body.filter
      let response = await supabase
      .from(table)
      .update(data)
      .match(filter)

      res.status(200).json({ data:response.data,err:response.error })
    }

    if(req.method === 'DELETE') {
      let table = req.query.table
      let col = req.query.col
      let value = req.query.value
      let response = await supabase
      .from(table)
      .delete()
      .eq(col, value)

      res.status(200).json({ data:response.data })
    }
    
  }
