import React,{useState,useEffect} from 'react'

const login = () => {
    return (
        <div>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center lg:py-24">
                <h1 className="text-6xl font-bold py-10">
                Login to <a className="text-red-600">LibraSmart</a>
                </h1>
                <div className="w-72 p-8 border-2  rounded-lg">
                    <form className="flex flex-col ">
                        <div className="flex flex-col text-left">
                            <label className="text-lg font-bold rounded-lg text-left py-1">Username</label>
                            <input className="w-full p-2 border" type="text" placeholder="Email"/>
                            <label className="text-lg font-bold rounded-lg pt-5 text-left py-1">Password</label>
                            <input className="w-full p-2 border" type="text" placeholder="Email"/>
                            <a href='/signup' className="py-1 text-blue-500">Create a new account</a>
                            <a href='/forgot' className='py-1 pb-3 text-blue-500'>Forgot password?</a>
                            <div className="bg-red-500 text-white px-2 py-2 rounded-lg text-center hover:bg-red-600 cursor-pointer">Submit</div>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    )
}

export default login
