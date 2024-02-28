import React from 'react'
import TextBox from './Textbox'
import '../index.css'


export const SearchBar = ({className, btnText}) => {
  return (
    <>
    <label className='EditProfileLabel'>First Name*:</label>
    <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <br/>
    <label className='EditProfileLabel'>Last Name*: </label>
    <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <br/>
    <label className='EditProfileLabel'>Birth Date*: </label>
    <TextBox className="comboBirthDate" tbType="date" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <br/>
    <div>
    <button type="submit"><i class="fa fa-search">Search</i></button>
    </div>
    </>
  )
}



   