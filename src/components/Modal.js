import React from 'react';
import { Icon } from '@iconify/react';

const Modal = ({ isOpen, onClose, children }) => {
    const openStyle = "block bg-black/20 w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
    const closeStyle = "hidden";

    return (
        <div className={`${isOpen ? openStyle : closeStyle}`}>
            <div className="bg-lightBlue w-1/4 h-fit shadow-[0_4px_4px_rgba(0,0,0,0.1)] p-8 rounded-xl absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                <button className="bg-blue-400 p-2 absolute right-0 mr-8" onClick={onClose}>
                    <Icon className="w-5 h-5" icon="lucide:x" />
                </button>
                { children }
            </div>
        </div>
    );
};

export default Modal;