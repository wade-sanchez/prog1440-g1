import React from 'react'
import TextBox from '../components/Textbox'
import { useNavigate } from 'react-router-dom';

export const StaffLogin = () => {
    const navigate = useNavigate();
    const printData = () => {
        let userName=document.getElementsByName('userName');
        let password=document.getElementsByName('password');
        alert("Username: " + userName[0].value + "\nPassword: " + password[0].value);
    }
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };
  return (
    <>
    <div>
        <h1> Clarington Youth Centres Staff Login </h1>
    </div>
    <div>
        <label>Username: </label>
        <TextBox tbName={'userName'} tbType={'text'} />
        {/* Component TextBox^ */}
    </div>
    <div>
        <label>Password: </label>
        <TextBox tbName={'password'} tbType={'text'} />
        {/* Component TextBox^ */}
    </div>
    <div>
        <button onClick={printData}>Login</button>
    </div>
    <div>
        <button onClick={navigateHome}>Return to Home Page</button>
    </div>
    </>
  )
}
