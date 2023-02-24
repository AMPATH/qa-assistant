import { useContext, useEffect, useState } from 'react'
import DisplayPatientResult from './DisplayPatientResult'
import Pagination from './Pagination'
import { AppContext } from '../context/AppContext'
import Header from './Header'
import SideNavBar from './SideNavBar'
import swal from 'sweetalert'
 

interface Result {
    newData: []
}
const Home = () => {
    const [patientInfo, setPatientInfo] = useState<any>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [patientsPerPage] = useState<number>(5)
    const [searchParams, setSearchParams] = useState<string>('')

    const { searchPatient, patients } = useContext(AppContext)

    

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatients = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatients, indexOfLastPatient)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    useEffect(()=>{
        const banner = localStorage.getItem("Banner")
          if(banner!==null){
            swal({
              title:'Success!',
              text:"Logged In",
              icon:"success",
          })
          }
        localStorage.removeItem("Banner")
        },[]) 

    const handleSubmit = () => {

        if(searchParams.trim() && searchParams !== ''){
            searchPatient(searchParams)
            setPatientInfo(patients)
        }

        setSearchParams('')
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // if(searchParams.trim() && searchParams !== ''){
        //     searchPatient(searchParams)
        //     setPatientInfo(patients)
        // }
    }

    const handleAdvancedFiltering = (): any => {
        return patientInfo
    }


  return (
    <>
        <Header />
      {/* <SideNavBar /> */}
    <div className='bg-themeColor overflow-y-auto h-screen pt-10'>
        <div className='w-[80%] ml-[12%]'>
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
            <DisplayPatientResult 
                                  patients={currentPatients}
                                  handleAdvancedFiltering={handleAdvancedFiltering}
                                  />
            {patientsPerPage > 5 &&  
            <Pagination patientsPerPage={patientsPerPage} 
                        totalPatients={patients.length}
                        paginate={paginate}/>}
           
           </div>
            )}

        </div>
    </div>
    </>
  )
}
export default Home 
