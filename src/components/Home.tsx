import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DisplayPatientResult from './DisplayPatientResult'
import Header from './Header'
import Pagination from './Pagination'
import data from '../data/mockData'

interface Result {
    newData: []
}
const Home = () => {
    const [patients, setPatients] = useState<[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [patientsPerPage] = useState<number>(5)
    const [searchParams, setSearchParams] = useState<string>('')


    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatients = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatients, indexOfLastPatient)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const handleSubmit = () => {
        if(searchParams.trim() && searchParams !== ''){
            const newData = data.filter(item => {
                const namesInFull: string[] = item.name.split(" ")
                const matchingNames: string[] = namesInFull.filter(name => name.toLowerCase().startsWith(searchParams.toLowerCase()))
                return matchingNames.length > 0
            })
            setPatients(newData as [])
        }
        setSearchParams('')
    }

    const handleAdvancedFiltering = (): Object[] => {
        return patients
    }

    const handleFilter = (filteredPatients: []) => {
        setPatients(filteredPatients)
    }


  return (
    <div className='bg-themeColor h-screen'>
       <Header />
        <div className='w-[80%] mx-auto mt-20'>
            <div className='w-[90%] mx-auto'>
                <div className='flex gap-10 m-4 mx-auto w-[95%] ml-20'>
                    <input className='p-4 w-[60%] outline-none rounded-xl shadow-lg' 
                           type="text" 
                           placeholder="Search patient by name or identifier"
                           value={searchParams} 
                           onChange={(e) => setSearchParams(e.target.value)}/>
                    <div className='flex gap-11'>
                        <button onClick={handleSubmit} className='bg-blue-800/70 text-lg text-white py-2 px-12 rounded-xl hover:bg-white border hover:border-blue-800/70 hover:text-blue-800/70'>Search</button>
                        <button onClick={() => setSearchParams('')} className='bg-slate-50 text-lg text-red-600 border hover:border-red-500 hover:font-bold border-gray-300 py-2 px-12 rounded-xl'>Reset</button>
                    </div>
                </div>
            </div>
            {patients && patients.length < 1 ? (<p className='text-lg ml-8'>Search for a patient</p>) : (
            <div>
            <DisplayPatientResult patients={currentPatients} 
                                  totalPatients={patients} 
                                  handleAdvancedFiltering={handleAdvancedFiltering}
                                  handleFilter={handleFilter}/>
            <Pagination patientsPerPage={patientsPerPage} 
                        totalPatients={patients.length}
                        paginate={paginate}/>
           </div>
            )}

        </div>
    </div>
  )
}

export default Home
