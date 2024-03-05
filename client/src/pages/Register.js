//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
//import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
// import { Fieldset} from '../components/Fieldset';
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';
import './register.css'
function Register() {
  return (
    <>
    <div className='register'>
     <div className="registration-form">
      <h1 className="text-center my-4">Clarington Youth Centre Registration</h1>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />
        <br />

        <label htmlFor="preferredName">Preferred Name:</label>
        <input type="text" id="preferredName" name="preferredName" />
        <br />

        <label htmlFor="birthDate">Birth Date:</label>
        <input type="date" id="birthDate" name="birthDate" required />
        <br />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />
        <br />

        <label htmlFor="streetAddress">Street Address:</label>
        <input type="text" id="streetAddress" name="streetAddress" required />
        <br />

        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" required />
        <br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
        <br />

        <label htmlFor="emailAddress">Email Address:</label>
        <input type="email" id="emailAddress" name="emailAddress" required />
        <br />

        <label htmlFor="emergencyContact">Emergency Contact:</label>
        <input type="text" id="emergencyContact" name="emergencyContact" required />
        <br />

        <label htmlFor="relation">Relation:</label>
        <input type="text" id="relation" name="relation" required />
        <br />
      </form>
      <div className="registration-buttons">
        <button className='button1'>Register</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Register;


