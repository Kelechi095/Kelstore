"use client";

import { categories } from "@/app/utils/categories";
import Wrapper from "../Wrapper";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <Suspense>
      <div className="bg-white">
        <Wrapper>
          <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item: any) => (
              <Category
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={
                  category === item.label ||
                  (category === null && item.label === "All")
                }
              />
            ))}
          </div>
        </Wrapper>
      </div>
    </Suspense>
  );
};

export default Categories;
