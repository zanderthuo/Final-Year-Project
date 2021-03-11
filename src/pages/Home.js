import React from 'react'

import Product from '../components/Product'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

import Slider from '../assets/slider.jpg'
import CreditCard from '../assets/credit-card.png'
import Truck from '../assets/truck.png'
import Safety from '../assets/safety.png'
import Telephone from '../assets/telephone.png'

import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <img
          className="home__container__img"
          src={Slider}
          alt="#"
        />

        <div className="home__row">
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
              title="Kenwood kMix Stand Mixer for Baking"
              price={2390}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>

        <div className="home__row">
          <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={19999}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation)"
              price={9899}
              rating={2}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={59899}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={59899}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={109498}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="feature">
          <div className="feature__container">
            <div className="feature__block">
              <div className="feature__block__image">
                <img src={Truck} alt="#" />
              </div>
              <div className="feature__block__info">
                  <h3>Worldwide Delivery</h3>
                  <p>With sites in 5 languages, we ship to over 200 countries & regions.</p>
              </div>
            </div>
            <div className="feature__block">
              <div className="feature__block__image">
                <img src={CreditCard} alt="#" />
              </div>
              <div className="feature__block__info">
                <h3>Safe Payment</h3>
                <p>Pay with the world’s most popular and secure payment methods.</p>
              </div>
            </div>

            <div className="feature__block">
              <div className="feature__block__image">
                <img src={Telephone} alt="#" />
              </div>
              <div className="feature__block__info">
                <h3>24/7 Help Center</h3>
                <p>Round-the-clock assistance for a smooth shopping experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
