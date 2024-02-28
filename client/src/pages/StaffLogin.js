import React from 'react'
import TextBox from '../components/Textbox'
import { useNavigate } from 'react-router-dom';

export const StaffLogin = () => {
    const navigate = useNavigate();
    const printData = () => {
        let userName=document.getElementsByName('staffUserName');
        let password=document.getElementsByName('staffPassword');
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
    <>
    <div>
        <h1 className="heading"> Clarington Youth Centres Staff Login </h1>
    </div>
    <div className="wrapper-registration">
        <div className="input-box">
            {/* <label className= "label1">Username:   </label> */}
            <div><TextBox placeholder={'Username'}  tbName={'staffUserName'} tbType={'text'} /></div>
            {/* Component TextBox^ */}
        </div>
        <div className="input-box">
            {/* <label className="label1">Password:   </label> */}
            <div><TextBox placeholder={'Password'} tbName={'staffPassword'} tbType={'password'} /></div>
            {/* Component TextBox^ */}
        </div>
    </div>
    <div>
    <div className='wrapper-button'>
        <button className="button1" onClick={loginButton}>Login</button>
    </div>
    </div>
    </>
  )
}
