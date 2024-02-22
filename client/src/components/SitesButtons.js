import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SitesButtons = () => {
    const navigate = useNavigate();
    const navigateToAddSites = () => {
        navigate('/AddSites');
        }
    const navigateToEditSites = () => {
        navigate('/EditSites');
        }
    // const navigateToRemoveSites = () => {
        // navigate('/RemoveSites');
        // }
  return (
    <>
        <div>
            <button onClick={navigateToAddSites}>Add Sites</button>
        </div>
        <div>
            <button onClick={navigateToEditSites}>Edit Sites</button>
        </div>
        {/* <div> */}
            {/* <button onClick={navigateToRemoveSites}>Delete Sites</button> */}
        {/* </div> */}
    </>
  )
}
