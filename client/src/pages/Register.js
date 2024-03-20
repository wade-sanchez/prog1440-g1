//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
//import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
// import { Fieldset} from '../components/Fieldset';
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';
import './register.css'
import { useState } from 'react';
import Axios from 'axios';

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
  const [relation, setRealtion] = useState('');




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
        window.location.href = '/'       
    }
    catch(error){
      console.error("Error:", error);  

    }
};    

  return (
    <>
    <div className='image3'>
    <div className='register'>
     <div className="registration-form">
      <h1 className="text-center my-4">Clarington Youth Centre Registration</h1>
      <form onSubmit={register_form}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" onChange ={e => setFirstName(e.target.value)} required />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" onChange ={e => setLastName(e.target.value)} required />
        <br />

        <label htmlFor="preferredName">Preferred Name:</label>
        <input type="text" id="preferredName" name="preferredName" onChange ={e => setPrefferedName(e.target.value)} />
        <br />

        <label htmlFor="birthDate">Birth Date:</label>
        <input type="date" id="birthDate" name="birthDate" onChange ={e => setBirthDate(e.target.value)} required  />
        <br />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" onChange ={e => setCity(e.target.value)} required />
        <br />

        <label htmlFor="streetAddress">Street Address:</label>
        <input type="text" id="streetAddress" name="streetAddress" onChange ={e => setStreetAddress(e.target.value)} required />
        <br />

        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" onChange ={e => setPostalCode(e.target.value)} required />
        <br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" onChange ={e => setContact(e.target.value)} required />
        <br />

        <label htmlFor="emailAddress">Email Address:</label>
        <input type="email" id="emailAddress" name="emailAddress" onChange ={e => setEmail(e.target.value)} required />
        <br />

        <label htmlFor="emergencyContact">Emergency Contact:</label>
        <input type="text" id="emergencyContact" name="emergencyContact" onChange ={e => setEmergContact(e.target.value)} required />
        <br />

        <label htmlFor="relativeName">Relative's Name</label>
        <input type="text" id="relativeName" name="relativeName" onChange ={e => setRelativeName(e.target.value)} required />
        <br />

        <label htmlFor="relation">Relation:</label>
        <input type="text" id="relation" name="relation" onChange ={e => setRealtion(e.target.value)} required />
        <br />
        <div className="registration-buttons">
        <button className='button1' type="submit">Register</button>
      </div>

      </form>
    </div>
    </div>
    </div>
    </>
  );
};
export default Register;