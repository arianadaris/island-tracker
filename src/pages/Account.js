import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import Layout from '../components/Layout';
import AccountSettings from '../components/Settings/AccountSettings';
import TaskSettings from '../components/Settings/TaskSettings';
import VillagerSettings from '../components/Settings/VillagerSettings';

const sectionNames = [
    "Account Overview",
    "Tasks",
    "Villagers",
]

const Account = () => {
    // States
    const [section, setSection] = useState(0);

    return (
        <Layout>
            <div className="w-full flex space-x-4">
                <div className="w-1/4 h-full ml-8 p-8 flex flex-col space-y-8 bg-yellow rounded-xl">
                    {
                        sectionNames.map((name, index) => (
                            <div className={index === section ? "bg-darkYellow/50 p-2 cursor-pointer hover:bg-darkYellow rounded-xl flex justify-between align-center" : "hover:bg-darkYellow p-2 cursor-pointer rounded-xl flex justify-between align-center"} onClick={() => setSection(index)}>
                                <h3>{name}</h3>
                                {
                                    index === section ? <Icon className="h-7 w-7" icon="mingcute:right-fill" /> : <></>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="w-full h-full bg-lightBlue/30 p-8 rounded-xl">
                    <div className={section === 0 ? 'block' : 'hidden'}>
                        <AccountSettings />
                    </div>
                    <div className={section === 1 ? 'block' : 'hidden'}>
                        <TaskSettings />
                    </div>
                    <div className={section === 2 ? 'block' : 'hidden'}>
                        <VillagerSettings />
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default Account;