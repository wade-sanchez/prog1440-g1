import React from "react";
import '../index.css';


const ReusableButton = ({btnText, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default ReusableButton