import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

export const ReturnToStaffMenu = ({className}) => {
    const navigate = useNavigate();
    const navigateToStaffMenu = () => {
        navigate('/StaffMenu');
        }
  return (
    <>
            <button className={className} onClick={navigateToStaffMenu}>Return to Staff Menu</button>
    </>
  )
}
