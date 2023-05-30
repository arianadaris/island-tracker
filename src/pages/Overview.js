import React from 'react';

import Layout from '../components/Layout';
import TaskList from '../components/Overview/TaskList';
import VillagerList from '../components/Overview/VillagerList';
import GoalsList from '../components/Overview/GoalsList';

const Tasks = () => {
    return (
        <Layout>
            <div className="w-full flex space-x-4">
                <div className="w-1/2 h-screen p-4">
                    <TaskList />
                </div>
                <div className="w-1/2 h-screen p-4 pr-10 flex flex-col space-y-4">
                    <VillagerList />
                    <GoalsList />
                </div>
            </div>
        </Layout>
    );
};

export default Tasks;