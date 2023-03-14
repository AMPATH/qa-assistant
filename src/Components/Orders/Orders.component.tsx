import { useState } from "react";
import Header from "../Header";
import SideNavBar from "../SideNavBar";
import ActiveOrders from "./ActiveOrders";
import VoidedOrders from "./VoidedOrders";

function Orders() {
  const [openTab, setOpenTab] = useState(1);

  const openTabStyle =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 mt-2";
  const closeTabStyle =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 mt-2";

  return (
    <>
      <Header />
      <SideNavBar />
      <div className="">
        <ul className="ml-[25%] text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 flex flex-wrap -mb-px md:w-[60%]">
          <button
            className={openTab === 1 ? openTabStyle : closeTabStyle}
            onClick={() => {
              setOpenTab(1);
            }}
          >
            Active Orders
          </button>
          <button
            className={openTab === 2 ? openTabStyle : closeTabStyle}
            onClick={() => setOpenTab(2)}
          >
            Void Orders
          </button>
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
