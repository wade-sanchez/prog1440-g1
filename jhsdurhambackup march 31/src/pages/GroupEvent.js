import React from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
import Combo from '../components/ComboBox'
import TextBox from '../components/Textbox'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

export const GroupEvent = () => {
  const [SiteName, setSiteName] = useState('');
  const [ProgramName, setProgramName] = useState('');
  const [nowDate, setnowDate] = useState('');
  const [City, setCity] = useState('');
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [AttendanceCount, setAttendanceCount] = useState('');
  const [VolunteerCount, setVolunteerCount] = useState('');
  const [VolunteerHrs, setVolunteerHrs] = useState('');

//console.log(ProgramName)
//console.log(SiteName)
  const regGroupEvent = async (e)=>{

    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3001/api/groupRegister", {
          SiteName: SiteName,
          ProgramName : ProgramName,
          nowDate : nowDate,
          City: City,
          Name: Name,
          Description: Description,
          AttendanceCount: AttendanceCount,
          VolunteerCount: VolunteerCount,
          VolunteerHrs: VolunteerHrs,
        });
        console.log(response)
        // window.location.href = '/GroupEvent'       
    }
    catch(error){
      console.error("Error:", error);  

    }
};
  //console.log(SiteName);
  const navigate = useNavigate();

  const navigateToStaffMenu = () => {
    navigate('/StaffMenu');
  }
  return (
    <>
    <div className='homepage'>
    <h1 id="GroupEvent" className='headings'>Group Event Registration</h1>
    <div className='wrappers'>
        
        <div>
        <div className='spacing'><label className="label">Site:</label><Combo onChange ={e => setSiteName(e.target.value)} id="input-field" className="sites"></Combo></div>
        <div className='spacing'><label className="label">Program:</label><Combo onChange ={e => setProgramName(e.target.value)} className="programs"></Combo></div>
        <div className='spacing'><label className="label">Date:</label><TextBox onChange ={e => setnowDate(e.target.value)} className="input-field" tbType={'date'}/></div>
        </div>
        <div>   
        <div className='spacing'><label className="label">City:</label><TextBox onChange ={e => setCity(e.target.value)} className="input-field"/></div>
        <div className='spacing'><label className="label">Event Name:</label><TextBox onChange ={e => setName(e.target.value)} className="input-field" tbType={'text'}/></div>
        <div className='spacing'><label className="label">Description:</label><textarea onChange ={e => setDescription(e.target.value)} className="input-field"></textarea></div>
        </div>
        <div>
        <div className='spacing'><label className="label">Attendance Count:</label><TextBox onChange ={e => setAttendanceCount(e.target.value)} className="input-field" tbType={'number'}/></div>
        <div className='spacing'><label className="label">Volunteer Count:</label><TextBox onChange ={e => setVolunteerCount(e.target.value)} className="input-field" tbType={'number'}/></div>
        <div className='spacing'><label className="label">Total Volunteer Hours:</label><TextBox onChange ={e => setVolunteerHrs(e.target.value)} className="input-field" tbType={'number'}/></div>
        </div>
        <div>
        <div className="registration-buttons">
        <button className= "buttons" onClick={regGroupEvent}>Register Group Event</button>
        <ReturnToStaffMenu className="buttons"></ReturnToStaffMenu>
        </div>
        {/* add bottom spacing */}
        
        </div>
      </div>
    </div>
    </>
  )
}
