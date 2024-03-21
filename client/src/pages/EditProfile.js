// same as register, but search for the entry first if it exists!
//import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
// import { Fieldset } from '../components/Fieldset';
import {SearchBar, firstName, lastName, birthDate} from '../components/SearchProfile';
import '../components/style.css'
// import { useNavigate } from 'react-router-dom'
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios'

const EditProfile = () => {
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



const register_form = async (e)=>{
  console.log(SearchBar.firstName)
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3001/editProfile", {
          firstName: SearchBar.firstName,
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
}
  return (
    <>
     <div className='homepage'>
    <h1 className='headings'>Edit Profile</h1>
    <div className="wrappers">
      <div>
        <h3 className='label'>Search for a profile:</h3>
        <SearchBar firstName={firstName} lastName={lastName} birthDate={birthDate}/>
      </div>
      {/* <Fieldset> */}
      {/* <div>
      <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
      </div>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    
    {/* next step: alert - entry found or not found */}
      <br/>
      <form onSubmit={register_form}>
      <div className='spacing'><label className="label">Preferred Name:</label><TextBox className="input-field" onChange ={e => setPrefferedName(e.target.value)}/></div>
      <div className='spacing'><label className="label">City: </label><TextBox className="input-field" onChange ={e => setCity(e.target.value)}/></div>
      <div className='spacing'><label className="label">Street Address:</label><TextBox className="input-field" onChange ={e => setStreetAddress(e.target.value)}/></div> 
      <div className='spacing'><label className="label">Postal Code:</label><TextBox className="input-field" onChange ={e => setPostalCode(e.target.value)}/></div>
      <div className='spacing'><label className="label">Phone:</label><TextBox className="input-field" onChange ={e => setContact(e.target.value)}/></div>
      <div className='spacing'><label className="label"> Email Address:</label><TextBox className="input-field" onChange ={e => setEmail(e.target.value)}/></div>
      <div className='spacing'><label className="label">Emergency Contact:</label><TextBox className="input-field" onChange ={e => setRelativeName(e.target.value)}/></div>
      <div className='spacing'><label className="label"> Relation:</label><TextBox className="input-field" onChange ={e => setRelation(e.target.value)}/></div>
      <div className='spacing'><label className="label">Emergency Contact #:</label><TextBox className="input-field" onChange ={e => setEmergContact(e.target.value)}/></div>
    
    <div className='registration-buttons'>
      <button type="submit" className="buttons">Edit Youth Profile</button>
      <ReturnToStaffMenu className="buttons"/>
      </div>
      </form>
      </div>
    </div>
    </>
  );
}

export default EditProfile;