import React from "react";
import '../App.css';


const TextBox = ({tbName, tbType}) => {
  return (
    <input name={tbName} type={tbType} />
  );
}

export default TextBox