import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useAuth } from '../../contexts/AuthContext';
import { getAttribute, updateAttribute } from '../../utils/firebaseUtils';

import Dropdown from '../Dropdown';

const VillagerModal = ({ isOpen, onVillagerChange }) => {
    const { currentUser } = useAuth();

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
    });

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const addVillager = () => {
        const fetchAndUpdate = async () => {
            const firebaseVillagers = await getAttribute(currentUser.uid, "villagers");

            const villagerData = villagers[selectedOption.id];
            const result = {
                "bday": villagerData.birthday,
                "id": selectedOption.id,
                "img": villagerData.icon_uri,
                "name": selectedOption.name
            };
            
            const updatedVillagers = [...firebaseVillagers, result];

            await updateAttribute(currentUser.uid, "villagers", updatedVillagers);
            onVillagerChange();
        };

        fetchAndUpdate();
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