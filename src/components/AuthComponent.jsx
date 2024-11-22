import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Navbar from './Navbar';  // Import the Navbar component

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWOPk66R9cK-7XqKF_GjLxVQvP1HRaf0k",
  authDomain: "fuad-b3346.firebaseapp.com",
  projectId: "fuad-b3346",
  storageBucket: "fuad-b3346.appspot.com",
  messagingSenderId: "970625626937",
  appId: "1:970625626937:web:fced037771a4fe8b056ee8",
  measurementId: "G-N7JHXJ77T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthComponent = ({ onUserChange }) => { // Accept a prop for user change
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Sign Up function
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onUserChange(userCredential.user); // Pass user info to the parent
    } catch (error) {
      setError(error.message);
    }
  };

  // Sign In function
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onUserChange(userCredential.user); // Pass user info to the parent
    } catch (error) {
      setError(error.message);
    }
  };

  // Sign Out function
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onUserChange(null); // Clear user info in the parent
    } catch (error) {
      setError(error.message);
    }
  };

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  // Render Sign In/Sign Up form
  return (
    <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-bold text-center">Sign In or Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              className="w-full mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-700"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Dark Mode Toggle */}
        <label className="inline-flex items-center cursor-pointer mt-4">
          <input type="checkbox" className="sr-only" checked={isDarkMode} onChange={toggleTheme} />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700">
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-full bg-blue-600' : ''}`}></div>
          </div>
          <span className="ml-3 text-sm font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </label>
      </div>
    </div>
  );
};

export default AuthComponent;
