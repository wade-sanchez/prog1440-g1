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

  // const navigateToReports = () => {
  //   navigate('/Reports');
  // }

  const navigateToGroupEvent = () => {
    navigate('/GroupEvent');
  }

  const generateReport = () => {
    alert("Generate Report as .csv file");
    // insert report stuff
  }
  return (
    <div className='wrapper'>
    <div><h1>CYC Staff Menu</h1></div>
     <div>
        <button onClick={navigateToGroupEvent}>Enter Group Event Count</button>
    </div>
    <div>
        <button onClick={navigateToAddSites}>Add/Edit Sites</button>
    </div>
    <div>
        <button onClick={navigateToEditProfile}>Edit Youth Profile</button>
    </div>
    <div>
        <button onClick={navigateToEditAddress}>Edit Address</button>
    </div>
    <div>
        <button onClick={navigateToEditEContact}>Edit Emergency Contact Information</button>
    </div>
    <div>
        <button onClick={generateReport}>Generate Report</button>
    </div>
    </div>
  )
}
