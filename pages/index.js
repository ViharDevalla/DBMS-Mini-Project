import Head from 'next/head'
import {useState, useEffect} from 'react'
import BookCard from '../components/BookCard'
import axios from 'axios'

export default function Home() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [bookData,setBookData] = useState([])
  useEffect(() => {
    if(localStorage.getItem('token')){
      setLoggedIn(true)
      
    }
    axios.get('/api/db?table=books&cols=*')
      .then(res => {
        console.log(res.data)
        setBookData(res.data.data)
      })
  },[])


  if(!loggedIn){
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>LibraSmart</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a className="text-green-600">LibraSmart</a>
          </h1>
          <p className="text-xl py-10">
            We offer you the best of books for one single subscription.
          </p>
          <div className="bg-green-500  rounded-lg text-white py-2 px-4 hover:bg-green-600 cursor-pointer "><a href='/login'>Login / Signup</a></div>
  
        </main>
  
      </div>
    )

  }
  else{
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>LibraSmart</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="flex flex-col w-full flex-1 px-20 py-24 text-left">
          <h1 className="text-6xl font-bold">
          <a className="text-green-600">Book</a>   Store
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
            {bookData.map(book => {
              return <BookCard key={book.id} book={book} />
            })}
          </div>
          
  
        </main>
  
        
      </div>
    )

  }
  
}
