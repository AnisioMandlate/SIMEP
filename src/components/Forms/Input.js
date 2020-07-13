import React from "react";

const Input = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value || ""}
      onChange={props.onChange}
      required={props.required}
    />
  );
};

export default Input;
