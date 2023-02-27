import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext'

const PatientInformation = () => {
    const { patientData } = useContext(AppContext)

    // const [patientInfo, setPatientInfo] = useState([])

    // console.log(patientData);
 
    patientData.map((info) => console.log('array',info[0].person))

    

    return (
        <div className='bg-lightGray h-screen'>
            <div className=' w-[70%] mx-auto flex h-[25%] pt-8 '>
                <div className='bg-hashBlue p-4 rounded w-[20%]'>
                    <div className='bg-lightGray rounded-full mx-auto w-36 h-36 flex justify-center items-center'>
                    <h1 className='text-9xl font-bold '>J</h1>
                    </div>
                    <div>
                        <h3 className='font-bold text-center'>JOHN DOE</h3>
                    </div>
                </div>
                <div className='flex p-8 bg-white rounded w-[80%] justify-between text-xl'>
                    <>
                    {patientData.length <= 1 ? patientData.map((info, index) => (
                                                <>
                                                <div key={index}>
                                                   <b>Preferred Name</b>
                                                   <p>{info[0].person.preferredName.display}</p>
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
                                                   <p>{new Date(info[0]?.person.birthdate).toLocaleString()}</p>
                                               </div>
                                               </>
                    )) : (<p className='absolute bottom-[50%] text-center ml-[10%] italic'>Click on Patient Info to get a patient data</p>)}

                    </>
                </div>
            </div>
        </div>
    )

}

export default PatientInformation;