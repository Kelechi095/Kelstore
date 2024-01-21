"use client";

import Link from "next/link";
import { CartProductType } from "../components/products/ProductDetails";
import { formatPrice } from "../utils/formatPrice";
import { truncateText } from "../utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "../hooks/useCart";


interface ItemContentProps {
  item: CartProductType;
}

const ItemContent = ({ item }: ItemContentProps) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();

  return (
    <div className=" text-xs md:text-sm border-t-[1.5px] border-slate-200 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-1 md:gap-2 ">
          <Link href={`/product/${item.id}`}>
            <div className="relative w-[100px]">
              <Image
                src={item.image}
                alt={item.name}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain w-full h-full"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-between md:w-[190px]">
            <Link
              href={`/product/${item.id}`}
              className="mb-1 font-semibold text-[14px] md:text-sm"
            >
              {truncateText(item?.name)}
            </Link>
            <div className="w-[70px]">
              <div className="justify-self-center">
                {formatPrice(item.price)}
              </div>
            </div>
          </div>
        </div>
        <SetQuantity
        cartCounter={true}
        cartProduct={item}
        handleQtyIncrease={() => handleCartQtyIncrease(item)}
        handleQtyDecrease={() => handleCartQtyDecrease(item)}
      />
        <div className="font-semibold flex items-center text-sm gap-2 mt-2 md:block">
          <h4>Total: </h4>
          <h4>{formatPrice(item.price * item.quantity)}</h4>
        </div>
      </div>
      
      <button
        className="text-slate-500 underline mb-2 text-sm"
        onClick={() => handleRemoveProductFromCart(item)}
      >
        Remove
      </button>
    </div>
  );
};

export default ItemContent;
