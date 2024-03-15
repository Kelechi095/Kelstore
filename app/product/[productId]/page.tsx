import React, { Suspense } from "react";
import Wrapper from "@/app/components/Wrapper";
import ProductDetails from "@/app/components/products/ProductDetails";
import { getProducts } from "@/actions/getProducts";

interface IParams {
  productId?: any;
}

const Product = async ({ params }: { params: IParams }) => {
  const products = await getProducts({ category: null });

  const product: any = products?.find((item) => item.id === params.productId);

  return (
    <div>
      <Wrapper>
        <Suspense>
          <ProductDetails product={product} />
        </Suspense>
      </Wrapper>
    </div>
  );
};

export default Product;
