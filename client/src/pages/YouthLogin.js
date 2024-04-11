import React, {useState, useEffect} from "react";
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
      navigate('/YouthLogin')
    }
    useEffect(()=>{
      getPurpose()
    }, [])
    const navigateRegister = () => {
        navigate('/Register');
    }
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [purpose, setPurpose] = useState([]);
    const [message, setMessage]=useState('')
    const [selectedPurposes, setSelectedPurposes] = useState([]);
    const [program, setProgram]=useState('')
    const [site, setSite]=useState('')
    
    const getPurpose = async () =>{
      // e.preventDefault()
        setProgram(sessionStorage.getItem("progName"))
        setSite(sessionStorage.getItem("siteName"))
        try{
          const response = await Axios.post("http://localhost:3001/ReasonForVisit", {
            program: program
        });
          if (Array.isArray(response.data)===true){
            setPurpose(response.data)
          }
          else{
            getPurpose()
          }
      }
        catch(error) {
          console.log(error)
        }
      }
      //console.log(selectedPurposes)
    const register_count = async (e)=>{
        e.preventDefault()
        try{
          const response = await Axios.post("http://localhost:3001/api/youthLogin",{
            firstName: firstName,
            lastName:lastName,
            birthDate: birthDate,
            selectedPurposes: selectedPurposes,
            site:site,
            program: program
          });
          //console.log(response.data)
          setMessage(response.data.message)
          console.log(message)
          
          
          // setMessage(response.data.message)
        }
        catch(error){
          console.log(error)
        }
    }

    const checkMessage = () => {
      console.log(message)
      if(message==='Logged Successfully!')
          {
            window.location.href = '/YouthLogin'
          }
      else{
        return message
      }
    }
    
    const handleChange = (e) => {
      setSelectedPurposes(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    //console.log(selectedPurposes)
    //check session data if stored
  // console.log(sessionStorage.getItem("siteName"))
  // console.log(sessionStorage.getItem("progName"))
  // console.log(purposeFetch)
  // console.log(optionsPurpose)
  
  //disable back button
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
  window.history.go(1);
  };

  if(!sessionStorage.getItem("StaffLogged")){
    navigate('/');
  }
  else{
  
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
                    required
                  />
                </label>
                <label>
                <b>  Last Name:</b> 
                  <input
                    type="text"
                    name="lastName"
                    onChange ={e => setLastName(e.target.value)}
                    required
                  />
                </label>
                <label>
                <b> Date of Birth:</b> 
                  <input
                  
                    type="date"
                    name="dateOfBirth"
                    onChange ={e => setBirthDate(e.target.value)}
                    required
                  />
                </label>
                <label>
                <b> Purpose of Visit: </b>
            {/* <select onClick={getPurpose}><option>{purposeOptions}</option></select> */}
            <Select className="multiSelect" onChange={handleChange} required onMenuOpen={getPurpose} placeholder="Select Purpose of Visit" isMulti="true" options={purpose}/>
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
                <button className="button1" type="submit">Sign In</button>
                
                
                </div>
                <p class='error_message'>{checkMessage()}</p>
                <br/>
                  
                    <h3>Don't have an account? First time attending a program?</h3>
                    <button  className="button1" type='submit' onClick={navigateRegister}>Register Here</button>
                    {/* <button onClick={navigateRegister}>Register Here</button> */}
                  
                  {/* {selectedPurposes && <div style={{ marginTop: 20, lineHeight: '25px' }}>
          <div><b>SelectedPurposes: </b> {JSON.stringify(selectedPurposes, null, 2)}</div>
          </div>} */}
              </form>
      </div>
      </div>
      )
  }
}
export default YouthLogin;