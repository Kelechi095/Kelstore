import React from 'react'
import Wrapper from '../components/Wrapper'
import CartClient from './CartClient'
import { getCurrentUser } from '@/actions/getCurrentUser'

const Cart = async() => {
  const currentUser = await getCurrentUser()
  return (
    <div className='pt-8'>
      <Wrapper>
        <CartClient currentUser={currentUser}/>
      </Wrapper>
    </div>
  )
}

export default Cart