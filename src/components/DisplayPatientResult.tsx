import AdvanceFilters from "./AdvanceFilters";


const DisplayPatientResult = ({patients, totalPatients, handleAdvancedFiltering, handleFilter}) => {

  interface Identifier {
    cc_number?: number;
  }
  interface Patient {
    uuid: number;
    identifiers: Identifier[];
    name: string;
    gender: string;
    age: number;
  }


      return (
        <>
    {patients && (
      <>
      {totalPatients.length > 1 &&  <AdvanceFilters handleAdvancedFiltering={handleAdvancedFiltering}
                                                    handleFilter={handleFilter}/>}
      <p className="ml-28 mb-2 mt-4"><strong>{totalPatients.length}</strong> Patients found</p>
           <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] mx-auto mt-8">
      <table className="w-full mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Identifiers
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Patient Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Age
                  </th>
              </tr>
          </thead>
          <tbody>
          {patients.map((item: Patient, index: number) => (
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.uuid}
                            </th>
                            <td className="px-6 py-4">
                            {item.identifiers[0].cc_number}
                            </td>
                            <td className="px-6 py-4">
                            {item.name}
                            </td>
                            <td className="px-6 py-4">
                            {item.gender || "gender"}
                            </td>
                            <td className="px-6 py-4">
                            {item.age}
                            </td>
                        </tr>
          ))}
          
          </tbody>
      </table>
  </div>

      </>
 
    )}
      </>
      );
}

export default DisplayPatientResult