import { Link, useNavigate } from "react-router-dom";
import AdvanceFilters from "./AdvanceFilters";

type FunctionProps = {
  handleAdvancedFiltering: () => any;
  handleFilter: ({}) => any;
  patients: [];
  totalPatients: [];
}

const DisplayPatientResult: React.FC<FunctionProps> = ({patients, totalPatients, handleAdvancedFiltering, handleFilter}) => {
    const navigate = useNavigate()

    const handleRedirection = (id: number) => {
        navigate(`/${id}`)
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
                      Uuid No.
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
          {patients.map((item: any = {}, index: number) => (
                         <tr onClick={() => handleRedirection(item.person.uuid)} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-blue-500/95 hover:text-white hover:cursor-pointer" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.person?.uuid}
                            </th>
                            <td className="px-6 py-4">
                            {item?.identifiers[0]?.display}
                            </td>
                            <td className="px-6 py-4">
                            {item?.person?.display}
                            </td>
                            <td className="px-6 py-4">
                            {item?.person?.gender}
                            </td>
                            <td className="px-6 py-4">
                            {item?.person?.age}
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