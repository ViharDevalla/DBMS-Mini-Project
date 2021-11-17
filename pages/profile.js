import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ReportCard from '../components/ReportCard'

const profile = () => {

    const [reportData,setReportData] = useState([1])
    const [bookData,setBookData] = useState([1])
    useEffect(() => {
        try{
            axios.get('/api/db?table=reports&cols=*')
            .then(res => {
                setReportData(res.data.data)
            })
            axios.get('/api/db?table=books&cols=*')
            .then(res => {
                setBookData(res.data.data)
            })
        }
        catch(err){
            console.log(err)
        }
    },[])
    return (
        <div className="block py-24 p-10">
            <h1 className="text-6xl font-bold py-8">
                Profile
            </h1>
            <h1 className="text-4xl font-bold">
                Reports
            </h1>
            <div className="block">
                {reportData.map(report =>{
                    return(
                        <div className="py-5 px-10">
                            <ReportCard report={report} bookData={bookData} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default profile
