import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ReturnToStaffMenu = () => {
    const navigate = useNavigate();
    const navigateToStaffMenu = () => {
        navigate('/StaffMenu');
        }
  return (
    <>
        <div>
            <button onClick={navigateToStaffMenu}>Return to Staff Menu</button>
        </div>
    </>
  )
}
