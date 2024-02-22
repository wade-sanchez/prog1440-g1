import React from "react";
//import '../App.css';


const TextBox = ({tbName, tbType, id, placeholder}) => {
  return (
    <input id={id} name={tbName} type={tbType} placeholder={placeholder} />
  );
}

export default TextBox