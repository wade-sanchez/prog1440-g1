import React, { useState, useEffect } from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
import '../components/style.css'
import './AddSites.css';

export const AddSites = () => {


  const sites  = [
    
    { id:1, name: "Carlington" , programes:["employment ", "sports"]},
    { id:2, name: "Durham", programes:["employment ", "sports"] },
    { id:3, name: "Ajax", programes:["employment ", "sports"] },

  ];

  const [list, setList ] = useState(sites)
  const [showButton , setShowButton] = useState(false)
  
  //Event handlers 

  const handleRemoveItem = (id) =>{
      
      setList(prevList => prevList.filter(site => site.id !== id))

  }

  return (
    <>
        <div className='homepage'>
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
                  <button className='button1 small' onClick={ ()=>handleRemoveItem(site.id)}>Delete</button> <button className='button1 small'>Edit</button>
                    <hr/>
                </li>
            ))

            }
          </ul>

         

        </section>
        
      
        <button className="button1" onClick={()=>setShowButton(!showButton)}>Add New Site</button>

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
        </div>
    </>
  )


  
}
