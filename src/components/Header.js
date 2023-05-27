import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import logo from '../assets/logo.png';

const loggedInLinks = {
    "Overview": "/",
    "Tasks": "/tasks",
    "Account": "/account"
}

const loggedOutLinks = {
    "Overview": "/",
    "Login": "/login",
    "Signup": "/signup"
}

const Header = () => {
    // Check if logged in user
    const { currentUser, logout } = useAuth();

    // Navigation
    const navigate = useNavigate();

    // Handle signout
    const handleSignout = async () => {
        try {
            console.log('Signing out')
            await logout();
            // Perform addition logout-related actions
            navigate('/', { replace: true });
        }
        catch (error) {
            console.log("Error logging out:", error);
        }
    }

    return (
        <div className="flex items-center justify-between mb-6 px-12 py-2">
            <div className="flex space-x-4 items-center">
                <img className="rounded-2xl h-20" src={logo} alt="Logo" />
                <Link className="text-2xl" to="/">Island Tracker</Link>
            </div>
            {/* Links */}
            <div className="flex space-x-12">
                {
                    currentUser ? 
                    Object.entries(loggedInLinks).map(([key, value, index]) => (
                        <div className="group relative" key={index}>
                            <Link to={value}>{key}</Link>
                            <div className="navItem-hover"></div>
                        </div>
                    ))
                    :
                    Object.entries(loggedOutLinks).map(([key, value, index]) => (
                        <div className="group relative" key={index}>
                            <Link to={value}>{key}</Link>
                            <div className="navItem-hover"></div>
                        </div>
                    ))
                }
                {/* Logout Button */}
                {
                    currentUser?
                    <button className="mt-[-0.25rem]" onClick={() => handleSignout()}>
                        Logout
                    </button>
                    :
                    <>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;