import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Header from "../Header";
import SideNavBar from "../SideNavBar";
import ActiveOrders from "./ActiveOrders";
import VoidedOrders from "./VoidedOrders";

function Orders() {
  const [openTab, setOpenTab] = useState(1);

  const { patientData } = useContext(AppContext);
  const uuid = patientData.map((info: any) => info[0].uuid);

  const routeParams = useParams();
  const { id } = routeParams;

  return (
    <>
      <Header />
      <SideNavBar />
      <div className="">
        <ul className="ml-[25%] text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 flex flex-wrap -mb-px md:w-[60%]">
          <Link
            to={uuid.length > 0 ? `/orders/${uuid}` : `/orders/${id}`}
            className={
              openTab === 1
                ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 mt-2"
                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 mt-2"
            }
            onClick={() => {
              setOpenTab(1);
            }}
          >
            <li>Active Orders</li>
          </Link>
          <Link
            to={uuid.length > 0 ? `/orders/${uuid}` : `/orders/${id}`}
            className={
              openTab === 2
                ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 mt-2"
                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 mt-2 ml-2"
            }
            onClick={() => setOpenTab(2)}
          >
            <li>Void Orders</li>
          </Link>
        </ul>
        <div>
          <div className={openTab === 1 ? "block" : "hidden"}>
            <ActiveOrders></ActiveOrders>
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            <VoidedOrders></VoidedOrders>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
