import React from "react";

const Input = (props) => {
  //   function handleChange() {
  //     const { name, value } = event.target;
  //     this.steState({
  //       [name]: value,
  //     });
  //   }
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      defaultValue={props.value}
      //   onChange={handleChange}
    />
  );
};

export default Input;
