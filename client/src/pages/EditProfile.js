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
        <h1 className='heading'>Edit Youth Profile</h1>
      </div>
      <Fieldset>
      {/* <div>
      <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
      </div>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    <SearchBar /> 
    {/* next step: alert - entry found or not found */}
      <div ><label className="label1">First Name*:</label><div><TextBox/></div></div>
      <div ><label className="label1">Last Name*:</label><div><TextBox/></div></div>
      <div ><label className="label1">Preferred Name:</label><div><TextBox/></div></div>
      <div ><label className="label1">Birth Date*:</label><div><TextBox id={"bDay"} tbName={'birthDay'} tbType={'date'} /></div></div>
      <div ><label className="label1">City</label><div><Combo/></div></div> 
      {/* combobox: list all cities in the vicinity of Durham Region */}
      <div ><label className="label1">Street Address:</label><div><TextBox/></div></div>
      <div ><label className="label1">Postal Code:</label><div><TextBox/></div></div>
      <div ><label className="label1">Phone:</label><div><TextBox/></div></div>
      <div><label className="label1"> Email Address:</label><div><TextBox/></div></div>
      <div ><label className="label1">Emergency Contact Person:</label><div><TextBox/></div></div>
      <div ><label className="label1"> Relation to Emergency Contact Person:</label><div><TextBox/></div></div>
      <div ><label className="label1">Emergency Contact #:</label><div><TextBox/></div></div>
      <div ></div>
      <div >
        <br/>
        <button className="button1">Edit Youth Profile</button>
      </div>
      <br/>
      <ReturnToStaffMenu className="button1"/>
      </Fieldset>
    </div>
    
  );
}

export default EditProfile;