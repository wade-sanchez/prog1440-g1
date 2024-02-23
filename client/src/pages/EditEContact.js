//page that shows when Youth is prompted to change address after some months
import React from 'react'
import { ReturnToStaffMenu } from '../components/ReturnToStaffMenuBtn'
// import Combo from '../components/ComboBox'
import TextBox from '../components/Textbox'
import { SearchBar } from '../components/SearchBar'

export const EditEContact = () => {
  return (
    <div>
      <h1 className='heading'>Edit Youth Emergency Contact Information</h1>
    <div className="input-box"> <label className='label1'>Search:</label></div>
    {/* <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <button type="submit"><i class="fa fa-search">Search</i></button> */}
    <SearchBar/>
    {/* display name */}
    <div  className="input1"><label className='label1'>Emergency Contact Person:</label></div>
    <TextBox tbType="text"></TextBox>
    <div  className="input1"><label className='label1' >Emergency Contact #:</label></div>
    <TextBox tbType="text" ></TextBox><br/><br/>
    <div><button className="button1">Edit Youth Emergency Contact</button></div>
    <br/> <ReturnToStaffMenu className="button1"/>
    </div>
  )
}
