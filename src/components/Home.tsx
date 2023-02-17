import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DisplayPatientResult from './DisplayPatientResult'
import Header from './Header'
import Pagination from './Pagination'
import data from '../data/mockData'

interface Result {
    [key: string]: any
}
const Home = () => {
    const [patients, setPatients] = useState<[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [patientsPerPage] = useState<number>(5)

    // const [results, setResults] = useState<Result[]>()

    // const userInformation = localStorage.getItem("authenticated")
    // if(userInformation !== "true"){
    //     window.location.href = "/login"
    // }

    useEffect(() => {
        // let timer: number;
        // if(searchParams && searchParams.trim() && searchParams.length > 0) {
        //     timer = window.setTimeout(() => {
        //         fetch(`openmrs/ws/rest/v1/patient?q=${searchParams}&v=default&limit=1`, {
        //             mode: 'no-cors',
        //             method: "GET",
        //             redirect: 'follow'
        //         }).then(res => res.json())
        //         .then(data => {
        //             if(!data) {
        //                 return
        //             } 
        //             // console.log(data.results)
        //             setResults(data.results as Result[])
        //             setSearchParams('')
        //         })
        //     }, 2000)
        // }
        // return () => clearTimeout(timer)
        setPatients(data)

    }, [])

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatients = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatients, indexOfLastPatient)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='bg-themeColor h-screen'>
       <Header />
        <div className='w-[80%] mx-auto mt-20'>
            <div className='w-[90%] mx-auto'>
                <div className='flex gap-10 m-4 mx-auto w-[95%] ml-20'>
                    <input className='p-4 w-[60%] rounded-sm outline-none border border-gray-400 border-gray' type="text" placeholder="Search patient by name or identifier" />
                    <div className='flex gap-11'>
                        <button className='bg-blue-800/70 text-lg text-white py-2 px-12 rounded-md hover:bg-white border hover:border-blue-800/70 hover:text-blue-800/70'>Search</button>
                        <button className='bg-slate-50 text-lg text-red-600 border hover:border-red-500 hover:font-bold border-gray-300 py-2 px-12 rounded-md'>Reset</button>
                    </div>
                </div>
            </div>
            <div>
                <DisplayPatientResult patients={currentPatients} totalPatients={patients}/>
                <Pagination patientsPerPage={patientsPerPage} 
                            totalPatients={patients.length}
                            paginate={paginate}/>
            </div>

        </div>
    </div>
  )
}

export default Home
