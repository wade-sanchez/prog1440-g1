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
    <div className="wrapper-registration">
      <form>
      <div>
        <h1>Clarington Youth Centre Registration</h1>
      </div>
        {/* <Fieldset> */}
      
      <div><label>First Name*:</label><TextBox/></div>
      <div><label>Last Name*:</label><TextBox/></div>
      <div><label>Preferred Name:</label><TextBox/></div>
      <div><label>Birth Date*:</label><TextBox id={"bDay"} tbName={'birthDay'} tbType={'date'} /></div>
      <div><label>City: </label><Combo/></div> 
      {/* combobox: list all cities in the vicinity of Durham Region */}
      <div><label>Street Address:</label><TextBox/></div>
      <div><label>Postal Code:</label><TextBox/></div>
      <div><label>Phone:</label><TextBox/></div>
      <div><label>Email Address:</label><TextBox/></div>
      <div><label>Emergency Contact Person:</label><TextBox/></div>
      <div><label>Relation to Emergency Contact Person:</label><TextBox/></div>
      <div><label>Emergency Contact #:</label><TextBox/></div>
      <div></div>
      <div>
        <button>Register</button>
      </div>
      
      {/* </Fieldset> */}
      </form>
    </div>
    
  );
}

export default Register;


