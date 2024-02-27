import React from 'react'
import '../index'
import { useNavigate } from 'react-router-dom';

//import { Fieldset } from '../components/Fieldset';

export const Home = () => {
    const navigate = useNavigate();

    const navigateToSiteSelect = () => {
    navigate('/SiteSelect');
    }

    const navigateToStaffLogin = () => {
      navigate('/StaffLogin');
    }

    const navigateToRegister = () => {
    navigate('/Register');
    }
  return (
    <div className="wrapper">
      <h1>
        Welcome to the Clarington Youth Centre!
      </h1>
      <button class="btnHome" onClick={navigateToSiteSelect}>
        Start Youth Sign-In System
      </button>
      {/* Hard Coded Button^ */}
      <button class="btnHome" onClick={navigateToRegister}>
        Register
      </button>
      <button class="btnHome" onClick={navigateToStaffLogin}>
        Staff Login
      </button>
    </div>
  )
}
