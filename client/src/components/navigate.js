import React from 'react'
import { useNavigate } from 'react-router-dom';

export const navigateTo = () => {
    const Navigate = useNavigate();

    const navigateToPage = ({navigateTo}) => {
    navigate({navigateTo});

  }
  return (
    <div>navigate</div>
  )
}
