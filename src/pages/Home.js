import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

import Layout from '../components/Layout';

const Home = () => {
    // States
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setLoggedIn(true);
            }
        });
    });

    return (
        <Layout>
            <div className="flex w-full space-x-4">
                <div className="w-1/2 p-4">
                    <h1>Home</h1>
                    {
                        loggedIn ? 
                        <h1>Logged In!</h1>
                        :
                        <h1>Not logged in.</h1>
                    }
                </div>
                <div className="w-1/2 p-4">

                </div>
            </div>
        </Layout>
    );
};

export default Home;