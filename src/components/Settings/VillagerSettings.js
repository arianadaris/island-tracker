import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Icon } from '@iconify/react';
import { useFirebaseQuery, useFirebaseUpdateWithQuery } from '../../hooks/firebaseHooks';

import Modal from '../Modal';
import VillagerModal from './VillagerModal'

const VillagerSettings = () => {
    const { currentUser } = useAuth();
    const { data, isLoading, isError } = useFirebaseQuery();
    const { update, isLoading: updateLoading, isError: updateError } = useFirebaseUpdateWithQuery();

    // States
    const [villagers, setVillagers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (data) {
            setVillagers(data.villagers);
        }
    }, [data]);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const removeVillager = async (villager) => {
        const updatedVillagers = villagers.filter(item => item !== villager);
        await update({attribute: 'villagers', values: updatedVillagers});
    }
    
    return (
        <div className="flex flex-col space-y-6">
            <h1 className="bg-nookLeaf w-fit p-2 rounded-xl">Your Villagers</h1>
            <h3>Add or Remove Villagers</h3>
            <div className="flex">
                {
                    villagers.map((dataItem, index) => {
                        return (
                            <div className="w-fit group relative mr-2" key={index}>
                                <div className='rounded-full p-1 bg-teal/20'>
                                    <img className="w-20 h-20 rounded-full" src={dataItem.img} alt={dataItem.name} />
                                </div>
                                <button className="bg-red-300 hover:bg-red-300 px-2 rounded-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mt-[-0.75rem] hidden group-hover:block" onClick={() => removeVillager(dataItem)}>
                                    <Icon className="w-10 h-10" icon="lucide:x" />
                                </button>
                                <p className="text-center">{ dataItem.name }</p>
                            </div>
                        )

                    })
                }
                <div className="bg-yellow rounded-full p-1 w-20 h-20 flex justify-center items-center hover:bg-darkYellow cursor-pointer" onClick={() => handleOpenModal()}>
                    <Icon className="w-7 h-7" icon="mingcute:add-fill" />
                </div>
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <VillagerModal isOpen={isOpen} />
                </Modal>
            </div>
            <h1 className="bg-nookLeaf w-fit p-2 rounded-xl">Dream Villagers</h1>
        </div>
    )
}

export default VillagerSettings;