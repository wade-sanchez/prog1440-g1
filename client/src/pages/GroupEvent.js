import React from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
import Combo from '../components/ComboBox'
import TextBox from '../components/Textbox'
import { useNavigate } from 'react-router-dom'

export const GroupEvent = () => {
  const regGroupEvent = () => {
    alert("Group Event Registered!");
    navigateToStaffMenu();
  }
  const navigate = useNavigate();

  const navigateToStaffMenu = () => {
    navigate('/StaffMenu');
  }
  return (
    <>
    <h1 id="GroupEvent" className='headings'>Group Event Registration</h1>
    <div className='wrappers'>
        
        <div>
        <div className='spacing'><label className="label">Site:</label><Combo className="input-field"></Combo></div>
        <div className='spacing'><label className="label">Program:</label><Combo className="input-field"></Combo></div>
        <div className='spacing'><label className="label">Date:</label><TextBox className="input-field" tbType={'date'}/></div>
        </div>
        <div>   
        <div className='spacing'><label className="label">City:</label><Combo className="input-field"></Combo></div>
        <div className='spacing'><label className="label">Event Name:</label><TextBox className="input-field" tbType={'text'}/></div>
        <div className='spacing'><label className="label">Description:</label><textarea className="input-field">asdasdsad</textarea></div>
        </div>
        <div>
        <div className='spacing'><label className="label">Attendance Count:</label><TextBox className="input-field" tbType={'number'}/></div>
        <div className='spacing'><label className="label">Volunteer Count:</label><TextBox className="input-field" tbType={'number'}/></div>
        <div className='spacing'><label className="label">Total Volunteer Hours:</label><TextBox className="input-field" tbType={'number'}/></div>
        </div>
        <div>
        <div className="registration-buttons">
        <button className= "buttons" onClick={regGroupEvent}>Register Group Event</button>
        <ReturnToStaffMenu className="buttons"></ReturnToStaffMenu>
        </div>
        {/* add bottom spacing */}
        
    </div>
    
      
    </div>
    </>
  )
}
