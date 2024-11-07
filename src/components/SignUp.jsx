import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";  // Import the Firebase config
import { signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import "./SignUp.css";

// Importing cat and dog images
import cat1 from "../assets/images/cats/cat1.webp";
import cat2 from "../assets/images/cats/cat2.webp";
import cat3 from "../assets/images/cats/cat3.webp";
import cat4 from "../assets/images/cats/cat4.webp";
import cat5 from "../assets/images/cats/cat5.webp";
import dog1 from "../assets/images/dogs/dog1.webp";
import dog2 from "../assets/images/dogs/dog2.webp";
import dog3 from "../assets/images/dogs/dog3.webp";
import dog4 from "../assets/images/dogs/dog4.webp";
import dog5 from "../assets/images/dogs/dog5.jpg";
import logo from "../assets/images/logos/logo.png";
import google from "../assets/images/logos/google.jpg";

function SignUp() {
    const navigate = useNavigate();  // Hook for navigation after login
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            alert("Verification email sent. Please check your inbox and verify your email before logging in.");
            // Optionally, you can redirect to a "verify email" page here
            // navigate("/verify-email");
            
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // Successfully signed in
            console.log(result.user);
            if (result.user.emailVerified) {
                navigate("/");  // Redirect user after successful login
            } else {
                alert("Please verify your email before logging in.");
            }
        } catch (error) {
            if (error.code === 'auth/popup-closed-by-user') {
                console.log("Google Sign-In was closed by the user.");
                alert("The sign-in popup was closed before completing the process. Please try again.");
            } else {
                console.error("Google Sign-In error:", error);
                setError(error.message);
            }
        }
    };

    const catImages = [cat1, cat2, cat3, cat4, cat5];
    const dogImages = [dog1, dog2, dog3, dog4, dog5];

    return (
        <div className="signup-container">
            <div className="signup-section">
                <div className="signup-logo">
                    <img src={logo} alt="PetHouse Logo" className="signup-logo" />
                </div>
                <h1 className="h1">Sign up ✨</h1>
                <p className="p">Welcome! Please enter your details.</p>

                <form className="signup-form" onSubmit={handleSignUp}>
                    <input type="text" placeholder="First Name" className="fullname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="Last Name" className="fullname" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    <input type="text" placeholder="Username" className="input" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="tel" placeholder="Phone No." className="input" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="signup-btn">Sign Up</button>

                    <div className="signup-divider">
                        <span>or</span>
                    </div>

                    {/* Google Sign-In Button */}
                    <div onClick={handleGoogleSignIn} className="signup-btn-google">
                        <img src={google} alt="Google Logo" className="google-logo" />
                        Log in with Google
                    </div>
                </form>
            
                <p className="sign-up">
                    If you already have an account <Link to='/login' className="signup-blue">Login</Link>
                </p>
            </div>

            {/* Right Side: Moving Picture Blocks */}
            <div className="signup-right">
                <div className="columns">
                    <div className="column">
                        {catImages.map((src, index) => (
                            <motion.div
                                key={index}
                                className="picture-block1"
                                animate={{ y: [300, -300, 300] }}
                                transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                            >
                                <img src={src} alt={`cat-${index}`} className="picture-block" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="column">
                        {dogImages.map((src, index) => (
                            <motion.div
                                key={index}
                                className="picture-block1"
                                animate={{ y: [-300, 300, -300] }}
                                transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                            >
                                <img src={src} alt={`dog-${index}`} className="picture-block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;