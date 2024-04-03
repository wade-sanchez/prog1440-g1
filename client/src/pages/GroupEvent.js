import React from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
import Combo from '../components/ComboBox'
import TextBox from '../components/Textbox'
import { useNavigate } from 'react-router-dom'
import { useState , useEffect} from 'react'
import Axios from 'axios'

export const GroupEvent = () => {
  const [siteStatus, setSiteStatus] = useState('');
  const [progStatus, setProgStatus] = useState('');
  const [nowDate, setnowDate] = useState('');
  const [City, setCity] = useState('');
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [AttendanceCount, setAttendanceCount] = useState('');
  const [VolunteerCount, setVolunteerCount] = useState('');
  const [VolunteerHrs, setVolunteerHrs] = useState('');

//console.log(ProgramName)
//console.log(SiteName)
const[siteData, setSiteData] = useState([]);
    const[programData, setProgramData] = useState([]);
    const[selectedSite, setSelectedSite] = useState([]);
    const[selectedProgram, setSelectedProgram] = useState([]);
    useEffect(() => {
        var link1 = 'http://localhost:3001/sites'
        // var link2 = link1+className
        // console.log(className)
        
        fetch(link1)
        .then(res1 => res1.json())
        .then(siteData => setSiteData(siteData))
        .catch(err1 => console.log(err1));

        var link2 = 'http://localhost:3001/programs'
        // var link2 = link1+className
        // console.log(className)
        fetch(link2)
        .then(res2 => res2.json())
        .then(programData => setProgramData(programData))
        .catch(err2 => console.log(err2));

        
    }, [])

const selectSite= () => {
  var siteName = sessionStorage.getItem("siteName")
  //initialize session storate
  siteName=selectedSite;
  //update session storage
  sessionStorage.setItem("siteName", siteName);

    return(
siteData.map(siteData => 
    (<option key={siteData.id} value={siteData.id}>{siteData.Program}</option>))
)}

const selectProgram= () => {
  var progName = sessionStorage.getItem("progName");
  //initialize session storate
      progName=selectedProgram;
    //update session storage
    sessionStorage.setItem("progName", progName);
  return(
    filteredProg.map(filteredProg => 
      (<option key={filteredProg.id} value={filteredProg.id}>{filteredProg.Program}</option>))
)}

const [filteredProg, setFilteredProg] = useState(programData);
const selectP = async (e)=>{
  setSiteStatus([])
  setProgStatus([])
  e.preventDefault();
  try {
    const response = await Axios.post("http://localhost:3001/PostPrograms", {
        selectedSite: selectedSite
      });
      //const object = array.find(obj => obj.id === 3);
      const progVar = response.data;
      console.log(progVar)
      // setProgramData => response.data;
     // setProgramData(programData => programData.filter((progVar)=> programData.id != progVar.id ))
      //console.log(programData)
      setFilteredProg(programData.filter(function(cItem) {
        return progVar.find(function(aItem) {
          return cItem.id === aItem.id
        })
      }))
      console.log(filteredProg)
    }
  catch(error){
    console.error("Error:", error);  

  }
}



  console.log(selectedSite)
  console.log(selectedProgram)
  
// const checkInput = () => {
//   if (selectedSite.length===0 && selectedProgram===0){
//     console.log("Hello")
//     return
//   }
//     regGroupEvent()
// }

  const regGroupEvent = async (e)=>{
    
    e.preventDefault();
    try {
      if (selectedSite.length===0){
        setSiteStatus("Select Site!")
        window.scrollTo({top:0, behavior:'smooth'})
            return
        }
        if (selectedProgram.length===0){
          setProgStatus("Select Program!")
          window.scrollTo({top:0, behavior:'smooth'})
          return
        }
      const response = await Axios.post("http://localhost:3001/api/groupRegister", {
          SiteName: selectedSite,
          ProgramName : selectedProgram,
          nowDate : nowDate,
          City: City,
          Name: Name,
          Description: Description,
          AttendanceCount: AttendanceCount,
          VolunteerCount: VolunteerCount,
          VolunteerHrs: VolunteerHrs,
        });
        console.log(response)
        alert("Group Event Recorded!")
        window.location.href = '/GroupEvent'       
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
    <form onSubmit={regGroupEvent} className='wrappers'>
        
        <div>
        <div>
            <label class="lblHome" for="siteSelect"><b> Site Selection: </b></label>
            {/* <Combo className="sites" dataType="data" id="siteSelect" value={selectProgram()} ></Combo> */}
            <select className="sites" required dataType="data" id="siteSelect" onClick={selectP} onChange ={e => setSelectedSite(e.target.value)}><option>Select option:</option>{selectSite()}</select>
            <p style={{textAlign:'left'}} className='error_message'>{siteStatus}</p>
         </div>
          <div>
            <label class="lblHome" for="programSelect"> <b>Program Selection:</b> </label>
            {/* <Combo name="programs" className="programs" dataType="siteData" id="programSelect"> </Combo> */}
            <select className="sites" required dataType="data" onClick={selectP} onChange ={e => setSelectedProgram(e.target.value)} id="programSelect"><option id="a">Select option:</option>{selectProgram()}</select>
            <p style={{textAlign:'left'}} className='error_message'>{progStatus}</p>
          </div>
        {/* <div className='spacing'><label className="label">Site:</label><Combo onChange ={e => setSiteName(e.target.value)} id="input-field" className="sites"></Combo></div>
        <div className='spacing'><label className="label">Program:</label><Combo onChange ={e => setProgramName(e.target.value)} className="programs"></Combo></div> */}
        <div className='spacing'><label className="label">Date:</label><TextBox required onChange ={e => setnowDate(e.target.value)} className="input-field" tbType={'date'}/></div>
        </div>
        <div>   
        <div className='spacing'><label className="label">City:</label><TextBox required onChange ={e => setCity(e.target.value)} className="input-field"/></div>
        <div className='spacing'><label className="label">Event Name:</label><TextBox required onChange ={e => setName(e.target.value)} className="input-field" tbType={'text'}/></div>
        <div className='spacing'><label className="label">Description:</label><textarea required onChange ={e => setDescription(e.target.value)} className="input-field"></textarea></div>
        </div>
        <div>
        <div className='spacing'><label className="label">Attendance Count:</label><TextBox required onChange ={e => setAttendanceCount(e.target.value)} className="input-field" tbType={'number'}/></div>
        <div className='spacing'><label className="label">Volunteer Count:</label><TextBox required onChange ={e => setVolunteerCount(e.target.value)} className="input-field" tbType={'number'}/></div>
        <div className='spacing'><label className="label">Total Volunteer Hours:</label><TextBox required onChange ={e => setVolunteerHrs(e.target.value)} className="input-field" tbType={'number'}/></div>
        </div>
        <div>
        <div className="registration-buttons">
        <button className= "buttons" type="submit">Register Group Event</button>
        <ReturnToStaffMenu className="buttons"></ReturnToStaffMenu>
        </div>
        {/* add bottom spacing */}
        
        </div>
      </form>
    </div>
    </>
  )
}
