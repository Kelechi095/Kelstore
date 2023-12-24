import React from 'react'
import { product } from '@/app/utils/product'
import Wrapper from '@/app/components/Wrapper'
import ProductDetails from '@/app/components/products/ProductDetails'

interface IParams {
    productId?: string 
}

const Product = ({params}: {params: IParams}) => {
    
  return (
    <div>
        <Wrapper>
            <ProductDetails product={product}/>
            <div>Add Rating</div>
            <div>List</div>
        </Wrapper>
    </div>
  )
}

export default Product