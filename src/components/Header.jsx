import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // Hook to navigate to other routes

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode); // Toggle dark class
  };

  // Toggle About Us dropdown visibility
  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
  };

  return (
    <header className="bg-[#09D1C7] p-4 shadow-md dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white">DIGITAL AGENCY</div>

        {/* Navigation Menu */}
        <nav className="flex space-x-6 text-sm font-medium text-blue-900 dark:text-gray-300">
          <button className="hover:text-white" onClick={() => navigate("/")}>
            HOME
          </button>
          <button className="hover:text-white" onClick={() => navigate("/pages")}>
            PAGES+
          </button>

          {/* About Us Dropdown */}
          <div className="relative">
            <button 
              className="hover:text-white" 
              onClick={toggleAboutDropdown}
            >
              About Us+
            </button>
            {aboutDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <button 
                  className="block px-4 py-2 text-sm text-blue-900 hover:bg-gray-100" 
                  onClick={() => navigate("/about/whyus")}
                >
                  Why Us
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-blue-900 hover:bg-gray-100" 
                  onClick={() => navigate("/about/ourclients")}
                >
                  Our Clients
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-blue-900 hover:bg-gray-100" 
                  onClick={() => navigate("/about/clientreview")}
                >
                  Client Reviews
                </button>
              </div>
            )}
          </div>

          <button className="hover:text-white" onClick={() => navigate("/portfolio")}>
            PORTFOLIO+
          </button>
          <button className="hover:text-white" onClick={() => navigate("/blog")}>
            BLOG+
          </button>
          <button className="hover:text-white" onClick={() => navigate("/team")}>
            Team+
          </button>
          <button className="hover:text-white" onClick={() => navigate("/casestudy")}>
            Case Study+
          </button>
          <button className="hover:text-white" onClick={() => navigate("/services")}>
            Services+
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Phone Icon */}
          <button
            className="bg-pink-500 text-white rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-pink-600"
            aria-label="Call"
            onClick={() => navigate("/contact")} // Navigate to the contact page
          >
            <i className="fas fa-phone"></i>
          </button>

          {/* Login Button */}
          <button
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-pink-600 hover:to-blue-600"
            onClick={() => navigate("/login")} // Navigate to the login page
          >
            Login
          </button>

          {/* Sun Icon */}
          <button
            className="bg-yellow-400 text-black rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-yellow-500"
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
          >
            <i className="fas fa-sun"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 