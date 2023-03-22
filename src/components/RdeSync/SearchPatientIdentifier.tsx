import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'

const SearchPatientIdentifier = () => {
  const [patientIdentifier,setPatientIdentifier] = useState({identifier:''})
  const {identifier} = patientIdentifier;
  const onChange = (e: { target: { name: any; value: any } }) => {
    setPatientIdentifier({ ...patientIdentifier, [e.target.name]: e.target.value });
  };
  const [identifiers, setIdentifiers] = useState<string[]>([]);

  const tabulateIdentifier = ()=>{
    if(identifier.length>0){
      setIdentifiers([...identifiers, identifier]);
    }
    }
    const clearIdentifiers = ()=>{
      setIdentifiers([])
    }
  return (
    <div>
      <Header shouldRenderSearchLink={false}/>
      <div className='flex justify-center'>
      <div className='bg-gray-300 inline-block w-auto mt-10'>
        <input  type="date" className='mt-3 mb-3 ml-3 mr-3'/>
        </div>
        <div className='bg-gray-300 inline-block ml-5 w-auto mt-10'>
        <input name = "identifier" onChange={onChange} className='mt-3 mb-3 ml-3 mr-3'
         placeholder='Add Identifier'/><span onClick={tabulateIdentifier} className='mr-3 cursor-pointer text-black'><b>+</b></span>
        </div> 
        <div className='inline-block  ml-5 mt-10'>
          <button className='bg-blue-500 text-white font-bold py-3 px-3 rounded'>Search</button>
        </div>
        <div className='inline-block  ml-5 mt-10'>
          {identifiers.length>0&& <button onClick = {clearIdentifiers}className='text-red-600 border hover:text-white hover:bg-red-500 hover:border-red-500 hover:font-bold border-gray-300 font-bold py-3 px-3 rounded'>Clear</button>}
        </div>
      </div>
      {identifiers.length>0&&
            <div className='flex justify-center mt-20'>
            <table className="w-[50%] text-sm text-left">
         <thead className="text-white uppercase bg-gray-600">
           <tr>
             <th>Count</th>
             <th>Identifier</th>
           </tr>
         </thead>
         <tbody>
         {identifiers.map((id, index) => (
           <tr className='bg-gray-200' key={id}>
             <td>{index + 1}</td>
             <td>{id}</td>
           </tr>
         ))}
       </tbody>
       </table>
             </div>
      }

    </div>
  )
}

export default SearchPatientIdentifier
