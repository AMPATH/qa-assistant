import React from 'react';
import Header from './Header';
const PatientInformation = () => {

    return (
        <div className='bg-lightGray h-screen'>
            <Header />
            <div className=' w-[70%] mx-auto flex mt-8 h-[20%]'>
                <div className='bg-hashBlue p-4 rounded w-[10%]'>
                    <div className='bg-lightGray px-8 py-6 rounded-full text-center'>
                    <h1 className='text-4xl font-bold '>J</h1>
                    </div>
                    <div>
                        <h4>JOHN DOE</h4>
                    </div>
                </div>
                <div className='flex p-8 bg-white rounded w-[80%] justify-between'>
                    <div>
                        <b>Phone Number</b>
                        <p>25422222222</p>
                    </div>
                    <div>
                        <b>Gender</b>
                        <p>Male</p>
                    </div>
                    <div>
                        <b>Age</b>
                        <p>122</p>
                    </div>
                    <div>
                        <b>Date of Birth</b>
                        <p>01/01/2000</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PatientInformation;