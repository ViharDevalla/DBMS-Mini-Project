import React,{useState,useEffect} from 'react'
import axios from 'axios'
const login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = () => {
        console.log(username,password)
        axios.put('/api/auth',{email:username,password:password})
        .then(res => {
            if(res.data.data){
                localStorage.setItem('token',res.data.data.access_token)
                window.location.href = '/'
            }
            else{
                alert('Something went wrong')
            }
        })

    }
    return (
        <div>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center lg:py-24">
                <h1 className="text-6xl font-bold py-10">
                Login to <a className="text-green-600">LibraSmart</a>
                </h1>
                <div className="w-96 p-8 border-2  rounded-lg">
                    <form className="flex flex-col ">
                        <div className="flex flex-col text-left">
                            <label className="text-lg font-bold rounded-lg text-left py-1">Username</label>
                            <input className="w-full p-2 border" type="text" placeholder="Email" onChange={(e)=>{setUsername(e.target.value)}}/>
                            <label className="text-lg font-bold rounded-lg pt-5 text-left py-1">Password</label>
                            <input className="w-full p-2 border" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            <a href='/signup' className="py-1 text-blue-500">Create a new account</a>
                            <a href='/forgot' className='py-1 pb-3 text-blue-500'>Forgot password?</a>
                            <div onClick={()=>{handleSubmit()}} className="bg-green-500 text-white px-2 py-2 rounded-lg text-center hover:bg-green-600 cursor-pointer">Submit</div>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    )
}

export default login
