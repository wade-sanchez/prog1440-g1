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
    <div className='wrapper'>
        <h1>Group Event Registration</h1>
        <div><div><label>Site</label></div><Combo></Combo></div>
        <div><div><label>Program</label></div><Combo></Combo></div>
        <div><div><label>Date</label></div><TextBox tbType={'date'}/></div>
        <div><div><label>City</label></div><Combo></Combo></div>
        <div><div><label>Event Name</label></div><TextBox tbType={'text'}/></div>
        <div><div><label>Description</label></div><textarea>asdasdsad</textarea></div>
        <div><div><label>Attendance Count</label></div><TextBox tbType={'number'}/></div>
        <div><div><label>Volunteer Count</label></div><TextBox tbType={'number'}/></div>
        <div><div><label>Total Volunteer Hours</label></div><TextBox tbType={'number'}/></div>
        <button onClick={regGroupEvent}>Register Group Event</button>
        <ReturnToStaffMenu/>
        {/* add bottom spacing */}
    </div>
  )
}
