import React from 'react'

import '../styles/Product.css'

const Product = ({id, title, image, price, rating}) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
         <small>KES. </small>
         <strong>{price}</strong>
       </p>
       <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <button type="button">Add to Cart</button>
    </div>
  )
}

export default Product
