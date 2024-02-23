//page that is shown when youth is prompted to change address
import React from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
import TextBox from '../components/Textbox'
import { Fieldset } from '../components/Fieldset'
import { SearchBar } from '../components/SearchBar'

export const EditAddress = () => {
  return (
    <div>
      <h1 className= "heading">Edit Youth Address Information</h1>
      <Fieldset>
      <div className="input-box"> <label className='label1'>Search:</label></div>
    {/* <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    <SearchBar/>
    {/* display name */}
    <div className="input-box"><label className='label1' >Address:</label></div>
    <TextBox tbType="text"></TextBox>
    <br/><br/><div>
    <button className="button1"
        // onClick={submitReview}
        >Edit Address</button></div>
    <br/>
      <ReturnToStaffMenu className="button1"/>
      </Fieldset>
    </div>
  )
}
