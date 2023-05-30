import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useFirebaseQuery, useFirebaseUpdateWithQuery } from '../../hooks/firebaseHooks';

import Dropdown from '../Dropdown';

const VillagerModal = ({ isOpen }) => {
    const { data, isLoading, isError } = useFirebaseQuery();
    const { update, isLoading: updateLoading, isError: updateError } = useFirebaseUpdateWithQuery();

    // States
    const [villagers, setVillagers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if (isOpen && !villagers.length) {
            const fetchData = async () => {
                fetch("https://acnhapi.com/v1/villagers")
                    .then(res => res.json())
                    .then((result) => {
                        setVillagers(result);
                    });
            };
    
            fetchData();
        }
    }, [isOpen, villagers.length]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const addVillager = async () => {
        if (data) {
            const villagerData = villagers[selectedOption.id];
            const villager = {
                "bday": villagerData.birthday,
                "id": selectedOption.id,
                "img": villagerData.icon_uri,
                "name": selectedOption.name
            };
            const updatedVillagers = [...data.villagers, villager];
            await update({attribute: 'villagers', values: updatedVillagers});
        }
    };

    return (
        <div className="flex flex-col space-y-4">
            <h1>Add A Villager</h1>
            <div className="flex space-x-4 w-full">
                <Dropdown 
                    options={Object.values(villagers).map((nestedDict) => {
                        return {
                            "id": nestedDict["file-name"],
                            "name": nestedDict["name"]["name-EUen"]
                        }
                    })} 
                    onOptionSelect={handleOptionSelect} 
                />
                <button className="p-3 h-fit" onClick={() => addVillager()}>
                    <Icon icon="mingcute:add-fill" />
                </button>
            </div>

        </div>
    );
};

export default VillagerModal;