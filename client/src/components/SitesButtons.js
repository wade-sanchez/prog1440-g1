import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SitesButtons = ({className}) => {
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
            <button className={className} onClick={navigateToAddSites}>Add Sites</button>
        </div>
        <br/>
        <div>
            <button className={className} onClick={navigateToEditSites}>Edit Sites</button>
        </div>
        {/* <div> */}
            {/* <button onClick={navigateToRemoveSites}>Delete Sites</button> */}
        {/* </div> */}
        <br/>
    </>
  )
}
