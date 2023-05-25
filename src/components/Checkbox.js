import React, { useState } from 'react';

function Checkbox({ index, label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor="checkbox" className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={index}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="ml-2 text-brown">{ label }</span>
    </label>
  );
}

export default Checkbox;