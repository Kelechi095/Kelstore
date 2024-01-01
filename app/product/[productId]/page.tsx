import React from "react";
import Wrapper from "@/app/components/Wrapper";
import ProductDetails from "@/app/components/products/ProductDetails";
import ListRating from "@/app/components/products/ListRating";
import { getProductsx } from "@/actions/getProducts";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {

  const products = await getProductsx()

  const product = products?.find((item) => item.id === params.productId);

  return (
    <div>
      <Wrapper>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          {/* <ListRating product={product} /> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Product;
