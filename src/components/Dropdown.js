import React, { useState, useRef } from 'react';

const Dropdown = ({ options, onOptionSelect }) => {
    // States
    const [isOpen, setIsOpen] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([...options]);

    // Refs
    var nameBox = useRef();

    const toggleDropdown = () => {
        setFilteredOptions([...options]);
        setIsOpen(!isOpen);
    };

    const modifyOptions = () => {
        var text = nameBox.current.value;
        
        if (text === "") {
            setSelectedOption("");
            setFilteredOptions(options);
        }
        else {
            const filtered = options.filter((option) => option.name.toLowerCase().includes(text.toLowerCase()));
            setSelectedOption("");
            setFilteredOptions(filtered);
        }
    }

    const selectOption = (option) => {
        nameBox.current.value = option.name;
        setSelectedOption(option);
        setIsOpen(true);
        onOptionSelect(option);
    };

    return (
        <div className="relative w-full">
            <div className="flex space-x-4">
                <input className="px-4 py-2 rounded-xl w-full" type="text" placeholder="Enter a name..." onFocus={toggleDropdown} onChange={modifyOptions} ref={nameBox} />
            </div>
            {
                !isOpen && (
                    <div className="bg-white rounded-xl px-4 py-2 h-[21rem] overflow-y-scroll flex flex-col space-y-1">
                        {
                            filteredOptions.map((option, index) => (
                                <button className="w-full text-left" onClick={() => selectOption(option)} key={index}>{option.name}</button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Dropdown;