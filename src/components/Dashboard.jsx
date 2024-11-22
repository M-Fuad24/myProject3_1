import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Quiz from './Quiz'; // Import the Quiz component
import CQ from './CQ'; // Import the CQ component
import Footer from './Footer'; // Import the Footer component

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [isDarkMode, setIsDarkMode] = useState(false); // State for light/dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode class on the body
    if (!isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const handleQuizNavigation = () => {
    // Navigate to the Quiz page
    navigate('/quiz'); // Replace '/quiz' with your desired route
  };

  const handleCQNavigation = () => {
    // Navigate to the CQ page
    navigate('/cq'); // Assuming '/cq' is the route for the CQ component
  };

  return (
    <div className={`flex flex-col justify-between h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-center mt-4"> {/* Centered container for the toggle */}
        <label className="inline-flex items-center cursor-pointer mr-4">
          <input type="checkbox" className="sr-only peer" checked={isDarkMode} onChange={toggleTheme} />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium">Toggle Dark Mode</span>
        </label>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow"> {/* Center content vertically */}
        <h2 className="text-3xl font-bold">Welcome to Your Dashboard</h2>
        <p>This is a secure page accessible only after sign-in.</p>

        <div className="flex items-center mt-6">
          <button
            onClick={handleQuizNavigation} // Navigate to the Quiz component/page
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:outline-none"
          >
            Start Quiz
          </button>
          <button
            onClick={handleCQNavigation} // Navigate to the CQ component
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 focus:outline-none"
          >
            Answer CQ Questions
          </button>
        </div>
      </div>

      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Dashboard;
