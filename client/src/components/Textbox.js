import React from "react";
//import '../App.css';


const TextBox = ({className, tbName, tbType, id, placeholder, value, onFocus, type, onChange, required, maxlength, oninput}) => {
  return (
    <input className={className} id={id} name={tbName} type={tbType} placeholder={placeholder} maxLength={maxlength} oninput={oninput} value={value} onFocus={onFocus} onChange={onChange} required={required}/>
  );
}

export default TextBox