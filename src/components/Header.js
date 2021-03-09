import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

import NavMenu from './NavMenu';

import Logo from '../assets/logo.png'

import '../styles/Header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__nav__menu">
          <NavMenu
            className="header__nav__menu__icon"
          />
        </div>

        <img
          className="header__logo"
          src={Logo}
          alt="#"
        />

        <div className="header__search">
          <div className='header__search__container'>
            <input className="header__searchInput" type="text" placeholder="Im looking for ..." />
              <button className="header__search__button" type="button">
                <SearchIcon className="header__searchIcon" />
              </button>
          </div>
        </div>

        <div className="header__nav">
          <div className="header__option">
            <PersonIcon className="header__avatar" />
            <span className="header__optionLineOne">Hi, Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>

          <div className="header__optionCart">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__CartCount">0</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
