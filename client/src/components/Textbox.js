import React from "react";
//import '../App.css';


const TextBox = ({className, tbName, tbType, id, placeholder, value, onFocus, type, onChange, required, maxlength}) => {
  return (
    <input className={className} id={id} name={tbName} type={tbType} placeholder={placeholder} maxLength={maxlength} value={value} onFocus={onFocus} onChange={onChange} required={required}/>
  );
}

export default TextBox