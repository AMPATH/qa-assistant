// import data from '../data/mockData'


const DisplayPatientResult = ({patients, totalPatients}) => {


      return (
        <div className="mt-20">
          <p className="ml-28 mb-4">{totalPatients.length} Patients found</p>
              <table className="table-auto mx-auto bg-white p-4 w-[85%]">
                <thead className="bg-tableHeader">
                  <tr className="m-4">
                    <th className="p-6">No</th>
                    <th className="p-6">Identifiers</th>
                    <th className="p-6">Patient Name</th>
                    <th className="p-6">Gender</th>
                    <th className="p-6">Age</th>
                  </tr>
                </thead>
                <tbody className="m-4">
                  {patients.map((item, index) => (
                    <tr key={index}>
                    <td className="p-8">{item.uuid}</td>
                    <td className="p-8">{item.identifiers[0].cc_number}</td>
                    <td className="p-8">{item.name}</td>
                    <td className="p-8">1961</td>
                    <td className="p-8">{item.age}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
        </div>
      );
}

export default DisplayPatientResult