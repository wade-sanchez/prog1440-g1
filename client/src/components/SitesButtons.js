import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReusableButton from './Button';

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
            <ReusableButton className={className} onClick={navigateToAddSites}>Add Sites</ReusableButton>
        </div>
        <br/>
        <div>
            <ReusableButton className={className} onClick={navigateToEditSites}>Edit Sites</ReusableButton>
        </div>
        {/* <div> */}
            {/* <button onClick={navigateToRemoveSites}>Delete Sites</button> */}
        {/* </div> */}
        <br/>
    </>
  )
}
