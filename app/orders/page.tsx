import React from "react";
import OrdersClient from "./OrdersClient";
import { getOrders } from "@/actions/getOrders";
import { getCurrentUser } from "@/actions/getCurrentUser";
import PleaseLogin from "./PleaseLogin";

const Orders = async () => {
  const currentUser = await getCurrentUser();
  const orders: any = await getOrders();

  if (!currentUser) {
    return <PleaseLogin />;
  }

  console.log(orders)

  return (
    <div>
      <div>
        <OrdersClient orders={orders} />
      </div>
    </div>
  );
};

export default Orders;
