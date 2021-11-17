import React from 'react'
import axios from 'axios'
const BookCard = (props) => {
    console.log(props.book.img_url)
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    function handleSubmit(){

        console.log(props.book.book_name)
        let stock = props.book.stock-1
        let issue_date = new Date(Date.now()).toISOString()
        let return_date = new Date(Date.now()+7).toISOString()

        if(props.book.stock>0){
            try{
                axios.put('/api/db',
            {
                table:'books',
                data:{ "stock": stock},
                filter:{ "book_id": props.book.book_id}
            })
            .then(res => {
                console.log(res)
            })
            axios.post('/api/db',{table:'reports',data:[{"report_id": getRndInteger(100,1000),"return_date":return_date,"issue_date":issue_date,"staff_id":1,"book_id":props.book.book_id,user_id:1}]})
            .then(res => {
                console.log(res)
            })
            alert("Book Issued")
            window.href = '/'
            }
            catch(err){
                console.log(err)
                alert("Error")
            }
            
        }
        else{
            alert("Book not available")
        }

    }
    return (
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8 transform hover:scale-110 transition ease-in cursor-pointer">
            <div style={{backgroundImage:'url('+props.book.img_url+')'}} className="bg-gray-300 h-96 w-full rounded-lg shadow-md bg-cover bg-center " />
                <div className="w-56 md:w-56 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden mx-10">
                    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{props.book.book_name}</div>
                    <div className="flex items-center justify-between py-2 px-3 bg-green-400">
                    <h1 className="text-gray-800 font-bold "> <a className={props.book.stock?'text-green-900':'text-red-500'}>Stock : {props.book.stock}</a></h1>
                    <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700" onClick={()=>{handleSubmit()}}>Rent</button>
                    </div>
                </div>
        </div>

    )
}

export default BookCard
