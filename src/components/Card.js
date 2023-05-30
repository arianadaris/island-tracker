import React from 'react';
import { Icon } from '@iconify/react';

const Card = ({ icon, title, descr }) => {


    return (
        <div className="bg-white w-1/5 h-[17.5rem] rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)] flex flex-col items-center py-4 px-2 space-y-6">
            <div className="bg-darkYellow/50 rounded-full p-2">
                <Icon className="w-10 h-10" icon={ icon } />
            </div>
            <div className="flex flex-col items-center space-y-2">
                <h3>{ title }</h3>
                <p className="text-center text-opacity-80">{ descr }</p>
            </div>
        </div>
    );
};

export default Card;