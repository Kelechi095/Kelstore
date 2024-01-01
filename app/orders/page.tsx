import { getOrders } from "@/actions/getOrders";
import React from "react";
import OrdersClient from "./OrdersClient";
import { getCurrentUser } from "@/actions/getCurrentUser";
import PleaseLogin from "./PleaseLogin";

const Orders = async () => {
  const currentUser = await getCurrentUser();
  const orders = await getOrders();

  if (!currentUser) {
    return <PleaseLogin />;
  }

  return (
    <div>
      <div>
        <OrdersClient orders={orders} />
      </div>
    </div>
  );
};

export default Orders;
