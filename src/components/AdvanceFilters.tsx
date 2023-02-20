import React, { useState } from 'react'


const AdvanceFilters = ({handleAdvancedFiltering, handleFilter}) => {
  const [selectedGender, setSelectedGender] = useState('Male')
  const [selectedAgeBracket, setSelectedAgeBracket] = useState('0-18')
  const [selectedIdentifier, setSelectedIdentifier] = useState('cc_number')


    const searchResult = handleAdvancedFiltering()


    const handleAgeBracket = () => {
      let ageBracket: Object[];
      if(selectedAgeBracket) {
        if(selectedAgeBracket === '0-18') {
          ageBracket = searchResult.filter((item: Object[]) => item?.age <= 18)
          return ageBracket;
        }

        if(selectedAgeBracket === '18-36') {
          ageBracket = searchResult.filter((item: Object[]) => item?.age > 18 && item.age <= 36)
          return ageBracket;
        }

        if(selectedAgeBracket === '36 +') {
          ageBracket = searchResult.filter((item: Object[]) => item?.age > 36)
          return ageBracket;
        }
        
      }
      // return ageBracket;
    }

    const handleGender = () => {
      if(selectedGender) {
        const gender: [] = searchResult.filter((item: []) => item.gender === selectedGender)
        // console.log('G:', gender)
        return gender;
      }
    }

    const handlePatientSearch = () => {
      const ageBracket = handleAgeBracket() ?? []
      const gender = handleGender() ?? []

      const filteredData = ageBracket.filter(entry => gender.includes(entry))
        handleFilter(filteredData)      
    }


  return (
    <div className='mb-2 mt-8'>
        <div className='ml-32 flex gap-12'>
        <div className='px-3 py-2 border border-gray-400 rounded-lg'>
        <label>
          Gender:
        <select className='p-2 outline-none'
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">other</option>
        </select>
        </label>
        </div>

        <div className='px-3 py-2 border border-gray-400 rounded-lg'>
        <label>
          Age bracket:
        <select className='p-2 outline-none' 
            value={selectedAgeBracket}
            onChange={(e) => setSelectedAgeBracket(e.target.value)}>
            <option value="0-18">0-18</option>
            <option value="18-36">18-36</option>
            <option value="36 +">36 +</option>
        </select>
        </label>
        </div>
        <div className='px-3 py-2 border border-gray-400 rounded-lg'>
        <label>
          Identifier:
        <select className='p-2 outline-none' 
            value={selectedIdentifier}
            onChange={(e) => setSelectedIdentifier(e.target.value)}>
            <option value="cc_number">CC NO.</option>
            <option value="nhif">NHIF NO.</option>
            <option value="id_number">ID NO.</option>
        </select>
        </label>
        </div>
        <div className='m-2'>
          <button onClick={handlePatientSearch} className='bg-blue-500 px-4 py-2 rounded-md text'>Apply</button>
        </div>
        </div>
    </div>
  )
}

export default AdvanceFilters