import React from "react";

const Select = (props) => {
  return (
    <select>
      <option>{props.default}</option>
      <option>{props.option1}</option>
      <option>{props.option2}</option>
      <option>{props.option3}</option>
      <option>{props.option4}</option>
    </select>
  );
};

export default Select;
