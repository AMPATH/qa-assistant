import React from 'react'

const Pagination = ({patientsPerPage, totalPatients, paginate}) => {

    let pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPatients / patientsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <div className=' mt-6'>
        <ul className='flex ml-20'>
            {pageNumbers.map((number, index) => (
                <li key={index} onClick={() => paginate(number)} className='px-4 mx-6 rounded-sm py-2 border text-blue-800 hover:bg-blue-900 hover:text-white border-gray-700'>{number}</li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination