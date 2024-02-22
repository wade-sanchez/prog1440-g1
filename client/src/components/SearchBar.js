import React from 'react'
import TextBox from './Textbox'


export const SearchBar = () => {
  return (
    <>
    <TextBox tbType="text" placeholder="Search for entry to edit..." tbName="search"></TextBox>
    <button type="submit"><i class="fa fa-search">Search</i></button>
    </>
  )
}



   