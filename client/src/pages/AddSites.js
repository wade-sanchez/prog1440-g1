import React, { useState, useEffect } from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
import '../components/style.css'
import './AddSites.css';
import Axios from 'axios';
import Select from 'react-select';
import Switch from 'react-switch';
import { useNavigate } from "react-router-dom";

export const AddSites = () => {
  const navigate = useNavigate();

  const [sitesList, setSiteList] = useState([]);
  const [programList , setProgramList] = useState([]);
  const [showButton , setShowButton] = useState(false)
  const [selectedSiteId, setSelectedSiteId] = useState(null);
 

  //FOR CREATING SITES AND PROGRAMS
  const [newSiteName , setNewSiteName] = useState(''); 
  const[options , setNewOptions] = useState([]);
  const[selectedPrograms, setSelectedPrograms] = useState([]);
  
  const [ShowAddProgram , setShowAddProgram] = useState(false)
  
  
  useEffect(() => {
    fetchData();
  }, []);

  // FETCHING ALL DATA AT ON GO - sites and programs --
  const fetchData = async () => {
    try{
      const response = await Axios.get('http://localhost:3001/api/sites');

      const programOptions = response.data.programs.map(program => ({
        value: program.ProgramID,
        label: program.Name
      }));
      
      setSiteList(response.data.sites)
      setNewOptions(programOptions)
      
      //console.log('response programs -',options)
      //console.log(optionsPrograms)
    }
   catch(error){
    console.log("error occured in programs", error)
  }}

// FETCHING PROGRAMS SPECIFIC TO SITES
  const fetchProgram = async (id) => { 
  console.log('button was clicked')
  try{
    const response = await Axios.get(`http://localhost:3001/api/siteprograms/${id}`)
    ChangeDisplay(id)
    if (response.data.data.length > 0){
      setProgramList(response.data.data)
    }
    
    console.log(response.data.data)
    //console.log(programList)
    }
    catch(error){
      console.log("error occured fetching purposes", error)
    }}  
    
  //FOR CHANGING PROGRAM DISPLAY
  const ChangeDisplay = (id, status) => {
    setShowAddProgram(status)
    setSelectedSiteId(id);
  };

  //STORING OPTIONS 
  const handleProgramSelect = selectedOptions => {
    
    setSelectedPrograms(selectedOptions);
  };
  console.log(selectedPrograms)

//creating new site and program
const createSite = async (e)=>{
  console.log(newSiteName)
  console.log(selectedPrograms)
  try {
     const response = await Axios.post("http://localhost:3001/api/createSites",{
       newSiteName  : newSiteName,
       selectedPrograms: selectedPrograms
       });
      //  setShowButton(false);

       console.log(response)
       alert("program added")
      
   }
   catch(error){
     console.error("Error while creating site", error);  
     
   }

};


//CREATING PROGRAM TO EXISTING SITES
const addprogram = async(siteID) =>{
  console.log(siteID)
  console.log(selectedPrograms)
  try {
      const response = await Axios.post("http://localhost:3001/api/addprograms", {
        selectedPrograms: selectedPrograms,
        siteID: siteID    
      });
      
    alert('purpose added')
    window.location.href = '/addsites'
        
  }
  catch(error){
    console.error("Error while adding program", error);    
  }
}

//CHANGING STATUS FOR SITES 
const toggleActivationSites = async (siteID, siteStatus) => {
  try {
    // Make a request to your backend to update the activation state
    const response = await Axios.put('http://localhost:3001/api/sites/activate', {
      newSiteStatus : !siteStatus, // Toggle the current state
      siteID: siteID
    });

    fetchData() //updating values
   
  } catch (error) {
    console.error('Error toggling activation:', error);
  }
};

//CHANGING RUNNING STATUS FOR SPECIFIC PROGRAMS
const toggleActivationJoins = async (joinId, runningStatus,siteid) => {
  try {
    // Make a request to your backend to update the activation state
    const response = await Axios.put('http://localhost:3001/api/sites/programs/activate', {
        newRunningStatus: !runningStatus,      
        joinId: joinId
    });

    fetchProgram(siteid) //updating values
   
  } catch (error) {
    console.error('Error toggling activation for program:', error);
  }
};




 return (
    <>
      <div className='homepage'>    
        <h1 className="heading-new">Sites and Programs</h1>
        <h2 class='sites-heading'>Available Sites:-</h2> 
        
        <section class="list_container">

          <ul class="Datalist">
            
            {sitesList.map( site  => (
              <li key={site.siteID}>
                
                <div className='data-items'>
                  
                  <div className='items-titles'>  
                    {site.siteID}. {site.site_Name}
                  </div>  

                  <div className= 'item-buttons'> 
                    <div><button className='button1 small' onClick={()=>fetchProgram(site.siteID)}>Edit</button></div>
                    
                    <div>
                      <label>
                        <Switch
                          onChange={()=>{toggleActivationSites(site.siteID, site.site_Active)}}
                          checked={site.site_Active}
                          onColor="#86d3ff"
                          onHandleColor="#2693e6"
                          handleDiameter={24}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                          height={16}
                          width={40}
                          className="react-switch"
                        />
                        <span>{site.site_Active ? 'Active' : 'Inactive'}</span>
                      </label> 
                    </div>
                  </div>
                </div>
                  
                  {selectedSiteId === site.siteID &&

                  <div className='childItemContainers'>
                    <hr/>
                    <div className='childItems'>
                      <div>               
                      <p>Programs:</p>
                      <ul>
                        {programList.map( item => (
                          <li key={item.program.ProgramID} class='purpose_list'> 
                           
                          <div className='purpose_list_items'>

                            <div>{item.program.Name}</div>
                            <div> 
                              <label>
                                    <Switch
                                      onChange={()=>{toggleActivationJoins(item.JoinID, item.runningStatus, item.siteID)}}
                                      checked={item.runningStatus}
                                      onColor="#86d3ff"
                                      onHandleColor="#2693e6"
                                      handleDiameter={24}
                                      uncheckedIcon={false}
                                      checkedIcon={false}
                                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                      height={16} 
                                      width={40}
                                      className="react-switch"
                                    />
                                    <span>{item.runningStatus? 'Running' : 'Inactive'}</span>
                                  </label>
                              </div>
                          </div> 
                          <hr/>
                          </li>
                        ))}
                        </ul>
                      </div>
                      
                      <div className='childItemButtons'>
                        <div><button className="button1" type='button' onClick={()=>setShowAddProgram(!ShowAddProgram)}> Add program</button></div>
                        <div><button className='button1' onClick={()=>{ChangeDisplay(!ShowAddProgram)}}>Close</button> </div> 
                      </div>
                      
                  </div>
                        
                  <form className='newSection' onSubmit={()=>{addprogram(site.siteID)} }style={{display:ShowAddProgram? 'flex' : 'none'}}> 
                    
                    <label>
                      <b className='label'>Select programs</b><br/>
                      <Select placeholder="Select programs aligned" isMulti options={options} value={selectedPrograms} onChange={handleProgramSelect} required/>
                    </label>
                    <br/>
                    <button class='button1' type="submit" > submit </button>
                  </form>
                     
                  </div> 
                  }
                  <hr/>
              </li>
              ))

            }
          </ul>
        </section>
        
        <button className="button1" onClick={()=>setShowButton(!showButton)}>Add New Site</button>
        <div className='new_container' style={{display:showButton? 'flex' : 'none'}}>
            <form onSubmit={createSite} className='new-form'>
                  
                  <div>
                    <label className="label">Site name</label>
                    <input className="input-field" name='programName' type='text' placeholder='enter new program title' onChange ={e => setNewSiteName(e.target.value)} required />
                    <br/>
                    <label>
                      <label className='label'>Select programs</label>
                      <Select placeholder="Select programs aligned" isMulti options={options} value={selectedPrograms} onChange={handleProgramSelect} required/>
                    </label>
                    <br/>
                    <br/>
                  </div>

                <div>
                  <button type='submit' class='button1'> Create site</button>  
                </div>
                
                <div><button className='button1' onClick={()=>setShowButton(!showButton)}>Close</button> </div>
            </form>

        </div>
      
        
        
        {/* connect with backend - then to sites table in mysql */}
        <br/>
        <div>
          <button class='button1' onClick={() => {navigate('/addprograms')}}>View Programs </button>
        </div>
        <ReturnToStaffMenu className="button1"/>
        
      
      </div>
    </>
  )


  
}
