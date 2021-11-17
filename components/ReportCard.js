import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ReportCard = (props) => {
    var bookData = props.bookData.find(item => {
        return item.book_id == props.report.book_id
     })

    function deleteReport(){
        axios.delete('/api/db',{table: 'report',col:'report_id',value:props.report.report_id})
        .then(res => {
            console.log(res)
            window.location.reload()
        })
    }
    return (
        <div>
            <div className="lg:flex shadow rounded-lg border  border-gray-400">
                <div className="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
                    <div className="text-center tracking-wide">
                    <div className="text-white font-bold text-4xl ">{props.report.report_id}</div>
                    <div className="text-white font-normal text-2xl">Report ID</div>
                    </div>
                </div>
                <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
                    <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                    {bookData?bookData.book_name:''}
                    </div>
                    <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                    Issue Date : {props.report.issue_date}
                    </div>
                    <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                    Return Date : {props.report.return_date}
                    </div>
                </div>
                <div onClick={()=>{deleteReport()}} className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-10 py-4 lg:px-0">
                    <span className="tracking-wider text-white bg-red-500 px-2 text-sm rounded leading-loose mx-2 font-semibold">
                    Delete
                    </span>
                </div>
                </div>

        </div>
    )
}

export default ReportCard
