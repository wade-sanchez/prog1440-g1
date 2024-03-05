import React from 'react'
import '../index'
// import BlueButton from '../components/Button';
import './home.css';
import Combo from '../components/ComboBox';
import { useNavigate, Route, Routes } from 'react-router-dom';
import YouthLogin from './YouthLogin';

//import { Fieldset } from '../components/Fieldset';

export const SiteSelect = () => {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
    navigate('/YouthLogin');

  }
  return (
      
    <div className='image'>
      <div className='box-container'>
        <h1>Please select the appropriate Site and Program:</h1>
        <br/>
        <div>
          <div>
            <label class="lblHome" for="siteSelect"><b> Site Selection: </b></label>
            <Combo dataType="data" id="siteSelect"/>
          </div>
          <div>
            <label class="lblHome" for="programSelect"> <b>Program Selection:</b> </label>
            <Combo dataType="siteData" id="programSelect"> </Combo>
          </div>
            <br/>
            {/* <BlueButton onClick={navigateToSignIn} btnText={'Go to Sign-In'}/> */}
            {/* Component Button^ */}
            <button class="button1" onClick={navigateToSignIn}>Go to Sign-In</button>
            {/* Hard Coded Button^ */}
            <Routes>
                <Route path='youthlogin' element={<YouthLogin/>} />
            </Routes>
        </div>
      </div>
      </div>
  )
}
