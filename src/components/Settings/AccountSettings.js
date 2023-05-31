import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../contexts/AuthContext';
import { useFirebaseQuery } from '../../hooks/firebaseHooks';

const AccountSettings = () => {
    const { currentUser } = useAuth();
    const { data, isLoading, isError } = useFirebaseQuery();

    return (
        <div className="flex flex-col space-y-6">
            <h1 className="bg-nookLeaf w-fit p-2 rounded-xl">Your Account</h1>
            <div className="table w-full border-spacing-y-8">
                <div className="table-row-group">
                    <div className="table-row">
                        <div className="table-cell whitespace-nowrap pr-4">
                            <h3>Email</h3>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer">
                            <p className="text-brown/80">{data.email}</p>
                            <Icon icon="mingcute:pencil-fill" />
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell whitespace-nowrap pr-4">
                            <h3>Island Name</h3>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer">
                            <p className="text-brown/80">{data.islandName}</p>
                            <Icon icon="mingcute:pencil-fill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;