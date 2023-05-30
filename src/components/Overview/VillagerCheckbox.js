import React, { useState } from 'react';

const VillagerCheckbox = ({ image, name, id }) => {
    // States
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className="cursor-pointer flex flex-col space-y-1" onClick={handleCheckboxChange} key={id}>
            <div className={isChecked ? 'divs selected' : 'divs'}>
                <img className="2xl:w-20 lg:w-14 rounded-full" src={image} alt={name} />
            </div>
            <label htmlFor="checkbox" className="flex flex-col space-y-1 justify-center items-center">
            <span className="text-brown">{name}</span>
                <input
                    className="villager-inputs bg-white"
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    readOnly
                />
            </label>
        </div>
    );
};

export default VillagerCheckbox;