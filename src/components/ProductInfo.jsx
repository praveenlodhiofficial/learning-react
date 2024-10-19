import React from 'react'

const Product = {
    name: "Laptop",
    price: 1000,
    description: "This is a very good laptop."
}

const ProductInfo = () => {
  return (
    <div>
        <h1>{Product.name}</h1>
        <p>The laptop comes at a discounted prize of ${Product.price} </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius assumenda odit incidunt obcaecati. Accusamus officiis quibusdam fugit natus fuga asperiores!. {Product.description}</p>
    </div>
  )
}

export default ProductInfo