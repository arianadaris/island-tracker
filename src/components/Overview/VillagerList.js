import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useFirebaseQuery } from '../../hooks/firebaseHooks';

import Checkbox from './VillagerCheckbox';

const VillagerList = () => {
    const { currentUser } = useAuth();
    const { data, isLoading, isError } = useFirebaseQuery();

    // States
    const [villagers, setVillagers] = useState([]);

    useEffect(() => {
        if (data) {
            setVillagers(data.villagers);
        }
    }, [data]);

    const handleReset = () => {
        var checkboxes = document.getElementsByClassName('villager-inputs');
        for(let i = 0; i < checkboxes.length; i++)
            checkboxes[i].checked = false;
    
        // className={isChecked ? 'villager-backgrounds rounded-full p-1 bg-nookLeaf' : 'rounded-full p-1 bg-teal/70'}
        var divs = document.getElementsByClassName('divs');
        for(let i = 0; i < divs.length; i++) {
            divs[i].classList.remove('selected');
        }
    }

    const gridItems = villagers.map((villager, index) => (
        <div className="w-fit group relative mr-2 mb-4" key={index}>
            <Checkbox image={villager.img} name={villager.name} id={index} />
        </div>
    ));

    return (
        <div className="w-full flex flex-col space-y-4 bg-teal/30 p-4 rounded-xl">
            <div className="flex justify-between">
                <h1>Talk to 'em!</h1>
                <button className="" onClick={() => handleReset()}>
                    Reset
                </button>
            </div>
            <div className="flex justify-center items-center 2xl:space-x-4 lg:space-x-6">
                {gridItems.length !== 0 ? gridItems : <p>You need to add some villagers! <Link className="text-blue-500 text-base hover:text-blue-400" to="/account">Go to Account</Link></p>}
            </div>
        </div>
    );
};

export default VillagerList;