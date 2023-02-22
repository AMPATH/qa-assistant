import React, { useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useContext} from "react";

type FunctionProps = {
  handleAdvancedFiltering: () => any;
  handleFilter: ({}) => any;
}

const AdvanceFilters: React.FC<FunctionProps> = ({ handleFilter}) => {
  const [selectedGender, setSelectedGender] = useState('M')
  const [selectedAgeBracket, setSelectedAgeBracket] = useState('0-18')
  // const [selectedIdentifier, setSelectedIdentifier] = useState('cc_number')
  const { patients } = useContext(AppContext)


    // const searchResult = handleAdvancedFiltering()


    const handleAgeBracket = () => {
      let ageBracket: Object[];
      if(selectedAgeBracket) {
        if(selectedAgeBracket === '0-18') {
          ageBracket = patients.filter((item: any = {}) => item?.person.age <= 18)
          return ageBracket;
        }

        if(selectedAgeBracket === '18-36') {
          ageBracket = patients.filter((item: any = {}) => item?.person.age > 18 && item?.person.age <= 36)
          return ageBracket;
        }

        if(selectedAgeBracket === '36 +') {
          ageBracket = patients.filter((item: any = {}) => item?.person.age > 36)
          return ageBracket;
        }
        
      }
      // return ageBracket;
    }

    const handleGender = () => {
      if(selectedGender) {
        const gender: any[] = patients.filter((item: any = {}) => item?.person.gender === selectedGender)
        // console.log('G:', gender)
        return gender;
      }
    }

    const handlePatientSearch = () => {
      const ageBracket = handleAgeBracket() ?? []
      const gender = handleGender() ?? []

      const filteredData = ageBracket.filter((entry: any = {}) => gender.includes(entry as never))
      console.log(filteredData)
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
        <div className='m-2'>
          <button onClick={handlePatientSearch} className='bg-blue-500 px-4 md:py-2 py-1 rounded-md text'>Apply</button>
        </div>
        </div>
    </div>
  )
}

export default AdvanceFilters