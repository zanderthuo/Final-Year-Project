import React from 'react'
import Logo from '../assets/logo.png'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo" sm>
          <img src={Logo} alt="" />
          <br /> <br />
          <div className="footer__contacts">
            <ul>
              <li>
                <LocationOnIcon />
                <span>  Juja, Kiambu</span>
              </li>
              <br />
              <li>
                <PhoneIcon />
                <span>  +254711000000</span>
              </li>
              <br />
              <li>
                <EmailIcon />
                <span>  Test@test.com</span>
              </li>
            </ul>
          </div>
        </div>
        <br />
      </div>
      <hr />
      <div className="footer__bottom">
        <p>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
