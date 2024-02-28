import React from "react";
//import '../App.css';


const TextBox = ({className, tbName, tbType, id, placeholder, value, onFocus, type}) => {
  return (
    <input className={className} id={id} name={tbName} type={tbType} placeholder={placeholder} value={value} onFocus={onFocus}/>
  );
}

export default TextBox