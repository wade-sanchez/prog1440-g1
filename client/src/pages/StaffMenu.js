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
    <div><h1 className='heading'>CYC Staff Menu</h1></div>
     <div className="input-box" >
        <button className="button2" onClick={navigateToGroupEvent}>Enter Group Event Count</button>
    </div>
    <div className="input-box">
        <button className="button2" onClick={navigateToAddSites}>Add/Edit Sites</button>
    </div>
    <div className="input-box">
        <button className="button2" onClick={navigateToEditProfile}>Edit Youth Profile</button>
    </div>
    <div className="input-box">
        <button className="button2" onClick={navigateToEditAddress}>Edit Address</button>
    </div>
    <div className="input-box">
        <button className="button2" onClick={navigateToEditEContact}>Edit Emergency Contact Information</button>
    </div>
    <div className="input-box">
        <button className="button2" onClick={generateReport}>Generate Report</button>
    </div>
    </div>
  )
}
