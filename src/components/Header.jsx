import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import logo from "../assets/images/logos/logo.png";
import DefaultAvatar from './DefalutAvater';
import './Header.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCommunityHovered, setIsCommunityHovered] = useState(false);
    const [user, setUser] = useState(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
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
                            <li><Link to='/' className="nav-link">Home</Link></li>
                            <li><Link to='/adoptionsearch' className="nav-link">Adopt now</Link></li>
                            <li><Link to='/aboutus' className="nav-link">About Us</Link></li>
                            <li 
                                className="nav-item-with-subtext"
                                onMouseEnter={() => setIsCommunityHovered(true)}
                                onMouseLeave={() => setIsCommunityHovered(false)}
                            >
                                <Link className="nav-link">Community</Link>
                                <div className={`subtext-container ${isCommunityHovered ? 'visible' : ''}`}>
                                    <Link to='/volunteer' className="subtext-link">Become Volunteer</Link>
                                    <Link to='/community/donor' className="subtext-link">Be the Pet Donor</Link>
                                </div>
                            </li>
                        </ul>

                        <div className="nav-buttons">
                            {/* <button className="contact-button">Contact us</button> */}
                            {user ? (
                                <div className="user-profile">
                                    <button className="profile-button" onClick={toggleProfile} aria-label="Toggle profile menu">
                                        <img 
                                            src={user.photoURL || DefaultAvatar} 
                                            alt="User profile" 
                                            className="user-avatar"
                                        />
                                    </button>
                                    {isProfileOpen && (
                                        <div className="profile-dropdown">
                                            <Link to="/profile" className="profile-link">View Profile</Link>
                                            <button className="logout-button" onClick={handleLogout}>
                                                <LogOut size={18} />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to="/login">
                                    <button className="login-button">Login/Signup</button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

