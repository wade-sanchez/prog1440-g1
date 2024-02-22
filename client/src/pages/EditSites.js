import React from 'react'
import { SitesButtons } from '../components/SitesButtons'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
export const EditSites = () => {
  return (
    <div className='wrapper'>
        <div><h1>Edit Sites</h1></div>
        <div>
           <SitesButtons/>
        </div>
        <ReturnToStaffMenu/>
    </div>
  )
}