"use client";
import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";
import { CartProductType } from "../components/products/ProductDetails";
import { formatPrice } from "../utils/formatPrice";
import { formatDate } from "../utils/formatDate";
import { MdPendingActions } from "react-icons/md";

const OrdersClient = ({ orders }: any) => {
  return (
    <div>
      <Wrapper>
        {!orders || orders.length === 0 ? (
          <Heading title="You have no orders yet" />
        ) : (
          <Heading title="Your orders" />
        )}
        {orders &&
          orders.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 border rounded-md border-slate-400 p-4 mt-3"
            >
              <div className="text-sm flex flex-col gap-1">
                <h4 className="text-base font-semibold mb-2">Overview</h4>
                <p><span className="font-normal">Total Items: </span> {item.totalItems}</p>
                <p>Amount: {formatPrice(item.amount)}</p>
                <div className="flex items-center gap-1">Status: {item.status} <MdPendingActions className="text-green-500" /></div>
                <p>Date Created: {formatDate(item.dateCreated)}</p>
              </div>
              <hr />
              <h4 className="font-semibold">Products</h4>
              <div className="flex flex-col gap-3">
                {item.products.map(
                  (product: CartProductType, index: number) => (
                    <div key={index}>
                      <div>
                        <p className="text-sm">{product.name}</p>
                        <p className="text-sm">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
      </Wrapper>
    </div>
  );
};

export default OrdersClient;
