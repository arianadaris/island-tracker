import React, { useRef } from 'react';
import { Icon } from '@iconify/react';

const AddInput = ({ placeholder, onClickFunc }) => {
    // Refs
    const inputBox = useRef();

    return (
        <li className="border-b-[1px] flex justify-between space-x-4">
            <input className="w-full bg-inherit" type="text" placeholder={placeholder} ref={inputBox} />
            <button className="p-2 mb-1 hover:bg-darkYellow" onClick={() => onClickFunc(inputBox)}>
                <Icon icon="mingcute:add-fill" />
            </button>
        </li>
    );
};

export default AddInput;