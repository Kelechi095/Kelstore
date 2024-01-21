"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { bannerTexts } from "../utils/bannerTexts";

const HomeBanner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (bannerIndex < 2) {
        setBannerIndex((prev) => prev + 1);
      } else {
        setBannerIndex(0);
      }
    }, 10000);
    return () => {
      clearInterval(id);
    };
  }, [bannerIndex]);

  return (
    <div
      className=" mx-auto grid grid-cols-2 mb-8 rounded-md overflow-hidden
    "
    >
      <div className="h-full md:h-[300px]">
        <Image
          src={
            bannerIndex === 0
              ? "/shop2.jpg"
              : bannerIndex === 1
              ? "/shop4.jpg"
              : "/shop1.jpg"
          }
          alt="banner"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className={`mb-8 md:mb-0 flex text-center p-4 flex-col items-center justify-center h-full
        ${
          bannerIndex === 0
            ? "bg-pink-100"
            : bannerIndex === 1
            ? "bg-sky-100"
            : "bg-gray-100"
        }
    
    `}
      >
        <h1 className="text-lg md:text-3xl font-semibold mb-4 font-sans text-slate-400">
          {bannerTexts[bannerIndex].text1}
        </h1>
        
        <p className="text-xl md:text-4xl font-semibold text-rose-500">
          {bannerTexts[bannerIndex].text2}
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
