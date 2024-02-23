import React from 'react'
import TextBox from '../components/Textbox'
import { useNavigate } from 'react-router-dom';

export const StaffLogin = () => {
    const navigate = useNavigate();
    const printData = () => {
        let userName=document.getElementsByName('userName');
        let password=document.getElementsByName('password');
        alert("Username:\n " + userName[0].value + "\nPassword: " + password[0].value);
    }
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };
    const navigateToStaffMenu = () => {
    navigate('/StaffMenu');
    }
    const loginButton = () => {
        printData();
        navigateToStaffMenu();
    }
  return (
    <div className="wrapper">
    <div>
        <h1 className="heading"> Clarington Youth Centres Staff Login </h1>
    </div>
    <div className="input-box">
        <label className= "label1">Username:   </label>
        <div><TextBox  tbName={'userName'} tbType={'text'} /></div>
        {/* Component TextBox^ */}
    </div>
    <br/>
    <div className="input-box">
        <label className="label1">Password:   </label>
        <div><TextBox tbName={'password'} tbType={'text'} /></div>
        {/* Component TextBox^ */}
    </div>
    <br/>
    <div className="input-box">
        <button className="button1" onClick={loginButton}>Login</button>
    </div>
    <div className="input-box">
        <button className="button1" onClick={navigateHome}>Return to Home Page</button>
    </div>
    </div>
  )
}
