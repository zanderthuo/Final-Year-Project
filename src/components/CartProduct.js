import React from 'react'

import { useStateValue } from '../StateProvider';



const CartProduct = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="CartProduct">
     <img className="CartProduct__image" src={image} alt="#" />

     <div className="CartProduct__info">
       <p className="CartProduct__title">{title}</p>
       <p className="CartProduct__price">
         <small>KES. </small>
         <strong>{price}</strong>
       </p>
       <div className="CartProduct__rating">
         {Array(rating)
           .fill()
           .map((_, i) => (
             <p>🌟</p>
           ))}
       </div>

     </div>
   </div>
  )
}

export default CartProduct
