import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import Layout from '../components/Layout';
import AccountSettings from '../components/Settings/AccountSettings';
import VillagerSettings from '../components/Settings/VillagerSettings';

const sectionNames = [
    "Account Overview",
    "Villagers",
]

const Account = () => {
    // States
    const [section, setSection] = useState(0);

    return (
        <Layout>
            <div className="w-full flex space-x-4 px-12">
                <div className="2xl:w-1/4 lg:w-1/3 h-full p-8 flex flex-col space-y-8 bg-yellow rounded-xl">
                    {
                        sectionNames.map((name, index) => (
                            <div className={index === section ? "bg-darkYellow/50 p-2 cursor-pointer hover:bg-darkYellow rounded-xl flex justify-between align-center" : "hover:bg-darkYellow p-2 cursor-pointer rounded-xl flex justify-between align-center"} onClick={() => setSection(index)} key={index}>
                                <h3>{name}</h3>
                                {
                                    index === section ? <Icon className="h-7 w-7" icon="mingcute:right-fill" /> : <></>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="w-full h-full bg-white/60 p-8 rounded-xl">
                    <div className={section === 0 ? 'block' : 'hidden'}>
                        <AccountSettings />
                    </div>
                    <div className={section === 1 ? 'block' : 'hidden'}>
                        <VillagerSettings />
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default Account;