import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import './home.css'
import './StaffLogin.css'
import Axios from 'axios';
import { useState } from 'react';
export const StaffLoginForMenu = () => {
    const navigate = useNavigate();
    // const printData = () => {
    //     let userName=document.getElementsByName('staffUserName');
    //     let password=document.getElementsByName('staffPassword');
    //     alert("Username:\n " + userName[0].value + "\nPassword: " + password[0].value);
    // }
    // const navigateHome = () => {
    //     // 👇️ navigate to /
    //     navigate('/');
    //   }; 
    const navigateToStaffMenu = () => {
    navigate('/StaffMenu');
    }
   const loginButton = () => {
        /*printData(); */
        navigateToStaffMenu();
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage]=useState('');
    const [loginstatus, setloginstatus]=useState('');
    

    const loginAsStaff = async (e)=>{
      e.preventDefault();
      try {
        const response = await Axios.post("http://localhost:3001/api/stafflogin", {
          email: email,
          password: password,
        });
        console.log(response.data); // Handle successful login and this can be used for redirecting
        if(response.data.message){
          setloginstatus(response.data.message)            //wrong combination
        }
        else{
            setloginstatus(response.data[0].name)
            window.location.href = '/StaffMenu'               //successfull login 
        }
  
        } catch (error) {
        console.error("Error:", error);  
        if (error.response) {
         
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // No response received
          console.error("No response received:", error.request);
        } else {
          // Error setting up request
          console.error("Error setting up request:", error.message);
        }
     
      }
    };



  return (
    <>
    <div className='image1'>
    <div  className='box-container'>
       <h1> Clarington Youth Centres Staff Login </h1>
       <div>
       <div className="input-field">
       <FaCircleUser className='icon'/>
        <input type= "text" onChange ={e => setEmail(e.target.value)} placeholder='Username' required />
       </div>
       <div className="input-field">
       <RiLockPasswordFill className='icon' />
        <input type= "password" onChange ={e => setPassword(e.target.value)} placeholder='Password' required />
       </div>
       </div>
        <div className='wrapper-button'>
             <button className="button1" onClick={loginAsStaff}>Login</button>
        </div>
    </div>
    </div>
    </>
  )
}
