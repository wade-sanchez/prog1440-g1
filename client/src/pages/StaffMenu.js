import React from 'react'
import { useNavigate } from 'react-router-dom';

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

  const generateReport = () => {
    // alert("Generate Report as .csv file");
    // insert report stuff
    navigate('/Reports');
  }
  return (
    <div className='wrapper'>
    <div><h1 className='heading'>CYC Staff Menu</h1></div>
     <div className="staffMenuButtons" >
        <button className="button2" onClick={navigateToGroupEvent}>Enter Group Event Count</button>
    </div>
    <div className="staffMenuButtons">
        <button className="button2" onClick={navigateToAddSites}>Add/Edit Sites</button>
    </div>
    <div className="staffMenuButtons">
        <button className="button2" onClick={navigateToEditProfile}>Edit Youth Profile</button>
    </div>
    <div className="staffMenuButtons">
        <button className="button2" onClick={generateReport}>Generate Report</button>
    </div>
    </div>
  )
}
