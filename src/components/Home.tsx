import { useEffect, useState } from 'react'
import DisplayPatientResult from './DisplayPatientResult'
import Header from './Header'
import Pagination from './Pagination'
// import data from '../data/mockData'
 

interface Result {
    newData: []
}
const Home = () => {
    const [patients, setPatients] = useState<any>([])
    const [patientsData, setPatientsData] = useState<[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [patientsPerPage] = useState<number>(5)
    const [searchParams, setSearchParams] = useState<string>('')

    useEffect(() => {
        const fetchPatients = async () => {           
       
            await fetch(`openmrs/ws/rest/v1/patient?q=${searchParams}&v=default&limit=full`,{
                // headers:{
                //     'Authorization': 'Basic '+btoa(username+":"+password),
                //     },
                method:"GET",
                redirect: 'follow'
            })
            .then((Response=>Promise.all(([Response.headers, Response.json()]))))
            .then(([_,response])=> setPatientsData(response.results))
        }
        fetchPatients()
        
    }, [searchParams])
    // console.log(patient)

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatients = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatients, indexOfLastPatient)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const handleSubmit = () => {

        if(searchParams.trim() && searchParams !== ''){
            const newData = patientsData.filter((data: any = {}) => {
                const namesInFull: string[] = data?.display.split(" ")
                const matchingNames: string[] = namesInFull.filter(name => name.toLowerCase().startsWith(searchParams.toLowerCase()))
                return matchingNames.length > 0
            })
            if(newData) {
                setPatients(newData as any)
            }
        }

        setSearchParams('')
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(searchParams.trim() && searchParams !== ''){
            const newData = patientsData.filter((data: any = {}) => {
                const namesInFull: string[] = data?.display.split(" ")
                const matchingNames: string[] = namesInFull.filter(name => name.toLowerCase().startsWith(searchParams.toLowerCase()))
                return matchingNames.length > 0
            })
            if(newData) {
                setPatients(newData as any)
            }
        }
    }

    const handleAdvancedFiltering = (): any => {
        return patients
    }

    const handleFilter = (filteredPatients: {}) => {
        setPatients(filteredPatients)
    }


  return (
    <div className='bg-themeColor h-screen'>
       <Header />
        <div className='w-[80%] mx-auto mt-20'>
            <div className='w-[90%] mx-auto'>
                <div className='md:flex gap-10 m-4 mx-auto w-[95%] md:ml-20'>
                    <input className='py-2 px-4 md:w-[60%] w-full outline-none rounded-xl shadow-lg' 
                           type="text" 
                           placeholder="Search patient by name or identifier"
                           value={searchParams} 
                           onKeyDown={handleKeyPress}
                           onChange={(e) => setSearchParams(e.target.value)}/>
                    <div className='flex md:gap-11 gap-3 mt-4'>
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
            {patientsPerPage > 5 &&  
            <Pagination patientsPerPage={patientsPerPage} 
                        totalPatients={patients.length}
                        paginate={paginate}/>}
           
           </div>
            )}

        </div>
    </div>
  )
}

export default Home
