import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Icon } from '@iconify/react';
import { useFirebaseQuery } from '../../hooks/firebaseHooks';

const AccountSettings = () => {
    const { currentUser } = useAuth();
    const { data, isLoading, isError } = useFirebaseQuery();

    // States
    const [islandName, setIslandName] = useState('');

    useEffect(() => {
        if (data) {
            setIslandName(data.islandName);
        }
    }, [data]);

    return (
        <div className="flex flex-col space-y-6">
            <h1 className="bg-nookLeaf w-fit p-2 rounded-xl">Your Account</h1>
            <div className="flex space-x-8">
                <p>Island Name: {islandName}</p>
                <button className="px-2">
                    <Icon icon="mingcute:pencil-fill" />
                </button>
            </div>
        </div>
    )
}

export default AccountSettings;