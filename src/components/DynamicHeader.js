import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logos'; // Update this path

const DynamicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`dynamic-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="PetHouse Logo" className='mainpage-logo' />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </nav>
        <button className="contact-button">Contact us</button>
      </div>
    </header>
  );
};

export default DynamicHeader;