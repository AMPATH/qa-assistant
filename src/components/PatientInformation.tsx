import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext'
import Header from './Header';
import SideNavBar from './SideNavBar';

const PatientInformation = () => {
    const { patientData } = useContext(AppContext)
 

    return (
        <>
       <Header />
       <SideNavBar />
        <div className='bg-lightGray h-screen'>
        {patientData.length <= 1 ? patientData.map((info: any = {}, index) => (
            <>
          <div className=' w-[70%] mx-auto flex h-[25%] pt-8 ' key={index}>
          <div className='bg-hashBlue p-4 rounded w-[20%]'>
              <div className='bg-lightGray rounded-full mx-auto w-36 h-36 flex justify-center items-center'>
              <h1 className='text-9xl font-bold '>{info[0].person.preferredName.display[0]}</h1>
              </div>
              <div>
                  <h3 className='font-bold text-white text-center'>{info[0].person.preferredName.display}</h3>
              </div>
          </div>
          <div className='flex p-8 bg-white rounded w-[80%] justify-between text-xl'>

                                          <div key={index}>
                                             <b>Address</b>
                                             <p>{info[0].person.preferredAddress.display}</p>
                                         </div>
                                         <div>
                                             <b>Gender</b>
                                             <p>{info[0]?.person.gender}</p>
                                         </div>
                                         <div>
                                             <b>Age</b>
                                             <p>{info[0]?.person.age}</p>
                                         </div>
                                         <div>
                                             <b>Date of Birth</b>
                                             <p>{new Date(info[0]?.person.birthdate).toLocaleString().split(" ")[0].slice(0,-1)}</p>
                                         </div>
          </div>
          </div>
          
            </>
        )) : (<p className='absolute ml-[15%]'>Go to search patient..</p>)}
        </div>
        </>
    )

}

export default PatientInformation;