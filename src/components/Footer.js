import React from 'react';
import '../styles/Footer.css';


const Footer = () => (
  <footer className="footer">
    <div className="questions">
      <div className="questions-wrapper">
        <div className="questions-text">
          <h3 className="title">Questions</h3>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus massa ac pretium dapibus. Proin consectetur eros id suscipit tristique. </p>
        </div>
      </div>
    </div>
    <div className="support-section">
      <div className="support-wrapper">
        <div className="buy-from-us">
          <h4>Buy from Us</h4>
          <p>Women</p>
          <p>Men</p>
        </div>
        <div className="online-shop">
          <h4>Online Shop</h4>
          <p>How to Buy</p>
          <p>Questions</p>
          <p>Sales</p>
          <p>Delivery cost</p>
          <p>Regulations</p>
        </div>
        <div className="about-us">
          <h4>About Us</h4>
          <p>Who We Are</p>
          <p>Work with Us</p>
          <p>Social Media</p>
          <p>Our Stores</p>
        </div>
        <div className="support">
          <h4>Support</h4>
          <p>Contact</p>
          <p>Find Store</p>
          <p>Customer Service</p>
          <p>Privacy & Cookies</p>
          <p>Security</p>
        </div>
      </div>
    </div>
    <p className="advertising">Made with <i className="fa fa-plus"></i> by Alexander Thuo</p>
  </footer>
);

export default Footer;
