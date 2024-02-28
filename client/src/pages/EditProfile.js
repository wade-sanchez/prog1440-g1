// same as register, but search for the entry first if it exists!


//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
// import { Fieldset } from '../components/Fieldset';
import { SearchBar } from '../components/SearchProfile';
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';

function EditProfile() {
  return (
    <>
    <h1>Edit Profile</h1>
    <div className="wrapper-registration">
      <div>
        <h1>Search for a profile:</h1>
        <SearchBar/>
      </div>
      {/* <Fieldset> */}
      {/* <div>
      <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
      </div>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    
    {/* next step: alert - entry found or not found */}
      <br/>
      <div >
      {/* <div ><h1 className='heading'>Profile:</h1></div> */}

      <div><label className="EditProfileLabel">Preferred Name:</label><TextBox/></div>
      <div ><label className="EditProfileLabel">City: </label><Combo className="comboboxReg"/></div>
      <div ><label className="EditProfileLabel">Street Address:</label><TextBox/></div> 
      </div>
      <div >
      
      {/* combobox: list all cities in the vicinity of Durham Region */}
      
      <div ><label className="EditProfileLabel">Postal Code:</label><TextBox/></div>
      <div ><label className="EditProfileLabel">Phone:</label><TextBox/></div>
      <div><label className="EditProfileLabel"> Email Address:</label><TextBox/></div>
      </div>
      <div className='EContact'>
      <div ><label className="EditProfileLabel">Emergency Contact:</label><TextBox/></div>
      <div ><label className="EditProfileLabel"> Relation:</label><TextBox/></div>
      <div ><label className="EditProfileLabel">Emergency Contact #:</label><TextBox/></div>
      </div>
      
      {/* </Fieldset> */}
    </div>
    <div className='registration-buttons'>
      <button className="button1">Edit Youth Profile</button>
      <ReturnToStaffMenu className="button1"/>
    </div>
    </>
  );
}

export default EditProfile;