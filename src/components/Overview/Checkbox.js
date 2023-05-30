import React, { useState } from 'react';

function Checkbox({ index, label }) {
  // States
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor="checkbox" className="flex items-center cursor-pointer w-full" onClick={() => handleCheckboxChange()}>
      <input
        className="task-inputs"
        type="checkbox"
        id={index}
        checked={isChecked}
        readOnly
      />
      <span className="ml-2 text-brown">{ label }</span>
    </label>
  );
}

export default Checkbox;