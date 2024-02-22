// same as register, but search for the entry first if it exists!


//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
import { Fieldset } from '../components/Fieldset';
import { SearchBar } from '../components/SearchBar';
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';

function EditProfile() {
  return (
    <div className="wrapper">
      <div>
        <h1>Edit Youth Profile</h1>
      </div>
      <Fieldset>
      {/* <div>
      <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
      </div>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    <SearchBar/> 
    {/* next step: alert - entry found or not found */}
      <div><label>First Name*:</label><TextBox/></div>
      <div><label>Last Name*:</label><TextBox/></div>
      <div><label>Preferred Name:</label><TextBox/></div>
      <div><label>Birth Date*:</label><TextBox id={"bDay"} tbName={'birthDay'} tbType={'date'} /></div>
      <div><label>City</label><Combo/></div> 
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

      <ReturnToStaffMenu/>
      </Fieldset>
    </div>
    
  );
}

export default EditProfile;