import React from "react";

const Select = ({ placeholder, options, onChange }) => {
  return (
    <select onChange={onChange}>
      <option disabled selected>
        {placeholder}
      </option>
      {options.map((option, i) => (
        <option key={`${option.value} - ${i}`} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
