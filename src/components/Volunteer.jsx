import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logos/logo.png';
import './Volunteer.css';
import DefaultAvatar from './DefalutAvater';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Volunteer = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        city: '',
        goals: '',
        desiredSkills: '',
        pastExperience: '',
        previousVolunteering: ''
    });
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



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };
    return (
        <>
            <div className='volunteer'>
                {/* Header  */}
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

                {/* hero section  */}
                <div className="vol-hero">
                    <div className="vol-hero-overlay"></div>
                    <div className="vol-content">
                        <h1 className="vol-title">Become a Volunteer</h1>
                    </div>
                </div>

                {/* Become a volunteer section */}

                <div className="vf-container">
                    <form className="vf-form" onSubmit={handleSubmit}>
                        <h1 className="vf-title">Volunteer application</h1>
                        <p className="vf-subtitle">Please make sure your application is complete. Incomplete applications will not be considered.</p>

                        <div className="vf-field">
                            <label htmlFor="email" className="vf-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="vf-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="vf-field-group">
                            <div className="vf-field">
                                <label htmlFor="firstName" className="vf-label">First name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="vf-input"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="vf-field">
                                <label htmlFor="lastName" className="vf-label">Last name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="vf-input"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="vf-field">
                            <label htmlFor="city" className="vf-label">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="vf-input"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="vf-field">
                            <label htmlFor="goals" className="vf-label">
                                What do you hope to achieve or learn through your volunteering experience with us? *
                            </label>
                            <textarea
                                id="goals"
                                name="goals"
                                className="vf-textarea"
                                value={formData.goals}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="vf-field">
                            <label htmlFor="desiredSkills" className="vf-label">
                                Are there any specific skills or experiences you wish to gain from your time volunteering?
                            </label>
                            <textarea
                                id="desiredSkills"
                                name="desiredSkills"
                                className="vf-textarea"
                                value={formData.desiredSkills}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="vf-field">
                            <label htmlFor="pastExperience" className="vf-label">
                                Describe a past experience where you had to commit to a task or project over a period of time. How did you ensure your responsibilities were met? *
                            </label>
                            <textarea
                                id="pastExperience"
                                name="pastExperience"
                                className="vf-textarea"
                                value={formData.pastExperience}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="vf-field">
                            <label htmlFor="previousVolunteering" className="vf-label">
                                Have you previously engaged in any volunteer or work responsibilities where consistent participation was required? Please describe your role and involvement. *
                            </label>
                            <textarea
                                id="previousVolunteering"
                                name="previousVolunteering"
                                className="vf-textarea"
                                value={formData.previousVolunteering}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="vf-submit">
                            Submit
                        </button>
                    </form>
                </div>
                {/* Footer  */}
                <div className='asfooter'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Volunteer