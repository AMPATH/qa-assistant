import AdvanceFilters from "./AdvanceFilters";


const DisplayPatientResult = ({patients, totalPatients}) => {


      return (
            <div className="mt-20">
            {totalPatients.length > 1 && <AdvanceFilters />}
            <p className="ml-28 mb-4"><strong>{totalPatients.length}</strong> Patients found</p>
                <table className="table-auto mx-auto bg-white p-4 w-[85%] rounded-xl">
                  <thead className="bg-tableHeader rounded-xl">
                    <tr className="m-4">
                      <th className="p-6">No</th>
                      <th className="p-6">Identifiers</th>
                      <th className="p-6">Patient Name</th>
                      <th className="p-6">Gender</th>
                      <th className="p-6">Age</th>
                    </tr>
                  </thead>
                  <tbody className="m-4">
                    {patients.map((item, index: number) => (
                      <tr className="hover:text-blue-600 hover:cursor-pointer" key={index}>
                      <td className="p-6">{item.uuid}</td>
                      <td className="p-6">{item.identifiers[0].cc_number}</td>
                      <td className="p-6">{item.name}</td>
                      <td className="p-6">1961</td>
                      <td className="p-6">{item.age}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
          </div>
      );
}

export default DisplayPatientResult