import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [privileges, setPrivileges] = useState([]);

  interface Order {
    orderNumber: string;
    order: string;
    date: string;
    orderer: string;
    urgency: string;
    orderUuid: string;
  }

  let uuid = "221fdb15-a647-4b47-83bb-b8c49d66871c";

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();

    const data = localStorage.getItem("userInformation");
    const userInformationObject = JSON.parse(data as string);
    const { user } = userInformationObject;

    setPrivileges(user.privileges);
  }, []);

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

      setOrders(currentOrders);
    } else {
      alert("User lacks required privileges");
    }
  };

  return (
    <div className="w-full h-screen p-8 bg-slate-100 mt-28 overflow-y-hidden overflow-x-hidden">
      {orders.length > 0 ? (
        <>
          <div className="ml-44 ">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Active Orders
            </h2>
            <h2>{orders.length} orders found</h2>
            <table className="w-full bg-white">
              <thead>
                <tr>
                  <th className="">Order Number</th>
                  <th className="text-left">Order</th>
                  <th className="">Date Activated</th>
                  <th className="">Ordered By</th>
                  <th className="">Urgency</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderUuid}>
                    <td className="text-center">{order.orderNumber}</td>
                    <td className="">{order.order}</td>
                    <td className="text-center">{order.date}</td>
                    <td className="text-center">{order.orderer}</td>
                    <td className="text-center">{order.urgency}</td>
                    <td className="text-center">
                      <button
                        className="bg-cyan-900 text-white hover:bg-cyan-700 font-bold py-2 px-4 rounded-sm"
                        onClick={() => handleVoidOrder(order.orderUuid)}
                      >
                        Void
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Orders;
