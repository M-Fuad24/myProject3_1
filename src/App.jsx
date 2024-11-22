import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import CQ from './components/CQ'; // Import CQ component
import Contact from './components/Contact'; // Import Contact component
import Navbar from './components/Navbar'; // Import Navbar
import Pricing from './components/Pricing'
import About from './components/About';
function App() {
  const [user, setUser] = useState(null); // Manage user state here

  return (
    <Router>
      {user ? (
        <>
          <Navbar onSignOut={() => setUser(null)} /> {/* Render Navbar if authenticated */}
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Dashboard rendered here */}
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/cq" element={<CQ />} /> {/* Route for CQ component */}
            <Route path="/contact" element={<Contact />} /> {/* Route for Contact component */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      ) : (
        <AuthComponent onUserChange={setUser} /> 
      )}
    </Router>
  );
}

export default App;
