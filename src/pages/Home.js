import React from 'react'
// import BlueButton from '../components/Button';
import Combo from '../components/ComboBox';
import { useNavigate, Route, Routes } from 'react-router-dom';
import YouthLogin from './YouthLogin';

export const Home = () => {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
    navigate('/YouthLogin');

  }
  return (
    <div>
        <h1>Welcome to Clarington Youth Centre!</h1>
        <h3>Please Select the appropriate Site and Program:</h3>
        <p>Hellow</p>
        <div>
            <label>Site Selection:</label><Combo/>
            <label>Program Selection:</label><Combo> </Combo>
            <br/>
            {/* <BlueButton onClick={navigateToSignIn} btnText={'Go to Sign-In'}/> */}
            {/* Component Button^ */}
            <button onClick={navigateToSignIn}>Go to Sign-In</button>
            {/* Hard Coded Button^ */}
            <Routes>
                <Route path='youthlogin' element={<YouthLogin/>} />
            </Routes>
        </div>
    </div>
  )
}
