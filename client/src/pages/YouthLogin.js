import React from "react";
//import { Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Combo from "../components/ComboBox";
import TextBox from "../components/Textbox";
import './home.css'
import './youthlogin.css'

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
       <div className="image2">
        <div className="form-box">
            <form className="signup-form" >
              <h1>Youth Sign-In Page</h1>
              <label>
              <b> First Name:</b> 
                <input
                  type="text"
                  name="firstName"
                
                />
              </label>
              <label>
              <b>  Last Name:</b> 
                <input
                  type="text"
                  name="lastName"
                  
                />
              </label>
              <label>
              <b> Date of Birth:</b> 
                <input
                  type="date"
                  name="dateOfBirth"
                 
                />
              </label>
              <label>
              <b> Purpose of Visit: </b> 
          <select
            name="purposeOfVisit"
            >
            <option value="Visitor">Visitor</option>
            <option value="Camp Counselor">Camp Counselor</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Staff">Staff</option>
          </select>
        </label> 
        <div className="space">
              <button type="submit">Sign In</button>
              </div>
                <>
                  <h3>Don't have an account? First time attending program</h3>
                  <button onClick={navigateRegister}>Register Here</button>
                </>
             
            </form>
     //Put Validation, check both combobox for valid site+event, then proceed to sign in
    //autofill side+event in sign in form (show or not show?)
    </div>
    </div>
    )
}

export default YouthLogin