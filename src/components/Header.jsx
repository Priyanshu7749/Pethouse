import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logos/logo.png";
import './Header.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="PetHouse Logo" className="mainpage-logo" />
                    </div>

                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-links">
                            <li><Link to='/'><a className="nav-link">Home</a></Link></li>
                            <li><Link to='/adoptionsearch'><a  className="nav-link">Adopt now</a></Link></li>
                            <li><Link to='/aboutus'><a className="nav-link">About Us</a></Link></li>
                            <li><Link to='/community'><a className="nav-link">Community</a></Link></li>
                        </ul>

                        <div className="nav-buttons">
                            <button className="contact-button">Contact us</button>
                            <Link to="/login">
                                <button className="login-button">Login/Signup</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}