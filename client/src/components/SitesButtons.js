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
            <ReusableButton btnText={"Add Sites"} className={className} onClick={navigateToAddSites}/>
        </div>
        <br/>
        <div>
            <ReusableButton btnText={"Edit Sites"} className={className} onClick={navigateToEditSites}/>
        </div>
        {/* <div> */}
            {/* <button onClick={navigateToRemoveSites}>Delete Sites</button> */}
        {/* </div> */}
        <br/>
    </>
  )
}
