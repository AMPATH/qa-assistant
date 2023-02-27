import { useContext, useEffect, useState } from "react";
import Header from "../Header";
import Pagination from "../Pagination";
import SideNavBar from "../SideNavBar";
import { AppContext } from '../../context/AppContext';
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [privileges, setPrivileges] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [patientsPerPage] = useState<number>(5)
  const [Loading,isLoading] = useState(false)

  const { patientData } = useContext(AppContext)


  interface Order {
    orderNumber: string;
    order: string;
    date: string;
    orderer: string;
    urgency: string;
    orderUuid: string;
  }


   const uuid = patientData.map((info: any) => info[0].uuid)

  // let uuid = "dbdf3009-12ca-4ea9-942a-de6600bf98f2";

  useEffect(() => {
    const fetchData = async () => {
      isLoading(true) 
      const response = await fetch(
        `openmrs/ws/rest/v1/order?patient=${uuid}&v=full`
      );
      const data = await response.json();
      console.log(data);

      const { results } = data;

      const orders = results.map(
        ({
          orderNumber,
          concept,
          dateActivated,
          orderer,
          urgency,
          uuid,
        }: {
          orderNumber: string;
          concept: { display: string };
          dateActivated: string;
          orderer: { display: string };
          urgency: string;
          uuid: string;
        }) => ({
          orderNumber: orderNumber,
          order: concept.display,
          date: new Date(dateActivated).toLocaleDateString("en-GB"),
          orderer: orderer.display,
          urgency: urgency,
          orderUuid: uuid,
        })
      );

      setOrders(orders);
      isLoading(false) 
    };

    fetchData();

    const data = localStorage.getItem("userInformation");
    const userInformationObject = JSON.parse(data as string);
    const { user } = userInformationObject;

    setPrivileges(user.privileges);
  }, []);

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatients = indexOfLastPatient - patientsPerPage;
  const currentOrders = orders.slice(indexOfFirstPatients, indexOfLastPatient)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleVoidOrder = async (uuid: string) => {
    const canDeleteOrders = privileges.find(
      (privilege: { name: string }) => privilege.name === "Delete Orders"
    );

    if (canDeleteOrders) {
      //403 (Forbidden)
      //User is logged in but doesn't have the relevant privilege [Privileges required: Purge Orders]
      // const response = await fetch(
      //   `/openmrs/ws/rest/v1/order/${uuid}?purge=true`,
      //   {
      //     method: "DELETE",
      //   }
      // );

      // if (response.ok) {
      //   console.log("deleted");
      // }
      const currentOrders = orders.filter((order) => {
        return order.orderUuid !== uuid;
      });
            swal({
              title:'Order deleted!',
              text:"successfully",
              icon:"success",
          })

      setOrders(currentOrders);
    } else {
      swal({
        title:'User lacks privilege',
        text:"Unauthourized",
        icon:"error",
    })
    }
  };

  const patientName = patientData.map((info: any = {}) => info[0].person.preferredName.display)

  return (
    <>
        <Header />
      <SideNavBar />
      {Loading ? <div className="flex items-center ml-[15%] p-4 mt-4 text-2xl"><ClipLoader size={50} color ="blue"/></div>: (
    <div className="w-full h-screen p-8 bg-slate-100 overflow-y-hidden overflow-x-hidden">
    {orders.length > 0 ? (
      <>

               <div className="ml-[15%] ">
                  <h2 className="text-2xl text-center">
                    Active Orders for <span className="font-bold text-blue-500">{patientName}</span>
                  </h2>
                  <h2 className="p-4"><strong>{orders.length}</strong> orders found</h2>
                  <table className="w-[90%] p-8 bg-white mt-2">
                    <thead >
                      <tr>
                        <th className="">Order Number</th>
                        <th className="text-left">Order</th>
                        <th className="">Date Activated</th>
                        <th className="">Ordered By</th>
                        <th className="">Urgency</th>
                        <th className="">Action</th>
                      </tr>
                    </thead>
                    <tbody className="p-2">
                      {currentOrders.map((order) => (
                        <tr key={order.orderUuid}>
                          <td className="text-center">{order.orderNumber}</td>
                          <td className="">{order.order}</td>
                          <td className="text-center">{order.date}</td>
                          <td className="text-center">{order.orderer}</td>
                          <td className="text-center">{order.urgency}</td>
                          <td className="text-center">
                            <button
                              className="bg-cyan-900 text-white hover:bg-cyan-700 font-bold py-2 m-4 px-4 rounded-sm"
                              onClick={() => handleVoidOrder(order.orderUuid)}
                            >
                              Void
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination patientsPerPage={patientsPerPage} 
                              totalPatients={orders.length}
                              paginate={paginate}/>
                </div>
      </>
    ) : (
      <div className="ml-[15%] p-4">
        <h2 className="text-2xl p-5 underline">Whoops!</h2>
      <p className="text-lg italic">No orders found for this patient</p>
      </div>
    )}
   </div>
     )}
    </>
  );
}

export default Orders;
