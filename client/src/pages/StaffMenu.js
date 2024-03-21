import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../components/style.css'

export const StaffMenu = () => {
  const navigate = useNavigate();

  const navigateToAddSites = () => {
    navigate('/AddSites');
  }

  const navigateToEditProfile = () => {
    navigate('/EditProfile');
  }

  // const navigateToReports = () => {
  //   navigate('/Reports');
  // }

  const navigateToGroupEvent = () => {
    navigate('/GroupEvent');
  }

  const navigateToSiteSelect = () => {
    navigate('/SiteSelect');
  }

  const generateReport = () => {
    // alert("Generate Report as .csv file");
    // insert report stuff
    navigate('/Reports');
  }
  return (
    <div>
    <div className='wrappers'>
    <div><h1 className='headings'>CYC Staff Menu</h1></div>
    <div className="staffMenuButtons" >
        <button className="buttons" onClick={navigateToSiteSelect}>Youth Attendees Sign In</button>
    </div>
     <div className="staffMenuButtons" >
        <button className="buttons" onClick={navigateToGroupEvent}>Enter Group Event Count</button>
    </div>
    <div className="staffMenuButtons">
        <button className="buttons" onClick={navigateToAddSites}>Add/Edit Sites</button>
    </div>
    <div className="staffMenuButtons">
        <button className="buttons" onClick={navigateToEditProfile}>Edit Youth Profile</button>
    </div>
    <div className="staffMenuButtons">
        <button className="buttons" onClick={generateReport}>Generate Report</button>
    </div>
    <div className="staffMenuButtons">
        <button className="buttons" onClick={navigateToSiteSelect}>Logout</button>
    </div>
    </div>
    </div>
  )
}
