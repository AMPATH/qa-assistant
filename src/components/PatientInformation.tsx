import React from 'react';
import Header from './Header';
const PatientInformation = () => {

    return (
        <div className='bg-lightGray h-screen w-full'>
            <Header />
            <div className='w-[50%] mx-auto  flex'>
                <div className=''></div>
                <div className='bg-hashBlue p-4 rounded'>
                    <div className='bg-lightGray px-8 py-6 rounded-full text-center'>
                    <h1 className='text-4xl font-bold '>J</h1>
                    </div>
                    <div>
                        <h4>JOHN DOE</h4>
                    </div>
                </div>
                <div className='flex gap-10 p-8 bg-white rounded'>
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