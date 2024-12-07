import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut} from 'lucide-react';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logos/logo.png';
import whoweare from '../assets/images/aboutus/whoweare.svg';
import cofounder from '../assets/images/aboutus/co-founder.svg';
import './Aboutus.css';
import DefaultAvatar from './DefalutAvater';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';


const Aboutus = () => {
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

    const services = [
        {
            icon: "🎓",
            title: "We Educate",
            description: "where to educate others, if there is anyone who wants to learn about animal welfare, we are ready to be educated by the struggles of our community service."
        },
        {
            icon: "⚕️",
            title: "We Cure",
            description: "We have grown from a small act of charity with one vet to a well-established shelter with more than 2500 animals treated by us."
        },
        {
            icon: "🤝",
            title: "We Collaborate",
            description: "willing participants to progress more and more, we are ready to collaborate with anyone who wants to help the animals. Share some love and many more."
        },
        {
            icon: "🐾",
            title: "We Prevent",
            description: "control rabies and zoonotic spread while maintaining animal welfare through birth control, vaccination, and education."
        }
    ];

    const stats = [
        {
            number: "6+",
            label: "years of foundation"
        },
        {
            number: "800+",
            label: "Animal birth control"
        },
        {
            number: "2000+",
            label: "Anti rabies vaccinations"
        }
    ];
    return (
        <>
            <div className='about-us'>
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
                {/* hero section  */}
                <div className="wwah-hero">
                    <div className="wwah-hero-overlay"></div>
                    <div className="wwah-content">
                        <h1 className="wwah-title">Who We Are</h1>
                    </div>
                </div>
                {/* who are we  */}
                <div className="wwa-container">
                    <section className="wwa-hero">
                        {/* <div className="wwa-hero-overlay"></div> */}
                        <div className="wwa-hero-content">
                            <div className="wwa-content-grid">
                                <div className="wwa-text-content">
                                    <div className="wwa-text-section">
                                        <h2 className="wwa-section-title">Who we are?</h2>
                                        <p className="wwa-paragraph">
                                            Sarvoham Animal Foundation is a charitable organization dedicated to the help and welfare of street animals in Bangalore, India. Sarvoham was established in April 2017 by co-founders Haris Ali & Madhusmita Sahu.
                                        </p>
                                    </div>

                                    <div className="wwa-text-section">
                                        <p className="wwa-paragraph">
                                            In the past 6 years, Sarvoham has grown from a small charity effort to a well-established animal welfare organization which has rescued more than 2500 street animals, and homes more than 200 dogs at its shelter.
                                        </p>
                                    </div>

                                    <div className="wwa-text-section">
                                        <p className="wwa-paragraph">
                                            Sarvoham means the harmony between all elements of nature, both human and nonhuman, and the organization is guided by the spirit of harmonious coexistence.
                                        </p>
                                    </div>
                                </div>

                                <div className="wwa-image-container">
                                    <img src={whoweare} alt="Foundation work" className="wwa-main-image" />
                                    {/* <div className="wwa-stat-box">
                                    <div className="wwa-stat-number">66</div>
                                    <p className="wwa-stat-text">
                                        Do not treat others in ways you would not like to be treated
                                    </p>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="cfp-container">
                    <div className="cfp-content">
                        <div className="cfp-image-container">
                            <img
                                src={cofounder}
                                alt="Co-founder with a rescue dog"
                                className="cfp-image"
                            />
                        </div>
                        <div className="cfp-text-content">
                            <h3 className="cfp-title">Meet our Co-founder Priyasnhu</h3>
                            <div className="cfp-description">
                                <p>
                                    As a 9-year-old child, our founder Haris Ali witnessed the death of a puppy he was taking
                                    care of in his street. Despite his best efforts, Haris could not save the puppy's life!
                                    The incident left a deep imprint on his psyche and at that formative age, he decided to dedicate his life to animal help
                                    so that no street animal has to deal with such cruel fate. Sarvoham is the manifestation of
                                    Haris's childhood resolution in which many incredible generous people joined him, and made
                                    Sarvoham what it is today.
                                </p>
                                <p>
                                    Haris is a cyber security specialist who runs a firm that provides security solutions to corporate
                                    clients. So, when he is not busy saving lives, he is securing other people's cyber assets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* why pethouse  */}
                <div className="wph-container">
                    <h2 className="wph-title">Why Pet house</h2>

                    <div className="wph-services">
                        {services.map((service, index) => (
                            <div key={index} className="wph-service-card">
                                <div className="wph-service-icon">{service.icon}</div>
                                <h3 className="wph-service-title">{service.title}</h3>
                                <p className="wph-service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="wph-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="wph-stat-item">
                                <div className="wph-stat-number">{stat.number}</div>
                                <div className="wph-stat-label">{stat.label}</div>
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

export default Aboutus