import React from 'react'
import TextBox from '../components/Textbox'
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import './home.css'
import './StaffLogin.css'
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
    navigate('/SiteSelect');
    }
   const loginButton = () => {
        /*printData(); */
        navigateToStaffMenu();
    } 
  return (
    <>
    <div className='image1'>
    <div  className='box-container'>
       <h1> Clarington Youth Centres Staff Login </h1>
       <div>
       <div className="input-field">
       <FaCircleUser className='icon'/>
        <input type= "text" placeholder='Username' required />
       </div>
       <div className="input-field">
       <RiLockPasswordFill className='icon' />
        <input type= "password" placeholder='Password' required />
       </div>
       </div>
        <div className='wrapper-button'>
             <button className="button1" onClick={loginButton}>Login</button>
        </div>
    </div>
    </div>
    </>
  )
}
