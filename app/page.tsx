import Wrapper from "./components/Wrapper";
import ProductCard from "./components/products/ProductCard";
import { IProductParams, getProducts } from "@/actions/getProducts";
import NotAllowed from "./components/NotAllowed";
import { getReviewsById } from "@/actions/getReviewsById";
import { Suspense } from "react";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  console.log(products)


  if (products?.length === 0) {
    return <NotAllowed title="No products found" />;
  }

  function shuffleArray(array: any) {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const shuffleProducts = shuffleArray(products);

  const getReviews = async (val: string) => {
    return await getReviewsById(val);
  };

  return (
    <div className="p-8">
      <Wrapper>
        <hr className="mb-4" />
        <Suspense>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 2xl:grid-cols-6 gap-8">
            {shuffleProducts?.map((product: any) => {
              return (
                <div key={product.id}>
                  <ProductCard
                    data={product}
                    reviews={getReviews(product.id)}
                  />
                </div>
              );
            })}
          </div>
        </Suspense>
      </Wrapper>
    </div>
  );
}
