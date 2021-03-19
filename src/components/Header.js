import React from 'react'

import { Link } from 'react-router-dom'

import { useStateValue } from '../StateProvider'

import { auth } from '../firebase'

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
  const [{cart, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <div className="header__option">
        <MenuIcon />
      </div>

      <Link to="/">
        <img
            className="header__logo"
            src={Logo}
            alt="#"
        />
      </Link>

      <div className="header__search">
      </div>

      <div className="header__nav">

          <Link className="link" to="/admin">
            <div className="header__option">
              <span className="header__optionLineTwo">Admin</span>
            </div>
          </Link>

        <Link className="link" to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link className="link" to="/shop">
          <div className="header__option">
              <span className="header__optionLineOne">Enter</span>
              <span className="header__optionLineTwo">Shop</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__BasketCount">{cart?.length}</span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Header
