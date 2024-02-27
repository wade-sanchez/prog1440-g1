import React from 'react'
import '../index'
// import BlueButton from '../components/Button';
import Combo from '../components/ComboBox';
import { useNavigate, Route, Routes } from 'react-router-dom';
import YouthLogin from './YouthLogin';

//import { Fieldset } from '../components/Fieldset';

export const Home = () => {
    const navigate = useNavigate();

    const navigateToSiteSelect = () => {
    navigate('/SiteSelect');

  }
  return (
    <div className="wrapper">
      <h1>Welcome to the Clarington Youth Centre!</h1>
      <button class="btnHome" onClick={navigateToSiteSelect}>Go to Sign-In</button>
      {/* Hard Coded Button^ */}
        <Routes>
          <Route path='youthlogin' element={<YouthLogin/>} />
        </Routes>
    </div>
  )
}
