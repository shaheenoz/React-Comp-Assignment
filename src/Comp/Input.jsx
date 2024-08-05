import React from 'react'
import './Input.css'
function Input({placeholder}) {
  return (
    <input className='Input'
     type="text"
     placeholder={placeholder}
     
      />
  )
}

export default Input
