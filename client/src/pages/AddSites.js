import React, { useState, useEffect } from 'react'
import { SitesButtons } from '../components/SitesButtons'
// import Axios from 'axios';
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn';
import { Fieldset } from '../components/Fieldset';

export const AddSites = () => {
  // const[siteName, addSiteName] = useState("");
  // const submitReview = () => {
  //   Axios.post('http://localhost:3001/')
  // }
  return (
    <>
        <div><h1 className="heading">Add Sites</h1></div>
        {/* <Fieldset> */}
        <div>
           <SitesButtons className="button2" btnText="Test"/>
        </div>
        <label className="label1">Add a New Site: </label>
        <div><input name='siteName' type='text' 
        // onChange={(e) => {
        //   setSiteName(e.target.value);
        // }
        // }
        ></input></div><br/>
        <button className="button1"
        // onClick={submitReview}
        >Add</button>
        {/* connect with backend - then to sites table in mysql */}
        <br/> <br/>
        <ReturnToStaffMenu className="button1"/>
        {/* </Fieldset> */}
    </>
  )
}
