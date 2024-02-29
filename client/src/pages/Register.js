//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
// import { Fieldset} from '../components/Fieldset';
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';

function Register() {
  return (
    <>
      <div>
        <h1 className='heading'>Clarington Youth Centre Registration</h1>
      </div>
      <div className="wrapper-registration">

        {/* <Fieldset> */}
        <div>
          <div className='spacing'><label className="EditProfileLabel">First Name*:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Last Name*:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Preferred Name:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Birth Date*:</label><TextBox className={"comboBirthDate"} id={"bDay"} tbName={'birthDay'} tbType={'date'} /></div>
        </div>
        <div>
          <div className='spacing'><label className="EditProfileLabel">City: </label><Combo className="comboboxReg"/></div>
          {/* combobox: list all cities in the vicinity of Durham Region */}
          <div className='spacing'><label className="EditProfileLabel">Street Address:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Postal Code:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Phone:</label><TextBox /></div>
        </div>
        <div>
          <div className='spacing'><label className="EditProfileLabel">Email Address:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Emergency Contact:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Relation:</label><TextBox /></div>
          <div className='spacing'><label className="EditProfileLabel">Emergency Contact #:</label><TextBox /></div>
        </div>


        {/* </Fieldset> */}

      </div>
      <div className="registration-buttons">
        <button className='button1'>Register</button>
      </div>
    </>

  );
}

export default Register;


