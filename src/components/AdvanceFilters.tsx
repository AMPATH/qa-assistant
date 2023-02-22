import React, { useState } from 'react'

type FunctionProps = {
  handleAdvancedFiltering: () => any;
  handleFilter: ({}) => any;
}

const AdvanceFilters: React.FC<FunctionProps> = ({handleAdvancedFiltering, handleFilter}) => {
  const [selectedGender, setSelectedGender] = useState('M')
  const [selectedAgeBracket, setSelectedAgeBracket] = useState('0-18')
  // const [selectedIdentifier, setSelectedIdentifier] = useState('cc_number')


    const searchResult = handleAdvancedFiltering()


    const handleAgeBracket = () => {
      let ageBracket: Object[];
      if(selectedAgeBracket) {
        if(selectedAgeBracket === '0-18') {
          ageBracket = searchResult.filter((item: any = {}) => item?.person.age <= 18)
          return ageBracket;
        }

        if(selectedAgeBracket === '18-36') {
          ageBracket = searchResult.filter((item: any = {}) => item?.person.age > 18 && item?.person.age <= 36)
          return ageBracket;
        }

        if(selectedAgeBracket === '36 +') {
          ageBracket = searchResult.filter((item: any = {}) => item?.person.age > 36)
          return ageBracket;
        }
        
      }
      // return ageBracket;
    }

    const handleGender = () => {
      if(selectedGender) {
        const gender: [] = searchResult.filter((item: any = {}) => item?.person.gender === selectedGender)
        // console.log('G:', gender)
        return gender;
      }
    }

    const handlePatientSearch = () => {
      const ageBracket = handleAgeBracket() ?? []
      const gender = handleGender() ?? []

      const filteredData = ageBracket.filter((entry: any = {}) => gender.includes(entry as never))
        handleFilter(filteredData)      
    }


  return (
    <div className='mb-2 mt-8'>
        <div className='md:ml-32 flex md:gap-12 gap-3'>
        <div className='md:px-2 py-1 border border-gray-400 rounded-lg'>
        <label>
          Gender:
        <select className='md:p-2 outline-none'
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}>
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="other">other</option>
        </select>
        </label>
        </div>

        <div className='md:px-2 py-1 border border-gray-400 rounded-lg'>
        <label>
          Age bracket:
        <select className='md:p-2 outline-none' 
            value={selectedAgeBracket}
            onChange={(e) => setSelectedAgeBracket(e.target.value)}>
            <option value="0-18">0-18</option>
            <option value="18-36">18-36</option>
            <option value="36 +">36 +</option>
        </select>
        </label>
        </div>
        {/* <div className='px-3 py-2 border border-gray-400 rounded-lg'>
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
        </div> */}
        <div className='m-2'>
          <button onClick={handlePatientSearch} className='bg-blue-500 px-4 md:py-2 py-1 rounded-md text'>Apply</button>
        </div>
        </div>
    </div>
  )
}

export default AdvanceFilters