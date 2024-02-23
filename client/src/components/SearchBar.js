import React from 'react'
import TextBox from './Textbox'
import '../index.css'


export const SearchBar = ({className}) => {
  return (
    <>
    <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <button className={className} type="submit"><i class="fa fa-search">Search</i></button>
    </>
  )
}



   