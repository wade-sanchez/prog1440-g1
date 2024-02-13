import React from "react";
//import { Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Combo from "../components/ComboBox";
import TextBox from "../components/Textbox";

const YouthLogin = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };
    const navigateRegister = () => {
        navigate('/Register');
    }
    // const d = (Date) => {
    //     let text = d.toString();
    // }
    const printData = () => {
        let fName=document.getElementsByName('fNameTB');
        let lName=document.getElementsByName('lNameTB');
        let dDay=document.getElementsByName('birthDay');
        alert("Username: " + fName[0].value + "\nPassword: " + lName[0].value
        + "\nBirth Day: " + dDay[0].value);
    }
    // TESTING BUTTON TO GET VALUES FROM TEXT BOXES
    return(
     
        <div>
            <h1>Youth Sign-In Page</h1>
            <div>
                <label>First Name: </label>
                {/* <input type="text" /> */}
                <TextBox tbName={'fNameTB'} tbType={'text'}/>
            </div>
            <div>
                <label>Last Name: </label>
                {/* <input type="text" /> */}
                {/* HardCoded TextBox^ */}
                <TextBox tbName={'lNameTB'} tbType={'text'}/>
                {/* Component TextBox^ */}
            </div>
            <div>
                <label>Birth Day: </label>
                {/* <input type="text" /> */}
                {/* HardCoded TextBox^ */}
                <TextBox tbName={'birthDay'} tbType={'date'} />
                {/* Component TextBox^ */}
            </div>
            <div>
                <label>Purpose of Visit: </label>
                {/* <input type="text" /> */}
                {/* HardCoded TextBox^ */}
                <Combo />
                {/* Component TextBox^ */}
            </div>
            <br/>
            <div>
                <button onClick={printData}>Sign In</button>
            </div>
            <br/>
            <div>
                <button onClick={navigateHome}>Return to Home Page</button>
            </div>

            <div>
                <h3>Don't have an account?</h3>
                <h3>First time in our Centre?</h3>
                <h4>Register here</h4>
            </div>
            <div>
                <button onClick={navigateRegister}>Register</button>
            </div>
        </div>
    //    Put Validation, check both combobox for valid site+event, then proceed to sign in
    //    autofill side+event in sign in form (show or not show?)
    )
}

export default YouthLogin