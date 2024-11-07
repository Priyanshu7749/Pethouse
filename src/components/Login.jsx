import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";  // Import the Firebase config
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

// Importing cat images
import cat1 from "../assets/images/cats/cat1.webp";
import cat2 from "../assets/images/cats/cat2.webp";
import cat3 from "../assets/images/cats/cat3.webp";
import cat4 from "../assets/images/cats/cat4.webp";
import cat5 from "../assets/images/cats/cat5.webp";

// Importing dog images
import dog1 from "../assets/images/dogs/dog1.webp";
import dog2 from "../assets/images/dogs/dog2.webp";
import dog3 from "../assets/images/dogs/dog3.webp";
import dog4 from "../assets/images/dogs/dog4.webp";
import dog5 from "../assets/images/dogs/dog5.jpg";

import logo from "../assets/images/logos/logo.png"
import google from "../assets/images/logos/google.jpg"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Arrays of local cat and dog images
  const catImages = [cat1, cat2, cat3, cat4, cat5];
  const dogImages = [dog1, dog2, dog3, dog4, dog5];
  const navigate = useNavigate();  // Hook for navigation after login

  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in user:", userCredential.user);
      navigate("/");  // Redirect user after successful login
    } catch (error) {
      setError(error.message);
      console.error("Email/Password Sign-In error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Signed in user:", result.user);
      navigate("/");  // Redirect user after successful login
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log("Google Sign-In was closed by the user.");
        setError("The sign-in popup was closed. Please try again.");
      } else {
        console.error("Google Sign-In error:", error);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left Side: login Form */}
      <div className="login-section">
        <div className="login-logo">
          <img src={logo} alt="PetHouse Logo" className="login-logo" />
        </div>
        <h1 className="h1">Welcome back, 👋</h1>
        <p className="p">Welcome back! Please enter your details.</p>

        <button onClick={handleGoogleSignIn} className="login-btn-google" disabled={loading}>
          <img src={google} alt="Google Logo" className="google-logo" />
          Log in with Google
        </button>

        <div className="login-divider">
          <span>or</span>
        </div>

        <form className="login-form" onSubmit={handleEmailPasswordSignIn}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="options">
            <Link to="/forget" className="forgot-password">Forgot password?</Link>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="sign-up">Don't have an account? <Link to='/signup' className="signup-blue">Sign up for free</Link></p>
      </div>

      {/* Right Side: Moving Picture Blocks */}
      <div className="login-right">
        <div className="columns">
          {/* Column 1 - Moving Up with Cat Images */}
          <div className="column">
            {catImages.map((src, index) => (
              <motion.div
                key={index}
                className="picture-block1"
                animate={{ y: [300, -300, 300] }} // Move upwards in a circular loop
                transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              >
                <img src={src} alt={`cat-${index}`} className="picture-block" />
              </motion.div>
            ))}
          </div>

          {/* Column 2 - Moving Down with Dog Images */}
          <div className="column">
            {dogImages.map((src, index) => (
              <motion.div
                key={index}
                className="picture-block1"
                animate={{ y: [-300, 300, -300] }} // Move downwards in a circular loop
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
};

export default Login;