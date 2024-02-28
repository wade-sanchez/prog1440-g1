import React from 'react'
import { SitesButtons } from '../components/SitesButtons'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
import { Fieldset } from '../components/Fieldset'
import TextBox from '../components/Textbox'
import { SearchBar } from '../components/SearchProfile'
export const EditSites = () => {
  return (
    <div className='wrapper'>
        <div><h1 className="heading">Edit Sites</h1></div>
        <Fieldset>
        <div>
           <SitesButtons className="button2"/>
        </div>
        <label className="label1">Search entry:</label>
        {/* <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
        <button type="submit"><i class="fa fa-search">Search</i></button> */}
        <div><SearchBar/></div>
        <div><label className="label1">Edit Sites: </label><div><TextBox tbType="text"></TextBox></div></div>
        {/* <div display="none">hidden stuff</div> */}
        {/* SHOW SEARCHED ITEM HERE */}<br/>
        <button className="button1"
        // onClick={submitReview}
        >Add a New Site</button>
        <br/><br/><ReturnToStaffMenu className="button1"/>
        </Fieldset>
    </div>
  )
}