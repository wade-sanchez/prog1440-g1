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
    <TextBox tbType="date" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <br/>
    <button className={className} type="submit"><i class="fa fa-search">Search</i></button>
    </>
  )
}



   