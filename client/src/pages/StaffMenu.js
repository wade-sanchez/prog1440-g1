import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { AddSites } from './AddSites';
// import EditProfile from './EditProfile';
// import { EditAddress } from './EditAddress';
// import { EditEContact } from './EditEContact';
// import { Reports } from './Reports';

export const StaffMenu = () => {
  const navigate = useNavigate();

  const navigateToAddSites = () => {
    navigate('/AddSites');
  }

  const navigateToEditProfile = () => {
    navigate('/EditProfile');
  }
    
  const navigateToEditAddress = () => {
    navigate('/EditAddress');
  }

  const navigateToEditEContact = () => {
    navigate('/EditEContact');
  }

  const navigateToReports = () => {
    navigate('/Reports');
  }

  return (
    <>
    <div><h1>CYC Staff Menu</h1></div>
     <div>
        <button onClick={``}>Enter Group Event Count</button>
    </div>
    <div>
        <button onClick={navigateToAddSites}>Add/Edit Sites</button>
    </div>
    <div>
        <button onClick={navigateToEditProfile}>Edit Profile</button>
    </div>
    <div>
        <button onClick={navigateToEditAddress}>Edit Address</button>
    </div>
    <div>
        <button onClick={navigateToEditEContact}>Edit Emergency Contact Information</button>
    </div>
    <div>
        <button onClick={navigateToReports}>Generate Report</button>
    </div>
    </>
  )
}
