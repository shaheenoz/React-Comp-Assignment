import React from 'react'
import './CommonBtn.css'
function CommonBtn(props) {
  return (
      <button>{props.Label ?? 'ClickMe'}</button>
  )
}

export default CommonBtn
