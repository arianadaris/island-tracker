import React from 'react';

import Layout from '../components/Layout';
import List from '../components/Tasks/TaskList';
import VillagerList from '../components/Tasks/VillagerList';

const Tasks = () => {
    return (
        <Layout>
            <div className="w-full flex space-x-4">
                <div className="w-1/2 h-screen p-4">
                    <List />
                </div>
                <div className="w-1/2 h-screen p-4 pr-10">
                    <VillagerList />
                </div>
            </div>
        </Layout>
    );
};

export default Tasks;