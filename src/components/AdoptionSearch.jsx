import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logos/logo.png';
import dog from '../assets/images/adoptionsearch/dog.svg';
import './AdoptionSearch.css'
import Footer from './Footer';
import dog1 from '../assets/images/adoptionsearch/dog1.svg';
import dog2 from '../assets/images/adoptionsearch/dog2.svg';
import dog3 from '../assets/images/adoptionsearch/dog3.svg';
import dog4 from '../assets/images/adoptionsearch/dog4.svg'
import DefaultAvatar from './DefalutAvater';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function AdoptionSearch() {
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
    const pets = [
        { id: 1, name: "Tiger", image: dog1 },
        { id: 2, name: "Tiger", image: dog2 },
        { id: 3, name: "Tiger", image: dog3 },
        { id: 4, name: "Tiger", image: dog4, details: "puppy" },
        { id: 5, name: "Tiger", image: dog2, details: "7 miles away" },
        { id: 6, name: "Tiger", image: dog1, details: "7 miles away" },
    ];

    return (
        <>
            <div className='adopt-now'>


                {/* Adoption-search header  */}
                <header className={`asheader ${isScrolled ? 'scrolled' : ''}`}>
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
                                        <Link  className="nav-link">Community</Link>
                                        <div className={`subtext-container ${isCommunityHovered ? 'visible' : ''}`}>
                                            <Link to='/volunteer' className="subtext-link">Become Volunteer</Link>
                                            <Link to='/bedonor' className="subtext-link">Pet Adopt</Link>
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
                {/* search section  */}
                <div className="adoption-search">
                    <div className="hero">
                        <h1>Adopt a Stray!</h1>
                    </div>
                    <div className="search-card">
                        <div className="dog-icon">
                            <img src={dog} />
                        </div>
                        <h2>Where would you like to search?</h2>
                        <div className='input-container'>
                            <input type="text" placeholder="Enter city, State, or ZIP" />
                            <input type="text" placeholder="Distance" />
                        </div>
                        <button>Continue</button>
                    </div>
                    <div className="adoption-message">
                        <span className="heart">♥</span>
                        Pet Available for Adoption Nearby
                        <span className="heart">♥</span>
                    </div>
                </div>
                {/* pet-avaliable section  */}
                <div className="pet_avaliable-container">
                    <h1 className="title">Pet Available for Adoption Nearby</h1>
                    <div className="pet-grid">
                        {pets.map((pet) => (
                            <div key={pet.id} className="pet-card">
                                <div className="image-container">
                                    <img src={pet.image} alt={pet.name} className="aspet-image" />
                                    <button className="like-button" aria-label="Like">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heart-icon">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="pet-info">
                                    <h2 className="pet-name">{pet.name}</h2>
                                    {pet.details && <p className="pet-details">{pet.details}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* footer section  */}
                <div className='asfooter'>
                    <Footer />
                </div>
            </div>
        </>
    )
}