"use client";

import { formatPrice } from "@/app/utils/formatPrice";
import { truncateText } from "@/app/utils/truncateText";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  /* const productRating =
    data.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    data.reviews.length;
 */
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1" onClick={() => router.push(`/product/${data.id}`)}>
        <div className="aspect-square overflow-hidden relative w-full ">
          <Image
            fill
            alt={data.image}
            src={data.image}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          {/* <Rating value={productRating} readOnly /> */}
        </div>
        {/* <div>
          {data.reviews.length}{" "}
          {data.reviews.length !== 1 ? "reviews" : "review"}
        </div> */}
        <div className="font-bold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
