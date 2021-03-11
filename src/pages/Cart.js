import React from 'react'

import CartProduct from '../components/CartProduct'
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../StateProvider';

import '../styles/Cart.css'

const Cart = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove item from cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }

  return (
    <div className="cart">
    <h1 className="main-ttl"><span>Cart</span></h1>
      <form action="#">
          <div className="cart-items-wrap">
              <table className="cart-items">
                  <thead>
                    <tr>
                        <td className="cart-image">Photo</td>
                        <td className="cart-ttl">Products</td>
                        <td className="cart-price">Price</td>
                        <td className="cart-quantity">Quantity</td>
                        <td className="cart-summ">Summ</td>
                        <td className="cart-del">&nbsp;</td>
                    </tr>
                  </thead>
                  <tbody>
                        {cart.map(item => (
                          <tr>
                          <td className="cart-image">
                            <img src={item.image} />
                          </td>
                          <td className="cart-ttl">
                              <p>{item.title}</p>
                          </td>
                          <td className="cart-price">
                              <b>KES.{item.price}</b>
                          </td>
                          <td className="cart-quantity">
                              <p className="cart-qnt">
                                  <input value="1" type="text" />
                                  <button href="#" className="cart-plus"><i className="fa fa-angle-up"></i></button>
                                  <button href="#" className="cart-minus"><i className="fa fa-angle-down"></i></button>
                              </p>
                          </td>
                          <td className="cart-summ">
                              <b>{item.price}</b>
                              <p className="cart-forone">unit price <b>{item.price}</b></p>
                          </td>
                          <td className="cart-del">
                              <button onClick={removeFromCart} className="cart-remove"></button>
                          </td>
                          </tr>
                        ))}
                  </tbody>
              </table>
          </div>
          <ul className="cart-total">
              <li className="cart-summ">
              <Subtotal />
              </li>
          </ul>
          <div className="cart-submit">
              <div className="cart-coupon">
                  <input placeholder="your coupon" type="text" />
                  <button className="cart-coupon-btn" href="#"><img src="img/ok.png" alt="your coupon" /></button>
              </div>
              <button href="#" className="cart-submit-btn">Checkout</button>
              <button onClick={removeFromCart} className="cart-clear">Clear cart</button>
          </div>
      </form>
    </div>
  )
}

export default Cart
