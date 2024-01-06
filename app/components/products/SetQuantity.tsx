"use client";

import { CartProductType } from "./ProductDetails";
import { TbSquareChevronLeft } from "react-icons/tb";
import { TbSquareChevronRight } from "react-icons/tb";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}


const SetQuantity = ({
  cartProduct,
  cartCounter,
  handleQtyDecrease,
  handleQtyIncrease,
}: SetQuantityProps) => {
  return (
    <div className="flex mt-2 gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY: </div>}
      <div className="flex gap-4 items-center text-base">
        <TbSquareChevronLeft size={24} onClick={handleQtyDecrease} className="cursor-pointer hover:text-rose-500"/>
        <div>{cartProduct.quantity}</div>
        <TbSquareChevronRight size={24} onClick={handleQtyIncrease} className="cursor-pointer hover:text-lime-500"/>
      </div>
    </div>
  );
};

export default SetQuantity;
