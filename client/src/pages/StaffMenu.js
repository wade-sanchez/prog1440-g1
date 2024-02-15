import React from 'react'
import { useNavigate } from 'react-router-dom';

export const StaffMenu = () => {
  const navigate = useNavigate();

    const navigateToAddSites = () => {
    navigate('/AddSites');
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
        <button onClick={``}>Generate Report</button>
    </div>
    </>
  )
}
