import React from 'react'
import Wrapper from '../components/Wrapper'
import CartClient from './CartClient'

const Cart = () => {
  return (
    <div className='pt-8'>
      <Wrapper>
        <CartClient />
      </Wrapper>
    </div>
  )
}

export default Cart