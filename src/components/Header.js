import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

import logo from '../assets/logo.png';

const Header = () => {
    // Navigation
    const navigate = useNavigate();

    // States
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log(user.uid);
                setLoggedIn(true);
            }
        });
    });

    // Handle signout
    const handleSignout = async () => {
        console.log('Signing out');
        await signOut(auth);
        navigate('/');
    }

    return (
        <div className="flex items-center justify-between mb-6 px-12 py-2">
            <div className="flex space-x-4 items-center">
                <img className="rounded-2xl h-20" src={logo} alt="Logo" />
                <a className="text-2xl" href="/">Island Tracker</a>
            </div>
            <div className="flex space-x-12">
                <div className="group relative">
                    <a href="/">Overview</a>
                    <div className="navItem-hover"></div>
                </div>
                <div className="group relative">
                    <a href="/tasks">Tasks</a>
                    <div className="navItem-hover"></div>
                </div>
                <div className="group relative">
                    <a href="/">Villagers</a>
                    <div className="navItem-hover"></div>
                </div>
                {
                    loggedIn ?                 
                    <div className="group relative">
                        <a href="/account">Account</a>
                        <div className="navItem-hover"></div>
                    </div>
                    :
                    <div className="group relative">
                        <a href="/login">Login</a>
                        <div className="navItem-hover"></div>
                    </div>
                }
                {
                    loggedIn ?                 
                    <div className="group relative cursor-pointer" onClick={() => handleSignout()}>
                        <p className="text-lg">Log Out</p>
                        <div className="navItem-hover"></div>
                    </div>
                    :
                    <div className="group relative">
                        <a href="/signup">Sign Up</a>
                        <div className="navItem-hover"></div>
                    </div>
                }
            </div>

        </div>
    );
};

export default Header;