import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

import Checkbox from './Checkbox';

const TaskList = () => {
    // States
    const [tasks, setTasks] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    // Refs
    var addTaskBox = useRef();

    useEffect(() => {
        // const storedList = localStorage.getItem('tasks');
        // if (storedList) {
        //     const parsedList = JSON.parse(storedList);
        //     setTasks(parsedList);
        // }

        // Check if logged in
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setLoggedIn(true);

                // Check if user has tasks
                getDoc(doc(db, 'users', user.uid))
                    .then((docSnapshot) => {
                        if(docSnapshot)
                            setTasks(docSnapshot.data().tasks)
                        else
                            console.log('Error')
                    })
            };
        })
    }, []);

    const addTask = () => {
        var taskName = addTaskBox.current.value;
        if (taskName !== '' && !tasks.includes(taskName)) {
            const updatedTasks = [...tasks, taskName];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }

        addTaskBox.current.value = "";
    }

    const removeTask = (taskName) => {
        const updatedTasks = tasks.filter(item => item !== taskName);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const handleReset = () => {
        var checkboxes = document.querySelectorAll('input[type="checkbox"');
        for(let i = 0; i < checkboxes.length; i++)
            checkboxes[i].checked = false;
    }

    return (
        <div className="relative bg-white w-7/8 h-fit pb-6 lg:mx-20 md:mx-8 rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
            <div className="bg-nookLeaf bg-clip-padding bg-cover p-4 rounded-t-xl">
                <h1 className="text-center">Task Board</h1>
            </div>
            {/* List Div */}
            <ul className="flex flex-col space-y-3 px-14 py-6">
                <li className="border-b-[1px] flex justify-between space-x-4">
                    <input className="w-full" type="text" placeholder="Add a task..." ref={addTaskBox} />
                    <button className="p-2 mb-1 hover:bg-darkYellow" onClick={() => addTask()}>
                        <Icon icon="mingcute:add-fill" />
                    </button>
                </li>
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