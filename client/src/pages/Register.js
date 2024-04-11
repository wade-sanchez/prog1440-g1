//import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
// import { Fieldset} from '../components/Fieldset';
//import city from '../components/CityList';
import { useNavigate } from 'react-router-dom';
import './register.css'
//import { useState } from 'react';
import Axios from 'axios';
import '../components/style.css'

function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prefferedName, setPrefferedName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [contact, setContact] = useState('');
  const [email , setEmail] = useState('');
  const [emergContact, setEmergContact] = useState('');
  const[relativeName, setRelativeName] = useState('');
  const [relation, setRelation] = useState('');
  //for error messages
  // const [firstNameError, setFirstNameError] =useState('');
  // const [lastNameError, setLastNameError] = useState('');
  // const [prefferedNameError, setPrefferedNameError] = useState('');
  // const [birthDateError, setBirthDateError] = useState('')
  // const [cityError, setCityError] = useState('')
  // const [streetAddressError, setStreetAddressError] = useState('')
  // const [postalCodeError, setPostalCodeError] = useState('')
  // const [contactError, setContactError] = useState('')
  // const [emailError, setEmailError] = useState('')
  // const [emergContactError , setEmergContactError] = useState('')
  // const [relativeNameError, setRelativeNameError] = useState('')
  // const [relationError, setRelationError] = useState('')
  const navigate = useNavigate();
    const goToYouthLogin = () => {
    navigate('/YouthLogin')
  }

const register_form = async (e)=>{

    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3001/api/youthRegister", {
          firstName: firstName,
          lastName : lastName,
          prefferedName : prefferedName,
          birthDate: birthDate,
          city: city,
          streetAddress: streetAddress,
          postalCode: postalCode,
          contact: contact,
          email: email,
          emergContact: emergContact,
          relativeName : relativeName,
          relation: relation

        });
        console.log(response)
        window.location.href = '/YouthLogin'       
    }
    catch(error){
      console.error("Error:", error);
    }
};    

if(!sessionStorage.getItem("StaffLogged")){
  navigate('/');
}
else{
    return (
      <>
      <div className='image3'>
      <div className='wrappers'>
      
        <h1 className="headings">Clarington Youth Centre Registration</h1>
        <form onSubmit={register_form}>
        <div className='spacing'>
        <label className='label'>First Name:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setFirstName(e.target.value)} required/>
        {/* {firstNameError && <p>Please Enter the First Name</p>}      */}
        </div>
          <div>
          <label className='label'>Last Name:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setLastName(e.target.value)} required/>
          {/* {lastNameError && <p>Please Enter the Last Name</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Preferred Name:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setPrefferedName(e.target.value)} required/>
          {/* {prefferedNameError && <p>Please Enter the Preffered Name</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Birth Date:</label><TextBox className="input-field" tbType={'date'} onChange ={e => setBirthDate(e.target.value)} required/>
          {/* {birthDateError && <p>Please Enter the Birth Date</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>City:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setCity(e.target.value)} required/>
          {/* {cityError && <p>Please Enter Your City</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Street Address:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setStreetAddress(e.target.value)} required/>
          {/* {streetAddressError && <p>Please Enter Your Street Address</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Postal Code:</label><TextBox className="input-field" tbType={'text'} maxlength="6" onChange ={e => setPostalCode(e.target.value)} required/>
          {/* {postalCodeError && <p>Please Enter Your Postal Code</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Phone:</label><TextBox className="input-field" tbType={'text'} maxlength="10" onChange ={e => setContact(e.target.value)} required/>
          {/* {contactError && <p>Please Enter Your Phone Number</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Email Address:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setEmail(e.target.value)} required/>
            {/* {emailError && <p>Please Enter The Email </p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Emergency Contact:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setEmergContact(e.target.value)} maxlength="10" required/>
          {/* {emergContactError && <p>Please Enter Your Emergency Contact</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Relative's Name</label><TextBox className="input-field" tbType={'text'} onChange ={e => setRelativeName(e.target.value)} required/>
          {/* {relativeNameError && <p>Please Enter Relative's Name</p>} */}
          </div>
          <div className='spacing'>
          <label className='label'>Relation:</label><TextBox className="input-field" tbType={'text'} onChange ={e => setRelation(e.target.value)} required/>
          {/* {relationError && <p>Please Enter the Relation with the Emergency Contact</p>} */}
          </div>
          <div className="registration-buttons">
          <button className='button1' type="submit">Register</button>
          <button className='button1' type="button" onClick={goToYouthLogin}>Return to Youth Login Page</button>
          </div>
        </form>
      </div>
      </div>
      
      </>
    );
  };
}
export default Register;