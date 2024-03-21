//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
// import { Fieldset} from '../components/Fieldset';
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';
import './register.css'
import { useState } from 'react';
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
    <div className='wrappers'>
     <h1 className="headings">Clarington Youth Centre Registration</h1>
      <form onSubmit={register_form}>
      <div className='spacing'>
      <label className='label'>First Name:</label><TextBox className="input-field" tbType={'text'}/>
      </div>
        <div>
        <label className='label'>Last Name:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Preferred Name:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Birth Date:</label><TextBox className="input-field" tbType={'date'}/></div>
        <div className='spacing'>
        <label className='label'>City:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Street Address:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Postal Code:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Phone:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Email Address:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Emergency Contact:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Relative's Name</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        <div className='spacing'>
        <label className='label'>Relation:</label><TextBox className="input-field" tbType={'text'}/>
        </div>
        </form>
        <div className="registration-buttons">
        <button className='button1' type="submit">Register</button>
      </div>
    </div>
  </div>
</>
  );
};
export default Register;