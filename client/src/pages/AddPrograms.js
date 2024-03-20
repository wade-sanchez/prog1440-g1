import React, { useState, useEffect } from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';

// import sites from './SitesList';
import './AddSites.css';

export const AddPrograms = () => {


  const programs = [
    
    { id:1,name: "Clarington Youth Centres"  ,purposes: [" Social", "Life Skill","Creative Arts" ,"Recreation" ,"Volunteer"]},
    { id:2, name: "Employment Services" , purposes: [" Social", "Life Skill","Creative Arts"]},
    { id:3, name: "Housing Services" ,purposes: [" Social", "Life Skill",]},

  ];

  const [list, setList ] = useState(programs)
  const [showButton , setShowButton] = useState(false)
  const [selectedProgramId, setSelectedProgramId] = useState(null);
 


  const ChangeDisplay = (id) => {
    setSelectedProgramId(id);
  };


//   const ChangeDisplay = (div_id) =>{
//     // const container = document.getElementById(div_id);
    
//     console.log(`edit button ${div_id} was clicked`)
//     //setShowPurpose(!showPurpose);
//   }

  //Event handlers 

  const handleRemoveItem = (id) =>{
      
      setList(prevList => prevList.filter(site => site.id !== id))

  }

  return (
    <>
        <h1 className="heading">Sites and programes</h1>
        {/* <Fieldset> */}

        <h2 class='sites-heading'>Available sites :-</h2>
        
        <button class='button1'>View sites </button>
        <button class='button1'>View programes</button>
        
        
        <section class="list_section">

          <ul class="Datalist">

            {list.map( site => (
                <li key={site.id}>
                    {site.id}. {site.name}
                    <button className='button1 small' onClick={ ()=>handleRemoveItem(site.id)}>Delete</button>
                    <button className='button1 small' id={site.id} onClick={()=>ChangeDisplay(site.id)}>Edit</button>
                    
                    {selectedProgramId === site.id &&
                    <div className='purposes'>
                    <p>Purposes:</p>
                    <ul>
                    
                    {site.purposes.map( purpose => (
                      <li class='purpose_list'>{purpose} <hr/></li>
                      
                    ))}
                  </ul> 
                </div>
              }

                    <hr/>
                </li>
            ))

            }
          </ul>

         

        </section>
        
      
        <button className="button2" onClick={()=>setShowButton(!showButton)}>Add New Site</button>

        <div class='new-site' style={{display:showButton? 'flex' : 'none'}}>
       
            <label className="label1">Site name</label>
            <input name='siteName' type='text' placeholder='enter new site name' 
                      
                      
                      
                      // onChange={(e) => {
                      //   setSiteName(e.target.value);
                      // }
                      // }
          >

          </input>
          <button type='submit' onClick={()=>setShowButton(!showButton)} class='button1 small'> Create site</button>
        </div>
        
        {/* connect with backend - then to sites table in mysql */}
        <br/> 
        <ReturnToStaffMenu className="button1"/>
        {/* </Fieldset> */}
    </>
  )


  
}
