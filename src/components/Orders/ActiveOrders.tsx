import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Pagination from "../Pagination";
import { Order } from "./Order";
import {
  getUser,
  fetchActiveOrders,
  resetVoidedOrders,
} from "./Order.resource";
import { ClipLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

let newVoidOrders: Order[];

function ActiveOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [privileges, setPrivileges] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [patientsPerPage] = useState<number>(5);
  const [Loading, isLoading] = useState(false);
  const [patientNameAfterReload, setPatientNameAfterReload] = useState("");

  const navigate = useNavigate();

  const { patientData } = useContext(AppContext);
  const uuid = patientData.map((info: any) => info[0].uuid);
  const patientName = patientData.map(
    (info: any = {}) => info[0].person.preferredName.display
  );

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatients = indexOfLastPatient - patientsPerPage;
  const currentOrders = orders.slice(indexOfFirstPatients, indexOfLastPatient);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const routeParams = useParams();
  const { id } = routeParams;

  useEffect(() => {
    const fetchingResources = async () => {
      isLoading(true);

      if (uuid.length > 0) {
        const fetchedOrders = await fetchActiveOrders(uuid);
        setOrders(fetchedOrders);
        isLoading(false);

        const user = getUser();
        setPrivileges(user.privileges);
      } else {
        if (id) {
          navigate(`/orders/${id}`);

          const response = await fetch(`/openmrs/ws/rest/v1/patient/${id}`);
          const data = await response.json();
          setPatientNameAfterReload(data.person.display);

          const user = getUser();
          setPrivileges(user.privileges);

          const fetchedOrders = await fetchActiveOrders(id);
          setOrders(fetchedOrders);
          isLoading(false);
        } else {
          navigate("..");
        }
      }
    };

    fetchingResources();
  }, [setOrders]);

  const handleVoidOrder = async (
    orderUuid: string,
    privileges: any,
    uuid: any
  ) => {
    const canDeleteOrders = privileges.find(
      (privilege: { name: string }) => privilege.name === "Delete Orders"
    );

    if (canDeleteOrders) {
      swal("Are you sure you want to void this order?", {
        buttons: ["No", "Yes"],
      }).then(async (willDelete: any) => {
        if (willDelete) {
          const response = await fetch(
            `/openmrs/ws/rest/v1/order/${orderUuid}?!purge`,
            {
              method: "DELETE",
            }
          ).then(async (response) => {
            if (response.ok) {
              swal("Order has been voided", {
                icon: "success",
              });

              const currentOrders = orders.filter(
                (order) => order.orderUuid !== orderUuid
              );
              setOrders(currentOrders);

              newVoidOrders = await resetVoidedOrders(uuid);
            } else if (response.status === 504) {
              swal("Request is taking too long, try refreshing the page", {
                icon: "error",
              });
            } else {
              swal("Unable to void order", {
                icon: "error",
              });
            }
          });
        } else {
          swal("Order has not been voided");
        }
      });
    } else {
      swal({
        title: "User lack priviledge",
        text: "Unathourized",
        icon: "error",
      });
    }
  };

  return (
    <>
      {Loading ? (
        <div className="flex items-center ml-[15%] p-4 mt-4 text-2xl">
          <ClipLoader size={50} color="blue" />
        </div>
      ) : (
        <div className="w-full h-screen p-8 bg-slate-100 overflow-y-hidden overflow-x-hidden">
          {orders.length > 0 ? (
            <>
              <div className="ml-[15%] ">
                <h2 className="text-2xl text-center">
                  Active Orders for{" "}
                  <span className="font-bold text-blue-500">
                    {patientName.length > 0
                      ? patientName
                      : patientNameAfterReload}
                  </span>
                </h2>
                <h2 className="p-4 ml-32 mb-2 mt-4">
                  {orders.length === 1 ? (
                    <strong>{orders.length} order found </strong>
                  ) : (
                    <strong>{orders.length} orders found </strong>
                  )}
                </h2>
                <div className="md:ml-32 relative overflow-x-auto shadow-md sm:rounded-lg md:w-[90%] md:mx-auto mt-8">
                  <table className=" lg:w-full mx-auto text-sm text-left">
                    <thead className="text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="py-5 text-center">Order Number</th>
                        <th className="text-left py-5">Order</th>
                        <th className="py-5 text-center">Date Activated</th>
                        <th className="py-5 text-center">Ordered By</th>
                        <th className="py-5 text-center">Urgency</th>
                        <th className="py-5 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentOrders.map((order) => (
                        <tr
                          key={order.orderUuid}
                          className="bg-white border-b hover:text-blue-500 hover:cursor-pointer"
                        >
                          <td className="px-6 py-4 text-center">
                            {order.orderNumber}
                          </td>
                          <td className="text-left py-5">{order.order}</td>
                          <td className="px-6 py-4 text-center">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {order.orderer}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {order.urgency}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              className="bg-cyan-900 text-white hover:bg-cyan-700 font-bold py-2 m-4 px-4 rounded-sm"
                              onClick={() =>
                                handleVoidOrder(
                                  order.orderUuid,
                                  privileges,
                                  uuid
                                )
                              }
                            >
                              Void
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  patientsPerPage={patientsPerPage}
                  totalPatients={orders.length}
                  paginate={paginate}
                />
              </div>
            </>
          ) : (
            <div className="ml-[15%] p-4">
              <p className="text-lg italic">No orders found for this patient</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export { newVoidOrders };

export default ActiveOrders;
