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
    <h1 className='heading'>Group Event Registration</h1>
    <div className='wrapper-registration'>
        
        <div>
        <div><label className="EditProfileLabel">Site:</label><Combo className="comboboxReg"></Combo></div>
        <div><label className="EditProfileLabel">Program:</label><Combo className="comboboxReg"></Combo></div>
        <div><label className="EditProfileLabel">Date:</label><TextBox className="comboboxReg" tbType={'date'}/></div>
        </div>
        <div>   
        <div><label className="EditProfileLabel">City:</label><Combo className="comboboxReg"></Combo></div>
        <div><label className="EditProfileLabel">Event Name:</label><TextBox tbType={'text'}/></div>
        <div><label className="EditProfileLabel">Description:</label><textarea>asdasdsad</textarea></div>
        </div>
        <div>
        <div><label className="EditProfileLabel">Attendance Count:</label><TextBox tbType={'number'}/></div>
        <div><label className="EditProfileLabel">Volunteer Count:</label><TextBox tbType={'number'}/></div>
        <div><label className="EditProfileLabel">Total Volunteer Hours:</label><TextBox tbType={'number'}/></div>
        </div>
        
        
    </div>
    <div className="registration-buttons">
      <div>
        <button  className= "button1"onClick={regGroupEvent}>Register Group Event</button>
      </div>
        <div><ReturnToStaffMenu className="button1"></ReturnToStaffMenu></div>
        {/* add bottom spacing */}
    </div>
    </>
  )
}
