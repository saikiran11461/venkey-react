import React from 'react'

const ProductList = ({id,title,price}) => {
  return (
    <div>
        <h1> <span>{id}</span>{title}</h1>
        <h2>{price}</h2>
    </div>
  )
}

export default ProductList