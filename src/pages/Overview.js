import React from 'react';

import Layout from '../components/Layout';
import TaskList from '../components/Overview/TaskList';
import VillagerList from '../components/Overview/VillagerList';
import GoalsList from '../components/Overview/GoalsList';

const Tasks = () => {
    return (
        <Layout>
            <div className="w-full flex sm:flex-col xl:flex-row space-x-4">
                <div className="xl:w-1/2 sm:w-full h-screen p-4">
                    <TaskList />
                </div>
                <div className="xl:w-1/2 sm:w-full h-screen p-4 pr-10 flex flex-col space-y-4">
                    <VillagerList />
                    <GoalsList />
                </div>
            </div>
        </Layout>
    );
};

export default Tasks;