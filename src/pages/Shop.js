import React from 'react'

import SideNavigation from '../components/SideNavigation'
import Product from '../components/Product'

import '../styles/Shop.css'

const Shop = () => {
  return (
    <div className="shop__wrapper">
      <div className="shop__navigation">
        <SideNavigation />
      </div>

      <div className="shop__product__list">
        <Product
          title="Lean startup"
          price={1999}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={3}
        />
        <Product
          title="Lean startup"
          price={1999}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={3}
        />
        <Product
          title="Lean startup"
          price={1999}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={3}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={2390}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>


    </div>
  )
}

export default Shop
