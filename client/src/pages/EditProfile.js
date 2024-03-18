// same as register, but search for the entry first if it exists!


//import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import TextBox from '../components/Textbox';
import Combo from '../components/ComboBox';
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
// import { Fieldset } from '../components/Fieldset';
import { SearchBar } from '../components/SearchProfile';
import '../components/style.css'
// import { useNavigate } from 'react-router-dom'
//import city from '../components/CityList';
//import { useNavigate } from 'react-router-dom';

function EditProfile() {
  

  return (
    <>
    <h1 className='headings'>Edit Profile</h1>
    <div className="wrappers">
      <div>
        <h3 className='label'>Search for a profile:</h3>
        <SearchBar/>
      </div>
      {/* <Fieldset> */}
      {/* <div>
      <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
      </div>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    
    {/* next step: alert - entry found or not found */}
      <br/>
      <div className='spacing'><label className="label">Preferred Name:</label><TextBox className="input-field"/></div>
      <div className='spacing'><label className="label">City: </label><Combo className="input-field"/></div>
      <div className='spacing'><label className="label">Street Address:</label><TextBox className="input-field"/></div> 
      <div className='spacing'><label className="label">Postal Code:</label><TextBox className="input-field"/></div>
      <div className='spacing'><label className="label">Phone:</label><TextBox className="input-field"/></div>
      <div className='spacing'><label className="label"> Email Address:</label><TextBox className="input-field"/></div>
      <div className='spacing'><label className="label">Emergency Contact:</label><TextBox className="input-field"/></div>
      <div className='spacing'><label className="label"> Relation:</label><TextBox className="input-field"/></div>
      <div className='spacing'><label className="label">Emergency Contact #:</label><TextBox className="input-field"/></div>
    
    <div className='registration-buttons'>
      <button className="buttons">Edit Youth Profile</button>
      <ReturnToStaffMenu className="buttons"/>
    </div>
    </div>
    </>
  );
}

export default EditProfile;