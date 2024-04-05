import React, { useState, useEffect } from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
import '../components/style.css';
import Axios from 'axios';
import Newpurpose from '../components/addInputPurpose';
import Switch from 'react-switch';


export const AddPrograms = () => {

  
  const [programsList , setProgramsList] = useState([]);
  const [showButton , setShowButton] = useState(false)
  const [ShowAddPurpose , setShowAddPurpose] = useState(false)
  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [purposeList , setPurposeList] = useState([{Title: 'Nothing to show'}]);
  const [inputPurpose, setInputPurpose] = useState([{ shortTitle: '', Title: '' }])
  
  //varliable used in creating new section
  const [selectedPurposes, setSelsectedPurposes] = useState([]);
  const [programName, SetProgramName] = useState('');
  const [message,setMessage] = useState('');        
  
  // THIS CAN BE USED IF WE NEED TO GET ALL DATA AT ONCE AND THEN RENDER CONDITONALLY
  const ChangeDisplay = (id,status) => {
    setShowAddPurpose(status)
    setSelectedProgramId(id);
  };

  const closeDisplay = () =>{
    setSelectedProgramId('');
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  // FETCHING ALL DATA AT ON GO - PURPOSES AND PROGRAMS --
  const fetchData = async () => {
    try{
      const response = await Axios.get('http://localhost:3001/api/Programs');
      setProgramsList(response.data.programs)    
    }
   catch(error){
    console.log("error occured in programs", error)
  }}

  // FETCHING PURPOSE SPECFICIFLY TO PROGRAMS
  const fetchPurpose = async (id) => {
  try{
    const response = await Axios.get(`http://localhost:3001/api/Purposes/${id}`)
    ChangeDisplay(id)
    if (response.data.purposes.length > 0){
      setPurposeList(response.data.purposes)
    }
    console.log(purposeList)
    }
    catch(error){
      console.log("error occured fetching purposes", error)
    }}

//creating nre program and purposes
const createProgram = async (e)=>{
  console.log(programName)
  console.log(inputPurpose)
  try {
     const response = await Axios.post("http://localhost:3001/api/createProgram", {
       programName : programName,
       inputPurpose: inputPurpose
       });
       setShowButton(false);

       console.log(response)
       alert("program added")
       setInputPurpose=([{ shortTitle: '', Title: '' }])
       //fetchData()      
   }
   catch(error){
     console.error("Error while creating program and purpose", error);  
     
   }
};

//ADDING PURPOSE TO EXISTING 
const addPurpose = async (programid)=>{
  console.log(inputPurpose)
  try {
       const response = await Axios.post("http://localhost:3001/api/addPurpose", {
       inputPurpose: inputPurpose,
       programid: programid
       });
      //setInputPurpose=([{ shortTitle: '', Title: '' }])
      //fetchPurpose() 
      alert('purpose added')     
   }
   catch(error){
     console.error("Error while creating purpose", error);  
     
   }
};

//INPUT CHANGES IN NEW PROGRAM AND PURPOESE
const handlePurposeInputChange = (index, field, value) => {
  const newInputPurpose = [...inputPurpose];
    newInputPurpose[index][field] = value;
    setInputPurpose(newInputPurpose);
};

//ADDING MORE INPUT FIELDS
const handleAddInput = () =>{
      setInputPurpose([...inputPurpose, { shortTitle: '', Title: '' }]);
      console.log(`added new input field with count`)
}


const toggleActivation = async (programId, programStatus) => {
  try {
    // Make a request to your backend to update the activation state
    const response = await Axios.put('http://localhost:3001/api/programs/activate', {
      newProgramStatus : !programStatus, // Toggle the current state
      programId: programId
    });
    //console.log(response.data);
    fetchData() // Log the response from the backend
    //setIsActive(prevState => !prevState); // Toggle the state locally
  } catch (error) {
    console.error('Error toggling activation:', error);
  }
};

//CHANGING STATUS FOR PURPOSES
const toggleActivationPurpose = async (purposeId, reasonStatus,programId) => {
  try {
    // Make a request to your backend to update the activation state
    const response = await Axios.put('http://localhost:3001/api/purpose/activate', {
      newReasonStatus : !reasonStatus, // Toggle the current state
      purposeId: purposeId
    });
    fetchPurpose(programId)
    //console.log(response.data);
    //fetchData() // Log the response from the backend
    //setIsActive(prevState => !prevState); // Toggle the state locally
  } catch (error) {
    console.error('Error toggling activation:', error);
  }
};


  return (
    <>
      <div className='homepage'>    
        <h1 className="heading-new">Programs and Purposes</h1>
        <h2 className='sites-heading'>Available programs :-</h2> 
        
        <section className="list_container">

          <ul className="Datalist">
            {programsList.map( program => (
              
              <li key={program.ID}>
                
                <div className='data-items'> 
                    <div className='items-titles'>  
                      {program.ID}. {program.Name}
                    </div>

                    <div className= 'item-buttons'>
                      
                      <div><button className='button1 small' id={program.ID} onClick={()=> fetchPurpose(program.ID)}>Edit</button></div>
                      
                      <div>
                        <label>
                          <Switch
                            onChange={()=>{toggleActivation(program.ID,program.status)}}
                            checked={program.status}
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
                          <span>{ program.status ? 'Active' : 'Inactive'}</span>
                        </label> 
                      </div>
                    </div>
                  </div>
                 
                  {selectedProgramId === program.ID &&
                  <div className='childItemContainers'>
                    <hr/>
                    <div class='childItems'>                  
                      <div> 
                        <p>Purposes:</p>
                        <ul>
                          {purposeList.map( purpose => (
                            <li key={purpose.purposeID} class='purpose_list' value={purpose.Title}>{purpose.Title}
                              <label> 
                                  <Switch
                                    onChange={()=>{toggleActivationPurpose(purpose.purposeID,purpose.purpose_Active,program.ID)}}
                                    checked={purpose.purpose_Active}
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
                                  /><span>{purpose.purpose_Active? 'Active' : 'Inactive'}</span>
                                </label> 
                              <hr/>
                           </li>   
                          ))}
                        </ul>
                      </div>
                    
                      <div className='childItemButtons'>
                        <div><button className="button1" type='button' onClick={()=>setShowAddPurpose(!ShowAddPurpose)}> Add purpose</button></div>
                        <div><button className='button1' id={program.ID} onClick={()=>{closeDisplay(!ShowAddPurpose)}}>Close</button> </div> 
                      </div>
                  </div>                     
                    
                  <form className='newSection' style={{display:ShowAddPurpose? 'flex' : 'none'}}>
                      <Newpurpose
                          shortTitle={inputPurpose[0].shortTitle}
                          Title={inputPurpose[0].Title}
                          onShortTitleChange={(value) => handlePurposeInputChange(0, 'shortTitle', value)}
                          onTitleChange={(value) => handlePurposeInputChange(0, 'Title', value)}
                        />

                      <button class='button1' type='submit' onClick={()=>{addPurpose(program.ID)}}> Create program</button>
                    </form>
                
                    
                  </div>
                  }
                  <hr/>
              </li>
            ))

            }
          </ul>
        </section>
      
        <button className="button1" onClick={()=>setShowButton(!showButton)}>Create New Program</button>

        <div className='new_container' style={{display:showButton? 'flex' : 'none'}}>
          
          <form className='new-form' onSubmit={createProgram}>
              
              <div>
                <label className="label">Program name</label>
                <input className="input-field" name='programName' type='text' placeholder='enter new program title' onChange ={e => SetProgramName(e.target.value)} required />
                <p> <b>Enter purpose details </b></p>
                <hr/>
              </div>
              
              <div>
                <Newpurpose
                  shortTitle={inputPurpose[0].shortTitle}
                  Title={inputPurpose[0].Title}
                  onShortTitleChange={(value) => handlePurposeInputChange(0, 'shortTitle', value)}
                  onTitleChange={(value) => handlePurposeInputChange(0, 'Title', value)}
                />
                <hr/>
              </div>

              {inputPurpose.slice(1).map((field, index) => ( // Added index as the second argument
                <div key={index + 1} className='morepurpose'> 
                  <Newpurpose
                      shortTitle={field.shortTitle}
                      Title={field.Title}
                      onShortTitleChange={(value) => handlePurposeInputChange(index + 1, 'shortTitle', value)}
                      onTitleChange={(value) => handlePurposeInputChange(index + 1, 'Title', value)}
                    /> 
                </div> 
              ))}
              
              <button type="button" onClick={handleAddInput}>add more purpose</button>  
              <br/>    
              <div>
                <button type='submit' class='button1'> Create program</button>
              </div>
              <div><button className='button1' onClick={()=>setShowButton(!showButton)}>Close</button> </div>    
          </form>
        </div>
        <br/>
        <div>
         <button class='button1' onClick={() => {window.location.href = '/addsites'}}>View sites </button>
        </div> 
        <ReturnToStaffMenu className="button1"/>
        
       
      </div>
    </>
  )

}
