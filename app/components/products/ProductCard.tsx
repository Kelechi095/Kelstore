"use client";

import { formatPrice } from "@/app/utils/formatPrice";
import { truncateText } from "@/app/utils/truncateText";
import RatingComponent from "./Rating";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

interface ProductCardProps {
  data: any;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const [reviews, setReviews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/${data.id}`);
        setReviews(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getReviews();
  }, [data.id]);

  let rating = 0

  if (reviews.length >= 1) {
    rating = Math.round(reviews
      .map((item: any) => item.rating)
      .reduce((item, acc) => item + acc, 0) / reviews.length)
  } else {
    rating = 0
  }

  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div
        className="flex flex-col items-center w-full gap-1"
        onClick={() => router.push(`/product/${data.id}`)}
      >
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
          <RatingComponent rating={rating} />
        </div>
        {
          <div>
            {reviews.length} {reviews.length !== 1 ? "reviews" : "review"}
          </div>
        }
        <div className="font-bold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
