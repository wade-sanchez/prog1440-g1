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
    const signIn = () => {
        printData();
        alert("Signed in Successfully!");
        navigateHome();
    }
    const printData = () => {
        let fName=document.getElementsByName('fNameTB');
        let lName=document.getElementsByName('lNameTB');
        let dDay=document.getElementsByName('birthDay');
        alert("Username: " + fName[0].value + "\nPassword: " + lName[0].value
        + "\nBirth Day: " + dDay[0].value);
    }
    // TESTING BUTTON TO GET VALUES FROM TEXT BOXES
    return(
     
        <div className="wrapper">
            <h1>Youth Sign-In Page</h1>
            <div className="divYouthLogin">
                <div className="divYouthLoginInner"><label class="lblYouthLogin">First Name: </label></div>
                {/* <input type="text" /> */}
                <TextBox tbName={'fNameTB'} tbType={'text'}/>
            </div>
            <div className="divYouthLogin"> 
                <div className="divYouthLoginInner">
                    <label >Last Name: </label>
                </div>
                {/* <input type="text" /> */}
                {/* HardCoded TextBox^ */}
                <TextBox tbName={'lNameTB'} tbType={'text'}/>
                {/* Component TextBox^ */}
            </div>
            <div className="divYouthLogin">
                <div className="divYouthLoginInner">
                <label class="lblYouthLogin">Birth Day: </label>
                </div>
                {/* <input type="text" /> */}
                {/* HardCoded TextBox^ */}
                <TextBox id={"bDay"} tbName={'birthDay'} tbType={'date'} />
                {/* Component TextBox^ */}
            </div>
            <br/>
            <div>
                <label>Purpose of Visit: </label>
                {/* <input type="text" /> */}
                {/* HardCoded TextBox^ */}
                <Combo />
                {/* Component TextBox^ */}
            </div>
            <br/>
            <div class="btnYouthLogin">
                <button onClick={signIn}>Sign In</button>
            </div>
            <div class="btnYouthLogin">
                <button onClick={navigateHome}>Return to Home Page</button>
            </div>
            <br/>
            <div>
                <h3 className="h3YouthLogin">Don't have an account?</h3>
                <h3 className="h3YouthLogin">First time attending program?</h3>
            </div>
            <div class="btnYouthLogin">
                <button  onClick={navigateRegister}>Register Here</button>
            </div>
        </div>
    //    Put Validation, check both combobox for valid site+event, then proceed to sign in
    //    autofill side+event in sign in form (show or not show?)
    )
}

export default YouthLogin