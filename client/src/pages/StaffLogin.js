import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import './home.css'
import './StaffLogin.css'
import { useState } from 'react';
import Axios from 'axios'
export const StaffLogin = () => {
    const navigate = useNavigate();
    const navigateToStaffMenu = () => {
    navigate('/SiteSelect');
    }
   const loginButton = () => {
        /*printData(); */
        navigateToStaffMenu();
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage]=useState('');
    const [loginstatus, setloginstatus]=useState('');
    const [visible, setVisible] = useState(false);
    //console.log(message)

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
            setloginstatus(response.data[0].AdminName)
            //console.log(loginstatus)
            sessionStorage.setItem("StaffLogged", response.data[0].AdminName);
            window.location.href = '/SiteSelect'               //successfull login 
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
  
    const clearLog = () => {
      sessionStorage.removeItem("StaffLogged")
    }

  return (
    <>
    <div className='image1'>
    <form onLoadStart={clearLog} onSubmit={loginAsStaff} className='box-container'>
       <h1> Clarington Youth Centres Staff Login </h1>
       <div>
       <div className="input-field">
       <FaCircleUser className='icon'/>
        <input type= "text" onChange ={e => setEmail(e.target.value)} placeholder='Username' required />
       </div>
       <div className="input-field">
       <RiLockPasswordFill className='icon' />
        <input type= { visible ? "text" : "password"} onChange ={e => setPassword(e.target.value)} placeholder='Password' required />
        <div  className="eye" onClick={() => setVisible(!visible)}>
          {visible ? <RiEyeLine /> : <RiEyeOffLine/>}
        </div>
       </div>
       </div>
        <div className='wrapper-button'>
             <button className="button1" type="submit">Login</button>
        </div>
        <p className='error_message'>{loginstatus}</p>
        
    </form>
    </div>
    </>
  )
}
