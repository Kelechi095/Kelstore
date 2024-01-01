"use client";

import Link from "next/link";
import { useCart } from "../hooks/useCart";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "../utils/formatPrice";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalQty, cartTotalAmount } =
    useCart();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleCheckOut = async () => {
    setIsLoading(true);
    try {
      const order = {
        products: cartProducts,
        amount: cartTotalAmount,
        totalItems: cartTotalQty,
        status: "Pending",
      };

      await axios.post("/api/orders", order);
      router.push("/orders");
      toast.success("Order added");
      handleClearCart()
      setIsLoading(false)
      router.refresh();
    } catch (err) {
      toast.error("Something went wrong");
      setIsLoading(false)
    }
  };

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your Cart is Empty</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => (
            <div key={item.id}>
              <ItemContent key={item.id} item={item} />
            </div>
          ))}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div>
          <Button
            label="Clear Cart"
            small
            outline
            onClick={() => handleClearCart()}
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculate at checkout
          </p>
          <Button label={isLoading ? "Loading" : "Checkout"} onClick={handleCheckOut} />
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
