import React from "react";
//import '../App.css';


const TextBox = ({tbName, tbType, id}) => {
  return (
    <input id={id} name={tbName} type={tbType} />
  );
}

export default TextBox