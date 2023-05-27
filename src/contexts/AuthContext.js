import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [logoutStatus, setLogoutStatus] = useState(false);

    const logout = async() => {
        try {
            await auth.signOut();
            // Perform additional logout-related actions
            setCurrentUser(null);
            setLogoutStatus(false);
        }
        catch (error) {
            console.log('Error logging out:', error);
            throw error;
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user)
            {
                setCurrentUser(user);
                setLogoutStatus(true);
            }
        });
    });

    const value = {
        currentUser,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

// Custom hook to access the AuthContext values
export function useAuth() {
    return useContext(AuthContext);
}