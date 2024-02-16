import React, { useState, useEffect } from 'react'
import { SitesButtons } from '../components/SitesButtons'
import Axios from 'axios';

export const AddSites = () => {
  // const[siteName, addSiteName] = useState("");
  // const submitReview = () => {
  //   Axios.post('http://localhost:3001/')
  // }
  return (
    <>
        <div><h1>Add Sites</h1></div>
        <div>
           <SitesButtons/>
        </div>
        <label>Add a New Site: </label>
        <input name='siteName' type='text' 
        // onChange={(e) => {
        //   setSiteName(e.target.value);
        // }
        // }
        ></input>
        <button
        // onClick={submitReview}
        >Add a New Site</button>
        {/* connect with backend - then to sites table in mysql */}
    </>
  )
}
