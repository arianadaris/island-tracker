import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useFirebaseQuery, useFirebaseUpdateWithQuery } from '../../hooks/firebaseHooks';

import Checkbox from './Checkbox';
import Input from './AddInput';

const Goals = () => {
    const { data, isLoading, isError } = useFirebaseQuery();
    const { update, isLoading: updateLoading, isError: updateError } = useFirebaseUpdateWithQuery();

    // States
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        if (data) {
            setGoals(data.goals);
        }
    }, [data])

    const addGoal = async (inputBox) => {
        var goalName = inputBox.current.value;
        if (goalName !== '' && !goals.includes(goalName)) {
            // Update goals
            const updatedGoals = [...goals, goalName];
            await update({attribute: 'goals', values: updatedGoals});
            setGoals(updatedGoals);
        }

        inputBox.current.value = "";
    };

    const removeGoal = async (goalName) => {
        const updatedGoals = goals.filter(item => item !== goalName);
        await update({attribute: 'goals', values: updatedGoals});
        setGoals(updatedGoals);
    }

    return (
        <div className="w-full flex flex-col space-y-4 bg-white rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
            <div className="bg-yellow bg-clip-padding bg-cover p-4 rounded-t-xl">
                <h1 className="text-center">Island Goals</h1>
            </div>
            {/* List Div */}
            <ul className="flex flex-col space-y-3 px-14 py-6">
                <Input placeholder="Add a goal..." onClickFunc={addGoal} />
                {
                    goals.map((goalName, index) => (
                        <li className="flex justify-between space-x-4 group" key={index}>
                            <Checkbox label={goalName} index={index} />
                            <button className="px-2 bg-red-200 hidden group-hover:block mt-[-0.5rem]" onClick={() => removeGoal(goalName)}>
                                <Icon icon="lucide:x" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Goals;