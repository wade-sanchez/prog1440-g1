import React, {useState} from "react";
//import { Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Combo from "../components/ComboBox";
import TextBox from "../components/Textbox";
import './home.css'
import './youthlogin.css'
import Axios from "axios";
import Select from 'react-select'

const YouthLogin = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };

    const newSignin = () => {
      navigate('YouthLogin')
    }

    const navigateRegister = () => {
        navigate('/Register');
    }

    
    // const signIn = () => {
    //     // printData();
    //     alert("Signed in Successfully!");
    //     navigateHome();
    // }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage]=useState('')
    const optionsPurpose = [
      {value: 'Visitor', label: 'Visitor'},
      {value: 'Camp Counselor', label: 'Camp Counselor'},
      {value: 'Volunteer', label: 'Volunteer'},
      {value: 'Staff', label: 'Staffr'}

    ]
    

    const register_count = async (e)=>{
        e.preventDefault()
        try{
          const response = await Axios.post("http://localhost:3001/api/youthLogin",{
            firstName: firstName,
            lastName:lastName,
            birthDate: birthDate,
            purpose: purpose
          });
          //console.log(response.data)
          setMessage(response.data.message)
          // newSignin()

        }
        catch(error){
          console.log(error)
        }

    }
    
    // TESTING BUTTON TO GET VALUES FROM TEXT BOXES
    return(
       <div className="image2">
        <div className="form-box">
            <form className="signup-form" onSubmit={register_count}>
              <h1>Youth Sign-In Page</h1>
              <label>
              <b> First Name:</b> 
                <input
                  type="text"
                  name="firstName"
                  onChange ={e => setFirstName(e.target.value)}
                
                />
              </label>
              <label>
              <b>  Last Name:</b> 
                <input
                  type="text"
                  name="lastName"
                  onChange ={e => setLastName(e.target.value)}
                  
                />
              </label>
              <label>
              <b> Date of Birth:</b> 
                <input
                  type="date"
                  name="dateOfBirth"
                  onChange ={e => setBirthDate(e.target.value)}
                 
                />
              </label>
              <label>
              <b> Purpose of Visit: </b>
          <Select placeholder="Select Purpose of Visit" isMulti options={optionsPurpose}/>
          {/* <select
            name="purposeOfVisit"
            onChange ={e => setPurpose(e.target.value)}
            >
            <option value="Visitor">Visitor</option>
            <option value="Camp Counselor">Camp Counselor</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Staff">Staff</option>
           
          </select> */}
        </label>

        <div className="space">
              <button type="submit">Sign In</button>
              
              
              </div>
              <p class='error_message'>{message}</p>
              <br/>
                
                  <h3>Don't have an account? First time attending program</h3>
                  <button type='submit' onClick={navigateRegister}>Register Here</button>
                  {/* <button onClick={navigateRegister}>Register Here</button> */}
             
            </form>
    </div>
    </div>
    )
}

export default YouthLogin;