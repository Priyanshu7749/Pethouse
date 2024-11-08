import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import FaqSection from './FaqSection';
import './MainPage.css';

// Import images
import dog1 from "../assets/images/mainpage/dog1.svg";
import dog2 from "../assets/images/mainpage/dog2.png";
import m1 from "../assets/images/mainpage/m1.png";
import m2 from "../assets/images/mainpage/m2.png";
import m3 from "../assets/images/mainpage/m3.png";
import m4 from "../assets/images/mainpage/m4.png";
import m5 from "../assets/images/mainpage/m5.png";
import dog3 from "../assets/images/mainpage/dog3.png";
import crown from "../assets/images/mainpage/crown.png";
import calendar from "../assets/images/mainpage/cal.svg";
import web from "../assets/images/mainpage/web.svg";
import ad1 from "../assets/images/mainpage/ad1.svg";
import ad2 from "../assets/images/mainpage/ad2.svg";
import ad3 from "../assets/images/mainpage/ad3.svg";
import ad4 from "../assets/images/mainpage/ad4.svg";
import ad5 from "../assets/images/mainpage/ad5.svg";

export default function MainPage() {
    return (
        <>
            <div className='mainpage'>
                <Header />
                {/* pet-adoption-page */}
                <div className="pet-adoption-page">
                    <main className="container2">
                        <div className="content-left">
                            <h1>
                                Heart to Home:
                                <br />
                                <span className="highlight">Adopt a Pet,</span> Save a Life
                            </h1>
                            <p className="mission-statement">
                                Our mission is to connect loving families with animals in need of a
                                forever home. By adopting, you're not just gaining a loyal friend.
                            </p>
                            <button className="view-pets-button">View pets</button>

                            <div className="happy-owners">
                                <div className="rating">
                                    <Star className="star-icon" />
                                    <span>4.9 (1.5k Reviews)</span>
                                </div>
                                <p>Our happy pet owners</p>
                                <div className="owner-avatars">
                                    <img src={m1} alt="Happy pet owner 1" width="40" height="40" />
                                    <img src={m2} alt="Happy pet owner 2" width="40" height="40" />
                                    <img src={m3} alt="Happy pet owner 3" width="40" height="40" />
                                    <img src={m4} alt="Happy pet owner 4" width="40" height="40" />
                                    <img src={m5} alt="Happy pet owner 5" width="40" height="40" />
                                </div>
                            </div>
                        </div>

                        <div className="content-right">
                            <div className="main-image">
                                <img src={dog1} alt="Happy dog" width="300" height="400" className='main-image1' />
                                <div className="stat adopted">
                                    <p>1200+ Adopted</p>
                                </div>
                                <div className="stat centers">
                                    <p>40+</p>
                                    <p>CENTERS</p>
                                </div>
                                <div className="stat rescued">
                                    <p>200+ Rescued</p>
                                </div>
                            </div>
                            <div className="secondary-image">
                                <img src={dog2} alt="Another cute dog" width="200" height="275" />
                            </div>
                        </div>
                    </main>
                </div>
                {/* adoption-journey */}
                <div className="adoption-journey">
                    <h2 className="journey-title">
                        <span>Your pet adoption journey</span>
                    </h2>
                    <div className="journey-content">
                        <div className="pet-image">
                            <img src={dog3} alt="Adoptable dachshund" />
                            <div className="crown-icon"><img src={crown} alt='crown' /></div>
                        </div>
                        <div className="journey-steps">
                            <div className="step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <div className="search-input">
                                        <input type="text" placeholder="Search Pet" />
                                        <button className="globe-button">
                                            <span className="sr-only">Search</span>
                                            🌐
                                        </button>
                                    </div>
                                    <p className='p2'>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number2">2</div>
                                <div className="step-content">
                                    <img src={calendar} alt="Calendar" height={24} />
                                    <p className='p2'>Once you find a pet, click "Adopt Now" to schedule a meeting with owner</p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-number3">3</div>
                                <div className="step-content">
                                    <img src={web} alt='web' />
                                    <p className='p2'>PetHouse will help your pet to settle down in its new home, once you complete the Adoption journey</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="adopt-now-button">Adopt Now</button>
                </div>
                {/* pet-adoption */}
                <div className="pet-adoption">
                    <div className="how-it-works">
                        <h2>How it Works?</h2>
                        <div className="works">
                            <div className="work">
                                <span className="icon">🔍</span>
                                <h3>Search</h3>
                                <p>Simply enter your city start your search</p>
                            </div>
                            <div className="work">
                                <span className="icon">💬</span>
                                <h3>Meet</h3>
                                <p>Schedule your appointment to meet the pet you love</p>
                            </div>
                            <div className="work">
                                <span className="icon">🛒</span>
                                <h3>Adopt</h3>
                                <p>Finally adopt the dog or cat you love</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* adoption-gallery */}
                <div className="adoption-gallery">
                    <h1>Gallery</h1>
                    <div className="image-grid">
                        <img src={ad1} alt="Person with a dog" className="image image-1" />
                        <img src={ad2} alt="Person with a cat" className="image image-2" />
                        <img src={ad3} alt="Hand petting a cat" className="image image-3" />
                        <img src={ad4} alt="Person with a dog outdoors" className="image image-4" />
                        <img src={ad5} alt="Person holding a pet" className="image image-5" />
                    </div>
                    <h2 className="adopt-me-heading">#Adopt Me</h2>
                </div>

                <FaqSection />
            </div>
        </>
    );
}