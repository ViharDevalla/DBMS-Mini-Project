import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://rvuilxgmetzjnndsocnh.supabase.co"
const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function connect(req, res) {
    if(req.method === 'POST') {
        let email = req.body.email
        let password = req.body.password
        let data = await supabase.auth.signUp({
            email: email,
            password: password
          })
        res.status(200).json({ data:data })

    }
    if(req.method === 'PUT') {
        let email = req.body.email
        let password = req.body.password
        let data = await supabase.auth.signIn({
            email: email,
            password: password
          })
        const user = supabase.auth.user()
        res.status(200).json({data:data.data})

    }
}