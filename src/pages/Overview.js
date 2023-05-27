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
            <div className="flex w-full space-x-4 px-12">
                <h1>Hello World</h1>
            </div>
        </Layout>
    );
};

export default Home;