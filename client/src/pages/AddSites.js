import React from 'react'
import { SitesButtons } from '../components/SitesButtons'

export const AddSites = () => {
  return (
    <>
        <div><h1>Add Sites</h1></div>
        <div>
           <SitesButtons/>
        </div>
        <label>Add a New Site: </label>
        <input type='text'></input>
        <button>Add a New Site</button>
        {/* connect with backend - then to sites table in mysql */}
    </>
  )
}
