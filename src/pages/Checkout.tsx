import React from 'react'
import ProductCard from '../components/ProductCard'
import PRODUCT from '../productInfo'

type Props = {}

const  Checkout = (props:  Props) => {
  return (
    <div className=' flex container mt-8'><ProductCard {...PRODUCT} /></div>
  )
}

export default Checkout