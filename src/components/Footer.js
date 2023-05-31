import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import logo from '../assets/logo.png';

const Footer = () => {
    // Check if logged in user
    const { currentUser } = useAuth();

    return (
        <div className="mt-8 w-full h-[10rem] flex justify-between items-center px-[12rem]">
            {/* Logo */}
            <div className="flex space-x-4 items-center">
                <img className="rounded-2xl h-16" src={logo} alt="Logo" />
                <Link className="text-brown" to={currentUser ? "/overview" : "/"}>Island Tracker</Link>
            </div>
            {/* Copyright */}
            <div className="">
                <p className="text-brown/80">© 2022 Ariana Rajewski</p>
            </div>
            {/* Social Media */}
            <div className="flex space-x-8">
                <a className="p-2 h-fit rounded-full bg-teal hover:bg-darkTeal" href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                    <Icon className="w-8 h-8 text-white" icon="mdi:github" />
                </a>
                <a className="p-2 h-fit rounded-full bg-teal hover:bg-darkTeal" href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                    <Icon className="w-8 h-8 text-white" icon="mdi:linkedin" />
                </a>
                <a className="p-2 h-fit rounded-full bg-teal hover:bg-darkTeal" href="https://dribbble.com/arianadaris" target="_blank" rel="noreferrer">
                    <Icon className="w-8 h-8 text-white" icon="mdi:dribbble" />
                </a>
            </div>
        </div>
    );
};

export default Footer;