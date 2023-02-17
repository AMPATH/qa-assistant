import React from 'react'

const AdvanceFilters = () => {
  return (
    <div className='mb-2'>
        <div className='ml-28 flex gap-5'>
        <div className='p-4 border border-gray-400 rounded-lg'>
        <label>
          Gender:
        <select name="selectedFruit">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">other</option>
        </select>
        </label>
        </div>
        <div className='p-4 border border-gray-400 rounded-lg'>
        <label>
          Age bracket:
        <select name="selectedFruit">
            <option value="0-18">0-18</option>
            <option value="Female">18-36</option>
            <option value="other">36 +</option>
        </select>
        </label>
        </div>
        <div className='p-4 border border-gray-400 rounded-lg'>
        <label>
          Identifier:
        <select name="selectedFruit">
            <option value="cc_number">12345678</option>
            <option value="nhif">12345</option>
            <option value="id_number">2121212</option>
        </select>
        </label>
        </div>
        </div>
    </div>
  )
}

export default AdvanceFilters