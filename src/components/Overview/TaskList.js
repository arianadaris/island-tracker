import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useFirebaseQuery, useFirebaseUpdateWithQuery } from '../../hooks/firebaseHooks';

import Checkbox from './Checkbox';
import Input from './AddInput';

const TaskList = () => {
    const { data, isLoading, isError } = useFirebaseQuery();
    const { update, isLoading: updateLoading, isError: updateError } = useFirebaseUpdateWithQuery();

    // States
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (data) {
            setTasks(data.tasks);
        }
    }, [data]);

    const addTask = async (inputBox) => {
        var taskName = inputBox.current.value;
        if (taskName !== '' && !tasks.includes(taskName)) {
            var updatedTasks = [...tasks, taskName];
            await update({attribute: 'tasks', values: updatedTasks});
            setTasks(updatedTasks);
        }

        inputBox.current.value = "";
    }

    const removeTask = async (taskName) => {
        const updatedTasks = tasks.filter(item => item !== taskName);
        await update({attribute: 'tasks', values: updatedTasks});
        setTasks(updatedTasks);
    }

    const handleReset = () => {
        var checkboxes = document.getElementsByClassName('task-inputs');
        for(let i = 0; i < checkboxes.length; i++)
            checkboxes[i].checked = false;
    }

    return (
        <div className="relative bg-white w-7/8 h-fit pb-6 lg:ml-10 rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
            <div className="bg-nookLeaf bg-clip-padding bg-cover p-4 rounded-t-xl">
                <h1 className="text-center">Task Board</h1>
            </div>
            {/* List Div */}
            <ul className="flex flex-col space-y-3 px-14 py-6">
                <Input placeholder="Add a task..." onClickFunc={addTask} />
                {
                    tasks.map((taskName, index) => (
                        <li className="flex justify-between space-x-4 group" key={index}>
                            <Checkbox label={taskName} index={index} />
                            <button className="px-2 bg-red-200 hidden group-hover:block mt-[-0.5rem]" onClick={() => removeTask(taskName)}>
                                <Icon icon="lucide:x" />
                            </button>
                        </li>
                    ))
                }
            </ul>
            {
                tasks.length !== 0 ? <></> : <p className="text-center pt-4 pb-10">You have nothing to do today!</p>
            }
            {/* Reset Day Button */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="group relative hover:cursor-pointer" onClick={() => handleReset()} >
                    <div className="w-[130%] h-12 top-[-0.75rem] left-[-0.75rem] rounded-3xl absolute z-[-1] bg-yellow"></div>
                    <p>Reset Day</p>
                    <div className="navItem-hover"></div>
                </div>
            </div>
        </div>
    );
};

export default TaskList;