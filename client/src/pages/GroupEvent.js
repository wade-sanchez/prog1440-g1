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
        <h1 className='heading'>Group Event Registration</h1>
        <div ><div ><label className='label1'>Site:</label></div><Combo></Combo></div>
        <div><div><label className='label1'>Program:</label></div><Combo></Combo></div>
        <div><div><label className='label1'>Date:</label></div><TextBox tbType={'date'}/></div>
        <div><div><label className='label1'>City:</label></div><Combo></Combo></div>
        <div><div><label className='label1'>Event Name:</label></div><TextBox tbType={'text'}/></div>
        <div><div><label className='label1'>Description:</label></div><textarea>asdasdsad</textarea></div>
        <div><div><label className='label1'>Attendance Count:</label></div><TextBox tbType={'number'}/></div>
        <div><div><label className='label1'>Volunteer Count:</label></div><TextBox tbType={'number'}/></div>
        <div><div><label className='label1'>Total Volunteer Hours:</label></div><TextBox tbType={'number'}/></div>
        <br/><br/>
        <div><button  className= "button1"onClick={regGroupEvent}>Register Group Event</button></div>
        <br/>
        <div><ReturnToStaffMenu className="button1"></ReturnToStaffMenu></div>
        {/* add bottom spacing */}
    </div>
  )
}
