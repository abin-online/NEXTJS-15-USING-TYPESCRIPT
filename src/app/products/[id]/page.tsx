import Counter from '@/app/component.tsx/Counter'
import React from 'react'

const Products = async ({params} : {params : {id:string}}) => {
  const {id} = await params
    return (
    <div>
      <h1>PRODUCTS : {id}</h1>
      <Counter/>
    </div>
  )
}

export default Products
