
import { getCurrentUser } from "@/actions/getCurrentUser";
import HomeBanner from "./components/HomeBanner";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/products/ProductCard";
import { getProducts } from "@/actions/getProducts";
import { getProductsx } from "@/actions/getProducts";


export default async function Home() {
  
 const params = {category: 'all'}

  const products = await getProductsx()

  

  return (
    <div className="p-8">
      <Wrapper>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 2xl:grid-cols-6 gap-8">
          {products?.map((product: any) => (
            <div key={product.id}>
              <ProductCard data={product}/>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}
