import React from 'react'
import TextBox from './Textbox'
import './style.css'
import { useState } from 'react'
import Axios from 'axios'

export const SearchBar = ({className, btnText}) => {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    // const [purpose, setPurpose]=useState('')
    const [message, setMessage]=useState('')

    const register_count = async (e)=>{
        e.preventDefault()
        try{
          const response = await Axios.post("http://localhost:3001/searchProfile",{
            firstName: firstName,
            lastName:lastName,
            birthDate: birthDate,
            // purpose: purpose
          });
          console.log(response.data)
          setMessage(response.data.message)
          console.log(firstName)
        }
        catch(error){
          console.log(error)
        }
    }

  return (
    <>
    <form onSubmit={register_count}>
    <div className='spacing'>
    <label className='label' >First Name*:</label>
    <TextBox className="input-field" tbType="text" onChange ={e => setFirstName(e.target.value)} placeholder="Search for entry to edit..." tbName="search"></TextBox>
    </div>
    <div className='spacing'>
    <label className='label' >Last Name*: </label>
    <TextBox className="input-field" tbType="text" onChange ={e => setLastName(e.target.value)} placeholder="Search for entry to edit..." tbName="search"></TextBox>
    </div>
    <div className='spacing'>
    <label className='label' >Birth Date*: </label>
    <TextBox className="input-field" tbType="date" onChange ={e => setBirthDate(e.target.value)} placeholder="Search for entry to edit..." tbName="search"></TextBox>
    </div>
    <div className='spacing'>
    <button className='buttons' type="submit">Search</button>
    </div>
    </form>
    </>
  )
}



   