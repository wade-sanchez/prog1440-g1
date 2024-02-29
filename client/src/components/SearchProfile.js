import React from 'react'
import TextBox from './Textbox'
import '../index.css'


export const SearchBar = ({className, btnText}) => {
  return (
    <>
    <div className='spacing'>
    <label className='EditProfileLabel'>First Name*:</label>
    <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    </div>
    <div className='spacing'>
    <label className='EditProfileLabel'>Last Name*: </label>
    <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    </div>
    <div className='spacing'>
    <label className='EditProfileLabel'>Birth Date*: </label>
    <TextBox className="comboBirthDate" tbType="date" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    </div>
    <div className='spacing'>
    <button className='small-button1' type="submit">Search</button>
    </div>
    </>
  )
}



   