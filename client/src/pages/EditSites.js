import React from 'react'
import { SitesButtons } from '../components/SitesButtons'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
import { Fieldset } from '../components/Fieldset'
import TextBox from '../components/Textbox'
import { SearchBar } from '../components/SearchBar'
export const EditSites = () => {
  return (
    <div className='wrapper'>
        <div><h1>Edit Sites</h1></div>
        <Fieldset>
        <div>
           <SitesButtons/>
        </div>
        <div>Search entry:</div>
        {/* <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
        <button type="submit"><i class="fa fa-search">Search</i></button> */}
        <SearchBar/>
        <div><label>Edit Sites: </label><TextBox tbType="text"></TextBox></div>
        {/* <div display="none">hidden stuff</div> */}
        {/* SHOW SEARCHED ITEM HERE */}
        <button
        // onClick={submitReview}
        >Add a New Site</button>
        <ReturnToStaffMenu/>
        </Fieldset>
    </div>
  )
}