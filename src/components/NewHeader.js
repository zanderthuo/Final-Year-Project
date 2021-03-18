import React from 'react'

import '../styles/NewHeader.css'

const NewHeader = () => {
  return (
    <div className="newHeader">
      <div className="header_top">
        <div className="container">
            <ul className="contactinfo nav nav-pills">
                <li>
                    <i className='fa fa-phone'></i> +7 777 123 1575
                </li>
                <li>
                    <i className="fa fa-envelope"></i> admin@real-web.pro
                </li>
            </ul>
            {/*Social Icons*/}
            <ul className="social-icons nav navbar-nav">
                <li>
                    <a href="http://facebook.com" rel="nofollow" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="http://google.com" rel="nofollow" target="_blank">
                        <i className="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com" rel="nofollow" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="http://vk.com" rel="nofollow" target="_blank">
                        <i className="fa fa-vk"></i>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com" rel="nofollow" target="_blank">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
      </div>

      {/*Shop middle menu*/}
      <div className="header-middle">
        <div className="container header-middle-cont">
          <div className="toplogo">
            <a href="index.html">
                <img src="img/logo.png" alt="#" />
            </a>
            </div>
            <div className="shop-menu">
              <ul>

                <li className="topauth">
                  <a href="auth.html">
                    <i className="fa fa-lock"></i>
                    <span className="shop-menu-ttl">Registration</span>
                  </a>
                  <a href="auth.html">
                    <span className="shop-menu-ttl">Login</span>
                  </a>
                </li>

                <li>
                    <div className="h-cart">
                        <a href="cart.html">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="shop-menu-ttl">Cart</span>
                            (<b>0</b>)
                        </a>
                    </div>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/*Header Bottom*/}

        <div className="header-bottom">
          <div className="container">
            <nav className="topmenu">

                {/*<!-- Catalog menu - start -->*/}
                <div className="topcatalog">
                    <a className="topcatalog-btn" href="catalog-list.html"><span>All</span> catalog</a>
                    <ul className="topcatalog-list">
                        <li>
                            <a href="catalog-list.html">
                                Women
                            </a>
                            <i className="fa fa-angle-right"></i>
                            <ul>
                                <li>
                                    <a href="catalog-list.html">
                                        Knitwear
                                    </a>
                                </li>
                                <li>
                                    <a href="catalog-list.html">
                                        Dresses
                                    </a>
                                </li>
                                <li>
                                    <a href="catalog-list.html">
                                        Bags
                                    </a>
                                    <i className="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <a href="catalog-list.html">
                                                Shoulder Bags
                                            </a>
                                        </li>
                                        <li>
                                            <a href="catalog-list.html">
                                                Falabella
                                            </a>
                                        </li>
                                        <li>
                                            <a href="catalog-list.html">
                                                Becks
                                            </a>
                                        </li>
                                        <li>
                                            <a href="catalog-list.html">
                                                Clutches
                                            </a>
                                        </li>
                                        <li>
                                            <a href="catalog-list.html">
                                                Travel Bags
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="catalog-list.html">
                                        Accessories
                                    </a>
                                    <i className="fa fa-angle-right"></i>
                                    <ul>
                                        <li>
                                            <a href="catalog-list.html">
                                                Sunglasses
                                            </a>
                                        </li>
                                        <li>
                                            <a href="catalog-list.html">
                                                Tech Cases
                                            </a>
                                        </li>
                                        <li>
                                            <a href="catalog-list.html">
                                                Jewelry
                                            </a>
                                        </li>
                                        <li>
                                            <a href="catalog-list.html">
                                                Stella
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="catalog-list.html">
                                        Coats & Jackets
                                    </a>
                                </li>
                            </ul>
                        </li>



                    </ul>
                </div>
                {/*<!-- Catalog menu - end -->*/}

                {/*<!-- Main menu - start -->*/}
                <button type="button" className="mainmenu-btn">Menu</button>

                <ul className="mainmenu">
                    <li>
                        <a href="index.html" className="active">
                            Home
                        </a>
                    </li>
                    {/*menu-item-has-children*/}
                </ul>

                {/*search*/}
                <div className="topsearch">
                    <a id="topsearch-btn" className="topsearch-btn" href="#"><i className="fa fa-search"></i></a>
                    <form class="topsearch-form" action="#">
                        <input type="text" placeholder="Search products" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                {/*<!-- Search - end -->*/}

            </nav>
          </div>
        </div>

      </div>
  )
}

export default NewHeader
