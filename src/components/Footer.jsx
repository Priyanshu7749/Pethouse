import React from 'react';
import './Footer.css';
import logo from '../assets/images/logos/logo.png';
import insta from '../assets/images/mainpage/insta.svg';
import facebook from '../assets/images/mainpage/facebook.svg';
import x from '../assets/images/mainpage/X.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="PetHouse Logo" />
      </div>
      <div className="footer-section">
        <h2 className='follow-us'>Follow us</h2>
        <div className="social-icons-faq">
          <a href="https://www.instagram.com" className="social-icon instagram" aria-label="Follow us on Instagram">
            <img src={insta} width={24} height={24} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" className="social-icon facebook" aria-label="Follow us on Facebook">
            <img src={facebook} width={24} height={24} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" className="social-icon twitter" aria-label="Follow us on Twitter">
            <img src={x} width={24} height={24} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h2 className='website-name'>PETHOUSE</h2>
        <ul>
          <li><a href="#">Pet Stores</a></li>
          <li><a href="#">Online Pet Shop</a></li>
          <li><a href="#">Buy Membership</a></li>
          <li><a href="#">Customer reviews</a></li>
          <li><a href="#">Report Animal Abuse</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2 className='partner'>Partner</h2>
        <ul className='partner-ul'>
          <li><a href="#">Become a Groomer</a></li>
          <li><a href="#">Become a Trainer</a></li>
          <li><a href="#">Become a Dog Walker</a></li>
          <li><a href="#">Become a Pet Boarder</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2 className='policy'>Policy</h2>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Cancellation Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className='footer-section'>
        <div className="footer-content">
          <div className="line-container">
            <span className="line"></span>
          </div>
          <div className="copyright">
            © Copyright, India
          </div>
          <div className="address">
            <p className='fp1'>Pethouse Animal Store 3rd Floor, Bharat Towers Plot No. 45, Sector 21,</p>
            <p>Ahmedabad, Gujarat - 380001</p>
            <p>India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;